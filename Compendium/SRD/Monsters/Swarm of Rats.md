---
archivist: true
entity_type: monster
slug: swarm-of-rats
name: Swarm of Rats
compendium: SRD
---

```monster
name: Swarm of Rats
size: Medium
type: Beast
subtype: Swarm
alignment: unaligned
ac:
  - ac: 10
hp:
  average: 24
  formula: 7d8-7
speed:
  walk: 30
abilities:
  str: 9
  dex: 11
  con: 9
  int: 2
  wis: 10
  cha: 3
senses:
  - darkvision 30 ft.
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
cr: 1/4
traits:
  - name: Keen Smell
    entries:
      - The swarm has advantage on Wisdom (Perception) checks that rely on smell.
  - name: Swarm
    entries:
      - The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny rat. The swarm can't regain hit points or gain temporary hit points.
actions:
  - name: Bites
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 0 ft., one target in the swarm''s space. Hit: `damage:2d6` piercing damage, or `damage:1d6` piercing damage if the swarm has half of its hit points or fewer.'
```
