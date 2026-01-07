import { QuestManager } from '../quest-manager.js';

const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;

export class QuestSheet extends HandlebarsApplicationMixin(ApplicationV2) {
  constructor(journalEntry, options = {}) {
    super(options);
    this.document = journalEntry;
  }

  static DEFAULT_OPTIONS = {
    tag: 'form',
    classes: ['pqt-app', 'pqt-quest-sheet'],
    window: {
      title: 'PQT.Title', // Dynamic title in _prepareContext
      icon: 'fas fa-book-open',
      resizable: true,
      controls: []
    },
    position: {
      width: 600,
      height: 850
    },
    actions: {
      saveQuest: QuestSheet.saveQuest,
      deleteObjective: QuestSheet.deleteObjective,
      addObjective: QuestSheet.addObjective,
      deleteReward: QuestSheet.deleteReward,


      exportQuest: QuestSheet.exportQuest,
      pickDate: QuestSheet.pickDate,

      deleteGiver: QuestSheet.deleteGiver,
      saveAndClose: QuestSheet.saveAndClose
    },
    form: {
      handler: QuestSheet.formHandler,
      submitOnChange: false,
      closeOnSubmit: false
    },
    dragDrop: [{ dragSelector: null, dropSelector: ".pqt-drop-zone" }] // V2 specific drag drop?
  };

  static PARTS = {
    main: {
      template: 'modules/phils-quest-tracker/templates/quest-sheet.hbs',
      scrollable: ['.pqt-content']
    }
  };

  get title() {
    return this.document?.name || "Quest";
  }

  async _prepareContext(options) {
    const data = this.document.getFlag(QuestManager.ID, QuestManager.FLAG) || QuestManager.defaultQuestData;
    
    // Enrich HTML description
    // Handle V12 deprecation of global TextEditor
    const editorCls = foundry.applications?.ux?.TextEditor || TextEditor;
    const description = await editorCls.enrichHTML(data.description, {
      secrets: this.document.isOwner,
      async: true
    });

    // Migration: Source -> Givers
    if (data.source && data.source.uuid && (!data.givers || data.givers.length === 0)) {
        data.givers = [data.source];
        // We don't save back immediately to avoid spamming updates on open, 
        // but it will be saved on next edit.
    }
    // Ensure givers is array
    if (!data.givers) data.givers = [];

    return {
      quest: data,
      document: this.document,
      description: description,
      isGM: game.user.isGM,
      isEditing: this.document.isOwner, // Always allow editing for owners
      statuses: {
        active: "PQT.Status.Active",
        completed: "PQT.Status.Completed",
        failed: "PQT.Status.Failed",
        available: "PQT.Status.Available",
        draft: "PQT.Status.Draft"
      },
      visibilities: {
        always: "PQT.Visibility.Always",
        gm: "PQT.Visibility.GM",
        date: "PQT.Visibility.Date"
      },
      categories: {
        main: "PQT.Category.Main",
        side: "PQT.Category.Side",
        personal: "PQT.Category.Personal"
      }
    };
  }

  /* ------------------------------------------- */
  /*  Event Listeners & Actions                  */
  /* ------------------------------------------- */

  static async pickDate(event, target) {
      if (!window.PhilsDayNightCycle) return ui.notifications.warn("Phils Day Night Cycle not active.");
      
      const app = new window.PhilsDayNightCycle.PhilsCalendarApp({
          onDateSelect: (dateKey) => {
              // dateKey is YYYY-M-D (or MM-DD)
              // We want to format it nicely for the input: DD. MM. YYYY
              const [y, m, d] = dateKey.split('-').map(Number);
              const formatted = `${String(d).padStart(2, '0')}. ${String(m+1).padStart(2, '0')}. ${y}`;
              
              // Set value in form (using standard DOM access since we are in a V2 listener)
              // target is the button.
              const input = target.closest('.date-field').querySelector('input');
              if (input) {
                  input.value = formatted;
                  // Trigger change for submitOnChange
                  input.dispatchEvent(new Event('change', { bubbles: true }));
              }
          }
      });
      app.render(true);
  }

