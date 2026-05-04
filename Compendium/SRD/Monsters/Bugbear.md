---
archivist: true
entity_type: monster
slug: bugbear
name: Bugbear
compendium: SRD
---

```monster
name: Bugbear
size: Medium
type: Humanoid
subtype: goblinoid
alignment: chaotic evil
ac:
  - ac: 16
    from:
      - hide armor, shield
hp:
  average: 27
  formula: 5d8+5
speed:
  walk: 30
abilities:
  str: 15
  dex: 14
  con: 13
  int: 8
  wis: 11
  cha: 9
skills:
  stealth: 6
  survival: 2
senses:
  - darkvision 60 ft.
passive_perception: 10
languages:
  - Common
  - Goblin
cr: '1'
traits:
  - name: Brute
    entries:
      - A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack).
  - name: Surprise Attack
    entries:
      - If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra `damage:2d6` damage from the attack.
actions:
  - name: Morningstar
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d8+STR` piercing damage.'
  - name: Javelin
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:STR`, reach 5 ft. or range 30/120 ft., one target. Hit: `damage:2d6+STR` piercing damage in melee or `damage:1d6+STR` piercing damage at range.'
```
