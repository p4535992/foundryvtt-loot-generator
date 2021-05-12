import { i18n } from '../foundryvtt-loot-generator';


export const MODULE_NAME = 'foundryvtt-loot-generator';

/**
 * Because typescript doesn't know when in the lifecycle of foundry your code runs, we have to assume that the
 * canvas is potentially not yet initialized, so it's typed as declare let canvas: Canvas | {ready: false}.
 * That's why you get errors when you try to access properties on canvas other than ready.
 * In order to get around that, you need to type guard canvas.
 * Also be aware that this will become even more important in 0.8.x because no canvas mode is being introduced there.
 * So you will need to deal with the fact that there might not be an initialized canvas at any point in time.
 * @returns
 */
 export function getCanvas(): Canvas {
	if (!(canvas instanceof Canvas) || !canvas.ready) {
		throw new Error("Canvas Is Not Initialized");
	}
	return canvas;
}

export const FEATURES = {
  // CREATURE_BUILDER: 'CREATURE_BUILDER',
  // DISABLE_PFS_TAB: 'DISABLE_PFS_TAB',
  // FLATTEN_PROFICIENCY: 'FLATTEN_PROFICIENCY',
  // HERO_POINTS: 'ENABLE_HERO_POINTS',
  // LOOT_APP: 'ENABLE_LOOT_APP',
  // NPC_SCALER: 'ENABLE_NPC_SCALER',
  // QUANTITIES: 'ENABLE_QUANTITIES',
  QUICK_MYSTIFY: 'ENABLE_QUICK_MYSTIFY',
  // REMOVE_DEFAULT_ART: 'REMOVE_DEFAULT_ART',
  // ROLL_APP: 'ENABLE_ROLL_APP',
  // TOKEN_SETUP: 'ENABLE_TOKEN_SETUP',
};


export const registerSettings = function () {

	game.settings.register(MODULE_NAME, FEATURES.QUICK_MYSTIFY, {
    name: i18n(`${MODULE_NAME}.${FEATURES.QUICK_MYSTIFY}`),
    hint: i18n(`${MODULE_NAME}.${FEATURES.QUICK_MYSTIFY}`),
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
  });
}
