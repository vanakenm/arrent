---
archivist: true
entity_type: monster
slug: srd-5e_monster_specter
name: Specter
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.017Z'
---

```monster
slug: srd-5e_monster_specter
name: Specter
edition: '2014'
source: SRD 5.1
size: medium
type: undead
ac:
  - ac: 12
hp:
  average: 22
  formula: 5d8
speed:
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
languages:
  - understands all languages it knew in life but can't speak
damage_vulnerabilities: []
damage_resistances:
  - acid
  - bludgeoning
  - cold
  - fire
  - lightning
  - piercing
  - slashing
  - thunder
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
actions:
  - name: Life Drain
    entries:
      - 'Melee Spell Attack: `atk:+4`, reach 5 ft., one creature. Hit: `dmg:3d6` necrotic damage. The target must succeed on a `dc:CON` Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.'
    attacks:
      - name: Life Drain attack
        type: melee
        bonus: 4
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Incorporeal Movement
    entries:
      - The specter can move through other creatures and objects as if they were difficult terrain. It takes `dmg:1d10` force damage if it ends its turn inside an object.
  - name: Sunlight Sensitivity
    entries:
      - While in sunlight, the specter has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.
cr: '1'
alignment: chaotic evil
passive_perception: 10
```
