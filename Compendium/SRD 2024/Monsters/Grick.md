---
archivist: true
entity_type: monster
slug: srd-2024_monster_grick
name: Grick
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.428Z'
---

```monster
slug: srd-2024_monster_grick
name: Grick
edition: '2024'
source: SRD 5.2
size: medium
type: aberration
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 54
  formula: 12d8
speed:
  walk: 30
  climb: 30
abilities:
  str: 14
  dex: 14
  con: 11
  int: 3
  wis: 14
  cha: 5
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The grick makes one Beak attack and one Tentacles attack.
  - name: Beak
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d6+STR` Piercing damage.'
    attacks:
      - name: Beak attack
        type: melee
        bonus: 4
        damage: 2d6+2
        damage_type: piercing
        range:
          reach: 5
  - name: Tentacles
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d10+STR` Slashing damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape `dc:DEX`) from all four tentacles.'
    attacks:
      - name: Tentacles attack
        type: melee
        bonus: 4
        damage: 1d10+2
        damage_type: slashing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '2'
saves:
  str: 2
  dex: 2
  con: 0
  int: -4
  wis: 2
  cha: -3
skills:
  stealth: 4
alignment: unaligned
passive_perception: 12
```
