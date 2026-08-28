---
archivist: true
entity_type: monster
slug: srd-2024_monster_wyvern
name: Wyvern
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.455Z'
---

```monster
slug: srd-2024_monster_wyvern
name: Wyvern
edition: '2024'
source: SRD 5.2
size: large
type: dragon
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 127
  formula: 15d10 + 45
speed:
  walk: 30
  fly: 80
abilities:
  str: 19
  dex: 10
  con: 16
  int: 5
  wis: 12
  cha: 6
senses:
  - darkvision 120 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The wyvern makes one Bite attack and one Sting attack.
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d8+STR` Piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 7
        damage: 2d8+4
        damage_type: piercing
        range:
          reach: 5
  - name: Sting
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d6+STR` Piercing damage plus `dmg:7d6` Poison damage, and the target has the Poisoned condition until the start of the wyvern''s next turn.'
    attacks:
      - name: Sting attack
        type: melee
        bonus: 7
        damage: 2d6+4
        damage_type: piercing
        range:
          reach: 10
reactions: []
legendary_actions: []
traits: []
cr: '6'
saves:
  str: 4
  dex: 0
  con: 3
  int: -3
  wis: 1
  cha: -2
skills:
  perception: 4
alignment: unaligned
passive_perception: 14
```