  /* ------------------------------------------- */
  /*  Event Handlers                             */
  /* ------------------------------------------- */

  static async saveQuest(event, target) {
    await this.submit();
  }

  static async saveAndClose(event, target) {
    await this.submit();
    this.close();
  }



  static async addObjective(event, target) {
    // We need to grab current form data to not lose edits
    // Fix for V13 deprecation of global FormDataExtended
    const FormDataExt = foundry.applications?.ux?.FormDataExtended || FormDataExtended;
    const formData = new FormDataExt(this.element).object;
    
    // But adding a row is UI state.
    // Ideally we save, add, render.
    await this.submit(); // Save current state
    
    // Add objective to flag
    const data = this.document.getFlag(QuestManager.ID, QuestManager.FLAG) || {};
    let objectives = data.objectives;
    
    // Safeguard: Ensure objectives is an array
    if (!Array.isArray(objectives)) {
        objectives = objectives ? Object.values(objectives) : [];
    }

    objectives.push({ id: foundry.utils.randomID(), text: "", completed: false });
    
    await this.document.setFlag(QuestManager.ID, QuestManager.FLAG, { objectives });
    this.render();
  }

  static async deleteObjective(event, target) {
    if (this instanceof QuestSheet) await this.submit(); // Ensure context
    const id = target.dataset.id;
    const data = this.document.getFlag(QuestManager.ID, QuestManager.FLAG);
    const objectives = data.objectives.filter(o => o.id !== id);
    await this.document.setFlag(QuestManager.ID, QuestManager.FLAG, { objectives });
    this.render();
  }

  static async deleteGiver(event, target) {
      if (this instanceof QuestSheet) await this.submit();
      const index = Number(target.dataset.index);
      const data = this.document.getFlag(QuestManager.ID, QuestManager.FLAG);
      let givers = data.givers || [];
      if (!Array.isArray(givers)) givers = Object.values(givers);

      if (givers && givers[index]) {
          givers.splice(index, 1);
          await this.document.setFlag(QuestManager.ID, QuestManager.FLAG, { givers: givers });
          this.render();
      }
      }

  static async deleteReward(event, target) {
      if (this instanceof QuestSheet) await this.submit();
      const index = Number(target.dataset.index);
      const data = this.document.getFlag(QuestManager.ID, QuestManager.FLAG);
      let rewards = data.rewards || [];
      if (!Array.isArray(rewards)) rewards = Object.values(rewards);

      if (rewards && rewards[index]) {
          rewards.splice(index, 1);
          await this.document.setFlag(QuestManager.ID, QuestManager.FLAG, { rewards: rewards });
          this.render();
      }
  }
  
  static async exportQuest(event, target) {
    // Export to Markdown
    const data = this.document.getFlag(QuestManager.ID, QuestManager.FLAG);
    const content = `# ${data.title}\n\n${data.description}\n\n## Objectives\n${data.objectives.map(o => `- [${o.completed ? 'x' : ' '}] ${o.text}`).join('\n')}`;
    
    saveDataToFile(content, "text/markdown", `${data.title}.md`);
  }

  /* ------------------------------------------- */
  /*  Form Submission                            */
  /* ------------------------------------------- */
  
