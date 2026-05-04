---
archivist: true
entity_type: monster
slug: spy
name: Spy
compendium: SRD
---

```monster
name: Spy
size: Medium
type: Humanoid
subtype: any race
alignment: any alignment
ac:
  - ac: 12
hp:
  average: 27
  formula: 6d8
speed:
  walk: 30
abilities:
  str: 10
  dex: 15
  con: 10
  int: 12
  wis: 14
  cha: 16
skills:
  deception: 5
  insight: 4
  investigation: 5
  perception: 6
  persuasion: 5
  stealth: 4
passive_perception: 16
languages:
  - any two languages
cr: '1'
traits:
  - name: Cunning Action
    entries:
      - On each of its turns, the spy can use a bonus action to take the Dash, Disengage, or Hide action.
  - name: Sneak Attack (1/Turn)
    entries:
      - The spy deals an extra `damage:2d6` damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 ft. of an ally of the spy that isn't incapacitated and the spy doesn't have disadvantage on the attack roll.
actions:
  - name: Multiattack
    entries:
      - The spy makes two melee attacks.
  - name: Shortsword
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: `damage:1d6+DEX` piercing damage.'
  - name: Hand Crossbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX`, range 30/120 ft., one target. Hit: `damage:1d6+DEX` piercing damage.'
```
