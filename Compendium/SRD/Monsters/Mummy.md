---
archivist: true
entity_type: monster
slug: mummy
name: Mummy
compendium: SRD
---

```monster
name: Mummy
size: Medium
type: Undead
alignment: lawful evil
ac:
  - ac: 11
    from:
      - natural armor
hp:
  average: 58
  formula: 9d8+18
speed:
  walk: 20
abilities:
  str: 16
  dex: 8
  con: 15
  int: 6
  wis: 10
  cha: 12
saves:
  wis: 2
senses:
  - darkvision 60 ft.
passive_perception: 10
languages:
  - the languages it knew in life
damage_vulnerabilities:
  - fire
damage_resistances:
  - bludgeoning
  - piercing
  - and slashing from nonmagical attacks
damage_immunities:
  - necrotic
  - poison
condition_immunities:
  - charmed
  - exhaustion
  - frightened
  - paralyzed
  - poisoned
cr: '3'
actions:
  - name: Multiattack
    entries:
      - The mummy can use its Dreadful Glare and makes one attack with its rotting fist.
  - name: Rotting Fist
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` bludgeoning damage plus `damage:3d6` necrotic damage. If the target is a creature, it must succeed on a `dc:CON` Constitution saving throw or be cursed with mummy rot. The cursed target can''t regain hit points, and its hit point maximum decreases by 10 (`dice:3d6`) for every 24 hours that elapse. If the curse reduces the target''s hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic.'
  - name: Dreadful Glare
    entries:
      - The mummy targets one creature it can see within 60 ft. of it. If the target can see the mummy, it must succeed on a `dc:11` Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies (but not mummy lords) for the next 24 hours.
```
