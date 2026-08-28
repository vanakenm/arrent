---
archivist: true
entity_type: monster
slug: srd-2024_monster_swarm-of-ravens
name: Swarm of Ravens
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.447Z'
---

```monster
slug: srd-2024_monster_swarm-of-ravens
name: Swarm of Ravens
edition: '2024'
source: SRD 5.2
size: medium
type: beast
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 11
  formula: 2d8 + 2
speed:
  walk: 10
  fly: 50
abilities:
  str: 6
  dex: 14
  con: 12
  int: 5
  wis: 12
  cha: 6
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Beaks
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d6+DEX` Piercing damage, or `dmg:1d4` Piercing damage if the swarm is Bloodied.'
    attacks:
      - name: Beaks attack
        type: melee
        bonus: 4
        damage: 1d6+2
        damage_type: piercing
        range:
          reach: 5
  - name: Cacophony
    entries:
      - 'Wisdom Saving Throw: `dc:10`, one creature in the swarm''s space. Failure: The target has the Deafened condition until the start of the swarm''s next turn. While Deafened, the target also has Disadvantage on ability checks and attack rolls.'
    recharge:
      type: recharge_on_roll
      param: 6
reactions: []
legendary_actions: []
traits:
  - name: Swarm
    entries:
      - The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny raven. The swarm can't regain Hit Points or gain Temporary Hit Points.
cr: '0.25'
saves:
  str: -2
  dex: 2
  con: 1
  int: -3
  wis: 1
  cha: -2
skills:
  perception: 5
alignment: unaligned
passive_perception: 15
```
