---
archivist: true
entity_type: monster
slug: srd-2024_monster_treant
name: Treant
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.449Z'
---

```monster
slug: srd-2024_monster_treant
name: Treant
edition: '2024'
source: SRD 5.2
size: huge
type: plant
ac:
  - ac: 16
    from:
      - natural armor
hp:
  average: 138
  formula: 12d12 + 60
speed:
  walk: 30
abilities:
  str: 23
  dex: 8
  con: 21
  int: 12
  wis: 16
  cha: 12
senses: []
languages:
  - Common
  - Druidic
  - Elvish
  - Sylvan
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The treant makes two Slam attacks.
  - name: Slam
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:3d6+STR` Bludgeoning damage.'
    attacks:
      - name: Slam attack
        type: melee
        bonus: 10
        damage: 3d6+6
        damage_type: bludgeoning
        range:
          reach: 5
  - name: Hail of Bark
    entries:
      - 'Ranged Attack Roll: `atk:STR+PB`, range 180 ft. `dmg:4d10+STR` Piercing damage.'
    attacks:
      - name: Hail of Bark attack
        type: ranged
        bonus: 10
        damage: 4d10+6
        damage_type: piercing
        range:
          normal: 180
  - name: Animate Trees
    entries:
      - The treant magically animates up to two trees it can see within 60 feet of itself. Each tree uses the Treant stat block, except it has Intelligence and Charisma scores of 1, it can't speak, and it lacks this action. The tree takes its turn immediately after the treant on the same Initiative count, and it obeys the treant. A tree remains animate for 1 day or until it dies, the treant dies, or it is more than 120 feet from the treant. The tree then takes root if possible.
    recharge:
      type: per_day
      param: 1
reactions: []
legendary_actions: []
traits:
  - name: Siege Monster
    entries:
      - The treant deals double damage to objects and structures.
cr: '9'
saves:
  str: 6
  dex: -1
  con: 5
  int: 1
  wis: 3
  cha: 1
alignment: chaotic good
passive_perception: 13
```
