---
archivist: true
entity_type: monster
slug: azer
name: Azer
compendium: SRD
---

```monster
name: Azer
size: Medium
type: Elemental
alignment: lawful neutral
ac:
  - ac: 17
    from:
      - natural armor, shield
hp:
  average: 39
  formula: 6d8+12
speed:
  walk: 30
abilities:
  str: 17
  dex: 12
  con: 15
  int: 12
  wis: 13
  cha: 10
saves:
  con: 4
passive_perception: 11
languages:
  - Ignan
damage_immunities:
  - fire
  - poison
condition_immunities:
  - poisoned
cr: '2'
traits:
  - name: Heated Body
    entries:
      - A creature that touches the azer or hits it with a melee attack while within 5 ft. of it takes `damage:1d10` fire damage.
  - name: Heated Weapons
    entries:
      - When the azer hits with a metal melee weapon, it deals an extra `damage:1d6` fire damage (included in the attack).
  - name: Illumination
    entries:
      - The azer sheds bright light in a 10-foot radius and dim light for an additional 10 ft..
actions:
  - name: Warhammer
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d8+STR` bludgeoning damage, or `damage:1d10+STR` bludgeoning damage if used with two hands to make a melee attack, plus `damage:1d6` fire damage.'
```
