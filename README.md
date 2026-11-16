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

## Devices
The following table lists the devices in my home automation.
When buying new devices, I keep the following in mind:
* Limit the number of different manufacturers. This helps when I replace devices later and gives more reproducible readings. I prefer manufacturers that are fairly large and have a good track record in long-term availability.
* Money. I am not willing to spend much extra for just a little value.
* Protocol. I am moving from Zigbee to [Matter](https://csa-iot.org/all-solutions/matter/), preferring Matter over Thread above Matter over WiFi. Thread devices form a low-power mesh network and do not congest the WiFi. My Google Nest Hub (2nd gen) acts as a Thread border router, bridging Thread devices to the IP network.

Hence, most of my devices come from IKEA :)
I prefer durability over low cost, so I tend to avoid cheap disposable hardware.

| Device | Manufacturer | Model | Protocol | Integration | Local / cloud | Power | Battery life | Room | Status | Bought | Shop | Price | Pcs |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Air conditioner | Midea | MFEZ (Athena), 3.5 kW | WiFi | Midea | Local | Mains | - | Attic (outdoor unit on the roof terrace) | In use | 2026-10 | Van De Krol | €2,844 (installed) | 1 |
| Air quality sensor | Apollo Automation | [AIR-1](https://apolloautomation.com/products/air-1) | WiFi | ESPHome | Local | Mains (USB) | - | Living room | In use | - | Apollo Automation | €187 | 1 |
| Air quality sensor | IKEA | ALPSTUGA | Matter (Thread) | Matter | Local | Mains (USB) | - | Bedroom | In use | - | IKEA | €29.99* | 1 |
| Air quality sensor | MoreSense | [MS05](https://www.moresense.nl) (CO₂, temp, humidity) | WiFi (MQTT) | MQTT | Local | Mains (USB) | - | Guest room, Attic | In use | 2025-04 | MoreSense | €59 | 2 |
| Button | IKEA | BILRESA dual button | Matter (Thread) | Matter | Local | 2× AAA (rechargeable) | no replacement yet (since Jul 2026) | Bathroom | In use | - | IKEA | €5.99* | 1 |
| Button | IKEA | TRÅDFRI on/off switch | Zigbee | ZHA | Local | CR2032 | unknown (battery reading too erratic) | Bedroom, Attic (×2) | In use | - | IKEA | - | 3 |
| Button | IKEA | TRÅDFRI shortcut button | Zigbee | ZHA | Local | CR2032 | no replacement in the 10 months I have data for | Bedroom | In use | - | IKEA | - | 1 |
| Car | Tesla | [Model 3 (49 kWh)](https://www.tesla.com) | charged with the Peblar | - | - | - | - |  | In use | - | - | - | 1 |
| Control outlet | IKEA | [Askvader](https://www.ikea.com/nl/en/p/askvaeder-on-off-switch-50463880/) | Zigbee | ZHA | Local | Mains | - | Attic | In use | - | IKEA | discontinued | 1 |
| Dehumidifier | Qlima | D 820 A | WiFi | Tuya Local, via a Sonoff Basic relay (Tasmota) | Local | Mains | - |  | Disabled | - | - | - | 1 |
| Dimmer | Philips Hue | [Dimmer switch](https://www.philips-hue.com/nl-nl/p/hue-dimmer-schakelaar/8719514274617) | Zigbee | Philips Hue (Bridge) | Local | CR2450 | no replacement yet (since Jan 2026) | Living room | In use | 2026-01 | Philips Hue | €20 | 1 |
| Door sensor | Aqara | [lumi.sensor_magnet.aq2](https://aliexpress.com/item/4001241581941.html) | Zigbee | ZHA | Local | CR1632 | several years; two still run on a battery from 2021 | Bathroom, Walk-in closet, Shed, Toilet, Storage room | In use | - | AliExpress | €16 | 5 |
| Door sensor | IKEA | MYGGBETT | Matter (Thread) | Matter | Local | AAA (rechargeable) | no replacement yet (since Jul 2026) | Roof terrace, Attic | In use | - | IKEA | €5.99* | 2 |
| ESP32 | Espressif | ESP32 dev board and AI-Thinker ESP32-CAM | WiFi | ESPHome | Local | Mains (USB) | - | Bike shed | Disabled | - | AliExpress | €15 | 2 |
| EV charger | Peblar | [WLAC1-S22RPWELMDR00](https://www.peblar.com) | WiFi | Peblar | Local | Mains | - | Bike shed | In use | 2026-02 | Wallbox Discounter | €949 | 1 |
| Flood sensor | Shelly | [Flood Gen4](https://www.shelly.com/products/shelly-flood-generation-4) | WiFi | - | - | Battery | - |  | Not connected | 2026-02 | Shelly | €35 | 1 |
| Home Assistant server | Raspberry Pi | Raspberry Pi 5 (Home Assistant OS) | Ethernet | - | Local | Mains | - | Attic | In use | 2025-09 | RaspberryStore | - | 1 |
| Hue Bridge | Philips Hue | Bridge Pro | Zigbee, LAN | Philips Hue | Local | Mains | - |  | In use | 2026-03 | Coolblue | - | 1 |
| LED driver | Shelly | [RGBW2](https://shop.shelly.cloud/shelly-rgbw2-wifi-smart-home-automation) | WiFi | Shelly | Local | 24 V supply | - | Roof terrace | In use | - | Shelly | discontinued | 1 |
| LED strip + 200W power supply | led-gigant.nl | [24V RGBWW 19W/m IP67](https://www.led-gigant.nl/product/24volt-rgbww-led-strip-ip66/) | via Shelly RGBW2 | Shelly | Local | Mains | - | Roof terrace | In use | - | led-gigant.nl | €188 | 10 m |
| LED strip + 50W power supply | led-gigant.nl | [24V LED 12W IP65 2700K](https://www.led-gigant.nl/product/waterdichte-led-strip-extra-warm-wit-12w-1260lm-meter-24vdc-ip68-nano-3000k-25m-rol-kopie/) | via Shelly 1 | Shelly | Local | Mains | - | Bike shed | In use | - | led-gigant.nl | €41 | 2.5 m |
| Light bulb | IKEA | [KAJPLATS GU10 CWS 470lm](https://www.ikea.com/nl/nl/p/kajplats-led-lamp-gu10-470-lumen-draadloos-dimbaar-kleurspectrum-en-wit-spectrum-60556619/) | Matter (Thread) | Matter | Local | Mains | - | Bathroom | In use | - | IKEA | €9.99* | 4 |
| Light bulb | IKEA | [KAJPLATS GU10 WS 575lm](https://www.ikea.com/nl/nl/p/kajplats-led-lamp-gu10-575-lumen-draadloos-dimbaar-wit-spectrum-70556621/) | Matter (Thread) | Matter | Local | Mains | - | Kitchen (×3), Storage room | In use | - | IKEA | €7.99* | 4 |
| Light bulb | IKEA | [TRÅDFRI GU10 WS 400lm](https://www.ikea.com/nl/en/p/tradfri-led-bulb-gu10-400-lumen-wireless-dimmable-white-spectrum-90408603/) | Zigbee | ZHA | Local | Mains | - | Bedroom | In use | - | IKEA | €13 | 5 |
| Light bulb | IKEA | [TRÅDFRI GU10 WW 400lm](https://www.ikea.com/nl/nl/p/tradfri-led-lamp-gu10-400-lumen-draadloos-dimbaar-warm-wit-60420041/) | Zigbee | ZHA | Local | Mains | - | Walk-in closet | In use | - | IKEA | €13 | 2 |
| Light bulb | Philips Hue | [E14 White Ambiance candle](https://www.mediamarkt.nl/nl/product/_philips-hue-ambiance-2-pack-wit-1502337.html) | Zigbee | Philips Hue (Bridge) | Local | Mains | - | Hallway, Landing | In use | - | MediaMarkt | €48 (2-pack) | 2 |
| Light bulb | Philips Hue | [E27 Filament](https://www.gamma.nl/assortiment/philips-hue-filament-led-lamp-e27-7w/p/B128025) | Zigbee | Philips Hue (Bridge) | Local | Mains | - | Attic | In use | - | Gamma | €20 | 1 |
| Light bulb | Philips Hue | E27 White Ambiance | Zigbee | Philips Hue (Bridge) | Local | Mains | - | Shed, Attic | In use | - | - | - | 2 |
| Light strip | Philips Hue | Flux lightstrip | Zigbee | Philips Hue (Bridge) | Local | Mains | - | Bedroom, Living room | In use | 2026-01 | Philips Hue | - | 2 |
| Light strip | Philips Hue | Lightstrip Plus | Zigbee | Philips Hue (Bridge) | Local | Mains | - | Bathroom | In use | - | - | - | 1 |
| Light strip | Philips Hue | OmniGlow lightstrip 3 m | Zigbee | Philips Hue (Bridge) | Local | Mains | - | Kitchen | In use | 2026-01, 2026-03 | bol.com, Coolblue | €111 | 2 |
| Motion sensor | IKEA | MYGGSPRAY | Matter (Thread) | Matter | Local | 2× AAA (rechargeable) | no replacement yet (since Jul 2026) | Bathroom | In use | - | IKEA | €8.99* | 1 |
| Motion sensor | IKEA | [TRÅDFRI](https://www.ikea.com/nl/nl/p/tradfri-draadloze-bewegingssensor-wit-70429913/) | Zigbee | ZHA | Local | 2× CR2032 | about once a year | Bike shed, Kitchen, Landing | In use | - | IKEA | €13 | 3 |
| Motion sensor | Philips Hue | [SML001 w/ thermometer](https://www.mediamarkt.nl/nl/product/_philips-hue-bewegingssensor-1522068.html) | Zigbee | ZHA | Local | 2× AAA (rechargeable) | about every 3 years | Hallway | In use | - | MediaMarkt | €36 | 1 |
| NAS | Synology | [DS216play](https://tweakers.net/pricewatch/461480/synology-diskstation-ds216play.html) | Ethernet | Synology DSM | Local | Mains | - | Attic | In use | - | - | (€250) | 1 |
| Network switch | TP-Link | [TL-SG108S](https://www.mediamarkt.nl/nl/product/_tp-link-tl-sg108s-1593913.html) | Ethernet | - | - | Mains | - |  | In use | - | MediaMarkt | (€29) | 1 |
| P1 meter | HomeWizard | [Wi-Fi P1 Meter](https://www.homewizard.com/p1-meter/) | WiFi | HomeWizard | Local | From the smart meter | - | Meter cupboard | In use | 2026-07 | HomeWizard | €28.90 | 1 |
| Presence sensor | SONOFF | SNZB-06P | Zigbee | ZHA | Local | Mains (USB) | - | Living room | In use | 2026-08 | AliExpress | €46 (with the water valve) | 1 |
| Printer | Canon | [MG3650S](https://www.canon.nl/printers/pixma-mg3650s/) | WiFi (IPP) | IPP | Local | Mains | - | Attic | In use | - | - | (€62) | 1 |
| Relay | Shelly | [1 Mini Gen4](https://www.shelly.com/products/shelly-1-mini-generation-4) | Matter (Thread) / WiFi | Shelly | Local | Mains | - | Hallway | In use | - | Shelly | €16 | 1 |
| Relay | Shelly | [1](https://shop.shelly.cloud/shelly-1-wifi-smart-home-automation) | WiFi | Shelly | Local | Mains | - | Bike shed | In use | - | Shelly | discontinued | 1 |
| Relay | Shelly | [1PM Mini Gen4](https://www.shelly.com/products/shelly-1pm-mini-generation-4) | WiFi | Shelly | Local | Mains | - | Bathroom (×2), Kitchen, Living room | In use | 2026-01 | Shelly | €22 | 4 |
| Relay | Shelly | [1PM](https://shop.shelly.cloud/shelly-1pm-wifi-smart-home-automation-1) | WiFi | Shelly | Local | Mains | - | Toilet, Living room | In use | - | Shelly | discontinued | 2 |
| Relay | Shelly | [2.5](https://shop.shelly.cloud/shelly-2.5-ce-ul-wifi-smart-home-automation) | WiFi | Shelly | Local | Mains | - | Bathroom (×3) | In use | - | Shelly | discontinued | 3 |
| Remote control | IKEA | [TRÅDFRI](https://www.ikea.com/nl/en/p/tradfri-remote-control-30443124/) | Zigbee | ZHA | Local | CR2032 | unknown (battery reading too erratic) | Bedroom | In use | - | IKEA | discontinued | 1 |
| Robot vacuum | Roborock | Q7 M5 | WiFi | - | Cloud (Roborock app) | Rechargeable (dock) | - |  | Not connected | 2026-08 | bol.com | €144.99 | 1 |
| Router | Huawei | EG8145X6 (fibre ONT) | - | - | - | Mains | - | Living room | In use | - | - | - | 1 |
| Router | TP-Link | [Archer AX55](https://www.mediamarkt.nl/nl/product/_tp-link-archer-ax55-1716886.html) | Ethernet, WiFi | UPnP/IGD | Local | Mains | - | Guest room | In use | - | MediaMarkt | (€51) | 1 |
| Smart display | Google | [Nest Hub 2nd gen](https://store.google.com/nl/product/nest_hub_2nd_gen) | WiFi, Thread border router | Google Cast | Local | Mains | - | Living room | In use | - | - | (€105) | 1 |
| Smart plug | NOUS | [A1T (Tasmota)](https://nous.technology/product/nous-a1t.html) | WiFi | Tasmota | Local | Mains | - | Kitchen (×4), Shed | In use | 2024-08 | mediarath | €25 | 5 |
| Smart plug | Shelly | [Plug S](https://shop.shelly.cloud/shelly-plug-s-wifi-smart-home-automation) | WiFi | Shelly | Local | Mains | - | Walk-in closet, Kitchen, Attic (×4) | In use | - | Shelly | €20 | 6 |
| Solar inverter | Growatt | 3000TL-XE with ShineLan-X | LAN, MQTT (via [Grott](https://github.com/johanmeijer/grott)) | Grott | Local, plus [PVOutput](https://pvoutput.org/list.jsp?userid=112973) | Mains | - | Attic | In use | - | - | - | 1 |
| Thermometer | Aqara | [lumi.weather](https://aliexpress.com/item/32888389905.html) (w/ humidity, pressure) | Zigbee | ZHA | Local | CR2032 | about once a year | Bathroom | In use | - | AliExpress | €43 | 1 |
| Thermometer | IKEA | TIMMERFLOTTE (w/ humidity) | Matter (Thread) | Matter | Local | 2× AAA (rechargeable) | no replacement yet (since Jul 2026) | Shed | In use | - | IKEA | €9.99* | 1 |
| Thermometer | TuYa | [TS0201](https://aliexpress.com/item/4001179535195.html) (w/ humidity and display) | Zigbee | ZHA | Local | 2× AAA (rechargeable) | about twice a year | Living room, Attic | In use | - | AliExpress | €16 | 2 |
| Thermostat (CV) | Vaillant | [VR940f + VRT51f](https://www.vaillant.nl) | WiFi | HomeKit, myVAILLANT | Local (HomeKit) and cloud (myVAILLANT) | - | - | Living room | In use | - | - | - | 1 |
| TV | Samsung | [The Frame QE50LS03](https://www.samsung.com/nl/tvs/qled-tv/the-frame-50-inch-qe50ls03aauxxn/) | WiFi | Samsung Smart TV | Local | Mains | - | Living room | In use | - | - | - | 1 |
| Water leak sensor | IKEA | [BADRING](https://www.ikea.com/nl/nl/p/badring-watersensor-50504361/) | Zigbee | ZHA | Local | AAA (rechargeable) | about every 2 years | Attic | In use | - | IKEA | - | 1 |
| Water meter | Muino | [Water meter sensor](https://github.com/gerritjandebruin/watermeter-esphome) | WiFi | ESPHome | Local | Mains (USB) | - | Meter cupboard | In use | - | - | €30 | 1 |
| Water valve | SONOFF | SWV-ZFE | Zigbee | ZHA | Local | 4× AA (rechargeable) | no replacement yet (since Aug 2026) | Attic (washing machine) | In use | 2026-08 | AliExpress | see presence sensor | 1 |
| Zigbee controller | dresden elektronik | [ConBee II](https://phoscon.de/en/conbee2) | Zigbee (USB) | [ZHA](https://www.home-assistant.io/integrations/zha/) | Local | USB | - | Shed | In use | - | - | €35 | 1 |

Prices are what I paid, except those marked with *, which are current IKEA prices.
The battery life comes from the battery history in Home Assistant.
For devices that take AA or AAA batteries I use rechargeable ones.

## Hardware experiences
### LED strips
I have a LED strip in the bike shed and one around the roof terrace.
Soldering LED strips properly is quite hard for a beginner, because the contacts are only a few millimetres apart.
I also tried [solderless connectors](https://www.led-gigant.nl/led/led-accessoires/led-strip-connectors/), but unfortunately I could not get them to work on all 5 strands at once.
So the result looks a bit less professional than I would have liked.

### IKEA
The IKEA devices are all of good quality, especially for the low price.
The lights are good and the remotes all work very well.
The drawback is that rejoining a network is hard, because you have to switch the lamp on and off a precise number of times.
As the IKEA manual is not very accurate on how to do this, I used the instructions from [IKEA Switzerland](https://www.youtube.com/watch?v=mJm9YpPrGzk) (especially see the comment of Jon B.).
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
I replace the battery about twice a year: going by my Home Assistant history, every 4 to 7 months.
The battery level it reports is not reliable: it drops to about 10% within weeks and then stays there for months.

### Aqara
Both the temperature sensors and the door sensors work very well on Zigbee, with either Zigbee2MQTT or ZHA.
Battery life is around 6-12 months.

### Air quality sensors
I use CO₂ as a measure of whether a room needs ventilation.
I monitor it in the living room, the bedroom, the attic and the guest room, and Home Assistant notifies me when the level gets too high, so I know when to open a window.
The living room has an Apollo AIR-1, an all-in-one sensor that measures CO₂, temperature, humidity and particulate matter (PM) and runs on ESPHome over WiFi.
The bedroom has an IKEA ALPSTUGA (Matter over Thread), and the attic and guest room each have a MoreSense MS05.

### Water meter
My water meter is read by the [Muino water meter sensor](https://github.com/gerritjandebruin/watermeter-esphome) combined with an ESP32.
It reads the optical pulse from the water meter and reports my water consumption to Home Assistant via ESPHome.

### EV charging
I drive a Tesla and charge it at home with a [Peblar](https://www.peblar.com) charger.
I no longer use evcc for this.
Instead, I use the Peblar together with my energy supplier [Frank Energie](https://www.frankenergie.nl), which lets me choose between smart charging and boost charging.
Smart charging also takes grid congestion into account.
That sometimes moves my charging to a more expensive moment, but one that the grid in my street can handle better, and I get a small compensation for it.

### Others
Feel free to ask about other experiences by opening an [issue](https://github.com/gerritjandebruin/home-assistant/issues/new)!
