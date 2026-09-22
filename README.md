<div align="center">

# Phil's Quest Tracker 📜

![Foundry v14 Compatible](https://img.shields.io/badge/Foundry-v14-brightgreen?style=flat-square) ![Foundry v12 Compatible](https://img.shields.io/badge/Foundry-v12-green?style=flat-square) ![License](https://img.shields.io/badge/License-GPLv3-blue?style=flat-square)
[![Version](https://img.shields.io/badge/Version-2.0.0-blue?style=flat-square)](https://github.com/PhilsModules/phils-quest-tracker/releases) [![Patreon](https://img.shields.io/badge/SUPPORT-Patreon-ff424d?style=flat-square&logo=patreon)](https://www.patreon.com/PhilsModules)

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
> A quick note before you start: I create these modules completely in my free time and offer them to the community for free. Since neither my partner nor I are professional graphic designers, translators, or full time developers, maintaining these projects takes a huge amount of effort. To make these modules possible, we use assistance from artificial intelligence, especially for translations and visual elements. Hiring professional designers or translators is simply something we cannot afford out of pocket.
> 
> If these modules should ever be removed from the official Foundry package listing due to rules regarding artificial intelligence, do not worry. The project will continue! You can always find all updates, releases, and support directly here on GitHub.
> 
> Thank you so much for your understanding and support!
> 
> ---
> 
> 🇩🇪 **Hallo zusammen!**  
> Ein kleiner Hinweis in eigener Sache, bevor ihr startet: Ich erstelle diese Module komplett in meiner Freizeit und stelle sie der Community kostenlos zur Verfügung. Da weder meine Lebensgefährtin noch ich Grafikdesigner, gelernte Übersetzer oder hauptberufliche Entwickler sind, ist die Pflege extrem aufwendig. Um die Module in dieser Form überhaupt anbieten zu können, nutzen wir Hilfe von künstlicher Intelligenz, zum Beispiel für Übersetzungen und grafische Elemente. Professionelle Designer oder Übersetzer können wir uns privat schlicht nicht leisten.
> 
> Sollten die Module wegen der Nutzung von künstlicher Intelligenz oder veränderter Richtlinien irgendwann aus dem offiziellen Verzeichnis von Foundry gelöscht werden, müsst ihr euch keine Sorgen machen. Das Projekt stirbt nicht! Ihr findet alle Updates, neue Versionen und Unterstützung bei Problemen weiterhin direkt hier auf GitHub.
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

### 🎮 Macro Support

You can create a **Script Macro** to toggle the Quest Log using the following command:

```javascript
PhilsQuestTracker.toggleQuestLog();
```

You can also open a specific quest by ID:

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

### 🎮 Makro-Unterstützung

Du kannst ein **Skript-Makro** erstellen, um das Quest Log zu öffnen/schließen:

```javascript
PhilsQuestTracker.toggleQuestLog();
```

Eine bestimmte Quest direkt öffnen (ID aus der Konsole):

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
