---
archivist: true
entity_type: monster
slug: srd-2024_monster_tough-boss
name: Tough Boss
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.448Z'
---

```monster
slug: srd-2024_monster_tough-boss
name: Tough Boss
edition: '2024'
source: SRD 5.2
size: small
type: humanoid
ac:
  - ac: 16
    from:
      - natural armor
hp:
  average: 82
  formula: 11d8 + 33
speed:
  walk: 30
abilities:
  str: 17
  dex: 14
  con: 16
  int: 11
  wis: 10
  cha: 11
senses: []
languages:
  - Common plus one other language
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The tough makes two attacks, using Warhammer or Heavy Crossbow in any combination.
  - name: Warhammer
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d8+STR` Bludgeoning damage. If the target is a Large or smaller creature, the tough pushes the target up to 10 feet straight away from itself.'
    attacks:
      - name: Warhammer attack
        type: melee
        bonus: 5
        damage: 2d8+3
        damage_type: bludgeoning
        range:
          reach: 5
  - name: Heavy Crossbow
    entries:
      - 'Ranged Attack Roll: `atk:DEX+PB`, range 100/400 ft. `dmg:2d10+DEX` Piercing damage.'
    attacks:
      - name: Heavy Crossbow attack
        type: ranged
        bonus: 4
        damage: 2d10+2
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
cr: '4'
saves:
  str: 5
  dex: 2
  con: 5
  int: 0
  wis: 0
  cha: 2
alignment: neutral
passive_perception: 10
```
