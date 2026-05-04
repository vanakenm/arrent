---
archivist: true
entity_type: monster
slug: goblin
name: Goblin
compendium: SRD
---

```monster
name: Goblin
size: Small
type: Humanoid
subtype: goblinoid
alignment: neutral evil
ac:
  - ac: 15
    from:
      - leather armor, shield
hp:
  average: 7
  formula: 2d6
speed:
  walk: 30
abilities:
  str: 8
  dex: 14
  con: 10
  int: 10
  wis: 8
  cha: 8
skills:
  stealth: 6
senses:
  - darkvision 60 ft.
passive_perception: 9
languages:
  - Common
  - Goblin
cr: 1/4
traits:
  - name: Nimble Escape
    entries:
      - The goblin can take the Disengage or Hide action as a bonus action on each of its turns.
actions:
  - name: Scimitar
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: `damage:1d6+DEX` slashing damage.'
  - name: Shortbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX`, range 80/320 ft., one target. Hit: `damage:1d6+DEX` piercing damage.'
```
