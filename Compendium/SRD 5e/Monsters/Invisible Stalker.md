---
archivist: true
entity_type: monster
slug: srd-5e_monster_invisible-stalker
name: Invisible Stalker
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.003Z'
---

```monster
slug: srd-5e_monster_invisible-stalker
name: Invisible Stalker
edition: '2014'
source: SRD 5.1
size: medium
type: elemental
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
senses:
  - darkvision 60 ft.
languages:
  - Auran
  - understands Common but doesn't speak it
damage_vulnerabilities: []
damage_resistances:
  - bludgeoning
  - piercing
  - slashing
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
      - The stalker makes two slam attacks.
  - name: Slam
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` bludgeoning damage.'
    attacks:
      - name: Slam attack
        type: melee
        bonus: 6
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Faultless Tracker
    entries:
      - The stalker is given a quarry by its summoner. The stalker knows the direction and distance to its quarry as long as the two of them are on the same plane of existence. The stalker also knows the location of its summoner.
  - name: Invisibility
    entries:
      - The stalker is invisible.
cr: '6'
skills:
  perception: 8
  stealth: 10
alignment: neutral
passive_perception: 18
```
