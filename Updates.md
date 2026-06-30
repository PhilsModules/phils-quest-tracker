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

