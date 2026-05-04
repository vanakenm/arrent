---
archivist: true
entity_type: monster
slug: gargoyle
name: Gargoyle
compendium: SRD
---

```monster
name: Gargoyle
size: Medium
type: Elemental
alignment: chaotic evil
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 52
  formula: 7d8+21
speed:
  walk: 30
  fly: 60
abilities:
  str: 15
  dex: 11
  con: 16
  int: 6
  wis: 11
  cha: 7
senses:
  - darkvision 60 ft.
passive_perception: 10
languages:
  - Terran
damage_resistances:
  - bludgeoning
  - piercing
  - and slashing from nonmagical attacks not made with adamantine weapons
damage_immunities:
  - poison
condition_immunities:
  - exhaustion
  - petrified
  - poisoned
cr: '2'
traits:
  - name: False Appearance
    entries:
      - While the gargoyle remains motion less, it is indistinguishable from an inanimate statue.
actions:
  - name: Multiattack
    entries:
      - 'The gargoyle makes two attacks: one with its bite and one with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6+STR` piercing damage.'
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6+STR` slashing damage.'
```
