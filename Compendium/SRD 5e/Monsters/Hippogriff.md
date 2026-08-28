---
archivist: true
entity_type: monster
slug: srd-5e_monster_hippogriff
name: Hippogriff
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.001Z'
---

```monster
slug: srd-5e_monster_hippogriff
name: Hippogriff
edition: '2014'
source: SRD 5.1
size: large
type: monstrosity
ac:
  - ac: 11
hp:
  average: 19
  formula: 3d10+3
speed:
  walk: 40
  fly: 60
abilities:
  str: 17
  dex: 13
  con: 13
  int: 2
  wis: 12
  cha: 8
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - 'The hippogriff makes two attacks: one with its beak and one with its claws.'
  - name: Beak
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d10+STR` piercing damage.'
    attacks:
      - name: Beak attack
        type: melee
        bonus: 5
        damage: 1d10
        damage_type: thunder
        range:
          reach: 5
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` slashing damage.'
    attacks:
      - name: Claws attack
        type: melee
        bonus: 5
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Keen Sight
    entries:
      - The hippogriff has advantage on Wisdom (Perception) checks that rely on sight.
cr: '1'
skills:
  perception: 5
alignment: unaligned
passive_perception: 15
```
