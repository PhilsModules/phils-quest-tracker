import { QuestManager } from './quest-manager.js';
import { QuestLogApp } from './apps/quest-log-app.js';
import { QuestSheet } from './apps/quest-sheet.js';

Hooks.once('init', () => {
  console.log('Phils Quest Tracker | Initializing module');
  QuestManager.init();
});

Hooks.on('renderJournalDirectory', (app, html, data) => {
  QuestLogApp.renderSidebarControl(app, html);
});

Hooks.once('ready', () => {
  console.log('Phils Quest Tracker | Ready');

  // Expose API
  window.PhilsQuestTracker = {
    openQuest: async (questId) => {
      const quest = game.journal.get(questId);
      if (quest) {
        new QuestSheet(quest).render(true);
      }
    }
  };
  
  // Reactivity: Re-render Quest Log when Journal Entries change
  const reRenderLog = (doc) => {
    if (doc.documentName !== 'JournalEntry') return;
    // Check if it's a quest (flag or folder check)
    // Simple check: does it have our flag?
    const hasFlag = doc.getFlag(QuestManager.ID, QuestManager.FLAG);
    // Or is it in our folder?
    const inFolder = doc.folder?.name === QuestManager.FOLDER_NAME;
    
    if (hasFlag || inFolder) {
      // Find and render instances
      // instances is a Map in V2
      for (const app of foundry.applications.instances.values()) {
        if (app instanceof QuestLogApp) app.render();
      }
    }
  };

  Hooks.on('createJournalEntry', reRenderLog);
  Hooks.on('updateJournalEntry', reRenderLog);
  Hooks.on('deleteJournalEntry', reRenderLog);
});
