---
archivist: true
entity_type: monster
slug: srd-5e_monster_swarm-of-ravens
name: Swarm of Ravens
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.020Z'
---

```monster
slug: srd-5e_monster_swarm-of-ravens
name: Swarm of Ravens
edition: '2014'
source: SRD 5.1
size: medium
type: beast
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
senses: []
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
  - name: Beaks
    entries:
      - 'Melee Weapon Attack: `atk:+4`, reach 5 ft., one target in the swarm''s space. Hit: `dmg:2d6` piercing damage, or `dmg:1d6` piercing damage if the swarm has half of its hit points or fewer.'
    attacks:
      - name: Beaks attack
        type: melee
        bonus: 4
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Swarm
    entries:
      - The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny raven. The swarm can't regain hit points or gain temporary hit points.
cr: '0.25'
alignment: unaligned
passive_perception: 15
```
