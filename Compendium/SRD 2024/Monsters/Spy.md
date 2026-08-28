---
archivist: true
entity_type: monster
slug: srd-2024_monster_spy
name: Spy
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.445Z'
---

```monster
slug: srd-2024_monster_spy
name: Spy
edition: '2024'
source: SRD 5.2
size: small
type: humanoid
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 27
  formula: 6d8
speed:
  walk: 30
  climb: 30
abilities:
  str: 10
  dex: 15
  con: 10
  int: 12
  wis: 14
  cha: 16
senses: []
languages:
  - Common plus one other language
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Shortsword
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d6+DEX` Piercing damage plus `dmg:2d6` Poison damage.'
    attacks:
      - name: Shortsword attack
        type: melee
        bonus: 4
        damage: 1d6+2
        damage_type: piercing
        range:
          reach: 5
  - name: Cunning Action
    entries:
      - The spy takes the Dash, Disengage, or Hide action.
  - name: Hand Crossbow
    entries:
      - 'Ranged Attack Roll: `atk:DEX+PB`, range 30/120 ft. `dmg:1d6+DEX` Piercing damage plus `dmg:2d6` Poison damage.'
    attacks:
      - name: Hand Crossbow attack
        type: ranged
        bonus: 4
        damage: 1d6+2
        damage_type: piercing
        range:
          normal: 30
          long: 120
reactions: []
legendary_actions: []
traits: []
cr: '1'
saves:
  str: 0
  dex: 2
  con: 0
  int: 1
  wis: 2
  cha: 3
skills:
  deception: 5
  insight: 4
  investigation: 5
  perception: 6
  sleight_of_hand: 4
  stealth: 6
alignment: neutral
passive_perception: 16
```
