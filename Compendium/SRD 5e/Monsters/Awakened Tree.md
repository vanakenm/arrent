---
archivist: true
entity_type: monster
slug: srd-5e_monster_awakened-tree
name: Awakened Tree
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.979Z'
---

```monster
slug: srd-5e_monster_awakened-tree
name: Awakened Tree
edition: '2014'
source: SRD 5.1
size: huge
type: plant
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 59
  formula: 7d12+14
speed:
  walk: 20
abilities:
  str: 19
  dex: 6
  con: 15
  int: 10
  wis: 10
  cha: 7
senses: []
languages:
  - one language known by its creator
damage_vulnerabilities:
  - fire
damage_resistances:
  - bludgeoning
  - piercing
damage_immunities: []
condition_immunities: []
actions:
  - name: Slam
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:3d6+STR` bludgeoning damage.'
    attacks:
      - name: Slam attack
        type: melee
        bonus: 6
        damage: 3d6
        damage_type: thunder
        range:
          reach: 10
reactions: []
legendary_actions: []
traits:
  - name: False Appearance
    entries:
      - While the tree remains motionless, it is indistinguishable from a normal tree.
cr: '2'
alignment: unaligned
passive_perception: 10
```
