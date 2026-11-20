# FSK-Kennzeichen in Jellyfin

Ersetzt die textbasierte FSK-Altersfreigabe (`FSK-0`, `FSK-6`, `FSK-12`, `FSK-16`, `FSK-18`) in der Jellyfin-Weboberfläche automatisch durch die entsprechenden FSK-Kennzeichen.

<p align="center">
  <img alt="Static Badge" src="https://img.shields.io/badge/made_with-Google_Gemini-8E75B2?style=flat-square&logo=googlegemini">
  <img alt="GitHub License" src="https://img.shields.io/github/license/flosletsplay/jellyfin-fsk-badge?style=flat-square">

<br>
</p>

## Voraussetzung

Für die Einbindung von eigenem JavaScript in Jellyfin Web wird das **JavaScript-Injector-Plugin** von **n00bcodr** verwendet:  
👉 [n00bcodr/Jellyfin-JavaScript-Injector auf GitHub](https://github.com/n00bcodr/Jellyfin-JavaScript-Injector)

## Installation

### 1. JavaScript Injector installieren
1. Öffne in Jellyfin das **Dashboard → Plugins → Repositories** (Katalog-Einstellungen).
2. Füge das Plugin-Repository von `n00bcodr` hinzu (siehe Anleitung im [JavaScript Injector Repository](https://github.com/n00bcodr/Jellyfin-JavaScript-Injector)).
3. Installiere das Plugin **JavaScript Injector** aus dem Katalog und starte den Jellyfin-Server neu.

### 2. Skript einfügen
1. Navigiere in Jellyfin zu **Dashboard → Plugins → JavaScript Injector**.
2. `Allow external script URLs` können sie akvivieren.
3. Erstelle ein neues Skript (z. B. mit dem Namen `Jellyfin FSK Badge`).
4. Kopiere Sie entweder den Inhalt aus der JavaScript-Datei dieses Repositories in das Code-Feld oder nutzen Sie
```
https://raw.githubusercontent.com/FlosLetsPlay/jellyfin-fsk-badge/refs/heads/main/jellyfin-fsk-badge.js
```
5. Speichere die Einstellungen und lade die Jellyfin-Weboberfläche im Browser neu (`Strg + F5` bzw. `Cmd + Shift + R`).

---

## Rechtliche Hinweise & Urheberrecht

* **FSK-Kennzeichen:** Die Marken- und Urheberrechte an den offiziellen FSK-Kennzeichen liegen ausschließlich bei der **Freiwilligen Selbstkontrolle der Filmwirtschaft GmbH (FSK)**. Dieses Repository dient lediglich der technischen Anpassung der privaten Jellyfin-Oberfläche. Bitte beachte die jeweiligen Nutzungsbedingungen der FSK bei der Verwendung der Grafiken.
* **Hinweise zur Erstellung:** Sowohl der JavaScript-Code als auch diese `README.md` wurden mit Unterstützung von **Google Gemini** erstellt.

---

## Hinweise zur Kompatibilität

* Funktioniert in allen Clients, die die Jellyfin-Weboberfläche nutzen (Browser, Jellyfin Media Player etc.).
* Native Clients (z. B. Android TV, Apple TV, Roku) laden keine Web-Plugins und zeigen weiterhin die native Darstellung an.
