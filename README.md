# Jellyfin FSK Badge

Ersetzt in Jellyfin Web die textuelle Altersfreigabe (wie `<div class="mediaInfoItem mediaInfoText mediaInfoOfficialRating">FSK-6</div>`) dynamisch durch passende FSK-Logos.

## Hinweise zu Rechten & Entstehung

* **Code & Dokumentation:** Dieser Code sowie diese `README.md` wurden mit Unterstützung von Gemini (KI) erstellt und von dir angepasst.
* **FSK-Logos:** Die FSK-Kennzeichen und -Logos gehören der **Freiwilligen Selbstkontrolle der Filmwirtschaft (FSK)** bzw. den jeweiligen Rechteinhabern und unterliegen deren Marken- und Urheberrechten. Dieses Projekt dient ausschließlich privaten Zwecken.

## Voraussetzung

Für die Einbindung von eigenem JavaScript in Jellyfin Web wird das **JavaScript-Injector-Plugin** von **n00bcodr** verwendet:  
👉 [n00bcodr/Jellyfin-JavaScript-Injector auf GitHub](https://github.com/n00bcodr/Jellyfin-JavaScript-Injector)

## Installation

1. **JavaScript-Injector-Plugin installieren:**  
   Installiere das Plugin von `n00bcodr` gemäß dessen Repository-Anleitung in deinem Jellyfin-Server und starte Jellyfin neu.
2. **Logos & Script bereitstellen:**  
   In diesem Repository (`FlosLetsPlay/jellyfin-fsk-badge`) liegen bereits die Logos sowie die angepasste Datei [`jellyfin-fsk-badge.js`](https://github.com/FlosLetsPlay/jellyfin-fsk-badge/blob/main/jellyfin-fsk-badge.js). Stelle sicher, dass die Bildpfade in `jellyfin-fsk-badge.js` zu deinem Jellyfin-Setup / deiner Web-Auslieferung passen (z. B. über Raw-URL, Reverse Proxy oder lokales Hosting).
3. **Script im Plugin hinterlegen:**  
   Öffne in Jellyfin das **Dashboard → Plugins → JavaScript Injector**, füge den Inhalt aus [`jellyfin-fsk-badge.js`](https://github.com/FlosLetsPlay/jellyfin-fsk-badge/blob/main/jellyfin-fsk-badge.js) ein (oder lade das Script darüber ein) und speichere die Einstellungen.
4. **Browser-Cache leeren:**  
   Lade Jellyfin im Browser einmal hart neu (`Strg + F5` bzw. `Cmd + Shift + R`), damit das Script und die Logos geladen werden.
