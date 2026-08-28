---
archivist: true
entity_type: monster
slug: srd-2024_monster_goblin-warrior
name: Goblin Warrior
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.427Z'
---

```monster
slug: srd-2024_monster_goblin-warrior
name: Goblin Warrior
edition: '2024'
source: SRD 5.2
size: small
type: fey
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 10
  formula: 3d6
speed:
  walk: 30
abilities:
  str: 8
  dex: 15
  con: 10
  int: 10
  wis: 8
  cha: 8
senses:
  - darkvision 60 ft.
languages:
  - Common
  - Goblin
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Scimitar
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d6+DEX` Slashing damage, plus `dmg:1d4` Slashing damage if the attack roll had Advantage.'
    attacks:
      - name: Scimitar attack
        type: melee
        bonus: 4
        damage: 1d6+2
        damage_type: slashing
        range:
          reach: 5
  - name: Nimble Escape
    entries:
      - The goblin takes the Disengage or Hide action.
  - name: Shortbow
    entries:
      - 'Ranged Attack Roll: `atk:DEX+PB`, range 80/320 ft. `dmg:1d6+DEX` Piercing damage, plus `dmg:1d4` Piercing damage if the attack roll had Advantage.'
    attacks:
      - name: Shortbow attack
        type: ranged
        bonus: 4
        damage: 1d6+2
        damage_type: piercing
        range:
          normal: 80
          long: 320
reactions: []
legendary_actions: []
traits: []
cr: '0.25'
saves:
  str: -1
  dex: 2
  con: 0
  int: 0
  wis: -1
  cha: -1
skills:
  stealth: 6
alignment: chaotic neutral
passive_perception: 9
```
