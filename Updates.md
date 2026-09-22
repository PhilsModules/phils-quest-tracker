## v2.0.0 - Collaborative Quests, Personal Privacy & Calendar Deadlines

- **Collaborative Group Adventures**: Main Quests and Side Quests serve as joint adventures for the whole party. When players embark on their own adventures or pick up jobs, party members can now collaboratively organize, update quest notes, and track milestones together.
- **Job Board & Available Quests**: Adventurers can now freely accept quests marked as *Available* from notice boards, transition them to *Active*, mark them as *Completed* or *Failed*, or place them back on the board.
- **Dual Date Tracking & Calendar Deadlines**: Quests now feature distinct **Start Dates** and **End Dates / Deadlines** with an integrated calendar picker. When synchronized with the Day/Night Cycle calendar, both the start date and the deadline appear as linked calendar milestones with custom badges in the Quest Log.
- **Optional Start & Deadline Times**: Adventurers and Gamemasters can now specify an optional time (e.g. `14:00` or `08:30`) for both start dates and deadlines, or use the convenient world clock button to stamp the current in-game time with a single click. Times synchronize seamlessly to the calendar and display alongside dates.
- **Seamless Automatic Calendar Synchronization**: Quests with a start date or deadline now synchronize automatically with the Day/Night Cycle calendar. There is no need to remember a separate sync checkbox—simply picking or entering dates immediately registers the milestones on your calendar, while clearing them removes them cleanly.
- **Adventurer Calendar Privileges**: Players with editing access can set start dates, deadlines, and times directly on their group or personal quests.
- **Strict Personal Quest & Calendar Privacy**: Personal Quests remain strictly confidential between the owning adventurer and the Gamemaster. When synchronized with the calendar, personal quest dates and deadlines appear exclusively on the Gamemaster's and the assigned adventurer's calendar, completely hidden from other party members.
- **Dedicated Gamemaster Collaboration Controls**: Gamemasters can cleanly define editing permissions for any quest right from the quest window (Gamemaster Only, Entire Party, or Selected Adventurers) and grant permission for players to manage rewards and gold.
- **Configurable Quest Creation Permissions**: A new Gamemaster setting lets you decide whether players are allowed to create and designate Main Quests, or whether player-created quests are restricted strictly to Side Quests and Personal Quests.
- **Interactive Objective Checkboxes**: Party members can directly check off completed objectives on active quests without altering the Gamemaster's lore or descriptions.
- **Gamemaster Chat Whisper Audit**: Whenever a player modifies a quest, the Gamemaster receives a private whisper message detailing what changed, keeping the Gamemaster fully informed.
- **Custom Quest Colors & Custom Symbols**: Each individual quest can now be customized with its own accent color and symbol. Custom colors adorn the quest window and quest cards, and synchronize directly to the Day/Night Cycle calendar, while custom symbols and icons can be chosen from your world files or icon library.
- **Calendar Harmony**: Synchronized quests now display distinctive, atmospheric colors in the Day/Night Cycle calendar (Warm Gold for Main Quests, Polished Silver for Side Quests, Amethyst Purple for Personal Quests, and Crimson for Gamemaster Secrets, or your custom quest color).
- **Full Backward Compatibility**: All existing quest records and saved adventures are completely preserved and seamlessly integrate with the new collaboration tools.

## v1.6.2 - Localization Fix

- **Fix**: Resolved an issue where the language file failed to load in Foundry V14, causing raw text keys to be displayed throughout the Quest Log UI instead of proper translated text.

## v1.6.1 - Dialog & Localization Polish

- **Fix**: Resolved an issue where deleting a quest from within its edit window displayed un-localized raw text keys in the confirmation dialog.
- **Localization**: Audited and polished all dialogs, tooltips, notification messages, and window titles for complete English and German support.
- **UI Polish**: Uncategorized quests are now cleanly grouped under the *Misc* category in the Quest Log.

## v1.6.0 - Journal Entries & Pages as Quest Givers

- **Feature**: Quest Givers can now be **Journal Entries** or **Journal Entry Pages** in addition to Actors!
- **Drag & Drop**: GMs can drag and drop Actors, Journal Entries, or Journal Entry Pages directly into the Quest Giver section.
- **Interactive Sheet Link**: Clicking on any Quest Giver card in the Quest Sheet or Quest Log now directly opens that entity's sheet (`ActorSheet` or `JournalSheet`).
- **UI Polish**: Added clean icon badges to distinguish Actor quest givers from Journal Entry and Page quest givers.
- **Fix**: Restricted drop-zone permissions so players can no longer drag items onto quests created by the GM, preventing desync.
- **Fix**: Added missing translation key `PQT.Message.QuestRequested` for player quest creation notifications.

## v1.5.0 - Per-User Quest Visibility

- **Feature**: Reintroduced per-user and per-character quest visibility! You can now assign quests to specific players or characters via the new "Selected Players/Actors" visibility option.
- **UI/UX**: Added an elegant, interactive pill-list interface for selecting users and characters directly in the Quest Sheet header.
- **UI/UX**: Improved header layout responsiveness. The date and visibility controls now gracefully wrap on narrow windows, ensuring the export button is never pushed out of bounds.

## v1.4.1

- **Feature**: Added a new GM setting to dynamically size the Description box. It no longer has a fixed minimum height and will automatically adjust to its content.
- **Feature**: Added a new GM setting to display the Objectives section above the Description section in the Quest Sheet overview tab.
- **Security**: Added a new GM setting to control whether players are allowed to drag reward items from the Quest Sheet into their character sheets. By default, players can no longer drag items unless this setting is explicitly enabled.

## v1.4.0 – Architecture Overhaul: No More Journal Entries

