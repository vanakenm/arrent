---
archivist: true
entity_type: monster
slug: salamander
name: Salamander
compendium: SRD
---

```monster
name: Salamander
size: Large
type: Elemental
alignment: neutral evil
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 90
  formula: 12d10+24
speed:
  walk: 30
abilities:
  str: 18
  dex: 14
  con: 15
  int: 11
  wis: 10
  cha: 12
senses:
  - darkvision 60 ft.
passive_perception: 10
languages:
  - Ignan
damage_vulnerabilities:
  - cold
damage_resistances:
  - bludgeoning
  - piercing
  - and slashing from nonmagical attacks
damage_immunities:
  - fire
cr: '5'
traits:
  - name: Heated Body
    entries:
      - A creature that touches the salamander or hits it with a melee attack while within 5 ft. of it takes `damage:2d6` fire damage.
  - name: Heated Weapons
    entries:
      - Any metal melee weapon the salamander wields deals an extra `damage:1d6` fire damage on a hit (included in the attack).
actions:
  - name: Multiattack
    entries:
      - 'The salamander makes two attacks: one with its spear and one with its tail.'
  - name: Spear
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:STR`, reach 5 ft. or range 20/60 ft., one target. Hit: `damage:2d6+STR` piercing damage, or `damage:2d8+STR` piercing damage if used with two hands to make a melee attack, plus `damage:1d6` fire damage.'
  - name: Tail
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:2d6+STR` bludgeoning damage plus `damage:2d6` fire damage, and the target is grappled (escape `dc:14`). Until this grapple ends, the target is restrained, the salamander can automatically hit the target with its tail, and the salamander can''t make tail attacks against other targets.'
```
