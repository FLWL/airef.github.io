var releaseNotes = [ {
		number: "20190228-000000",
		version: 1.5,
		notes: "UserPatch v1.5 RC has been released (20190228-000000)! This update fixes a critical bug in the tech system, where changes to ATTR_STORAGE_MODE (21) could break the population headroom counter. It's most noticeable with the Slav military building bonus in scenarios and maps like Fortress, but it can happen in other cases, as well. The fix makes a limited adjustment for SET_ATTRIBUTE with ATTR_STORAGE_MODE (21), storage mode 4, so updates are reflected as expected. In addition, 3 new restricted features have been added: Disable rec/spec score stats, Hidden civilization selection, Allow spectators by default. The first is for people using a separate overlay, while the other 2 are just to make it easier to change those without registry work. Thanks to John_the_Late for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6268) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "rms"
	},	{
		number: "20190101-000000",
		version: 1.5,
		notes: "UserPatch v1.5 RC has been released (20190101-000000)! This update adds a new restricted feature to show rec/spec market events. This will display player buy/sell messages in the chat event log. Please note that there may be a performance cost to this and event message flooding may occur. Thanks to CheeseOnToast for the idea! The multiplayer sync id has been updated, so all players in a game must have this build (6260) to play in multiplayer. Happy New Year!",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20181231-000000",
		version: 1.5,
		notes: "UserPatch v1.5 RC has been released (20181231-000000)! This update fixes an issue where livestock (class 58) would not be visible in the fog in scenario games due to the differing Fog Visibility states for gaia civ and non-gaia civ owned livestock. The issue was caused by the fix that ensured that gaia's scenario civ styling would not be reverted during gameplay. Thanks to Jineapple for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6258) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20181201-000000",
		version: 1.5,
		notes: "UserPatch v1.5 RC has been released (20181201-000000)! This update adjusts the new restricted feature to show rec/spec research stats. It will now display global research status information at the top-right corner of the screen instead of mixing that information in the chat event log. I think we're almost done lol. Will update on voobly later in the month. Thanks to LightTree, wattle, and Aleph for research feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6256) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20181031-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20181031-000000)! This update fixes a few issues with up-get-object-data and up-get-object-target-data when used as Facts in a defrule. In some cases, they were handling parameters improperly or returning false as a Fact. In addition, a restricted feature has been added to show simple rec/spec research events in the chat event log. This feature will probably be reworked and enhanced in the future. Thanks to CheeseOnToast for the AI report and LightTree for research feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6228) to play in multiplayer.",
		itemsAffected: [cUpGetObjectData, cUpGetObjectTargetData],
		scriptingType: "ai"
	},	{
		number: "20181030-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20181030-000000)! This update adds a new option for the spectator host to control the join delay for spectators in multiplayer games, which can help to avoid possible lag spikes during the critical first few seconds of a game. The delay can be controlled by the spec client app and defaults to 5 game seconds. Thanks to LightTree for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6224) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20181028-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20181028-000000)! This update fixes an issue where non-host recs may improperly inherit ZR terrain graphics due to incomplete state handling by the multiplayer game setup screen. In addition, a fix was made to ensure that the AI #load symbols UP-[NAME]-CIV-ALLY and UP-[NAME]-CIV-ENEMY are properly provided if a game expansion contains more than 31 civs. Finally, 4 new symbols have been added: UP-HUMAN-ALLY, UP-HUMAN-ENEMY, UP-COMPUTER-ALLY, and UP-COMPUTER-ENEMY. These can be used to optimize the loading of specific strategy scripts. Thanks to CheeseOnToast for the ZR terrain report and Esty for #load symbol feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6216) to play in multiplayer.",
		itemsAffected: [symUpNameCivAlly, symUpNameCivEnemy, symUpHumanAlly, symUpHumanEnemy, symUpComputerAlly, symUpComputerEnemy],
		scriptingType: "ai"
	},	{
		number: "20180808-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180808-000000)! This update adjusts the action-unload direct unit command, so that it will work for transport ships. For buildings, action-unload will ungarrison the units inside to the gather point or just eject them if unset. For class 13 siege units like rams, it will eject the units in-place. Finally, for transports, it will travel to the shore nearest to the target-point (like it would for a human) and unload units there. Please ensure the target-point is reachable or the ship may flood \"can't unload\" messages. If your transport ship is on beach terrain along a shoreline, you can probably safely use the ship's own point to unload. Thanks to CheeseOnToast for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6208) to play in multiplayer. Thanks Promi!",
		itemsAffected: [cUpTargetObjects, cUpTargetPoint],
		scriptingType: "ai"
	},	{
		number: "20180805-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180805-000000)! This update adjusts the previous starting resource fix, so that a negative resource start is allowed if defined for players in scenarios and campaigns. In addition, the issue with unexpected stack object duplication for gates and other similar objects has been fixed when testing scenarios. Map copy can still get special stack objects, but they should no longer multiply randomly. Finally, the UserPatchConst.per file has been updated to change cmdid-unknown to cmdid-fishing-ship (id 9) and reference.html has been updated to better describe the status filter requirements for up-find-resource. Thanks to rewaider and Julius999 for the stack object report, Promi for asking about the cmdid-unknown value, and CheeseOnToast for up-find-resource feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6206) to play in multiplayer.",
		itemsAffected: [cUpFilterInclude, cUpFilterExclude],
		scriptingType: "ai"
	},	{
		number: "20180804-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180804-000000)! This update adjusts the rms parser to ensure that the DEFAULT_RESOURCES, LOW_RESOURCES, MEDIUM_RESOURCES, and HIGH_RESOURCES consts for rms are defined for regicide and DM games, as ES had previously disabled them. In addition, the game will now set food, wood, stone, and gold to 0 if a starting resource amount (91 to 94) would result in a resource value that is less than zero. This should avoid unexpected issues when an rms adjusts starting resources to compensate for various game modes, while a player has a civ that starts with less than standard resources like the Chinese, Aztecs, and Huns. Thanks to Henk for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6202) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "rms"
	},	{
		number: "20180730-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180730-000000)! This update fixes a core bug carried from v1.0c with AI memory overflows caused by extended scenario tributes. Previously, if a tribute was sent by a scenario trigger to an AI with a resource id other than food, wood, gold, and stone, general memory corruption would occur. For compatibility until this release spreads (may take a few weeks), please use up-effect to add or set extended resources instead of tributing to AI players. Thanks to BFTanks for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6198) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "ai"
	},	{
		number: "20180726-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180726-000000)! This update fixes a crash bug in the scenario editor that can occur when shift+selecting objects to add them to scenario trigger effects. Thanks to rewaider on AoKH for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6196) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180724-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180724-000000)! This update adds a new flag for use with ATTR_BLAST_LEVEL, so the following flags are now available: 4: logistica-style 5HP damage, 8: elephant-style half damage. In other words, if a unit uses Blast Attack Level 2, but you want it to work like logistica, it should be set to 6 (2+4). If you want elephant-style half damage, it should be set to 10 (2+8). In addition to this, a new sync restricted feature has been added, \"Handle small farm selections\", that should ensure proper selection and targeting for 2x2 farms, such as those available to civs like Milan in Age of Chivalry (for Kor: you can add another 1 to the SetupAoC.exe -f: installer flags parameter to enable it by default). Thanks to TriRem for the blast level report and Wergorne and Pepp for the farm report! The multiplayer sync id has been updated, so all players in a game must have this build (6194) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180720-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180720-000000)! This update adjusts the \"up-get-object-data\" and \"up-get-object-target-data\" AI script rule actions, so they can be used as facts in a defrule, as well. In addition, the \"up-get-point-contains\" command should no longer crash when used with all-units-class. Please note, however, that when used with all-units-class (-1), the \"up-point-contains\" fact and \"up-get-point-contains\" action may capture unexpected objects like birds flying over a tile, terrain plants, etc. Thanks to CheeseOnToast for the report and feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6190) to play in multiplayer.",
		itemsAffected: [upGetObjectData, upGetObjectTargetData, upGetPointContains, upPointContains],
		scriptingType: "ai"
	},	{
		number: "20180701-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180701-000000)! This update includes some reliability improvements for handling the new Ctrl+ market transaction keys. The multiplayer sync id has been updated, so all players in a game must have this build (6188) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180629-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180629-000000)! This update fixes an issue with rms terrain desyncs from certain object creation orders. Previously, if an object without collision size was placed onto terrain that a building was also placed on, its placement could differ between players due to the building selectively changing its underlying terrain to \"foundation\" based on each player's line of sight, which would cause a desync. In addition, you can now hold \"Ctrl\" when buying or selling at the market for 1000 resources per click or hold \"Ctrl+Shift\" for 10000 resources per click. Although these aren't useful for most games, it might help to avoid awkward gameplay on certain \"nothing\" style maps. Thanks to Chrazini for the rms desync report and smzimran and teutonic_tanks for market transaction feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6186) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "rms"
	},	{
		number: "20180626-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180626-000000)! This update adds a new sync restricted feature to the installer: Disable civilian attack switch. This will disable unit attack type switching for class 4 units outside task group ids 1 and 2. If the unit has 1 or more entries in the A.G.E. attacks list, it will try to attack. Otherwise, attack requests will be ignored. This is intended for use only by mod developers and should not be installed unless necessary. You can find it by pressing F5 on the installer window to show the restricted features list.</p><p>In addition, the SetupAoC.exe installer has a new -n switch to perform a silent install of UP to a new age2_x1.5.exe, which can be used instead of the -i switch that performs a silent update of age2_x1.exe. Finally, the -f: installer feature flags switch has a new inherit (2) flag that keeps the current user's setting instead of forcing a feature checkbox to on (1) or off (0). The inherit (2) flag will likely be useful to not override user-specific settings like their preferred minimap colors. Thanks to Kor for feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6180) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180616-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180616-000000)! This update adjusts the keydown object hotkey fix to improve reliability and includes 2 fixes for rms. The first rms fix is for an issue that could occur when a comment is inside an \"if\" branch, where it would allow the text inside the comment to remain as partially active script. If the word \"if\" was present inside one of these bugged comments, the branch system would enter an unreliable state from that point forward. The second rms fix is intended to correct an issue caused by the recent terrain changes in WK, where trees would be placed on swapped terrain (16) by the cliff placement system. Now, rms cliffs will no longer place terrain objects on replaced map tiles. Thanks to Henk and TWest for the \"if\" comment report and Chrazini for the cliff object report! The multiplayer sync id has been updated, so all players in a game must have this build (6168) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "rms"
	},	{
		number: "20180611-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180611-000000)! This update extends the hotkey system to handle separate entries for the Palisade Gate, Feitoria, Genitour, and Siege Tower. The game will check the language file's default keys to determine whether or not to append these new hotkey entries to the system. For the Villager Build category, the Palisade Gate is checked by 16186 and named by 19212, while the Feitoria is checked by 16159 and named by 19075. For the Archery Range category, the Genitour is checked by 16417 and named by 19032. Finally, for the Siege Workshop category, the Siege Tower is checked by 16445 and named by 19048. Objects must have their hotkey properties set in A.G.E. to match the default key check ids. Thanks to TheViper for the report and TriRem and Jineapple for testing and feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6160) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180606-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180606-000000)! This update fixes several issues regarding the handling of treason minimap event flares. Now, if you execute the Treason command, you will see a colored minimap flare for each player target. These new treason flares are displayed for 10 game seconds with a slightly smaller appearance than player flares and they flash in a different style. They're also stored separately from normal \"zooming box\" minimap events now, so they'll no longer be lost due to the standard minimap limit or events such as train, build, and research completion. Thanks to II2N for the report and wattle for feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6146) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180531-020000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180531-020000)! This update fixes several compatibility issues for WK and AI terrain handling for dock construction and gathering across terrain zones. In addition, a previous fix for longboat idling has been adjusted in order to ensure that scenario trigger tasking works as expected. Thanks to TriRem for the terrain report and Mash and Cataphract887 on AoKH for the longboat report! The multiplayer sync id has been updated, so all players in a game must have this build (6136) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180525-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180525-000000)! This update includes several sync breaking fixes, so the rec id has been changed from VER 9.E to VER 9.F. If you work with rec analyzers, please update your code if necessary to include this new rec id for v1.5. New builds of v1.5 are backward compatible with recent v1.5 recs on VER 9.E (v1.5 Beta R6, etc.) and v1.4, v1.3, v1.0c, and v1.0b recs.</p>" +
		"<p>The first fix is for an issue where holding \"Alt\" when right-clicking to garrison may target nearby resources or other objects instead. It should now prioritize garrison in these cases, even if the mouse cursor does not always reflect this. Next, there's a fix for an issue with excessive pathing lag for min range unit retreating. This could cause noticeable slowdown during gameplay in some cases if units like skirmishers are backed against a treeline. There's also a core bug fix for an issue with garrison arrow count updates for building foundations, where if a tech (yasama) completes research while a building exists as an untouched foundation, the completed building would not benefit from the additional arrow bonus. Finally, there is a fix for an issue where AI villagers may idle after construction in some cases. This was most common near AI lumber camps, where villagers would stand idle as builders indefinitely.</p>" +
		"<p>As for new features, you can now hold \"Shift\" when clicking the Flare button to enable wall scanning during rec/spec. This will allow players to search for holes in walls, etc. while streaming or viewing recs. The scan, which uses a fortified wall block for best visibility and placement flexibility, is limited by the selected player's viewpoint, so enabling the fog of war can help to show which tiles you can scan, which is anywhere except the black area or the dark fog when All Visible mode is active.</p>" +
		"<p>Thanks to TWest for the garrison report, Aleph for the Illuminati min range demonstration, TriRem for the building arrow report, Promi for the AI construction report, and Deathcounter and wattle for rec/spec wall scanner feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6122) to play in multiplayer.</p>" +
		"<p>Still waiting on Voobly to make several client fixes requested in March, so v1.5 Beta R7 can be uploaded there.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180429-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180429-000000)! This update fixes an issue with scenario loading, where the game might crash if a mod reduces the civ count below the aok total. In addition, the ATTR_TRAITS flag to disable the object delete button will only apply to completed objects, so foundations can now be cancelled. Finally, for non-scenario games at 250 population or lower, a new pathing fix has been made to reduce movement freezing, which is often seen in late imperial black forest games, etc. Thanks to moddingnoob on AoKH for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6104) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180401-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180401-000000)! This update fixes an issue with the scenario editor where gaia objects weren't listed for placement due to the other recent gaia fix. Thanks to Mash on AoKH for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6096) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180331-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180331-000000)! This update adds the DATA_MODE_FLAGS (1) attribute for use with the GAIA_SET_PLAYER_DATA effect. You can set it to a combination of the following flags: 01: enable treason (flares guard unit type if no king exists) and 02: disable spies (button only, disable tech 408 to block research). This can be used from rms or scx to control spies/treason command availability. In addition, the multiplayer setup screen now preserves the last hosted game type except scenarios, which should hopefully help for people who usually play on DM instead of RM. Thanks to TriRem for spies/treason feedback and JRed for game setup feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6094) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180328-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180328-000000)! This update adds a new feature for rec/spec player switching. If you hold \"Shift\" and select another player's unit or building (except gaia), the focus will seamlessly switch to that player without changing the map view. This can be useful to easily observe a battle from multiple sides without being distracted by using the player name dropdown or having the view move across the map with each player change, etc. It's a full focus switch, so the UI, resource numbers, and fog of war will change with each shift+select. In addition, the gaia scenario civ issue has been fixed, in order to ensure that gaia units and buildings do not swap to default after conversion to a player. Thanks to AsteriskRAY for switch feedback and danielpr for the gaia scenario civ report! The multiplayer sync id has been updated, so all players in a game must have this build (6088) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180309-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180309-000000)! This update adds a restricted feature for Background audio playback (press F5 on the installer to see the restricted features list). This feature will allow the game's music and sound to continue playing in the background while multitasking, which might be helpful when streaming or recording. Thanks to Memb for feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6068) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180302-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180302-000000)! This update fixes an issue with AI builder assignment, where the wonder default builder count was 255, which is equivalent to -1 as a byte and that would disable builders in v1.5. The default has now been changed to 250 to ensure wonders are built as expected. The max number of taskable AI villagers is 250, so this change makes sense in general. Thanks to danielpr for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6060) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "ai"
	},	{
		number: "20180301-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180301-000000)! This update fixes an issue where diagonal walls would not be placed as expected at the map edge. The walls should now be placed as they appear in the placement preview. Thanks to Wergorne for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6058) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180229-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180229-000000)! This update adjusts the \"Custom normal mouse\" feature, so that it will work with alternate mouse cursor slps. It's been tested with the default ES cursors and the Precision Cursor, Bigger Cursor, and TIC Clan Cursor mods on Voobly. The multiplayer sync id has been updated, so all players in a game must have this build (6054) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180228-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180228-000000)! This update enables the mouse wheel to activate manual gate rotation mode without affecting hotkeys, allowing you to spin the gate into the necessary position. If you don't enable manual rotation mode for a particular instance of gate placement, the default rotation mode is available as always, where you can move a gate relative to nearby walls to rotate it. This fix ensures that the positions of nearby objects cannot obstruct gate placement. Thanks to metric on voobly for the report and aoezone for feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6052) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180224-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180224-000000)! This update includes adjustments for the installer (SetupAoC.exe) and removes debug code. The multiplayer sync id has been updated, so all players in a game must have this build (6050) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180223-010000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180223-010000)! This update includes additional refinements for mouse behavior in single player mode. The multiplayer sync id has been updated, so all players in a game must have this build (6038) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180223-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180223-000000)! This update fixes a bug in the AI script handling code. Thanks to II2N for the report! The multiplayer sync id has been updated, so all players in a game must have this build (6034) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180221-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180221-000000)! This update refines some of the mouse adjustments from recent builds. The multiplayer sync id has been updated, so all players in a game must have this build (6028) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180220-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180220-000000)! This update fixes some issues with the SetupAoC installer, so that the wide/center/left interface styles install properly and their current install state appears properly when reopening the installer. The multiplayer sync id has been updated, so all players in a game must have this build (6026) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180219-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180219-000000)! This update enables the \"Ctrl+X\" (cut), \"Ctrl+C\" (copy), \"Ctrl+V\" (paste), and \"Ctrl+A\" (select all) hotkeys to work for all text input. Previously, only the classic hotkeys were available, including \"Shift+Delete\" for cut, \"Ctrl+Insert\" for copy, and \"Shift+Insert\" for paste. Thanks to Cataphract887 on AoKH for feedback! The multiplayer sync id has been updated, so all players in a game must have this build (6024) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180218-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180218-000000)! This update fixes an issue that can cause dramatic performance loss on typically walled maps like Arena, Black Forest, etc. Rec replay performance for these maps should hopefully improve, as well. In addition, a new Advanced installer option has been added: Custom normal mouse. With this feature, the game will use a custom mouse cursor instead of directly drawing the cursor itself, essentially delinking it from the game's framerate, which can make mouse movement more smooth on some systems. It's similar to the original \"normal mouse\" option, but uses the actual slp game cursors instead of the system pointer.</p>" +
		"<p>Thanks to LightTree for finding the performance issue with walled maps and FillemUp on aoczone for the mouse report! The multiplayer sync id has been updated, so all players in a game must have this build (6020) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20180210-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20180210-000000)! This update includes many core, animation, and pathing performance fixes for various cpu levels. In addition, it fixes an issue where the game may crash due to an internal AI attack response, an issue with multiple selection where the stat framerate would collapse, and an issue with Alt+ goto building hotkeys. It also fixes a critical bug where certain kinds of excessive AI attack behavior could cause a command overflow desync. Finally, the About button is now hidden from the F10 gameplay system menu when it would cause the buttons to overflow the popup border.</p>" +
		"<p>Thanks to LightTree, offwo, and CoT for performance and sync testing, Krock for the internal AI crash report, Toutttt for the hotkey report, withmorten for the stat framerate report, and everyone from aoczone for providing cpu details! The multiplayer sync id has been updated, so all players in a game must have this build (5962) to play in multiplayer.</p>" +
		"<p>If you'd like to try a before/after with the previous public beta, try opening the knight lag save in both builds and compare performance.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20171218-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20171218-000000)! This update adjusts the processing of 1-unit AI group attacks, so a command flood will be less likely to cause an overflow. In addition, you can now shift+click any checkbox or multi-value number box like the player number or team number boxes to randomize the result (there is no intelligence here, so it's just the first random result). For single player mode, AI player colors will now be remembered and changing game settings will not reset them. Finally, you can now reset a hotkey (???) in the editor with a right-click while changing it. Thanks to LightTree, offwo, and CoT for the AI report, TWest for the player color feedback, and iPhone for hotkey feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5758) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	},	{
		number: "20171216-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20171216-000000)! This update fixes a crash in the AI managed building system that can occur when using " + cUpBuild.getLink() + " place-control after " + cUpSetPlacementData.getLink() + " was used to target placement at a player that has absolutely no objects remaining on the map, including dead objects. Thanks to LightTree and offwo for the report! The multiplayer sync id has been updated, so all players in a game must have this build (5748) to play in multiplayer. TWest, will look into those, thanks! Please visit the chat if you'd like to preview it.",
		itemsAffected: [cUpBuild, cUpSetPlacementData],
		scriptingType: "ai"
	}, {
		number: "20171215-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20171215-000000)! This update adds a lot of new fixes and features:</p><p><strong>General Updates</strong></p><ul><li>New extended statistics score display for rec/spec and AI-only single player games.</li><li>Hotkeys under \"More\" (Build, Dock) now have priority over go-to-building hotkeys.</li><li>Hold \"Shift\" when clicking the Idle Villager button to find idle military units.</li><li>\"Friend Foe Ids\" to override colors: REG_DWORD, Set enemy, self, neutral, ally as 0xEESSNNAA (default: 0x01000603).</li><li>Set language id 9870 to override the statistics headers with 4 tab-delimited lines:</li></ul><pre><code>For the following 4 views:\\r\\nScore Pop/ Cap Mil Civ Idl Trd Kill/Loss A\\r\\nTeam Pop/ Cap Nav Fsh Idl Cog Raze/Loss A\\r\\nV:W V:F V:G V:S  Exp Rlc Wnd Cst Dck TCs A\\r\\nWood   Food   Gold  Stone   Sent   Recv A\\r\\n\\r\\nSet language id 9870:\\r\\nScore Pop/ Cap Mil Civ Idl Trd Kill/Loss A\\tTeam Pop/ Cap Nav Fsh Idl Cog Raze/Loss A\\tV:W V:F V:G V:S  Exp Rlc Wnd Cst Dck TCs A\\tWood   Food   Gold  Stone   Sent   Recv A</code></pre><p><strong>Spectator and Rec Updates</strong></p><ul><li>Adjust speed: \"Ctrl+Left\" for slower, \"Ctrl+Right\" for faster, \"Ctrl+Shift+Down\" for normal.</li><li>Change stats: \"Ctrl+Down\" or \"F4\" or click the minimap Statistics button.</li><li>Reverse stats: \"Ctrl+Up\" or hold \"Shift\" when clicking the minimap Statistics button.</li><li>Locate King/Guard: \"Ctrl+Shift+Up\" or hold \"Ctrl\" when clicking the Idle Villager button.</li><li>Hold \"Shift\" when using the player name dropdown list to switch without changing view.</li></ul><p><strong>Core Updates and Fixes</strong></p><ul><li>Fixed issue with the accuracy of the client spectator counter display.</li><li>Fixed issue with the minimum position of the music volume option slider</li><li>Fixed crash when using the full map print feature after a multiplayer game.</li><li>Fixed issue where Enhanced v1.0c mode could not start on HD compat.</li></ul><p><strong>AI Scripting Updates</strong></p><ul><li>Fixed crash that could occur when using " + snNumberTaskedUnits.getLink() + " with DUC.</li><li>The " + cUpCreateGroup.getLink() + " action will now function as " + cUpResetGroup + " if there are no available units.</li></ul><p>Thanks to LightTree, offwo, CheeseOnToast, fenris, Wergorne, and TheViper for statistics feedback, wattle and TWest for view switch feedback, UnfairestEel and CoT for the AI reports, jeowaypoint for the Enhanced v1.0c report, CoT for the map print crash report, S3Kingcat on aoczone for Friend/Foe colors feedback, TheSerpent on aoczone for the music volume slider report, and TheViper, Memb, and Jineapple for hotkey paging feedback. The multiplayer sync id has been updated, so all players in a game must have this build (5746) to play in multiplayer.",
		itemsAffected: [snNumberTaskedUnits, cUpCreateGroup, cUpResetGroup],
		scriptingType: "ai"
	}, {
		number: "20171103-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20171103-000000)! This update adds a restricted feature for \"Multiplayer single player speed\". With this option, you can run single player games at the slightly faster multiplayer game speed. This can be useful if you'd like to practice for multiplayer games while still using the single player game setup screen. Thanks to Felipe_EL_Guapo for feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5656) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20171102-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20171102-000000)! This update fixes an issue with Friend/Foe Colors, where they would be updated to the current player perspective in response to cartography, spies, and diplomacy changes. This could cause unexpected color swaps when watching a rec or spectating. This fix will skip the color update for carto and spies, while updating the colors for diplomacy changes from the perspective of the original FFC player (blue). Thanks to t90 and Dave for the report on stream! The multiplayer sync id has been updated, so all players in a game must have this build (5652) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20171101-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20171101-000000)! This update fixes a crash issue with the touch screen control feature. I didn't notice until I checked a tablet lol. The multiplayer sync id has been updated, so all players in a game must have this build (5650) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20171031-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20171031-000000)! This update fixes the issue with framerate/speed inconsistencies after unpausing in a multiplayer game. This issue would often lead to units skipping as they move for a few moments. There may still be increased command delay as it resyncs everyone, but it should now be a smooth transition. In addition, the installer (SetupAoC) has been adjusted, so that if it detects a voobly-modified age2_x1.exe, it will present its checkbox options like a first install. This should hopefully avoid issues where certain options like the 20fps restricted option were preselected. Thanks to II2N for the unpause report and KiiNgZoNe for the installer report! The multiplayer sync id has been updated, so all players in a game must have this build (5648) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20171025-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20171025-000000)! This update fixes the reveal enemy bonus system, so that it will reveal all starting town centers for multi-tc start maps like Metropolis. In addition, allied villagers are no longer visible on any nomad start maps, which should avoid the unfair advantage of the reveal for only allied players with villager-m units on Custom nomad start rms maps (Standard nomad already blocked allied villager reveal). For multiplayer games, notifications are now sent for task switching events (Alt+Tab), so players can see when people are absent and when they're back. Finally, to avoid certain object positioning exploits, you can now hold \"Ctrl\" when right-clicking to target objects hidden behind others (affects unit right-click actions like attack, repair, etc.) and hold \"Ctrl+Alt\" when right-clicking to move without targeting (for example, to send units onto an enemy farm position without attacking the farm itself).</p><p>Thanks to Jineapple and AocZone for reveal feedback, BugA and CoT for mp notification feedback, and randomdude, wattle, and TWest for mouse control feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5640) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20171006-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20171006-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170926-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes a critical bug in pathing carried from v1.0c, where units pass through buildings and foundations under certain conditions. In addition, some adjustments have been made to improve the situation where units fail to automatically attack nearby targets in range. This applies to both warships like the demolition ship and melee units. If they can't path to the target to get in range, though, this fix will not help. Finally, the AMOUNT_REVEAL_ENEMY (209) resource has been adjusted, so that it works using flags: 1: reveal starting town-center, 2: reveal first town-center on nomad. For WololoKingdoms to match HD behavior, AMOUNT_REVEAL_ENEMY can be set to 3 to combine both effects.</p><p>Thanks to Marauder for the pathing report (video!), TheViper for the attack report on stream, and Jineapple for reveal enemy feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5634) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170926-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170926-000000)! This update adjusts the Ctrl+Arrow hotkeys, so that they will not interfere while actually playing. They will only be activated for rec/spec. Thanks to CSA_R_Griffith for the report! The multiplayer sync id has been updated, so all players in a game must have this build (5626) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170925-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170925-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170920-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes an issue with building resource trickle handling, which affects the Feitoria for WK. There should be no rec compat issue for aoc. In addition, you can now change rec/spec speed with \"Ctrl+Left\" for slower, \"Ctrl+Right\" for faster, and \"Ctrl+Up/Down\" for normal. Adding Shift will allow for smaller speed adjustments, like clicking the buttons. Thanks to Melkor on aoczone for the Feitoria report and aerovistae on reddit for hotkey feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5624) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170920-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170920-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170915-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes an issue with the internal AI handling of certain building objects that have a secondary projectile unit defined, but no range to attack, such as the Dock in WololoKingdoms. There should be no rec compat issue for aoc. Thanks to TriRem and CoT for the report and testing! The multiplayer sync id has been updated, so all players in a game must have this build (5620) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170915-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170915-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170913-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update attempts to fix the situation where units that are patrolled onto themselves may freeze and/or fail to respond for an extended period of time. This fix can also benefit other cases where patrol fails to resolve a path. Thanks to asdfasdfasdf1 on aoczone for the report! The multiplayer sync id has been updated, so all players in a game must have this build (5618) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170913-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170913-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170908-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes a core bug carried from v1.0c, where boars may abandon their attack despite being targeted. This can cause the 2 hit luring requirement to be reset, which can lead to unexpected luring failures. In addition, various, subtle performance improvements have been made to the core to reduce cpu load. More performance improvements are coming soon. The multiplayer sync id has been updated, so all players in a game must have this build (5614) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170908-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170908-000000)! This update changes the tech effect system to not truncate hitpoints to max 32767 when adjusting ATTR_HITPOINTS. This should help up-effect work more like Change Object HP. Please note, however, that an object's max HP (ATTR_HITPOINTS) should not exceed 32767 or, like Change Object HP:0, the object will be destroyed. In addition, a new (sync) restricted feature, Rms and Scx debug logging, has been added. This enables logging to \"Age of Empires II\\debug.X.txt\" for map parsing and scenario triggers. Prefix ids: RD (rms #define/#const), RC (rms create_object), ST (scx trigger), SE (scx effect). Please do not use this feature unless absolutely required for testing. Thanks to BF_Tanks for the HP feedback and Rico_jolla for logging feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5576) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170903-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170903-000000)! This update changes the hotkey editor, so that it will allow, but still alert, for conflicting hotkeys. This should avoid issues where people had to edit their hotkeys in external editors. There are also some minor performance optimizations. Thanks to Memb and Jineapple for hotkey feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5572) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170831-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170831-000000)! This update adjusts the previous fix that enabled the ability to SET_ATTRIBUTE an object's ATTR_STORAGE_VALUE to -32 to commit the (FWGS) amount. This can now also be used to safely commit the Corpse Decay Time #12 amount, so scenarios can adjust the time that existing objects (placed by the editor) remain on the map. In addition, for up-effect, along with setting Number to 9, the Display Instructions effect Timer value only has to be >= 99999 now, instead of 99999999. This should hopefully be easier to type in. Thanks to Mr Wednesday on AoKH for attribute feedback and randomdude for Timer feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5566) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170830-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170830-000000)! This update adds a new Number property for the Play Sound trigger effect. If you select the same sound from the dropdown and set Number from 1-8, you can adjust the volume of a currently playing sound effect, where 1 is max volume and 8 is min. If you set Number to 9, the sound effect will be stopped. In addition, animated water in multiplayer mode will now be paused for a player if cpu load gets excessive to avoid lagging the game for everyone else. Water animation will resume once cpu load drops back to an acceptable level. Thanks to Andanu Trisatya and Little Berry on AoKH for stop sound and volume/fade feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5565) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170829-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170829-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170828-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes the issue with gates, where they would lose HP for each open/close event after change ownership occurs in a scenario. The fix aligns the gate's HP with the new owner's gate hitpoints, preserving the ratio of damage, and restores the gate to standard ownership without the converted object property data. Although the gate's style will still change if there's a style mismatch, this fix should at least avoid the issue of self-destructing gates. If a rec doesn't involve this particular issue, then rec compatibility should remain fine. Thanks to Rico_jolla on AoKH for the report! The multiplayer sync id has been updated, so all players in a game must have this build (5558) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170828-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170828-000000)! This update adjusts the previous fix to ensure that unavailable team units are darkened appropriately. Thanks to Jineapple for testing! The multiplayer sync id has been updated, so all players in a game must have this build (5553) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170827-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170827-000000)! This update fixes the tech tree display for team bonus enabled units. Change the tech tree unit \"Status\" value in A.G.E. from 2 to (10 + civId) to assign that unit as a team unit for that civ. The unit will be displayed with a red X if the player's civ can't access the unit directly or isn't allied with a player who can. Thanks to Memb for the report and Jineapple for feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5552) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170824-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170824-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170823-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes a core bug carried from v1.0c, which caused improper variability in monk conversion timing and contributed to the sense that v1.5 monks were converting faster due to the 60fps multiplayer. In addition, the string table id label is now fixed for triggers, so it displays as expected. Finally, a new \"Windowed fullscreen mode\" restricted feature has been added. If you prefer classic fullscreen mode, where the screen resolution resizes for gameplay, but your GPU has performance or text rendering issues with 256-color mode, this feature works with \"Windowed mode support\" to provide a 32-bit color fullscreen mode. Press F5 on the installer window to show the Restricted features list.</p><p>Thanks to Daut for the monk report on stream, randomdude for the string table report, and Lord Basse at AoKH for fullscreen feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5548) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170823-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170823-000000)! This update enables the string table id textbox for the scenario editor. It will appear by default for the Send Chat and Display Instructions effects. Incidentally, there are a few side effects to locking the value to 1 in 0x005EB270, so the reference code was changed to simply nop specific checks instead. In addition, any trigger effects that have a non-zero Number value will now be displayed with that value in the effects list, so it's easier to find a specific effect. For example, \"E#10: Change Object HP: 2\" might be shown for a heal effect. Thanks to randomdude and danielpr for the string table code! The multiplayer sync id has been updated, so all players in a game must have this build (5525) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170821-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170821-000000)! This update enables you to SET_ATTRIBUTE an object's ATTR_STORAGE_VALUE to -32 to commit the (FWGS) amount. This can be used in the scenario editor with up-effect after changing something like a mine's resource amount to commit the change to existing mines. For example, you can do up-effect 0,0,102,21,800,1 to set stone mines to have 800 stone and then up-effect 0,0,102,21,-32,1 to commit that new value to existing stone mines. This is necessary because ATTR_STORAGE_VALUE is normally only applied when an object is first created, so existing resource objects would not be affected by a trigger change to it. Thanks to BFTanks for the report! The multiplayer sync id has been updated, so all players in a game must have this build (5521) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170819-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170819-000000)! This update adjusts the Accumulate Attribute and Tribute dropdowns in the scenario editor to provide the same list for both. The lists have also been resorted and the unusual spaces in front of the first few values have been eliminated by using different language ids. In addition, the installer (SetupAoC.exe) now presents all 3 command bar styles as a set, so you can select Widescreen, Centered, or Left-aligned without the confusing mix of checkboxes. Thanks to BFTanks for scenario editor feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5518) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170813-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170813-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170810-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes a core bug carried from v1.0c, which can cause boars to fail to respond after being attacked by an untargetable object type, such as the town center. This can lead boars to wander away or idle in response to hunter attacks. If boars were only attacked by hunters, scouts, etc. then rec compatibility should be fine with earlier v1.5 betas. Thanks to TWest for the boar report and rec! The multiplayer sync id has been updated, so all players in a game must have this build (5479) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170810-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170810-000000)! This update enables the ability to change object cost types with rms effect_amount, scx up-effect, techs, etc. MUL_ATTRIBUTE an object cost (FWGS) by -1 to create a cost type or -2 to remove a cost type. Thanks to ZeroEmpires for feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5477) to play in multiplayer. <a href=\"http://forums.aiscripters.com/viewtopic.php?p=66985#p66985\">MUL_ATTRIBUTE Examples</a>",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170808-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170808-000000)! This update applies a performance optimization for scenario loading and enables formatting (bold, etc.) for tech tree civilization description text. Thanks to randomdude for the scenario optimization and Memb for tech tree feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5475) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170807-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170807-000000)! This update adds a new flag for ATTR_TRAITS (Unit Attribute). Set ATTR_TRAITS flag 64 (0x40) to disable the delete button command for an object. This will not hide the delete button for non-building units, since it would be an unnecessary calculation each time a selection occurs to check for that among all selected objects. The primary purpose of this flag is to help scenario designers to control deletion in their scenarios with either the up-effect or up-attribute commands, but rms and mods can use this, as well. In addition, this fixes issues with friend-or-foe color swapping after a rec/spec game ends and friend-or-foe color swapping for the victory timer text in King of the Hill, etc. Thanks to randomdude for scenario delete feedback and T90Official for the monument report! The multiplayer sync id has been updated, so all players in a game must have this build (5472) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "rms"
	}, {
		number: "20170806-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170806-000000)! This update fixes an issue with restoring games, where commands may be blocked if the exact command from before the save is attempted before a different command. This issue could even occur in single player v1.0c saved games. Thanks to TriRem for the report and Roechelrochen from t90's stream for the rec and details! The multiplayer sync id has been updated, so all players in a game must have this build (5467) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170805-100000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170805-100000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170805-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes a terrain issue that can occur in scenarios that include bridges, due to the adjusted terrain system. The bridge placement terrains 14 (desert) and 28 (water bridge) now have an exception to update terrain reachability data. Rec compatibility will probably be fine for games that do not include bridges. Thanks to John_the_Late for the report! The multiplayer sync id has been updated, so all players in a game must have this build (5465) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170805-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170805-000000)! This update adds a new warning for coop player changes. If a player's civ or team id is changed by coop colors, they will be notified by a message in orange text (\"!!! Change Player.\") and their Ready state will be unchecked to block launch until they verify and Ready again. This should hopefully avoid any confusion and intentional/unintentional changes like this in the future. The multiplayer sync id has been updated, so all players in a game must have this build (5463) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170804-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170804-000000)! This update adjusts the multiplayer game setup lobby chat shade of white to be a bit less bright. In addition, performance improvements have been adjusted for multiplayer and a new optimization has been implemented for the general game core to reduce cpu cycles. The more units on the map, the more this optimization can improve performance. The multiplayer sync id has been updated, so all players in a game must have this build (5459) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170802-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170802-000000)! This update allows the full chat window (Alt+T) to appear after resign or defeat and can be used to see chat and adjust the horn buttons in order to allow or block messages from players, but it can't be used to send messages. In addition, the color of chat messages in the multiplayer game setup lobby will now alternate shades of white/grey in order to make it easier to see if someone has sent a multi-line message to impersonate another player. Thanks to randomdude for feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5454) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170801-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170801-000000)! This update adjusts the default water animation highlights to be more subtle and less bright to avoid distracting from objects like shore fish. In addition, you can now press Ctrl+B in the scenario editor to toggle terrain blending to draw water without beach, etc. The terrain blending mode will reset to default each time the editor loads (from startup or when returning from testing) to ensure that the blend mode change doesn't affect actual gameplay. The blend mode will also affect rms maps generated in the scenario editor, which could have interesting effects on the appearance of some maps. Thanks to Julius999 on AoKH for editor feedback! The multiplayer sync id has been updated, so all players in a game must have this build (5445) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170731-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170731-000000)! This update includes performance improvements for multiplayer games. The multiplayer sync id has been updated, so all players in a game must have this build (5440) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170728-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170728-000000)! This update adds a new flag to ATTR_HERO_STATUS: -128 (0x80): disable attack ground button interface. This flag can be used for mods and expansions to disable a unit's attack ground button, which restores the standard patrol buttons, etc. The wild animal attack alert will now be suppressed for class 10 units that meet the luring requirements: it carries resources and has <= 100HP. This will ensure that elephant attacks, etc. do not alert like wolves. Finally, multiplayer game speeds have been adjusted once again to bring them closer to expected v1.0c speeds. Thanks to Wergorne for the attack ground report and buddy for the wild animal report! Thanks to II2N and Jupe for testing multiplayer speeds!</p><p>The multiplayer sync id has been updated, so all players in a game must have this build (5429) to play in multiplayer.</p>",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170726-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170726-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170724-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes the issue with the previous group floating, collapse, and pike patrol fix, in order to ensure that rapid-clicking will not cause unexpected formation stagger. Thanks to Clemensor for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170724-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170724-000000)! This update makes a few minor adjustments for the water. In addition, the multiplayer game speeds for slow, normal, and fast have been more closely aligned with v1.0c. Thanks to CheeseOnToast for feedback and testing! Due to the speed adjustment, the multiplayer sync id has been updated, so all players in a game must have this build (5422) to play in multiplayer.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170720-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170720-000000)! This update adjusts the underwater terrain for medium water and deep water to provide more parallax. Still experimenting with this, so it's all still subject to change.</p><p>Rec/save/sync id remains unchanged for this update.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170718-100000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170718-100000)! This update adjusts the underwater terrain to be a bit more subtle. For animated water terrains, the 4th byte of the configuration set is now enabled: Set byte 0x1F between 0x01 and 0x0F to enable terrain underwater or 0x00 to disable. 0x03 is used for shallow and medium water by default. This feature can be disabled from the installer with the new \"Disable terrain underwater\" checkbox. Still experimenting with this, so it's all still subject to change.</p><p>Rec/save/sync id remains unchanged for this update.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170718-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170718-000000)! This update fixes a bug with scenarios, where AIs would send livestock that they own on startup to the town center, which differs from v1.0c behavior, where they would idle on startup. This caused issues in scenarios where the AI was expected to be immobile, so for all scenarios and campaigns, this livestock behavior has been disabled, so that it matches v1.0c behavior. Non-scenario/campaign games are unaffected by this change.</p><p>In addition, a wavy sand-like pattern is now drawn underwater (for shallow water and medium water only, by default) to make the parallax water effect more obvious, to improve the appearance of the default shallow water terrain, and to provide a point of reference that doesn't move when looking at the water. For animated water terrains, the 4th byte of the configuration set is now enabled: Set byte 0x1F to 0x01 to enable terrain underwater or 0x00 to disable. This feature can be disabled from the installer with the new \"Disable terrain underwater\" checkbox. Still experimenting with this, so it's all still subject to change.</p><p>Thanks to Mr. Wednesday on AoKH for the livestock report! Rec/save/sync id remains unchanged for this update.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170715-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170715-000000)! This update fixes a crash bug with the \"Lower quality environment\" restricted feature. Thanks to LightTree for the report! Rec/save/sync id remains unchanged for this update.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170710-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170710-000000)! This update updates the guide/readme, by moving earlier update details from the \"Notes\" section to a new \"Previous\" section. Thanks to Aleph for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170707-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170707-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170704-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes a rare, but critical bug in the pathing system that can cause auto-retasking to fail under certain conditions, when events occur within a walled and/or sealed map region. In addition, a new \"Default to background mode\" restricted feature was added, so the game starts with Back: On instead of Back: Off for F8 mode. Thanks to Nilpferd and II2N for the pathing report and Tapsa for background feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170704-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170704-000000)! This update enables mods and expansions to override the height of the extended help hover textbox by setting language id 10815 to the new height. The default is 115, so 150-155 might provide enough space for 2 more lines. This can help with certain languages that have longer descriptions, etc. If the game resolution is less than 768 height, the default of 115 will be used instead. For performance reasons, it's strongly recommended to leave it at the default size unless absolutely necessary in order to reduce redraw. Thanks to Jineapple for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170702-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170702-000000)! This update changes the handling of left-click object action commands to operate despite mouse movement. I didn't see any problems in testing, so hopefully, there are no unintended side effects from this change lol. Thanks to TWest for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170701-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170701-000000)! This update changes the way ZR (zip-rms) maps are validated for multiplayer, etc. They will now compare the internal rms (and scx if present) instead of the entire file. This will allow for ZR rms files to contain different terrain slp graphics overrides (grid/non-grid, etc.) while still matching. In addition, mods and expansions can now override weather sound effects by setting language ids 10812 (rain) and 10813 (snow) to drs sound effect resource id numbers. Sound effects should be relatively low volume to avoid disruption. Each sound effect should be between 5 to 10 seconds and loop naturally. Thanks to Jineapple for the rms feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170628-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170628-100000)! This update adjusts the fix to limit issues if someone attempts to install UP with SetupAoC.exe inside the \"age2_x1\" folder instead of the root \"Age of Empires II\" folder.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170628-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170628-000000)! This update enables you to draw terrain up to Elevation 11 instead of 7 directly in the scenario editor. Please try to avoid using high elevations near the map edges to ensure proper map visibility, as scrolling is limited at the edges. This change does not affect rms elevation. In addition, some adjustments were made to remove debug code in the multiplayer system, prevent dpa corruption of compat version launch, and limit issues if someone attempts to install UP with SetupAoC.exe inside the \"age2_x1\" folder instead of the root \"Age of Empires II\" folder. Thanks to Tetsuo3 for elevation feedback, offwo for the dpa report, and StepS for the installer report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170616-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170616-000000)! This update adjusts the scroll smoothness fix a bit to avoid unnecessary cpu/resource usage for touch screens. I think it should be good now. No, really :lol: Hi LightTree!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170615-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170615-200000)! This update will hopefully improve scrolling smoothness for all single player modes, including the rec/spec viewer. On my system, it feels very nice now, so hopefully it's better for most other people, as well.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170615-100000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170615-100000)! This update adds 3 new AI direct unit control actions in order to ensure completeness: action-drop-relic (15), action-pack (16), action-unpack (17). The action-none id has moved from 15 to 18, as well, so please update your defconsts from UserPatchConst.per if needed. Please take care to only use action-pack and action-unpack with appropriate unit types or there may be unexpected results. Thanks to CheeseOnToast and II2N for feedback!",
		itemsAffected: [pTargetAction, cUpTargetPoint],
		scriptingType: "ai"
	}, {
		number: "20170615-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170615-000000)! This update provides some additional terrain blending control using the rms command: terrain_state inConstModeId inConstParam1 inConstParam2 inConstValue. You can enable shallow terrain construction by adding flag 1 to Value with ModeId 0. When enabled, resources like trees, gold, stone, and forage can exist on shallow terrain, as well. Internally, this changes the accessibility of terrain id 4 (shallows) from 0.0 to 1.0 for terrain restrictions 4, 8, 10, and 11. New with this version: Add flag 2 to Value for thinner shallow/beach blending, which changes the blend priority for shallows (4) to 111 over beach (2) at 110. Add flag 4 to Value for alternate ice blending, which changes the blend type for ice (26) to 4.",
		itemsAffected: [],
		scriptingType: "rms"
	}, {
		number: "20170614-200000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170614-200000)! This update fixes another rare case for scroll distortion, so hopefully we're at 100% now lol. In addition, the dynamically generated terrain names in the scenario editor can now be defined directly in the language file. If a language id is missing, the name will be dynamically generated as before. Thanks to Tetsuo3 and Jineapple for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170614-100000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170614-100000)! This update adds some additional resilience for scrolling to avoid terrain shadow distortion. Hopefully, this mouse and scroll fix is proper for at least 99% of cases ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170614-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170614-000000)! This update fixes touch screen scrolling, by hopefully making it smoother and less likely to cause shadow distortion from things like trees. Changes were also made to ensure that coordinates are adjusted to predictable values when scrolling to ensure that things like the scenario Change View effect can't distort terrain shadows. As before, still refining the mouse and scroll stuff and testing for weirdness. Thanks to Mash on aokh for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170613-010000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170613-010000)! This update attempts to improve the mouse cursor accuracy, so that when you click, the focus will almost certainly be on the exact mouse point. When the view has scrolled against the edge of the map, it can still become slightly inaccurate, but not a full tile shift downward, at least.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170613-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170613-000000)! This update removes the auto-pause that can randomly occur during scrolling outside multiplayer games, such as single player or rec/spec. When this would happen, you wouldn't see a \"game paused\" message, but the game clock would stop and the framerate would drop until your continuous scroll movement ends and everything goes back to normal.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170612-200000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170612-200000)! This update adjusts the shallow terrain animation, in order to give the highlights a bit more of a flowing look.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170612-100000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170612-100000)! This update fixes a crash issue with AI scripts when attempting to train units with an invalid train location. In addition, the excessive bounce/jitter when scrolling has been fixed, so hopefully it should feel more smooth when moving across the map. Finally, the issue where the focus of a mouse click is improperly offset and appears shifted below the actual pointer position has been fixed. Thanks to offwo for the AI report and nhoobish on aokh for the mouse cursor report! There may need to be some refinement for the mouse fix, but we'll see ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170612-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170612-000000)! This update enables terrain id 4 (shallows) to animate, as well. To avoid ruining the plants, this animation is more subtle and only highlights the water. If a terrain uses an animated terrain id as its base terrain, then it will also animate. In addition, app launch has been accelerated significantly under certain conditions.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170611-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170611-000000)! This update adjusts the Relics victory condition, so that all players will have sight of relics and monk-with-relic units. In addition, when a relic is picked up, everyone will hear the relic sound effect, see the mini-map highlight, and get the \"relic picked up\" event message. Thanks to Jineapple for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170609-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170609-000000)! This update adjusts the terrain system, so that blending between water terrain types is consistent without unexpected beach. In addition, new forest terrain types will be handled properly, with proper detection for AI lumber-camp placement, and checks to block palisading of non-straggler trees. Terrain restriction data is used to determine water terrains and the terrain object creation class id is used for forest detection. Thanks to Jineapple for testing and feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170608-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170608-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170605-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update enables shallow terrain construction and accessibility using the new terrain_state rms command. When enabled, resources like trees, gold, stone, and forage can exist on shallow terrain, as well as buildings. Internally, this changes the accessibility of terrain id 4 (shallows) from 0.0 to 1.0 for terrain restrictions 4, 8, 10, and 11. To enable all of this, rec/save files now store the original terrain id with each map tile in order to ensure consistent pathing and farm terrain resets. Due to this additional data, rec management apps and things like recanalyst will need to be updated to handle this additional data for the v1.5 rec VER 9.E. When reading each map tile, instead of 2 bytes (terrain id, elevation id), it will be 4 bytes (0xFF, current terrain id, elevation id, original terrain id). I've included an example for the buildable shallows in the Reference/Scripting/Examples folder: DarkShallows.rms. AIs should be able to handle these maps without any changes.",
		itemsAffected: [],
		scriptingType: "rms"
	}, {
		number: "20170605-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170605-000000)! This update fixes several issues with the new tech effects 7 (ENABLE_TECH), 8 (MODIFY_TECH), and 9 (SET_PLAYER_DATA). They should no longer crash and apply appropriately when used in multi-targeting effects for allies, enemies, etc. The ENABLE_TECH effect has been adjusted to apply to all techs when a negative tech id is provided that isn't -1 and -1 has been made invalid always. The tech research timer is also reset by ENABLE_TECH with ATTR_FORCE (2), so it will not instantly self-disable when re-enabled if the tech required research time. Thanks to randomdude for the reports!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170531-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170531-000000)! This update fixes a core bug that can crash the game if it's saved (or recorded) after an AI has owned objects with certain extended object ids. Thanks to Vardamir for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170529-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170529-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170526-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes a critical bug in the tribute system carried from v1.0c, where the tax may be improperly applied under certain conditions. In practice, the impact is relatively low for small tribute amounts, but it grows to be quite significant for higher amounts. This fix should hopefully ensure that the tribute amount received is always consistent. Thanks to pedro and jay on aoczone for the report and research!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170526-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170526-000000)! This update fixes several issues and prepares the core for the next update. The scenario editor should no longer crash when generating a map if an object is currently selected under certain conditions. The Defend the Wonder game mode will no longer generate an unexpected extra wall line, due to the new rms capability for multiple wall lines, on maps like Arena that already have a wall line. The game should no longer crash if an object is ungarrisoned under certain conditions without a unit AI. If a terrain like Old Water is repurposed by a mod to function as a land terrain with appropriate terrain restrictions set, it should no longer break the entire pathing system, which would allow units to move anywhere. Please take care to avoid adding or removing the core water, beach, and shallow terrains, though: 1, 2, 4, 22, 23, 37. Thanks to danielpr and Jineapple for the reports!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170518-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170518-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170516-100000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes an issue where extremely high levels of cpu usage can occur when attempting to move a grouped unit that can never move. In addition, there are various performance optimizations to reduce maybe 10000-100000 ops per game turn. It's probably not high enough to be noticeable except in certain conditions, but every little bit helps lol.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170516-100000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170516-100000)! This update adjusts the resource storage mode flag 16 to work for objects that aren't category 80. Hopefully it works with normal units now and not just buildings. Thanks to danielpr for testing! In addition, a new up-set-precise-target-point command has been added, along with 3 new object data sources: object-data-to-precise (gets precise distance to a precise target-point from up-set-precise-target-point), object-data-base-type (usually the same as object-data-type, except in certain scenario situations), and object-data-upgrade-type (the currently active upgrade type id). The up-set-precise-target-point is basically up-set-target-point with no bounds check, so please ensure the point is valid with up-bound-precise-point as needed. Thanks to Cake for feedback!",
		itemsAffected: [cUpSetPreciseTargetPoint, pObjectData],
		scriptingType: "ai"
	}, {
		number: "20170516-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170516-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170515-100000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes the issue where new relics added to the map can break the relic countdown. Now, if additional relics are added to the map by triggers, the original total remains as the minimum required for a relic victory countdown. This is the only reliable way that doesn't involve performing an expensive search around the map for newly created monk-with-relic units from players and other complications lol. For the rec break, as before, it should only be a problem if you actually played a scenario where this bug could occur. Thanks to Vardamir for the report! In addition, resource storage mode flag 16 has been added, which only removes the resource value when the unit is lost. If you negate the value, it will add the resource when the unit is lost. Thanks to John for feedback! I hope we can freeze the feature list soon ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170515-100000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170515-100000)! This update ensures that the sighted object abstraction table does not overflow on very unit heavy mods/expansions. Thanks to danielpr and John_the_Late for testing!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20170515-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170515-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170514-000000 build. Recs for v1.4 and earlier are fine on latest.</p>This update fixes the issue where changing ownership of a monastery breaks the game's relic counters. About the rec break, as before, it should only be a problem if you actually played a scenario where this bug could occur. Thanks to Kor, Rico_jolla, and Julius999 for the report!</p><p>In addition, this update makes object ids 1000 to 1959 available for AIs to see, count, etc. This means that object ids 0-899 and 1000-1959 can be more useful as object ids, while 900-999 must remain reserved for unit classes only. There is a slight cost to reading from the extended object id list (3 ops maybe per instance), so it's still best to put important objects in the 0-899 range. Note, however, that the AI sighted unit abstraction table is limited to 240 useful slots. In the latest wololo, 188 slots are used. The sighted unit abstraction table is provided to the following types of units: category 70 or 80, size > 0, has a train/build location, and isn't hidden (except for category 70). Thanks to WAIFor for reminding!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20170514-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170514-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve since the previous v1.5 rec break, please backup the 20170513-200000 build. Recs for v1.4 and earlier are fine on latest. This update fixes the issue where changing ownership of a unit while it's garrisoned can break line of sight. About the rec break, it should only be a problem if you actually played a scenario where this bug could occur. Other than that, it's probably fine lol. Thanks to danielpr for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170513-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170513-200000)! This update fixes a crash from the previous release when opening the main chat window. Thanks to Cake for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170513-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170513-000000)! This update fixes a bug that would corrupt single player game setup after attempting to open an invalid rec file. In addition, it fixes about 30 memory leaks in the core (looks like very old code from the aoe1 era, but was still used often lol). Thanks to Promi for the report! Still researching a couple more fixes ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170511-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170511-000000)! This update adjusts sn-boar-lure-destination, so you can add 12 to the normal value (0 to 11) to shift the point down to the grid corner. This means the full range of values for the sn are 0 to 23. Invalid values will now behave like 0. Please see the beta reference for more detail. Thanks to Promi for feedback!",
		itemsAffected: [snBoarLureDestination],
		scriptingType: "ai"
	}, {
		number: "20170510-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170510-000000)! This update adds several new AI commands and capabilities. The (up-full-reset-search) command combines (up-reset-search 1 1 1 1) and (up-reset-filters) into a single command to save rule lines. For bounding points more safely, the (up-bound-precise-point ioGoalPoint1 inConstPrecise typeOp inOpBorder) command has been added, so you can bound both normal and precise points inside the map, along with a border width. Finally, sn-boar-lure-destination is now available for AIs to control where at the town center a lurer retreats to, using values from 0 to 11. Please see the beta reference for more detail. Thanks to Cake for the ideas! Thanks to CheeseOnToast and fenris for additional feedback!",
		itemsAffected: [cUpFullResetSearch, cUpBoundPrecisePoint, snBoarLureDestination],
		scriptingType: "ai"
	}, {
		number: "20170509-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170509-100000)! This update fixes the issue with the -e rec file extension installer option when using game expansion exe generation. Thanks, daniel!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170509-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170509-000000)! This update adjusts the internal behavior for class 9 (deer, etc.) and class 10 (boar, wolves, etc.) in order to generalize them and un-hard-code the specific unit ids. Now, class 9 units like deer will be huntable by AIs and humans as long as they have resource storage > 0. For matching units, scouts will not be able to directly attack/lame them just like deer. For class 10, if a unit has resource storage > 0 and no more than 100 HP, it will be considered for luring by AIs (dropsite-min-distance boar-hunting, live-boar, etc.) and follow the boar behavior pattern instead of the wolf behavior pattern. This allows units like the boar, javelina, and elephant (all 75HP) to be lured, while units like the Iron Boar are blocked, just as before, due to excessive HP. Thanks to Bala Arizalu for feedback!",
		itemsAffected: [cDropsiteMinDistance],
		scriptingType: "ai"
	}, {
		number: "20170508-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170508-000000)! This update adjusts the internal behavior of siege towers again by changing the drop point for straight vertical/horizontal walls. In addition, the code that adapts units for \"villager mode\" swaps has been adjusted for siege class 13 to ensure that garrison effects are retained for speed, etc. Thanks to TriRem and danielpr for testing!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170507-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170507-000000)! This update adjusts the internal behavior of siege towers by fixing an issue with random conversion and disabling their automatic attack response, so they always try to stand still unless tasked, making it easier for units to garrison inside. Thanks to TriRem for testing!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170506-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170506-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve from previous v1.5 betas, please backup the previous 20170504-100000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes another core simulation bug carried from v1.0c, which can cause military units to idle next to targets after ungarrisoning, despite being aggressive, etc. In addition, if the ability is enabled in A.G.E., livestock (class 58) will be able to garrison into adjacent targets. They aren't \"complex\" units, so they can't directly walk to and garrison into distant targets or summon transports toward them in a single command. If you attempt to garrison into a distant target, the sheep will just walk toward the target instead. To support livestock garrison, the previously reserved flag 16 for building category attribute ATTR_GARRISON_TYPE has been activated, so if a building has this flag set, sheep can garrison with alt+right-click when directly adjacent, etc.</p><p>Finally, if a class 13 siege unit has \"Interface Kind\" (cmdid) 12, it will be able to function as a siege tower using Unload ability #12, with the ability's class set to 27 for walls. In this way, you'll be able to simply right-click a non-corner wall and it will move to the wall and ungarrison units on the other side \"most\" of the time lol. This unit is more for lols than serious strategy, so don't expect much",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170504-100000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170504-100000)! This update changes the way ADD_ATTRIBUTE adjusts flags for ATTR_HERO_STATUS and ATTR_TRAITS. If ATTR_HERO_STATUS or ATTR_TRAITS are modified by the ADD_ATTRIBUTE effect, the new value flags will be appended. If flag 256 is set, the value flags will be removed instead. This change allows 0x80 to work as a flag instead of being taken for the previous negative number check. Basically, you can just add 256 to remove the flags in the first byte ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170504-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170504-000000)! This is a rec/save/sync breaking update! If you have any recs, etc. that you'd like to preserve from previous v1.5 betas, please backup the previous 20170502-000000 build. Recs for v1.4 and earlier are fine on latest.</p><p>This update fixes a core simulation bug (sync breaker lol) carried from v1.0c in the garrison system, which would cause groups of units to be unable to garrison into a target building in a single action, requiring multiple re-garrison attempts. In addition to this fix, ATTR_SHOWN_ATTACK, ATTR_SHOWN_RANGE, ATTR_SHOWN_MELEE_ARMOR, ATTR_SHOWN_PIERCE_ARMOR, ATTR_TRAITS, ATTR_CIV_ID, ATTR_PIECE, and ATTR_DEAD_ID have been added to the tech system. ATTR_HERO_STATUS, ATTR_ATTACK_DELAY, ATTR_HERO_HEAL_TIME, ATTR_SHOWN_ATTACK, ATTR_SHOWN_RANGE, ATTR_SHOWN_MELEE_ARMOR, ATTR_SHOWN_PIERCE_ARMOR, and ATTR_TRAITS can now be modified by the ADD_ATTRIBUTE effect. If ATTR_HERO_STATUS or ATTR_TRAITS are modified by the ADD_ATTRIBUTE effect, positive values append flags, while negative values remove flags. Thanks to II2N for the garrison report! Thanks to John_the_Late and danielpr for tech feedback!</p><p>Unrelated, but here's an <a href=\"" + urlPrefix + "/images/scripter-target-point-adjustment.png\">image explaining where the sn-target-point-adjustment values are positioned on a tile. Thanks, Cake!",
		itemsAffected: [snTargetPointAdjustment],
		scriptingType: "ai"
	}, {
		number: "20170502-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170502-000000)! This update enables expansions to override taunt mp3s with a \"Games\\[YourStuff]\\Taunt\" folder. If a taunt can't be found in the expansion folder, the base game taunt will play instead if available. In addition, the hotkey files have been made per-expansion, as well, and will be stored in the \"Games\\[YourStuff]\" folder. If the hki doesn't yet exist for an expansion, the base game hki settings will be inherited until the player adjusts them. Thanks to Jineapple for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170430-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170430-000000)! This update adds the \"assign_to\" LAND_GENERATION command to make player assignment easier, especially when using direct_placement in rms scripts. There's a fair amount of functionality in this command, so please see the reference for all of the detail. Thanks to Cake for the idea!</p><p>It seems that someone here or another person who was linked by someone here unfortunately leaked the direct link on reddit yesterday lol. Let's try to ensure that this stays somewhat more private until it's ready or those people will have unnecessary issues with their recs/saves later on. I remember how v1.1 was secret here almost forever until the GNAOKH Incident ",
		itemsAffected: [],
		scriptingType: "rms"
	}, {
		number: "20170425-100000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170425-100000)! This update adjusts the weather effects slightly to reduce flicker and ensure the rain \"drops\" aren't as large and distracting on the screen. Thanks to Aleph for feedback! Thanks for testing, Kor! For normal games, phoenixv1s, the rms script can use the new weather_type command to adjust rain, etc. Kunyi, it might be best to visit the chat and ask there, as I haven't had much time to create real, practical example scripts with those new commands yet ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170425-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170425-000000)! This update adds additional multiplayer debug data for beta testing. In addition, it disables the !C warning prompt for maps that use effect_amount or effect_percent with Gaia effects only. This allows rms designers to use those commands more freely to adjust resources or animals like they can with resource_delta, leaving the !C warning prompt for cases where non-Gaia players are modified. Thanks to LightTree for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170423-100000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170423-100000)! This update reduces the water flow movement speed and adjusts the highlights on shallow water to be more subtle. Still refining water/weather. Sorry, ER ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170423-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170423-000000)! This update adds some additional data sources for AIs: object-data-hero-flags, object-data-hero, object-data-auto-heal, object-data-no-convert, object-data-frame-delay, and object-data-attack-count. When a unit is tasked to attack a new target, after object-data-target-id is updated to the new id (may happen after group arrival), object-data-attack-count is set to 0. With each successful attack (melee unit strikes or ranged unit actually fires a projectile), object-data-attack-count increases. Please see upc.per for more detail. Thanks to II2N for feedback!",
		itemsAffected: [pObjectData],
		scriptingType: "ai"
	}, {
		number: "20170422-100000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170422-100000)! This update fixes a crash in the original AI internal code, where it would mishandle negative unit type ids. Thanks to CoT for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170422-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170422-000000)! This update fixes an issue where the ability to press initial keys in single player mode during loading (like pause on startup) was lost. Thanks to II2N for the report! I also forgot to mention a few updates ago that sn-target-player-adjustment now has a new value for using precise points for \"decimal precision\" with up-target-point. Please see the reference for the sn to see all the details and upc.per for the defconst list.",
		itemsAffected: [snTargetPlayerAdjustment, cUpTargetPoint],
		scriptingType: "ai"
	}, {
		number: "20170421-100000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170421-100000)! This update fixes a crash with the Ctrl+Shift+F# hotkeys in multiplayer mode. Thanks to CheeseOnToast for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170421-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170421-000000)! This update adds the up-modify-group-flag AI command, which will set or remove the group flag from units in a search group and can be checked with object-data-group-flag. Please see the reference for more detail on how to use this safely. In addition, sn-disable-defend-groups now has new functionality. Append flags to disable various defense systems: 1 to disable the defensive (TSA) targeting system, 2 to disable assistance inside sn-safe-town-size, 4 to disable assistance between sn-safe-town-size and sn-maximum-town-size, 8 to disable assistance outside sn-maximum-town-size. When assistance is disabled, please be aware that your units will only respond to attackers within their individual line of sight. If set to 0, units will respond to threats in town as usual. Thanks to II2N for feedback!",
		itemsAffected: [cUpModifyGroupFlag, pObjectData, snDisableDefendGroups],
		scriptingType: "ai"
	}, {
		number: "20170420-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170420-000000)! This update adds several new direct unit control group commands for AIs: up-reset-group, up-create-group, up-set-group, up-group-size, up-get-group-size. There are 10 search groups available for use from 0 to 9 with 40 units each. In addition, sn-number-tasked-units has finally been enabled (reserved sn 288). Set it to the number of units to require per group tasked by up-target-objects or up-target-point. The last group sent by a command may not reach the minimum required number. It's possible that no units will be sent to some of the last remote targets. If set to 0, units will be spread in order to ensure balanced group sizes to all remote targets. With this sn and the group commands, you can set aside a group of units and consistently task them together as a set. Thanks, II2N!",
		itemsAffected: [cUpResetGroup, cUpCreateGroup, cUpSetGroup, cUpGroupSize, cUpGetGroupSize, snNumberTaskedUnits],
		scriptingType: "ai"
	}, {
		number: "20170419-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170419-000000)! This update enables ATTR_HERO_STATUS flag: 64: distance-based area damage with blast radius. This new flag can be appended to fix the demolition ship or to give other modded units the same effect if they have a blast radius. In addition, selecting multiple buildings will now preserve the ability to train units, etc. when possible even if one of the buildings in the set is incomplete or researching. Thanks to Jineapple for area damage feedback and Felipe for the selection issue!",
		itemsAffected: [],
		scriptingType: "rms"
	}, {
		number: "20170418-100000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170418-100000)! This update enables the single player game setup screen to preserve selected AIs between games. Thanks to gag2000 for the idea! Thank you for testing, Jineapple!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170418-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170418-000000)! This update enables the Ctrl+Shift+F# player switching keys to work even for defeated players. Thanks to CheeseOnToast and Aleph for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170416-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170416-000000)! This update adds 2 new AI script commands: up-get-upgrade-id and up-store-map-name. Please see the beta reference for more information. Thanks to offwo for the map idea! Thanks, cake!",
		itemsAffected: [cUpGetUpgradeId, cUpStoreMapName],
		scriptingType: "ai"
	}, {
		number: "20170415-100000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170415-100000)! This update allows you to switch players in single player mode or rec/spec with \"Ctrl+Shift+[F1-F9]\" (F9 is Gaia). With this, AI scripters can switch to other AIs mid-game to observe behavior or check resources, players can attempt a game from multiple sides (lol), and rec/spec viewers can directly switch between players without using the player dropdown list or cycling with the + and - hotkeys.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170415-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170415-000000)! This update fixes the issue with the scenario editor and the listing of hero units without Flag #1. Thanks to daniel for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170414-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170414-000000)! This update enables the higher water/weather update rate by default and a Lower quality environment restricted feature is now available to revert it back. In addition, the reveal class bonus system has been adjusted to work with all gaia objects (not only living) and there are now 2 reveal classes available. ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170413-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170413-000000)! This update enables attributes to define objects that self-destruct like petards and demo ships (see Notes section of readme.html). In addition, Background mode will not be reset except in multiplayer mode and a new \"High quality environment\" restricted feature was added to test increased weather and water framerate. Thanks to TriRem for the self-destruct suggestion and Archon, cot, and offwo for Background mode feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170412-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170412-000000)! This update adjusts the object counting code for upgraded types to minimize issues with overruns. Thanks to TriRem for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170411-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170411-000000)! This update fixes an another issue with shift+queuing farms from the mill with the Keydown object hotkeys optional feature. Thanks to CheeseOnToast for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170410-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170410-000000)! This update fixes an issue with shift+queuing with the Keydown object hotkeys optional feature. Thanks to CheeseOnToast for the report! HI CAKE!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20170409-000000",
		version: 1.5,
		notes: "UserPatch v1.5 Beta has been released (20170409-000000)! This update adds a few things for AIs and some other stuff (Features and Notes lol). Please see the beta Reference for more AI and RM scripting detail, along with the included UserPatchConst.per and UserPatchConst.rms. There are some other things in the Reference/Scripting folder of the archive, as well. ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20150723-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20150723-000000)! This update fixes a critical, game breaking bug with trade carts and trade cogs that occurs in v1.0c, v1.3, v1.4, and HD. I won't go into detail about how this bug works, but lol. Thanks to iPhone for the report months ago (saw reading upward in chat lol), SiFly for the aoczone post, and Wergorne for all of his help in testing, providing demo recs, and fix confirmation! Voobly will be updated after this seems stable for a while. ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20150128-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20150128-000000)! This update fixes a bug in the scenario editor, where the gaia player color is left unupdated, causing the dropdown box to revert the color to the last selected player's color (if p1 was last selected on the player tab, it would change gaia from gray to blue once you select gaia from the dropdown, etc.). This issue was caused by the delinking of gaia from p7 gray in UP. Please let this be the last fix. Please lol. I miss scripting. Thanks to danielpr for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20141225-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20141225-000000)! This update fixes a bug with the screenshot and full map capture system, where depending on the amount of free space available, the game may overflow the 32-bit integer maximum and fail with an \"insufficient free space\" message. Thanks to xuki on aoczone for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20141119-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20141119-000000)! This update removes the check for the vote panel wait flag when deciding whether or not to play the win/lose sound effect at the end of a game. Before, if a vote panel appears (even briefly for the long pause) and certain conditions are met, a flag would be set that would block the game from playing the win sound effect for certain players. There seems to be some new link caching issue on the server, so you may need to clear temp files from your browser for the 20141119 version to download. Thanks to LightTree for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20141115-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20141115-000000)! This update adjusts the connectivity vote panel, so that it is able to autoclose when appropriate, like when appearing after a long pause. In addition, the rec/spec statistics views have been adjusted, so that the current age number appears in parentheses after ALL stats views (Score, Population, etc.). The A (Age) value in the Society view has been replaced by T for techs completed. This value includes internal techs like Dark Age, etc. so it shouldn't be used as a precise value, but it does give a general idea of the level of advancement for a player. Thanks to LightTree for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20141113-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20141113-000000)! This update restores the connectivity vote panel autosave, which means the game will always save an oos.x.msz any time a connectivity vote panel appears. The autosave that occurs for resign-and-quit remains, as well. Hopefully, this will improve the reliability of restoring dropped games. Thanks to LightTree, Wergorne, and JohnTheLate for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140918-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140918-000000)! This update fixes an issue with sheep gathering at the town center that may cause sheep to move to the 0,0 tile on the map when converted back and forth under the TC. This is especially problematic with Celts, due to their sheep priority conversion bonus. Thanks to II2N for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140915-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140915-000000)! This update fixes an issue that has existed since v1.0c: if you play a scenario/campaign game and save/load it or record it, gaia objects and units will be reverted to the Dark Age. This fix ensures that objects remain upgraded to the selected age for gaia, however blacksmith upgrades and scenario upgrades for gaia units are discarded as before (too ES to adjust this lol). It should now be possible to play scenarios like Joan of Arc #2 properly while recorded. Thanks to aleksey22r on twitter for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140906-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140906-000000)! This update fixes an issue with the display of -1 pierce armor, where it would show this as 1000 pierce armor (yES lol). In addition, it enables the cc-add-resource scripting command to work with any of the resources between 0 and 197. Thanks to ZeroEmpires for the pierce armor report!",
		itemsAffected: [cCcAddResource],
		scriptingType: "ai"
	}, {
		number: "20140901-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140901-000000)! This update prevents the pack command from packing town centers, which could sometimes improperly happen especially with multiplayer lag. If a mod developer wishes to undo this fix, please change 0x00127125 (file space) to 8B0DA0127900. In addition, it fixes an issue with up-find-flare and up-find-player-flare, so that the AI can find flares with the any- wildcards, as expected. Please note that it has never been designed to work with this-any-* or every-* wildcards, as flares belong to all recipient players, even when they aren't owned by them, so the stored player from this-* would not necessarily be the actual sender of the flare. If you search for players-unit-type-count any-* flare, do not expect this-* to be the sender player for any action commands (not limited to just the flare stuff). If you need to know the specific player number of the sender, you'll need to loop with focus-player checks. Thanks to II2N for the flare report!",
		itemsAffected: [cUpFindFlare, cUpFindPlayerFlare],
		scriptingType: "ai"
	}, {
		number: "20140822-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140822-000000)! This update fixes an issue with the Display Instructions effect, where the game may crash if the Sound resource string is somehow null. This seems to occur more often with externally edited scenarios (maybe from trigger studio), but it's unfortunately common.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140820-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140820-000000)! This update adjusts the Ctrl+group selection effect with Stop Unit+Number:1-9, so that it will no longer allow invalid objects below \"living object\" category 70 into the selection list. However, scenario designers must still ensure that invalid combinations of units are not selected (units + buildings, etc.), as the trigger can't account for all possible weird combinations of selected objects. You can take advantage of the \"Object Type\" dropdown when making non-specific area selections to restrict the selection to Building, Civilian, or Military category units.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140818-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140818-080000)! This update changes absolutely nothing with the actual game. Instead, the installer has been updated to fix the Voobly issue, where the empires2_x1_p1.dat file is being replaced by empires2_x1_v1.dat. If the installer detects that the p1 file is missing, but the v1 file exists, it will clone the v1 to the p1 to repair it automatically for people affected by this issue. Months have passed since this issue was reported and nothing has been done to resolve it, so hopefully this will fix it for most people",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140818-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140818-000000)! This update adjusts the basic anti-cheat system to prevent message flooding in scenarios with change diplomacy effects. In addition, the Stop Unit effect now accepts a Number between 1 and 9 for assigning player Ctrl hotkey groups. Thanks to danielpr for the diplomacy report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140816-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140816-000000)! This update fixes an issue with the Goths in imperial or post-imperial in the scenario editor, where their defined population cap may increase by 10 after each test. In addition, the player object lists where you can choose the units to place on the map are no longer limited by the currently selected starting age. In other words, if a player is set to Imperial Age start, you'll still be able to place Archer-base units. Although they'll still appear upgraded to the current age, internally they will still be Archer units at the core, so if you change the starting age to Dark Age later, they'll return to looking like basic archers instead of arbalests, etc.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140815-080000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140815-080000)! This update fixes an issue with the previous scenario editor fix, so it will now properly handle starting age and civ changes where the civs aren't changed from default. That's it lol. It was 3 long days between updates this time, at least ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140815-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140815-000000)! This update fixes a critical crash bug that can occur in games played on certain maps with mods and AIs. Separately, the game will now insert the map seed value 12 bytes from the end of all multiplayer rec files, within the post-game achievements lobby data block, so rec analyst apps can display it. If you replicate the settings in the scenario editor, you can now recreate the game.</p><p>In addition, the scenario editor will now properly handle starting age and civ changes, so objects won't appear from the wrong age when opening a scenario, etc. As before in v1.0c, if you switch civs or starting age several times in a row, your buildings may appear damaged or on fire in the scenario editor, but that's just the way HP is calculated by the editor. It has no effect on the actual scenario, but if you'd like to put out the flames, just save/reload lol. Finally, the issue with mayan and chinese villager placement when generating a map in the scenario editor has been fixed, as well. Thanks to ryshep for the crash report, 9mil on aoczone for the seed idea, and LightTree for the villager placement report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140812-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140812-000000)! This update ensures that setting attack with Change Object Attack + Number:1 will work as expected for those rare units with both base melee (4) and base pierce (3) attack classes. If you look on the A.G.E. attack list, the bottom most attack class between 3 and 4 will be \"set\" to the requested value and the upper most will be \"set\" to 0 (this is usually 0 already). In this way, both values aren't being set, so the attack isn't doubled for these units. The original behavior for Change Object Attack + Number:0 is left as-is. Thanks to John the Late for the idea! ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140811-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140811-000000)! This update provides a way for scenario designers to get proper behavior from the \"Object Has Target\" condition by setting the \"Object Type\" dropdown value to \"Other\". In this way, the condition will only pass if the unit chosen by \"Set Object\" is targeting the unit chosen by \"Set Next Object\", or the target unit type matches the \"Object List\" value, or the target unit class matches the \"Object Group\" value. As before, the \"Object Type\" dropdown is unused except to enable proper validation with the \"Other\" value. Previously, if ANY object was targeted by the chosen unit, the condition would pass. In addition, several performance optimizations were included that could remove 1000s of unnecessary ops per game turn from the trigger effect validation code. Thanks to Lildbehr for the report and HockeySam, John the Late, and CarolKarine for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140810-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140810-080000)! This update enables the Declare Victory effect to resign a player by setting Number to 1. In addition, you can flash objects on the map with the Change Ownership effect in the same way by setting Number to 1. After this, no additional effects will be added for the core, as we need a stable set of features, so it will be up to mod developers. I'm sorry for the trouble! Thanks to randomdude for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140810-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140810-000000)! This update fixes an issue with enabling research that was already completed manually (enabling it would improperly instant auto-research the tech again). In addition, it enables the Freeze Unit effect to be used to set any unit attack stance instead of only the \"no-attack\" stance with the \"Number\" field: 1:aggressive, 2:defensive, 3:stand-ground, 4:no-attack (without halting the current action). In addition, there is now an additional 4th Ctrl+S mode for the scenario editor to place objects \"freely\" but restricted to the grid. There are also several performance improvements for the various effects. Thanks to hockeysam and randomdude for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140809-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140809-180000)! This update makes a minor adjustment for the restricted ore display fix (for mod use only), so that it will display language id 3000 instead of 3083 for a \"Not enough ore\" kind of message, which would be provided by the mod. Additional adjustments for ore would be best made by the mod developer to avoid ongoing changes for v1.4 lol. This update maintains full sync compatibility. Thanks to danielpr for the suggestion! ER",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140809-100000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140809-100000)! This update enables Number 3 for the Research Technology effect. This setting will enable a tech without executing the post-setup tech validation, which makes new techs available to click, but would otherwise re-disable a tech that is unavailable to a civ. In this way, by using Number 3 and then the usual Number 0, you can research techs from other civs, etc. Please take care when using this. Thanks to danielpr for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140809-080000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140809-080000)! This update adjusts the healing effect to not create a custom property, so these units can continue to benefit from upgrades. Thanks to randomdude for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140809-040000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140809-040000)! This update fixes the tribute send/receive achievements, so that it will no longer truncate a long result. It will now word-wrap the details onto 2 lines if necessary, so players can see all of the information. Thanks to LightTree for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140809-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140809-000000)! This update enables the Change Object HP and Attack effects to \"set\" by setting the \"Number\" option to 1 and Change Object HP can heal by setting \"Number\" to 2. Now, scenario designers don't have to do strange math with really large numbers like 2147418112 to setup the effects and can use normal numbers there lol. It should be more intuitive to use in this way, I hope. This update maintains full sync compatibility for recs and saves.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140803-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140803-000000)! This update allows up-change-name to accept -1 instead of a quoted name as its parameter. When you use (up-change-name -1), the AI's name will be set to one of that civilization's first 8 built-in historical names in an semi-random manner. The name is guaranteed to be unique among other AIs that use this command, but not necessarily with Petersen's selection. As with standard up-change-name commands, the actual name of the AI is preserved in the rec/spec player dropdown list for reference. Unfortunately, the HD edition broke compatibility again by adding a separate command for this functionality instead of extending the existing command. With this adjustment, the capability is available to any scripters that need it. This update maintains full sync compatibility for multiplayer, recs, and saves.",
		itemsAffected: [cUpChangeName],
		scriptingType: "ai"
	}, {
		number: "20140802-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140802-000000)! This update adjusts the resolution listing code, so that it will now scan for 32-bit color resolutions first. If no resolutions are found, it will then scan for 8-bit (256) color resolutions, as before. Hopefully, this makes it more reliable in the future, as newer graphics drivers often fail to report 8-bit color support. This update maintains full sync compatibility for multiplayer, recs, and saves. Thanks to StepS and SH for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140801-080000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140801-080000)! This update resolves a critical, game breaking bug, which allows for the rapid construction of buildings on demand. This issue was newly discovered and reported on aoczone and could occur on all versions, v1.0c and later. In addition, a line of sight corruption bug was fixed for siege engineers. On a separate note, the Activate Trigger and Deactivate Trigger effects will no longer crash the game if the target trigger is invalid. They will now present a notice in the game chat identifying the invalid target trigger number. The Change Object HP and Change Object Attack effects can now \"set\" a value if you add 2147418112 (0x7FFF0000) to the amount. The Change Object HP effect can also heal units to maximum HP if you add 2147352576 (0x7FFE0000) to the amount. Trigger Studio apps can simply allow people to set the values in the low word and then set the high word to 7FFF or 7FFE, as requested.</p><p>This release necessarily breaks sync with previous versions, but can still seamlessly open all v1.4 recs and saves, and has compatibility support for v1.3 and v1.0c, as before. The new rec version id is 9.D. Previous versions of v1.4 were 9.C, 9.B, and 9.A. Thanks to Eques4 for the report on aoczone, II2N for the siege sight report, and randomdude for the scenario editor ideas.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140725-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140725-000000)! This update once again changes the behavior of self-tribute notifications in the rec/spec viewer. Now, all notifications will appear if the viewer is set to Economy statistics mode, but by default you'll now also see self-tribute notifications that aren't being sent to gaia. In other words, only notifications for tributes to gaia are hidden by default now in rec/spec. This change makes it easier for people to observe a sling in normal random map games, etc. From what I can tell, this should still avoid the tribute flooding in rec/spec for most custom scenarios like Roll the Dice. This update maintains full sync compatibility for multiplayer, recs, and saves. Thanks to LightTree and Grok for the rec/report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140712-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140712-000000)! This update changes the behavior of self-tribute notifications in the rec/spec viewer. Now, the notifications will only appear if the viewer is set to Economy statistics mode, from the F4 list of Score, Population, Economy, Military, and Society. This should avoid the flood of self-tribute notifications for custom scenarios, while giving players a way to see them if necessary. In addition, a minor adjustment was made to allow up to 11 characters in the scenario editor quantity text box. This update maintains full sync compatibility for multiplayer, recs, and saves. Thanks to randomdude for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140613-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140613-000000)! This update fixes a sighted object counter bug for AIs. The bug may cause an AI to see an improperly high number of units from enemy players under certain conditions. This update maintains full sync compatibility for multiplayer, recs, and saves. Thanks to II2N for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140515-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140515-000000)! This update fixes a critical bug in up-delete-distant-farms, where the command fails to use unsigned comparisons. The result may cause an AI to unintentionally delete every farm they have on the map lol. In addition, the bug prevented the deletion of ANY farms farther than ~128 tiles. These issues should now be fixed. This update maintains full sync compatibility for multiplayer, recs, and saves. Thanks to Promi and II2N for the report!",
		itemsAffected: [cUpDeleteDistantFarms],
		scriptingType: "ai"
	}, {
		number: "20140403-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140403-000000)! This update fixes a critical memory handling bug in up-target-objects, where the command may read into discarded object ids even after a up-reset-search. The behavior and group spread should also be more even and consistent now. Sync for multiplayer, recs, and saves is maintained with previous releases. Thanks to II2N for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140218-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140218-000000)! This update adjusts the spectator client, so that it will prevent the system from turning off the display or going to sleep while it is actively waiting or connected. Thanks to BugA for the suggestion!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140208-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140208-000000)! This update includes 2 fixes for AIs: boar lurers will no longer be tasked as civilian explorers, and an important gatherer retasking bug has been corrected. The retasking bug affected land nomad-style starts most significantly, but it also affected general play and DC villager retasking. The bug would cause the AI to not realize which resources are actually being gathered, which would result in an incorrect number of villagers on each resource, despite properly set sns.</p><p>The vote panel was also fixed and adjusted in various ways. It will no longer auto-resume and will always require either a continue vote from at least 1 player or a unanimous save-and-exit vote to save. There was a bug in 8-player human games, where if p8 drops, the panel would auto-resume even if everyone had voted to save-and-exit, and this is now fixed. If for any reason the vote cannot reach a conclusion, the resign-and-quit button will now create a save, as well. If you have a save-and-exit file (vps.date-time.msz) or a resign-and-quit file (oos.date-time.msz), you should always be able to restore the game now, and no one should be improperly shown as resigned. The pings displayed on the vote panel will also refresh appropriately, and be shown next to the correct player names.</p><p>A new registry setting was also added, so that people can configure the default value for the spectator button on each startup: Spec Default: REG_DWORD, Set between 0 to 5 to configure the default number of spectators, where Sx is 5. For expansions and mods, resource storage mode 8 was enabled for use in A.G.E. (previous modes were 1, 2, and 4, I think), so you can add to a resource upon object completion, but not remove the added resources upon destruction.</p><p>Finally, several new statistics views (score, population, economy, military, and society) have been added for the record viewer and spectator mode by pressing the statistics hotkey (default is F4) or the statistics button at the top-right of the mini-map. For ease of readability, each category is kept as short as possible and the most important details are toward the right, as they are most likely to be visually aligned for player comparison. The statistics view for normal games remains unchanged. The readme describes all of the abbreviations. Expansions and mods can use the -t:WFGS format with SetupAoC.exe to adjust the abbreviations for the 4 resource types in economy view.",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20140115-230000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140115-230000)! This update adjusts the Hidden Civs feature, so that only actual chosen civs are shown as \"Unknown\". If a player selects Random, Team Random, or Full Random, those will now appear as-is. This should help in tournament settings, in particular, where players are required to pick a civ. The other player will now know if they have picked an actual civ (will show as Unknown) instead of just attempting to mirror them with Team Random, etc.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140114-090000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140114-090000)! This update fixes a minor display issue with the Hidden Civs feature. The display would not always render the text Unknown and would show Random instead for some players, though once they clicked in or selected a civ, it would update to Unknown. Now, it should always be Unknown.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140109-160000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140109-160000)! This update adjusts the installer to better ensure that the registry flags are set when necessary for Windows 8.1. It will try to modify the existing flags instead of just replacing them now.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140109-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140109-000000)! This update adjusts the installer to disable the new forced DPI Scaling Virtualization in Windows 8.1 by appending the HighDpiAware flag to DWM8And16BitMitigation in the registry. In addition, it will now check if dplayx.dll is smaller than 32KB, and if it is, it will invoke fondue.exe to install the DirectPlay component. No changes have been made for the actual game in this update. Thanks to StepS for the DPI report and LordGravewish for the DirectPlay report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140103-180000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140103-180000)! This update fixes the train-cancel-crash bug that was carried over from v1.0c and occurred during Viper-Jordan BO21 G1. It's unfortunate that it wasn't discovered until now. Sorry, Viper, Jordan, Comet, and Blitz!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140103-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140103-000000)! This update adds a registry key to enable direct IP and LAN players to host games with the hidden civs feature. The host player will need to manually add this value to the registry, since the installer does not provide a checkbox for it. The settings provided by a lobby launch client (Voobly, GR, etc.) will override this setting. Registry entries are stored under \"\\Software\\Microsoft\\Microsoft Games\\Age of Empires II: The Conquerors Expansion\\1.0\". The game will check under \"HKEY_CURRENT_USER\" first and then \"HKEY_LOCAL_MACHINE\". If both are missing for a given setting, the default will be used.</p><p>Registry Settings:</p><p><ul><li>Multiple Queue: REG_DWORD, Set to 1 to enable the \"multiple building queue\" feature.</li><li>Patrol Delay: REG_DWORD, Set to 1 to enable the 10 second patrol delay default.</li><li>Disable Help Text: REG_DWORD, Set to 1 to disable the event text chat notifications.</li><li>Hidden Civs: REG_DWORD, Set to 1 to enable the hidden civ feature for multiplayer games.</li><li>Adjust Terrains: REG_DWORD, Set to 1 to replace snow and ice with grass and moss.</li><li>Extend Population: REG_DWORD, Set to 1 to extend the population dropdown list to 1000.</li><li>Mini-map Colors: REG_DWORD, Set to combined flags for red, purple, and grey.</li></ul>",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140102-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140102-000000)! This update fixes the text and button positions at the top-right of the game setup screen. The Random and Reset buttons are now slightly wider, and the \"Game Settings\" text is now right-aligned against them, so the text should no longer get overlapped by the buttons on various localizations, including German and Spanish. English is almost identical.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20140101-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20140101-000000)! This update enables players to set the Patrol Default state to On (10s delay) or Off (2s delay) with \"Ctrl+F1\" at any time. An onscreen notification message will appear, as well. It should help players who don't have access to the installer (Voobly) to toggle their standard/alternate patrol delay. Happy New Year!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20131231-100000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20131231-100000)! This update makes a bug fix for the IP box on the game setup screen to cap it at one address only to avoid overflows from having many network cards. In addition, some game setup screen controls were adjusted:</p><p><ul><li>non-host players see the \"Cancel\" button positioned exactly like the host (no longer awkwardly floating)</li><li>the \"Start Game\" and \"Cancel\" buttons were moved up 2 pixels away from the bottom border design</li><li>the title headers, \"Standard Game\" and \"Multiplayer Game\", were centered between the \"Name\" and \"Team\" titles</li></ul>",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20131231-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20131231-000000)! This update separates the in-game hover help popup text setting from the extended help event notifications in the chat (the train, research, etc. notices). Cycling with F1 or the help button onscreen will control both options for a total of 4 states (hover:off,notice:off, hover:on,notice:off, hover:off,notice:on, hover:on,notice:on). When the extended help notice state changes, you'll get a chat notification showing if it changed to on or off. Thanks to LightTree for the idea!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20131230-010000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20131230-010000)! This update finally enables the 4th parameter of the ai_info_map_type rms scripting command. When it is set to 1, the MapType specified will be shown in the <a href=\"https://imgur.com/JA8azYp\">Objectives</a> window, so players can see what type the map is closest to. If you would prefer that players scout to discover the specific style of the map, you can leave it as 0. Please see the reference for more information. Thanks to nC_eru_ on aoczone for the idea!</p><p>ai_info_map_type inConstMapName inConstIsNomad inConstIsMichi inConstIsStandard<br>1. #load-if-defined COASTAL-MAP will be true for AIs. Players will see Coastal in the Objectives window.<br>- ai_info_map_type COASTAL 0 0 1",
		itemsAffected: [],
		scriptingType: "rms"
	}, {
		number: "20131228-190000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20131228-190000)! This update changes the max age naming style to avoid confusion as suggested by randomdude. It now looks like <a href=\"https://i.imgur.com/AzgGOQP.png\">this</a>. The Imperial Age and Post-Imperial Age states are left as-is, since they can never span toward any other age (also reduces code size lol). Thanks to randomdude for the idea!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20131228-180000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20131228-180000)! This update optimizes the double-click selection code a bit, to avoid unnecessary unit comparisons and checks, etc. That's it",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20131228-020000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20131228-020000)! This update enables \"Unknown\" civ display on the multiplayer game setup screen, which can allow players to select civs without other players able to select counter civs. For this functionality, the game must be lobby launched for all players. In the lobby response preset data structure, the lobby launch provider must set the first \"bit\" of the ReservedFlags value (set it to 1, essentially lol) to enable it when launching all players.</p><p>Lobby launch preset structure changes since 1.4:</p><p><ul><li>the GameFilename was reduced by 20 bytes, making it 240 bytes in size instead of 260</li><li>this creates space for 5 new DWORD values after it:</li><li>the first 4 DWORD values are for allowed spectator IP addresses, 1 address per 4 bytes in DWORD form (default: 0)</li><li>the 5th DWORD value is for the ReservedFlags (default: 0)</li></ul>",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20131228-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20131228-000000)! This update fixes an issue with double-click selection, so now monks and monk-with-relic units will be selected separately. Thanks to Edie on aoczone for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20131223-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20131223-000000)! This update is just an installer adjustment. No changes have been made to the core game. Sorry about that, dukfinx!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20131222-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20131222-000000)! This update adjusts the placement system for AIs, so that place-control and place-point use building avoidance system type 1 instead of type 2 like before. The place-forward system will still use type 2 for placement outside line of sight. This allows for more precise positioning with those 2 placement methods. Thanks to II2N for the report!</p><p>Building avoidance system, Type 1: place-normal, place-control, place-point<br> - ally: rejects all tiles of the building itself only<br> - non-ally: rejects all tiles of the building itself + (for towers, tcs, and castles only, the attack range + 0.5 tiles)</p><p>Building avoidance system, Type 2: place-forward<br> - ally: rejects all tiles of the building itself only<br>- non-ally: rejects all tiles of the building itself + the building line of sight (not range) + 2 tiles",
		itemsAffected: [cUpBuild, pPlacementType],
		scriptingType: "ai"
	}, {
		number: "20131220-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20131220-000000)! This update adjusts the post-game notification for spectators to show \"Game over\" (localized) instead of \"Finished replaying game\". Thanks to LightTree for the suggestion!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20131219-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20131219-000000)! This update provides players with the ability to use both the 2 second patrol delay and the v1.0c 10 second patrol delay at any time. In addition, there are several other core bug fixes and other optimizations. The rec version has been updated from 9.B to 9.C. This version of v1.4 can open all v1.4 recs (9.C, 9.B, 9.A), v1.3 recs (9.9), and v1.0c recs (9.4). For AIs, the up-set-target-point action will now automatically shift the point inside the map boundaries if necessary. If you need the converted point, you can use (up-get-point position-point gl-point) afterward.</p><p>The patrol procedure is exactly the same, except for one added option:</p><ol><li>select military units (same)</li><li>click the Patrol button or press your Patrol hotkey, like Z (same)</li><li>optionally Shift+click to set waypoints for your patrol (same)</li><li>click to set the patrol destination point on the map (now 2 choices):<ul><li>click the point for your standard delay (default 2s, same)</li><li>Ctrl+click the point for your alternate delay (default 10s, new)</li></ul></li></ol><p>With the \"Original patrol default\" checkbox option on the installer, you can swap the 2s/10s to 10s/2s if you're more comfortable with the 10s delay as the default. In this way, you never really need to concern yourself with the other delay, unless you find a situation where you think it might be useful (an ambush attack on passing enemy units might be better with the 2s delay, while attacking with galleons in a thin river is often better with the 10s delay). You can play with the delay that is most comfortable for you and have the alternate delay available with Ctrl+click at any time (or ignore it entirely). As mentioned previously, other than the delay, there are no other differences with patrol.",
		itemsAffected: [cUpSetTargetPoint],
		scriptingType: "ai"
	}, {
		number: "20131023-100000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20131023-100000)! This update makes the adjustment to the tooltip hover text for custom named units, as requested, so they appear like \"Click to select only this Object Type.\" Thanks to Kor for the suggestion!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20131021-030000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20131021-030000)! This update prevents the post-game achievements data from being appended to the spectator data stream. This is primarily to ensure stream stability when the game ends.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20131018-230000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20131018-230000)! This update just includes some minor performance and pairing optimizations for some stuff. Other than that, nothing has changed ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20131016-180000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20131016-180000)! This update fixes another issue in the keyboard override code, in order to ensure that double-press centering works with docks. Thanks to Oceanic on Voobly for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20131016-160000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20131016-160000)! This update fixes an issue in the keyboard override code, in order to ensure that numpad ctrl group creation works with docks. Thanks to Oceanic on Voobly for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20131013-120000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20131013-120000)! This update adjusts the targeting code in order to hopefully make units a bit more responsive around buildings during patrol. With this, the rec/save version changes from 9.A (RC1) to 9.B (RC2), however 1.4 will open both of these, so no extra work is needed for players.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20131010-180000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20131010-180000)! This update improves the installer, so that it can (probably) update v1.0b, as well as uninstall both age2_x1.exe and age2_x1.4.exe installations. The included Readme.html has been updated, too ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20131009-060000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20131009-060000)! This update will now include multiplayer achievements data at the end of the rec file, for analyzers to read. The data is written as-is from the 0x82C length lobby achievements data block. Thanks to PkZ for the idea!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20131007-100000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20131007-100000)! This update fixes an epic bug from v1.0c in the attack group code, where if no targets are available to attack, units will \"freeze\" in place. Disbanding attack groups would reactivate them. This issue affected both land and boat attack groups. Thanks to II2N for the report, rec, and test scenario/AI!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20131006-060000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20131006-060000)! This update fixes a crash bug from v1.0c that occurs when restarting a paused recorded game after using certain cheat codes during the pause before the restart. yES. Thanks to II2N for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20131005-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20131005-000000)! This update fixes an issue with the game data loader code from v1.0c, where if you click the \"Previous Chapter\" button and then restart a rec, certain game state data could be corrupted.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130927-200000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130927-200000)! This update adjusts the installer to make the compatibility shortcuts for v1.0c, v1.3, and v1.4 inside the \"Support\" subfolder even when the Ctrl+Alt \"age2_x1.4.exe\" install method is used.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130926-100000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130926-100000)! This update adds some additional \"if REGICIDE\"-like symbols for map scripts, so that they have a better idea about what game mode is being played and the number of players, etc. Thanks to Cake for the idea!</p><p>Rms Map Symbol Extensions</p><p><ul><li>RANDOM_MAP: defined for Random Map games</li><li>TURBO_RANDOM_MAP: defined for Turbo Random Map games</li><li>REGICIDE: defined for Regicide games</li><li>DEATH_MATCH: defined for Death Match games</li><li>KING_OT_HILL: defined for King of the Hill games</li><li>WONDER_RACE: defined for Wonder Race games</li><li>DEFEND_WONDER: defined for Defend the Wonder games</li><li>CAPTURE_RELICS: defined for the Relics victory condition</li><li>[1-8]_PLAYER_GAME: defined as the total number of players</li><li>UP_AVAILABLE: defined for v1.4 and later; use to detect the patch</li>",
		itemsAffected: [],
		scriptingType: "rms"
	}, {
		number: "20130923-040000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130923-040000)! This update fixes an issue where certain hotkeys (objectives window, diplomacy, chat, etc.) wouldn't be available when the game loaded a rec/save file directly via double-click. Thanks to Meow on aoczone for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130922-140000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130922-140000)! This update brings the rec viewer control enhancements to v1.0c and v1.3 recs when opened via double-click compatibility mode. Thanks to noleafclover on aoczone for feedback! yES ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130922-060000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130922-060000)! This update eliminates the need to set the \"defend-priority\" sns (livestock, forage, gold, stone) to get those resources into the DC targetable units list. Now all food resources (except fish), stone, and gold are targetable by default. Thanks to II2N and Cake for feedback!",
		itemsAffected: [snDockDefendPriority, snForageDefendPriority, snGoldDefendPriority, snLivestockDefendPriority, snRelicDefendPriority, snStoneDefendPriority, snTownDefendPriority],
		scriptingType: "ai"
	}, {
		number: "20130920-120000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130920-120000)! This update makes a few fixes for the scenario editor, in order to display the names of conditions and effects for triggers in the list. The prefixes are C (condition), R (reversed condition), and E (effect). The framerate for the editor was also restored to the v1.0c standard to minimize overhead. In addition, the performance improvements from v1.4 will now also benefit v1.3 and v1.0c recs opened via double-click, and a restricted feature has been added for precision pixel scrolling.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130918-100000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130918-100000)! This update makes some changes for the installer, so that if you hold Ctrl+Alt when clicking the Install button, it will create an \"age2_x1.4.exe\" file and set it all up for rec file associations, color fixes, and everything. This should help people who play on Voobly, since Voobly overwrites the base \"age2_x1.exe\" at every start.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130916-230000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130916-230000)! This update changes the way the spectator+rec viewer speed buttons work. Now, the Slow and Fast buttons default to 25% per click, and fine adjustments require the Shift key. The Normal button resets to 50% for recs, and 75% in spectator mode. Thanks to aoczone for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130916-180000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130916-180000)! This update adds a restricted feature (press F5 to show the list) for a Left-aligned interface style. Thanks to i_Phone for the suggestion! Sorry for not including it earlier.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130914-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130914-000000)! This update fixes an issue where sounds may not play due to being skipped by the framerate increase in some situations. Thanks to Andorin, mohammad_aryan, and Spaden on aoczone for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130913-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130913-000000)! This update fixes an issue where attack notification chat messages are put into the spectator and rec data stream. Thanks to Nicov on aoczone for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130912-210000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130912-210000)! This update fixes an issue where the player.nfz data is not loaded before saved game data during the direct file loading process. For AIs, up-can-build and up-build should now allow for the construction of palisade and stone walls, preferably with place-point and sn-placement-zone-size set to 1. You cannot build gates with up-build due to rotation issues lol. Finally, uninstalling will now delete spectate.exe and miniupnpc.dll if they exist. The wndmode.dll file will be left just in case something else relies on it like VegMod. Thanks to II2N for the wall suggestion, LightTree for the uninstall report, and LightTree+Promi for their spectated game today, which made the player.nfz error visible.",
		itemsAffected: [cUpCanBuild, cUpBuild],
		scriptingType: "ai"
	}, {
		number: "20130912-020000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130912-020000)! This update fixes an issue where spectator chat boxes are disabled if the player being observed has resigned or been defeated. Thanks to people on Voobly for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130911-140000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130911-140000)! This update just includes some adjustments for spectator mode. That's it ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130910-030000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130910-030000)! This update makes some more bug fixes and adjustments for multiplayer lobby starts, like on Voobly. Thanks to Promi and i_Phone for testing!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130909-230000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130909-230000)! This update removes the \"Open v1.3\" right-click option for .mgz and just checks in the game. If the rec/save file is v1.3, it dynamically transitions to v1.3 and loads it. If not, it loads as v1.4. Thanks to fen for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130909-220000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130909-220000)! This update modifies the UP installer, so that it will create rec file associations for the game. The .mgx format will get an \"Open\" option, while .mgz format will get \"Open\" and \"Open v1.3\" in the right-click menu. Custom expansion rec formats will also be associated automatically. In addition, game shortcuts are created in the Support folder for people to easily launch v1.4, v1.3 compatibility mode, Enhanced v1.0c mode, or custom expansions.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130909-140000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130909-140000)! This update fixes a bug where the spectator host may see a post-game spectator disconnect notification message from 0.0.0.X instead of the proper ip address. Thanks to LightTree for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130909-120000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130909-120000)! This update makes a few adjustments for the spectator button, so Voobly can disable it. It seems they're not going to use the spectator host server within age2_x1.exe, and will attempt to handle it within the Voobly client + NAT code. This means that external clients probably won't be able to spectate Voobly games.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130908-183000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130908-183000)! This update adds a -e parameter for SetupAoC.exe, so expansion/mod developers can change the 3 character file extension for recs. This also influences the id inside the rec, so where Conquerors v1.0c is \"VER 9.4\", v1.3 is \"VER 9.9\", and v1.4 is \"VER 9.A\", if you set the extension to \"mgc\" with -e:mgc, your recs will be rec.date-time.mgc and the internal id will be \\MGC 9.A\". Thanks to danielpr for the idea! Finally, spectator files are now named spc.date-time.playername.mgz (or mod extension).",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130907-150000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130907-150000)! This update fixes a minor bug in the game, where it tries to determine the path that the game is running from. It's a very rare problem lol. Mausland, for the big maps, it would likely destabilize the game to try it, however the HD edition will have a bigger map size soon. For AoFE, UP works with it, but for widespread use and multiplayer games, the AoFE team would need to update and then distribute it. Hmm, the built-in AI is the only one that consistently walls, I think ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130907-140000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130907-140000)! This update renames the \"E10CM\" command line parameter for dynamic Enhanced v1.0c mode to \"V1C=1\". In addition, the \"V13=1\" parameter has been added for dynamic v1.3 mode. Unfortunately, v1.2 will have to remain separate, so if you need to watch a game from then, please use the v1.2 installer, update your age2_x1.exe, copy it as age2_x1.2.exe, and then you can use that to watch v1.2 recs going forward. Finally, a boar lurer retask bug that II2N reported should hopefully be fixed with this update for v1.4. Thanks to II2N for the report and rec!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130906-230000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130906-230000)! This update ensures that, like multiplayer mode, opening various interface elements like the Objectives window will not pause spectator mode. In addition, it adds an \"E10CM\" command line parameter for age2_x1.exe to allow v1.4 will dynamically transition into Enhanced v1.0c mode without a separate executable. You can also set Windows Explorer to associate .mgz, .mgx, .gaz, and .gax files with the v1.4 age2_x1.exe. After this, if you double-click on a v1.4 file, it will directly load the file. If you double-click a v1.0c file, it will seamlessly auto-transition into Enhanced v1.0c mode and load the file in the same way.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130906-130000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130906-130000)! This update makes chat messages always appear onscreen during rec and spectator modes, even if you change player perspective, so you don't have to worry about missing messages anymore. In addition, it attempts to fix the memory corruption crash that occurs in v1.0c and v1.3 when the zone map overflows 255 zones. Now, it should hopefully handle it without crashing, although the zone map for that particular terrain restriction may be somewhat improper. Without the fix, all of the recs sent by Viper crash, just like the 5 people in the original game. After the fix, the recs no longer crash and playing the rec as a real game no longer crashes either. Thanks to Promi for the chat idea and Viper for the report and recs! Sorry for the trouble!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130906-060000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130906-060000)! This update fixes the choppiness that spectators may have seen while the actual game was paused or otherwise waiting. In addition, after 5 seconds of waiting/pause, a message will appear at the bottom of the screen for spectators, \"Waiting for other players...\", so they are aware that it's waiting and not crashed. Thanks to Viper and PkZ for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130904-160000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130904-160000)! This update fixes a bug in the tribute anti-cheat detection code, fixes a crash when bringing the system menu up with the F10 key, and defaults playback speed to 50% for normal recorded games. The spectator default is still 75%, which will auto-adjust as necessary. Thanks to BugA, ryshep, and fen for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130904-120000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130904-120000)! This update includes a minor change for the repairer fix. Other than that, it's identical.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130904-060000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130904-060000)! This update includes a minor change for the spectator client, reducing the time between connection attempts from 5s to 2s while waiting for the host to launch the game.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130904-050000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130904-050000)! This update improves the spectator client response time and makes it auto-disconnect once your game closes. The top-right menu for spectator mode has been made consistent, as well, so there's no difference between live and not-live. The Quit Game option will exit the game entirely, and the Achievements button is now shown at all times, including after the game ends. Thanks to BugA for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130904-030000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130904-030000)! This update allows the Flare button/hotkey (alt+F) to toggle fog of war during recorded games and spectator mode. Probably can't get any other ones lol. Thanks to BugA and LightTree for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130903-160000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130903-160000)! This update fixes an issue where the rate change hotkeys were allowing activation even when speed was locked. Thanks to Genette for the report and rec! BugA, hmm, we'll see if anything can be done!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130903-080000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130903-080000)! This update fixes a few text-related issues with the F7 and F8 notification messages, and the IP address button text. Just some little things ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130902-140000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130902-140000)! This update eliminates excessive memory allocations in the spectator system, and fixes a crash bug on shutdown. Thanks to LightTree for the report, and offwo, promi, sh, and fen for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130902-060000",
		version: 1.4,
		notes: "UserPatch v1.4 RC has been released (20130902-060000)! This update fixes an issue in the scenario editor, where the \"Others\" trigger dropdown category resets each time you reselect a condition/effect. There's also some minor adjustments for the spectator code.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130901-080000",
		version: 1.4,
		notes: "UserPatch v1.4 RC8 has been released (20130901-080000)! This update fixes an issue where different hero unit types that look similar are selected together when double-clicking. The issue was caused by the fix that allowed barracks and castle huskarls to be selected together. Hero units will now always be separated. In addition, a crash bug was fixed in the Relics victory condition. Thanks to danielpr for the Relics report, and to nhoobish on Voobly for the hero report! Finaldeath, yES!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130901-000000",
		version: 1.4,
		notes: "UserPatch v1.4 RC6 has been released (20130901-000000)! This update disables a few non-applicable controls like \"Demo Loop\" when spectating a live game, which should provide an indicator that it's live. Thanks to LightTree for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130831-030000",
		version: 1.4,
		notes: "UserPatch v1.4 RC5 has been released (20130831-030000)! This update adds the Spectator Stream, allows Team Random to mirror preselected civs, Random, and Full Random instead of only other Team Random players, fixes several bugs in gathering and the scenario editor (prevents overflow from selecting >25 units for patrol and weirdness with Set Objects), improves performance for all game modes (especially windowed mode single player, rec replay, and human multiplayer games), makes background mode (F8) tri-state, and adds the up-update-targets command for AIs to request an immediate targets-in-town-size update. The readme describes the spectator system, which is currently supported for Direct IP, LAN, and GameRanger. Details have been provided to Voobly for implementation.</p><p>This last command was necessary because while if you expand town size, new targets are quickly added into the target list, if you reduce town size, you have to wait until the target refresh, which happens every 15 seconds. This can cause issues with retreating, for example. The reference file has an example for how to use it after changing town size. Thanks to II2N for the report and rec! Thanks to LightTree, fen, Archon, offwo, SH, Promi, marathon, Grok, i_Phone, Viper, PkZ, kkab, Jordan, Whack, and ZeroEmpires for spectator feedback!</p><p>For background mode (F8), the 3 states are now:<br>1. Back: Off - mouse locked inside window border, pause on alt+tab (default)<br>2. Back: On - mouse free to move beyond border, no pause (spectator default)<br>3. Back: View Lock - mouse locked inside window border, no pause (new)</p><p>For always-on-top (F7), the 2 states are still:<br>1. Set View: Off - window will move behind other windows (default)<br>2. Set View: On - window will stay on top of other windows</p><p>Changing these will now show notifications onscreen.",
		itemsAffected: [cUpUpdateTargets],
		scriptingType: "ai"
	}, {
		number: "20130606-180000",
		version: 1.3,
		notes: "UserPatch v1.3 is pending release (20130606-180000)! This update resolves 694: #UserPatch [Core Bug] Double-click selector code fails to properly account for object property differences. Thanks to LightTree for the report! The internal version id has been updated due to the new code, so please redownload here.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130606-000000",
		version: 1.3,
		notes: "UserPatch v1.3 is pending release (20130606-000000)! This update resolves 693: #UserPatch [Core Bug] The patrol trigger effect may crash when some selected units no longer exist. In v1.0c and v1.2, the patrol trigger effect would use the originally requested number of units to patrol, instead of the number of units actually found/available at the time of the effect, leading to the patrol function reading uninitialized memory lol. This would usually crash the game, but if you're lucky, it might read an old result from another trigger instead. Thanks to Jetkill Fastmurder at AoKH for finding this bug! The internal version id has been updated due to the new code, so please redownload here.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130604-200000",
		version: 1.3,
		notes: "UserPatch v1.3 is pending release (20130604-200000)! This update resolves 692: #UserPatch [Core Bug] Multiplayer game setup code improperly compares time with signed integers. This issue could cause people to be dropped from multiplayer games for no reason other than not changing their civ, color, or team for 2 minutes, among other things. Thanks to LightTree, marathon, offwo, and promi for the report, and marathon for the fix! The internal version id has been updated due to the new code, so please redownload here.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130604-120000",
		version: 1.3,
		notes: "UserPatch v1.3 is pending release (20130604-120000)! This update resolves 691: #UserPatch [Core Bug] Repeatedly ungarrisoning a unit from a non-building object may break the fog of war. Here's a picture of it lol. Thanks to II2N for the rec and report! The internal version id has been updated due to the new code, so please redownload here.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130603-180000",
		version: 1.3,
		notes: "UserPatch v1.3 is pending release (20130603-180000)! This update resolves 690: #UserPatch [Request] The multiplayer multiple building queue setting should be controlled by the host. If a player has ready'ed with another setting and the host changes it, the player will be un-ready'ed and need to click in to confirm. Thanks to StepS, fen, and BugA for feedback! I think this makes it much more intuitive lol. The internal version id has been updated due to the new code, so please redownload here.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130602-180000",
		version: 1.3,
		notes: "UserPatch v1.3 is pending release (20130602-180000)! This update resolves 689: #UserPatch [Core Bug] Unit type transition code for objects like trebuchets fails to consider custom LOS. This fixes the underlying cause for the original converted Korean villager LOS bug reported by II2N, and also enables villagers, trebuchets, and monks to receive LOS adjustment by the Change Range trigger effect without breaking the fog of war. The internal version id has been updated due to the new code, so please redownload here.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130602-120000",
		version: 1.3,
		notes: "UserPatch v1.3 is pending release (20130602-120000)! This update makes some changes to the trigger effects based on feedback from randomdude. The internal version id has been updated due to the new code, so please redownload here.</p><p>Here are the new ranges that the effects will allow for the final result:<br>- Speed: 0.5 to 4.5 (to prevent walking through walls and other bugs), units must have at least 0.5 speed to be affected<br>- Range: 1.0 to 21.0 (LOS is auto-adjusted to range+3, which is the safest maximum possible), units must have at least 1 range<br>- Armor: -32768 to 32767 (armor #1 = strike, armor #2 = pierce), range is bounded to prevent overflow</p><p>Note that LOS will not be adjusted for villagers, trebuchets, or monks due to unit swapping breaking the \"explore map\".Thanks, Kor! Thanks, randomdude!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130601-200000",
		version: 1.3,
		notes: "UserPatch v1.3 is pending release (20130601-200000)! This update resolves 688: #UserPatch [Scenario Design] New trigger effects are required to change object speed, range, and armor. For the speed effect, the value scale is multiplied by 100 in order to allow more control (1 = 0.01 speed increase, 100 = 1.0). The internal version id has been updated due to the new code, so please redownload here.</p><p>Here are the ranges that the effects will allow for the final result:<br>- Speed: 0.5 to 4.0 (to prevent walking through walls and other bugs), units must have at least 0.5 speed to be affected<br>- Range: 1.0 to 16.0 (LOS is auto-adjusted to range+3, which is the safest maximum possible), units must have at least 1 range<br>- Armor: 0 to 32767 (armor #1 = strike, armor #2 = pierce)</p><p>We're done this time. For real lol. Only crash bugs are acceptable now, until release on June 8. If anyone has seen any crashes on v1.3, please report it on the other thread!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130601-100000",
		version: 1.3,
		notes: "UserPatch v1.3 is pending release (20130601-100000)! This update resolves 687: #UserPatch [Scenario Design] The change ownership effect fails to switch all pieces of multi-part buildings. Although it's probably a relatively rare case, having a multi-part building owned by different players simultaneously sounds like it could cause some instability, so lol. Thanks to randomdude for the report! The internal version id has been updated due to the new code, so please redownload here.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130531-060000",
		version: 1.3,
		notes: "UserPatch v1.3 is pending release (20130531-060000)! This update resolves 686: #UserPatch [Core Bug] AI villager explorers may idle indefinitely in multiplayer games that are recorded. Hopefully, villager exploration will now be more consistent, with less idling. The internal version id has been updated due to the new code, so please redownload here.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130529-000000",
		version: 1.3,
		notes: "UserPatch v1.3 is pending release (20130529-000000)! This update includes some readme changes, and the installer will now link to the AoKH Blacksmith if it detects that the person needs v1.0c. Hopefully, the other v1.0c localizations can be uploaded there, too, as I think only the EN-US localization is there at the moment. If the other v1.0c localizations were on the Blacksmith, and that main EN link described and linked to the other v1.0c localizations, it would be great. Thanks to Leif for the idea! Download here.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130528-000000",
		version: 1.3,
		notes: "UserPatch v1.3 is pending release (20130528-000000)! This update replaces the previous v1.3 release candidate due to some minor installer adjustments for anti-gregging support (lol).",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130526-000000",
		version: 1.3,
		notes: "UserPatch v1.3 is pending release (20130526-000000)! This update is now available for \"slightly\" more public testing as the v1.3 release candidate. Please test it! If it's stable after 2 weeks, this will be the final v1.3.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130526-000000",
		version: 1.3,
		notes: "UserPatch v1.3 is pending release (20130526-000000)! This update resolves 685: #UserPatch [Request] Allow Alt+Install to easily create a separate age2_x1.0c.exe for Enhanced v1.0c mode. The installer can now create a separate Enhanced v1.0c mode executable file. Now, if you hold \"Alt\" when clicking the \"Install\" button, it will install Enhanced v1.0c and then clone the result as \"age2_x1.0c.exe\". Holding \"Ctrl\" will still install in-place Enhanced v1.0c for \"age2_x1.exe\". I hope this makes it a lot easier for people who want to have the ability to watch old v1.0c .mgx recs, etc. The link is only available in the afk chat, in order to keep it from spreading until it is tested.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130524-200000",
		version: 1.3,
		notes: "UserPatch v1.3 is pending release (20130524-200000)! This update makes a slight adjustment, so that language dll id #30195 will show as the hover information message for the Relics victory condition. For the Conquerors, this id doesn't exist, but expansion developers can set this in their language data and localizations. The link is only available in the afk chat, in order to keep it from spreading until it is tested.</p><p>The message should probably look something like this:<br>\"Relics - Win by being the first player or team to destroy all enemies in military conquest or control all Relics. Once the relics are captured, the game will end immediately with no countdown.\"",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130523-180000",
		version: 1.3,
		notes: "UserPatch v1.3 is pending release (20130523-180000)! This update fixes a bug with the -v version flag for the installer. No gameplay changes were made in this release. Thanks to danielpr for the report! The link is only available in the afk chat, in order to keep it from spreading until it is tested. Important note: Please read the important note in the previous post ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130523-160000",
		version: 1.3,
		notes: "UserPatch v1.3 is pending release (20130523-160000)! This update resolves 683: #UserPatch [Scenario Design] The Own Fewer Objects trigger condition must be able to process areas, and 684: #UserPatch [Scenario Design] Provide a checkbox to invert the result of any trigger condition. If you click \"Set Area\" now, and then do something other than set the area on the map, like click \"Go to Area\", the previous area will now be cleared/reset, so if you want to use \"Own Fewer Objects\" with the original all-objects-on-the-map style, you can do this. As for the \"not\"/inversion checkbox, if it's checked, the condition is normal; if it's unchecked, the condition is inverted. Thanks to randomdude and kor for the suggestion! The link is only available in the afk chat, in order to keep it from spreading until it is tested.</p><p>Important note: We need to stabilize this for final release, as v1.3 is now frozen. Please consider this a one-time exception, since these fixes were already written. I'd rather not have to deny further requests, as it's not a nice feeling to say \"no\" lol.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130522-140000",
		version: 1.3,
		notes: "UserPatch v1.3 is pending release (20130522-140000)! This update makes a few minor changes for the installer. Expansion developers can now use the -v parameter with the -g parameter to set the version (like SetupAoC.exe -g:aoc -v:2.1 -i). This isn't necessarily recommended due to ES versioning lols in mp, but it's there if people want to use it. The old -v for bypassing the v1.0c version check is now -b. The link is only available in the afk chat, in order to keep it from spreading too far until it is tested. Thanks to danielpr for the suggestion!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130521-200000",
		version: 1.3,
		notes: "UserPatch v1.3 is pending release (20130521-200000)! This update makes a minor adjustment for the Relics victory condition in order to ensure that all enemy players resigning still ends the game lol. Sorry about that ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130521-180000",
		version: 1.3,
		notes: "UserPatch v1.3 is pending release (20130521-180000)! This update resolves 682: #UserPatch [Request] Add a Relics victory condition for instant victory upon capturing all relics. The link is only available in the afk chat, in order to keep it from spreading too far until it is tested. If this victory condition is selected, the VICTORY-RELICS #load symbol will be defined for AIs. In this mode, once all relics on the map are captured, that player/team gets instant victory without a timer. This might be best with a custom rms, probably, where the map has a single relic somewhere in a difficult to reach place. This one is for ryshep ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130520-200000",
		version: 1.3,
		notes: "UserPatch v1.3 is pending release (20130520-200000)! This update resolves 681: #UserPatch [Core Bug] Attack-ground commands may fail to restrict to valid map coordinates. The link is only available in the afk chat, in order to keep it from spreading too far until it is tested. Although the attack-ground command will no longer crash, AIs should take care to keep their activities within map bounds. Thanks to LightTree for the rec and report! Thanks again for those ideas, John!",
		itemsAffected: [cUpTargetPoint, pTargetAction],
		scriptingType: "ai"
	}, {
		number: "20130520-180000",
		version: 1.3,
		notes: "UserPatch v1.3 is pending release (20130520-180000)! This update resolves a UI issue in the scenario editor (object type list buttons). The link is only available in the afk chat, in order to keep it from spreading until it is tested. Thanks to randomdude for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130520-130000",
		version: 1.3,
		notes: "UserPatch v1.3 is pending release (20130520-130000)! This update resolves 679: #UserPatch [Scenario Design] The trigger effect to patrol units must be able to process areas, and 680: #UserPatch [Request] Display a notification when a player disconnects after a multiplayer game ends. The link is only available in the afk chat, in order to keep it from spreading too far until it is tested. Thanks to John the Late for the suggestions! Note that we're not going to 2197 with feature requests here; these are simply a few items to differentiate from v1.2.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130519-130000",
		version: 1.3,
		notes: "UserPatch v1.3 is pending release (20130519-130000)! This update resolves 677: #UserPatch [AI Scripting] AIs must be able to find wall segments and houses in the local objects list, and 678: #UserPatch [AI Scripting] A new fact is required to check whether an object exists at a specific point. The link is only available in the afk chat, in order to keep it from spreading too far until it is tested. With the new up-point-contains fact, you can check if an object exists on a map tile. Thanks to II2N and ER for feedback!",
		itemsAffected: [cUpPointContains],
		scriptingType: "none"
	}, {
		number: "20130519-110000",
		version: 1.3,
		notes: "UserPatch v1.3 is pending release (20130519-110000)! This update resolves 676: #UserPatch [Core Bug] Hero units are improperly double-click selected together with similar looking units. The link is only available in the afk chat, in order to keep it from spreading too far until it is tested. Thanks to randomdude for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130518-140000",
		version: 1.3,
		notes: "UserPatch v1.3 is pending release (20130518-140000)! This update resolves 671: #UserPatch [Core Bug] Resources may not be released after failing to load an incompatible saved game, 672: #UserPatch [Core Bug] Building foundation clearing reads uninitialized memory resulting in an out-of-sync, 673: #UserPatch [AI Behavior] Deer and livestock must always be targetable by the AI from the first pass, 674: #UserPatch [AI Scripting] AIs must be able to directly execute garrison, delete, and attack-ground, and 675: #UserPatch [Core Bug] The multiple building queue toggle button fails to lock when set via CLI parameter.</p><p>The new oos fix (the game reads uninitialized memory when a builder moves units off a building foundation in order to clear the land for construction = may oos at random in v1.0c and v1.2) will necessarily break compatibility with v1.2. It's unfortunate that we didn't find this earlier lol. The link is only available in the afk chat, in order to keep it from spreading too far until it is tested.</p><p>Thanks to LightTree, Grok, marathon, fen, ER, II2N, and offwo for reports and feedback!",
		itemsAffected: [cUpTargetObjects, cUpTargetPoint],
		scriptingType: "ai"
	}, {
		number: "20130513-140000",
		version: 1.2,
		notes: "UserPatch Final v1.2 has been updated to 20130513-140000! This update resolves 670: #UserPatch [Core Bug] The game may crash if an AI uses direct targeting under certain conditions. If a target-objects call sent 128 or more units against a single target, it would crash. Thanks to II2N for the report! This release maintains full compatibility with the final v1.2.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130501-140000",
		version: 1.2,
		notes: "UserPatch Final v1.2 has been updated to 20130501-140000! This update resolves 669: #UserPatch [Core Bug] The garrison validation handler may redirect to an invalid memory address. Another stability fix lol. Thanks to Grok and LightTree for the report! This release maintains full compatibility with the final v1.2.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130426-000000",
		version: 1.2,
		notes: "UserPatch Final v1.2 has been updated to 20130426-000000! This update resolves 668: #UserPatch [Core Bug] The find-remote command for AIs may corrupt the fpu stack during processing. Just a stability fix lol. This release maintains full compatibility with the final v1.2.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130422-163000",
		version: 1.2,
		notes: "UserPatch Final v1.2 has been updated to 20130422-163000! This update resolves 666: #UserPatch [Request] Enable DPI awareness for the update installer window and controls, and 667: #UserPatch [Core Bug] The filter-distance action may perform improperly under certain conditions. Thanks to StepS for the DPI report on twitter, and II2N for finding the issue with distances >= 128. This release maintains full compatibility with the final v1.2.",
		itemsAffected: [cUpFilterDistance],
		scriptingType: "none"
	}, {
		number: "20130415-090000",
		version: 1.2,
		notes: "UserPatch Final v1.2 has been updated to 20130415-090000! This update resolves 665: #UserPatch [Request] Make a few code changes in order to improve multiplayer synchronization. Just a few stability improvements. This release maintains full compatibility with the final v1.2.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130412-022000",
		version: 1.2,
		notes: "UserPatch Final v1.2 has been updated to 20130412-022000! This update resolves 664: #UserPatch [Core Bug] Recorded games may fail to start at the setup screen under certain circumstances. This is a critically important update to spread. It retains full compatibility with the final v1.2. Please redownload if you got an earlier version! Thanks to Rabadai for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130409-210000",
		version: 1.2,
		notes: "UserPatch Final v1.2 has been updated to 20130409-210000! This update resolves 662: #UserPatch [Core Bug] Extended text strings entered into the in-game chat log may crash the game, and 663: #UserPatch [Request] Allow browsing through folders on the Saved and Recorded Games screen. The first causes crashes for german localizations on the 6th scenario of the William Wallace campaign (and other places). Thanks to SCNElite_Paladin at aoczone for the folder idea! This update retains full compatibility with the final v1.2.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130405-200000",
		version: 1.2,
		notes: "UserPatch Final v1.2 has been updated to 20130405-200000! This update resolves 660: #UserPatch [AI Scripting] Provide defconsts for extended strategic number math operators, and 661: #UserPatch [Scenario Design] Moving an object during free object placement creates a duplicate object. Thanks to LightTree for finding 660, when testing Lightning from Alevo (I broke it lol)! Thanks for using those extended mathOps, Alevo! This update will not break recs, saves, or multiplayer, and is 100% compatible with the previous release of v1.2.",
		itemsAffected: [pMathOp],
		scriptingType: "ai"
	}, {
		number: "20130330-020000",
		version: 1.2,
		notes: "UserPatch Final v1.2 is pending release! This update makes a slight update to the readme to show a picture of SetupAoC.exe in the game folder for people using the alternate installation method. I think this is it lol.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130328-200000",
		version: 1.2,
		notes: "UserPatch Final v1.2 is pending release! This update resolves 659: #UserPatch [AI Scripting] New actions are required to better manage the direct unit filtering system. With this release, 3 new commands are available: up-reset-filters (reset all filters to -1 and clear search indices in one command; up-reset-search is still needed to clear search results); up-filter-distance and up-filter-garrison, which do the same thing as up-filter-range, but allow for \"typeOp\" to provide goals, etc. Please see the reference for details. In addition, mines and forage should now be searchable for gaia using up-find-remote, however this may be computationally expensive, so I don't recommend it, especially later on. Thanks to Rubberman, II2N, Archon, and ER for feedback! To get this non-public release, please click here.",
		itemsAffected: [cUpResetFilters, cUpFilterDistance, cUpFilterGarrison, cUpFindRemote],
		scriptingType: "ai"
	}, {
		number: "20130327-200000",
		version: 1.2,
		notes: "UserPatch Final v1.2 is pending release! This update fixes the documentation for up-get-search-state to show \"out\" instead of \"in\" for the parameter. Thanks to Archon for reminding me! To get this non-public release, please click here.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130327-010000",
		version: 1.2,
		notes: "UserPatch Final v1.2 is pending release! This update renames the \"Alternate interface style\" as the \"Widescreen interface style\" and sets the checkbox on by default. Thanks to LightTree for feedback! To get this non-public release, please click here.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130327-230000",
		version: 1.2,
		notes: "UserPatch Final v1.2 is pending release! This update resolves 658: #UserPatch [Core Bug] AI shepherds may idle indefinitely when attempting to target allied livestock. Thanks to marathon and LightTree for the report! To get this non-public release, please click here.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130326-205600",
		version: 1.2,
		notes: "UserPatch Final v1.2 is pending release! This update removes the Bombard tower siege bonus and Debugging modifications features from the restricted features section of the installer. To avoid gameplay changes and avoid balance flame wars (lol), this change was required. I'm sorry for any trouble. To get this non-public release, please click here.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130326-201600",
		version: 1.2,
		notes: "UserPatch Final v1.2 is pending release! This update makes a few adjustments to the migration/retask fix. It might help to reduce a few operations. Thanks for finding that, RULER! To get this non-public release, please click here.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130325-160000",
		version: 1.2,
		notes: "UserPatch Final v1.2 is pending release! This update resolves 657: #UserPatch [Request] Allow players to select Migration and Crater Lake for single player games. New AIs can try these, so we can leave it up to each player now. To get this non-public release, please click here.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130325-010000",
		version: 1.2,
		notes: "UserPatch Final v1.2 is pending release! This update resolves absolutely nothing, once again lol. It only reorders some restricted features on the installer window and adjusts some Readme stuff. To get this non-public release, please click here.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130324-150000",
		version: 1.2,
		notes: "UserPatch Final v1.2 is pending release! This update resolves 656: #UserPatch [Scenario Design] The game may crash when map-copying large objects like mountains in the editor. Some additional stability for the editor lol. To get this non-public release, please click here.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130324-000000",
		version: 1.2,
		notes: "UserPatch Final v1.2 is pending release! This update resolves 655: #UserPatch [Request] Allow for passing a command line parameter to the installer to preselect features. You can now pass a parameter to SetupAoC.exe to preset the checkboxes on the installer. This can allow for customized silent installations, as well. For example, \"SetupAoC.exe -i -f:11101\" will install v1.2 with all checkboxes disabled except for checkboxes 1, 2, 3, and 5 (core update, save filename, windowed mode, and alternate interface). There are 20 checkboxes in total, when including the restricted features list, and anything unspecified is set to disabled. This might be useful for automated, silent installations for mod and expansion distributors, I think. Thanks to danielpr for the idea! To get this non-public release, please click here.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130323-160000",
		version: 1.2,
		notes: "UserPatch Final v1.2 is pending release! This update resolves 654: #UserPatch [Core Bug] AI villagers fail to change dropsites after selecting one that is unreachable. Thanks to II2N for the report! To get this non-public release, please click here.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130323-130000",
		version: 1.2,
		notes: "UserPatch Final v1.2 is pending release! This update includes a few adjustments to existing fixes and stuff. Nothing specific, just general optimizations lol. To get this non-public release, please click here.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130323-020000",
		version: 1.2,
		notes: "UserPatch Final v1.2 is pending release! This update resolves absolutely nothing lol. It includes an updated Readme with an additional FAQ and other documentation fixes, though. To get this non-public release, please click here.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130321-200000",
		version: 1.2,
		notes: "UserPatch Final v1.2 is pending release! This update resolves 653: #UserPatch [Core Bug] The game may crash if object placement occurs over the map boundary. Might as well fix that one, too lol. To get this non-public release, please click here.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130321-190000",
		version: 1.2,
		notes: "UserPatch Final v1.2 is pending release! This update resolves 652: #UserPatch [Scenario Design] Enable free object placement in the scenario editor if Ctrl+S is pressed twice. Just a minor change to an existing fix. Thanks to HockeySam18 at AoKH for feedback! To get this non-public release, please click here. Finaldeath, yes, you should be able to adjust the stance of any unit, I think lol.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130321-140000",
		version: 1.2,
		notes: "UserPatch Final v1.2 is pending release! This update resolves 650: #UserPatch [Core Bug] The Team Random option fails to randomize civ distribution within teams, and 651: #UserPatch [Request] The Random civ id should be shifted from 30 to 45 to allow more room for new civs. Thanks to LightTree, marathon, ryshep, II2N, and ER for feedback! To get this non-public release, please click here.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130320-140000",
		version: 1.2,
		notes: "UserPatch Final v1.2 is pending release! This update resolves 649: #UserPatch [Core Bug] AI monks are unable to attack by default with the defensive targeting system. Unlike all non-hero units, monks are internally created on defensive attack stance, which prevented them from attacking after a recent patrol fix. Now, TSA works for all aggressive military and monks that are at least defensive stance. To get this non-public release, please click here.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130319-080000",
		version: 1.2,
		notes: "UserPatch Final v1.2 is pending release! This update resolves 648: #UserPatch [Request] The installer should setup the firewall if the port forwarding feature is enabled. I hope this eliminates a lot of the issues people have with setting up multiplayer games. It will enable both dplaysvr.exe and age2_x1.exe (or an expansion exe), in the Windows Firewall. To get this non-public release, please click here.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130319-040000",
		version: 1.2,
		notes: "UserPatch Final v1.2 is pending release! This update resolves 646: #UserPatch [Core Bug] The alternate interface fails to refresh the advanced button set when toggled, and 647: #UserPatch [AI Scripting] New facts and actions are required for AIs to check the terrain on the map. With this release, the rec version has again increased from 9.6 to 9.8. The following commands have been added for scripting: up-set-target-by-id, up-point-terrain, and up-get-point-terrain. Please see the reference for details. Thanks to tilmur for the report!",
		itemsAffected: [cUpSetTargetById, cUpPointTerrain, cUpGetPointTerrain],
		scriptingType: "ai"
	}, {
		number: "20130318-160000",
		version: 1.2,
		notes: "UserPatch Final v1.2 is pending release! This update resolves 644: #UserPatch [Request] Add a button to the playlist manager for when drag-drop is blocked by UIPI, and 645: #UserPatch [Request] Allow for the selection of a maximum advancement age on the game setup screen. Here's what the max-age feature looks like. The \"Dark - Imperial\" is the whole game, \"Dark - Castle\" blocks the Imperial Age tech, \"Dark - Feudal\" blocks the Castle Age tech, and \"Dark Age\" is only the Dark Age, blocking the Feudal Age tech, etc. Just like there are #load symbols for DARK-AGE-START, etc., these indicate the end age: DARK-AGE-END, FEUDAL-AGE-END, CASTLE-AGE-END, and IMPERIAL-AGE-END. Note that the #load symbols UP-AVAILABLE, UP-VERSION-1.1, and UP-VERSION-1.2 are all defined.",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20130316-025738",
		version: 1.1,
		notes: "UserPatch 20130316-025738 has been released! This update resolves 643: #UserPatch [Request] Save the persistent multiple building queue setting when changed from single player mode. Now, if you go to the single player game setup screen and change the MQ/SQ state, it will update the persistent registry setting, so if you close the game and reopen, it will remember it. Changing it from mp mode will not update the persistent value in the registry, so you don't lose your original state when adjusting for a host with a different MBQ setting.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130316-015209",
		version: 1.1,
		notes: "UserPatch 20130316-015209 has been released! This update resolves 642: #UserPatch [Core Bug] The Zone section of the main menu screen has misaligned interface controls. Just a tiny continuation from the earlier UI element repositioning stuff lol.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130315-192644",
		version: 1.1,
		notes: "UserPatch 20130315-192644 has been released! This update resolves 641: #UserPatch [Core Bug] The clip buffer for the alternate interface may not be released during shutdown. Just a minor memory management issue lol.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130313-195436",
		version: 1.1,
		notes: "UserPatch 20130313-195436 has been released! This update resolves 640: #UserPatch [Core Bug] Market display text may fail to redraw with the alternate interface style. I think it should be proper now. Thanks to tilmur for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130312-154558",
		version: 1.1,
		notes: "UserPatch 20130312-154558 has been released! This update resolves 639: #UserPatch [AI Scripting] A new command is required for AIs to find visible flares from any player. The up-find-player-flare command can now be used to get the position of any visible flare from any player. The up-find-flare command essentially remaps to (up-find-player-flare any-ally GOAL). The any-ally value will not get your own flares, so you'll need to check my-player-number for that case. Thanks to Archon for feedback!",
		itemsAffected: [cUpFindPlayerFlare],
		scriptingType: "ai"
	}, {
		number: "20130307-095725",
		version: 1.1,
		notes: "UserPatch 20130307-095725 has been released! This update resolves 635: #UserPatch [Request] Enable single-player mode to operate at 60fps instead of 20fps by default. With this change, AIs get 3x as many updates per second, as in 1.0c, it is 20fps. This has no effect on multiplayer games, where the framerate is autosmoothed based on lag, etc. To detect if 60fps mode is active, check #load-if-defined UP-PROCESS-60FPS. You can either jump-rule the entire script except every 3rd pass, or ensure that the rules that perform turn count math adjust for 3x as many script passes. A restricted feature (press F5 on the installer) exists to restore the 1.0c 20fps.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130307-054738",
		version: 1.1,
		notes: "UserPatch 20130307-054738 has been released! This update resolves 634: #UserPatch [AI Scripting] The direct unit targeting commands should allow guard, follow, and stop actions. In addition, the first parameter of up-target-objects has been activated: set it to 1 to make the command only target the object set by up-set-target-object. I think we're done now, for real this time lol.",
		itemsAffected: [cUpTargetObjects],
		scriptingType: "ai"
	}, {
		number: "20130306-124453",
		version: 1.1,
		notes: "UserPatch 20130306-124453 has been released! This update resolves 633: #UserPatch [AI Scripting] The find-remote command should not restrict gaia checks by sighted time. There is also now a sn-livestock-defend-priority that you can set to 1, just like sn-gold-defend-priority, sn-stone-defend-priority, sn-forage-defend-priority, etc., in order to get them into your targetable sighted units list. This means that find-remote will be able to see them. Thanks again to II2N for the report!",
		itemsAffected: [cUpFindRemote, snLivestockDefendPriority],
		scriptingType: "ai"
	}, {
		number: "20130306-105146",
		version: 1.1,
		notes: "UserPatch 20130306-105146 has been released! This update resolves 632: #UserPatch [Core Bug] The find-remote command for AIs may crash the game under certain conditions. Epic fail crash lol. Thanks to II2N for the test scenario, test AI, and report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130306-040002",
		version: 1.1,
		notes: "UserPatch 20130306-040002 has been released! This update resolves 631: #UserPatch [Request] Provide a way to install for game expansions specified by an xml manifest. Now, SetupAoC.exe accepts 2 new command line parameters: -l to create a shortcut link, and -g to specify the expansion to operate on and save the resulting exe for use by the expansion, without changing the original. For example, if the Age of Chivalry installer runs SetupAoC.exe -g:aoc, the result will be a separate aoc.exe inside the age2_x1 folder. This aoc.exe executable will always start Age of Chivalry by default, unless the associated Games/aoc.xml is unavailable.</p><p>The advantage here is that people will not have to change their Conquerors executable, different mods can still co-exist without conflicting with each other, and GR, etc. work more easily. For expansion developers, if you use the -g:NAME to have it create a separate exe, you must always ensure that it's called with that parameter for future operations, including uninstall (SetupAoC.exe -g:aoc -u -l for a silent uninstall, which simply removes aoc.exe and the shortcut created by the -l parameter, if it exists). If you have a separate uninstaller, then there's no issue: you can just directly delete the new executable, like aoc.exe.</p><p>Oh, forgot to mention that the installer's music playlist creator will also operate on the specified expansion's music.m3u.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130305-140519",
		version: 1.1,
		notes: "UserPatch 20130305-140519 has been released! This update resolves 630: #UserPatch [AI Scripting] Changing direct unit search filters should reset the search index offsets. Now, filter-include, filter-exclude, and filter-range will automatically reset the local and remote search index offsets, which is equivalent to (up-reset-search 1 0 1 0), to ensure that the lists are checked from the beginning with the new filter state, for subsequent find commands. A similar index offset reset occurs if you find-local or find-remote with a different type/class from last time, or the focus-player has changed for find-remote. Thanks to II2N for the report!",
		itemsAffected: [cUpFilterInclude, cUpFilterExclude, cUpFilterRange, cUpFindLocal, cUpFindRemote],
		scriptingType: "ai"
	}, {
		number: "20130305-130846",
		version: 1.1,
		notes: "UserPatch 20130305-130846 has been released! This update resolves 629: #UserPatch [Core Bug] The installer should prompt before removing an existing music playlist. Just another little tweak for future usability lol.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130305-082000",
		version: 1.1,
		notes: "UserPatch 20130305-082000 has been released! This update resolves 628: #UserPatch [Request] Provide a way to create a background music playlist through the installer. Hopefully, this makes it more reliable for people to use.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130305-071532",
		version: 1.1,
		notes: "UserPatch 20130305-071532 has been released! This update resolves 627: #UserPatch [Core Bug] The defensive targeting system for AIs may conflict with formations and groups. The gliding was a result lol. Thanks to II2N for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130304-231141",
		version: 1.1,
		notes: "UserPatch 20130304-231141 has been released! This update resolves 626: #UserPatch [AI Behavior] Deep sea fish should initially have near absolute priority over shore fish. We can't really control all future retasking as the game passes it on to the human fish retask controller, but we can try to ensure that all AI controlled retasking events prioritize deep sea fish over shore fish where possible. Thanks again to LightTree for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130304-222133",
		version: 1.1,
		notes: "UserPatch 20130304-222133 has been released! This update resolves 625: #UserPatch [Core Bug] Selected trade buildings must show an estimated gold return despite pathing. Thanks to LightTree for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130304-011922",
		version: 1.1,
		notes: "UserPatch 20130304-011922 has been released! This update resolves 624: #UserPatch [Core Bug] AI fishing ships fail to path to deep sea fish through shallows except great marlin. In 1.0c, due to lol'ed terrain restrictions, deep sea fish cannot be reached by fishing ships if they are on the other side of shallows. The great marlin fish is the only exception. Thanks to LightTree for the rec and report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130303-170800",
		version: 1.1,
		notes: "UserPatch 20130303-170800 has been released! This update resolves 623: #UserPatch [AI Scripting] A new fact is required for AIs to check the number of idle units. With the new up-idle-unit-count, you can check the number of idle villagers, ships, etc. II2N reported that idle villager explorers could lead to epic lag if left unchecked, so this command will allow AIs to watch for this problem. Please note that, since idle state data is not cached, this command loops and evaluates the activity of all units of the specified type and should not be flooded each turn without other conditions above it in the defrule to limit it.</p><p>It's important to note that it's normal for villagers to be temporarily idle after finishing a task (especially in mp), so it might be best to check for long-term idling over several turns before taking any action. Thanks to II2N for the report!",
		itemsAffected: [cUpIdleUnitCount],
		scriptingType: "ai"
	}, {
		number: "20130303-164035",
		version: 1.1,
		notes: "UserPatch 20130303-164035 has been released! This update resolves 622: #UserPatch [AI Scripting] The object-data speed should be shifted into a more useful range of values. Since speed gets rounded, it would probably be 0-4 for all units, making it hard to compare. This multiplies it by 100, so the range after rounding is more useful.",
		itemsAffected: [pObjectData],
		scriptingType: "ai"
	}, {
		number: "20130302-152420",
		version: 1.1,
		notes: "UserPatch 20130302-152420 has been released! This update resolves 621: #UserPatch [AI Scripting] The up-object-data fact for AIs may fail to perform a valid comparison. A little oversight there lol. Sorry about that!",
		itemsAffected: [cUpObjectData],
		scriptingType: "ai"
	}, {
		number: "20130302-150016",
		version: 1.1,
		notes: "UserPatch 20130302-150016 has been released! This update resolves 620: #UserPatch [AI Scripting] New facts and actions are required to manipulate selected objects. Added with this release are 2 commands for working with the object set by up-set-target-object: up-get-object-data (action) and up-object-data (fact). In addition, up-set-target-object, up-find-local, and up-find-remote now work as either a fact or an action in a rule. If set-target-object cannot set the specified index, it returns false as a fact. If find-local or find-remote get 0 results from the search, they return false. I think that should be it for the direct unit task tweaks.</p><p>About the filter commands, they do nothing by themselves and only set state information for use by future find-* commands. Oh, and the formation and stance parameters for up-target-objects and up-target-point now work ",
		itemsAffected: [cUpGetObjectData, cUpObjectData, cUpSetTargetObject, cUpFindLocal, cUpFindRemote, cUpTargetObjects, cUpTargetPoint],
		scriptingType: "ai"
	}, {
		number: "20130301-144254",
		version: 1.1,
		notes: "UserPatch 20130301-144254 has been released! This update resolves 619: #UserPatch [Core Bug] The find-local and find-remote commands may crash if the list reaches the end. I forgot to mention that there's also a up-set-target-object for use with the find commands, up-get-point and position-object lol. Thanks to II2N for the report!",
		itemsAffected: [cUpFindLocal, cUpFindRemote, cUpSetTargetObject, cUpGetPoint, pPositionType],
		scriptingType: "ai"
	}, {
		number: "",
		version: 1.1,
		notes: "UserPatch 20130301-134643 has been released! This update resolves 618: #UserPatch [AI Scripting] The target-objects command should separate the selection into smaller groups. Now, both target-objects and target-point will work properly with action-default, action-move, and action-patrol. They will aim to separate the units selected with up-find-local into groups of 20 units or less before sending them against the remote target(s). Do not use the action-default or action-move commands if the defensive targeting system is locked on a target, or units will become \"confused\" and not respond for a few moments. Either bring the town size under enemy-buildings-in-town or set sn-disable-defend-groups on. The action-patrol command seems to work regardless.</p><p>This update also adds a new action, up-get-search-state, so you can see how many units are in both local and remote result sets and how many were added by the last search action for each. In addition, the up-filter-include final parameter now handles all mainland/island checks, accepting -1 to ignore, 0 to find non-mainland, or 1 to find mainland objects. The final parameter of filter-exclude now accepts a class id (building class 903, etc.) to reject a certain class during a search. I think that's it lol.</p><p>Just to clarify up-find-remote, for self/ally objects, it can find them directly at all times. For non-ally objects, if the object has been sighted and is either a building or has been seen/reseen within the past 5 seconds, it can be found. This should allow the AI to target units that are clearly visible without cheating, and target sighted enemy buildings in the fog.</p><p>One other note: although the new targeting and find commands aren't as heavy as attack-now, like any command that directly manipulates units like retreat-now, guard-unit, etc., please try not to flood them ",
		itemsAffected: [cUpTargetObjects, cUpTargetPoint, cUpGetSearchState, cUpFilterInclude, cUpFilterExclude, cUpFindRemote],
		scriptingType: "ai"
	}, {
		number: "20130228-192142",
		version: 1.1,
		notes: "UserPatch 20130228-192142 has been released! This update resolves 48: #UserPatch [AI Scripting] New actions are required for directing units. Some adjustments and tweaks will still be necessary in the coming days, but the general setup is complete. In particular, the handling of local search results greater than 40 may need to be changed, along with some quirks with up-target-objects (not finished yet). This release adds the following commands: up-delete-objects, up-find-local, up-find-remote, up-can-search, up-reset-search, up-filter-include, up-filter-exclude, up-filter-range, up-target-point, and up-target-objects.</p><p>Please see the reference for more detail! With this release, the UP moves from Beta to RC.",
		itemsAffected: [cUpDeleteObjects, cUpFindLocal, cUpFindRemote, cUpCanSearch, cUpResetSearch, cUpFilterInclude, cUpFilterExclude, cUpFilterRange, cUpTargetPoint, cUpTargetObjects],
		scriptingType: "ai"
	}, {
		number: "20130227-133733",
		version: 1.1,
		notes: "UserPatch 20130227-133733 has been released! This update resolves 617: #UserPatch [AI Scripting] Set UP-SCENARIO-GAME instead of SCENARIO-MAP to maintain compatibility. Change of plans lol. Now, the new code will define UP-SCENARIO-GAME to avoid breaking compatibility with AIs that expect only 1 type of map constant per game. Sorry!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20130227-131951",
		version: 1.1,
		notes: "UserPatch 20130227-131951 has been released! This update resolves 616: #UserPatch [AI Scripting] The SCENARIO-MAP symbol should always be defined for scenario games. Now, the SCENARIO-MAP #load symbol will always be defined, even if the scenario designer sets a map to Arabia, etc. If there was a map type set for the scenario, it will be defined in addition to SCENARIO-MAP. Hopefully, this allows AIs to avoid guessing when #loading rules. Thanks to II2N for the report!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20130221-141931",
		version: 1.1,
		notes: "UserPatch 20130221-141931 has been released! This update resolves 615: #UserPatch [Core Bug] The compatibility build for Win2K and earlier may crash under certain conditions. It was a strange little crash that happened if certain checkboxes were highlighted when pressing F5 to get the restricted features list lol. This set of installers may also now work with the weird 6.6MB age2_x1.exe from certain DVD distributions, but I would need access to that exe to test it directly to be sure.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130220-123414",
		version: 1.1,
		notes: "UserPatch 20130220-123414 has been released! This update resolves 614: #UserPatch [Request] The installer should not fail to display during rapid window transitions. Thanks to StepS on Twitter for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130220-042155",
		version: 1.1,
		notes: "UserPatch 20130220-042155 has been released! This update resolves 613: #UserPatch [Core Bug] The up-send-flare command for AIs sends to all players instead of only allies. Thanks to II2N for the report!",
		itemsAffected: [cUpSendFlare],
		scriptingType: "ai"
	}, {
		number: "20130220-023101",
		version: 1.1,
		notes: "UserPatch 20130220-023101 has been released! This update resolves 611: #UserPatch [Core Bug] Computer player names may be blank after playing several games without closing, and 612: #UserPatch [Request] Add a restricted feature to allow team bonuses to be processed before map generation. The second thing moves the team bonus processing before map generation. ES ordered it like this: civ bonuses and tech tree, map generation, team bonus techs. I think it makes little sense this way (and bugged the Slavs in AoFE), and it would have been nice to include the fix in the core update.</p><p>However, the reason it exists as a restricted feature is because changing this would impact gameplay for a relatively rare case: if a game starts with free RMS farms, like on Fortress, a player with Chinese or an ally of this player would get the +45F team bonus on these free farms. I'm not sure if many people even realized that this bonus didn't affect the free farms lol. In any case, we can't change this kind of thing without some kind of consensus that it's truly a game bug.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130219-144918",
		version: 1.1,
		notes: "UserPatch 20130219-144918 has been released! This update resolves 610: #UserPatch [Request] The website link for all expansions should always be read from language id 9542. Just a little update for expansions, so they can avoid competing for the \"Zone\" registry entry. With this, an expansion with support for multiple languages can even set a different url for each.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130218-101537",
		version: 1.1,
		notes: "UserPatch 20130218-101537 has been released! This update resolves 609: #UserPatch [Core Bug] The place-control and place-point AI systems may expand their zones too rapidly. It will now expand the placement-zone-size per building every 7 \"internal\" passes. These internal passes usually happen ~10 times for each AI script pass. Thanks to II2N and ryshep for the report!",
		itemsAffected: [cUpBuild, pPlacementType],
		scriptingType: "ai"
	}, {
		number: "20130218-015735",
		version: 1.1,
		notes: "UserPatch 20130218-015735 has been released! This update resolves 608: #UserPatch [Request] Enable the dual network resend system to further mitigate lag and hangs. Thanks to LightTree, ryshep, and jw for their help in testing this! However, if anyone plays on GR, please test this version to see if it is still able to avoid the vote panel break.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130217-201706",
		version: 1.1,
		notes: "UserPatch 20130217-201706 has been released! This update resolves 607: #UserPatch [Core Bug] Bombard tower availability may be incorrectly displayed on the tech tree. Thanks to Elendil_1500 at aoczone for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130214-163556",
		version: 1.1,
		notes: "UserPatch 20130214-163556 has been released! This update resolves 606: #UserPatch [AI Scripting] New facts and actions are required for AIs to perform point manipulation. Here are all of the commands that now exist for AIs to work with points: up-get-point, up-copy-point, up-add-point, up-lerp-percent, up-lerp-tiles, up-cross-tiles, up-get-point-distance, up-set-target-point, up-find-flare, up-send-flare, and a fact, up-point-distance. Please see the reference for all of the details!",
		itemsAffected: [cUpGetPoint, cUpCopyPoint, cUpAddPoint, cUpLerpPercent, cUpLerpTiles, cUpCrossTiles, cUpGetPointDistance, cUpSetTargetPoint, cUpFindFlare, cUpSendFlare, cUpPointDistance],
		scriptingType: "ai"
	}, {
		number: "20130213-140605",
		version: 1.1,
		notes: "UserPatch 20130213-140605 has been released! This update resolves 605: #UserPatch [Core Bug] Selecting the Custom maps list on the game setup screen may crash the game. Thanks to mm/avian from the AoFE debug chat for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130212-202238",
		version: 1.1,
		notes: "UserPatch 20130212-202238 has been released! This update resolves 604: #UserPatch [Core Bug] The IMediaEventEx interface is never released during application shutdown. The interface would be improperly bypassed during shutdown.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130212-104828",
		version: 1.1,
		notes: "UserPatch 20130212-104828 has been released! This update resolves 603: #UserPatch [Core Bug] The network resend system offset may prevent rapid request handling. Thanks to LightTree for all of the testing!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130211-190939",
		version: 1.1,
		notes: "UserPatch 20130211-190939 has been released! This update resolves 602: #UserPatch [Core Bug] The new network resend system should process packets in larger batches. Thanks to LightTree, Grok, SH, and offwo for testing and feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130211-122836",
		version: 1.1,
		notes: "UserPatch 20130211-122836 has been released! This update resolves 601: #UserPatch [Request] A restricted feature should be added to set the default MBQ state. With this, the MBQ state will be forced on and the toggle button will be removed. Thanks to Cysion, BugA, Prophet, LightTree, II2N, and ryshep for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130211-112107",
		version: 1.1,
		notes: "UserPatch 20130211-112107 has been released! This update resolves 600: #UserPatch [Request] Add an SQ/MQ button to allow players to change their multiple building queue state. Now, to avoid players having to \"GB\" in a multiplayer game because someone came with a different MBQ setting, the problem player can simply click the button next to the IP button to toggle their MBQ state. Thanks to LightTree and ryshep for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130211-093437",
		version: 1.1,
		notes: "UserPatch 20130211-093437 has been released! This update resolves 599: #UserPatch [Core Bug] Extended terrain id 42 is out of bounds and should be disabled. Now, terrain id 41 is include in the core update, and the Extended terrain lists feature has been removed from the restricted features list. Thanks again to Keisari Tapsa for the report!",
		itemsAffected: [pTerrain],
		scriptingType: ""
	}, {
		number: "20130211-085833",
		version: 1.1,
		notes: "UserPatch 20130211-085833 has been released! This update resolves 598: #UserPatch [Request] Read language ids 10679 and 10680 for extended terrain ids 41 and 42. These ids were hard coded to Unknown before, so now people can rename them as needed when they install the restricted \"Extended terrain lists\" feature. Thanks to Keisari Tapsa for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130210-113202",
		version: 1.1,
		notes: "UserPatch 20130210-113202 has been released! This update resolves 596: #UserPatch [Core Bug] The multiplayer AI status may be shown improperly under some conditions, and 597: #UserPatch [Core Bug] Changing certain settings in single player mode may unset the player 1 AI. The first bug was just a little issue with the CD/AI note next to each player on the multiplayer game setup screen. That second bug was definitely a problem for usability lol. Thanks to II2N and fen for the reports!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130209-170539",
		version: 1.1,
		notes: "UserPatch 20130209-170539 has been released! This update resolves 595: #UserPatch [Core Bug] The new network system may delay too long before handling a resend request. It should now be able to hold together a game with increased packet loss.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130209-130158",
		version: 1.1,
		notes: "UserPatch 20130209-130158 has been released! This update resolves 594: #UserPatch [Core Bug] Pre-game packets are improperly excluded from the packet resend system. Thanks to LightTree, SH, and offwo for finding this!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130208-013400",
		version: 1.1,
		notes: "UserPatch 20130208-013400 has been released! This update resolves 593: #UserPatch [Request] Update the save and rec version from 9.4 to 9.5 to block broken file loading. When 1.1 is finalized, it will probably change again to 9.6. For now, this should particularly help to maintain reliability for people using Age of Chivalry and Forgotten Empires with 1.1.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130207-201750",
		version: 1.1,
		notes: "UserPatch 20130207-201750 has been released! This update resolves 592: #UserPatch [Core Bug] Garrison action event timers for AIs may not always be synchronized. Just a little thing for rare cases lol. Ruler, I'll be adding a few more point-related commands to help with distance and positioning soon.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130207-052410",
		version: 1.1,
		notes: "UserPatch 20130207-052410 has been released! This update fixes an issue with the previous fix, relating to the lack of an ungarrison timer after the boar lurer garrisons into the town center. It's good for real this time. No, really ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130207-045536",
		version: 1.1,
		notes: "UserPatch 20130207-045536 has been released! This update resolves 591: #UserPatch [AI Behavior] AI boar lurers should still attempt to garrison when weak and not firing. I think it should be all proper now lol.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130207-032525",
		version: 1.1,
		notes: "UserPatch 20130207-032525 has been released! This update resolves 590: #UserPatch [Core Bug] AI boar lurers may be retasked as support hunters under certain conditions. I hope boar hunting is now reliable and lurers will no longer turn to shoot at their boar before returning to the TC. Thanks to II2N for the great report, scenario, and test AI!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130207-014127",
		version: 1.1,
		notes: "UserPatch 20130207-014127 has been released! This update resolves 589: #UserPatch [AI Scripting] AIs must be able to target building placement using specific map coordinates. The up-build command now accepts a new place-point parameter. The building will be placed with the focus on the point specified by up-set-target-point, which accepts a point goal pair. The up-get-point and up-send-scout commands can reference the up-set-target-point position with \"position-point\". With up-find-flare, you can get a specific point on the map from a human, send a scout there, and then use place-point to build there.</p><p>The value of sn-placement-zone-size, stored with each build command, determines the initial zone size, and like place-control, the zone will expand with each turn that fails. The target point can be changed in later script passes to shift the focus position. The place-point system does not rely on up-set-placement-data, sn-placement-fail-delta, or sn-placement-to-center.",
		itemsAffected: [cUpBuild, cUpGetPoint, cUpSendScout, cUpSetTargetPoint, cUpFindFlare, pPlacementType, pPositionType, snPlacementZoneSize],
		scriptingType: "ai"
	}, {
		number: "20130206-231921",
		version: 1.1,
		notes: "UserPatch 20130206-231921 has been released! This update resolves 588: #UserPatch [Core Bug] AI boar lurers may not retreat to the town center under certain conditions. Thanks to II2N for the report! This is a rerelease from a previous bugged update.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130205-190452",
		version: 1.1,
		notes: "UserPatch 20130205-190452 has been released! This update resolves 587: #UserPatch [Core Bug] A synchronization failure may cause a crash during an AI garrison event. Thanks to LightTree, SH, Grok, and marathon for triggering the crash. Sorry!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130204-193751",
		version: 1.1,
		notes: "UserPatch 20130204-193751 has been released! This update resolves 31: #UserPatch [Military] AIs cannot properly defend wonders, monasteries, and monuments, and 586: #UserPatch [Core Bug] The AI group garrison control system may read into uninitialized memory. The direct unit control fix is almost done, but needs documentation and some other things. The up-send-scout command now accepts all 13 values from up-get-point's PositionType enumeration instead of the ScoutMethod enumeration. No script changes are necessary, though. Thanks to Archon for the report and rec for the group garrison bug!",
		itemsAffected: [cUpSendScout],
		scriptingType: "ai"
	}, {
		number: "20130203-204133",
		version: 1.1,
		notes: "UserPatch 20130203-204133 has been released! This update resolves 585: #UserPatch [AI Scripting] New actions are required for AIs to read allied flare positions and send flares. As part of the direct unit targeting system, the following commands have been added in this release: up-find-flare, up-send-flare, up-get-point, up-copy-point, up-add-point, up-setup-search, and up-reset-search. Other than the last 2, all of these commands use point goal pairs, which like the cost commands require extended goal ids from 41 to 510 to store the (x,y). Please see the reference for details.</p><p>The up-setup-search and up-reset-search commands have little use until the rest of the targeting commands are done.",
		itemsAffected: [cUpFindFlare, cUpSendFlare, cUpGetPoint, cUpCopyPoint, cUpAddPoint, cUpResetSearch],
		scriptingType: "ai"
	}, {
		number: "20130202-114621",
		version: 1.1,
		notes: "UserPatch 20130202-114621 has been released! This update just cleans up the multiplayer direct-ip buttons and stuff, and aligns a few buttons as BugA mentioned above. The buttons were not reordered, though, as that would require further discussion on maybe 1.1a. Just some little touches for future usability as we get closer to the finish lol.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130202-005329",
		version: 1.1,
		notes: "UserPatch 20130202-005329 has been released! This update resolves 584: #UserPatch [Request] Adjust various interface inconsistencies, font sizes, and localization issues. The font sizes for the fencrazyrandom button and reset button have been reduced to provide more space for non-english localizations, and a few interface controls have been moved a few pixels here and there. I hope the interface generally seems more proper now, but some localizations may need to abbreviate their \"Reset\" translations to fit more comfortably inside the button region. This release also ensures that the resolution dropdown list \"auto-scrolls\" to show the currently selected resolution in the list upon first display.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130201-215423",
		version: 1.1,
		notes: "UserPatch 20130201-215423 has been released! This update resolves 583: #UserPatch [Core Bug] The screen size and scroll speed option headers are inconsistently positioned. Just some very minor text adjustments lol. I saw that the Screen Size header text was positioned 4px to the left of Sound Volume, then noticed that Scroll Speed was also 3px to the right, Graphics Detail was a few pixels too low, and Player at the top was off, as well.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130130-103215",
		version: 1.1,
		notes: "UserPatch 20130130-103215 has been released! This update resolves 582: #UserPatch [Core Bug] AI units on patrol should not ignore unpacked trebuchets as buildings. I think it should be all proper now lol.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130129-205625",
		version: 1.1,
		notes: "UserPatch 20130129-205625 has been released! This update resolves 581: #UserPatch [Core Bug] AI units may freeze due to excessive retargeting against buildings during patrol. Thanks to kunyi for the report and LightTree for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130129-141011",
		version: 1.1,
		notes: "UserPatch 20130129-141011 has been released! This update resolves 580: #UserPatch [Scenario Design] The random map generator seed width should be changed from 5 to 11 instead of 6. It was \"temporarily\" extended from 5 width to 6 width (just to add the negative sign) after the random map generator range went from \"0 to 32767\" to \"-2147483648 to 2147483647\". I forgot to update it to allow for typing the full Int32 width of 11 characters. Thanks to ryshep for the report!",
		itemsAffected: [],
		scriptingType: "rms"
	}, {
		number: "20130129-044032",
		version: 1.1,
		notes: "UserPatch 20130129-044032 has been released! This update resolves 579: #UserPatch [Core Bug] Strategic commander detection should be opt-in with USESC to avoid alienware crashes. The NOSC command line parameter to opt-out of the \"microsoft strategic commander controller\" detection (I wonder if anyone even uses this today lol) has been replaced with USESC to opt-in. This should be a better default, I think, for the vast majority of players, and avoid crashing with alienware systems, I hope.</p><p>Incidentally, I think this means that, by default, DirectInput and dinput.dll will no longer be loaded by the game.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130127-112419",
		version: 1.1,
		notes: "UserPatch 20130127-112419 has been released! This update resolves 578: #UserPatch [Core Bug] The AI forward builder transport system relies upon broken order list behavior. In 1.0c, the idle unit handler for AIs would send looping stop orders to all units in a forward builder group upon arrival. Fortunately for 1.0c, only 1 of these commands had a chance to execute due to the order list cache bug, so only 1 of the forward builders that arrived on a transport would be halted.</p><p>Since the order list cache fix allowed for these commands to execute as originally intended, all of them were being halted upon arrival. This fix eliminates the bug at its root, by removing the infinite stop loop for forward builders that arrive by transport. Forward building with transports should now be a lot more reliable. Thanks to Alevo for the report in the chat!",
		itemsAffected: [cUpBuild],
		scriptingType: "ai"
	}, {
		number: "20130127-005238",
		version: 1.1,
		notes: "UserPatch 20130127-005238 has been released! This update resolves 576: #UserPatch [Core Bug] Palisade gates should be validated based on the stack unit id like standard gates, and 577: #UserPatch [Core Bug] Scenario editor fog is broken when moving units after generating a new or blank map. The palisade gate fix will require object ids 789, 793, 797, and 801 to be made visible in the scenario editor, and not 792, 796, 800, and 804. This brings it in line with how the standard gates are handled by the game. The AoFE dat files will likely need to be updated for this fix. The bug with the scenario editor fog has existed since 1.0c and was fixed for the future usability of the game: no one wants to spend 2 hours making a scenario, only to move a unit and have the entire area covered in a broken fog lol. I remember experiencing this bug in the past, as well. Not good times lol. Thanks to AoKH and TomYo689 for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130126-112914",
		version: 1.1,
		notes: "UserPatch 20130126-112914 has been released! This update just includes a few optimizations for some functions. kunyi, it probably depends on the situation, but you can turn it on or off at any time. I haven't had much time to test it lol.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130123-205530",
		version: 1.1,
		notes: "UserPatch 20130123-205530 has been released! This update resolves 575: #UserPatch [AI Scripting] The original sn-enable-patrol-attack capabilities should be restored for AIs. I just realized that this had been left out for the longest time. Set sn-enable-patrol-attack to 1 to enable the patrol-style local targeting system. When attacking a distant target, this causes units to retarget against nearby sighted units immediately instead of waiting until they are in proximity to the original target.</p><p>It isn't \"real\" patrol (that's maybe for 1.1a), but it's still quite scary, especially when used with TSA. In fact, it may be overpowered, so it probably shouldn't be enabled for any difficulty less than Hard (and maybe only against human enemies lol). It shouldn't add any special lag, as the \"real\" instant-transition patrol part that did lag is still gone.</p><p>I think it works best with ranged armies. Note, however, that it will not work with multi-unit groups until they are disbanded or arrive at their target. It will only work with 1-unit attack groups, attack-now, TSA, and local targeting.",
		itemsAffected: [snEnablePatrolAttack],
		scriptingType: "ai"
	}, {
		number: "20130122-181036",
		version: 1.1,
		notes: "UserPatch 20130122-181036 has been released! This update resolves 574: #UserPatch [Core Bug] The game may crash if player colors are changed after a scenario is selected. The bug was caused by the AI player color extension fix, as the player looped over the auto-order "-" color. Thanks to ryshep for the report! (saw it reading upward lol)",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130122-164833",
		version: 1.1,
		notes: "UserPatch 20130122-164833 has been released! This update resolves 573: #UserPatch [Core Bug] Players without 1000 pop cannot see extended caps if the host has set one. Now, if a player joins a game where the host has 1000 pop enabled and has selected like 650 pop, the client will show 650, so they aren't left unaware of the actual cap.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130121-125622",
		version: 1.1,
		notes: "UserPatch 20130121-125622 has been released! This update resolves 572: #UserPatch [Core Bug] The ungarrison command for AIs improperly ejects relics from monasteries. It also fixes a related bug where a monk that is trained inside a monastery will not go for a relic after ungarrisoning. The worst part of that is that the monk inside locks onto the relic, preventing any other monk from going for it either until that monk is eliminated. Thanks to II2N for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130118-215400",
		version: 1.1,
		notes: "UserPatch 20130118-215400 has been released! This update resolves 571: #UserPatch [Core Bug] The multiple building queue feature operates inconsistently in multiplayer games. It would cause inconsistent queuing due to the execution delay in multiplayer games, so with 2 stables selected and shift+clicking to train knights 2 times, you may get 6:4 instead of 5:5 distribution between the 2 stables. Thanks to an AoFE Facebook comment for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130117-144524",
		version: 1.1,
		notes: "UserPatch 20130117-144524 has been released! This update resolves 570: #UserPatch [Core Bug] AI trade carts may idle indefinitely if they are forced to avoid a foundation. Thanks to Alevo, II2N, and LightTree for the reports!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130117-114003",
		version: 1.1,
		notes: "UserPatch 20130117-114003 has been released! This update resolves 569: #UserPatch [Core Bug] Unused network logging data is unnecessarily prepared and formatted. LightTree knows what I'm referring to here lol. Sorry for the excessive posts!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130116-154134",
		version: 1.1,
		notes: "UserPatch 20130116-154134 has been released! This update resolves 568: #UserPatch [Core Bug] Converted units that have special line-of-sight may break the fog of war. In particular, converting a korean villager with 7 los to another civ with 4 los, then retasking them would cause this fog of war bug. Thanks to II2N for the great report, details, recs, and saves!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130116-124549",
		version: 1.1,
		notes: "UserPatch 20130116-124549 has been released! This update moves the debug-print command to the \"Debugging modifications\" restricted feature to avoid the performance cost of scanning text strings in the chat for the trigger text.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130116-085231",
		version: 1.1,
		notes: "UserPatch 20130116-085231 has been released! This update resolves 566: #UserPatch [Request] Add a restricted feature to disable the F7 and F8 windowed mode commands, and 567: #UserPatch [Request] Rewrite the network system to increase resilience to packet loss and reordering. Marathon mentioned a person who was having issues playing the game due to the F7 and F8 commands, so for usability, this restricted feature has been added to the installer (press F5 on the installer to show it). The network fix has been committed to allow for more feedback. Thanks to marathon for reporting the issue with the keys, and Prophet, offwo, and LightTree for testing the network system!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130115-180522",
		version: 1.1,
		notes: "UserPatch 20130115-180522 has been released! This update adjusts the previous fix, correcting a crash that occurs when joining more than 1 mp game in a row on a single game instance, and adding instruction pairing optimizations.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130115-102948",
		version: 1.1,
		notes: "UserPatch 20130115-102948 has been released! This update includes a rewritten network system, combining both guaranteed transfer from 1.1 and a fallback list like 1.0c. Please test this release on direct ip and GR and everywhere. If it turns out to be stable, this will be committed with a public release.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130113-155525",
		version: 1.1,
		notes: "UserPatch 20130113-155525 has been released! This update resolves 565: #UserPatch [Core Bug] Palisade gates may be created with an invalid id by the rms generator. No idea if this fixes the issue in AoFE, but I hope it does lol. Thanks to prophet for the report, and sh, offwo, and cysion for testing!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130112-083706",
		version: 1.1,
		notes: "UserPatch 20130112-083706 has been released! This update resolves 564: #UserPatch [Core Bug] Selected unit icons may leave a black line behind due to an improper clip region. I saw this bug while watching ZeroEmpires' <a href=\"http://www.youtube.com/watch?feature=player_detailpage&v=I64fBixrGQs#t=213s\">recent video</a> (watch the selected unit icon boxes at the bottom of the screen after he selects all of the villagers and sheep and then deselects them). It affected all resolutions that use the 1024 or 1280 interface sets in the rec player. Thanks, ZeroEmpires!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130111-120803",
		version: 1.1,
		notes: "UserPatch 20130111-120803 has been released! This update resolves 563: #UserPatch [Core Bug] Interface rendering may be corrupted for certain lower resolutions. There was an error with certain 1024x resolutions. Sorry about the trouble ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130111-114920",
		version: 1.1,
		notes: "UserPatch 20130111-114920 has been released! This update resolves 562: #UserPatch [Core Bug] The in-game tech tree may fail to redraw properly on higher resolutions. Now, instead of rendering a corrupt baseline, the tech tree will render the extra space in black. The long-time redraw issues during scrolling the tech tree should also be resolved, I hope.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130111-090953",
		version: 1.1,
		notes: "UserPatch 20130111-090953 has been released! This update resolves 561: #UserPatch [Request] Arbitrary, unbounded video resolutions over 1920 width should be supported. It will now attempt to tile any resolution (here's 2560x1440). The only limitations now are minimums (min 800 width, 600 height). There might be some issues with the tech tree scaling on higher resolutions. I'm looking into that right now. Thanks to everyone for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130110-114650",
		version: 1.1,
		notes: "UserPatch 20130110-114650 has been released! This update resolves 560: #UserPatch [Core Bug] Volume levels may be improperly muted upon returning from a task switch. Thanks to devilhearts for the report and testing!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130110-084347",
		version: 1.1,
		notes: "UserPatch 20130110-084347 has been released! This update adjusts the \"debug-print\" chat command again for lobby starts.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130109-222811",
		version: 1.1,
		notes: "UserPatch 20130109-222811 has been released! This update just adjusts the \"debug-print\" chat command for mp games to provide more information and enable it to work on the game setup screen and vote panel window, as well. Please try to get everyone to use it whenever something goes wrong like a permanent vote block, etc. on GameRanger or anywhere else. Afterward, please collect the \"Age of Empires II\\directplay-debug.txt\" from everyone and upload an archive.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130109-065249",
		version: 1.1,
		notes: "UserPatch 20130109-065249 has been released! This update resolves 559: #UserPatch [Core Bug] The game will fail on startup if the local registry resolution data is missing. Thanks to jd for finding this bug! Separately, for network testing, this build includes a new, temporary \"command\" for mp games, where you can type \"debug-print\" without quotes and it will write some data to the local chat and to a log file, \"Age of Empires II\\directplay-debug.txt\". If anyone plays mp and experiences a vote break or anything, please get everyone in the game to use this command so we can collect information. Feel free to execute that command at any time during gameplay, or at the vote.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130109-000210",
		version: 1.1,
		notes: "UserPatch 20130109-000210 has been released! This update resolves 558: #UserPatch [Core Bug] The multiple building queue command may crash the game with an invalid selection. Thanks to Cysion for the report! Hi Holtzclaw! If the driver reports a resolution as available for 8-bit color with width <= 1920 and >= 800, it is added to the list without any other consideration. If it's not being added to the list, then the driver is not reporting that it supports that particular configuration to DirectDraw.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130108-050644",
		version: 1.1,
		notes: "UserPatch 20130108-050644 has been released! This update resolves 557: #UserPatch [Core Bug] AI monks with redemption fail indefinitely attempting to convert foundations. Thanks to II2N for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130107-010206",
		version: 1.1,
		notes: "UserPatch 20130107-010206 has been released! This update resolves 556: #UserPatch [Core Bug] Retasked AI gatherers may fail to transition their unit type before repairing. Thanks to offwo for finding this bug, and LightTree for the rec!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130106-171135",
		version: 1.1,
		notes: "UserPatch 20130106-171135 has been released! This update resolves 554: #UserPatch [AI Scripting] A new sn is required for AIs to configure the local unit targeting system, and 555: #UserPatch [Request] The player settings file should be saved separately for each expansion. Set sn-local-targeting-mode to 1 to prioritize attack bonuses and overall damage per hit. If set to 2, units will prioritize targets with high base pierce armor (>= 40), such as rams; otherwise, they will target as usual. The offensive priority value of a target (-1 to 11) is added to the weight for modes 1 and 2, as well. If set to 0, units will target as usual. Note that units that do 1hp or less damage per hit (like archers) will intentionally try to avoid wasting shots on high-pierce targets like rams on modes 1 and 2, if a better target is available. Thanks to LightTree for feedback!</p><p>Fix #555 will cause player.nfz to be created separately for each expansion, so selecting a new civ in AoFE and then playing AoC will not cause any issues or invalid selections/crashes. The hotkey file (playerX.hki) is still shared by the core game and all expansions to avoid excessive inconvenience for the player. Thanks to Promi for the report!",
		itemsAffected: [snLocalTargetingMode],
		scriptingType: "ai"
	}, {
		number: "20130105-143628",
		version: 1.1,
		notes: "UserPatch 20130105-143628 has been released! This update resolves 553: #UserPatch [Scenario Design] The game may crash if a multi-part building is partially deleted by a trigger. If someone were to build a town center, gate, or another building composed of multiple pieces in just the wrong place on a custom scenario map with the wrong triggers (remove or kill object), the game would probably crash (100% of the time for gates). Thanks to randomdude for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130105-012922",
		version: 1.1,
		notes: "UserPatch 20130105-012922 has been released! This update resolves 552: #UserPatch [Core Bug] The relic victory state is not reset by the recorded game loading code. Now, the [R] next to player score statistics will be properly displayed after watching an attempted relic victory rec. Thanks to LightTree for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130103-172054",
		version: 1.1,
		notes: "UserPatch 20130103-172054 has been released! This update resolves 551: #UserPatch [Core Bug] Names are swapped if the host is changed during multiplayer restore. Please note that if the host is changed in a game with AIs, the AIs will likely revert to petersen, since only the host's save file contains the AIs and their state information. Thanks to _DK_ at aoczone for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130103-132433",
		version: 1.1,
		notes: "UserPatch 20130103-132433 has been released! This update resolves 549: #UserPatch [Core Bug] Changing screen resolution in v1.1 improperly alters the original v1.0c resolution, and 550: #UserPatch [Request] Add new cli parameters for age2_x1.exe to force recording in mp games and more. The new parameters are in the \"Details\" section of the Readme. Thanks, MuRRay!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130102-190016",
		version: 1.1,
		notes: "UserPatch 20130102-190016 has been released! This update resolves 548: #UserPatch [Request] Display a notification during multiplayer startup for All Techs mode. For future usability, I think this will be helpful for inexperienced players who mistakenly set it (or have it set by the fencrazyrandom button), and just think, \"oh, the game is broken, why is everything all weird now! I lost my unique bonuses!\" The notification message is localized from the language dlls. For English, it will show \"!!! Full Tech Tree: Yes.\" in orange text during multiplayer startup, just like the cheats notification.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130102-163646",
		version: 1.1,
		notes: "UserPatch 20130102-163646 has been released! This update resolves 547: #UserPatch [Core Bug] Centering the view with idle hotkeys fails to consider the terrain elevation offset. Thanks to LightTree for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130102-105103",
		version: 1.1,
		notes: "UserPatch 20130102-105103 has been released! This update resolves 546: #UserPatch [Core Bug] The game may auto-exit to achievements instead of waiting after a multiplayer game. Thanks to fen and LightTree for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20130101-192926",
		version: 1.1,
		notes: "UserPatch 20130101-192926 has been released! This update resolves 545: #UserPatch [Request] Volume controls should be linked with the system unless optionally delinked. The feature to delink from the master system volume has been made a restricted feature, as it seems it was causing more confusion than anything else. For Vista and later, the per-application volume control eliminates the problem this fix was intended to solve, and linux+wine is unaffected, as well. Those on XP or earlier who wish to keep it delinked can simply install the restricted feature. Thanks to LightTree for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121230-153608",
		version: 1.1,
		notes: "UserPatch 20121230-153608 has been released! This update resolves 543: #UserPatch [Core Bug] Centering the view on an object fails to consider the terrain elevation offset, and 544: #UserPatch [Core Bug] Resource overflows may be handled improperly between target and gatherer. Thanks to those at aoczone for the reports!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121230-085528",
		version: 1.1,
		notes: "UserPatch 20121230-085528 has been released! This update resolves 542: #UserPatch [Core Bug] House, wall, and stable states are improperly hard-coded in the tech tree. Stables were hard-coded disabled only for aztecs and mayans, walls for goths, and houses for huns lol. It will now rely on the actual civ-specific tech data. Thanks, marmot!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121229-062932",
		version: 1.1,
		notes: "UserPatch 20121229-062932 has been released! This update resolves 541: #UserPatch [Core Bug] The game may fail due to unnecessary local machine registry checks. Now, the game should be able to run even if HKLM is inaccessible, so setupreg, etc. should no longer be needed. I hope this fixes those random crashes and other weirdness.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121229-020039",
		version: 1.1,
		notes: "UserPatch 20121229-020039 has been released! This update resolves 540: #UserPatch [Core Bug] The palisade gate is not shown on the tech tree when enabled by an expansion. Now, if an expansion enables palisade gates, they are used in both rms generated palisade walls (previous fix) and shown in the tech tree instead of being improperly skipped (missed this last time).",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121228-234136",
		version: 1.1,
		notes: "UserPatch 20121228-234136 has been released! This update resolves 539: #UserPatch [Core Bug] The game may crash on startup due to an unreliable file check system. The game will no longer check for empires2.exe in order to verify it has found the root folder, as this is unreliable with some \"unique\" installs. It will now check for Data\\graphics.drs to verify it is in the right folder. The process will check the current directory, then the parent if it's in the \"age2_x1\" folder, then fail gracefully and exit.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121227-041147",
		version: 1.1,
		notes: "UserPatch 20121227-041147 has been released! This update resolves 538: #UserPatch [Core Bug] AI villagers fail to retreat when attacked by unreachable enemy units. It was caused by ES mistakenly using the attacker's land zone id to see which villagers to retreat, instead of the land zone id of the villager who was attacked. Thanks to II2N for the report!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20121224-162808",
		version: 1.1,
		notes: "UserPatch 20121224-162808 has been released! This update resolves 537: #UserPatch [Core Bug] Garrisoned AI town centers are unable to attack enemy ships in range. Hopefully, AIs will no longer see this epic fail on Rivers and similar maps, where their villagers remain garrisoned indefinitely while the TC idles. Thanks to Finaldeath and II2N for the report!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20121223-160827",
		version: 1.1,
		notes: "UserPatch 20121223-160827 has been released! This update resolves 536: #UserPatch [Core Bug] Connection settings may be different for lobby launched mp games. I'm not sure if this will fix the GR issue (The Bug #4 lol), but it's probably best to be consistent here. Thanks to Cysion and offwo for their help!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121222-190233",
		version: 1.1,
		notes: "UserPatch 20121222-190233 has been released! This update resolves 535: #UserPatch [Request] The multiple building queue setting should not be embedded in the executable. Now, there is a \"Multiple Queue\" setting in the registry that controls whether or not the MBS feature is available for the player. Recs should not go out-of-sync with any configuration, regardless of whether it was enabled or not in the recorded game. In addition, all of the registry options on the installer are back to 2-state checkboxes (the indeterminate state is gone, as it was too unintuitive). These checkboxes now display the currently active state for each setting on startup, so you can more naturally make changes. Thanks to LightTree for feedback!</p><p>Only the \"save filename format\" feature changes the exe from the default features. Everything else is now a registry setting. Despite this, the MBS queue is still a sync feature, so all players must have it in the same state to start a mp game.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121221-202425",
		version: 1.1,
		notes: "UserPatch 20121221-202425 has been released! This update resolves 534: #UserPatch [Core Bug] Recs with MBS queuing go out-of-sync for viewers without the feature installed. Now, if a game was played with MBS queuing, people who prefer the game without that feature can still watch the rec without fear of it going out-of-sync. This fix involves installer adjustments for general future game usability. Normal players would be displeased if their final 1.1 goes out-of-sync with other final 1.1 game recs lol. This should help to avoid people having to add notes to their recs about installed features and things.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121220-200719",
		version: 1.1,
		notes: "UserPatch 20121220-200719 has been released! This update resolves 532: #UserPatch [AI Scripting] New mirror and flank scouting actions are required for up-send-scout, and 533: #UserPatch [AI Scripting] The up-get-fact command must be able to read the global gaia unit type counters. There are now scout-mirror and scout-flank actions for up-send-scout, and a cc-gaia-type-count fact id for up-get-fact. The scout-mirror action creates a dividing line for the team along the center and mirrors the home town center along that line to get the scouting point. The scout-flank command, which I think works better, uses Duck's idea by evaluating where each member of the team would \"scout-opposite\" and selecting the nearest point from that set. As for up-get-fact + cc-gaia-type-count, use it like the \"cc-players-unit-type-count gaia\" command: (up-get-fact cc-gaia-type-count tree-class gl-count). Thanks to Archon, Duck, FD, LightTree, ER, MuRRay, and more for feedback lol.",
		itemsAffected: [cUpSendScout, pFactId, pPositionType, pScoutMethod],
		scriptingType: "ai"
	}, {
		number: "20121218-195224",
		version: 1.1,
		notes: "UserPatch 20121218-195224 has been released! This update resolves 531: #UserPatch [Core Bug] Players who stay connected after resigning may cause severe multiplayer lag. Actually, this affects the game's performance during ANY post-game activity, including after losing in single player games, looking around on the map after a recorded game ends in the rec player, etc. Thanks to BugA for the report! About retreating, please still remember not to flood these commands ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121218-103034",
		version: 1.1,
		notes: "UserPatch 20121218-103034 has been released! This update resolves 530: #UserPatch [AI Behavior] Retreat commands should not affect units that are already near the target. Now units within 6 range of the retreat target object will be left alone by retreat commands, so they should be more alert to nearby enemy threats like a ram approaching a trebuchet. Hopefully, this enhances the defense of offensive siege weapons, etc. Thanks to LightTree, Archon, offwo, and II2N for feedback!",
		itemsAffected: [cUpRetreatNow, cUpRetreatTo],
		scriptingType: "ai"
	}, {
		number: "20121217-071443",
		version: 1.1,
		notes: "UserPatch 20121217-071443 has been released! This update resolves 529: #UserPatch [AI Behavior] Gatherers who aren't hunting should be eligible to be tasked as explorers. Before, all gatherers except miners were blocked, including shepherds, foragers, hunters, lumberjacks, fishermen, etc., in addition to builders and repairers. The explorer task check code has also been optimized to reduce the number of executed instructions by more than half. Thanks to Finaldeath for the report!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20121216-141758",
		version: 1.1,
		notes: "UserPatch 20121216-141758 has been released! This update resolves 528: #UserPatch [Maps & RMS] Map generated palisade walls should have palisade gates if they are enabled. There's no effect in The Conquerors, since the palisade gates are sea gates and \"hidden in the editor\". If they are enabled and made visible to the scenario editor like in AoFE, then rms palisade walls will get palisade gates. Thanks to Prophet, Cysion, and stream requests for the idea!",
		itemsAffected: [],
		scriptingType: "rms"
	}, {
		number: "20121215-114645",
		version: 1.1,
		notes: "UserPatch 20121215-114645 has been released! This update resolves 527: #UserPatch [Core Bug] The colored advancement notification fails to consider coop player slot shifts. Thanks to II2N for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121215-082505",
		version: 1.1,
		notes: "UserPatch 20121215-082505 has been released! This update resolves 526: #UserPatch [Core Bug] Logistica-style area of effect damage is hard-coded for only cataphract-line. Now, if a unit's \"blast level\" (see advanced genie editor 2) is set to a standard value (range: 0-3) + 4, it will give logistica-style 5 damage to surrounding units. The unit must have a blast radius greater than 0 for this to have an effect. Thanks to Cysion for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121215-031659",
		version: 1.1,
		notes: "UserPatch 20121215-031659 has been released! This update resolves 525: #UserPatch [AI Scripting] A new sn is required for AIs to block builder assistance for faster placement. With sn-disable-builder-assistance set to 1, you can prevent builders from assisting on nearby foundations after their work is complete. Hopefully, this helps with the PIDM starts.",
		itemsAffected: [snDisableBuilderAssistance],
		scriptingType: "ai"
	}, {
		number: "20121214-053030",
		version: 1.1,
		notes: "UserPatch 20121214-053030 has been released! This update resolves 524: #UserPatch [Request] The installer should not change settings when left in the indeterminate state. It's just a little change for the installer. Now, it will now show the registry settings as indeterminate on startup. This means you don't have to restore them each update, as they won't be modified unless you explicity set one to off or on. Non-registry settings that change the exe like MBQ will need to be adjusted.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121214-044001",
		version: 1.1,
		notes: "UserPatch 20121214-044001 has been released! This update resolves 523: #UserPatch [Maps & RMS] Additional padding is required between players for the team positioning system. Now, the distance between team members is base_size + 5 instead of just base_size. Randomization on maximum distance will ensure that they aren't exactly base_size + 5 distance from each other each game, but they should rarely be closer than this. Thanks to Prophet, Cysion, and LightTree for feedback!",
		itemsAffected: [],
		scriptingType: "rms"
	}, {
		number: "20121214-000455",
		version: 1.1,
		notes: "UserPatch 20121214-000455 has been released! This update resolves 522: #UserPatch [AI Scripting] A new sn is required for AIs to unbound sn-enemy-sighted-response-distance. With sn-disable-sighted-response-cap set to 1, subsequent changes to sn-enemy-sighted-response-distance will not be bound to 50. Thanks to ER for the idea and LightTree for feedback!",
		itemsAffected: [snDisableSightedResponseCap],
		scriptingType: "ai"
	}, {
		number: "20121212-204336",
		version: 1.1,
		notes: "UserPatch 20121212-204336 has been released! This update resolves 521: #UserPatch [Core Bug] Action timers are reset for garrisoned units during the object sighting update. If you've ever seen villagers stay in a town center or castle forever after garrisoning, this was the cause lol. Thanks to II2N for the rec and report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121212-191643",
		version: 1.1,
		notes: "UserPatch 20121212-191643 has been released! This update resolves 520: #UserPatch [Core Bug] The Defend the Wonder mode fails to set the starting age to Post Imperial. Now, the Defend the Wonder mode will get the POST-IMPERIAL-AGE-START #load symbol and the Objectives window will show the proper starting age. The \"current-age\" script fact was always fine and would report \"imperial-age\" even when the symbol was wrong. Thanks to II2N for the report!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "",
		version: 1.1,
		notes: "UserPatch 20121211-194443 has been released! This update resolves 518: #UserPatch [Request] The extended population cap setting should not be embedded in the executable, and 519: #UserPatch [AI Scripting] The min and max math operators for AI scripts are improperly inverted. The 1000 population setting is now toggled by setting \"Extend Population\" to 1 in the registry, and that's all the installer option does now. The executable remains the same, just like the snow and mini-map color options. This should help anti-cheat systems with their exe file comparisons.</p><p>Thanks, Finaldeath, for finding the errors in the min and max operators!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20121211-011638",
		version: 1.1,
		notes: "UserPatch 20121211-011638 has been released! This update resolves 517: #UserPatch [Core Bug] Colored advancement messages are duplicated by the recorded game player. From the previous fix lol. Thanks to LightTree for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121210-132218",
		version: 1.1,
		notes: "UserPatch 20121210-132218 has been released! This update resolves 516: #UserPatch [Request] Player advancement messages should be sent with the appropriate color. Here's an example of it. Thanks to everyone in the chat for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121209-132956",
		version: 1.1,
		notes: "UserPatch 20121209-132956 has been released! This update resolves 515: #UserPatch [Core Bug] Switching from Wonder Race to Defend the Wonder fails to restore team checkboxes. Thanks to II2N for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121205-081312",
		version: 1.1,
		notes: "UserPatch 20121205-081312 has been released! This update resolves 514: #UserPatch [AI Behavior] Villagers must not hesitate when attacking forward walls and gates. Sorry, missed a spot ",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20121205-073318",
		version: 1.1,
		notes: "UserPatch 20121205-073318 has been released! This update resolves 513: #UserPatch [Core Bug] Villagers should not target forward builders after they are garrisoned. Thanks again to II2N for the report and save file!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20121205-062430",
		version: 1.1,
		notes: "UserPatch 20121205-062430 has been released! This update resolves 512: #UserPatch [AI Behavior] Villagers should not hesitate when attacking forward buildings and towers. It should be a fair bit harder to \"lame\" an AI now, even with a forward tower on top of their town center. Thanks to II2N for the report and save file!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20121204-110414",
		version: 1.1,
		notes: "UserPatch 20121204-110414 has been released! This update resolves 511: #UserPatch [Request] A single continue vote will resume the game after the state is synchronized. This change makes connectivity votes work the same as save-and-exit votes. Thanks to BugA and Voobly for the idea, and Cysion, LightTree, and ER for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121204-082959",
		version: 1.1,
		notes: "UserPatch 20121204-082959 has been released! This update resolves 510: #UserPatch [Scenario Design] Tribute notifications from trigger effects should not appear for undefined resources. Thanks to randomdude for the scx! I had no way to test it before, since those resources can't be set in the editor. I missed the second code path ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121204-030323",
		version: 1.1,
		notes: "UserPatch 20121204-030323 has been released! This update resolves 508: #UserPatch [Scenario Design] Tribute notifications should not appear for undefined resources, and 509: #UserPatch [Scenario Design] Hover information may display %s for units after the change name effect. Second fix will show the unit type name (not custom). Thanks to randomdude for the reports!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121203-233535",
		version: 1.1,
		notes: "UserPatch 20121203-233535 has been released! This update resolves 507: #UserPatch [AI Behavior] Villagers should be more intelligent to avoid being lured by human attacks. ES only enabled the \"give up chasing units\" code for AI villagers against other villagers lol. This enables it against other units and such and hopefully makes it more intelligent, as well. Thanks to Okami for showing the issue in recent AoFE streams and II2N for feedback!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20121127-215812",
		version: 1.1,
		notes: "UserPatch 20121127-215812 has been released! This update resolves 506: #UserPatch [AI Scripting] A new symbol is required for AIs to detect the grouped_by_team map layout. Now, you can use UP-GROUPED-BY-TEAM to detect this, which might be useful for market positioning and stuff. This should complete the rms task on the final list. Thanks to LightTree for the idea!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20121125-161539",
		version: 1.1,
		notes: "UserPatch 20121125-161539 has been released! This update resolves 505: #UserPatch [Maps & RMS] Random map scripts must be able to request team player positioning. With the new \"grouped_by_team\" command under PLAYER_SETUP, you can position team members in close proximity on the map. This command and \"random_placement\" are mutually exclusive. The \"base_size\" specified in \"create_player_lands\" determines the distance between players on a team. If the rms requests walls, the system will try to ensure that all members share the same line, and aren't separated from each other. Note that \"Team Together\" must be enabled or it will operate using the \"random_placement\" system instead. Thanks to Prophet for the idea!",
		itemsAffected: [],
		scriptingType: "rms"
	}, {
		number: "20121121-030131",
		version: 1.1,
		notes: "UserPatch 20121121-030131 has been released! This update resolves 504: #UserPatch [Request] Alternate mini-map color and snow removal settings should not be embedded. Now, the snow removal setting is stored in the registry with the rest of the per-user game settings as \"Adjust Terrains\", and the alternate mini-map settings are combined into \"Mini-map Colors\". This should help with expansions, so that people can make these adjustments even with a pre-configured, distributed executable file. Thanks to LightTree for feedback! It might help Voobly with anti-cheat exe comparing, too lol.</p><p>Process for getting a value:<ol><li>read current user registry</li><li>if fails, read local machine registry</li><li>if fails, use default value</li></ol>",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121120-020808",
		version: 1.1,
		notes: "UserPatch 20121120-020808 has been released! This update resolves 503: #UserPatch [AI Scripting] The AI file loader should always check the AI folder for script overrides. Just a little change for the loader lol. Thanks to Cysion for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121116-150453",
		version: 1.1,
		notes: "UserPatch 20121116-150453 has been released! This update resolves 502: #UserPatch [Core Bug] Building type count values for AIs are improperly counted after advancement. Epic fail bug in the sighted unit fix lol. Thanks to RULER for the report!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20121108-193229",
		version: 1.1,
		notes: "UserPatch 20121108-193229 has been released! This update resolves 501: #UserPatch [Core Bug] An improper code offset in the order list cache fix may result in a crash. Thanks to infractor10 for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121107-180834",
		version: 1.1,
		notes: "UserPatch 20121107-180834 has been released! This update increases the rule limit from 2000 to 10000. I don't think it's a good idea, but it doesn't really matter what I think lol. Tracker/site is down (free hosting lol), so it's now redirecting to saint's server. Thanks for the wonderful hosting and help, saint!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20121107-100622",
		version: 1.1,
		notes: "UserPatch 20121107-100622 has been released! This update resolves 500: #UserPatch [Core Bug] Excessive explore orders may lag the game if targets are unreachable. The unit order cache list fix allowed all explore orders to actually be processed, unlike 1.0c, where only the first was processed. When failures occur, explore orders are resent and if an AI is requesting a disturbingly high number of explorers(> 10), the effect is magnified. The fix ensures that no more than 4 explore orders are processed per batch, although multiple batches may arrive in a single turn. Hopefully, the performance is a bit better for AIs that request 3495 explorers. Please remember that exploring is computationally expensive, since the entire map has to be analyzed, tile by tile, for places to check. Thanks to II2N for the report!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20121105-105257",
		version: 1.1,
		notes: "UserPatch 20121105-105257 has been released! This update resolves 499: #UserPatch [Request] The installer should prompt for elevation to apply color compatibility fixes. Thanks to saint for the elevation button idea! It now checks to see if either the HKCU or HKLM appcompatflags are set before requiring elevation for the Windows 8 fix.</p><p>Just saw the posts from LordGravewish and Finaldeath. Thanks for the ideas! I hope this latest solution works well, though. It now only requires elevation to update the registry as needed and never again.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121104-015201",
		version: 1.1,
		notes: "UserPatch 20121104-015201 has been released! This update resolves 498: #UserPatch [Core Bug] The game may crash on Windows 8 without appcompat flags for 8-bit color rendering. If installed on Windows 8, it will apply the appcompat fix to enable 8-bit color. Thanks to LordGravewish for discovering the issue and the solution!</p><p>Great summary, LightTree! Thank you for all of the detailed work with the colors ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121102-202547",
		version: 1.1,
		notes: "UserPatch 20121102-202547 has been released! This update resolves 497: #UserPatch [Request] Additional mini-map color options are required for improved visibility on LCD monitors. 3 new optional checkboxes have been added to the installer for alternate shades of red, purple, and grey. The grey is there to revert to 1.0c grey for those who are able to see that clearly next to stone and sand. The readme (lol) describes the rest. Thanks to LightTree for research, testing, and gathering feedback from many others including offwo, ryshep, ER, sh, cysion, and prophet! He considered many factors for all player colors, including how on some LCD monitors (including properly calibrated ones), the colors at the top differ from the bottom on the same screen, depending on viewing angle lol.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121028-173744",
		version: 1.1,
		notes: "UserPatch 20121028-173744 has been released! This update resolves 496: #UserPatch [Core Bug] The multi-queue (MBS) system may crash due to an invalid data offset. Sorry to cysion, sh, marathon, ii2n, steven, ryshep, and offwo for this long existing epic fail that contributed to the crashing of the games today lol.</p><p>The direct targeting actions are unrelated to current attack methods as LightTree said. In the end, it will be more like select some units, then right-click a target (a point on the map or an object).",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121026-122852",
		version: 1.1,
		notes: "UserPatch 20121026-122852 has been released! This update resolves 495: #UserPatch [Core Bug] Excessive lag occurs when combining AI attack groups with up-gather-inside. Thanks to ER for the great save file and Archon for testing!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20121025-131252",
		version: 1.1,
		notes: "UserPatch 20121025-131252 has been released! This update resolves 494: #UserPatch [Request] A button should be added to randomize settings on the game setup screen. When the new \"Random\" button is clicked at the top-right of the game setup screen, all settings on the right side will be randomized except: Difficulty, Other Players, Game Speed, Record Game, and Enable Cheats. Scenarios and custom maps are excluded from location randomization, as well. The \"Score\" victory condition has a minimum of 8000 to avoid epic fail 5 second games on DeathMatch and other strange situations.</p><p>Thanks to fen for the idea and everyone on the other thread for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121017-074514",
		version: 1.1,
		notes: "UserPatch 20121017-074514 has been released! This update resolves 493: #UserPatch [Core Bug] Object selection data may be lost if the host transfers to a client during restore. Thanks to ryshep, xhip, and grok for the recs and feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121016-173528",
		version: 1.1,
		notes: "UserPatch 20121016-173528 has been released! This update resolves 492: #UserPatch [Core Bug] The up-change-name action fails to consider coop player slot spacing. Thanks to kunyi for the report!",
		itemsAffected: [cUpChangeName],
		scriptingType: "ai"
	}, {
		number: "20121014-183727",
		version: 1.1,
		notes: "UserPatch 20121014-183727 has been released! This update resolves 491: #UserPatch [Core Bug] Mini-map color offsets were improperly shifted by recent optimizations. This affected the p2 red. Thanks to LightTree for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121014-165454",
		version: 1.1,
		notes: "UserPatch 20121014-165454 has been released! This update resolves 490: #UserPatch [Core Bug] AI transport ships fail to move before retrying when they are too far to unload. Thanks to ER for the rec and report! For the gaia object conversion, AIs can now convert them unless the game type is scenario or campaign.",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20121014-144037",
		version: 1.1,
		notes: "UserPatch 20121014-144037 has been released! This update resolves 489: #UserPatch [Core Bug] The text for Team Random must consider the xml manifest langId offset for Random. Thanks to Cysion for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121013-220058",
		version: 1.1,
		notes: "UserPatch 20121013-220058 has been released! This update resolves 488: #UserPatch [Core Bug] The attack ground command handler fails to consider target tile elevation. It's incredible that this went unreported for 13 years lol. It's fervor #2! Thanks to Cysion and sh for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121012-122826",
		version: 1.1,
		notes: "UserPatch 20121012-122826 has been released! This update resolves 487: #UserPatch [Request] The mini-map color for P7 must be more distinct from the black unexplored area. This changes the color of P7 to a slightly brighter shade of grey than black. In some situations, the pure black would make it difficult to distinguish between the black area that exists due to missed scouting and P7 forward buildings, etc. lol. Thanks to LightTree for testing!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121009-172308",
		version: 1.1,
		notes: "UserPatch 20121009-172308 has been released! This update resolves 486: #UserPatch [AI Behavior] Warships should finalize their targets based on the maximum range of the group. Warship target selection is still handled by sn-warship-targeting-mode. This simply ensures that the selected target is actually attacked lol. Thanks to LightTree for the report!</p><p>How the attack group (and attack-now lol) system selects targets:</p><p><ol><li>group requests targeting</li><li>get group characteristics:<br>- is this a water group?<br>- is there a unit in the group that targets only buildings? (sn-free-siege-targeting is checked here)<br>- other stuff lol</li><li>if this is a warship group, the effective range of the group is calculated based on sn-warship-targeting-mode</li><li>loop through all available targets on the map for this group</li><li>fill a list with all acceptable targets</li><li>sort the list by offensive priorities/special-attack-type</li><li>FINAL CHECK, where it used the shortest range unit to determine if a target in the list is reachable/acceptable<br>- now changed to longest range for warship groups<br>- land groups are still checked based on shortest range</li><li>send group to attack the final target</li></ol>",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20121009-095409",
		version: 1.1,
		notes: "UserPatch 20121009-095409 has been released! This update resolves 485: #UserPatch [AI Scripting] The new sn-free-trebuchet-targeting must be generalized to include cannon galleons. This renames sn-free-trebuchet-targeting to sn-free-siege-targeting. Add bit flags together to generate a value: 1 = trebuchet; 2 = cannon-galleon. Set a flag for a unit to enable free offensive targeting with attack-now or attack groups. This may result in the targeting of units other than buildings. If set to 0, non-buildings will be ignored unless units must respond due to sn-enemy-sighted-response-distance. This change was necessary because cannon galleons only targeted buildings in 1.1. This change will allow 1.0c style targeting of cannon galleons (and ship groups with cannon galleons) against units. Thanks to LightTree for the report!",
		itemsAffected: [snFreeSiegeTargeting],
		scriptingType: "ai"
	}, {
		number: "20121008-095115",
		version: 1.1,
		notes: "UserPatch 20121008-095115 has been released! This update resolves 484: #UserPatch [AI Behavior] AIs must be able to control whether warships target buildings that outrange them. This fix is related to <a href=\"http://forums.aiscripters.com/viewtopic.php?p=44293#p44293\">this post</a> from a while ago. Now, AIs can avoid suiciding their ships with sn-warship-targeting-mode. Set to 1 to cause warships to target based on the unit with the shortest range in the group against fortifications. Set to 2 to eliminate the range check. If set to 0, warship groups will target based on the unit with the longest range. Thanks to LightTree for reminding me lol.",
		itemsAffected: [snWarshipTargetingMode],
		scriptingType: "ai"
	}, {
		number: "20121006-112652",
		version: 1.1,
		notes: "UserPatch 20121006-112652 has been released! This update resolves 483: #UserPatch [Core Bug] The scenario trigger overflow fix improperly counts processed objects as matches. It's the reason that mp scenario was performing improperly. Thanks to offwo for the great report, and sh and LightTree for testing!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121004-034020",
		version: 1.1,
		notes: "UserPatch 20121004-034020 has been released! This update resolves 480: #UserPatch [Core Bug] Pressing F6 to switch music tracks with no playlist will crash the game, 481: #UserPatch [Maps & RMS] The mini-map color for player 7 should be changed to black for better visibility, and 482: #UserPatch [Core Bug] The dead gaia doppleganger mini-map color is improperly linked to player 7. Thanks to LightTree for the report, along with feedback from SH, Offwo, Cysion, and others from the chat!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20121001-043426",
		version: 1.1,
		notes: "UserPatch 20121001-043426 has been released! This update resolves 479: #UserPatch [Core Bug] AIs have lost the ability to offensively target non-building units with trebuchets. To resolve this, sn-free-trebuchet-targeting has been added to restore 1.0c behavior. Set to 1 to enable free offensive trebuchet targeting with attack-now or attack groups. This may result in trebuchets targeting units other than buildings. If set to 0, offensive trebuchets will ignore non-buildings unless they must respond due to sn-enemy-sighted-response-distance. Thanks to LightTree for the report!",
		itemsAffected: [snFreeTrebuchetTargeting],
		scriptingType: "ai"
	}, {
		number: "20120929-142345",
		version: 1.1,
		notes: "UserPatch 20120929-142345 has been released! This update resolves 478: #UserPatch [Core Bug] AIs are unable to place docks on shallow terrain even though humans can. Thanks to ERMS for the report!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20120927-210720",
		version: 1.1,
		notes: "UserPatch 20120927-210720 has been released! This update resolves 477: #UserPatch [Core Bug] AI dock placement has been restricted improperly for certain beach alignments. Just some fixes for when the beach is like a straight line.",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20120927-011410",
		version: 1.1,
		notes: "UserPatch 20120927-011410 has been released! This update resolves 476: #UserPatch [Core Bug] Dock placement improperly uses the terrain restrictions of an obsolete blacksmith. yES lol. I hope it fixes the dock placement issue, where they are placed in small lakes without regard for sn-minimum-water-body-size-for-dock. Thanks to Duck for the report!",
		itemsAffected: [snMinimumWaterBodySizeForDock],
		scriptingType: "ai"
	}, {
		number: "20120927-000620",
		version: 1.1,
		notes: "UserPatch 20120927-000620 has been released! This update resolves 475: #UserPatch [Core Bug] The healing search radius for monastery units was improperly hard-coded. This affected the Teutons, primarily. Thanks to Cysion for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120925-154129",
		version: 1.1,
		notes: "UserPatch 20120925-154129 has been released! This update resolves 474: #UserPatch [AI Behavior] Docks should not be placed by AIs in such a way that waterways are obstructed. The dock placement system will now require exclusively one set of 8 contiguous water tiles around a dock at minimum in order to place. 2+ sets are rejected. This should avoid the 1-tile pond placements, placements against the map border, and placements that would obstruct the free movement of ships in a narrow path. Thanks to Duck and Archon for the reports, along with Finaldeath and ER for feedback!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20120921-225118",
		version: 1.1,
		notes: "UserPatch 20120921-225118 has been released! This update resolves 473: #UserPatch [Core Bug] Base elevation data may not be properly initialized for rms land objects.",
		itemsAffected: [],
		scriptingType: "rms"
	}, {
		number: "20120921-105758",
		version: 1.1,
		notes: "UserPatch 20120921-105758 has been released! This update resolves 472: #UserPatch [AI Scripting] AIs must be able to avoid training fishing ships in seas without deep sea fish. When sn-dock-training-filter is not 0, fishing ships will only be trained from docks that are able to reach, and are closest to, deep sea fish. This means that if you have 4 docks in an ocean with deep sea fish, side by side, the two outside docks are likely to be set aside to train fishing ships, while the center docks will be free to create warships without interruption. If you aren't training fishing ships, the two outside docks will also be able to train warships, of course. That's it for the dock placement task, I think lol.",
		itemsAffected: [snDockTrainingFilter],
		scriptingType: "ai"
	}, {
		number: "20120920-114714",
		version: 1.1,
		notes: "UserPatch 20120920-114714 has been released! This update resolves 471: #UserPatch [Core Bug] Ship grouping code may create an infinite allocation loop under certain circumstances. Epic 1.0c bug that, if left alone, consumes all ram and virtual memory until the game crashes. Thanks to Archon for the report and details!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120915-201052",
		version: 1.1,
		notes: "UserPatch 20120915-201052 has been released! This update resolves absolutely nothing lol. Actually, I just updated the guide (renamed to Readme.html) and rearranged the folders and files in the rar. I hope more people see the guide now. Thanks to cake for providing ideas and feedback for the new archive layout and other stuff!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120915-125314",
		version: 1.1,
		notes: "UserPatch 20120915-125314 has been released! This update resolves 470: #UserPatch [AI Behavior] Docks should be separated by at least 3 tiles to better ensure accessibility by ships. The previous 2 tile separation could still lead to blocks. Thanks to LightTree for feedback and noticing the issue with diagonally placed docks.",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20120913-165721",
		version: 1.1,
		notes: "UserPatch 20120913-165721 has been released! This update resolves 469: #UserPatch [AI Scripting] A new fact is required for AIs to determine if a unit's training site is ready. With up-train-site-ready, you can check if a unit's training site is ready and available without any checks for cost or unit availability. It can be used to determine whether or not you need a new building. Here is an example of using it to get the best possible state for sn-dock-training-filter. Do not use unit lines or unit classes with this command. Please use the root unit type instead.",
		itemsAffected: [cUpTrainSiteReady],
		scriptingType: "ai"
	}, {
		number: "20120913-042204",
		version: 1.1,
		notes: "UserPatch 20120913-042204 has been released! This update resolves 468: #UserPatch [AI Behavior] AIs must be able to avoid training trade cogs and warships in seas without targets. The sn-dock-training-filter is now active for trade cogs and warships. Set to 1 or 2 to enable the intelligent dock training filter. This will prevent docks from training ships that would likely be useless in their body of water. If set to 1, docks will continue to train in seas that no longer contain recently sighted targets, while 2 will block training. If set to 0, docks will train units without additional consideration. This sn affects the result of both can-train, train, and the up- variations.",
		itemsAffected: [snDockTrainingFilter],
		scriptingType: "ai"
	}, {
		number: "20120911-103912",
		version: 1.1,
		notes: "UserPatch 20120911-103912 has been released! This update resolves 466: #UserPatch [AI Behavior] Active explorers should not be retreated together with other military units. If you need to retreat your scouts, you can reset them first. Thanks to Finaldeath for the report!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20120910-172913",
		version: 1.1,
		notes: "UserPatch 20120910-172913 has been released! This update resolves 465: #UserPatch [Maps & RMS] A new parameter is required to specify base elevation for rms land generation. With the new base_elevation parameter, you can specify the base elevation for any land or player land in an rm script. Note that the <ELEVATION_GENERATION> section must exist if this is used. The reference has all the details. Thanks to The_Prophet for the idea!",
		itemsAffected: [],
		scriptingType: "rms"
	}, {
		number: "20120909-152914",
		version: 1.1,
		notes: "UserPatch 20120909-152914 has been released! This update resolves 464: #UserPatch [AI Scripting] New sns are required for AIs to better control the placement of docks. There are 4 new sns: sn-dock-placement-mode, sn-dock-proximity-factor, sn-dock-avoidance-factor, and sn-dock-training-filter. Technically, this completes the dock placement task, but I'm going to try and see if we can get more intelligent training of ships, so trade cogs aren't trained in seas without allied docks, warships aren't trained in a pond with no enemy ships, etc. That last sn, sn-dock-training-filter, will be used to enable this, however, it is not yet active. Please see the reference for more detail and the valid range for each sn.",
		itemsAffected: [snDockPlacementMode, snDockProximityFactor, snDockAvoidanceFactor, snDockTrainingFilter],
		scriptingType: "ai"
	}, {
		number: "20120908-090743",
		version: 1.1,
		notes: "UserPatch 20120908-090743 has been released! This update resolves 463: #UserPatch [Core Bug] The DirectShow finalization code incorrectly assumes a valid state and may crash. Thanks to offwo for the report! There is an updated guide, as well, describing the version/feature sync fix in the Help/FAQ section.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120907-131938",
		version: 1.1,
		notes: "UserPatch 20120907-131938 has been released! This update resolves 462: #UserPatch [Core Bug] The host is not notified if a player does not have the same build and sync features. Now, it should be unlikely that people would be able to play each other with different builds of 1.1 without knowing, leading to an oos.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120906-123706",
		version: 1.1,
		notes: "UserPatch 20120906-123706 has been released! This update resolves 461: #UserPatch [Core Bug] Recording playback may break when the game fails to write the header length to the file. Another long time issue ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120905-125020",
		version: 1.1,
		notes: "UserPatch 20120905-125020 has been released! This update resolves 460: #UserPatch [Core Bug] Numpad hotkeys for tasks including unit group setup fail to operate. Thanks to Aga for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120905-100612",
		version: 1.1,
		notes: "UserPatch 20120905-100612 has been released! This update resolves 459: #UserPatch [AI Scripting] AIs must be able to retreat units near threatened units on demand. Now, sn-filter-under-attack takes 3 values from 0-2. Set to 1 or 2 to filter retreat commands to only those units that are under attack. When this is 2, units near threatened units (within 6 tiles) will also be retreated, which may be computationally expensive. The nearby units that will be retreated do not consider the filter type provided to up-retreat-to, and will be all military units except monks. Finally, the 1 and 2 states will now reject high base pierce armor units >= 20, so rams are left despite being attacked. If set to 0, the filter is disabled.</p><p>Thanks to Archon for the idea! Consider this a part of the direct unit control fix and a fix to the previous fix.",
		itemsAffected: [snFilterUnderAttack],
		scriptingType: "ai"
	}, {
		number: "20120905-060910",
		version: 1.1,
		notes: "UserPatch 20120905-060910 has been released! This update resolves 458: #UserPatch [Core Bug] Saving a png format screenshot in fullscreen mode may cause color distortion. It also includes performance enhancements for get/set strategic numbers. Still working on finalizing the dock placement fix. Sorry about the delay.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120903-113553",
		version: 1.1,
		notes: "UserPatch 20120903-113553 has been released! This update resolves 457: #UserPatch [Core Bug] Unit upgrades are incorrectly counted as the base type by the AI sighted units system. This bug affects 1.0c and was carried over into the sighted units fix in 1.1. It causes players-unit-type-count to become unable to determine the current upgrade state of sighted units. You should generally still count with the -line as before, however, you can now check for elite-huskarl, for example, to see if any enemy castle or barracks huskarls are now elite. Thanks to robink for the report!",
		itemsAffected: [cPlayersUnitTypeCount],
		scriptingType: "ai"
	}, {
		number: "20120903-031113",
		version: 1.1,
		notes: "UserPatch 20120903-031113 has been released! This update resolves 456: #UserPatch [Core Bug] Moving the music volume slider to the bottom fails to actually mute the music. There are also various optimizations included, such as the elimination of unnecessary instructions in wndproc (gets called 398457345 times a second) and alignment/pairing adjustments for the sound, music, keyboard, and window management code. Thanks to Lazarus for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120902-132121",
		version: 1.1,
		notes: "UserPatch 20120902-132121 has been released! This update resolves 455: #UserPatch [Core Bug] The sound volume slider spans across inaudible volume levels for half of its range. Noticed this on the AoFE streams, but forgot to fix it lol.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120831-145824",
		version: 1.1,
		notes: "UserPatch 20120831-145824 has been released! This update resolves 454: #UserPatch [AI Behavior] AIs should consider the enemy sighted response sns for distant attack notifications. Just another performance optimization.",
		itemsAffected: [snEnemySightedResponseDistance, snPercentEnemySightedResponse],
		scriptingType: "ai"
	}, {
		number: "20120831-034416",
		version: 1.1,
		notes: "UserPatch 20120831-034416 has been released! This update resolves 453: #UserPatch [AI Behavior] Safe town size must be considered by the enemy sighted response code. Now, inside sn-safe-town-size + inside sn-maximum-town-size, all military units will attempt to assist when under attack. Outside sn-safe-town-size (1.1 TSA attack or even groups), sn-enemy-sighted-response-distance controls the distance for assistance as usual.",
		itemsAffected: [snSafeTownSize, snMaximumTownSize, snEnemySightedResponseDistance],
		scriptingType: "ai"
	}, {
		number: "20120830-175016",
		version: 1.1,
		notes: "UserPatch 20120830-175016 has been released! This update resolves 452: #UserPatch [Core Bug] The human sighted unit code for AIs modifies object data which may cause sync failures. Hopefully, this fixes the oos issue.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120830-052432",
		version: 1.1,
		notes: "UserPatch 20120830-052432 has been released! This update resolves 451: #UserPatch [Core Bug] Introduction videos should play unless the NOSTARTUP parameter is specified. It should not disable aero glass (dwm) now, I hope.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120830-030533",
		version: 1.1,
		notes: "UserPatch 20120830-030533 has been released! This update resolves 450: #UserPatch [Core Bug] Players may be hidden on vote panels if a member of their coop has resigned. Thanks to Cysion and Alevo for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120829-205948",
		version: 1.1,
		notes: "UserPatch 20120829-205948 has been released! This update resolves 449: #UserPatch [AI Behavior] AIs should not overreact to villager threat notifications with excessive military assistance. More improvements to reduce lag.",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20120829-165325",
		version: 1.1,
		notes: "UserPatch 20120829-165325 has been released! This update resolves 448: #UserPatch [Core Bug] Human trade carts and trade cogs idle indefinitely after returning with their gold. Thanks to AntonSynytsia and erli4000 for the reports! It's possible that this trade issue was responsible for the out-of-sync issues, as well.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120828-195614",
		version: 1.1,
		notes: "UserPatch 20120828-195614 has been released! This update resolves 447: #UserPatch [Core Bug] The retreat and guard commands for AIs must not lock the cpu during execution. Just another performance adjustment.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120828-192455",
		version: 1.1,
		notes: "UserPatch 20120828-192455 has been released! This update resolves 446: #UserPatch [Core Bug] Several functions rely on inefficient multiply instructions and must be optimized. Same as before, but with multiply instead of divide.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120828-172805",
		version: 1.1,
		notes: "UserPatch 20120828-172805 has been released! This update resolves 445: #UserPatch [Core Bug] Several functions rely on inefficient divide instructions and must be optimized. Just some changes to meaningless opcodes lol. It may save hundreds of instructions in the human sighted unit code and elsewhere.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120826-201608",
		version: 1.1,
		notes: "UserPatch 20120826-201608 has been released! This update resolves 444: #UserPatch [Core Bug] Human boar lurers may become unable to move while retreating to the town center. Someone reported this a long time ago lol.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120826-175111",
		version: 1.1,
		notes: "UserPatch 20120826-175111 has been released! This update resolves 443: #UserPatch [Core Bug] Sighted unit notifications from human allies to AIs cause out-of-sync errors. I was able to resume erli's multiplayer game between two windows and watch it to the end. Thanks to erli for the recs and report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120826-145237",
		version: 1.1,
		notes: "UserPatch 20120826-145237 has been released! This update resolves 442: #UserPatch [AI Behavior] The enemy sighted response code requires optimization to avoid excessive commands. The game seems to perform a lot smoother now.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120825-213212",
		version: 1.1,
		notes: "UserPatch 20120825-213212 has been released! This update resolves 440: #UserPatch [Core Bug] A monk carrying a relic causes a flood of multiplayer packets until the relic is dropped, and 441: #UserPatch [Core Bug] Unit order lists are improperly parsed, which requires many commands to be resent. The second one is an epic bug.</p><p>The fact that all units are now being processed as intended may have some interesting results. It seems that the enemy-sighted-response stuff now gets ALL of the responders lol. I'll need to make some adjustments for that.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120824-154146",
		version: 1.1,
		notes: "UserPatch 20120824-154146 has been released! This update resolves 439: #UserPatch [Core Bug] The retreat and garrison commands for AIs may crash the game when unsynchronized. It also includes optimizations that may eliminate hundreds of instructions for AIs per script pass. Thanks to erli4000 for the great report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120823-203421",
		version: 1.1,
		notes: "UserPatch 20120823-203421 has been released! This update resolves 436: #UserPatch [AI Behavior] AIs should always retarget against walls if they are the only reachable target. Just a minor adjustment to ensure that they don't try to seek higher priority, yet unreachable, targets inside a wall.",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20120823-150850",
		version: 1.1,
		notes: "UserPatch 20120823-150850 has been released! This update resolves 377: #UserPatch [Core Bug] Multiplayer games may fail due to dropped packets under certain conditions. As offwo recommended, reliable network system #2 is now the default network system. Under the restricted features list, you can still find protocol #1, #2, reliable #1, and the \"original\" (fixed ES) network system. I've updated the guide with information about each of those. In addition, for those without v1.0c, the installer will now offer to send them to archive.org, which has active links to all available patches!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120823-074436",
		version: 1.1,
		notes: "UserPatch 20120823-074436 has been released! This update resolves 438: #UserPatch [Core Bug] Players cannot select custom maps on King of the Hill, Wonder Race, and Defend the Wonder. Thanks to offwo for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120822-215750",
		version: 1.1,
		notes: "UserPatch 20120822-215750 has been released! This update resolves 437: #UserPatch [Core Bug] Defend the Wonder mode may lead to out-of-sync errors in multiplayer games. Thanks to ryshep and offwo for the tests, recs, and reports!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120822-140732",
		version: 1.1,
		notes: "UserPatch 20120822-140732 has been released! This update resolves 434: #UserPatch [AI Scripting] New sns are required for AIs to perform more precise garrison operations, and 435: #UserPatch [AI Scripting] New sns are required for AIs to more precisely control when units defend and retreat. There are 4 new sns: sn-maximum-garrison-fill, sn-number-garrison-units, sn-filter-under-attack, and sn-disable-defend-groups. The first two should make the new up-garrison command more useful, and the other two will provide more control for when the direct unit targeting commands are introduced soon.</p><p>Set sn-maximum-garrison-fill to the number of units to fill into each garrison target per command. If set to 0, this limit is removed. Set sn-number-garrison-units to the number of units that will garrison per command. If set to 0, it will default to the maximum of 40. Set sn-filter-under-attack to 1 to filter retreat commands to only those units that are under attack. If set to 0, the filter is disabled. Set sn-disable-defend-groups to 1 to disable the entire defensive targeting system. If set to 0, units will respond to threats in town as usual.</p><p>The last sn may improve performance when it's enabled, since no TSA targeting or checks will be done. This does not disable the local unit targeting stuff, so you don't have to worry about nearby attackers.",
		itemsAffected: [snMaximumGarrisonFill, snNumberGarrisonUnits, snFilterUnderAttack, snDisableDefendGroups],
		scriptingType: "ai"
	}, {
		number: "20120822-064654",
		version: 1.1,
		notes: "UserPatch 20120822-064654 has been released! This update resolves 433: #UserPatch [AI Scripting] A dynamic symbol is required for AIs to determine which game expansion is active. A #load symbol will be created based on the \"game\" name set in the xml manifest. The \"game\" name for the Conquerors Expansion is \"age2_x1\", which is translated to the symbol UP-GAME-AGE2-X1. Note that it is transformed into uppercase and the _ is replaced by -. If the Forgotten Empires expansion uses the name \"aofe\" or \"age2_x2\", then it will either be UP-GAME-AOFE or UP-GAME-AGE2-X2.",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20120821-083914",
		version: 1.1,
		notes: "UserPatch 20120821-083914 has been released! This update resolves 432: #UserPatch [Core Bug] The sighted object table generator fails if an expansion overflows the 900 object limit. Age of Chivalry has more than 900 objects, so the game would crash when the sighted unit table was being generated, as it overflowed into the class counters. This fix simply blocks objects out of range from being counted.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120821-055216",
		version: 1.1,
		notes: "UserPatch 20120821-055216 has been released! This update resolves 431: #UserPatch [Core Bug] Allied AIs are not informed when a human discovers enemy units and buildings. Now, if a human finds an enemy unit or building, it will be reported to all allied AIs. There is a cost to this operation, so human units will report their findings intermittently (about every 5 game seconds) instead of in real-time. Resources are not reported to avoid excessive overhead. The AI scout can usually find the resources it needs in the immediate area without much trouble.</p><p>In addition, several changes have been made to the previous sighted unit table fix for stability, as well. All human buildings (except walls) are now reported to allied AIs upon completion, instead of just the market and dock.",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20120820-114851",
		version: 1.1,
		notes: "UserPatch 20120820-114851 has been released! This update resolves 430: #UserPatch [AI Scripting] New actions are required for AIs to manually execute garrison commands. With up-garrison and up-ungarrison, you can now garrison buildings and rams on demand. Please do not flood these commands, as with all commands that manipulate units, there is a bit of overhead. The reference has other important information. It's important to note that units are selected without regard for distance between the objects in order to avoid excessive calculations. This would obviously be an issue on transport maps.</p><p>In addition to these changes, up-gather-inside now accepts 3 states: 0 (do not hold any units inside), 1 (hold trained and garrisoned units inside), and the new state, -1 (hold only garrisoned units inside, but release trained units). This command is required in order to keep units garrisoned in buildings. Rams, however, do not need this.",
		itemsAffected: [cUpGarrison, cUpUngarrison, cUpGatherInside],
		scriptingType: "ai"
	}, {
		number: "20120814-220845",
		version: 1.1,
		notes: "UserPatch 20120814-220845 has been released! This update resolves 429: #UserPatch [AI Scripting] AIs must be able to delete idle economic units including villagers and fishing ships, and 70: #UserPatch [AI Scripting] Idle units cannot be detected and retasked. With up-delete-idle-units, you can now easily delete all idle economic units from the following types: villager, fishing-ship, trade-cart, and trade-cog. This command should not be flooded for obvious reasons, so please take care and use it only when necessary (no allies left for trade, post-imperial, wood screwed, etc.). For item #70, the primary causes of permanent villager idling, such as builder obstruction, etc., should be fixed now.",
		itemsAffected: [cUpDeleteIdleUnits],
		scriptingType: "ai"
	}, {
		number: "20120814-175252",
		version: 1.1,
		notes: "UserPatch 20120814-175252 has been released! This update resolves 428: #UserPatch [Core Bug] The expansion manifest loader fails to link unique techs under certain conditions. This is a 1.0c bug that was made visible by the xml manifest fix. Thanks to Cysion for the report! Sorry about the mistakES ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120810-082856",
		version: 1.1,
		notes: "UserPatch 20120810-082856 has been released! This update resolves 427: #UserPatch [Core Bug] The sighted unit type conversion code for AIs fails when provided invalid data. Thanks to II2N for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120807-155936",
		version: 1.1,
		notes: "UserPatch 20120807-155936 has been released! This update resolves 426: #UserPatch [Core Bug] Various units, including barracks huskarls, are uncounted by the AI sighted units system, and 69: #UserPatch [AI Scripting] Gaia units cannot be counted with players-unit-type-count. With up-gaia-type-count and up-gaia-type-count-total, you can check the number of sighted gaia resources (not wolves, etc.).</p><p>The up-gaia-type-count command may be relatively slow, since it must check the status of all discovered resources within the requested subset (food, wood, stone, or gold). On the other hand, up-gaia-type-count-total is very fast when checking food, wood, stone, or gold. However, the required data does not exist for specific food types, including deer and sheep. As a fallback, up-gaia-type-count-total will redirect to the slower up-gaia-type-count, and the result will only reflect resources that still exist. You can't do a specific \"all sheep ever seen\" count with this, but you can for the general resource categories: food, wood, stone, or gold.</p><p>This version should also enable new enemy object types in expansions like AoFE to be counted by AIs.",
		itemsAffected: [cUpGaiaTypeCount, cUpGaiaTypeCountTotal],
		scriptingType: "ai"
	}, {
		number: "20120802-193356",
		version: 1.1,
		notes: "UserPatch 20120802-193356 has been released! This update resolves 425: #UserPatch [Core Bug] Random teams are improperly distributed with auto-ordered player numbers. Thanks to Cysion, ryshep, and offwo for the reports!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120801-020703",
		version: 1.1,
		notes: "UserPatch 20120801-020703 has been released! This update resolves 424: #UserPatch [AI Scripting] New symbols are required for AIs to determine pocket, flank, and map positioning. You can now use the #load symbols: UP-POCKET-POSITION and TEAM-TOGETHER, which should have existed from 1.0c lol. If TEAM-TOGETHER is enabled, the UP-POCKET-POSITION symbol will be set for all players in the pocket. If this symbol is not defined, the player is either flank or is just not in a team that can support a pocket. I think this should work for all map layouts, but please test it.",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20120731-214023",
		version: 1.1,
		notes: "UserPatch 20120731-214023 has been released! This update resolves 423: #UserPatch [AI Scripting] AIs must be able to send a scout to explore the nearest border of the map on demand. The scout-border parameter has been added for up-send-scout. This parameter will send the scout to the nearest border relative to the home town center. In addition, the multiplayer anti-cheat system has been reversed to on by default, with a restricted feature to disable it.",
		itemsAffected: [cUpSendScout, pPositionType],
		scriptingType: "ai"
	}, {
		number: "20120730-184929",
		version: 1.1,
		notes: "UserPatch 20120730-184929 has been released! This update restores the anti-cheat system once again, and it should be stable. However, this time, it is optional and listed under the restricted features list (press F5 on the installer).",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120730-174000",
		version: 1.1,
		notes: "UserPatch 20120730-174000 has been released! This update removes the anti-cheat again for additional review. If only there was like a test lab with 50 computers running tests, all of these issues could have been resolved in a day lol.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120730-165634",
		version: 1.1,
		notes: "UserPatch 20120730-165634 has been released! This update resolves 422: #UserPatch [AI Scripting] AIs must be able to send a scout to explore the target player's town on demand. The scout-enemy parameter is now active for up-send-scout. This parameter will send the scout back to the target enemy's nearest building +/- 8 tiles in any direction at random, in order to better explore the target's town. If your ally finds the enemy town, you can target it for attacks, but not for forward building, since placement rejects the black area. With scout-enemy, you can discover the terrain near the building found by your ally.</p><p>This is not a cheat parameter, so you can only use it after you or an ally has actually located the target enemy.",
		itemsAffected: [cUpSendScout, pPositionType],
		scriptingType: "ai"
	}, {
		number: "20120730-015030",
		version: 1.1,
		notes: "UserPatch 20120730-015030 has been released! This update resolves 384: #UserPatch [AI Scripting] AIs must be able to direct scouts to find the enemy and other locations on demand. With up-send-scout, you can send either a land or water scout to a specific location on the map: scout-center, scout-opposite, scout-corner, scout-enemy. The scout-enemy parameter has no effect for now. The scout-opposite parameter is useful to move the scout away from the town, sending it to the mirror position of the home town center, relative to the center. This command will definitely be updated lol.",
		itemsAffected: [cUpSendScout, pPositionType],
		scriptingType: "ai"
	}, {
		number: "20120729-155445",
		version: 1.1,
		notes: "UserPatch 20120729-155445 has been released! This update restores the anti-cheat measures that were removed in the previous release. Might need to do more fixes later. I'm having trouble getting detailed reports. Running multiplayer game tests with 4 windows, running out of video memory, and watching all of them crash... good times lol.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120729-131129",
		version: 1.1,
		notes: "UserPatch 20120729-131129 has been released! This update removes some of the anti-cheat measures pending review. Apparently, there are some issues depending on how people resign.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120728-124800",
		version: 1.1,
		notes: "UserPatch 20120728-124800 has been released! This update resolves 421: #UserPatch [Core Bug] The boar luring support code for AIs fails to synchronize activity in multiplayer games. This would result in a crash on all clients if a lurer had to garrison into the town center. Thanks to ryshep and steven for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120728-083824",
		version: 1.1,
		notes: "UserPatch 20120728-083824 has been released! This update resolves 420: #UserPatch [Core Bug] Boar lurers for AIs may abandon the hunt after a garrison event under certain conditions. Now the lure should be more reliable, I hope.",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20120726-184641",
		version: 1.1,
		notes: "UserPatch 20120726-184641 has been released! This update resolves 419: #UserPatch [Core Bug] The command processor fails to translate player information under certain conditions. This was causing issues during coop games, where players were improperly handled by the anti-cheat code. Thanks again to Cysion and the AoFE team!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120726-171341",
		version: 1.1,
		notes: "UserPatch 20120726-171341 has been released! This update resolves 418: #UserPatch [Core Bug] Multiplayer games fail to start if all players are on the auto-order - player color. Thanks to Cysion and the AoFE testers for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120726-162436",
		version: 1.1,
		notes: "UserPatch 20120726-162436 has been released! This update resolves 417: #UserPatch [Core Bug] Executing certain commands during multiplayer lag may crash the game. Apparently, this one is being used to break games recently. Thanks to MuRRay (you know what this is lol), and Cysion for the reports!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120726-130308",
		version: 1.1,
		notes: "UserPatch 20120726-130308 has been released! This update resolves 416: #UserPatch [Core Bug] Dropsite distance for AIs becomes unreliable for concurrent hunting after a boar is down. To avoid breaking existing AIs, a new defconst named \"live-boar\" is available for dropsite-min-distance, so that AIs can actually determine how far the next boar is before the first boar is complete. The \"boar-hunting\" value remains unchanged and will reflect the nearest boar distance, regardless of whether it is active or down. Dropsite distance code has also been optimized and aligned.</p><p>Sorry about the additional boar stuff lol. Thanks to Archon, Finaldeath, ER, and II2N for feedback! LightTree, without your work, this would be well on the way to 2197 lol. Thank you!",
		itemsAffected: [cDropsiteMinDistance],
		scriptingType: "ai"
	}, {
		number: "20120725-182039",
		version: 1.1,
		notes: "UserPatch 20120725-182039 has been released! This update resolves 413: #UserPatch [AI Scripting] A new action is required for AIs to request hunters to support an active boar lure, 414: #UserPatch [AI Behavior] Boar lurers should request support before garrisoning into the town center, and 415: #UserPatch [Core Bug] Boar lurers for AIs fail to retreat to the town center under certain conditions. With up-request-hunters, you can attempt to request support hunters for the active boar lure at any time. This action is equivalent to what happens when a boar strikes a lurer and sn-minimum-boar-hunt-group-size is set to a total. Note that, depending on the state of your villagers, this command is not always guaranteed to reach the total specified. Thanks to Archon for the reports!",
		itemsAffected: [cUpRequestHunters],
		scriptingType: "ai"
	}, {
		number: "20120722-060800",
		version: 1.1,
		notes: "UserPatch 20120722-060800 has been released! This update resolves 412: #UserPatch [Core Bug] The idle farm bug fix contains code that may result in unintended behavior. Let's just say that farms were lol.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120720-011531",
		version: 1.1,
		notes: "UserPatch 20120720-011531 has been released! This update resolves 411: #UserPatch [AI Behavior] Gatherers should retask if their target resource is unreachable due to other units. Villagers shouldn't try to retry 93843 times to get to a resource blocked by other villagers anymore. In addition, the issue where deer hunters wouldn't transition when they would arrive to gather from one that was already gone has also been fixed, I think lol.</p><p>Thanks to Archon and Finaldeath for the reports!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20120718-040218",
		version: 1.1,
		notes: "UserPatch 20120718-040218 has been released! This update resolves 410: #UserPatch [Core Bug] Farmers may idle indefinitely if their farms are targeted by an enemy player. Epic fail bug for humans and AIs in 1.0c and 1.1. If you've ever seen your farmer just stop working on a farm, this probably fixes it. Thanks to Cysion for the report!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20120716-032105",
		version: 1.1,
		notes: "UserPatch 20120716-032105 has been released! This update resolves 409: #UserPatch [AI Scripting] A new sn is required for AIs to control the dropsite-min-distance update event. Set sn-defer-dropsite-update to 1 to defer the dropsite-min-distance update until construction is complete. If set to 0, the dropsite update occurs when the building is placed on the map. Thanks to II2N and Duck for feedback!",
		itemsAffected: [snDeferDropsiteUpdate],
		scriptingType: "ai"
	}, {
		number: "20120715-184727",
		version: 1.1,
		notes: "UserPatch 20120715-184727 has been released! This update resolves 408: #UserPatch [AI Behavior] Dropsite distances should update after construction is complete to avoid dangerous areas. As long as AIs using simultaneous building construction check pending-objects to ensure only 1 camp/mill at a time, everything should work fine. The idea is to avoid 439857 lumberjacks, for example, from walking to a newly placed lumber camp foundation near a forest next to the enemy's town before the builder even gets there to notice that the area is unsafe. If the builder is able to safely finish constructing the dropsite, the odds of it being relatively safe are far higher. It also means that a castle probably won't be firing arrows on all of the lumberjacks as they walk to the new camp, since the builder got there without interruption.</p><p>Please test and let me know what you think ",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20120711-140422",
		version: 1.1,
		notes: "UserPatch 20120711-140422 has been released! This update resolves 407: #UserPatch [Core Bug] The unit-count and building-count functions improperly handle certain objects. This was a core bug in both 1.0c and 1.1, that caused unit-count and building-count to omit female villagers and town centers (!). A performance optimization is included that should help both humans and AIs. Thanks to Finaldeath for the reminder; it was on MuRRay's list for so long lol.",
		itemsAffected: [cUnitCount, cBuildingCount],
		scriptingType: "ai"
	}, {
		number: "20120710-175002",
		version: 1.1,
		notes: "UserPatch 20120710-175002 has been released! This update resolves 405: #UserPatch [Core Bug] Memory is misallocated within the game expansion xml manifest parser, and 406: #UserPatch [Core Bug] Without custom AIs, the player name replaces Computer on the game setup screen. Thanks so much to fen and ryshep for trying 934857 patch updates until we could figure out the cause (#405). The other issue was an indirect bug that was caused by the player color fix.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120710-093209",
		version: 1.1,
		notes: "UserPatch 20120710-093209 has been released! This update makes an change to the installer for displaying restricted features. The hold Ctrl + start SetupAoC method has been replaced by simply pressing \"F5\" after the installer appears.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120710-053550",
		version: 1.1,
		notes: "UserPatch 20120710-053550 has been released! This update resolves 404: #UserPatch [Core Bug] The interface loader fails to respect the manifest settings in Enhanced 1.0c mode. Just a little fix for Enhanced 1.0c ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120709-121942",
		version: 1.1,
		notes: "UserPatch 20120709-121942 has been released! This update resolves 403: #UserPatch [Request] Game expansions must be able to define the offsets for loading civilization interfaces. This adds 3 additional parameters to the \"civilizations\" element in the expansion xml manifest. Most expansions that add civs should set the stride to 30 and the offset to 0, moving the interface sets to 51100, 51130, and 51160. Do not overwrite interface ids 51155, 51156. Thanks, Cysion!</p><p>1. uiBaseId, default: 51100<br>- the root id storing interfaces designed for 800x600<br>2. uiStride, default: 20<br>- the number of ids allocated for each interface set (800x600, 1024x768, 1280x1024)<br>- uiBaseId:51100 and uiStride:20 means the 800 set starts at 51100, 1024 at 51120, 1280 at 51140<br>3. uiOffset, default: 2<br>- the offset to skip interface ids 51155 and 51156 if necessary (avoid this offset if you add civs)",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120706-074650",
		version: 1.1,
		notes: "UserPatch 20120706-074650 has been released! This update resolves 402: #UserPatch [Core Bug] Players on the auto-order color setting should not be synchronized like a coop. Thanks to ryshep for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120705-005340",
		version: 1.1,
		notes: "UserPatch 20120705-005340 has been released! This update resolves 401: #UserPatch [AI Scripting] New facts are required for AIs to count the number of enemy objects in town. With up-building-type-in-town, up-unit-type-in-town, and up-villager-type-in-town, you can count the number of once sighted enemy objects inside sn-maximum-town-size, even if they are temporarily out of view. These operate using the same data as up-enemy-buildings-in-town, etc. Associated FactIds have been added for use with up-get-fact (please see UserPatchConst.per).</p><p>Please note that, unlike most counting commands that read from cached values, these commands loop through the targetable object lists and perform the counting operation each time you execute them. For this reason, if you plan to query the same data many times in a rule pass, it's better to read the data once with up-get-fact and then check the goal.",
		itemsAffected: [cUpBuildingTypeInTown, cUpUnitTypeInTown, cUpVillagerTypeInTown, pFactId],
		scriptingType: "ai"
	}, {
		number: "20120704-221934",
		version: 1.1,
		notes: "UserPatch 20120704-221934 has been released! This update resolves 400: #UserPatch [AI Scripting] A new action is required for AIs to dynamically change their name during gameplay. With up-change-name, you can modify the name of the AI at any time. Due to the multiplayer synchronization requirement, please note that, even in single-player mode, there is a delay of at least 1 game turn before the change takes effect. Thanks to Finaldeath for the idea!",
		itemsAffected: [cUpChangeName],
		scriptingType: "ai"
	}, {
		number: "20120704-093325",
		version: 1.1,
		notes: "UserPatch 20120704-093325 has been released! This update resolves 399: #UserPatch [AI Scripting] A new fact is required for AIs to determine the target of a projectile attack. With up-projectile-target, you can perform comparisons on the class id of the latest target of a type of enemy projectile. Thanks to Archon for the idea!",
		itemsAffected: [cUpProjectileTarget],
		scriptingType: "ai"
	}, {
		number: "20120704-013102",
		version: 1.1,
		notes: "UserPatch 20120704-013102 has been released! This update resolves 398: #UserPatch [AI Behavior] AIs should gather non-converted sheep and turkeys at the town center. Thanks to Cysion for the report!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20120703-235351",
		version: 1.1,
		notes: "UserPatch 20120703-235351 has been released! This update resolves 397: #UserPatch [AI Scripting] A new sn is required for AIs to place dropsites without a 1 tile buffer region. Set sn-allow-adjacent-dropsites to 1 to eliminate the standard requirement for a 1 tile buffer around mills, lumber camps, and mining camps. If set to 0, the 1 tile buffer is enforced as usual. I hope it works well, for the most part lol. Thanks to Archon and cake for the idea! #8 and 9 on the list?",
		itemsAffected: [snAllowAdjacentDropsites],
		scriptingType: "ai"
	}, {
		number: "20120703-204522",
		version: 1.1,
		notes: "UserPatch 20120703-204522 has been released! This update resolves 78: #UserPatch [Request] Allow custom color selection for AIs. The game will now auto-correct any strange coop setups with AIs before the game begins. I decided against making the player numbers auto-switch on the game setup screen to avoid situations where there are many humans and AIs in the game and everyone is actively changing player numbers around. It was difficult to get to the player number you wanted without it getting stolen lol. Now, everyone should be able to freely set their player numbers without having to concern themselves with whether or not it's a broken setup. Thanks to LightTree and fen for the ideas!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120702-061433",
		version: 1.1,
		notes: "UserPatch 20120702-061433 has been released! This update resolves 395: #UserPatch [AI Scripting] The strategic number for civilian offense should allow AI villagers to be more aggressive, and 396: #UserPatch [AI Scripting] A new sn is required to allow AIs to disable automatic attack group targeting. This update also resolves a minor idling bug.</p><p>sn-allow-civilian-offense: Set to 1 to allow villagers to participate as soldiers in town-size attacks. If set to 2, villagers will target all enemy villagers, instead of only builders, and buildings even if defensive military units are available. If set to 0, villagers will only be sent to attack enemy forward towers, without murder holes.</p><p>sn-disable-attack-groups: Set to 1 to disable automatic attack group targeting. Once groups are created, they can be used for defensive attack purposes using TSA. If set to 0, attack groups will perform offensive targeting as usual.",
		itemsAffected: [snAllowCivilianOffense, snDisableAttackGroups],
		scriptingType: "ai"
	}, {
		number: "20120630-015704",
		version: 1.1,
		notes: "UserPatch 20120630-015704 has been released! This update resolves 394: #UserPatch [AI Scripting] A new sn is required for AIs to target placement relative to the center of the map. Set sn-placement-to-center to 1 to force place-control to use the map center as the second point of reference for placement. The first point of reference is set with up-set-placement-data. If set to 0, the active target enemy's nearest building will become the second point of reference instead, once discovered. If sn-target-player-number is 0, the target enemy will be determined by sn-attack-winning-player. As with sn-placement-fail-delta, this sn is not stored with the per-building placement data. Thanks to LightTree for the idea!",
		itemsAffected: [snPlacementToCenter, cUpSetPlacementData],
		scriptingType: "ai"
	}, {
		number: "20120629-004027",
		version: 1.1,
		notes: "UserPatch 20120629-004027 has been released! This update resolves 393: #UserPatch [AI Scripting] The controlled building placement system for AIs requires more precision. Two sns have been added: sn-placement-zone-size and sn-placement-fail-delta. These sns are intended for use with place-forward and place-control build commands.</p><p>sn-placement-zone-size: Set to the size of the tile zone used for forward and controlled building placement. All build commands store this value and the up-set-placement-data information with each successful call. For every pass that a building cannot be placed, its zone size will be increased from this starting point. The default for this sn is 20. A small zone size (0) will provide more precise positioning. A large value allows you to surround the enemy when forward building.</p><p>sn-placement-fail-delta: Set to the value that will be added to the placement distance set by up-set-placement-data for every pass that a building cannot be placed. This sn does not affect forward building. It should be a low value (-2 to 2). The default is 0, which means that only the per-building zone-size is increased for each placement failure.</p><p>If both sn-placement-zone-size and sn-placement-fail-delta are set to 0 and you \"place-control\" on top of the home town center, you can simulate an automated building expansion system.",
		itemsAffected: [snPlacementZoneSize, snPlacementFailDelta],
		scriptingType: "ai"
	}, {
		number: "20120628-154602",
		version: 1.1,
		notes: "UserPatch 20120628-154602 has been released! This update resolves 392: #UserPatch [Core Bug] Obstructed builders may idle indefinitely for AIs under certain conditions. If you've ever seen a builder go idle forever after failing to reach a foundation, this should fix the problem. Thanks to fen for the report and rec!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20120628-013004",
		version: 1.1,
		notes: "UserPatch 20120628-013004 has been released! This update is being released to collect feedback for #78: Allow custom color selection for AIs. Additional changes are pending. There are no checks yet for setting strange coop combinations, but all known slot shift issues should be resolved. It should not crash if you set strange stuff (the players will just override each other). If you have time, please test and let me know what you think.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120623-050319",
		version: 1.1,
		notes: "UserPatch 20120623-050319 has been released! This update resolves 389: #UserPatch [Core Bug] AIs should not retask villagers who are in the midst of a garrison action. This is what caused the freeze in Archon's jaguar game. The up-retask-gatherers and up-drop-resources commands should now be safe. Thanks to Archon for the report and rec!</p><p>Important note: the additional network systems are now under restricted features (Ctrl+Enter to run SetupAoC).",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20120622-044133",
		version: 1.1,
		notes: "UserPatch 20120622-044133 has been released! This update resolves 385: #UserPatch [Core Bug] Player data is overwritten during file transfer when restoring an out-of-sync game. After an out-of-sync game is restored, the focus player of the recording would be broken for clients. This resolves that particular issue. The issue where ctrl+groups are lost cannot be resolved, unfortunately. ES stored the ctrl+group information with each unit (!!!), so when the host sends the updated game state, the client's out-of-sync data is replaced with the host's data, which can have a different number of objects and states. This means the out-of-sync data is never even read; it is discarded, deleted from the disk, and replaced entirely.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120622-002906",
		version: 1.1,
		notes: "UserPatch 20120622-002906 has been released! This update resolves 388: #UserPatch [Scenario Design] The scenario editor improperly rejects a value of -1 for certain trigger effects. Thanks to randomdude for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120621-012812",
		version: 1.1,
		notes: "UserPatch 20120621-012812 has been released! This update resolves 387: #UserPatch [AI Behavior] AIs should bring their sheep and turkeys under the town center before gathering. Livestock are automatically distributed to 4 sub-gather-points under the town center canopy. I think it works pretty well. Thanks to offwo for the idea (long time ago lol)!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20120620-215053",
		version: 1.1,
		notes: "UserPatch 20120620-215053 has been released! This update resolves 386: #UserPatch [Scenario Design] Negative attack deltas are not shown on the selected object information display. As for the building armor information, I wouldn't be surprised if someone out there would think that it would make the game easier or something, making \"expert\" players reject 1.1 lol. Maybe ask at aoczone or aokh for feedback on that? Thanks to randomdude for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120618-190004",
		version: 1.1,
		notes: "UserPatch 20120618-190004 has been released! This update resolves 382: #UserPatch [Scenario Design] Certain scenario editor controls must be able to accept negative numbers, and 383: #UserPatch [Scenario Design] The trigger effect to change object names must be able to process areas. The negative number fix applies to both Enhanced 1.0c and 1.1, but the change name fix only applies to 1.1 for sync reasons.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120614-231702",
		version: 1.1,
		notes: "UserPatch 20120614-231702 has been released! This update resolves 381: #UserPatch [AI Scripting] A new fact is required for AIs to determine how much food remains on a boar. With up-remaining-boar-amount, you can figure out how much food remains on the boar that is currently being gathered from. This fact will return 65535 (invalid) if the target boar has not been gathered from, the boar no longer exists, or there is no other boar pending. This last part is important: if you are on your last boar, this fact will always return 65535. The example in the reference shows how it works.</p><p>In addition, you should hopefully never see 39485734985 lurers lol, and sn-minimum-boar-lure-group-size now defaults to 0. Setting sn-minimum-boar-lure-group-size to a high value (like 300 or something) will allow you to block double luring.",
		itemsAffected: [cUpRemainingBoarAmount],
		scriptingType: "ai"
	}, {
		number: "20120614-140905",
		version: 1.1,
		notes: "UserPatch 20120614-140905 has been released! This update resolves 380: #UserPatch [AI Scripting] A new action is required for AIs to use cheat codes when they are enabled. The new up-cc-send-cheat action can be used with any cheat code. In addition, up-chat-data-to-all has been added for convenience. Thanks to ER for the idea!",
		itemsAffected: [cCcSendCheat, cUpChatDataToAll],
		scriptingType: "ai"
	}, {
		number: "20120613-000249",
		version: 1.1,
		notes: "UserPatch 20120613-000249 has been released! This update resolves 379: #UserPatch [AI Scripting] A new sn is required for AIs to disable the special targeting priority for fortifications. Now, you can set the new sn-disable-tower-priority to 1 to prevent the local targeting system from giving special priority to towers and other ranged fortifications, including town centers and castles. If set to 0, these buildings will receive the usual special priority. In combination with sn-ignore-attack-group-under-attack:1, you can better avoid being lured by town centers during early attacks. Note: this sn requires a packet to be sent for each change in a multiplayer game, so please consider this when using it.",
		itemsAffected: [snDisableTowerPriority],
		scriptingType: "ai"
	}, {
		number: "20120612-120702",
		version: 1.1,
		notes: "UserPatch 20120612-120702 has been released! This update resolves 378: #UserPatch [AI Behavior] Boar lurers for AIs should aim for two arrows and hold their position before retreating. Thanks to cake for the report and rec! This also includes some performance adjustments for the multiplayer fix. Please test if you have time!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20120611-154514",
		version: 1.1,
		notes: "UserPatch 20120611-154514 has been released (direct link to non-public version)! This update has a possible fix for 377: #UserPatch [Core Bug] Multiplayer games may fail due to dropped packets under certain conditions. Please test this version in multiplayer games and let me know if it breaks with an unresponsive vote panel. I hope this issue can be resolved as soon as possible, so if you have time, please test. I'm sorry for the trouble.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120610-151643",
		version: 1.1,
		notes: "UserPatch 20120610-151643 has been released! This update resolves 376: #UserPatch [Core Bug] Market counts are improperly checked under certain conditions. This has to do with the anti-cheat; sorry about that!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120610-125703",
		version: 1.1,
		notes: "UserPatch 20120610-125703 has been released! This update resolves 375: #UserPatch [Core Bug] The resign command may fail under certain circumstances in multiplayer games. There was an issue with the anti-cheat that would block resigns due to disconnection. In addition, with this release, a localized notification will appear onscreen if certain cheats are detected. It will say something like \"!!! Problem communicating with NAME-OF-SUSPECT ...\" The message, which the suspect will not see, is accompanied by the creepy spies sound effect, so players notice it.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120609-200504",
		version: 1.1,
		notes: "UserPatch 20120609-200504 has been released! This update resolves 374: #UserPatch [Core Bug] The up-reset-scouts command for AIs fails to synchronize in multiplayer games. In addition, various cheat hacks have been \"blocked\" for 373 (delete hack, resign hack, resource hack, etc.), but this is obviously a losing battle ",
		itemsAffected: [cUpResetScouts],
		scriptingType: "ai"
	}, {
		number: "20120608-045302",
		version: 1.1,
		notes: "UserPatch 20120608-045302 has been released! This update makes some minor changes to the installer and updates the included guide and reference information. There are no code changes in this one.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120604-220240",
		version: 1.1,
		notes: "UserPatch 20120604-220240 has been released! This update resolves 372: #UserPatch [AI Behavior] AIs must be able to discover markets and docks from allied human players for trade. With this fix, humans will now automatically \"tell\" allied AIs whenever they build a market or dock like sn-coop-share-information:1 for AIs. Thanks to LightTree for the report!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20120604-195710",
		version: 1.1,
		notes: "UserPatch 20120604-195710 has been released! This update resolves 371: #UserPatch [AI Scripting] A new symbol is required for AIs to determine whether or not a human is in the game. The #load symbol UP-HUMAN-IN-GAME is now available. I hope this will allow AIs to use more aggressive and even risky behavior when humans are present. Thanks for the idea, II2N!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20120604-183547",
		version: 1.1,
		notes: "UserPatch 20120604-183547 has been released! This update resolves 369: #UserPatch [AI Scripting] A new fact is required for AIs to detect whether or not a timer is in the running state, and 370: #UserPatch [AI Scripting] A new action is required for AIs to disband specific types of internal unit groups. I'll just list the new stuff lol. Please see UserPatchConst.per for the defconsts.</p><p><strong>New Facts and Actions</strong><br>1. (up-timer-status inConstTimerId compareOp inOpTimerState)<br>- Use to check whether a timer is disabled, triggered, running, or a combination of them.<br>- Example: (up-timer-status tm-drop-food <= timer-triggered) ;returns true if the timer is disabled or triggered<br>2. (up-disband-group-type inConstGroupType)<br>- Use to disband all internal groups of the specified type. Units will not stop unless directed by up-reset-unit.<br>- Example: (up-disband-group-type group-type-land-explore) ;disbands internal land explore groups",
		itemsAffected: [cUpTimerStatus, cUpDisbandGroupType],
		scriptingType: "ai"
	}, {
		number: "20120604-021943",
		version: 1.1,
		notes: "UserPatch 20120604-021943 has been released! This update resolves 368: #UserPatch [Core Bug] Player activity states may become inconsistent after restoring a saved game. It would cause AIs to permanently lose the ability to perform tasks with buildings and break their ability to determine whether or not they can afford units and techs. Thanks to ryshep for the rec!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120603-043600",
		version: 1.1,
		notes: "UserPatch 20120603-043600 has been released! This update resolves 367: #UserPatch [AI Scripting] A new action is required for AIs to halt and disband soldier explore groups. With the new \"up-reset-scouts\" command, soldier explore groups are immediately halted and disbanded. Thanks to Promi for finding that up-reset-unit (the hand-button stop command) only halts units, but does not remove explorers from their explore groups, which causes scouting to restart after a few seconds.</p><p><strong>New Actions</strong><br>1. (up-reset-scouts)<br>- Use to halt and disband all soldier/land explore groups, in combination with appropriate sns.<br>- Set sn-total-number-explorers, sn-number-explore-groups, and sn-minimum-civilian-explorers before execution.<br>- Example: (up-reset-scouts) ;stop all scouts",
		itemsAffected: [cUpResetScouts, cUpResetUnit],
		scriptingType: "ai"
	}, {
		number: "20120602-163715",
		version: 1.1,
		notes: "UserPatch 20120602-163715 has been released! This update resolves 366: #UserPatch [Core Bug] Defensive targeting for monastery units loops indefinitely while conversion fails. If you've ever seen monks during TSA do a strange hopping dance, moving almost nowhere in place, this is the fix lol. It would waste so much cpu time trying over and over to retarget that many other units would be forced to remain idle, as well. I think the improvement is quite noticeable.",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20120602-035951",
		version: 1.1,
		notes: "UserPatch 20120602-035951 has been released! This update resolves 365: #UserPatch [Core Bug] Monastery units block standard defensive unit targeting for AIs when conversion fails. This should hopefully reduce some more unit idling during TSA.",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20120601-140228",
		version: 1.1,
		notes: "UserPatch 20120601-140228 has been released! This update resolves 364: #UserPatch [AI Behavior] Walls and gates should always have lower priority than other targetable buildings. Now, there should definitely be more reliable break-in-wall-then-invade behavior without needing to make excessive defensive priority changes when using targeted, player-distance-based TSA.</p><p>Some later clarification from scripter64: the defensive priorities for walls and gates are now significantly reduced during targeting comparisons. The assigned values are still used to determine if walls and gates are targetable, etc.",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20120524-053358",
		version: 1.1,
		notes: "UserPatch 20120524-053358 has been released! This update resolves 363: #UserPatch [Core Bug] The settings conversion code fails to adapt the population cap data from 1.0c. Now, you won't get the blank field for the population cap when it converts from player.nfp to player.nfz. I'm sorry about the trouble that caused, OverUsedChewToy.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120524-021450",
		version: 1.1,
		notes: "UserPatch 20120524-021450 has been released! This update resolves 23: #UserPatch [Economy] Town centers are not always placed optimally for resource gathering. With the new sn-town-center-placement, you can simply set it to a building type, like lumber-camp, and the system will emulate that placement style for subsequent town centers. Note that it is complete emulation, so if you set it to mill, it will use sn-mill-max-distance for its maximum-town-size.</p><p>1. Sn: sn-town-center-placement: snId:266, default:0, range:0-899<br>- Set to the building type to emulate for town center placement. If set to 0, the town center will be placed as usual.<br>- Example: (set-strategic-number sn-town-center-placement mill) ;attempt to emulate mill placement",
		itemsAffected: [snTownCenterPlacement],
		scriptingType: "ai"
	}, {
		number: "20120523-220000",
		version: 1.1,
		notes: "UserPatch 20120523-220000 has been released! This update just makes the installer check if you already have wndmode.dll and presents the same setting for the checkbox. Yes, I timed it for the 220000 ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120523-053227",
		version: 1.1,
		notes: "UserPatch 20120523-053227 has been released! This update resolves 32: #UserPatch [Military] AIs have very little control over tower placement, and 55: #UserPatch [AI Scripting] A new sn is required for market defense. Now, AIs can ignore elevation with sn-ignore-tower-elevation. In combination with up-build place-control, you can usually get fairly precise placement, so you can tower your market, etc. You still can't place in restricted zones, like the farm area of a TC.</p><p>1. Sn: sn-ignore-tower-elevation: snId:265, default:0, range:0-1<br>- Set to 1 to ignore elevation when placing towers. If set to 0, the AI will try to seek elevation advantage.<br>- Example: (set-strategic-number sn-ignore-tower-elevation 1) ;ignore elevation for tower placement",
		itemsAffected: [snIgnoreTowerElevation],
		scriptingType: "ai"
	}, {
		number: "20120522-063940",
		version: 1.1,
		notes: "UserPatch 20120522-063940 has been released! This update resolves 362: #UserPatch [Core Bug] The defensive targeting system for AIs fails to prioritize buildings over walls. Thanks to Archon for the report!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20120522-040547",
		version: 1.1,
		notes: "UserPatch 20120522-040547 has been released! This update resolves 361: #UserPatch [AI Scripting] The sn-total-number-explorers value should not be used to halt AI explorers. I did some minor alignment changes on the scouting code while I was at it. You can use up-reset-unit to halt the explorer (among other things lol), after changing explorer settings.",
		itemsAffected: [snTotalNumberExplorers],
		scriptingType: "ai"
	}, {
		number: "20120521-050808",
		version: 1.1,
		notes: "UserPatch 20120521-050808 has been released! This update resolves 360: #UserPatch [AI Scripting] A new fact is required for AIs to determine how many units are actively defending. With the new \"up-defender-count\" fact, you can check to see if your TSA attack is actually actively targeting anything or if it's just idling. If, after expecting your new town-size to initiate a defensive attack, the response from this command is far less than expected for several consecutive turns, your target may be unreachable by the defensive targeting system (target has been walled for protection by one of their allies, etc.) and you may need to switch targets. This has also been made available for up-get-fact (see UserPatchConst.per for the FactId).</p><p><strong>New Facts</strong><br>1. (up-defender-count compareOp inOpValue)<br>- Use to check the number of units actively defending within sn-maximum-town-size.<br>- Example: (up-defender-count >= 10) ;returns true if the AI is actively defending its town with at least 10 units",
		itemsAffected: [cUpDefenderCount, cUpGetFact],
		scriptingType: "ai"
	}, {
		number: "20120518-221457",
		version: 1.1,
		notes: "UserPatch 20120518-221457 has been released! This update resolves 359: #UserPatch [Core Bug] Timing data must be reset for AIs during guard and reset commands. Just some adjustments for code consistency.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120518-184643",
		version: 1.1,
		notes: "UserPatch 20120518-184643 has been released! This update resolves 358: #UserPatch [Core Bug] The defensive targeting system fails to transition when a target is unreachable. Complete epic fail regression bug lol. I'm sorry about the trouble.",
		itemsAffected: [],
		scriptingType: ""
	}, {
		number: "20120517-133220",
		version: 1.1,
		notes: "UserPatch 20120517-133220 has been released! This update resolves 357: #UserPatch [Core Bug] Port forwarding for upnp-compatible routers fails to operate on Windows 2000. Unfortunately, windowed mode and port forwarding don't seem to work on Windows 98, so they probably don't work on Windows 95/ME. I'm sorry ",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120515-212325",
		version: 1.1,
		notes: "UserPatch 20120515-212325 has been released! This update resolves absolutely nothing. Actually, it just contains some fixes for the installer to warn people before they break their non-1.0c installation. It will now prompt if they try to patch 1.0, 1.0b, etc.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120515-161905",
		version: 1.1,
		notes: "UserPatch 20120515-161905 has been released! This update resolves 356: #UserPatch [Core Bug] The music volume adjustment controls fail to operate for CD audio. I'm surprised that no one noticed this until now lol.</p><p>Thanks to AntonSynytsia on Twitter for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120515-125613",
		version: 1.1,
		notes: "UserPatch 20120515-125613 has been released! This update resolves 355: #UserPatch [Core Bug] Excessive command messages in a multiplayer game may cause a list overflow. Thanks to LightTree and LordGravewish for the reports and recs!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120512-144434",
		version: 1.1,
		notes: "UserPatch 20120512-144434 has been released! This update resolves 354: #UserPatch [Core Bug] The unit garrison controller for AIs improperly handles town center attack events. The game was checking town-center 109 as a class id instead of a type id lol.",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20120511-124309",
		version: 1.1,
		notes: "UserPatch 20120511-124309 has been released! This update resolves 353: #UserPatch [AI Scripting] New symbols are required for AIs to determine the civilizations of other players. Now, there are #load symbols to determine who your allies are and who your \"enemies\" are. For these symbols, anyone who isn't an ally is considered an enemy. Speaking of double posts lol.</p><p><strong>New Symbols</strong><br>- UP-[NAME]-CIV-ALLY: defined for players who are allies<br>- UP-[NAME]-CIV-ENEMY: defined for players who are not allies<br>- Examples: UP-BRITON-CIV-ALLY, UP-AZTEC-CIV-ENEMY",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20120510-110349",
		version: 1.1,
		notes: "UserPatch 20120510-110349 has been released! This update resolves 67: #UserPatch [AI Scripting] AIs cannot easily determine the number of players in a game. There are many updates in this one, including a new fact, up-players-in-game. This has also been enabled for up-get-fact (see UserPatchConst.per). I'll just list everything else :lol:</p><p><strong>New Facts</strong><br>1. (up-players-in-game inConstPlayerStance compareOp inOpValue)<br>- Use to check the number of active players in the game of the specified stance.<br>- The ally count for inConstPlayerStance will include the local player in the total.<br>- Example: (up-players-in-game any >= 3) ;returns true if there are at least 3 players left in the game</p><p><strong>New Symbols</strong><bR>- UP-[1-8]-PLAYER-GAME: defined as the total number of players<br>- UP-[1-8]-PLAYER-TEAM: defined to represent the team member total<br>- UP-ALLY-IN-GAME: defined if the player has an ally<br>- UP-MULTIPLE-ENEMIES: defined if there is more than 1 enemy<br>- UP-TEAM-DISADVANTAGE: defined when an enemy team is larger",
		itemsAffected: [cUpPlayersInGame, cUpGetFact],
		scriptingType: "ai"
	}, {
		number: "20120510-002448",
		version: 1.1,
		notes: "UserPatch 20120510-002448 has been released! This update simply ensures that new settings files for 1.1 are properly set to the default population limit of 75 like 1.0c. Other than that, there are no changes.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120509-233737",
		version: 1.1,
		notes: "UserPatch 20120509-233737 has been released! This update resolves 352: #UserPatch [Core Bug] Game settings must be stored separately for 1.1 in order to preserve 1.0c. You will need to set the population limit to a valid number or you'll get the 25pop default lol. Now, settings for 1.1 should be stored in player.nfz, while 1.0c stores its settings in player.nfp, as always. In addition, the Team Random option has been removed from Enhanced 1.0c. If a player with original 1.0c joined an Enhanced 1.0c game, the game would likely crash on startup. Enhanced 1.0c cannot be allowed to break compatibility with original 1.0c. The purpose of Enhanced 1.0c is to allow people to watch saved games and recordings from 1.0c, or work with scenarios. It has all of the network and gameplay bugs from 1.0c (including that Expert FFA lockup bug), so it should not be used for normal gameplay.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120509-222822",
		version: 1.1,
		notes: "UserPatch 20120509-222822 has been released! This update resolves 351: #UserPatch [Core Bug] Palisade wall flags fail to animate in custom scenario games. The wall flag animation fix has been optimized and moved into the core v1.1 update.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120509-131009",
		version: 1.1,
		notes: "UserPatch 20120509-131009 has been released! This update makes many updates to the installer, eliminating the need to manually drop the support library dlls into the \"age2_x1\" folder, etc. Now, you can add/remove wndmode.dll and miniupnpc.dll very easily. I also cleaned up the list of features and updated that section of the guide.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120509-071948",
		version: 1.1,
		notes: "UserPatch 20120509-071948 has been released! This update resolves 350: #UserPatch [Core Bug] Wall lines created by the random map generator have an excessive number of gates. Now, maps like Arena should have the standard number of gates, I hope. As for the other fix, there's nothing we can do. If things like this are forced, experts will stay on 1.0c (like some people have stayed with 1.0a lol), which would be a terrible, since the normal people will stay with whatever the experts are using.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120508-220623",
		version: 1.1,
		notes: "UserPatch 20120508-220623 has been released! This update resolves 349: #UserPatch [Request] The multiple building selection (MBS) queue system must be an optional feature. Due to the requests of LightTree and several expert players at aoczone, this feature has been removed from the core v1.1 update. Here's the description from the guide: This will enable the multiple building selection (MBS) queue system. If you have multiple buildings selected, any units that you train will be automatically distributed between the buildings. For multiplayer games, all players must install, or not install, this feature to avoid out-of-sync errors. This out-of-sync is intentional in order to avoid players giving themselves an unfair advantage.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120508-044906",
		version: 1.1,
		notes: "UserPatch 20120508-044906 has been released! This update resolves 348: #UserPatch [AI Scripting] A new command is required for AIs to perform calculations with cost sets. Now, you can setup one set of cost goals, add some stuff, setup another set of cost goals, then add or subtract the sets together. The compatibility build has been updated, as well.</p><p><strong>New Actions</strong><br>1. (up-add-cost-data inExtendedGoalId typeOp inOpCount)<br>- Use to add inOpCount instances of the cost data stored at inExtendedGoalId to the current cost data.<br>- Provide the first of 4 consecutive goals for food, wood, stone, and gold with inExtendedGoalId.<br>- Only extended goals from 41 to 508 are acceptable for inExtendedGoalId.<br>- Example: (up-add-cost-data gl-military-cost-food c: 1) ;add the referenced cost data to the current cost data",
		itemsAffected: [cUpAddCostData],
		scriptingType: "ai"
	}, {
		number: "20120508-004142",
		version: 1.1,
		notes: "UserPatch.9X 20120508-004142 has been released! Compatibility build update for unsupported systems.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120508-004142",
		version: 1.1,
		notes: "UserPatch 20120508-004142 has been released! This update resolves 347: #UserPatch [AI Scripting] A new math operator is required for AIs to negate values. The \"up-add-cost-for-object\" and \"up-add-cost-for-research\" commands have been renamed as shown below. In addition, both of these commands now support negative values to subtract cost data. Finally, a new mathOp has been added that performs simple negation.</p><p><strong>New Actions</strong><br>1. (up-add-object-cost typeOp inOpObjectId typeOp inOpCount)<br>- Use to add inOpCount objects of type inOpObjectId to the current cost data.<br>- Example: (up-add-object-cost c: spearman c: 4) ;add 4 spearmen to the current cost data<br>2. (up-add-research-cost typeOp inOpTechId typeOp inOpCount)<br>- Use to add inOpCount techs of type inOpTechId to the current cost data.<br>- Example: (up-add-research-cost c: ri-loom c: -1) ;subtract loom from the current cost data</p><p><strong>New Operators</strong><br>1. mathOp type:neg<br>- Use to negate the value of the opParameter.<br>- Example: (up-modify-goal gl-value g:neg gl-value) ;gl-value will be -gl-value",
		itemsAffected: [cUpAddObjectCost, cUpAddResearchCost, pMathOp],
		scriptingType: "ai"
	}, {
		number: "20120507-230438",
		version: 1.1,
		notes: "UserPatch 20120507-230438 has been released! This update resolves 346: #UserPatch [AI Scripting] New commands are required for AIs to calculate cost data for objects and techs. Please read the following list of stuff to see how each command works. I'm sorry it took so long, jd!</p><p><strong>New Actions</strong><br>1. (up-setup-cost-data inConstResetCost inOutExtendedGoalId)<br>- Use to assign the first of 4 consecutive goals for food, wood, stone, and gold as the current cost data.<br>- Only extended goals from 41 to 508 are acceptable for outExtendedGoalId.<br>- Example: (up-setup-cost-data 1 gl-cost-food) ;use gl-cost-food and the 3 following goals for cost<br>2. (up-add-cost-for-object typeOp inOpObjectId typeOp inOpCount)<br>- Use to add inOpCount objects of type inOpObjectId to the current cost data.<br>- Example: (up-add-cost-for-object c: spearman c: 4) ;add 4 spearmen to the current cost data<br>3. (up-add-cost-for-research typeOp inOpTechId)<br>- Use to add inOpTechId to the current cost data.<br>- Example: (up-add-cost-for-research c: ri-loom) ;add loom to the current cost data<br>4. (up-get-cost-delta outExtendedGoalId)<br>- Use to get the difference between player resources and the current cost data.<br>- Provide the first of 4 consecutive goals for food, wood, stone, and gold with outExtendedGoalId.<br>- Only extended goals from 41 to 508 are acceptable for outExtendedGoalId.<br>- Example: (up-get-cost-delta gl-delta-food) ;get the difference into the 4 goals starting from gl-delta-food<br>5. (up-reset-cost-data outExtendedGoalId)<br>- Use to reset 4 consecutive goals starting from outExtendedGoalId to 0.<br>- Only extended goals from 41 to 508 are acceptable for outExtendedGoalId.<br>- Example: (up-reset-cost-data gl-cost-food) ;set 4 goals starting from gl-cost-food to 0",
		itemsAffected: [cUpSetupCostData, cUpAddObjectCost, cUpAddResearchCost, cUpGetCostDelta, cUpResetCostData],
		scriptingType: "ai"
	}, {
		number: "20120507-045736",
		version: 1.1,
		notes: "UserPatch 20120507-045736 has been released! This update resolves 345: #UserPatch [Core Bug] Merging subformations may cause an infinite loop when the maximum is reached. This bug in 1.0c affected the recent Expert FFA 8-Player game, as Viper somehow collected 50 units into a formation. Epic timing. GG lol.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120506-215820",
		version: 1.1,
		notes: "UserPatch 20120506-215820 has been released! This update resolves 344: #UserPatch [AI Scripting] A new fact is required for AIs to compare constants with other data. The new \"up-compare-const\" command just lets you compare raw numbers or defconsts with other data. Good times lol. Thanks to Finaldeath for the idea!</p><p><strong>New Facts</strong><br>1. (up-compare-const inConstValue compareOp inOpValue)<br>- Use to perform a comparison with a constant value.<br>- Example: (up-compare-const feudal-villagers > 20) ;returns true if the \"feudal-villagers\" defconst is greater than 20",
		itemsAffected: [cUpCompareConst],
		scriptingType: "ai"
	}, {
		number: "20120506-194852",
		version: 1.1,
		notes: "UserPatch 20120506-194852 has been released! This update resolves 343: #UserPatch [AI Behavior] Player distance should seek past walls in order to improve target selection. Now, player-distance will try to avoid locking at a wall or gate, instead preferring to find the distance to the nearest actual enemy building. If you use player-distance to set the TSA town-size, the targeting system will seek backward if a wall obstructs the path, and, once it's breached, your units will be more likely to move in.",
		itemsAffected: [cUpPlayerDistance, pFactId],
		scriptingType: "ai"
	}, {
		number: "20120506-174134",
		version: 1.1,
		notes: "UserPatch 20120506-174134 has been released! This update resolves 342: #UserPatch [Core Bug] The game may crash under certain conditions while using the farm queue. This was caused by the counting fix. Thanks to LordGravewish for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120505-233604",
		version: 1.1,
		notes: "UserPatch 20120505-233604 has been released! This update resolves 341: #UserPatch [AI Scripting] New commands are required for AIs to determine the size of the threat in town. These new commands have associated FactId parameters for use with up-get-fact (see UserPatchConst.per). You can only read the local player's information with these. Thanks for the idea, Lazarus!</p><p><strong>New Facts</strong><br>1. (up-enemy-buildings-in-town compareOp inOpValue)<br>- Use to check the number of targetable enemy buildings inside sn-maximum-town-size.<br>- Example: (up-enemy-buildings-in-town > 0) ;returns true if there is an enemy building in town<br>2. (up-enemy-units-in-town compareOp inOpValue)<br>- Use to check the number of targetable enemy units, except villagers, inside sn-maximum-town-size.<br>- Example: (up-enemy-units-in-town > 5) ;returns true if there are more than 5 enemy units in town<br>3. (up-enemy-villagers-in-town compareOp inOpValue)<br>- Use to check the number of targetable enemy villagers inside sn-maximum-town-size.<br>- Example: (up-enemy-villagers-in-town >= 2) ;returns true if there are at least 2 enemy villagers in town",
		itemsAffected: [cUpEnemyBuildingsInTown, cUpEnemyUnitsInTown, cUpEnemyVillagersInTown, pFactId],
		scriptingType: "ai"
	}, {
		number: "20120505-195407",
		version: 1.1,
		notes: "UserPatch 20120505-195407 has been released! This update resolves 340: #UserPatch [Scenario Design] The map copy feature of the scenario editor fails to preserve the appearance of trees. Now, when pasting the copied area, you won't see 34853849 clones of the same tree. This always bothered me while I was trying to make scenarios lol.",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120505-164216",
		version: 1.1,
		notes: "UserPatch 20120505-164216 has been released! This update resolves 339: #UserPatch [AI Scripting] Unit counting commands should consider queued units in addition to those in training. Now, the X-count-total commands, including pending-objects, will operate using the true number of pending units, both training and queued.",
		itemsAffected: [cUnitTypeCountTotal, cObjectTypeCountTotal, cUpPendingObjects],
		scriptingType: "ai"
	}, {
		number: "20120505-140343",
		version: 1.1,
		notes: "UserPatch 20120505-140343 has been released! This update resolves 338: #UserPatch [AI Scripting] A new action is required for AIs to cancel unit training and research. With the following command, research and training can be cancelled at all buildings of the specified type or class id. This may be helpful when used with unit queuing.</p><p><strong>New Actions</strong><br>1. (up-reset-building inConstPreserveResearch typeOp inOpBuildingId)<br>- Use to reset all buildings of type inOpBuildingId. This will cancel research if inConstPreserveResearch is 0, and all training.<br>- Example: (up-reset-building 1 c: town-center) ;reset all activity at town centers, except those performing research",
		itemsAffected: [cUpResetBuilding],
		scriptingType: "ai"
	}, {
		number: "20120505-013416",
		version: 1.1,
		notes: "UserPatch 20120505-013416 has been released! This update replaces the previous version to fix a \"little\" issue with the installer, which could corrupt the modification process. Other than that, nothing has changed",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120504-230554",
		version: 1.1,
		notes: "UserPatch 20120504-230554 has been released! This update resolves 337: #UserPatch [AI Scripting] A mechanism is required for AIs to queue more than one unit per building. If you set the new \"sn-enable-training-queue\" to 1, buildings will be able to queue an additional unit. If it is left at the default of 0, each building will train only one unit at a time, like before. This sn takes effect immediately in rules and affects all of the training commands: can-train, can-train-with-escrow, train, up-can-train, and up-train.</p><p>1. Sn: sn-enable-training-queue: snId:264, default:0, range:0-1<br>- Set to 1 to allow an additional unit to be queued at each building. If set to 0, buildings will train one unit at a time.<br>- Example: (set-strategic-number sn-enable-training-queue 1) ;enable the training queue",
		itemsAffected: [snEnableTrainingQueue, cCanTrain, cCanTrainWithEscrow, cTrain, cUpCanTrain, cUpTrain],
		scriptingType: "ai"
	}, {
		number: "20120502-170916",
		version: 1.1,
		notes: "UserPatch 20120502-170916 has been released! This update resolves 336: #UserPatch [Core Bug] Extended AI goals and timers are initialized to a different value than 1.0c. Goals and timers in 1.0c were set to -1 by default. In 1.1, the extended goals and timers were set to 0 by default. Now, all goal and timer data is uniform, with -1 as the default. Always remember to initialize data, such as goals, before using them, regardless. Thanks to II2N for the timer report!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20120429-201835",
		version: 1.1,
		notes: "UserPatch.9X 20120429-201835 has been released! This is not a new version. I've just updated the compatibility build for Windows 9X, ME, NT, and 2000 (unsupported operating systems). I wish I didn't have to keep this updated",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120429-201835",
		version: 1.1,
		notes: "UserPatch 20120429-201835 has been released! This update resolves 335: #UserPatch [Core Bug] The boar garrison fix for AIs requires synchronization to avoid out-of-sync issues. Sorry about the trouble! Thanks, fen!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120429-160041",
		version: 1.1,
		notes: "UserPatch 20120429-160041 has been released! This update just includes a few performance optimizations for the previous two boar fixes. I think boar hunting works fairly well, at this point.",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20120429-144015",
		version: 1.1,
		notes: "UserPatch 20120429-144015 has been released! This update resolves 334: #UserPatch [AI Behavior] Boar lurers should react and retreat faster after being struck by a boar. Now, they should take less hits before retreating, I hope.",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20120429-130401",
		version: 1.1,
		notes: "UserPatch 20120429-130401 has been released! This update resolves 333: #UserPatch [AI Behavior] Villagers attacked by boar fail to garrison if they are not actively hunting. Thanks to fen for the report!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20120428-074045",
		version: 1.1,
		notes: "UserPatch 20120428-074045 has been released! This update resolves 332: #UserPatch [Core Bug] The network address list truncates host names longer than a full ipv4 address. Thanks to LordGravewish for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120427-100054",
		version: 1.1,
		notes: "UserPatch 20120427-100054 has been released! This update resolves 331: #UserPatch [Core Bug] The upnp port forwarding system fails to consider manually forwarded ports. Thanks to ryshep and sh for feedback!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120427-064842",
		version: 1.1,
		notes: "UserPatch 20120427-064842 has been released! This update resolves 330: #UserPatch [Core Bug] Resources are lost by gatherers if a resource carry overflow occurs. They will now drop if necessary. Thanks to Cysion for the report!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120427-035042",
		version: 1.1,
		notes: "UserPatch 20120427-035042 has been released! This update resolves 329: #UserPatch [Core Bug] AI gatherers may lose their resources under certain conditions after a retask event. Thanks to marathon for the report!",
		itemsAffected: [],
		scriptingType: "ai"
	}, {
		number: "20120426-060128",
		version: 1.1,
		notes: "UserPatch 20120426-060128 has been released! This update makes some changes for the upnp port forwarding fix. Now, it will not forward 47624 until the player attempts to host a game. In addition, it will try to ensure that it has a unique port number on the LAN before forwarding, in order to hopefully allow multiple people on a LAN to communicate with the outside and vice-versa. Please let me know if it works!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120426-012216",
		version: 1.1,
		notes: "UserPatch 20120426-012216 has been released! This update resolves 328: #UserPatch [AI Behavior] Villagers should only be selected to lure boar if they are at maximum hitpoints. In addition, the boar luring sns should have more consistent behavior now. The initial luring group size is determined exclusively by sn-minimum-boar-lure-group-size. If this is set excessively high, luring a new boar will be blocked, which is useful to ensure that all new hunters will help with an existing lure only. If sn-minimum-boar-lure-group-size is set to 0, a new boar lure is guaranteed to start if sn-minimum-number-hunters requests at least 1 hunter and sn-enable-boar-hunting is set appropriately.</p><p>The sn-minimum-boar-hunt-group-size value is used only to determine how many hunters should be active during a lure. Each time a lurer is hit, it will try to request up to sn-minimum-boar-hunt-group-size hunters in total to help with the hunt. If it's set to 7, for example, it will request support hunters until there are 7 total hunters. After it is down, each boar will accept a maximum of 8 gatherers. The 9th will have to seek a new boar, if sn-minimum-boar-lure-group-size permits it.",
		itemsAffected: [snMinimumBoarLureSize],
		scriptingType: "ai"
	}, {
		number: "20120424-232929",
		version: 1.1,
		notes: "UserPatch 20120424-232929 has been released! This update resolves 327: #UserPatch [AI Scripting] New commands are required for AIs to calculate min/max data from players. The mathOp has 2 new functions: min and max. The min op will ensure that the value will be no lower than the parameter, while the max op will ensure that the value will be no higher. Thanks to Finaldeath for the suggestion!</p><p>In addition, 2 new combination fact/actions have been added: up-get-fact-min and up-get-fact-max. These new commands, along with up-get-fact-sum, do not accept the every-* playerIds. They will only accept the any-* playerIds, since these can store this-any-* data and there are more variations of the any-* playerIds than the every-* ones. If up-get-fact-min and up-get-fact-max succeed in setting their goal, the special this-any-* playerId will be set to the matching player number. These should be useful for military superiority checks and more, I think.</p><p><strong>New Facts and Actions</strong><br>1. (up-get-fact-sum inPlayerId inConstFactId inConstFactParam outGoalFactData)<br>- Use to store the sum of facts for any-* wildcards into outGoalFactData. inConstFactParam can be 0.<br>- This command can operate as either a fact or an action in a rule.<br>- Example: (up-get-fact-sum any-enemy military-population 0 gl-population) ;store the sum into gl-population<br>2. (up-get-fact-min inPlayerId inConstFactId inConstFactParam outGoalFactData)<br>- Use to store the min value of facts for any-* wildcards into outGoalFactData. inConstFactParam can be 0.<br>- The special this-any-* playerId will be available for use in the actions section of a rule.<br>- This command can operate as either a fact or an action in a rule.<br>- Example: (up-get-fact-min any-enemy current-score 0 gl-population) ;store the min data into gl-population<br>3. (up-get-fact-max inPlayerId inConstFactId inConstFactParam outGoalFactData)<br>- Use to store the max value of facts for any-* wildcards into outGoalFactData. inConstFactParam can be 0.<br>- The special this-any-* playerId will be available for use in the actions section of a rule.<br>- This command can operate as either a fact or an action in a rule.<br>- Example: (up-get-fact-max any-enemy current-score 0 gl-population) ;store the max data into gl-population</p><p><strong>New Operators</strong>1. mathOp type:min<br>- Use to limit the minimum value of the result to the opParameter.<br>- Example: (up-modify-goal gl-value c:min 10) ;gl-value will be no less than 10<br>2. mathOp type:max<br>- Use to limit the maximum value of the result to the opParameter.<br>- Example: (up-modify-sn sn-maximum-town-size c:max 40) ;sn-maximum-town-size will be no greater than 40</p><p>Editor's note: the min and max MathOps described above were later switched, so that min will store the lesser of the current goal value or the value specified, and max will store the greater of the two.",
		itemsAffected: [pMathOp, cUpGetFactSum, cUpGetFactMin, cUpGetFactMax],
		scriptingType: "ai"
	}, {
		number: "20120424-095559",
		version: 1.1,
		notes: "UserPatch 20120424-095559 has been released! This update resolves 326: #UserPatch [Core Bug] The upnp port forwarding feature may crash the game under certain conditions. Thanks to offwo and sh for the help!",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "20120423-135909",
		version: 1.1,
		notes: "UserPatch 20120423-135909 has been released! This update resolves 325: #UserPatch [Request] Add automatic port forwarding for playing direct ip with a upnp-enabled router. This won't work if upnp has been disabled on the router or the router has been misconfigured beyond recognition lol. Note, however, that the built-in windows ssdp/upnp system services do not have to be enabled for this to work. Here's how to enable it (copy/paste from readme lol):</p><p><strong>Port Forwarding Notes</strong><br>- Copy \"miniupnpc.dll\" from \"Libraries\" into the \"age2_x1\" folder<br>- Ports will be forwarded dynamically as required for listening<br>- Only use if you can't directly forward 2300-2400, 47624 TCP/UDP<br>- UPNP must be enabled on your router for this feature<br>- Remove \"miniupnpc.dll\" from the \"age2_x1\" folder to disable it",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "",
		version: 1.1,
		notes: "",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "",
		version: 1.1,
		notes: "",
		itemsAffected: [],
		scriptingType: "none"
	}, {
		number: "",
		version: 1.1,
		notes: "",
		itemsAffected: [],
		scriptingType: "none"
	}, {

		
		//finished page 187
	}];