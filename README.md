<div align="center">

# Phil's Quest Tracker 📜

![Foundry v13 Compatible](https://img.shields.io/badge/Foundry-v13-brightgreen?style=flat-square) ![Foundry v12 Compatible](https://img.shields.io/badge/Foundry-v12-green?style=flat-square) ![License](https://img.shields.io/badge/License-GPLv3-blue?style=flat-square)
[![Version](https://img.shields.io/badge/Version-1.0.0-orange?style=flat-square)](https://github.com/PhilsModules/phils-quest-tracker/releases) [![Patreon](https://img.shields.io/badge/SUPPORT-Patreon-ff424d?style=flat-square&logo=patreon)](https://www.patreon.com/PhilsModules)

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

- **Journal Integration:** Quests are stored as **hidden** Journal Entries to prevent player tampering and spoilers.
- **Custom Sheet:** A stunning, Modern Dark UI Quest Sheet that replaces the default journal view for Quest type entries.
- **Status Tracking:** Track quests through states: **Available**, **Active**, **Completed**, **Failed**.

### 📅 Day/Night Cycle Integration (Optional)

- **Calendar Sync:** Automatically syncs Quest Start and End dates to the **Phil's Day/Night Cycle** calendar.
- **Dynamic Visibility:** Quests set to "Visible from Start Date" appear as hidden (GM Only) events on the calendar until the date is reached. Once the day arrives, the quest automatically reveals itself to the players!
- **Spoiler Protection:** Future quests are completely hidden from players in the calendar log and day view until they become active.

### 🎭 Quest Details & Logic

- **Quest Giver:** Assign an Actor as the Quest Giver. Drag & Drop an actor to see their portrait and link directly to them.
- **Locations:** Specify start and end locations to help guide your players.
- **Rewards System:**
  - **XP Tracking:** Define XP rewards visible on the sheet and in chat.
  - **Item Drops:** Drag & Drop Items, Weapons or Spells into the Rewards section.
  - **Chat Claims:** When a quest is completed, a "Quest Completed" card is sent to chat. Players can drag rewards directly from the chat card to their character sheet!

### 🔐 Visibility & Permissions

- **Always Visible:** The quest is visible to players immediately (if permissions allow).
- **Visible from Start Date:** The quest remains hidden (Observer permissions revoked) until the world clock reaches the Start Date.
- **GM Only:** The quest is strictly for GM notes and tracking; players never see it.

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

1.  **Create a Quest:** Create a new Journal Entry and select "Quest" as the type.
2.  **Configure:** Open the sheet. Set the Title, Description, Giver and Rewards.
3.  **Set Visibility:** Choose when your players should see the quest.
4.  **Activate:** Move the status to "Active" when the party accepts the mission.
5.  **Complete:** When finished, mark as "Completed" to trigger the Rewards Chat Card and distribute loot!

<br>

---

<br>

# <img src="https://flagcdn.com/48x36/de.png" width="28" height="21" alt="DE"> Deutsche Anleitung

**Ein immersives System für das Management von Aufgaben in Foundry VTT.**

Phil's Quest Tracker wurde entwickelt um sich nahtlos in deine Welt einzufügen. Es bietet eine schicke Oberfläche im Modern Dark UI Look, eine robuste Anbindung an den Kalender und mächtige Werkzeuge für den Spielleiter.

## 🌟 Hauptfunktionen

### 📜 Das Quest Log

- **Integration ins Journal:** Quests werden als **versteckte** Journal Einträge gespeichert um Manipulationen durch Spieler und Spoiler zu verhindern.
- **Eigenes Design:** Ein atemberaubendes **Modern Dark UI** Quest Sheet ersetzt die Standard Ansicht für Einträge vom Typ Quest.
- **Status Verfolgung:** Behalte den Überblick mit Status Meldungen wie **Verfügbar**, **Aktiv**, **Abgeschlossen** oder **Fehlgeschlagen**.

### 📅 Integration des Kalenders (Optional)

- **Synchronisation:** Start und Enddaten der Quest werden automatisch mit dem **Phil's Day/Night Cycle** Kalender abgeglichen.
- **Dynamische Sichtbarkeit:** Quests mit der Einstellung "Sichtbar ab Startdatum" bleiben als versteckte Events im Kalender (nur für GM). Sobald der Tag im Spiel erreicht ist enthüllt sich die Quest automatisch für die Spieler!
- **Spoiler Schutz:** Zukünftige Aufgaben bleiben für Spieler komplett unsichtbar im Kalender Log bis sie wirklich aktiv werden.

### 🎭 Details und Logik

- **Auftraggeber:** weise einen Akteur als Auftraggeber zu. Ziehe einfach einen Token oder Akteur per Drag and Drop auf das Feld um sein Porträt und einen Link zu erhalten.
- **Orte:** Definiere Start und Endpunkte um deine Spieler zu leiten.
- **Belohnungssystem:**
  - **XP Verfolgung:** Definiere Erfahrungspunkte die direkt auf dem Bogen und im Chat angezeigt werden.
  - **Gegenstände:** Ziehe Items, Waffen oder Zauber per Drag and Drop in den Bereich für Belohnungen.
  - **Chat Abholung:** Wenn eine Quest abgeschlossen wird sendet das Modul eine Karte in den Chat. Spieler können Belohnungen direkt von dort in ihren Charakter Bogen ziehen!

### 🔐 Sichtbarkeit und Berechtigungen

- **Immer sichtbar:** Die Quest ist sofort für Spieler sichtbar (sofern sie Berechtigung auf das Journal haben).
- **Sichtbar ab Startdatum:** Die Quest bleibt verborgen (Beobachter Status entzogen) bis die Weltzeit das Startdatum erreicht.
- **Nur GM:** Die Quest dient rein als Notiz für den Spielleiter und Spieler sehen sie niemals.

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

1.  **Quest erstellen:** Erstelle einen neuen Journal Eintrag und wähle "Quest" als Typ aus.
2.  **Konfigurieren:** Öffne das Blatt. Setze Titel, Beschreibung, Auftraggeber und Belohnungen.
3.  **Sichtbarkeit setzen:** Wähle aus wann deine Spieler die Aufgabe sehen sollen.
4.  **Aktivieren:** Ändere den Status auf "Aktiv" sobald die Gruppe die Mission annimmt.
5.  **Abschließen:** Markiere die Quest als "Abgeschlossen" um die Belohnungskarte in den Chat zu senden und Beute zu verteilen!

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
