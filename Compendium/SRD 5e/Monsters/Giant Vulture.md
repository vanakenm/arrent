---
archivist: true
entity_type: monster
slug: srd-5e_monster_giant-vulture
name: Giant Vulture
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.997Z'
---

```monster
slug: srd-5e_monster_giant-vulture
name: Giant Vulture
edition: '2014'
source: SRD 5.1
size: large
type: beast
ac:
  - ac: 10
hp:
  average: 22
  formula: 3d10+6
speed:
  walk: 10
  fly: 60
abilities:
  str: 15
  dex: 10
  con: 15
  int: 6
  wis: 12
  cha: 7
senses: []
languages:
  - understands Common but can't speak
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - 'The vulture makes two attacks: one with its beak and one with its talons.'
  - name: Beak
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d4+STR` piercing damage.'
    attacks:
      - name: Beak attack
        type: melee
        bonus: 4
        damage: 2d4
        damage_type: thunder
        range:
          reach: 5
  - name: Talons
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` slashing damage.'
    attacks:
      - name: Talons attack
        type: melee
        bonus: 4
        damage: 2d6
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
cr: '1'
skills:
  perception: 3
alignment: neutral evil
passive_perception: 13
```
