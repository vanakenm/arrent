---
archivist: true
entity_type: monster
slug: swarm-of-ravens
name: Swarm of Ravens
compendium: SRD
---

```monster
name: Swarm of Ravens
size: Medium
type: Beast
subtype: Swarm
alignment: unaligned
ac:
  - ac: 12
hp:
  average: 24
  formula: 7d8-7
speed:
  walk: 10
  fly: 50
abilities:
  str: 6
  dex: 14
  con: 8
  int: 3
  wis: 12
  cha: 6
passive_perception: 15
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
  - name: Swarm
    entries:
      - The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny raven. The swarm can't regain hit points or gain temporary hit points.
actions:
  - name: Beaks
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target in the swarm''s space. Hit: `damage:2d6` piercing damage, or `damage:1d6` piercing damage if the swarm has half of its hit points or fewer.'
```
