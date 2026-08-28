---
archivist: true
entity_type: monster
slug: srd-2024_monster_tough
name: Tough
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.448Z'
---

```monster
slug: srd-2024_monster_tough
name: Tough
edition: '2024'
source: SRD 5.2
size: small
type: humanoid
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 32
  formula: 5d8 + 10
speed:
  walk: 30
abilities:
  str: 15
  dex: 12
  con: 14
  int: 10
  wis: 10
  cha: 11
senses: []
languages:
  - Common
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Mace
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d6+STR` Bludgeoning damage.'
    attacks:
      - name: Mace attack
        type: melee
        bonus: 4
        damage: 1d6+2
        damage_type: bludgeoning
        range:
          reach: 5
  - name: Heavy Crossbow
    entries:
      - 'Ranged Attack Roll: `atk:DEX+PB`, range 100/400 ft. `dmg:1d10+DEX` Piercing damage.'
    attacks:
      - name: Heavy Crossbow attack
        type: ranged
        bonus: 3
        damage: 1d10+1
        damage_type: piercing
        range:
          normal: 100
          long: 400
reactions: []
legendary_actions: []
traits:
  - name: Pack Tactics
    entries:
      - The tough has Advantage on an attack roll against a creature if at least one of the tough's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition.
cr: '0.5'
saves:
  str: 2
  dex: 1
  con: 2
  int: 0
  wis: 0
  cha: 0
alignment: neutral
passive_perception: 10
```
