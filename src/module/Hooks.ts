import { warn, error, debug, i18n, i18nFormat } from "../foundryvtt-loot-generator";
import extendLootSheetDnd5e from "./dnd5e/LootApp";
import extendLootSheetPf2e from "./pf2e/LootApp";
import { MODULE_NAME } from './settings';


export let readyHooks = async () => {

  // setup all the hooks

  if(game.system.id == "dnd5e"){
    enableLootAppDnd5e();
  }

  if(game.system.id == "pf2e"){
    enableLootAppPf2e();
  }

  // Register custom sheets (if any)

}

export let setupHooks = () => {


}

export let initHooks = () => {
  warn("Init Hooks processing");


}


function enableLootAppDnd5e() {
  const LootApp = extendLootSheetDnd5e();

  Actors.registerSheet(MODULE_NAME, LootApp, {
      types: ['loot'],
      makeDefault: false,
  });
}

function enableLootAppPf2e() {
  const LootApp = extendLootSheetPf2e();

  Actors.registerSheet(MODULE_NAME, LootApp, {
      types: ['loot'],
      makeDefault: false,
  });
}
