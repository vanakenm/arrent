---
archivist: true
entity_type: monster
slug: gladiator
name: Gladiator
compendium: SRD
---

```monster
name: Gladiator
size: Medium
type: Humanoid
subtype: any race
alignment: any alignment
ac:
  - ac: 16
    from:
      - studded leather, shield
hp:
  average: 112
  formula: 15d8+45
speed:
  walk: 30
abilities:
  str: 18
  dex: 15
  con: 16
  int: 10
  wis: 12
  cha: 15
saves:
  str: 7
  dex: 5
  con: 6
skills:
  athletics: 10
  intimidation: 5
passive_perception: 11
languages:
  - any one language (usually Common)
cr: '5'
traits:
  - name: Brave
    entries:
      - The gladiator has advantage on saving throws against being frightened.
  - name: Brute
    entries:
      - A melee weapon deals one extra die of its damage when the gladiator hits with it (included in the attack).
actions:
  - name: Multiattack
    entries:
      - The gladiator makes three melee attacks or two ranged attacks.
  - name: Spear
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:STR`, reach 5 ft. or range 20/60 ft., one target. Hit: `damage:2d6+STR` piercing damage, or `damage:2d8+STR` piercing damage if used with two hands to make a melee attack.'
  - name: Shield Bash
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one creature. Hit: `damage:2d4+STR` bludgeoning damage. If the target is a Medium or smaller creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.'
reactions:
  - name: Parry
    entries:
      - The gladiator adds 3 to its AC against one melee attack that would hit it. To do so, the gladiator must see the attacker and be wielding a melee weapon.
```
