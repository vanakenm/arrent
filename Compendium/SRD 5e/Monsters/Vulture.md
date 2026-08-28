---
archivist: true
entity_type: monster
slug: srd-5e_monster_vulture
name: Vulture
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.023Z'
---

```monster
slug: srd-5e_monster_vulture
name: Vulture
edition: '2014'
source: SRD 5.1
size: medium
type: beast
ac:
  - ac: 10
hp:
  average: 5
  formula: 1d8+1
speed:
  walk: 10
  fly: 50
abilities:
  str: 7
  dex: 10
  con: 13
  int: 2
  wis: 12
  cha: 4
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Beak
    entries:
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one target. Hit: `dmg:1d4` piercing damage.'
    attacks:
      - name: Beak attack
        type: melee
        bonus: 2
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Keen Sight and Smell
    entries:
      - The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell.
  - name: Pack Tactics
    entries:
      - The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 ft. of the creature and the ally isn't incapacitated.
cr: '0'
skills:
  perception: 3
alignment: unaligned
passive_perception: 13
```
