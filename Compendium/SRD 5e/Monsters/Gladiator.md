---
archivist: true
entity_type: monster
slug: srd-5e_monster_gladiator
name: Gladiator
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.998Z'
---

```monster
slug: srd-5e_monster_gladiator
name: Gladiator
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
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
senses: []
languages:
  - any one language (usually Common)
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The gladiator makes three melee attacks or two ranged attacks.
  - name: Spear
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:STR+PB`, reach 5 ft. or range 20/60 ft., one target. Hit: `dmg:2d6+STR` piercing damage, or `dmg:2d8+STR` piercing damage if used with two hands to make a melee attack.'
    attacks:
      - name: Spear Melee attack
        type: ranged
        bonus: 7
        damage: 2d8
        damage_type: thunder
        range:
          reach: 5
          normal: 20
          long: 60
      - name: Spear Ranged attack
        type: ranged
        bonus: 7
        damage: 2d6
        damage_type: thunder
        range:
          normal: 20
          long: 60
  - name: Shield Bash
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one creature. Hit: `dmg:2d4+STR` bludgeoning damage. If the target is a Medium or smaller creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.'
    attacks:
      - name: Shield Bash attack
        type: melee
        bonus: 7
        damage: 2d4
        damage_type: thunder
        range:
          reach: 5
reactions:
  - name: Parry
    entries:
      - The gladiator adds 3 to its AC against one melee attack that would hit it. To do so, the gladiator must see the attacker and be wielding a melee weapon.
legendary_actions: []
traits:
  - name: Brave
    entries:
      - The gladiator has advantage on saving throws against being frightened.
  - name: Brute
    entries:
      - A melee weapon deals one extra die of its damage when the gladiator hits with it (included in the attack).
cr: '5'
saves:
  str: 7
  dex: 5
  con: 6
skills:
  athletics: 10
  intimidation: 5
alignment: any alignment
passive_perception: 11
```
