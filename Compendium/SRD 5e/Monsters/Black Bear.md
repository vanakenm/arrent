---
archivist: true
entity_type: monster
slug: srd-5e_monster_black-bear
name: Black Bear
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.981Z'
---

```monster
slug: srd-5e_monster_black-bear
name: Black Bear
edition: '2014'
source: SRD 5.1
size: medium
type: beast
ac:
  - ac: 11
    from:
      - natural armor
hp:
  average: 19
  formula: 3d8+6
speed:
  walk: 40
  climb: 30
abilities:
  str: 15
  dex: 10
  con: 14
  int: 2
  wis: 12
  cha: 7
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - 'The bear makes two attacks: one with its bite and one with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d6+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d4+STR` slashing damage.'
    attacks:
      - name: Claws attack
        type: melee
        bonus: 4
        damage: 2d4
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Keen Smell
    entries:
      - The bear has advantage on Wisdom (Perception) checks that rely on smell.
cr: '0.5'
alignment: unaligned
passive_perception: 13
```
