---
archivist: true
entity_type: monster
slug: srd-5e_monster_elk
name: Elk
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.990Z'
---

```monster
slug: srd-5e_monster_elk
name: Elk
edition: '2014'
source: SRD 5.1
size: large
type: beast
ac:
  - ac: 10
hp:
  average: 13
  formula: 2d10+2
speed:
  walk: 50
abilities:
  str: 16
  dex: 10
  con: 12
  int: 2
  wis: 10
  cha: 6
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Ram
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d6+STR` bludgeoning damage.'
    attacks:
      - name: Ram attack
        type: melee
        bonus: 5
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
  - name: Hooves
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one prone creature. Hit: `dmg:2d4+STR` bludgeoning damage.'
    attacks:
      - name: Hooves attack
        type: melee
        bonus: 5
        damage: 2d4
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Charge
    entries:
      - If the elk moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra `dmg:2d6` damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.
cr: '0.25'
alignment: unaligned
passive_perception: 10
```
