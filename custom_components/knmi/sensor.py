"""Sensor platform for knmi."""
from homeassistant.const import CONF_NAME
from .const import DEFAULT_NAME, DOMAIN, SENSORS
from .entity import KnmiEntity


async def async_setup_entry(hass, entry, async_add_devices):
    """Setup sensor platform."""
    coordinator = hass.data[DOMAIN][entry.entry_id]

    sensors: list[KnmiSensor] = []
    for sensor in SENSORS:
        sensors.append(
            KnmiSensor(
                coordinator,
                entry,
                sensor.get("name", None),
                sensor.get("unit_of_measurement", None),
                sensor.get("icon", None),
                sensor.get("device_class", None),
                sensor.get("attributes", []),
                sensor.get("key", None),
            )
        )

    async_add_devices(sensors)


class KnmiSensor(KnmiEntity):
    """Knmi Sensor class."""

    def __init__(
        self,
        coordinator,
        config_entry,
        name,
        unit_of_measurement,
        icon,
        device_class,
        attributes,
        data_key,
    ):
        super().__init__(coordinator, config_entry)
        self.entry_name = config_entry.data.get(CONF_NAME)
        self._name = name
        self._unit_of_measurement = unit_of_measurement
        self._icon = icon
        self._device_class = device_class
        self._attributes = attributes
        self._data_key = data_key

    @property
    def name(self):
        """Return the name of the sensor."""
        return f"{DEFAULT_NAME} {self.entry_name} {self._name}"

    @property
    def state(self):
        """Return the state of the sensor."""
        return super().getData(self._data_key)

    @property
    def unit_of_measurement(self):
        """Return the unit of measurement of this entity, if any."""
        return self._unit_of_measurement

    @property
    def icon(self):
        """Return the icon of the sensor."""
        return self._icon

    @property
    def device_class(self):
        """Return the device class."""
        return self._device_class

    @property
    def extra_state_attributes(self):
        """Return the device state attributes."""
        attributes = super().extra_state_attributes
        for attribute in self._attributes:
            value = None
            if "key" in attribute:
                value = super().getData(attribute.get("key", None))
            if "value" in attribute:
                value = attribute.get("value", None)
            attributes[attribute.get("name", None)] = value

        return attributes
