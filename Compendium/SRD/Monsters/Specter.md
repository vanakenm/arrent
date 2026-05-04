---
archivist: true
entity_type: monster
slug: specter
name: Specter
compendium: SRD
---

```monster
name: Specter
size: Medium
type: Undead
alignment: chaotic evil
ac:
  - ac: 12
hp:
  average: 22
  formula: 5d8
speed:
  walk: 0
  fly: 50
abilities:
  str: 1
  dex: 14
  con: 11
  int: 10
  wis: 10
  cha: 11
senses:
  - darkvision 60 ft.
passive_perception: 10
languages:
  - understands all languages it knew in life but can't speak
damage_resistances:
  - acid
  - cold
  - fire
  - lightning
  - thunder; bludgeoning
  - piercing
  - and slashing from nonmagical attacks
damage_immunities:
  - necrotic
  - poison
condition_immunities:
  - charmed
  - exhaustion
  - grappled
  - paralyzed
  - petrified
  - poisoned
  - prone
  - restrained
  - unconscious
cr: '1'
traits:
  - name: Incorporeal Movement
    entries:
      - The specter can move through other creatures and objects as if they were difficult terrain. It takes `damage:1d10` force damage if it ends its turn inside an object.
  - name: Sunlight Sensitivity
    entries:
      - While in sunlight, the specter has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.
actions:
  - name: Life Drain
    entries:
      - 'Melee Spell Attack: `atk:DEX`, reach 5 ft., one creature. Hit: `damage:3d6` necrotic damage. The target must succeed on a `dc:CON` Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.'
```
