# What's On TV - EPG TV Guide<br>Lovelace Card

A Lovelace card that turns your What's On TV sensors into a beautiful visual TV guide — current programme, progress bar, channel logo and upcoming schedule, all in one card.  Requires: What's On TV Integration Pair with: What's On TV — Notify Card to search and set programme alerts

[![Home Assistant](https://img.shields.io/badge/Home%20Assistant-2026.2%2B-41bdf5.svg?style=for-the-badge)](https://www.home-assistant.io/)
[![HACS Custom](https://img.shields.io/badge/HACS-Custom-41bdf5.svg?style=for-the-badge)](https://hacs.xyz/docs/publish/start)
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-Donate-yellow.svg?style=for-the-badge)](https://www.buymeacoffee.com/janfajessen)
[![Patreon](https://img.shields.io/badge/Patreon-Support-red.svg?style=for-the-badge)](https://www.patreon.com/janfajessen)


A Lovelace card that turns your [What's On TV](https://github.com/YOUR_GITHUB_USER/whatson_tv) sensors into a beautiful visual TV guide — current programme, progress bar, channel logo and upcoming schedule, all in one card.

> **Requires:** [What's On TV Integration](https://github.com/YOUR_GITHUB_USER/whatson_tv)
>
> **Pair with:** [What's On TV — Notify Card](https://github.com/YOUR_GITHUB_USER/whatsontv-notify-card) to search and set programme alerts

---

## Features

- Auto-discovers all EPG sensors from the What's On TV integration
- Shows **current programme** with live progress bar and channel logo
- **"Up next"** preview below each channel
- Click any channel to open a **full schedule modal**
- **Drag-to-reorder** channels in the editor
- Dark and light themes
- Accent colour picker (8 presets + hex/RGB custom)
- Configurable 2–6 column grid
- **49 languages** — auto-detected from HA/browser language

---

## Installation

### Via HACS (recommended)

1. Open HACS → **Frontend** → ⋮ → **Custom repositories**
2. Add `https://github.com/YOUR_GITHUB_USER/whatsontv-epg-card` — category **Lovelace**
3. Search for **What's On TV EPG Card** and install
4. Add to your dashboard resources (HACS does this automatically)

### Manual

1. Copy `whatsontv-epg-card.js` to `config/www/`
2. Add as a resource: **Settings → Dashboards → ⋮ → Resources → Add**
   - URL: `/local/whatsontv-epg-card.js`
   - Type: JavaScript module

---

## Usage

Add the card to your dashboard:

```yaml
type: custom:whatsontv-epg-card
title: TV Guide
columns: 3
theme: dark
accent: "#e8872a"
channels:
  - La 1.es
  - La 2.es
  - Antena 3.es
```

Or use the visual editor — click **Edit → Add Card → Custom** and search for `whatsontv-epg-card`.

---

## Configuration Options

| Option | Type | Default | Description |
|---|---|---|---|
| `title` | string | `TV Guide` | Card title |
| `theme` | `dark` / `light` | `dark` | Visual theme |
| `accent` | string | `#e8872a` | Accent colour (hex or `r,g,b`) |
| `columns` | 2–6 | `3` | Number of channel columns |
| `channels` | list | _(all)_ | Channel IDs to display, in order |

---

## Requirements

- Home Assistant 2024.1+
- [What's On TV Integration](https://github.com/YOUR_GITHUB_USER/whatson_tv) — provides the EPG sensors

---

## License

MIT — see [LICENSE](LICENSE)
