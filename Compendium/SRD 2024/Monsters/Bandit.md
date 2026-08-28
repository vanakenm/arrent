---
archivist: true
entity_type: monster
slug: srd-2024_monster_bandit
name: Bandit
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.409Z'
---

```monster
slug: srd-2024_monster_bandit
name: Bandit
edition: '2024'
source: SRD 5.2
size: small
type: humanoid
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 11
  formula: 2d8 + 2
speed:
  walk: 30
abilities:
  str: 11
  dex: 12
  con: 12
  int: 10
  wis: 10
  cha: 10
senses: []
languages:
  - Common
  - Thieves' cant
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Scimitar
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d6+DEX` Slashing damage.'
    attacks:
      - name: Scimitar attack
        type: melee
        bonus: 3
        damage: 1d6+1
        damage_type: slashing
        range:
          reach: 5
  - name: Light Crossbow
    entries:
      - 'Ranged Attack Roll: `atk:DEX+PB`, range 80/320 ft. `dmg:1d8+DEX` Piercing damage.'
    attacks:
      - name: Light Crossbow attack
        type: ranged
        bonus: 3
        damage: 1d8+1
        damage_type: piercing
        range:
          normal: 80
          long: 320
reactions: []
legendary_actions: []
traits: []
cr: '0.125'
saves:
  str: 0
  dex: 1
  con: 1
  int: 0
  wis: 0
  cha: 0
alignment: neutral
passive_perception: 10
```
