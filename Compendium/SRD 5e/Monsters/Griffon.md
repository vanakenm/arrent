---
archivist: true
entity_type: monster
slug: srd-5e_monster_griffon
name: Griffon
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.999Z'
---

```monster
slug: srd-5e_monster_griffon
name: Griffon
edition: '2014'
source: SRD 5.1
size: large
type: monstrosity
ac:
  - ac: 12
hp:
  average: 59
  formula: 7d10+21
speed:
  walk: 30
  fly: 80
abilities:
  str: 18
  dex: 15
  con: 16
  int: 2
  wis: 13
  cha: 8
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
      - 'The griffon makes two attacks: one with its beak and one with its claws.'
  - name: Beak
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d8+STR` piercing damage.'
    attacks:
      - name: Beak attack
        type: melee
        bonus: 6
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
        bonus: 6
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Keen Sight
    entries:
      - The griffon has advantage on Wisdom (Perception) checks that rely on sight.
cr: '2'
skills:
  perception: 5
alignment: unaligned
passive_perception: 15
```
