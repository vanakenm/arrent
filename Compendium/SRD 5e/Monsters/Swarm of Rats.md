---
archivist: true
entity_type: monster
slug: srd-5e_monster_swarm-of-rats
name: Swarm of Rats
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.020Z'
---

```monster
slug: srd-5e_monster_swarm-of-rats
name: Swarm of Rats
edition: '2014'
source: SRD 5.1
size: medium
type: beast
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
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 0 ft., one target in the swarm''s space. Hit: `dmg:2d6` piercing damage, or `dmg:1d6` piercing damage if the swarm has half of its hit points or fewer.'
    attacks:
      - name: Bites attack
        type: melee
        bonus: 2
        damage_type: thunder
reactions: []
legendary_actions: []
traits:
  - name: Keen Smell
    entries:
      - The swarm has advantage on Wisdom (Perception) checks that rely on smell.
  - name: Swarm
    entries:
      - The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny rat. The swarm can't regain hit points or gain temporary hit points.
cr: '0.25'
alignment: unaligned
passive_perception: 10
```
