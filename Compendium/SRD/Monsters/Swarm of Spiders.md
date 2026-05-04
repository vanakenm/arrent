---
archivist: true
entity_type: monster
slug: swarm-of-spiders
name: Swarm of Spiders
compendium: SRD
---

```monster
name: Swarm of Spiders
size: Medium
type: Beast
subtype: Swarm
alignment: unaligned
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 22
  formula: 5d8
speed:
  walk: 20
  climb: 20
abilities:
  str: 3
  dex: 13
  con: 10
  int: 1
  wis: 7
  cha: 1
senses:
  - blindsight 10 ft.
passive_perception: 8
damage_resistances:
  - bludgeoning
  - piercing
  - slashing
condition_immunities:
  - charmed
  - frightened
  - paralyzed
  - petrified
  - prone
  - restrained
  - stunned
cr: 1/2
traits:
  - name: Swarm
    entries:
      - The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points.
  - name: Spider Climb
    entries:
      - The swarm can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.
  - name: Web Sense
    entries:
      - While in contact with a web, the swarm knows the exact location of any other creature in contact with the same web.
  - name: Web Walker
    entries:
      - The swarm ignores movement restrictions caused by webbing.
actions:
  - name: Bites
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 0 ft., one target in the swarm''s space. Hit: `damage:4d4` piercing damage, or `damage:2d4` piercing damage if the swarm has half of its hit points or fewer.'
```
