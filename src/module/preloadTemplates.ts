import { MODULE_NAME } from './settings';

export const preloadTemplates = async function () {
	// const MODULE_NAME = 'itemcollection';
	const templatePaths = [
		// Add paths to "module/XXX/templates"
		`/modules/${MODULE_NAME}/templates/loot-app/system/loot-sheet-no-edit.html`,
		`/modules/${MODULE_NAME}/templates/loot-app/create/CreateArmor.html`,
		`/modules/${MODULE_NAME}/templates/loot-app/create/CreateShared.html`,
		`/modules/${MODULE_NAME}/templates/loot-app/create/CreateTab.html`,
		`/modules/${MODULE_NAME}/templates/loot-app/create/CreateWeapon.html`,
		`/modules/${MODULE_NAME}/templates/loot-app/create/RuneStats.html`,
		`/modules/${MODULE_NAME}/templates/loot-app/create/SelectRow.html`,
		`/modules/${MODULE_NAME}/templates/loot-app/LootApp.html`,
		`/modules/${MODULE_NAME}/templates/loot-app/LootAppConsumables.html`,
		`/modules/${MODULE_NAME}/templates/loot-app/LootAppMagicItems.html`,
		`/modules/${MODULE_NAME}/templates/loot-app/LootAppScrolls.html`,
		`/modules/${MODULE_NAME}/templates/loot-app/LootAppSidebar.html`,
		`/modules/${MODULE_NAME}/templates/loot-app/LootAppTreasure.html`,
	];

	return loadTemplates(templatePaths);
}
