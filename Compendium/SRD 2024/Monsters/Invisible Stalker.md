---
archivist: true
entity_type: monster
slug: srd-2024_monster_invisible-stalker
name: Invisible Stalker
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.432Z'
---

```monster
slug: srd-2024_monster_invisible-stalker
name: Invisible Stalker
edition: '2024'
source: SRD 5.2
size: large
type: elemental
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 97
  formula: 13d10 + 26
speed:
  walk: 50
  fly: 50
abilities:
  str: 16
  dex: 19
  con: 14
  int: 10
  wis: 15
  cha: 11
senses:
  - darkvision 60 ft.
languages:
  - Common
  - Primordial (Auran)
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - poison
condition_immunities:
  - exhaustion
  - grappled
  - paralyzed
  - petrified
  - poisoned
  - prone
  - restrained
  - unconscious
actions:
  - name: Multiattack
    entries:
      - The stalker makes three Wind Swipe attacks. It can replace one attack with a use of Vortex.
  - name: Wind Swipe
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:2d6+DEX` Force damage.'
    attacks:
      - name: Wind Swipe attack
        type: melee
        bonus: 7
        damage: 2d6+4
        damage_type: force
        range:
          reach: 5
  - name: Vortex
    entries:
      - 'Constitution Saving Throw: `dc:14`, one Large or smaller creature in the stalker''s space. Failure: `dmg:1d8+STR` Thunder damage, and the target has the Grappled condition (escape `dc:CON`). Until the grapple ends, the target can''t cast spells with a Verbal component and takes `dmg:2d6` Thunder damage at the start of each of the stalker''s turns.'
reactions: []
legendary_actions: []
traits:
  - name: Air Form
    entries:
      - The stalker can enter an enemy's space and stop there. It can move through a space as narrow as 1 inch without expending extra movement to do so.
  - name: Invisibility
    entries:
      - The stalker has the Invisible condition.
cr: '6'
saves:
  str: 3
  dex: 4
  con: 2
  int: 0
  wis: 2
  cha: 0
skills:
  perception: 8
  stealth: 10
alignment: neutral
passive_perception: 18
```
