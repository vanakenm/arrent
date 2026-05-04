---
archivist: true
entity_type: monster
slug: wight
name: Wight
compendium: SRD
---

```monster
name: Wight
size: Medium
type: Undead
alignment: neutral evil
ac:
  - ac: 14
    from:
      - studded leather
hp:
  average: 45
  formula: 6d8+18
speed:
  walk: 30
abilities:
  str: 15
  dex: 14
  con: 16
  int: 10
  wis: 13
  cha: 15
skills:
  perception: 3
  stealth: 4
senses:
  - darkvision 60 ft.
passive_perception: 13
languages:
  - the languages it knew in life
damage_immunities:
  - necrotic; bludgeoning
  - piercing
  - and slashing from nonmagical attacks not made with silvered weapons
condition_immunities:
  - poisoned
cr: '3'
traits:
  - name: Sunlight Sensitivity
    entries:
      - While in sunlight, the wight has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.
actions:
  - name: Multiattack
    entries:
      - The wight makes two longsword attacks or two longbow attacks. It can use its Life Drain in place of one longsword attack.
  - name: Life Drain
    entries:
      - |-
        Melee Weapon Attack: `atk:STR`, reach 5 ft., one creature. Hit: `damage:1d6+STR` necrotic damage. The target must succeed on a `dc:CON` Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.
        A humanoid slain by this attack rises 24 hours later as a zombie under the wight's control, unless the humanoid is restored to life or its body is destroyed. The wight can have no more than twelve zombies under its control at one time.
  - name: Longsword
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d8+STR` slashing damage, or `damage:1d10+STR` slashing damage if used with two hands.'
  - name: Longbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX`, range 150/600 ft., one target. Hit: `damage:1d8+DEX` piercing damage.'
```
