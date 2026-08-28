---
archivist: true
entity_type: monster
slug: srd-2024_monster_blood-hawk
name: Blood Hawk
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.411Z'
---

```monster
slug: srd-2024_monster_blood-hawk
name: Blood Hawk
edition: '2024'
source: SRD 5.2
size: small
type: beast
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 7
  formula: 2d6
speed:
  walk: 10
  fly: 60
abilities:
  str: 6
  dex: 14
  con: 10
  int: 3
  wis: 14
  cha: 5
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Beak
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d4+DEX` Piercing damage, or `dmg:1d8+DEX` Piercing damage if the target is Bloodied.'
    attacks:
      - name: Beak attack
        type: melee
        bonus: 4
        damage: 1d4+2
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Pack Tactics
    entries:
      - The hawk has Advantage on an attack roll against a creature if at least one of the hawk's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition.
cr: '0.125'
saves:
  str: -2
  dex: 2
  con: 0
  int: -4
  wis: 2
  cha: -3
skills:
  perception: 6
alignment: unaligned
passive_perception: 16
```
