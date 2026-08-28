---
archivist: true
entity_type: monster
slug: srd-2024_monster_brass-dragon-wyrmling
name: Brass Dragon Wyrmling
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.411Z'
---

```monster
slug: srd-2024_monster_brass-dragon-wyrmling
name: Brass Dragon Wyrmling
edition: '2024'
source: SRD 5.2
size: medium
type: dragon
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 22
  formula: 4d8 + 4
speed:
  walk: 30
  fly: 60
  burrow: 15
abilities:
  str: 15
  dex: 10
  con: 13
  int: 10
  wis: 11
  cha: 13
senses:
  - darkvision 60 ft.
  - blindsight 10 ft.
languages:
  - Draconic
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - fire
condition_immunities: []
actions:
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d10+STR` Slashing damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 4
        damage: 1d10+2
        damage_type: slashing
        range:
          reach: 5
  - name: Fire Breath
    entries:
      - 'Dexterity Saving Throw: `dc:11`, each creature in a 20-foot-long, 5-foot-wide Line. Failure: `dmg:4d6` Fire damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Sleep Breath
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 15-foot Cone. Failure: The target has the Incapacitated condition until the end of its next turn, at which point it repeats the save. Second Failure The target has the Unconscious condition for 1 minute. This effect ends for the target if it takes damage or a creature within 5 feet of it takes an action to wake it.'
reactions: []
legendary_actions: []
traits: []
cr: '1'
saves:
  str: 2
  dex: 2
  con: 1
  int: 0
  wis: 2
  cha: 1
skills:
  perception: 4
  stealth: 2
alignment: chaotic good
passive_perception: 14
```
