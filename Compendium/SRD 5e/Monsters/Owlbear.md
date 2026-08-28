---
archivist: true
entity_type: monster
slug: srd-5e_monster_owlbear
name: Owlbear
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.010Z'
---

```monster
slug: srd-5e_monster_owlbear
name: Owlbear
edition: '2014'
source: SRD 5.1
size: large
type: monstrosity
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 59
  formula: 7d10+21
speed:
  walk: 40
abilities:
  str: 20
  dex: 12
  con: 17
  int: 3
  wis: 12
  cha: 7
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - 'The owlbear makes two attacks: one with its beak and one with its claws.'
  - name: Beak
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one creature. Hit: `dmg:1d10+STR` piercing damage.'
    attacks:
      - name: Beak attack
        type: melee
        bonus: 7
        damage: 1d10
        damage_type: thunder
        range:
          reach: 5
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d8+STR` slashing damage.'
    attacks:
      - name: Claws attack
        type: melee
        bonus: 7
        damage: 2d8
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Keen Sight and Smell
    entries:
      - The owlbear has advantage on Wisdom (Perception) checks that rely on sight or smell.
cr: '3'
skills:
  perception: 3
alignment: unaligned
passive_perception: 13
```
