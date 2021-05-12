import { MODULE_NAME } from './settings';

export const preloadTemplates = async function () {
	const templatePaths = [
		// Add paths to "module/XXX/templates"
		//`/modules/${MODULE_NAME}/templates/XXX.html`,

    `/modules/${MODULE_NAME}/templates/dnd5e/LootApp.html`,
    `/modules/${MODULE_NAME}/templates/dnd5e/LootAppConsumables.html`,
    `/modules/${MODULE_NAME}/templates/dnd5e/LootAppMagicItems.html`,
    `/modules/${MODULE_NAME}/templates/dnd5e/LootAppScrolls.html`,
    `/modules/${MODULE_NAME}/templates/dnd5e/LootAppSidebar.html`,
    `/modules/${MODULE_NAME}/templates/dnd5e/LootAppTreasure.html`,

    `/modules/${MODULE_NAME}/templates/dnd5e/create/CreateArmor.html`,
    `/modules/${MODULE_NAME}/templates/dnd5e/create/CreateShared.html`,
    `/modules/${MODULE_NAME}/templates/dnd5e/create/CreateTab.html`,
    `/modules/${MODULE_NAME}/templates/dnd5e/create/CreateWeapon.html`,
    `/modules/${MODULE_NAME}/templates/dnd5e/create/RuneStats.html`,
    `/modules/${MODULE_NAME}/templates/dnd5e/create/SelectRow.html`,

    `/modules/${MODULE_NAME}/templates/pf2e/LootApp.html`,
    `/modules/${MODULE_NAME}/templates/pf2e/LootAppConsumables.html`,
    `/modules/${MODULE_NAME}/templates/pf2e/LootAppMagicItems.html`,
    `/modules/${MODULE_NAME}/templates/pf2e/LootAppScrolls.html`,
    `/modules/${MODULE_NAME}/templates/pf2e/LootAppSidebar.html`,
    `/modules/${MODULE_NAME}/templates/pf2e/LootAppTreasure.html`,

    `/modules/${MODULE_NAME}/templates/pf2e/create/CreateArmor.html`,
    `/modules/${MODULE_NAME}/templates/pf2e/create/CreateShared.html`,
    `/modules/${MODULE_NAME}/templates/pf2e/create/CreateTab.html`,
    `/modules/${MODULE_NAME}/templates/pf2e/create/CreateWeapon.html`,
    `/modules/${MODULE_NAME}/templates/pf2e/create/RuneStats.html`,
    `/modules/${MODULE_NAME}/templates/pf2e/create/SelectRow.html`,


	];

	return loadTemplates(templatePaths);
}
