---
archivist: true
entity_type: monster
slug: noble
name: Noble
compendium: SRD
---

```monster
name: Noble
size: Medium
type: Humanoid
subtype: any race
alignment: any alignment
ac:
  - ac: 15
    from:
      - breastplate
hp:
  average: 9
  formula: 2d8
speed:
  walk: 30
abilities:
  str: 11
  dex: 12
  con: 11
  int: 12
  wis: 14
  cha: 16
skills:
  deception: 5
  insight: 4
  persuasion: 5
passive_perception: 12
languages:
  - any two languages
cr: 1/8
actions:
  - name: Rapier
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: `damage:1d8+DEX` piercing damage.'
reactions:
  - name: Parry
    entries:
      - The noble adds 2 to its AC against one melee attack that would hit it. To do so, the noble must see the attacker and be wielding a melee weapon.
```
