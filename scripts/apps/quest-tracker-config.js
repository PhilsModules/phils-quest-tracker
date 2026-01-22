import { QuestManager } from "../quest-manager.js";

export class QuestTrackerConfig extends FormApplication {
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            id: "phils-quest-tracker-config",
            title: "Phils Quest Tracker Settings", // Fallback if localization fails immediately
            template: "modules/phils-quest-tracker/templates/quest-tracker-settings.hbs",
            width: 400,
            height: "auto",
            resizable: false
        });
    }

    getData() {
        return {
            cssClass: "pqt-settings"
        };
    }

    activateListeners(html) {
        super.activateListeners(html);
        html.find('[data-action="export"]').click(this._onExport.bind(this));
        html.find('[data-action="import"]').click(this._onImport.bind(this));
    }

    async _onExport(event) {
        event.preventDefault();
        try {
            await QuestManager.exportQuests();
            ui.notifications.info(game.i18n.localize("PQT.Settings.ExportSuccess") || "Quests exported successfully.");
        } catch (err) {
            console.error(err);
            ui.notifications.error("Export failed. Check console for details.");
        }
    }

    async _onImport(event) {
        event.preventDefault();
        
        // Create a hidden file input
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        
        input.onchange = async (e) => {
            const file = e.target.files[0];
            if (!file) return;

            try {
                const text = await file.text();
                const data = JSON.parse(text);
                await QuestManager.importQuests(data);
                ui.notifications.info(game.i18n.localize("PQT.Settings.ImportSuccess") || "Quests imported successfully.");
            } catch (err) {
                console.error(err);
                ui.notifications.error("Import failed. Check console for details.");
            }
        };

        input.click();
    }

    async _updateObject(event, formData) {
        // No actual settings to save yet, just buttons
    }
}
