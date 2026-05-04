---
archivist: true
entity_type: monster
slug: grick
name: Grick
compendium: SRD
---

```monster
name: Grick
size: Medium
type: Monstrosity
alignment: neutral
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 27
  formula: 6d8
speed:
  walk: 30
  climb: 30
abilities:
  str: 14
  dex: 14
  con: 11
  int: 3
  wis: 14
  cha: 5
senses:
  - darkvision 60 ft.
passive_perception: 12
damage_resistances:
  - bludgeoning
  - piercing
  - and slashing from nonmagical attacks
cr: '2'
traits:
  - name: Stone Camouflage
    entries:
      - The grick has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.
actions:
  - name: Multiattack
    entries:
      - The grick makes one attack with its tentacles. If that attack hits, the grick can make one beak attack against the same target.
  - name: Tentacles
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` slashing damage.'
  - name: Beak
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6+STR` piercing damage.'
```
