---
archivist: true
entity_type: monster
slug: hobgoblin
name: Hobgoblin
compendium: SRD
---

```monster
name: Hobgoblin
size: Medium
type: Humanoid
subtype: goblinoid
alignment: lawful evil
ac:
  - ac: 18
    from:
      - chain mail, shield
hp:
  average: 11
  formula: 2d8+2
speed:
  walk: 30
abilities:
  str: 13
  dex: 12
  con: 12
  int: 10
  wis: 10
  cha: 9
senses:
  - darkvision 60 ft.
passive_perception: 10
languages:
  - Common
  - Goblin
cr: 1/2
traits:
  - name: Martial Advantage
    entries:
      - Once per turn, the hobgoblin can deal an extra `damage:2d6` damage to a creature it hits with a weapon attack if that creature is within 5 ft. of an ally of the hobgoblin that isn't incapacitated.
actions:
  - name: Longsword
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d8+STR` slashing damage, or `damage:1d10+STR` slashing damage if used with two hands.'
  - name: Longbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX`, range 150/600 ft., one target. Hit: `damage:1d8+DEX` piercing damage.'
```
