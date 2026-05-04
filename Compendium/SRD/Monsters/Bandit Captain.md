---
archivist: true
entity_type: monster
slug: bandit-captain
name: Bandit Captain
compendium: SRD
---

```monster
name: Bandit Captain
size: Medium
type: Humanoid
subtype: any race
alignment: any non-lawful alignment
ac:
  - ac: 15
    from:
      - studded leather
hp:
  average: 65
  formula: 10d8+20
speed:
  walk: 30
abilities:
  str: 15
  dex: 16
  con: 14
  int: 14
  wis: 11
  cha: 14
saves:
  str: 4
  dex: 5
  wis: 2
skills:
  athletics: 4
  deception: 4
passive_perception: 10
languages:
  - any two languages
cr: '2'
actions:
  - name: Multiattack
    entries:
      - 'The captain makes three melee attacks: two with its scimitar and one with its dagger. Or the captain makes two ranged attacks with its daggers.'
  - name: Scimitar
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: `damage:1d6+DEX` slashing damage.'
  - name: Dagger
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:DEX`, reach 5 ft. or range 20/60 ft., one target. Hit: `damage:1d4+DEX` piercing damage.'
reactions:
  - name: Parry
    entries:
      - The captain adds 2 to its AC against one melee attack that would hit it. To do so, the captain must see the attacker and be wielding a melee weapon.
```
