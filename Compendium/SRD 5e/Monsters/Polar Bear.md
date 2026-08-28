---
archivist: true
entity_type: monster
slug: srd-5e_monster_polar-bear
name: Polar Bear
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.011Z'
---

```monster
slug: srd-5e_monster_polar-bear
name: Polar Bear
edition: '2014'
source: SRD 5.1
size: large
type: beast
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 42
  formula: 5d10+15
speed:
  walk: 40
  swim: 30
abilities:
  str: 20
  dex: 10
  con: 16
  int: 2
  wis: 13
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
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d8+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 7
        damage: 1d8
        damage_type: thunder
        range:
          reach: 5
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` slashing damage.'
    attacks:
      - name: Claws attack
        type: melee
        bonus: 7
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Keen Smell
    entries:
      - The bear has advantage on Wisdom (Perception) checks that rely on smell.
cr: '2'
skills:
  perception: 3
alignment: unaligned
passive_perception: 13
```
