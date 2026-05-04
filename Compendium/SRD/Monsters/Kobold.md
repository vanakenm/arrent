---
archivist: true
entity_type: monster
slug: kobold
name: Kobold
compendium: SRD
---

```monster
name: Kobold
size: Small
type: Humanoid
subtype: kobold
alignment: lawful evil
ac:
  - ac: 12
hp:
  average: 5
  formula: 2d6-2
speed:
  walk: 30
abilities:
  str: 7
  dex: 15
  con: 9
  int: 8
  wis: 7
  cha: 8
senses:
  - darkvision 60 ft.
passive_perception: 8
languages:
  - Common
  - Draconic
cr: 1/8
traits:
  - name: Sunlight Sensitivity
    entries:
      - While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.
  - name: Pack Tactics
    entries:
      - The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 ft. of the creature and the ally isn't incapacitated.
actions:
  - name: Dagger
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: `damage:1d4+DEX` piercing damage.'
  - name: Sling
    entries:
      - 'Ranged Weapon Attack: `atk:DEX`, range 30/120 ft., one target. Hit: `damage:1d4+DEX` bludgeoning damage.'
```