> ⚠️ **Automatic Migration:** On first launch after this update, all existing quests are automatically migrated to the new storage system. No manual action required. Old journal entries are cleaned up afterwards.

- **Architecture**: Quest data is now stored in Foundry's **World Settings** instead of hidden Journal Entries. This eliminates all permission issues and makes quests truly invisible outside the module UI.
- **Feature**: Players can now create quests without any GM permission setup — the module handles everything internally via a secure GM-proxy socket connection.
- **Feature**: Player Notes can now be saved even when the GM is offline... wait, actually the GM must be online — but the save now actually *works* (the socket handler was missing before and is now fully implemented).
- **Fix**: The Quest Log now re-renders correctly for all connected clients (GM and players) after any change, creation or deletion.
- **Fix**: Quests are now truly hidden — no journal folder, no sidebar entries, nothing leaks to the Journal Directory.
- **Compatibility**: Full backward compatibility. All existing quest data (IDs, titles, objectives, rewards, calendar links) is preserved during automatic migration.
- **Stability**: Removed dependency on Foundry document permission system for quest visibility. Visibility is now handled purely in module code via the `visibility` field.
- **Socket**: Registered the module socket channel (`"socket": true` in module.json) — fixes Player Notes save that was silently failing since v1.3.1.
- **API**: `window.PhilsQuestTracker.openQuest(questId)` continues to work with the same IDs as before.

## v1.3.8

- **Fix**: Objective entries now keep their internal IDs, so empty or newly added objectives can be deleted reliably again.
- **Feature**: Added per-objective visibility controls so GMs can hide individual objectives from players until they should be revealed.
- **Feature**: Reward items in the rewards tab can now be dragged directly onto character sheets.
- **Localization**: Cleaned up the German translation to use proper umlauts in the shipped language file.

## v1.3.7
- **Fix**: Added a dedicated scroll area for long objective lists so newly created goals no longer disappear below the visible quest sheet.
- **Improvement**: New objectives are now scrolled into view automatically after creation.
- **Fix**: Reworked the "Quest Completed" chat card layout for better readability of portraits, titles, and rewards.
- **Stability**: Unified the quest sheet scroll container and tab layout to behave more reliably in Foundry V14.

## v1.3.6
- **VFC Validation**: Verified compatibility for Foundry VTT Version 14.
- **Bugfix**: Improved date parsing for historical years (negative years) to ensure perfect sync with the Day/Night Cycle calendar system.
- **Stability**: Minor bugfixes in quest log rendering and objective tracking.

## v1.3.5

- **Compatibility**: Updated for V14.

# Update Log

## v1.3.4

- **Feature**: **Macro Support**: Added `PhilsQuestTracker.toggleQuestLog()` to the global API. You can now create a script macro to open/close the Quest Log easily.

## v1.3.3

- **Fix**: **CSS Compatibility**: Scoped all internal CSS rules to the Quest Tracker to prevent styling conflicts with other modules (e.g., Character Sheets) and the core UI.

## v1.3.2

- **Fix**: **Objective Permissions**: Players (observers) can no longer mistakenly edit objectives.
- **Fix**: **UI Polish**: Fixed the alignment of the window close button and cleaned up the UI code.
- **Improvement**: **Code Cleanup**: Removed residual debug comments and improved code readability.

## v1.3.1

- **Feature**: **New Notes System**: Split notes into dedicated sections. **Player Notes** are visible to all quest observers, while **GM Notes** remain strictly private to the GM.
- **Feature**: **Tabbed Interface**: The Quest Sheet is now organized into "Overview", "Notes", and "Rewards" tabs for better usability.
- **Improvement**: **Player Quest Creation**: Fixed permission issues allowing players to seamlessly create and manage their own quests.
- **Fix**: **Calendar Synchronization**: Fixed an issue where players syncing quests to the calendar would cause errors. This is now securely handled by the GM client.
- **Fix**: **Deletion Sync**: Quest deletion now updates the Quest Log immediately for all connected players.

## v1.3.0

- **Feature**: **Drag & Drop Reordering**: You can now reorder Goals (Objectives) within a Quest and reorder Quests within the Quest Log using drag & drop.
- **Feature**: **Gold Rewards**: Added a Gold input field to the Quest Sheet for easy currency rewards.
- **Feature**: **Reward Visibility**: GMs can now toggle the visibility of specific reward items for players, even while the quest is active (via the "Eye" icon). The Quest Sheet also intelligently hides Gold/XP fields from players unless the quest is completed.
- **UX**: Added visual indicators (grip icons) for draggable elements to improve discoverability.

## v1.2.0

- **Feature**: Added a configurable keybinding (Default: 'L') to toggle the Quest Log.
- **Localization**: Added support for the keybinding in English and German.

## v1.1.0

- **UX Improvements**:
  - Added a "Delete Quest" button to the Quest Sheet footer (with confirmation dialog).
  - The Quest Sheet now automatically closes when the quest is deleted from the sidebar.
  - Improved scroll behavior: The Quest Sheet now maintains its scroll position when adding/removing objectives or rewards.
  - Removed redundant "Save Quest" button from the header.
- **Feature**: Added Export and Import functionality for Quests via Settings.
- **Localization**: Added German translations for the new settings menu.

## v1.0.1 (Internal)

- **Feature**: Added Export and Import functionality for Quests via Settings.
- **Localization**: Added German translations for the new settings menu.

## v1.0.0

- **Initial Verification Release**
- **Quest Log**: Full Journal-based quest system.
- **Calendar Sync**: Integration with Phils Day/Night Cycle.
- **Dynamic Visibility**: Hide future quests until start date.
- **Rewards**: Drag & Drop item rewards with Chat Card claiming.
- **XP System**: Integrated XP tracking and display.

