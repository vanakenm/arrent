---
archivist: true
entity_type: monster
slug: winter-wolf
name: Winter Wolf
compendium: SRD
---

```monster
name: Winter Wolf
size: Large
type: Monstrosity
alignment: neutral evil
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 75
  formula: 10d10+20
speed:
  walk: 50
abilities:
  str: 18
  dex: 13
  con: 14
  int: 7
  wis: 12
  cha: 8
skills:
  perception: 5
  stealth: 3
passive_perception: 15
languages:
  - Common
  - Giant
  - Winter Wolf
damage_immunities:
  - cold
cr: '3'
traits:
  - name: Keen Hearing and Smell
    entries:
      - The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.
  - name: Pack Tactics
    entries:
      - The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft. of the creature and the ally isn't incapacitated.
  - name: Snow Camouflage
    entries:
      - The wolf has advantage on Dexterity (Stealth) checks made to hide in snowy terrain.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` piercing damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.'
  - name: Cold Breath (Recharge 5-6)
    entries:
      - The wolf exhales a blast of freezing wind in a 15-foot cone. Each creature in that area must make a `dc:12` Dexterity saving throw, taking `damage:4d8` cold damage on a failed save, or half as much damage on a successful one.
```
