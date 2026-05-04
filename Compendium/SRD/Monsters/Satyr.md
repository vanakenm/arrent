---
archivist: true
entity_type: monster
slug: satyr
name: Satyr
compendium: SRD
---

```monster
name: Satyr
size: Medium
type: Fey
alignment: chaotic neutral
ac:
  - ac: 14
    from:
      - leather armor
hp:
  average: 31
  formula: 7d8
speed:
  walk: 40
abilities:
  str: 12
  dex: 16
  con: 11
  int: 12
  wis: 10
  cha: 14
skills:
  perception: 2
  performance: 6
  stealth: 5
passive_perception: 12
languages:
  - Common
  - Elvish
  - Sylvan
cr: 1/2
traits:
  - name: Magic Resistance
    entries:
      - The satyr has advantage on saving throws against spells and other magical effects.
actions:
  - name: Ram
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d4+STR` bludgeoning damage.'
  - name: Shortsword
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: `damage:1d6+DEX` piercing damage.'
  - name: Shortbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX`, range 80/320 ft., one target. Hit: `damage:1d6+DEX` piercing damage.'
  - name: 'Variant: Panpipes'
    entries:
      - Gentle Lullaby. The creature falls asleep and is unconscious for 1 minute. The effect ends if the creature takes damage or if someone takes an action to shake the creature awake.
```
