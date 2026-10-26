<div align="center">

# Phil's Quest Tracker 📜

![Foundry v14 Compatible](https://img.shields.io/badge/Foundry-v14-brightgreen?style=flat-square) ![Foundry v12 Compatible](https://img.shields.io/badge/Foundry-v12-green?style=flat-square) ![License](https://img.shields.io/badge/License-GPLv3-blue?style=flat-square)
[![Version](https://img.shields.io/badge/Version-2.0.3-blue?style=flat-square)](https://github.com/PhilsModules/phils-quest-tracker/releases) [![Patreon](https://img.shields.io/badge/SUPPORT-Patreon-ff424d?style=flat-square&logo=patreon)](https://www.patreon.com/PhilsModules)

<br>

**Manage your adventures with a beautiful Modern Dark UI styled quest log.**
<br>

_Verwalte deine Abenteuer mit einem wunderschönen Quest Log im Modern Dark UI Design._

<br>

<a href="#-english-instructions"><img src="https://img.shields.io/badge/%20-English_Instructions-black?style=for-the-badge&logo=united-kingdom&logoColor=white" alt="English Instructions"></a> <a href="#-deutsche-anleitung"><img src="https://img.shields.io/badge/%20-Deutsche_Anleitung-black?style=for-the-badge&logo=germany&logoColor=red" alt="Deutsche Anleitung"></a> <a href="Updates.md"><img src="https://img.shields.io/badge/%20-Update_Logs-black?style=for-the-badge&logo=clock&logoColor=white" alt="Updates"></a>

</div>

<br>

> [!NOTE]
> **A Quick Note / Hinweis in eigener Sache**
>
> 🇬🇧 **Hi everyone!**  
> A quick note before you start: I create these modules completely in my free time and offer them to the community for free. Since neither my partner nor I are professional graphic designers, translators, or full-time developers, maintaining these projects takes a huge amount of effort. To make these modules possible in this form, I use assistance from artificial intelligence, especially for translations and visual elements. Hiring professional designers or translators is simply something I cannot afford out of pocket.
> 
> Because of Foundry VTT's guidelines regarding artificial intelligence, several of my modules (such as *Phil's Day and Night Cycle*, *Phil's Console Doctor*, *Phil's PF2e RealDark*, and *Phil's Universal Translator*) have been removed from the official Foundry package listing. Even if a module is no longer listed there—or if others are removed in the future—do not worry: **the projects will continue!** You can always find all my modules, updates, releases, and manifest URLs directly here on [GitHub](https://github.com/PhilsModules) (see the [full module overview below](#-more-modules-by-phil--meine-weiteren-module)).
> 
> Thank you so much for your understanding and support!
> 
> ---
> 
> 🇩🇪 **Hallo zusammen!**  
> Ein kleiner Hinweis in eigener Sache, bevor ihr startet: Ich erstelle diese Module komplett in meiner Freizeit und stelle sie der Community kostenlos zur Verfügung. Da weder meine Lebensgefährtin noch ich Grafikdesigner, gelernte Übersetzer oder hauptberufliche Entwickler sind, ist die Pflege extrem aufwendig. Um die Module in dieser Form überhaupt anbieten zu können, nutze ich Unterstützung durch künstliche Intelligenz, zum Beispiel für Übersetzungen und grafische Elemente. Professionelle Designer oder Übersetzer kann ich mir privat schlicht nicht leisten.
> 
> Aufgrund der Richtlinien von Foundry VTT rund um künstliche Intelligenz wurden bereits mehrere meiner Module (wie z. B. *Phil's Day and Night Cycle*, *Phil's Console Doctor*, *Phil's PF2e RealDark* und *Phil's Universal Translator*) aus dem offiziellen Foundry-Verzeichnis entfernt. Auch wenn ein Modul dort nicht mehr gelistet ist – oder künftig noch weitere gelöscht werden sollten – müsst ihr euch keine Sorgen machen: **Das Projekt stirbt nicht!** Ihr findet alle meine Module, Updates, neue Versionen und Manifest-Links weiterhin direkt hier auf [GitHub](https://github.com/PhilsModules) (siehe die [komplette Modul-Übersicht weiter unten](#-more-modules-by-phil--meine-weiteren-module)).
> 
> Vielen Dank für euer Verständnis und eure Unterstützung!

<br>

---

<br>

# <img src="https://flagcdn.com/48x36/gb.png" width="28" height="21" alt="EN"> English Instructions

**A feature-rich, immersive Quest Management system for Foundry VTT.**

Designed to seamlessly integrate with your world, offering a sleek Modern Dark UI, robust calendar synchronization, collaborative party quests, flexible quest givers, and powerful GM tools.

## 🌟 Key Features

### 📜 Beautiful Quest Log & Collaborative Adventures

- **Module-native Storage:** Quests are stored directly inside the module's world data — completely invisible in the Journal Directory, with zero permission setup required.
- **Custom Sheet:** A stunning, Modern Dark UI Quest Sheet with tabs for Overview, Notes, and Rewards.
- **Collaborative Group Quests:** Main Quests and Side Quests serve as joint party adventures. Adventurers can strategize together in shared notes, plan next steps, add objectives, and check off completed tasks.
- **Job Board Workflow:** Quests marked as **Available** can be picked up freely by party members from notice boards or taverns, moved to **Active**, completed, failed, or placed back on the board.
- **Status Tracking:** Track quests through states: **Draft**, **Available**, **Active**, **Completed**, and **Failed**.

### 📅 Day/Night Cycle Integration & Deadlines

- **Dual Date & Deadline Tracking:** Set both **Start Dates** and **End Dates / Deadlines** with an integrated calendar picker. Optional times (e.g. `14:00`) or a one-click world clock button stamp exact in-game milestones.
- **Seamless Automatic Calendar Sync:** Quests with dates synchronize automatically to the **Phil's Day/Night Cycle** calendar. No manual sync checkbox is needed; picking dates registers events immediately, while clearing dates removes them cleanly.
- **Dynamic Visibility & Spoilers:** Quests set to "Visible from Start Date" appear as hidden (GM Only) events on the calendar until the world time arrives. Once reached, they automatically reveal themselves!
- **Strict Personal Quest Privacy:** Personal Quests remain strictly confidential between the player and GM. When synced to the calendar, personal events appear exclusively on the GM's and the assigned adventurer's calendar.

### 🎭 Quest Details & Customization

- **Custom Colors & Symbols:** Customize individual quest accent colors and choose custom symbols or icons from your files or icon library. Colors reflect in the Quest Log, sheet headers, and calendar milestones.
- **Flexible Quest Givers:** Assign **Actors**, **Journal Entries**, or **Journal Entry Pages** as quest givers! Drag & Drop any entity to see their portrait/icon. Click any giver card to immediately open its sheet.
- **Interactive Objective Checkboxes:** Party members can directly check off completed objectives on active quests without altering lore or descriptions.
- **Rewards System:**
  - **XP & Gold Tracking:** Define XP and Gold rewards visible on the sheet and in chat.
  - **Item Drops:** Drag & Drop Items, Weapons, or Spells into the Rewards section.
  - **Chat Claims:** When a quest is completed, a "Quest Completed" card is sent to chat. Players can drag rewards directly from the chat card to their character sheet!
- **Notes:** Separate **Player Notes** (visible to observers) and **GM Notes** (strictly private).

### 🔐 Visibility, Collaboration & Permissions

- **Gamemaster Collaboration Controls:** Define editing permissions per quest directly from the sheet (GM Only, Entire Party, or Selected Adventurers), with an optional toggle allowing players to add loot and gold rewards.
- **Configurable Quest Creation:** A GM setting lets you decide whether players can create Main Quests, or if player-created quests are restricted to Side and Personal Quests.
- **Gamemaster Chat Whisper Audit:** Whenever a player modifies a quest, the GM receives a private whisper message detailing what changed.
- **Visibility Modes:**
  - **Always Visible:** Immediately visible to all players in the Quest Log.
  - **Visible from Start Date:** Remains hidden until the world clock reaches the Start Date (requires Phil's Day/Night Cycle).
  - **GM Only:** Strictly for GM secrets and tracking; players never see it.
  - **Selected Players/Actors:** Assign visibility exclusively to specific player accounts or character sheets with an interactive selector.

> **Note:** Quest data is never stored in or accessible through Foundry's Journal Directory. The module's own Quest Log is the only interface. No manual permission setup is needed.

### 🎮 Macro Support & Hotbar Quick Access

- **Automatic Pre-Built Macros:** Phil's Quest Tracker automatically provisions ready-to-use macros in your Macro Directory under the folder **Phil's Quest Tracker** (*Phil's Quest Log* and *Phil's Quest Tracker: Emergency Cleanup*). You can drag them straight to your hotbar!
- **Direct Hotbar Drag & Drop:** Drag any quest card from the Quest Log (or the ID badge from an open Quest Sheet) directly onto your Hotbar. Foundry will automatically create and place a dedicated macro for that quest on your action bar!
- **Copying Quest ID:**
  - **In the Quest Sheet:** The Quest ID is displayed cleanly in the footer bar right above the Save button (e.g. `Quest ID: abc123xyz`). Clicking it copies the ID directly to your clipboard.
  - **Drag to Hotbar:** Drag any quest card from the Quest Log or the Quest ID badge from the footer directly to your Hotbar.
- **Manual Script Commands:**
  - Toggle Quest Log:
    ```javascript
    PhilsQuestTracker.toggleQuestLog();
    ```
  - Open a specific quest:
    ```javascript
    PhilsQuestTracker.openQuest("questIdHere");
    ```

## 📦 Installation

1. Open Foundry VTT.
2. Go to the **Addon Modules** tab.
3. Click **Install Module**.
4. Paste the following **Manifest URL** into the field:
    ```text
    https://github.com/PhilsModules/phils-quest-tracker/releases/latest/download/module.json
    ```
5. Click **Install**.

## 🚀 Getting Started

1. **Open the Quest Log:** Click the **Quest Log** button in the Journal sidebar, or press **L** (default keybinding).
2. **Create a Quest:** Click the **+ New Quest** button. GMs create quests directly; players send a request to the active GM automatically.
3. **Configure:** The Quest Sheet opens automatically. Set the Title, Description, Quest Giver (drag an Actor or Journal Entry), and Rewards (drag Items).
4. **Set Visibility:** Choose when and to whom the quest is visible (Always / GM Only / Start Date / Selected Players).
5. **Activate:** Move the status to **Active** when the party accepts the mission.
6. **Complete:** When finished, mark as **Completed** to trigger the Rewards Chat Card!

<br>

---

<br>

# <img src="https://flagcdn.com/48x36/de.png" width="28" height="21" alt="DE"> Deutsche Anleitung

**Ein immersives System für das Management von Aufgaben in Foundry VTT.**

Phil's Quest Tracker wurde entwickelt, um sich nahtlos in deine Welt einzufügen. Es bietet eine schicke Oberfläche im Modern Dark UI Look, eine robuste Anbindung an den Kalender, kollaborative Gruppenquests, flexible Questgeber und mächtige Werkzeuge für den Spielleiter.

## 🌟 Hauptfunktionen

### 📜 Das Quest Log & Kollaborative Abenteuer

- **Modul-eigene Datenspeicherung:** Quests werden direkt in den Weltdaten des Moduls gespeichert — vollständig unsichtbar im Journal, ohne Berechtigungs-Einstellungen.
- **Eigenes Design:** Ein atemberaubendes **Modern Dark UI** Quest Sheet mit Tabs für Übersicht, Notizen und Belohnungen.
- **Gemeinsame Gruppen-Abenteuer:** Hauptquests und Nebenquests dienen als gemeinsame Abenteuer. Spieler können in gemeinsamen Notizen Pläne schmieden, nächste Schritte festhalten, Meilensteine definieren und erledigte Ziele direkt abhaken.
- **Auftragsbrett & Verfügbare Quests:** Quests mit dem Status **Verfügbar** können von Spielern frei von Anschlagbrettern oder Tavernen angenommen, auf **Aktiv**, **Abgeschlossen** oder **Fehlgeschlagen** gesetzt oder zurückgestellt werden.
- **Status-Verfolgung:** Behalte den Überblick mit Status-Meldungen wie **Entwurf**, **Verfügbar**, **Aktiv**, **Abgeschlossen** oder **Fehlgeschlagen**.

### 📅 Kalender-Anbindung & Fristen

- **Zwei Daten & Fristen mit optionaler Uhrzeit:** Verwalte sowohl **Startdaten** als auch **Enddaten / Fristen** mit integrierter Datumsauswahl. Optionale Uhrzeiten (z. B. `14:00`) oder ein Klick auf den Weltuhr-Button stempeln Termine präzise ab.
- **Vollautomatische Kalender-Synchronisation:** Quests mit Terminen synchronisieren sich sofort und automatisch mit dem **Phil's Day/Night Cycle** Kalender – ganz ohne umständliche Häkchen. Werden Termine gelöscht, verschwinden sie sofort aus dem Kalender.
- **Dynamische Sichtbarkeit & Spoilerschutz:** Quests mit der Einstellung „Sichtbar ab Startdatum" bleiben als versteckte Events im Kalender (nur für GM). Sobald der Tag im Spiel erreicht ist, enthüllt sich die Quest automatisch für die Spieler!
- **Strikte Privatsphäre für persönliche Quests:** Persönliche Quests bleiben streng geheim zwischen dem Spieler und dem Spielleiter. Auch im Kalender erscheinen persönliche Termine ausschließlich für den GM und den zugewiesenen Spieler.

### 🎭 Details & Anpassung

- **Eigene Farben & Symbole:** Individualisiere jede Quest mit einer eigenen Akzentfarbe und wähle eigene Symbole oder Icons aus deinen Dateien. Farben und Symbole spiegeln sich im Quest Log, im Fenster und im Kalender wider.
- **Flexible Auftraggeber:** Weise **Akteure**, **Journal-Einträge** oder **Journal-Seiten** als Questgeber zu! Ziehe einfach einen Akteur oder Journal-Eintrag per Drag & Drop in den Bereich. Ein Klick auf eine Questgeber-Karte öffnet direkt den zugehörigen Bogen.
- **Interaktive Ziel-Häkchen:** Gruppenmitglieder können erledigte Aufgaben direkt auf aktiven Quests abhaken, ohne dass Beschreibungen oder Hintergründe verändert werden.
- **Belohnungssystem:**
  - **XP & Gold-Verfolgung:** Definiere Erfahrungspunkte und Gold, die direkt auf dem Bogen und im Chat angezeigt werden.
  - **Gegenstände:** Ziehe Items, Waffen oder Zauber per Drag & Drop in den Bereich für Belohnungen.
  - **Chat-Abholung:** Wenn eine Quest abgeschlossen wird, sendet das Modul eine Karte in den Chat. Spieler können Belohnungen direkt von dort in ihren Charakterbogen ziehen!
- **Notizen:** Separate **Spielernotizen** (für Beobachter sichtbar) und **GM-Notizen** (ausschließlich für den GM).

### 🔐 Sichtbarkeit, Zusammenarbeit & Berechtigungen

- **Spielleiter-Kollaborationssteuerung:** Lege die Bearbeitungsrechte pro Quest direkt im Fenster fest (Nur GM, Ganze Gruppe oder Ausgewählte Spieler) und erlaube Spielern optional das Verwalten von Beute und Gold.
- **Quest-Erstellung konfigurierbar:** Bestimme in den Einstellungen, ob Spieler Hauptquests erstellen dürfen oder auf Neben- und persönliche Quests beschränkt sind.
- **GM-Flüsterprotokoll im Chat:** Sobald ein Spieler eine Quest bearbeitet, erhält der GM eine private Flüster-Nachricht mit den genauen Änderungen.
- **Sichtbarkeitsmodi:**
  - **Immer sichtbar:** Die Quest ist sofort für alle Spieler im Quest Log sichtbar.
  - **Sichtbar ab Startdatum:** Die Quest bleibt verborgen, bis die Weltzeit das Startdatum erreicht (erfordert Phil's Day/Night Cycle).
  - **Nur GM:** Die Quest dient rein als Notiz für den Spielleiter; Spieler sehen sie niemals.
  - **Ausgewählte Spieler/Charaktere:** Weise die Sichtbarkeit gezielt einzelnen Spielerkonten oder Charakterbögen zu.

> **Hinweis:** Quest-Daten werden niemals im Journal gespeichert oder sind dort zugänglich. Das Modul-eigene Quest Log ist die einzige Benutzeroberfläche. Es sind keine manuellen Berechtigungs-Einstellungen notwendig.

### 🎮 Makro-Unterstützung & Hotbar-Schnellzugriff

- **Automatische Standard-Makros:** Phil's Quest Tracker hinterlegt beim Spielstart automatisch einsatzbereite Makros im Makroverzeichnis unter dem Ordner **Phil's Quest Tracker** (*Phil's Quest Logbuch* und *Phil's Quest Tracker: Notfall-Bereinigung*). Du kannst sie einfach auf deine Hotbar ziehen!
- **Direktes Hotbar Drag & Drop:** Ziehe eine beliebige Quest-Karte aus dem Quest Log (oder die ID-Plakette aus einem geöffneten Quest-Fenster) direkt auf einen freien Platz in deiner Hotbar. Foundry erstellt automatisch ein passendes Schnellstart-Makro für diese Aufgabe!
- **Quest-ID und Makro-Befehl kopieren:**
  - **Im Quest-Fenster:** Die Quest-ID wird am unteren Fensterrand in der Fußleiste über dem Speichern-Button angezeigt (z. B. `Quest ID: abc123xyz`). Ein Klick darauf kopiert die ID direkt in die Zwischenablage.
  - **Im Quest-Log:** Klicke mit der rechten Maustaste auf eine Quest-Karte für das Kontextmenü (*Quest-ID kopieren* / *Makro-Befehl kopieren*), oder ziehe die Quest-Karte direkt auf die Hotbar.
- **Manuelle Skript-Befehle:**
  - Quest Log öffnen/schließen:
    ```javascript
    PhilsQuestTracker.toggleQuestLog();
    ```
  - Eine bestimmte Quest direkt öffnen:
    ```javascript
    PhilsQuestTracker.openQuest("questIdHere");
    ```

## 📦 Installation

1. Öffne Foundry VTT.
2. Gehe zum Reiter **Addon Modules**.
3. Klicke auf **Install Module**.
4. Füge die folgende **Manifest URL** unten ein:
    ```text
    https://github.com/PhilsModules/phils-quest-tracker/releases/latest/download/module.json
    ```
5. Klicke auf **Install**.

## 🚀 Erste Schritte

1. **Quest Log öffnen:** Klicke auf die **Quest Log** Schaltfläche in der Journal-Seitenleiste oder drücke **L** (Standard-Tastenkürzel).
2. **Quest erstellen:** Klicke auf **+ Neue Quest**. GM erstellt Quests direkt; Spieler senden automatisch eine Anfrage an den aktiven GM.
3. **Konfigurieren:** Das Quest Sheet öffnet sich automatisch. Setze Titel, Beschreibung, Auftraggeber (Akteur oder Journal-Eintrag reinziehen) und Belohnungen (Items reinziehen).
4. **Sichtbarkeit setzen:** Wähle aus, wann und für wen die Aufgabe sichtbar ist (Immer / Nur GM / ab Startdatum / Ausgewählte Spieler).
5. **Aktivieren:** Ändere den Status auf **Aktiv**, sobald die Gruppe die Mission annimmt.
6. **Abschließen:** Markiere die Quest als **Abgeschlossen**, um die Belohnungskarte in den Chat zu senden!

<br>

---

## 🧩 More Modules by Phil / Meine weiteren Module

🇬🇧 **Discover all of my Foundry VTT modules!**  
Because of Foundry VTT's policies regarding AI assistance (which I use for translations and visual elements as a solo hobby developer), several of my modules have been removed from the official Foundry package directory. Below you can see which modules are still available directly on [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) and which ones are hosted exclusively on [GitHub](https://github.com/PhilsModules/). **All modules remain actively maintained** and can always be installed in Foundry VTT using their **Manifest URL**!

🇩🇪 **Entdecke alle meine Foundry VTT Module!**  
Aufgrund der Richtlinien von Foundry VTT zum Einsatz von künstlicher Intelligenz (die ich als Solo-Hobbyentwickler für Übersetzungen und Grafiken nutze) wurden einige meiner Module aus dem offiziellen Foundry-Verzeichnis entfernt. In der Tabelle siehst du auf einen Blick, welche Module noch direkt über [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) gelistet sind und welche exklusiv über [GitHub](https://github.com/PhilsModules/) bezogen werden können. **Alle Module werden aktiv weiterentwickelt** und lassen sich jederzeit über ihre **Manifest-URL** in Foundry VTT installieren!

| Module / Modul | Foundry VTT Listing | Description (🇬🇧 EN / 🇩🇪 DE) | Links |
| :--- | :---: | :--- | :---: |
| **[Phil's Day and Night Cycle](https://github.com/PhilsModules/phils-day-night-cycle)** | ❌ **GitHub Only**<br>*(Removed due to AI policy / Wegen KI-Richtlinien entfernt)* | 🇬🇧 Immersive clock widget with Solar Arc, full calendar system, and a living weather engine featuring 360° wind physics, volumetric clouds, and 4,800+ narrative weather reports.<br>🇩🇪 Immersives Uhr-Widget mit Sonnenlauf, vollwertigem Kalendersystem und lebendiger Wetter-Engine mit 360°-Windphysik, volumetrischer Wolkendecke und über 4.800 Wetterberichten. | [GitHub](https://github.com/PhilsModules/phils-day-night-cycle) · [Manifest](https://github.com/PhilsModules/phils-day-night-cycle/releases/latest/download/module.json) |
| **[Phil's Console Doctor & Task Manager](https://github.com/PhilsModules/phils-console-doctor)** | ❌ **GitHub Only**<br>*(Removed due to AI policy / Wegen KI-Richtlinien entfernt)* | 🇬🇧 Windows 11-style Task Manager & diagnostics suite for Foundry VTT with real-time CPU/GPU load breakdown, conflict detective, A/B culprit finder, and AI error analysis.<br>🇩🇪 Diagnose-Suite im Windows-11-Task-Manager-Stil mit Live-CPU/GPU-Auslastung, Konflikt-Detektiv, automatischem A/B-Problemlöser und KI-Fehleranalyse. | [GitHub](https://github.com/PhilsModules/phils-console-doctor) · [Manifest](https://github.com/PhilsModules/phils-console-doctor/releases/latest/download/module.json) |
| **[Phil's PF2e RealDark](https://github.com/PhilsModules/phils-pf2e-realdark)** | ❌ **GitHub Only**<br>*(Removed due to AI policy / Wegen KI-Richtlinien entfernt)* | 🇬🇧 A true, customizable dark mode for Pathfinder 2e with 30+ handcrafted theme presets, live preview wizard, and high-contrast readability.<br>🇩🇪 Ein echter, anpassbarer Dark Mode für Pathfinder 2e mit über 30 kuratierten Presets, Live-Vorschau-Assistent und erstklassiger Lesbarkeit. | [GitHub](https://github.com/PhilsModules/phils-pf2e-realdark) · [Manifest](https://github.com/PhilsModules/phils-pf2e-realdark/releases/latest/download/module.json) |
| **[Phil's Universal Translator](https://github.com/PhilsModules/phils-universal-translator)** | ❌ **GitHub Only**<br>*(Removed due to AI policy / Wegen KI-Richtlinien entfernt)* | 🇬🇧 System-agnostic local translation assistant for personal game prep with zero API costs, direct local LLM (Ollama) integration, LinkProtection, and 12-category lore glossary.<br>🇩🇪 Systemunabhängiger Übersetzungs-Assistent für die private Spielvorbereitung ohne API-Kosten, mit lokaler Ollama-Anbindung, LinkProtection und 12-Kategorien-Glossar. | [GitHub](https://github.com/PhilsModules/phils-universal-translator) · [Manifest](https://github.com/PhilsModules/phils-universal-translator/releases/latest/download/module.json) |
| **[Phil's UI Tweaks](https://github.com/PhilsModules/phils-foundry-ui-tweaks)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 Customize, reorder, hide, and group Scene Controls (left toolbar) and Sidebar Tabs (right toolbar) into custom pop-out folders with a sleek Modern Dark UI.<br>🇩🇪 Passe die linke Werkzeugleiste und rechte Seitenleiste frei an – umsortieren, ausblenden und Tabs in eigenen Ausklapp-Ordnern im Modern Dark UI Design gruppieren. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-foundry-ui-tweaks) · [Manifest](https://github.com/PhilsModules/phils-foundry-ui-tweaks/releases/latest/download/module.json) |
| **[Phil's Quest Tracker](https://github.com/PhilsModules/phils-quest-tracker)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 Immersive Quest Log in a Modern Dark UI featuring collaborative party quests, job boards, drag & drop rewards, and automatic calendar synchronization.<br>🇩🇪 Immersives Quest-Log im Modern Dark UI mit kollaborativen Gruppenquests, Auftragsbrett, Drag-&-Drop-Belohnungen und automatischer Kalender-Synchronisation. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-quest-tracker) · [Manifest](https://github.com/PhilsModules/phils-quest-tracker/releases/latest/download/module.json) |
| **[Phil's PF2e AI Translator](https://github.com/PhilsModules/phils-pf2e-ai-translator)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 Next-Gen AI translation studio for Pathfinder 2e with `lang-de-pf2e` compendium integration (15,000+ official terms), LinkProtection, Smart-Sync, and zero API costs.<br>🇩🇪 KI-Übersetzungs-Studio für Pathfinder 2e mit `lang-de-pf2e`-Integration (über 15.000 offizielle Begriffe), LinkProtection, Smart-Sync und null API-Kosten. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-pf2e-ai-translator) · [Manifest](https://github.com/PhilsModules/phils-pf2e-ai-translator/releases/latest/download/module.json) |
| **[Phil's PF2e Action Colours](https://github.com/PhilsModules/phils-pf2e-action-colours)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 Visualizes the Pathfinder 2e 3-Action (and 4-Action Quickened) economy on the drag ruler with dynamic condition/feat detection, smart routing, and 3 colorblind modes.<br>🇩🇪 Visualisiert die Pathfinder 2e 3-Aktionen-Ökonomie (inkl. 4. Aktion bei Hast) direkt beim Token-Ziehen – mit Zustandserkennung, Smart Routing und 3 Farbenblind-Modi. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-pf2e-action-colours) · [Manifest](https://github.com/PhilsModules/phils-pf2e-action-colours/releases/latest/download/module.json) |
| **[Phil's Random Names](https://github.com/PhilsModules/phils-random-names)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 Deluxe generator suite with 5.3M+ NPC name combinations, tavern menus, treasure pouches, custom merchant shops, and 23,000+ entries with drag & drop item creation.<br>🇩🇪 Deluxe-Generator mit über 5,3 Mio. NSC-Namen, Tavernen-Menüs, Schatzbeuteln, eigenen Händler-Auslagen und über 23.000 Einträgen inkl. Drag-&-Drop-Item-Erstellung. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-random-names) · [Manifest](https://github.com/PhilsModules/phils-random-names/releases/latest/download/module.json) |
| **[Phil's AI Assistant](https://github.com/PhilsModules/phils-ai-assistant)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 Connect your Foundry VTT world to Gemini, ChatGPT, Claude, Copilot, Perplexity, or local Ollama with zero API costs to write lore, edit items, and generate image prompts.<br>🇩🇪 Verbinde deine Foundry-Welt ohne API-Kosten mit Gemini, ChatGPT, Claude, Copilot, Perplexity oder lokal mit Ollama für Lore-Texte, Item-Anpassungen und Bild-Prompts. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-ai-assistant) · [Manifest](https://github.com/PhilsModules/phils-ai-assistant/releases/latest/download/module.json) |
| **[Phil's Token Studio](https://github.com/PhilsModules/phils-token-studio)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 High-performance in-game visual token editor with layer management, smart masking, 3D pop-out effects, and Foundry Dynamic Token Ring integration.<br>🇩🇪 Leistungsstarker visueller Token-Editor direkt in Foundry VTT mit Ebenensystem, intelligenter Maskierung, 3D-Pop-out-Effekten und Dynamic-Token-Ring-Unterstützung. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-token-studio) · [Manifest](https://github.com/PhilsModules/phils-token-studio/releases/latest/download/module.json) |
| **[Phil's Journal Translator](https://github.com/PhilsModules/phils-journal-translator)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 System-agnostic AI translation assistant for Foundry VTT journals using free web AI services (Gemini, ChatGPT, Claude, etc.) with automatic backups.<br>🇩🇪 Systemunabhängiger KI-Übersetzungs-Assistent für Foundry VTT Journale über kostenlose Web-KIs (Gemini, ChatGPT, Claude etc.) mit automatischen Backups. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-journal-translator) · [Manifest](https://github.com/PhilsModules/phils-journal-translator/releases/latest/download/module.json) |
| **[Phil's Random Quests](https://github.com/PhilsModules/phils-random-quests)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 Instant adventure and quest idea generator for Pathfinder 2e and D&D 5e when your party goes off the rails.<br>🇩🇪 Schneller Generator für spontane Abenteuer- und Quest-Ideen in Pathfinder 2e und D&D 5e am Spieltisch. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-random-quests) · [Manifest](https://github.com/PhilsModules/phils-random-quests/releases/latest/download/module.json) |
| **[Phil's Art Replacer](https://github.com/PhilsModules/phils-art-replacer)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 Scans your entire world and installed modules to automatically find and replace missing actor and token artwork with side-by-side comparison.<br>🇩🇪 Durchsucht deine gesamte Welt und installierte Module, um fehlende Bilder für Akteure und Tokens automatisch mit Vorher-Nachher-Vergleich zu ersetzen. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-art-replacer) · [Manifest](https://github.com/PhilsModules/phils-art-replacer/releases/latest/download/module.json) |
| **[Phil's Map Migrator](https://github.com/PhilsModules/phils-map-migrator)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 Professional scene migration tool with 1–5 point mathematical calibration, geometry failsafe, and automatic scaling for walls, lights, tokens, and pins.<br>🇩🇪 Profi-Werkzeug für präzise Szenen-Migration mit 1–5-Punkte-Kalibrierung, Geometrie-Wächter und automatischer Skalierung für Wände, Lichter, Tokens und Pins. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-map-migrator) · [Manifest](https://github.com/PhilsModules/phils-map-migrator/releases/latest/download/module.json) |

---

## 📜 License

This module uses a dual license structure.

- **Code:** GNU GPLv3
- **Assets:** CC BY-NC-ND 4.0

See `LICENSE` file for details.

<br>

<div align="center">
    <h2>❤️ Support the Development</h2>
    <p>If you enjoy this module and want to support open source development for Foundry VTT check out my Patreon.</p>
    <p>Gefällt dir das Modul? Unterstütze die Weiterentwicklung auf Patreon.</p>
    <a href="https://www.patreon.com/PhilsModules">
        <img src="https://c5.patreon.com/external/logo/become_a_patron_button.png" alt="Become a Patron" width="200" />
    </a>
    <br><br>
    <p><i>Made with ❤️ for the Foundry VTT Community</i></p>
</div>
