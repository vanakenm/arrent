---
archivist: true
entity_type: monster
slug: invisible-stalker
name: Invisible Stalker
compendium: SRD
---

```monster
name: Invisible Stalker
size: Medium
type: Elemental
alignment: neutral
ac:
  - ac: 14
hp:
  average: 104
  formula: 16d8+32
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
skills:
  perception: 8
  stealth: 10
senses:
  - darkvision 60 ft.
passive_perception: 18
languages:
  - Auran
  - understands Common but doesn't speak it
damage_resistances:
  - bludgeoning
  - piercing
  - and slashing from nonmagical attacks
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
cr: '6'
traits:
  - name: Invisibility
    entries:
      - The stalker is invisible.
  - name: Faultless Tracker
    entries:
      - The stalker is given a quarry by its summoner. The stalker knows the direction and distance to its quarry as long as the two of them are on the same plane of existence. The stalker also knows the location of its summoner.
actions:
  - name: Multiattack
    entries:
      - The stalker makes two slam attacks.
  - name: Slam
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` bludgeoning damage.'
```
