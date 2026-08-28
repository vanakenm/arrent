---
archivist: true
entity_type: monster
slug: srd-5e_monster_rhinoceros
name: Rhinoceros
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.013Z'
---

```monster
slug: srd-5e_monster_rhinoceros
name: Rhinoceros
edition: '2014'
source: SRD 5.1
size: large
type: beast
ac:
  - ac: 11
    from:
      - natural armor
hp:
  average: 45
  formula: 6d10+12
speed:
  walk: 40
abilities:
  str: 21
  dex: 8
  con: 15
  int: 2
  wis: 12
  cha: 6
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Gore
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d8+STR` bludgeoning damage.'
    attacks:
      - name: Gore attack
        type: melee
        bonus: 7
        damage: 2d8
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Charge
    entries:
      - If the rhinoceros moves at least 20 ft. straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra `dmg:2d8` bludgeoning damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.
cr: '2'
alignment: unaligned
passive_perception: 11
```
