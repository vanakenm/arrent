---
archivist: true
entity_type: monster
slug: srd-5e_monster_swarm-of-poisonous-snakes
name: Swarm of Poisonous Snakes
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.019Z'
---

```monster
slug: srd-5e_monster_swarm-of-poisonous-snakes
name: Swarm of Poisonous Snakes
edition: '2014'
source: SRD 5.1
size: medium
type: beast
ac:
  - ac: 14
hp:
  average: 36
  formula: 8d8
speed:
  walk: 30
  swim: 30
abilities:
  str: 8
  dex: 18
  con: 11
  int: 1
  wis: 10
  cha: 3
senses:
  - blindsight 10 ft.
languages: []
damage_vulnerabilities: []
damage_resistances:
  - bludgeoning
  - piercing
  - slashing
damage_immunities: []
condition_immunities:
  - charmed
  - frightened
  - grappled
  - paralyzed
  - petrified
  - prone
  - restrained
  - stunned
actions:
  - name: Bites
    entries:
      - 'Melee Weapon Attack: `atk:+6`, reach 0 ft., one creature in the swarm''s space. Hit: `dmg:2d6` piercing damage, or `dmg:1d6` piercing damage if the swarm has half of its hit points or fewer. The target must make a `dc:CON` Constitution saving throw, taking `dmg:4d6` poison damage on a failed save, or half as much damage on a successful one.'
    attacks:
      - name: Bites attack
        type: melee
        bonus: 6
        damage_type: thunder
reactions: []
legendary_actions: []
traits:
  - name: Swarm
    entries:
      - The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny snake. The swarm can't regain hit points or gain temporary hit points.
cr: '2'
alignment: unaligned
passive_perception: 10
```
