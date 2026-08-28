---
archivist: true
entity_type: monster
slug: srd-2024_monster_giant-scorpion
name: Giant Scorpion
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.424Z'
---

```monster
slug: srd-2024_monster_giant-scorpion
name: Giant Scorpion
edition: '2024'
source: SRD 5.2
size: large
type: beast
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 52
  formula: 7d10 + 14
speed:
  walk: 40
abilities:
  str: 16
  dex: 13
  con: 15
  int: 1
  wis: 9
  cha: 3
senses:
  - blindsight 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The scorpion makes two Claw attacks and one Sting attack.
  - name: Claw
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d6+STR` Bludgeoning damage. If the target is a Large or smaller creature, it has the Grappled condition (escape `dc:STR`) from one of two claws.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 5
        damage: 1d6+3
        damage_type: bludgeoning
        range:
          reach: 5
  - name: Sting
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d8+STR` Piercing damage plus `dmg:2d10` Poison damage.'
    attacks:
      - name: Sting attack
        type: melee
        bonus: 5
        damage: 1d8+3
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '3'
saves:
  str: 3
  dex: 1
  con: 2
  int: -5
  wis: -1
  cha: -4
alignment: unaligned
passive_perception: 9
```
