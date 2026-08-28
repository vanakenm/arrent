---
archivist: true
entity_type: monster
slug: srd-5e_monster_harpy
name: Harpy
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.000Z'
---

```monster
slug: srd-5e_monster_harpy
name: Harpy
edition: '2014'
source: SRD 5.1
size: medium
type: monstrosity
ac:
  - ac: 11
hp:
  average: 38
  formula: 7d8+7
speed:
  walk: 20
  fly: 40
abilities:
  str: 12
  dex: 13
  con: 12
  int: 7
  wis: 10
  cha: 13
senses: []
languages:
  - Common
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - 'The harpy makes two attacks: one with its claws and one with its club.'
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d4+STR` slashing damage.'
    attacks:
      - name: Claws attack
        type: melee
        bonus: 3
        damage: 2d4
        damage_type: thunder
        range:
          reach: 5
  - name: Club
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d4+STR` bludgeoning damage.'
    attacks:
      - name: Club attack
        type: melee
        bonus: 3
        damage: 1d4
        damage_type: thunder
        range:
          reach: 5
  - name: Luring Song
    entries:
      - |-
        The harpy sings a magical melody. Every humanoid and giant within 300 ft. of the harpy that can hear the song must succeed on a `dc:11` Wisdom saving throw or be charmed until the song ends. The harpy must take a bonus action on its subsequent turns to continue singing. It can stop singing at any time. The song ends if the harpy is incapacitated.
        While charmed by the harpy, a target is incapacitated and ignores the songs of other harpies. If the charmed target is more than 5 ft. away from the harpy, the must move on its turn toward the harpy by the most direct route. It doesn't avoid opportunity attacks, but before moving into damaging terrain, such as lava or a pit, and whenever it takes damage from a source other than the harpy, a target can repeat the saving throw. A creature can also repeat the saving throw at the end of each of its turns. If a creature's saving throw is successful, the effect ends on it.
        A target that successfully saves is immune to this harpy's song for the next 24 hours.
reactions: []
legendary_actions: []
traits: []
cr: '1'
alignment: chaotic evil
passive_perception: 10
```
