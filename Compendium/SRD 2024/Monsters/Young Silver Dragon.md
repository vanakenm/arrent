---
archivist: true
entity_type: monster
slug: srd-2024_monster_young-silver-dragon
name: Young Silver Dragon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.456Z'
---

```monster
slug: srd-2024_monster_young-silver-dragon
name: Young Silver Dragon
edition: '2024'
source: SRD 5.2
size: large
type: dragon
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 168
  formula: 16d10 + 80
speed:
  walk: 40
  fly: 80
abilities:
  str: 23
  dex: 10
  con: 21
  int: 14
  wis: 11
  cha: 19
senses:
  - darkvision 120 ft.
  - blindsight 30 ft.
languages:
  - Common
  - Draconic
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - cold
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The dragon makes three Rend attacks. It can replace one attack with a use of Paralyzing Breath.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d8+STR` Slashing damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 10
        damage: 2d8+6
        damage_type: slashing
        range:
          reach: 10
  - name: Cold Breath
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 30-foot Cone. Failure: `dmg:11d8` Cold damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Paralyzing Breath
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 30-foot Cone. First Failure The target has the Incapacitated condition until the end of its next turn, when it repeats the save. Second Failure The target has the Paralyzed condition, and it repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically.'
reactions: []
legendary_actions: []
traits: []
cr: '9'
saves:
  str: 6
  dex: 4
  con: 5
  int: 2
  wis: 4
  cha: 4
skills:
  history: 6
  perception: 8
  stealth: 4
alignment: lawful good
passive_perception: 18
```
