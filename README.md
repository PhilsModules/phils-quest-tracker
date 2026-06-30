<div align="center">

# Phil's Quest Tracker 📜

![Foundry v14 Compatible](https://img.shields.io/badge/Foundry-v14-brightgreen?style=flat-square) ![Foundry v12 Compatible](https://img.shields.io/badge/Foundry-v12-green?style=flat-square) ![License](https://img.shields.io/badge/License-GPLv3-blue?style=flat-square)
[![Version](https://img.shields.io/badge/Version-1.4.0-blue?style=flat-square)](https://github.com/PhilsModules/phils-quest-tracker/releases) [![Patreon](https://img.shields.io/badge/SUPPORT-Patreon-ff424d?style=flat-square&logo=patreon)](https://www.patreon.com/PhilsModules)

<br>

**Manage your adventures with a beautiful Modern Dark UI styled quest log.**
<br>
_Verwalte deine Abenteuer mit einem wunderschönen Quest Log im Modern Dark UI Design._

<br>

<a href="#-english-instructions"><img src="https://img.shields.io/badge/%20-English_Instructions-black?style=for-the-badge&logo=united-kingdom&logoColor=white" alt="English Instructions"></a> <a href="#-deutsche-anleitung"><img src="https://img.shields.io/badge/%20-Deutsche_Anleitung-black?style=for-the-badge&logo=germany&logoColor=red" alt="Deutsche Anleitung"></a> <a href="Updates.md"><img src="https://img.shields.io/badge/%20-Update_Logs-black?style=for-the-badge&logo=clock&logoColor=white" alt="Updates"></a>

</div>

<br>

---

<br>

# <img src="https://flagcdn.com/48x36/gb.png" width="28" height="21" alt="EN"> English Instructions

**A feature rich, immersive Quest Management system for Foundry VTT.**

Designed to seamlessly integrate with your world, offering a sleek Modern Dark UI, robust calendar synchronization and powerful GM tools.

## 🌟 Key Features

### 📜 Beautiful Quest Log

- **Module-native Storage:** Quests are stored directly inside the module's world data — completely invisible in the Journal Directory, with zero permission setup required.
- **Custom Sheet:** A stunning, Modern Dark UI Quest Sheet with tabs for Overview, Notes and Rewards.
- **Status Tracking:** Track quests through states: **Draft**, **Available**, **Active**, **Completed**, **Failed**.

### 📅 Day/Night Cycle Integration (Optional)

- **Calendar Sync:** Automatically syncs Quest Start dates to the **Phil's Day/Night Cycle** calendar.
- **Dynamic Visibility:** Quests set to "Visible from Start Date" appear as hidden (GM Only) events on the calendar until the date is reached. Once the day arrives, the quest automatically reveals itself to the players!
- **Spoiler Protection:** Future quests are completely hidden from players in the calendar log and day view until they become active.

### 🎭 Quest Details & Logic

- **Quest Giver:** Assign an Actor as the Quest Giver. Drag & Drop an actor to see their portrait and link directly to them.
- **Rewards System:**
  - **XP & Gold Tracking:** Define XP and Gold rewards visible on the sheet and in chat.
  - **Item Drops:** Drag & Drop Items, Weapons or Spells into the Rewards section.
  - **Chat Claims:** When a quest is completed, a "Quest Completed" card is sent to chat. Players can drag rewards directly from the chat card to their character sheet!
- **Objectives:** Add, reorder (drag & drop) and toggle individual objective visibility per player.
- **Notes:** Separate **Player Notes** (visible to all observers) and **GM Notes** (strictly private).

### 🔐 Visibility & Permissions

- **Always Visible:** The quest is immediately visible to all players in the Quest Log.
- **Visible from Start Date:** The quest remains hidden until the world clock reaches the Start Date (requires Phil's Day/Night Cycle).
- **GM Only:** The quest is strictly for GM notes and tracking; players never see it.

> **Note:** Quest data is never stored in or accessible through Foundry's Journal Directory. The module's own Quest Log is the only interface. No manual permission setup is needed.

### 🎮 Macro Support

You can create a **Script Macro** to toggle the Quest Log using the following command:

```javascript
PhilsQuestTracker.toggleQuestLog();
```

You can also open a specific quest by ID (shown in the browser console):

```javascript
PhilsQuestTracker.openQuest("questIdHere");
```

## 📦 Installation

1.  Open Foundry VTT.
2.  Go to the **Addon Modules** tab.
3.  Click **Install Module**.
4.  Paste the following **Manifest URL** into the field:
    ```text
    https://github.com/PhilsModules/phils-quest-tracker/releases/latest/download/module.json
    ```
5.  Click **Install**.

## 🚀 Getting Started

1.  **Open the Quest Log:** Click the **Quest Log** button in the Journal sidebar, or press **L** (default keybinding).
2.  **Create a Quest:** Click the **+ New Quest** button. GMs create quests directly; players send a request to the active GM automatically.
3.  **Configure:** The Quest Sheet opens automatically. Set the Title, Description, Quest Giver (drag an Actor) and Rewards (drag Items).
4.  **Set Visibility:** Choose when your players should see the quest (Always / GM Only / from Start Date).
5.  **Activate:** Move the status to **Active** when the party accepts the mission.
6.  **Complete:** When finished, mark as **Completed** to trigger the Rewards Chat Card!

### 🔄 Upgrading from v1.3.x

No action needed. On first launch after updating, the module automatically migrates all existing quest data to the new storage system. All quest IDs, titles, objectives, rewards and calendar links are preserved. The old journal folder is removed afterwards.

<br>

---

<br>

# <img src="https://flagcdn.com/48x36/de.png" width="28" height="21" alt="DE"> Deutsche Anleitung

**Ein immersives System für das Management von Aufgaben in Foundry VTT.**

Phil's Quest Tracker wurde entwickelt um sich nahtlos in deine Welt einzufügen. Es bietet eine schicke Oberfläche im Modern Dark UI Look, eine robuste Anbindung an den Kalender und mächtige Werkzeuge für den Spielleiter.

## 🌟 Hauptfunktionen

### 📜 Das Quest Log

- **Modul-eigene Datenspeicherung:** Quests werden direkt in den Weltdaten des Moduls gespeichert — vollständig unsichtbar im Journal, ohne irgendwelche Berechtigungs-Einstellungen.
- **Eigenes Design:** Ein atemberaubendes **Modern Dark UI** Quest Sheet mit Tabs für Übersicht, Notizen und Belohnungen.
- **Status Verfolgung:** Behalte den Überblick mit Status Meldungen wie **Entwurf**, **Verfügbar**, **Aktiv**, **Abgeschlossen** oder **Fehlgeschlagen**.

### 📅 Integration des Kalenders (Optional)

- **Synchronisation:** Startdaten der Quest werden automatisch mit dem **Phil's Day/Night Cycle** Kalender abgeglichen.
- **Dynamische Sichtbarkeit:** Quests mit der Einstellung „Sichtbar ab Startdatum" bleiben als versteckte Events im Kalender (nur für GM). Sobald der Tag im Spiel erreicht ist, enthüllt sich die Quest automatisch für die Spieler!
- **Spoiler Schutz:** Zukünftige Aufgaben bleiben für Spieler komplett unsichtbar im Kalender Log bis sie wirklich aktiv werden.

### 🎭 Details und Logik

- **Auftraggeber:** Weise einen Akteur als Auftraggeber zu. Ziehe einfach einen Token oder Akteur per Drag & Drop auf das Feld um sein Porträt und einen Link zu erhalten.
- **Belohnungssystem:**
  - **XP & Gold Verfolgung:** Definiere Erfahrungspunkte und Gold die direkt auf dem Bogen und im Chat angezeigt werden.
  - **Gegenstände:** Ziehe Items, Waffen oder Zauber per Drag & Drop in den Bereich für Belohnungen.
  - **Chat Abholung:** Wenn eine Quest abgeschlossen wird sendet das Modul eine Karte in den Chat. Spieler können Belohnungen direkt von dort in ihren Charakterbogen ziehen!
- **Ziele:** Ziele hinzufügen, per Drag & Drop neu anordnen und die Sichtbarkeit für Spieler individuell steuern.
- **Notizen:** Separate **Spielernotizen** (für alle Beobachter sichtbar) und **GM-Notizen** (ausschließlich für den GM).

### 🔐 Sichtbarkeit und Berechtigungen

- **Immer sichtbar:** Die Quest ist sofort für alle Spieler im Quest Log sichtbar.
- **Sichtbar ab Startdatum:** Die Quest bleibt verborgen bis die Weltzeit das Startdatum erreicht (erfordert Phil's Day/Night Cycle).
- **Nur GM:** Die Quest dient rein als Notiz für den Spielleiter und Spieler sehen sie niemals.

> **Hinweis:** Quest-Daten werden niemals im Journal gespeichert oder sind dort zugänglich. Das Modul-eigene Quest Log ist die einzige Benutzeroberfläche. Es sind keine manuellen Berechtigungs-Einstellungen notwendig.

### 🎮 Makro Unterstützung

Du kannst ein **Skript Makro** erstellen um das Quest Log zu öffnen/schließen:

```javascript
PhilsQuestTracker.toggleQuestLog();
```

Eine bestimmte Quest direkt öffnen (ID aus der Browserkonsole):

```javascript
PhilsQuestTracker.openQuest("questIdHere");
```

## 📦 Installation

1.  Öffne Foundry VTT.
2.  Gehe zum Reiter **Addon Modules**.
3.  Klicke auf **Install Module**.
4.  Füge die folgende **Manifest URL** unten ein:
    ```text
    https://github.com/PhilsModules/phils-quest-tracker/releases/latest/download/module.json
    ```
5.  Klicke auf **Install**.

## 🚀 Erste Schritte

1.  **Quest Log öffnen:** Klicke auf die **Quest Log** Schaltfläche in der Journal-Seitenleiste, oder drücke **L** (Standard-Tastenkürzel).
2.  **Quest erstellen:** Klicke auf **+ Neue Quest**. GM erstellt Quests direkt; Spieler senden automatisch eine Anfrage an den aktiven GM — ohne Berechtigungs-Einstellungen.
3.  **Konfigurieren:** Das Quest Sheet öffnet sich automatisch. Setze Titel, Beschreibung, Auftraggeber (Akteur reinziehen) und Belohnungen (Items reinziehen).
4.  **Sichtbarkeit setzen:** Wähle aus wann deine Spieler die Aufgabe sehen sollen (Immer / Nur GM / ab Startdatum).
5.  **Aktivieren:** Ändere den Status auf **Aktiv** sobald die Gruppe die Mission annimmt.
6.  **Abschließen:** Markiere die Quest als **Abgeschlossen** um die Belohnungskarte in den Chat zu senden!

### 🔄 Update von v1.3.x

Kein manueller Eingriff notwendig. Beim ersten Start nach dem Update migriert das Modul alle bestehenden Quest-Daten automatisch in das neue Speichersystem. Alle Quest-IDs, Titel, Ziele, Belohnungen und Kalender-Verknüpfungen bleiben erhalten. Der alte Journal-Ordner wird anschließend automatisch entfernt.

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
