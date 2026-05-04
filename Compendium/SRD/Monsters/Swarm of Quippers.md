---
archivist: true
entity_type: monster
slug: swarm-of-quippers
name: Swarm of Quippers
compendium: SRD
---

```monster
name: Swarm of Quippers
size: Medium
type: Beast
subtype: Swarm
alignment: unaligned
ac:
  - ac: 13
hp:
  average: 28
  formula: 8d8-8
speed:
  walk: 0
  swim: 40
abilities:
  str: 13
  dex: 16
  con: 9
  int: 1
  wis: 7
  cha: 2
senses:
  - darkvision 60 ft.
passive_perception: 8
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
cr: '1'
traits:
  - name: Blood Frenzy
    entries:
      - The swarm has advantage on melee attack rolls against any creature that doesn't have all its hit points.
  - name: Swarm
    entries:
      - The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny quipper. The swarm can't regain hit points or gain temporary hit points.
  - name: Water Breathing
    entries:
      - The swarm can breathe only underwater.
actions:
  - name: Bites
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 0 ft., one creature in the swarm''s space. Hit: `damage:4d6` piercing damage, or `damage:2d6` piercing damage if the swarm has half of its hit points or fewer.'
```
