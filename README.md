# Smarthome Cremerboulevard

This repository contains the set-up of my smart home, featured by the open-source project [Home Assistant](https://www.home-assistant.io).

I started around the beginning of the COVID pandemic with a few Philips Hue light bulbs, and the setup has grown from there.
The full configuration till what it is today, took several years of hobby time.
This is mainly because we increased the number of devices over time.
I use Github for version control and to share my configuration with others.

If you have any questions about my set-up or smarthomes in general, feel free to [contact](mailto:gerritjandebruin@gmail.com) or use the [issue](https://github.com/gerritjandebruin/home-assistant/issues/new) functionality!

## The house
The house is situated in Utrecht in a district called [New-England, Utrecht](https://nl.wikipedia.org/wiki/Nieuw_Engeland,_Thomas_%C3%A0_Kempisplantsoen_en_omgeving).
More specifically, we live at the Cremerstraat, a beautiful street with sights over the most busy railroad track in the Netherlands and only a ten-minute walk from the city center.
The house was built around 1920 and had originally a ground level and one floor.
Over the years, toilets, bathroom, second floor (2017), a roof terrace (2020) and a bike shed (2020) were added to the house.

![](www/aerial-1930.jpg)
Aerial photo of Utrecht around 1930. The arrow marks our street. On the right, we observe the Dom tower, which can be seen from the house as well. [Het Utrechts Archief](https://hetutrechtsarchief.nl/collectie/2C8CA0EEF8605EE4B7786F7C60876957).

### Rooms by floor

```
Attic (2nd floor)
│
1st floor  ──  Landing
│              Bathroom
│              Bedroom
│              Guest room
│              Roof terrace
│              Storage room
│
Ground floor ─ Hallway
│              Kitchen
│              Living room
│              Toilet
│              Walk-in closet
│              Meter cupboard
│
Outbuildings ─ Bike shed
               Shed
```

## Devices
The following table provides the devices used by the home automation.
When buying new devices, I try to keep the following matters into consideration:
* Limit the number of different manufacturers. This helps when later replacing devices and to get more reproducible readings. I prefer manufacturers that are fairly large and have a good track record in long-term availability.
* Money. I am not willing to spend too much extra money for just little value.
* Protocol, I am transitioning from Zigbee to [Matter](https://csa-iot.org/all-solutions/matter/), preferring Matter over Thread above Matter over WiFi. Thread devices form a low-power mesh network and do not congest the WiFi. The Google Nest Hub (2nd gen) acts as a Thread border router, bridging Thread devices to the IP network.

Hence, most devices come from the IKEA :)
I prefer durability over low cost, so I tend to avoid cheap disposable hardware.

| Device            | Manufacturer      | Model                                       | Protocol                                                                                     | Room                                              | Price  | Pcs  | Link                                                                                                                                          |
|-------------------|-------------------|---------------------------------------------|----------------------------------------------------------------------------------------------|---------------------------------------------------|--------|------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| Air quality sensor | Apollo Automation | AIR-1                                      | WiFi (ESPHome)                                                                               | Living room                                         | €49    | 1    | [apolloautomation.com](https://apolloautomation.com/products/air-1)                                                                           |
| Air quality sensor | MoreSense         | MS05 (CO₂, temp, humidity)                 | MQTT                                                                                         | Bedroom, Attic                                | -      | 2    | [moresense.nl](https://www.moresense.nl)                                                                                                      |
| Control outlet    | IKEA              | TRÅDFRI                                     | Zigbee                                                                                       |                                                   | €10    | 1    | [ikea.com](https://www.ikea.com/nl/en/p/tradfri-wireless-control-outlet-90356166/)                                                            |
| Control outlet    | IKEA              | Askvader                                    | Zigbee                                                                                       | Attic                                            | €10    | 3    | [ikea.com](https://www.ikea.com/nl/en/p/askvaeder-on-off-switch-50463880/)                                                                    |
| Dehumidifier      | Qlima             | D 820 A                                     | WiFi (via Sonoff Basic)                                                                      |                                                   | -      | 1    | [qlima.com](https://www.qlima.com)                                                                                                            |
| Dimmer            | Philips           | Hue RWL022                                  | Zigbee                                                                                       |                                                   | €20    | 1    | [philips-hue.com](https://www.philips-hue.com/nl-nl/p/hue-dimmer-schakelaar/8719514274617)                                                   |
| Door sensor       | Aqara             | lumi.sensor_magnet.aq2                      | Zigbee                                                                                       | Bathroom, Hallway, Walk-in closet, Shed, Toilet, Storage room | €53    | 6    | [aliexpress.com](https://aliexpress.com/item/4001241581941.html)                                                                              |
| Doorbell + Antenna | KIKA             | ACDB-6600AC                                 | RF 433 MHz                                                                                    | Front door                                        | €25    | 1    | [gamma.nl](https://www.gamma.nl/assortiment/klikaanklikuit-deurbel-set-acdb-6600ac/p/B413295)                                                 |
| Energy meter      | Shelly            | EM                                          | WiFi                                                                                         | Meter cupboard                                         | €35    | 1    | [shelly.cloud](https://shop.shelly.cloud/shelly-em-wifi-smart-home-automation)                                                                |
| ESP32             | Espressif         | ESP32-WROOM-32D                             | Bluetooth & WiFi                                                                             |                                                   | €5     | 1    | [aliexpress.com](https://nl.aliexpress.com/item/32864722159.html)                                                                             |
| EV charger        | Peblar            | WLAC1-S22RPWELMDR00                         | WiFi                                                                                         | Meter cupboard                                         | -      | 1    | [peblar.com](https://www.peblar.com)                                                                                                          |
| Flood sensor      | Shelly            | Flood Gen4                                  | WiFi                                                                                         |                                                   | €20    | 1    | [shelly.com](https://www.shelly.com/products/shelly-flood-generation-4)                                                                       |
| Flower sensor     | Vegtrug           |                                             | Bluetooth (via ESP32)                                                                        |                                                   | €19    | 1    | [aliexpress.com](https://nl.aliexpress.com/item/1005001671394326.html)                                                                        |
| Google Nest Hub   | Google            | Nest Hub 2nd gen                            | Thread border router                                                                         | Living room                                         | (€100) | 1    | [store.google.com](https://store.google.com/nl/product/nest_hub_2nd_gen)                                                                      |
| Heater            | EUROM             | CK2003 Turbo 2000W                          | via outlet                                                                                   |                                                   | (€29)  | 1    | [hornbach.nl](https://www.hornbach.nl/shop/EUROM-Convectorkachel-CK2003-Turbo-2000-Watt/8438008/artikel.html)                                 |
| LED + 200W power  |                   | 24V RGBWW 19W/m IP67 960lm/m               | via Shelly RGBW2                                                                             | Roof terrace                                         | €188   | 10m  | [led-gigant.nl](https://www.led-gigant.nl/product/24volt-rgbww-led-strip-ip66/)                                                               |
| LED + 50W power   |                   | 24V LED 12W IP65 1260lm/m 2700K            | via relay                                                                                    | Bike shed                                   | €41    | 2.5m | [led-gigant.nl](https://www.led-gigant.nl/product/waterdichte-led-strip-extra-warm-wit-12w-1260lm-meter-24vdc-ip68-nano-3000k-25m-rol-kopie/) |
| LED driver        | Shelly            | RGBW2                                       | WiFi                                                                                         | Roof terrace                                         | €25    | 1    | [shelly.cloud](https://shop.shelly.cloud/shelly-rgbw2-wifi-smart-home-automation)                                                             |
| Light bulb        | IKEA              | KAJPLATS GU10 CWS 470lm                     | Matter (Thread)                                                                              | Bathroom                                          | -      | 4    | [ikea.com](https://www.ikea.com/nl/nl/p/kajplats-led-lamp-gu10-470-lumen-draadloos-dimbaar-kleurspectrum-en-wit-spectrum-60556619/)           |
| Light bulb        | IKEA              | KAJPLATS GU10 WS 575lm                      | Matter (Thread)                                                                              | Kitchen                                            | -      | 3    | [ikea.com](https://www.ikea.com/nl/nl/p/kajplats-led-lamp-gu10-575-lumen-draadloos-dimbaar-wit-spectrum-70556621/)                            |
| Light bulb        | IKEA              | TRÅDFRI GU10 WW 400lm                       | Zigbee                                                                                       | Walk-in closet                                        | €14    | 2    | [ikea.com](https://www.ikea.com/nl/nl/p/tradfri-led-lamp-gu10-400-lumen-draadloos-dimbaar-warm-wit-60420041/)                                 |
| Light bulb        | IKEA              | TRÅDFRI GU10 WS 400lm                       | Zigbee                                                                                       | Bedroom                                        | €80    | 5    | [ikea.com](https://www.ikea.com/nl/en/p/tradfri-led-bulb-gu10-400-lumen-wireless-dimmable-white-spectrum-90408603/)                           |
| Light bulb        | Philips           | Hue LTA001 E27 Filament                     | Zigbee                                                                                       | Shed                                            | €20    | 1    | [gamma.nl](https://www.gamma.nl/assortiment/philips-hue-filament-led-lamp-e27-7w/p/B128025)                                                   |
| Light bulb        | Philips           | Hue LTW010 E27 White Ambiance               | Zigbee                                                                                       | Attic                                            | -      | 1    | [philips-hue.com](https://www.philips-hue.com)                                                                                                |
| Light bulb        | Philips           | Hue LTW012 E14 White Ambiance               | Zigbee                                                                                       | Hallway, Landing                                    | €45    | 2    | [mediamarkt.nl](https://www.mediamarkt.nl/nl/product/_philips-hue-ambiance-2-pack-wit-1502337.html)                                           |
| Light bulb        | Philips           | Hue LWA004 E27 White                        | Zigbee                                                                                       | Attic                                            | -      | 1    | [philips-hue.com](https://www.philips-hue.com)                                                                                                |
| Light strip       | Philips           | Hue Flux gradient lightstrip                | Zigbee                                                                                       | Kitchen                                            | -      | 1    | [philips-hue.com](https://www.philips-hue.com)                                                                                                |
| Light strip       | Philips           | Hue OmniGlow lightstrip                     | Zigbee                                                                                       | Kitchen                                            | -      | 1    | [philips-hue.com](https://www.philips-hue.com)                                                                                                |
| Motion sensor     | IKEA              | TRÅDFRI                                     | Zigbee                                                                                       | Bike shed, Kitchen, Landing                 | €39    | 4    | [ikea.com](https://www.ikea.com/nl/nl/p/tradfri-draadloze-bewegingssensor-wit-70429913/)                                                      |
| Motion sensor     | Philips           | Hue SML001 w/ thermometer                   | Zigbee                                                                                       | Hallway                                              | €40    | 1    | [mediamarkt.nl](https://www.mediamarkt.nl/nl/product/_philips-hue-bewegingssensor-1522068.html)                                               |
| NAS               | Synology          | DS216play                                   | [API](https://github.com/home-assistant/core/tree/dev/homeassistant/components/synology_dsm) | Attic                                            | (€250) | 1    | [tweakers.net](https://tweakers.net/pricewatch/461480/synology-diskstation-ds216play.html)                                                    |
| Printer           | Canon             | MG3650S                                     | IPP (WLAN)                                                                                   | Attic                                            | (€74)  | 1    | [Canon.nl](https://www.canon.nl/printers/pixma-mg3650s/)                                                                                      |
| Relay             | Shelly            | 1                                           | WiFi                                                                                         | Bike shed                                   | -      | 1    | [shelly.cloud](https://shop.shelly.cloud/shelly-1-wifi-smart-home-automation)                                                                 |
| Relay             | Shelly            | 1 Mini Gen4                                 | Matter (Thread) / WiFi                                                                       | Hallway                                              | €10    | 2    | [shelly.com](https://www.shelly.com/products/shelly-1-mini-generation-4)                                                                      |
| Relay             | Shelly            | 1PM                                         | WiFi                                                                                         | Toilet, Living room                                 | €25    | 2    | [shelly.cloud](https://shop.shelly.cloud/shelly-1pm-wifi-smart-home-automation-1)                                                             |
| Relay             | Shelly            | 1PM Mini Gen4                               | WiFi                                                                                         | Bathroom (×2), Kitchen, Living room                  | -      | 4    | [shelly.com](https://www.shelly.com/products/shelly-1pm-mini-generation-4)                                                                    |
| Relay             | Shelly            | 2.5                                         | WiFi                                                                                         | Bathroom (×3)                                     | €17    | 3    | [shelly.cloud](https://shop.shelly.cloud/shelly-2.5-ce-ul-wifi-smart-home-automation)                                                         |
| Relay             | Shelly            | Plug S                                      | WiFi                                                                                         | Walk-in closet, Kitchen, Bedroom, Attic (×4)       | -      | 7    | [shelly.cloud](https://shop.shelly.cloud/shelly-plug-s-wifi-smart-home-automation)                                                            |
| Remote control    | IKEA              | TRÅDFRI                                     | Zigbee                                                                                       | Bedroom                                        | €15    | 1    | [ikea.com](https://www.ikea.com/nl/en/p/tradfri-remote-control-30443124/)                                                                     |
| Robot vacuum      | Bluebot           | XBoost                                      | WiFi                                                                                         |                                                   | -      | 1    |                                                                                                                                               |
| Router            | ZTE               | H369A / Experia Box v10                     | SNMP, UPnP                                                                                   |                                                   | -      | 1    | [hardware.info](https://nl.hardware.info/routers.9/zte-kpn-experia-box-v10.280129)                                                            |
| Router            | TP-Link           | Archer AX55                                 | UPnP                                                                                         | Living room                                         | (€100) | 1    | [mediamarkt.nl](https://www.mediamarkt.nl/nl/product/_tp-link-archer-ax55-1716886.html)                                                       |
| Smart plug        | NOUS              | A1T (Tasmota)                               | WiFi                                                                                         | Bike shed, Kitchen (×3), Shed, Living room, Attic | -      | 7    | [nous.technology](https://nous.technology/product/nous-a1t.html)                                                                              |
| Smart switch      | Sonoff            | Basic (Tasmota)                             | WiFi                                                                                         |                                                   | -      | 1    | [sonoff.itead.cc](https://sonoff.itead.cc/en/products/sonoff/sonoff-basic)                                                                    |
| Solar             | Growatt           | ShineLan-X                                  | LAN, MQTT (via [Grott](https://github.com/johanmeijer/grott)), [PVOutput](https://pvoutput.org/list.jsp?userid=112973) |                    | -      | 1    |                                                                                                                                               |
| Switch            | TP-Link           | TL-SG108S                                   | -                                                                                            |                                                   | (€37)  | 1    | [mediamarkt.nl](https://www.mediamarkt.nl/nl/product/_tp-link-tl-sg108s-1593913.html)                                                         |
| Tesla             | Tesla             | (49 kWh)                                    | via evcc                                                                                     |                                                   | -      | 1    | [tesla.com](https://www.tesla.com)                                                                                                            |
| Thermostat (CV)   | Vaillant          | VR940f (myVaillant connect) + VRT51f (sensoROOM) | WiFi (HomeKit)                                                                          | Living room                                         | -      | 1    | [vaillant.nl](https://www.vaillant.nl)                                                                                                        |
| Thermometer       | Aqara             | lumi.weather, w/ humidity, pressure         | Zigbee                                                                                       | Bathroom, Guest room, Shed                     | €43    | 3    | [aliexpress.com](https://aliexpress.com/item/32888389905.html)                                                                                |
| Thermometer       | TuYa              | TS0201, w/ humidity and display             | Zigbee                                                                                       | Living room, Attic                                 | €16    | 2    | [aliexpress.com](https://aliexpress.com/item/4001179535195.html)                                                                              |
| TV                | Samsung           | The Frame QE50LS03AAUXXN                    | WiFi                                                                                         | Living room                                         | -      | 1    | [samsung.com](https://www.samsung.com/nl/tvs/qled-tv/the-frame-50-inch-qe50ls03aauxxn/)                                                      |
| Water leak sensor | IKEA              | BADRING                                     | Zigbee                                                                                       | Attic                                            | -      | 1    | [ikea.com](https://www.ikea.com/nl/nl/p/badring-watersensor-50504361/)                                                                        |
| Water meter       | Muino             | Water meter sensor                          | WiFi (ESPHome)                                                                               | Meter cupboard                                         | €35    | 1    | [github.com](https://github.com/gerritjandebruin/watermeter-esphome)                                                                          |
| Wireless dimmer   | IKEA              | TRÅDFRI                                     | Zigbee                                                                                       | Bedroom                                        | €14    | 2    | [ikea.com](https://www.ikea.com/nl/en/p/tradfri-wireless-dimmer-white-70408595/)                                                              |
| Zigbee controller | dresden elektronik | ConBee II                                  | [ZHA](https://www.home-assistant.io/integrations/zha/)                                       | Shed                                            | €35    | 1    | [phoscon.de](https://phoscon.de/en/conbee2)                                                                                                   |

- Total costs (ignoring prices in brackets): ~€1,179

## Hardware experiences
### LED
We bought a LED strip + power supply + driver for both the bike shed and roof terrace at led-gigant.nl.
The LED at the bike shed was easy to install since we only had to cut but not to join any strips. 
The controlling of this light strip is done by a Shelly, which are great drivers as they are easy to install and just work out-of-box on WiFi.

The installation of the LED at the roof terrace was harder and took us several weeks!
Since our roof terrace is 4*2 meters, we needed 10m of LED strips (4+2+4 for three sides).
The LED strips were delivered as two 5m long strips, so we had to cut and reconnect them.
We did not expect that this would be so hard.
Since these strips are RGBWW, 5 strands needed to be connected at each joint.
We bought some [non-solder connections](https://www.led-gigant.nl/led/led-accessoires/led-strip-connectors/) from Led-gigant.nl but we did not get them to work on all five strands simultaneously.
Hence, we need to solder the connections, which is hard given that the strands are only 1-2mm apart.

### IKEA
The IKEA devices are all good quality, especially for the low price they are sold.
Lights are good and the remotes all work very well.
The motion sensor reports motion fast, maybe even a bit too fast; especially on warmer days (>20 degrees Celsius), it triggers sometimes at random.
Major drawback is the difficulty to pair them; the only thing which works for the lights is by manually powercycle them.
As the IKEA manual is not very accurate on how to this, I used the instructions from [IKEA Switzerland](https://www.youtube.com/watch?v=mJm9YpPrGzk) (especially see the comment of Jon B.).

### Vegtrug
I like the idea of a flower sensor very much, so that is the reason I paid this relatively expensive gadget.
I will use it to monitor a citrus plant that is not doing so well :)
It works via Bluetooth Low-Energy so I monitor this device with an ESP32 using [ESPHome](https://esphome.io/components/sensor/xiaomi_ble.html?highlight=flower).
An open-source database for the Vegtrug can be found at https://open.plantbook.io/.

### TuYa temperature sensor
Nice thermometer with a display that shows the temperature and humidity.
Updates very fast (over Zigbee) when temperature changes.
Major drawback: very limited battery-life of 1-2 weeks.

### Aqara
Both the temperature sensors and door sensors work very well on Zigbee with either Zigbee2MQTT or ZHA.
Battery life is around 6-12 months.

### Apollo AIR-1
The Apollo AIR-1 is an all-in-one air quality sensor for the living room.
It measures CO₂, temperature, humidity, and particulate matter (PM), and runs on ESPHome over WiFi.
Integration with Home Assistant is seamless via the native API.

### Water meter
The water meter is based on the [Muino water meter sensor](https://github.com/gerritjandebruin/watermeter-esphome) combined with an ESP32.
It reads the optical pulse from the water meter and reports water consumption to Home Assistant via ESPHome.
Works very reliably.

### EV charging with evcc
We bought a Tesla and installed a [Peblar](https://www.peblar.com) EV charger.
To charge the car using surplus solar energy, we use [evcc](https://evcc.io/), an open-source EV charging manager.
evcc integrates with the Growatt solar inverter (via Home Assistant API) and monitors grid import/export via a Shelly EM energy meter.
This allows smart charging: the car is charged preferentially with solar power, reducing grid import.

### Others
Feel free to ask more experiences by opening an [issue](https://github.com/gerritjandebruin/home-assistant/issues/new)!

## Entities
Auto-generated overviews (refresh by running the script in [CLAUDE.md](CLAUDE.md)):
- [entities.md](entities.md) — 1311 entities across 27 domains
- [devices.md](devices.md) — 153 devices grouped by integration
- [integrations.md](integrations.md) — 105 config entries

## Screenshots
See the [img/](https://github.com/gerritjandebruin/home-assistant/tree/main/img) directory!

![map](img/map.PNG)
