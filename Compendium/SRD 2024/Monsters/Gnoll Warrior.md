---
archivist: true
entity_type: monster
slug: srd-2024_monster_gnoll-warrior
name: Gnoll Warrior
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.426Z'
---

```monster
slug: srd-2024_monster_gnoll-warrior
name: Gnoll Warrior
edition: '2024'
source: SRD 5.2
size: medium
type: fiend
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 27
  formula: 6d8
speed:
  walk: 30
abilities:
  str: 14
  dex: 12
  con: 11
  int: 6
  wis: 10
  cha: 7
senses:
  - darkvision 60 ft.
languages:
  - Gnoll
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d6+STR` Piercing damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 4
        damage: 1d6+2
        damage_type: piercing
        range:
          reach: 5
  - name: Rampage
    entries:
      - Immediately after dealing damage to a creature that is already Bloodied, the gnoll moves up to half its Speed, and it makes one Rend attack.
    recharge:
      type: per_day
      param: 1
  - name: Bone Bow
    entries:
      - 'Ranged Attack Roll: `atk:DEX+PB`, range 150/600 ft. `dmg:1d10+DEX` Piercing damage.'
    attacks:
      - name: Bone Bow attack
        type: ranged
        bonus: 3
        damage: 1d10+1
        damage_type: piercing
        range:
          normal: 150
          long: 600
reactions: []
legendary_actions: []
traits: []
cr: '0.5'
saves:
  str: 2
  dex: 1
  con: 0
  int: -2
  wis: 0
  cha: -2
alignment: chaotic evil
passive_perception: 10
```