  static async formHandler(event, form, formData) {
    const data = formData.object;
    // Process form data back into structure
    // We need to map "objectives.0.text" -> array
    const expanded = foundry.utils.expandObject(data);
    
    // Safety: Ensure objectives are saved as array (expandObject might make it an object if indices are sparse)
    if (expanded.objectives && !Array.isArray(expanded.objectives)) {
        expanded.objectives = Object.values(expanded.objectives);
    }

    // Safety: Ensure rewards are saved as array
    if (expanded.rewards && !Array.isArray(expanded.rewards)) {
        expanded.rewards = Object.values(expanded.rewards);
    }

    // Safety: Ensure givers are saved as array
    if (expanded.givers && !Array.isArray(expanded.givers)) {
        expanded.givers = Object.values(expanded.givers);
    }
    
    // Update Flags
    // We might need to handle the 'description' separately if using ProseMirror, 
    // but standard textarea works for now.
    
    // Merge with existing to keep other fields
    const current = this.document.getFlag(QuestManager.ID, QuestManager.FLAG) || {};
    
    // Auto-setup for Date Visibility
    if (expanded.visibility === 'date' && current.visibility !== 'date') {
        expanded.syncWithCalendar = true;
        // Only force available if we are "starting fresh" or user expectation
        // User said: "must be categorized as available"
        if (expanded.status === 'active') {
             expanded.status = 'available';
        }
    }
    
    const update = foundry.utils.mergeObject(current, expanded);
    
    await this.document.setFlag(QuestManager.ID, QuestManager.FLAG, update);
    
    // Sync Title/Name
    if (update.title && update.title !== this.document.name) {
      await this.document.update({ name: update.title });
      // Update the Window Title explicitly
      this.render(); 
    }
  }

  /* ------------------------------------------- */
  /*  Drag & Drop                                */
  /* ------------------------------------------- */
  
  _onDragOver(event) {
    // Standard HTML5 dragover
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  }

  async _onDrop(event) {
    await this.submit(); // Save form state before processing drop
    const editorCls = foundry.applications?.ux?.TextEditor || TextEditor;
    const data = editorCls.getDragEventData(event);
    if (!data) return;

    if (data.type === "Actor") {
      const actor = await fromUuid(data.uuid);
      if (actor) {
        // Add Giver (Append)
        const current = this.document.getFlag(QuestManager.ID, QuestManager.FLAG) || {};
        let givers = current.givers || [];
        
        // Safety: Ensure it's an array if corrupted
        if (!Array.isArray(givers)) givers = Object.values(givers);
        
        // Prevent Duplicates
        if (!givers.some(g => g.uuid === data.uuid)) {
            givers.push({
                uuid: data.uuid,
                name: actor.name,
                img: actor.img
            });
            await this.document.setFlag(QuestManager.ID, QuestManager.FLAG, { givers });
            this.render();
        }
      }
    } else if (data.type === "Item") {
      const item = await fromUuid(data.uuid);
      if (item) {
         // Add Reward
         const current = this.document.getFlag(QuestManager.ID, QuestManager.FLAG);
         const rewards = current.rewards || [];
         rewards.push({
           type: 'item',
           uuid: data.uuid,
           name: item.name,
           img: item.img,
           quantity: 1
         });
         await this.document.setFlag(QuestManager.ID, QuestManager.FLAG, { rewards });
         this.render();
      }
    }
  }

  /** @override */
  _attachPartListeners(partId, htmlElement, options) {
    super._attachPartListeners(partId, htmlElement, options);
    // Bind Drag & Drop manually since V2 dragDrop handler might differ or be simpler
    htmlElement.addEventListener("dragover", this._onDragOver.bind(this));
    htmlElement.addEventListener("drop", this._onDrop.bind(this));

    // Visibility Change Listener for Auto-Configuration
    const visibilitySelect = htmlElement.querySelector('select[name="visibility"]');
    if (visibilitySelect) {
        visibilitySelect.addEventListener('change', (event) => {
            if (event.target.value === 'date') {
                // 1. Auto-Check Sync with Calendar
                const syncCheckbox = htmlElement.querySelector('input[name="syncWithCalendar"]');
                if (syncCheckbox && !syncCheckbox.checked) {
                    syncCheckbox.checked = true;
                    syncCheckbox.dispatchEvent(new Event('change', { bubbles: true }));
                }

                // 2. Auto-Set Status to Available (if active or draft)
                const statusSelect = htmlElement.querySelector('select[name="status"]');
                if (statusSelect && (statusSelect.value === 'active' || statusSelect.value === 'draft')) {
                    statusSelect.value = 'available';
                    statusSelect.dispatchEvent(new Event('change', { bubbles: true }));
                }
            }
        });
    }
  }
}
