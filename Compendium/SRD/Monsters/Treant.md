---
archivist: true
entity_type: monster
slug: treant
name: Treant
compendium: SRD
---

```monster
name: Treant
size: Huge
type: Plant
alignment: chaotic good
ac:
  - ac: 16
    from:
      - natural armor
hp:
  average: 138
  formula: 12d12+60
speed:
  walk: 30
abilities:
  str: 23
  dex: 8
  con: 21
  int: 12
  wis: 16
  cha: 12
passive_perception: 13
languages:
  - Common
  - Druidic
  - Elvish
  - Sylvan
damage_vulnerabilities:
  - fire
damage_resistances:
  - bludgeoning
  - piercing
cr: '9'
traits:
  - name: False Appearance
    entries:
      - While the treant remains motionless, it is indistinguishable from a normal tree.
  - name: Siege Monster
    entries:
      - The treant deals double damage to objects and structures.
actions:
  - name: Multiattack
    entries:
      - The treant makes two slam attacks.
  - name: Slam
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:3d6+STR` bludgeoning damage.'
  - name: Rock
    entries:
      - 'Ranged Weapon Attack: `atk:STR`, range 60/180 ft., one target. Hit: `damage:4d10+STR` bludgeoning damage.'
  - name: Animate Trees (1/Day)
    entries:
      - The treant magically animates one or two trees it can see within 60 feet of it. These trees have the same statistics as a treant, except they have Intelligence and Charisma scores of 1, they can't speak, and they have only the Slam action option. An animated tree acts as an ally of the treant. The tree remains animate for 1 day or until it dies; until the treant dies or is more than 120 feet from the tree; or until the treant takes a bonus action to turn it back into an inanimate tree. The tree then takes root if possible.
```
