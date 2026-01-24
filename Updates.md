# Update Log

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
