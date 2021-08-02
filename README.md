# FoundryVTT Loot Generator

This is a tentative to externalize and make system indipendent the loot app of the module [PF2E Toolbox](https://github.com/Djphoenix719/FVTT-PF2EToolbox) .

THe principal scope of this is make it work with dnd5e system.

# THIS PROJECT IS ABBANDONED IN FAVOR OF [FVTT-PF2ELootGen](https://github.com/Djphoenix719/FVTT-PF2ELootGen)

## Known issue/Limitation

## Installation

It's always easiest to install modules from the in game add-on browser.

To install this module manually:
1.  Inside the Foundry "Configuration and Setup" screen, click "Add-on Modules"
2.  Click "Install Module"
3.  In the "Manifest URL" field, paste the following url:
`https://raw.githubusercontent.com/p4535992/foundryvtt-loot-generator/master/src/module.json`
4.  Click 'Install' and wait for installation to complete
5.  Don't forget to enable the module in game using the "Manage Module" button

### libWrapper

This module uses the [libWrapper](https://github.com/ruipin/fvtt-lib-wrapper) library for wrapping core methods. It is a hard dependency and it is recommended for the best experience and compatibility with other modules.

## Features 


This is a work in progress, but right now it can quickly roll treasure items (including updating their values correctly), roll consumables, and roll magic items. Works with the quick mystification feature if you want the items to need appraisal (hold alt as usual). It's a separate loot sheet, as noted in the preview image (click on Settings in the header and use the `pf2e-toolbox.LootApp` sheet).

![image](https://github.com/Djphoenix719/FVTT-PF2EToolbox/blob/master/.github/treasure-generator-v1.png?raw=true)

### Features to Come

- Spell Scroll creator
## [Changelog](./changelog.md)

## Issues

Any issues, bugs, or feature requests are always welcome to be reported directly to the [Issue Tracker](https://github.com/p4535992/foundryvtt-loot-generator/issues ), or using the [Bug Reporter Module](https://foundryvtt.com/packages/bug-reporter/).

## Credit

Thanks to anyone who helps me with this code! I appreciate the user community's feedback on this project!

- [PF2E Toolbox](https://github.com/Djphoenix719/FVTT-PF2EToolbox) ty to [Djphoenix719](https://github.com/Djphoenix719)

## License
This Foundry VTT module is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).
This work is licensed under Foundry Virtual Tabletop [EULA - Limited License Agreement for module development v 0.1.6](http://foundryvtt.com/pages/license.html).

## Acknowledgements

Bootstrapped with League of Extraordinary FoundryVTT Developers  [foundry-vtt-types](https://github.com/League-of-Foundry-Developers/foundry-vtt-types).

Mad props to the 'League of Extraordinary FoundryVTT Developers' community which helped me figure out a lot.

