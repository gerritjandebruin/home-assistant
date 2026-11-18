# Smarthome Cremerboulevard

This repository contains the set-up of my smart home, powered by the open-source project [Home Assistant](https://www.home-assistant.io).

I started around the beginning of the COVID pandemic with a few Philips Hue light bulbs, and the setup has grown from there.
Getting the configuration to where it is today took me several years of hobby time, mainly because I kept adding devices.
I use GitHub for version control and to share my configuration with others.

If you have any questions about my set-up or smart homes in general, feel free to [contact me](mailto:gerritjan@debruinhoegee.nl) or open an [issue](https://github.com/gerritjandebruin/home-assistant/issues/new)!

## The house
My house is in Utrecht, in a district called [New-England](https://nl.wikipedia.org/wiki/Nieuw_Engeland,_Thomas_%C3%A0_Kempisplantsoen_en_omgeving).
More specifically, I live on the Cremerstraat, a beautiful street with a view over the busiest railway track in the Netherlands and only a ten-minute walk from the city centre.
The house was built around 1920 and originally had a ground floor and one upper floor.
Over the years, toilets, a bathroom, a second floor (2017), a roof terrace (2020) and a bike shed (2020) were added.

![](www/aerial-1930.jpg)
Aerial photo of Utrecht around 1930. The arrow marks my street. On the right is the Dom tower, which I can see from the house as well. [Het Utrechts Archief](https://hetutrechtsarchief.nl/collectie/2C8CA0EEF8605EE4B7786F7C60876957).

### Floor plan
![Floor plan dashboard in Home Assistant](img/floorplan.png)
My main dashboard: a floor plan per storey (ground floor, first floor and attic) with the lights, doors, appliances and sensor readings on top.
It is interactive: I can click a lamp or appliance on the plan to control it, and hover over an icon to get more information.

## What my home does
**Lighting**
- The lights in the hallway, on the landing and in the kitchen switch on when someone moves and it is dark. Brightness and colour depend on the time of day.
- The bathroom lights switch on when the door opens or someone moves, and off after 20 minutes without movement. A button gives two mood settings: only the strip dimmed, or everything in a soft red-orange.
- The walk-in closet, storage room and shed switch their light on when the door opens and off when it closes.
- The bike shed lights up on movement in the dark and switches off after 10 minutes.
- The light strip in the living room switches on when someone is present and it is dark, and off when the room is empty.
- The bedroom is controlled with a remote and two buttons, including a night setting with only the strip at 20%.
- The landing light stays off while the door to the roof terrace is open, so it does not attract insects.

**Air and climate**
- I get a notification when CO₂ in a room rises above 1000 ppm, and again above 1200 ppm, so I know when to open a window. I measure CO₂ in the living room, the bedroom, the attic and the guest room. The living room has an Apollo AIR-1, which also measures particulate matter and runs on ESPHome.
- I get a notification when the air conditioner is still on while nobody has been home for an hour, or when it has been on for 12 hours.
- I get a notification when the shed drops below 5 °C, because frost can damage the water pipes and the central heating installation there.

**Water**
- When the leak sensor under the washing machine detects water, the water supply valve closes and the washing machine is switched off.
- The valve should only be open during a wash, so I get a warning when it has been open for more than 6 hours.

**Energy**
- My desk switches off when it has only used standby power for 30 minutes.

**Watching over the devices**
- I get a notification when a mains voltage is out of range, when a device gets too hot or too cold, when a device reports a problem, or when a battery is nearly empty.
- Each notification disappears by itself once the problem is solved.
- After a restart of Home Assistant, lights that were waiting for a timer are switched off, so nothing stays on by accident.

## Network
- **Server:** Home Assistant OS runs on a Raspberry Pi 5 with an NVMe SSD, connected by cable. It makes its backups to my Synology NAS.
- **WiFi:** a fibre router in the living room and a TP-Link Archer AX55 as second access point. Besides the main network there are separate IoT networks for devices that only do 2.4 GHz, such as the ESPHome boards.
- **Zigbee:** I have two Zigbee networks. A ConBee II stick on the Raspberry Pi runs [ZHA](https://www.home-assistant.io/integrations/zha/) for the IKEA, Aqara, TuYa and SONOFF devices; the Philips Hue lights are on the Hue Bridge Pro.
- **Matter over Thread:** my newer IKEA devices use Thread. The Google Nest Hub is the Thread border router.
- **MQTT:** a Mosquitto broker on the Raspberry Pi receives data from the MoreSense sensors, the Tasmota plugs and the solar inverter (through Grott).
- **Remote access:** through a reverse proxy on the NAS, with Tailscale as an alternative.

Almost everything is controlled locally and keeps working without internet. The exceptions are the Vaillant thermostat and the energy prices of Frank Energie, which come from the cloud.

## Energy
- **Solar:** 8 LONGi panels of 365 Wp, 2.9 kWp in total, in two strings on a roof with a 20° pitch: one facing south-south-west and one facing north-north-east. The north-facing string still produces about two thirds of what the south-facing one does. I read the Growatt inverter locally with [Grott](https://github.com/johanmeijer/grott), and [Forecast.Solar](https://forecast.solar) predicts the production.
- **Grid connection:** 3 × 25 A since July 2026, mainly so I can make more use of cheap electricity on my dynamic contract and charge the Tesla much faster. I read the smart meter through a HomeWizard P1 meter.
- **Contract:** a dynamic contract with [Frank Energie](https://www.frankenergie.nl), with a different price every quarter of an hour. The Energy dashboard in Home Assistant calculates with the same prices as my bill.
- **Car:** I charge a Tesla Model 3 at home with a [Peblar](https://www.peblar.com) charger. I no longer use evcc for this: Frank Energie lets me choose between smart charging and boost charging. Smart charging also takes grid congestion into account. That sometimes moves my charging to a more expensive moment, but one that the grid in my street can handle better, and I get a small compensation for it.
- **Per device:** smart plugs measure the big consumers: washing machine, dryer, dishwasher, oven, microwave, fridges and the boiling-water tap.
- **Gas and water:** a Vaillant boiler heats the house. My water meter is read by the [Muino water meter sensor](https://github.com/gerritjandebruin/watermeter-esphome) with an ESP32, which picks up the optical pulse and reports my water use through ESPHome.
- **Home battery:** I have already bought an SMA home battery, but it is not connected yet. The plan is to store my solar power in it, and to use it as backup power for the whole house.

## Devices
The following table lists the devices in my home automation.
When buying new devices, I keep the following in mind:
* Limit the number of different manufacturers. This helps when I replace devices later and gives more reproducible readings. I prefer manufacturers that are fairly large and have a good track record in long-term availability. I value their durability over a low price, so I tend to avoid cheap disposable hardware.
* Money. A device should have a good price-quality ratio. I prefer a budget option when it is good enough. Hence, most of my devices come from IKEA :)
* Protocol. I am moving from Zigbee to [Matter](https://csa-iot.org/all-solutions/matter/), preferring Matter over Thread above Matter over WiFi. Thread devices form a low-power mesh network and seem to have a longer range because of that. Zigbee is a mesh too, but it has trouble reaching all the way to my shed. My Google Nest Hub (2nd gen) acts as a Thread border router, bridging Thread devices to the IP network.

| Device | Manufacturer | Model | Manual | Protocol | Integration | Local / cloud | Power | Battery life | Room | Status | Bought | Shop | Price | Pcs |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Air conditioner | Midea | MFEZ (Athena), 3.5 kW | [manual](https://www.midea.com/nl/support) | WiFi | Midea | Local | Mains | - | Attic (outdoor unit on the roof terrace) | In use | 2026-10 | Van De Krol | €2,844 (installed) | 1 |
| Air quality sensor | Apollo Automation | [AIR-1](https://apolloautomation.com/products/air-1) | - | WiFi | ESPHome | Local | Mains (USB) | - | Living room | In use | - | Apollo Automation | €187 | 1 |
| Air quality sensor | IKEA | ALPSTUGA | [manual](https://www.ikea.com/nl/en/p/alpstuga-air-quality-sensor-smart-50604187/) | Matter (Thread) | Matter | Local | Mains (USB) | - | Bedroom | In use | - | IKEA | €30* | 1 |
| Air quality sensor | MoreSense | [MS05](https://www.moresense.nl) (CO₂, temp, humidity) | [manual](https://manuals.plus/moresense/ms-05-co2-sensor-manual) | WiFi (MQTT) | MQTT | Local | Mains (USB) | - | Guest room, Attic | In use | 2025-04 | MoreSense | €59 | 2 |
| Button | IKEA | BILRESA dual button | [manual](https://www.ikea.com/nl/en/p/bilresa-remote-control-white-smart-dual-button-10604165/) | Matter (Thread) | Matter | Local | 2× AAA (rechargeable) | no replacement yet (since Jul 2026) | Bathroom | In use | - | IKEA | €6* | 1 |
| Button | IKEA | TRÅDFRI on/off switch | [manual](https://www.zigbee2mqtt.io/devices/E1743.html) | Zigbee | ZHA | Local | CR2032 | unknown (battery reading too erratic) | Bedroom, Attic (×2) | In use | - | IKEA | - | 3 |
| Button | IKEA | TRÅDFRI shortcut button | [manual](https://www.zigbee2mqtt.io/devices/E1812.html) | Zigbee | ZHA | Local | CR2032 | no replacement in the 10 months I have data for | Bedroom | In use | 2022-06 | IKEA | €10 | 1 |
| Car | Tesla | [Model 3 (49 kWh)](https://www.tesla.com) | [manual](https://www.tesla.com/ownersmanual/model3/en_us/) | charged with the Peblar | - | - | - | - |  | In use | - | - | - | 1 |
| Control outlet | IKEA | [Askvader](https://www.ikea.com/nl/en/p/askvaeder-on-off-switch-50463880/) | [manual](https://www.zigbee2mqtt.io/devices/E1836.html) | Zigbee | ZHA | Local | Mains | - | Attic | In use | 2022-06 | IKEA | €10 | 1 |
| Dehumidifier | Qlima | D 820 A | - | WiFi | Tuya Local, via a Sonoff Basic relay (Tasmota) | Local | Mains | - |  | Disabled | 2023-11 | Coolblue | €229 | 1 |
| Dimmer | Philips Hue | [Dimmer switch](https://www.philips-hue.com/nl-nl/p/hue-dimmer-schakelaar/8719514274617) | - | Zigbee | Philips Hue (Bridge) | Local | CR2450 | no replacement yet (since Jan 2026) | Living room | In use | 2026-01 | Philips Hue | €15 | 1 |
| Door sensor | Aqara | [lumi.sensor_magnet.aq2](https://aliexpress.com/item/4001241581941.html) | [manual](https://www.zigbee2mqtt.io/devices/MCCGQ11LM.html) | Zigbee | ZHA | Local | CR1632 | several years; two still run on a battery from 2021 | Bathroom, Walk-in closet, Shed, Toilet, Storage room | In use | - | AliExpress | €16 | 5 |
| Door sensor | IKEA | MYGGBETT | [manual](https://www.ikea.com/nl/en/p/myggbett-door-window-sensor-smart-00603864/) | Matter (Thread) | Matter | Local | AAA (rechargeable) | no replacement yet (since Jul 2026) | Roof terrace, Attic | In use | - | IKEA | €6* | 2 |
| ESP32 | Espressif | ESP32 dev board and AI-Thinker ESP32-CAM | - | WiFi | ESPHome | Local | Mains (USB) | - | Bike shed | Disabled | - | AliExpress | €15 | 2 |
| EV charger | Peblar | [WLAC1-S22RPWELMDR00](https://www.peblar.com) | [manual](https://developer.peblar.com/) | WiFi | Peblar | Local | Mains | - | Bike shed | In use | 2026-02 | Wallbox Discounter | €949 | 1 |
| Flood sensor | Shelly | [Flood Gen4](https://www.shelly.com/products/shelly-flood-generation-4) | [manual](https://kb.shelly.cloud/knowledge-base/shelly-flood-gen4) | WiFi | - | - | Battery | - |  | Not connected | 2026-02 | Shelly | €35 | 1 |
| Home Assistant server | Raspberry Pi | Raspberry Pi 5 (Home Assistant OS) | [manual](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html) | Ethernet | - | Local | Mains | - | Attic | In use | 2025-09 | RaspberryStore | €141 (with power supply and 256 GB SSD) | 1 |
| Hue Bridge | Philips Hue | Bridge Pro | [manual](https://www.philips-hue.com/en-us/support/article/install-hue-bridge-pro/000001) | Zigbee, LAN | Philips Hue | Local | Mains | - |  | In use | 2026-03 | Coolblue | €75 | 1 |
| LED driver | Shelly | [RGBW2](https://shop.shelly.cloud/shelly-rgbw2-wifi-smart-home-automation) | [manual](https://kb.shelly.cloud/knowledge-base/shelly-rgbw2) | WiFi | Shelly | Local | 24 V supply | - | Roof terrace | In use | 2021-05 | Shelly | €17 | 1 |
| LED strip + 200W power supply | led-gigant.nl | [24V RGBWW 19W/m IP67](https://www.led-gigant.nl/product/24volt-rgbww-led-strip-ip66/) | - | via Shelly RGBW2 | Shelly | Local | Mains | - | Roof terrace | In use | - | led-gigant.nl | €188 | 10 m |
| LED strip + 50W power supply | led-gigant.nl | [24V LED 12W IP65 2700K](https://www.led-gigant.nl/product/waterdichte-led-strip-extra-warm-wit-12w-1260lm-meter-24vdc-ip68-nano-3000k-25m-rol-kopie/) | - | via Shelly 1 | Shelly | Local | Mains | - | Bike shed | In use | - | led-gigant.nl | €41 | 2.5 m |
| Light bulb | IKEA | [KAJPLATS GU10 CWS 470lm](https://www.ikea.com/nl/nl/p/kajplats-led-lamp-gu10-470-lumen-draadloos-dimbaar-kleurspectrum-en-wit-spectrum-60556619/) | - | Matter (Thread) | Matter | Local | Mains | - | Bathroom | In use | - | IKEA | €10* | 4 |
| Light bulb | IKEA | [KAJPLATS GU10 WS 575lm](https://www.ikea.com/nl/nl/p/kajplats-led-lamp-gu10-575-lumen-draadloos-dimbaar-wit-spectrum-70556621/) | - | Matter (Thread) | Matter | Local | Mains | - | Kitchen (×3), Storage room | In use | - | IKEA | €8* | 4 |
| Light bulb | IKEA | [TRÅDFRI GU10 WS 400lm](https://www.ikea.com/nl/en/p/tradfri-led-bulb-gu10-400-lumen-wireless-dimmable-white-spectrum-90408603/) | [manual](https://www.zigbee2mqtt.io/devices/LED1537R6_LED1739R5.html) | Zigbee | ZHA | Local | Mains | - | Bedroom | In use | - | IKEA | €13 | 5 |
| Light bulb | IKEA | [TRÅDFRI GU10 WW 400lm](https://www.ikea.com/nl/nl/p/tradfri-led-lamp-gu10-400-lumen-draadloos-dimbaar-warm-wit-60420041/) | [manual](https://www.zigbee2mqtt.io/devices/LED1837R5.html) | Zigbee | ZHA | Local | Mains | - | Walk-in closet | In use | - | IKEA | €13 | 2 |
| Light bulb | Philips Hue | [E14 White Ambiance candle](https://www.mediamarkt.nl/nl/product/_philips-hue-ambiance-2-pack-wit-1502337.html) | - | Zigbee | Philips Hue (Bridge) | Local | Mains | - | Hallway, Landing | In use | - | MediaMarkt | €24 | 2 |
| Light bulb | Philips Hue | [E27 Filament](https://www.gamma.nl/assortiment/philips-hue-filament-led-lamp-e27-7w/p/B128025) | - | Zigbee | Philips Hue (Bridge) | Local | Mains | - | Attic | In use | - | Gamma | €20 | 1 |
| Light bulb | Philips Hue | E27 White Ambiance | - | Zigbee | Philips Hue (Bridge) | Local | Mains | - | Shed, Attic | In use | - | - | ~€40 | 2 |
| Light strip | Philips Hue | Flux lightstrip | - | Zigbee | Philips Hue (Bridge) | Local | Mains | - | Bedroom, Living room | In use | 2026-01, 2026-04 | Philips Hue, Coolblue | €107 | 2 |
| Light strip | Philips Hue | Lightstrip Plus | - | Zigbee | Philips Hue (Bridge) | Local | Mains | - | Bathroom | In use | - | - | - | 1 |
| Light strip | Philips Hue | OmniGlow lightstrip 3 m | - | Zigbee | Philips Hue (Bridge) | Local | Mains | - | Kitchen | In use | 2026-01, 2026-03 | bol.com, Coolblue | €111 | 2 |
| Motion sensor | IKEA | MYGGSPRAY | [manual](https://www.ikea.com/nl/en/p/myggspray-wireless-motion-sensor-smart-70604186/) | Matter (Thread) | Matter | Local | 2× AAA (rechargeable) | no replacement yet (since Jul 2026) | Bathroom | In use | - | IKEA | €9* | 1 |
| Motion sensor | IKEA | [TRÅDFRI](https://www.ikea.com/nl/nl/p/tradfri-draadloze-bewegingssensor-wit-70429913/) | [manual](https://www.zigbee2mqtt.io/devices/E1525_E1745.html) | Zigbee | ZHA | Local | 2× CR2032 | about once a year | Bike shed, Kitchen, Landing | In use | - | IKEA | €13 | 3 |
| Motion sensor | Philips Hue | [SML001 w/ thermometer](https://www.mediamarkt.nl/nl/product/_philips-hue-bewegingssensor-1522068.html) | [manual](https://www.zigbee2mqtt.io/devices/9290012607.html) | Zigbee | ZHA | Local | 2× AAA (rechargeable) | about every 3 years | Hallway | In use | - | MediaMarkt | €36 | 1 |
| NAS | Synology | [DS216play](https://tweakers.net/pricewatch/461480/synology-diskstation-ds216play.html) | [manual](https://www.synology.com/en-global/support/download/DS216play) | Ethernet | Synology DSM | Local | Mains | - | Attic | In use | - | - | ~€250 | 1 |
| Network switch | TP-Link | [TL-SG108S](https://www.mediamarkt.nl/nl/product/_tp-link-tl-sg108s-1593913.html) | [manual](https://www.tp-link.com/nl/support/download/tl-sg108s/) | Ethernet | - | - | Mains | - |  | In use | - | MediaMarkt | ~€29 | 1 |
| P1 meter | HomeWizard | [Wi-Fi P1 Meter](https://www.homewizard.com/p1-meter/) | - | WiFi | HomeWizard | Local | From the smart meter | - | Meter cupboard | In use | 2026-07 | HomeWizard | €29 | 1 |
| Presence sensor | SONOFF | SNZB-06P | [manual](https://www.zigbee2mqtt.io/devices/SNZB-06P.html) | Zigbee | ZHA | Local | Mains (USB) | - | Living room | In use | 2026-08 | AliExpress | ~€13 | 1 |
| Printer | Canon | [MG3650S](https://www.canon.nl/printers/pixma-mg3650s/) | - | WiFi (IPP) | IPP | Local | Mains | - | Attic | In use | 2020-05 | Coolblue | €74 | 1 |
| Relay | Shelly | [1 Mini Gen4](https://www.shelly.com/products/shelly-1-mini-generation-4) | [manual](https://kb.shelly.cloud/knowledge-base/shelly-1-mini-gen4) | Matter (Thread) / WiFi | Shelly | Local | Mains | - | Hallway | In use | - | Shelly | €16 | 1 |
| Relay | Shelly | [1](https://shop.shelly.cloud/shelly-1-wifi-smart-home-automation) | [manual](https://kb.shelly.cloud/knowledge-base/shelly-1) | WiFi | Shelly | Local | Mains | - | Bike shed | In use | - | Shelly | discontinued | 1 |
| Relay | Shelly | [1PM Mini Gen4](https://www.shelly.com/products/shelly-1pm-mini-generation-4) | [manual](https://kb.shelly.cloud/knowledge-base/shelly-1pm-mini-gen4) | WiFi | Shelly | Local | Mains | - | Bathroom (×2), Kitchen, Living room | In use | 2026-01 | Shelly | €22 | 4 |
| Relay | Shelly | [1PM](https://shop.shelly.cloud/shelly-1pm-wifi-smart-home-automation-1) | [manual](https://kb.shelly.cloud/knowledge-base/shelly-1pm) | WiFi | Shelly | Local | Mains | - | Toilet, Living room | In use | 2020-12 | Shelly | €15 | 2 |
| Relay | Shelly | [2.5](https://shop.shelly.cloud/shelly-2.5-ce-ul-wifi-smart-home-automation) | [manual](https://kb.shelly.cloud/knowledge-base/shelly-2-5) | WiFi | Shelly | Local | Mains | - | Bathroom (×3) | In use | 2020-12 | Shelly | €20 | 3 |
| Remote control | IKEA | [TRÅDFRI](https://www.ikea.com/nl/en/p/tradfri-remote-control-30443124/) | [manual](https://www.zigbee2mqtt.io/devices/E1524_E1810.html) | Zigbee | ZHA | Local | CR2032 | unknown (battery reading too erratic) | Bedroom | In use | - | IKEA | discontinued | 1 |
| Robot vacuum | Roborock | Q7 M5 | - | WiFi | - | Cloud (Roborock app) | Rechargeable (dock) | - |  | Not connected | 2026-08 | bol.com | €145 | 1 |
| Router | Huawei | EG8145X6 (fibre ONT) | - | - | - | - | Mains | - | Living room | In use | - | Provider | - | 1 |
| Router | TP-Link | [Archer AX55](https://www.mediamarkt.nl/nl/product/_tp-link-archer-ax55-1716886.html) | [manual](https://www.tp-link.com/nl/support/download/archer-ax55/) | Ethernet, WiFi | UPnP/IGD | Local | Mains | - | Guest room | In use | - | MediaMarkt | ~€51 | 1 |
| Smart display | Google | [Nest Hub 2nd gen](https://store.google.com/nl/product/nest_hub_2nd_gen) | [manual](https://support.google.com/googlenest/answer/7029281) | WiFi, Thread border router | Google Cast | Local | Mains | - | Living room | In use | 2023-11 | Google Store | €100 | 1 |
| Smart plug | NOUS | [A1T (Tasmota)](https://nous.technology/product/nous-a1t.html) | [manual](https://templates.blakadder.com/nous_A1T.html) | WiFi | Tasmota | Local | Mains | - | Kitchen (×4), Shed | In use | 2024-08 | mediarath | €25 | 5 |
| Smart plug | Shelly | [Plug S](https://shop.shelly.cloud/shelly-plug-s-wifi-smart-home-automation) | [manual](https://kb.shelly.cloud/knowledge-base/shelly-plug-s) | WiFi | Shelly | Local | Mains | - | Walk-in closet, Kitchen, Attic (×4) | In use | 2022-05 | Shelly | €15 | 6 |
| Solar inverter | Growatt | 3000TL-XE with ShineLan-X | [manual](https://github.com/johanmeijer/grott/wiki) | LAN, MQTT (via [Grott](https://github.com/johanmeijer/grott)) | Grott | Local, plus [PVOutput](https://pvoutput.org/list.jsp?userid=112973) | Mains | - | Attic | In use | 2020-12 | Sundriven | ~€623 | 1 |
| Thermometer | Aqara | [lumi.weather](https://aliexpress.com/item/32888389905.html) (w/ humidity, pressure) | [manual](https://www.zigbee2mqtt.io/devices/WSDCGQ11LM.html) | Zigbee | ZHA | Local | CR2032 | about once a year | Bathroom | In use | - | AliExpress | €43 | 1 |
| Thermometer | IKEA | TIMMERFLOTTE (w/ humidity) | [manual](https://www.ikea.com/nl/en/p/timmerflotte-temperature-humidity-sensor-smart-30597606/) | Matter (Thread) | Matter | Local | 2× AAA (rechargeable) | no replacement yet (since Jul 2026) | Shed | In use | - | IKEA | €10* | 1 |
| Thermometer | TuYa | [TS0201](https://aliexpress.com/item/4001179535195.html) (w/ humidity and display) | [manual](https://www.zigbee2mqtt.io/devices/TS0201.html) | Zigbee | ZHA | Local | 2× AAA (rechargeable) | about twice a year | Living room, Attic | In use | - | AliExpress | €16 | 2 |
| Thermostat (CV) | Vaillant | [VR940f + VRT51f](https://www.vaillant.nl) | - | WiFi | myVAILLANT | Cloud | - | - | Living room | In use | - | - | - | 1 |
| TV | Samsung | [The Frame QE50LS03](https://www.samsung.com/nl/tvs/qled-tv/the-frame-50-inch-qe50ls03aauxxn/) | [manual](https://www.samsung.com/nl/support/model/QE50LS03AAUXXN/) | WiFi | Samsung Smart TV | Local | Mains | - | Living room | In use | 2021-10 | Platte TV | €999 | 1 |
| Water leak sensor | IKEA | [BADRING](https://www.ikea.com/nl/nl/p/badring-watersensor-50504361/) | [manual](https://www.zigbee2mqtt.io/devices/E2202.html) | Zigbee | ZHA | Local | AAA (rechargeable) | about every 2 years | Attic | In use | - | IKEA | - | 1 |
| Water meter | Muino | [Water meter sensor](https://github.com/gerritjandebruin/watermeter-esphome) | [manual](https://github.com/gerritjandebruin/watermeter-esphome) | WiFi | ESPHome | Local | Mains (USB) | - | Meter cupboard | In use | - | - | €30 | 1 |
| Water valve | SONOFF | SWV-ZFE | [manual](https://www.zigbee2mqtt.io/devices/SWV.html) | Zigbee | ZHA | Local | 4× AA (rechargeable) | no replacement yet (since Aug 2026) | Attic (washing machine) | In use | 2026-08 | AliExpress | ~€33 | 1 |
| Zigbee controller | dresden elektronik | [ConBee II](https://phoscon.de/en/conbee2) | [manual](https://phoscon.de/en/conbee2/install) | Zigbee (USB) | [ZHA](https://www.home-assistant.io/integrations/zha/) | Local | USB | - | Shed | In use | - | - | €35 | 1 |

Prices are what I paid per piece, rounded to whole euros; for the LED strips it is the price of the whole length, including the power supply. Prices marked with * are current IKEA prices; prices marked with ~ are estimates, such as a share of an order with several items.
The battery life comes from the battery history in Home Assistant.
For devices that take AA or AAA batteries I use rechargeable ones.

## Hardware experiences
### LED strips
I have a LED strip in the bike shed and one around the roof terrace.
Soldering LED strips properly is quite hard for a beginner, because the contacts are only a few millimetres apart.
I also tried [solderless connectors](https://www.led-gigant.nl/led/led-accessoires/led-strip-connectors/), but unfortunately I could not get them to work on all 5 strands at once.
So the result looks a bit less professional than I would have liked.

### Philips Hue light strips
The Hue light strips are a big step up from my own LED strips.
The two OmniGlow strips in the kitchen look beautiful, even when you look straight at them: you cannot see the individual LEDs, and the light can be softly animated.
In the bedroom, a strip gives a beautiful indirect light.

### IKEA
The IKEA devices are all of good quality, especially for the low price.
The lights are good and the remotes all work very well.
The drawback is that rejoining a network is hard, because you have to switch the lamp on and off a precise number of times.
As the IKEA manual is not very accurate on how to do this, I used the instructions from [IKEA Switzerland](https://www.youtube.com/watch?v=mJm9YpPrGzk).
With the new Matter devices this has become a lot better.

### Vegtrug
I like the idea of a flower sensor very much, which is why I paid for this relatively expensive gadget.
I used it to monitor a citrus plant that was not doing so well :)
It works via Bluetooth Low Energy, so I read it out with an ESP32 using [ESPHome](https://esphome.io/components/sensor/xiaomi_ble.html?highlight=flower).
An open-source database for the Vegtrug can be found at https://open.plantbook.io/.
I no longer use it.

### TuYa temperature sensor
A nice thermometer with a display that shows the temperature and humidity.
It updates very fast (over Zigbee) when the temperature changes.
The battery level it reports is not reliable: it drops to about 10% within weeks and then stays there for months.

### Aqara
Both the temperature sensors and the door sensors work very well on Zigbee, with either Zigbee2MQTT or ZHA.

### Others
Feel free to ask about other experiences by opening an [issue](https://github.com/gerritjandebruin/home-assistant/issues/new)!

## Changelog
Reconstructed from my Home Assistant history, this repository and my receipts, so the early years are incomplete.

**2026**
- November: cleaned up this repository and this page; moved to quarter-hour energy prices.
- October: air conditioner (Midea) installed.
- August: Roborock robot vacuum; SONOFF presence sensor in the living room and a water valve on the washing machine.
- July: grid connection upgraded to 3 phases with a smart meter, read with a HomeWizard P1 meter; first IKEA Matter-over-Thread sensors and buttons; solar forecast added.
- March: Philips Hue Bridge Pro.
- February: Peblar EV charger.
- January: IKEA KAJPLATS Matter bulbs in the bathroom; Hue light strips and a dimmer switch; Shelly 1PM Mini Gen4 relays.

**2025**
- October: moved Home Assistant to a Raspberry Pi 5.
- September and October: tried TeslaMate and removed it again.
- April: MoreSense CO₂ sensors.

**2024**
- August: water meter sensor (Muino); NOUS smart plugs with Tasmota.
- April: IKEA BADRING leak sensor under the washing machine, at the latest.

**2023**
- August: published my configuration on GitHub.

**2020 – 2022**
- Started in 2020 with a few Philips Hue bulbs.
- My solar production data goes back to November 2020.
- By early 2021 the first Zigbee motion and door sensors were in use.
