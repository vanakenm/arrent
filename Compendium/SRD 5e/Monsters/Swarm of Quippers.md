---
archivist: true
entity_type: monster
slug: srd-5e_monster_swarm-of-quippers
name: Swarm of Quippers
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.019Z'
---

```monster
slug: srd-5e_monster_swarm-of-quippers
name: Swarm of Quippers
edition: '2014'
source: SRD 5.1
size: medium
type: beast
ac:
  - ac: 13
hp:
  average: 28
  formula: 8d8-8
speed:
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
      - 'Melee Weapon Attack: `atk:+5`, reach 0 ft., one creature in the swarm''s space. Hit: `dmg:4d6` piercing damage, or `dmg:2d6` piercing damage if the swarm has half of its hit points or fewer.'
    attacks:
      - name: Bites attack
        type: melee
        bonus: 5
        damage_type: thunder
reactions: []
legendary_actions: []
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
cr: '1'
alignment: unaligned
passive_perception: 8
```
