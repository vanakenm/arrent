---
archivist: true
entity_type: monster
slug: swarm-of-bats
name: Swarm of Bats
compendium: SRD
---

```monster
name: Swarm of Bats
size: Medium
type: Beast
subtype: Swarm
alignment: unaligned
ac:
  - ac: 12
hp:
  average: 22
  formula: 5d8
speed:
  walk: 0
  fly: 30
abilities:
  str: 5
  dex: 15
  con: 10
  int: 2
  wis: 12
  cha: 4
senses:
  - blindsight 60 ft.
passive_perception: 11
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
cr: 1/4
traits:
  - name: Echolocation
    entries:
      - The swarm can't use its blindsight while deafened.
  - name: Keen Hearing
    entries:
      - The swarm has advantage on Wisdom (Perception) checks that rely on hearing.
  - name: Swarm
    entries:
      - The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny bat. The swarm can't regain hit points or gain temporary hit points.
actions:
  - name: Bites
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 0 ft., one creature in the swarm''s space. Hit: `damage:2d4` piercing damage, or `damage:1d4` piercing damage if the swarm has half of its hit points or fewer.'
```
