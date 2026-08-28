---
archivist: true
entity_type: monster
slug: srd-2024_monster_frost-giant
name: Frost Giant
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.420Z'
---

```monster
slug: srd-2024_monster_frost-giant
name: Frost Giant
edition: '2024'
source: SRD 5.2
size: huge
type: giant
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 149
  formula: 13d12 + 65
speed:
  walk: 40
abilities:
  str: 23
  dex: 9
  con: 21
  int: 9
  wis: 10
  cha: 12
senses: []
languages:
  - Giant
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - cold
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The giant makes two attacks, using Frost Axe or Great Bow in any combination.
  - name: War Cry
    entries:
      - The giant or one creature of its choice that can see or hear it gains 16 (`dice:2d10+5`) Temporary Hit Points and has Advantage on attack rolls until the start of the giant's next turn.
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Frost Axe
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d12+STR` Slashing damage plus `dmg:2d8` Cold damage.'
    attacks:
      - name: Frost Axe attack
        type: melee
        bonus: 9
        damage: 2d12+6
        damage_type: slashing
        range:
          reach: 10
  - name: Great Bow
    entries:
      - 'Ranged Attack Roll: `atk:STR+PB`, range 150/600 ft. `dmg:2d10+STR` Piercing damage plus `dmg:2d6` Cold damage, and the target''s Speed decreases by 10 feet until the end of its next turn.'
    attacks:
      - name: Great Bow attack
        type: ranged
        bonus: 9
        damage: 2d10+6
        damage_type: piercing
        range:
          normal: 150
          long: 600
reactions: []
legendary_actions: []
traits: []
cr: '8'
saves:
  str: 6
  dex: -1
  con: 8
  int: -1
  wis: 3
  cha: 4
skills:
  athletics: 9
  perception: 3
alignment: neutral evil
passive_perception: 13
```
