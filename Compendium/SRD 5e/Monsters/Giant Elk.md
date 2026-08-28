---
archivist: true
entity_type: monster
slug: srd-5e_monster_giant-elk
name: Giant Elk
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.994Z'
---

```monster
slug: srd-5e_monster_giant-elk
name: Giant Elk
edition: '2014'
source: SRD 5.1
size: huge
type: beast
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 42
  formula: 5d12+10
speed:
  walk: 60
abilities:
  str: 19
  dex: 16
  con: 14
  int: 7
  wis: 14
  cha: 10
senses: []
languages:
  - Giant Elk
  - understands Common
  - Elvish
  - and Sylvan but can't speak
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Ram
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:2d6+STR` bludgeoning damage.'
    attacks:
      - name: Ram attack
        type: melee
        bonus: 6
        damage: 2d6
        damage_type: thunder
        range:
          reach: 10
  - name: Hooves
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one prone creature. Hit: `dmg:4d8+STR` bludgeoning damage.'
    attacks:
      - name: Hooves attack
        type: melee
        bonus: 6
        damage: 4d8
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Charge
    entries:
      - If the elk moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra `dmg:2d6` damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.
cr: '2'
skills:
  perception: 4
alignment: unaligned
passive_perception: 14
```
