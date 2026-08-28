---
archivist: true
entity_type: monster
slug: srd-2024_monster_young-brass-dragon
name: Young Brass Dragon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.455Z'
---

```monster
slug: srd-2024_monster_young-brass-dragon
name: Young Brass Dragon
edition: '2024'
source: SRD 5.2
size: large
type: dragon
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 110
  formula: 13d10 + 39
speed:
  walk: 40
  fly: 80
  burrow: 20
abilities:
  str: 19
  dex: 10
  con: 17
  int: 12
  wis: 11
  cha: 15
senses:
  - darkvision 120 ft.
  - blindsight 30 ft.
languages:
  - Common
  - Draconic
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - fire
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The dragon makes three Rend attacks. It can replace two attacks with a use of Sleep Breath.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d10+STR` Slashing damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 7
        damage: 2d10+4
        damage_type: slashing
        range:
          reach: 10
  - name: Fire Breath
    entries:
      - 'Dexterity Saving Throw: `dc:14`, each creature in a 40-foot-long, 5-foot-wide Line. Failure: `dmg:11d6` Fire damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Sleep Breath
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 30-foot Cone. Failure: The target has the Incapacitated condition until the end of its next turn, at which point it repeats the save. Second Failure The target has the Unconscious condition for 1 minute. This effect ends for the target if it takes damage or a creature within 5 feet of it takes an action to wake it.'
reactions: []
legendary_actions: []
traits: []
cr: '6'
saves:
  str: 4
  dex: 3
  con: 3
  int: 1
  wis: 3
  cha: 2
skills:
  perception: 6
  persuasion: 5
  stealth: 3
alignment: chaotic good
passive_perception: 16
```
