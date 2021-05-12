import { MODULE_NAME, registerSettings } from './settings';
import extendLootSheet from './loot-app/LootApp';
import { preloadTemplates } from './preloadTemplates';

/* ------------------------------------ */
/* Initialize module					*/
/* ------------------------------------ */
Hooks.once('init', async () => {
	console.log('ItemCollection | Initializing ItemCollection');

	// Assign custom classes and constants here

	// Register custom module settings
	registerSettings();
	//CONFIG.debug.hooks = true;
	// Preload Handlebars templates
	await preloadTemplates();
    
    // Register custom sheets (if any)
    enableLootApp();
    //if (Settings.get(Settings.FEATURES.QUICK_MYSTIFY)) {
        if (!window['ForienIdentification']) {
            ui.notifications.warn("Loot app quick mystify enabled but Forien's Unidentified Items was not detected.", { permanent: true });
            //Settings.set(Settings.FEATURES.QUICK_MYSTIFY, false);
            return;
        }

        enableQuickMystify();
    //}
});

/* ------------------------------------ */
/* Setup module							*/
/* ------------------------------------ */
Hooks.once('setup', () => {
	// Do anything after initialization but before ready
	registerSettings();

});

/* ------------------------------------ */
/* When ready							*/
/* ------------------------------------ */
Hooks.once('ready', () => {
	// Do anything once the module is ready
	if (!game.modules.get("lib-wrapper")?.active && game.user.isGM){
    	ui.notifications.warn("The 'ItemCollection' module recommends to install and activate the 'libWrapper' module.");
	}
});

// Add any additional hooks if necessary

function enableQuickMystify() {
    const lootSheet = CONFIG.Actor.sheetClasses['loot']['pf2e.ActorSheetPF2eLoot'];
    lootSheet.cls = class ActorSheetPF2ELoot extends lootSheet.cls {
        async _onDrop(event: DragEvent) {
            // @ts-ignore
            const actor: Actor = this.actor;
            const existing = actor.items.map((i: Item) => i.id) as string[];
            await super._onDrop(event);

            if (event.altKey && game.user.isGM) {
                const newItems = actor.items.filter((i: Item) => !existing.includes(i.id)) as Item[];
                for (const item of newItems) {
                    window['ForienIdentification'].mystify(`Actor.${actor.id}.OwnedItem.${item.id}`, { replace: true });
                }
            }
        }
    };

    const characterSheet = CONFIG.Actor.sheetClasses['character']['ActorSheet5e'];
    characterSheet.cls = class CRBStyleCharacterActorSheetPF2E extends characterSheet.cls {
        async _onDrop(event: DragEvent) {
            // @ts-ignore
            const actor: Actor = this.actor;
            const existing = actor.items.map((i: Item) => i.id) as string[];
            await super._onDrop(event);

            if (event.altKey && game.user.isGM) {
                const newItems = actor.items.filter((i: Item) => !existing.includes(i.id)) as Item[];
                for (const item of newItems) {
                    window['ForienIdentification'].mystify(`Actor.${actor.id}.OwnedItem.${item.id}`, { replace: true });
                }
            }
        }
    };
}

function enableLootApp() {
    const LootApp = extendLootSheet();

    Actors.registerSheet(MODULE_NAME, LootApp, {
        types: ['loot'],
        makeDefault: false,
    });
}

