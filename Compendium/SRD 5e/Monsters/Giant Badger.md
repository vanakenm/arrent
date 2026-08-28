---
archivist: true
entity_type: monster
slug: srd-5e_monster_giant-badger
name: Giant Badger
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.993Z'
---

```monster
slug: srd-5e_monster_giant-badger
name: Giant Badger
edition: '2014'
source: SRD 5.1
size: medium
type: beast
ac:
  - ac: 10
hp:
  average: 13
  formula: 2d8+4
speed:
  walk: 30
  burrow: 10
abilities:
  str: 13
  dex: 10
  con: 15
  int: 2
  wis: 12
  cha: 5
senses:
  - darkvision 30 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - 'The badger makes two attacks: one with its bite and one with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d6+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 3
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
        bonus: 3
        damage: 2d4
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Keen Smell
    entries:
      - The badger has advantage on Wisdom (Perception) checks that rely on smell.
cr: '0.25'
alignment: unaligned
passive_perception: 11
```
