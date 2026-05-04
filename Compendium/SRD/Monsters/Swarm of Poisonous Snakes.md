---
archivist: true
entity_type: monster
slug: swarm-of-poisonous-snakes
name: Swarm of Poisonous Snakes
compendium: SRD
---

```monster
name: Swarm of Poisonous Snakes
size: Medium
type: Beast
subtype: Swarm
alignment: unaligned
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
passive_perception: 10
damage_resistances:
  - bludgeoning
  - piercing
  - slashing
condition_immunities:
  - charmed
  - frightened
  - grappled
  - paralyzed
  - petrified
  - prone
  - restrained
  - stunned
cr: '2'
traits:
  - name: Swarm
    entries:
      - The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny snake. The swarm can't regain hit points or gain temporary hit points.
actions:
  - name: Bites
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 0 ft., one creature in the swarm''s space. Hit: `damage:2d6` piercing damage, or `damage:1d6` piercing damage if the swarm has half of its hit points or fewer. The target must make a `dc:CON` Constitution saving throw, taking `damage:4d6` poison damage on a failed save, or half as much damage on a successful one.'
```
