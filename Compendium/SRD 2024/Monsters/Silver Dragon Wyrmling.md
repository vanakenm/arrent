---
archivist: true
entity_type: monster
slug: srd-2024_monster_silver-dragon-wyrmling
name: Silver Dragon Wyrmling
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.443Z'
---

```monster
slug: srd-2024_monster_silver-dragon-wyrmling
name: Silver Dragon Wyrmling
edition: '2024'
source: SRD 5.2
size: medium
type: dragon
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 45
  formula: 6d8 + 18
speed:
  walk: 30
  fly: 60
abilities:
  str: 19
  dex: 10
  con: 17
  int: 12
  wis: 11
  cha: 15
senses:
  - darkvision 60 ft.
  - blindsight 10 ft.
languages:
  - Draconic
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - cold
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The dragon makes two Rend attacks.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d10+STR` Piercing damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 6
        damage: 1d10+4
        damage_type: piercing
        range:
          reach: 5
  - name: Cold Breath
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 15-foot Cone. Failure: `dmg:4d8` Cold damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Paralyzing Breath
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 15-foot Cone. First Failure The target has the Incapacitated condition until the end of its next turn, when it repeats the save. Second Failure The target has the Paralyzed condition, and it repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically.'
reactions: []
legendary_actions: []
traits: []
cr: '2'
saves:
  str: 4
  dex: 2
  con: 3
  int: 1
  wis: 2
  cha: 2
skills:
  perception: 4
  stealth: 2
alignment: lawful good
passive_perception: 14
```
