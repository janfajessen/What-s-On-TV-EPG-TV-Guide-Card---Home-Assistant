<div align="center">

# What's On TV — EPG <br> Home Assistant Lovelace Card

<img src="https://github.com/janfajessen/What-s-On-TV---EPG-TV-Guide/raw/82eeef144435d0eea84c5fd1ebdc7cb73f91689b/whatson_tv_icon.png" alt="What's On TV" width="300">

![Version](https://img.shields.io/badge/version-4.8.15-blue?style=for-the-badge)
![HA](https://img.shields.io/badge/Home%20Assistant-2024.1+-orange?style=for-the-badge&logo=home-assistant)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Languages](https://img.shields.io/badge/Languages-49-brightgreen?style=for-the-badge)
![HACS](https://img.shields.io/badge/HACS-Compatible-41BDF5?style=for-the-badge&logo=homeassistantcommunitystore&logoColor=white)
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-Donate-yellow?style=for-the-badge&logo=buymeacoffee)](https://www.buymeacoffee.com/janfajessen)
[![Patreon](https://img.shields.io/badge/Patreon-Support-red?style=for-the-badge&logo=patreon)](https://www.patreon.com/janfajessen)
<!--[![Ko-Fi](https://img.shields.io/badge/Ko--Fi-Support-teal?style=for-the-badge&logo=ko-fi)](https://ko-fi.com/janfajessen)
[![GitHub Sponsors](https://img.shields.io/badge/GitHub%20Sponsors-Support-pink?style=for-the-badge&logo=githubsponsors)](https://github.com/sponsors/janfajessen)
[![PayPal](https://img.shields.io/badge/PayPal-Donate-blue?style=for-the-badge&logo=paypal)](https://paypal.me/janfajessen)-->

</div> 

A Lovelace card that displays your EPG channels in a configurable grid — current programme, progress bar, next programme, and a full schedule modal. Works alongside the [What's On TV Integration](https://github.com/janfajessen/What-s-On-TV---EPG-TV-Guide---Home-Assistant).

> **Requires:** [What's On TV Integration](https://github.com/janfajessen/What-s-On-TV---EPG-TV-Guide---Home-Assistant)
>
> **Pair with:** [What's On TV — Search & Notify Card](https://github.com/janfajessen/What-s-On-TV-Search-and-Notify-Card) for keyword alerts and automatic notifications
<div align="center">
<img src="https://github.com/janfajessen/What-s-On-TV---EPG-TV-Guide/raw/c182f8324b4c54bc2a82bcd817de789b43c2208d/whatsontv_epg_card.png" alt="What's On TV EPG Card" width="35%">  <img src="https://github.com/janfajessen/What-s-On-TV---EPG-TV-Guide/raw/c182f8324b4c54bc2a82bcd817de789b43c2208d/whatsontv_epg_card_programme.png" alt="What's On TV EPG Card schedule" width="35%">
</div>

---

## Features

- **Configurable grid** — 2 to 6 columns, adapts to any dashboard layout
- **Auto-discovery** — detects all `whatson_tv` sensors automatically, no manual setup needed
- **Per-channel display** — channel logo (with initial fallback), current programme title, start/end times and live progress bar
- **Next programme** — shows the upcoming title and start time below the progress bar
- **Full schedule modal** — tap any channel to open a scrollable programme list, with the current programme highlighted and auto-scrolled into view
- **Drag & drop editor** — reorder channels visually in the card editor, remove individually
- **Dark and light themes** with 8 accent colour presets + full custom HEX/RGB support
- **Anti-flicker** — only re-renders when programme data actually changes; progress bars update independently
- **49 languages** — UI language follows your Home Assistant language setting automatically

---

## Installation

### Via HACS (recommended)

1. Open HACS → **Frontend** → ⋮ → **Custom repositories**
2. Add `https://github.com/janfajessen/whatsontv-epg-card` — category **Lovelace**
3. Search for **What's On TV EPG Card** and install
4. Refresh your browser

### Manual

1. Copy `whatsontv-epg-card.js` to `config/www/`
2. In Home Assistant go to **Settings → Dashboards** → ⋮ → **Resources** → **+ Add Resource**
3. Set URL to `/local/whatsontv-epg-card.js` and type to **JavaScript module**

> **Tip:** Add `?v=1.1.0` to the URL to force browsers to reload after updates — e.g. `/local/whatsontv-epg-card.js?v=1.1.0`

---

## Usage

### Minimal — auto-discovers all channels

```yaml
type: custom:whatsontv-epg-card
```

### Full configuration

```yaml
type: custom:whatsontv-epg-card
title: TV Guide
theme: dark
accent: "#e8872a"
columns: 3
entities:
  - sensor.epg_la_1
  - sensor.epg_antena_3
  - sensor.epg_bbc_one
  - sensor.epg_rtve_24h
```

If `entities` is omitted, the card discovers all sensors provided by the What's On TV integration automatically.

---

## Visual Editor

The card includes a full visual editor accessible from the Lovelace dashboard edit mode:

- **Theme** — toggle between dark and light with a single click
- **Accent colour** — choose from 8 presets or enter any HEX or RGB value
- **Title** — customise the card header text
- **Columns** — set between 2 and 6 columns
- **Channels** — drag ⠿ to reorder, click ✕ to remove individual channels

---

## Configuration Options

| Option | Type | Default | Description |
|---|---|---|---|
| `title` | string | _(none)_ | Card header title. Leave empty to hide the header |
| `theme` | `dark` / `light` | `dark` | Visual theme |
| `accent` | string | `#e8872a` | Accent colour — HEX (`#fa1a00`) or RGB (`200,100,0`) |
| `columns` | number | `3` | Number of columns in the grid (2–6) |
| `entities` | list | _(auto)_ | List of EPG sensor entity IDs. If omitted, all sensors are auto-discovered |

---

## 📋 Requirements

- Home Assistant 2024.1+
- [What's On TV EPG TV Guide](https://github.com/janfajessen/What-s-On-TV---EPG-TV-Guide---Home-Assistant) integration installed
---

## 🤝 Related cards

- [What's On Series & Films Card](https://github.com/janfajessen/What-s-On-Series-Films-card---Home-Assistant) — Full Platforms, Cinema guide.
- [What's On TV Search & Notify Card](https://github.com/janfajessen/What-s-On-TV-Search-and-Notify-Card) — Search & notifications

---


*If this integration is useful to you, consider giving it a ⭐ on GitHub.*
Or consider supporting development!

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-Donate-yellow.svg?style=for-the-badge)](https://www.buymeacoffee.com/janfajessen)
[![Patreon](https://img.shields.io/badge/Patreon-Support-red.svg?style=for-the-badge)](https://www.patreon.com/janfajessen)
</div>


## License

MIT — see [LICENSE](LICENSE)

© [@janfajessen](https://github.com/janfajessen)
