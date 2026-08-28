---
archivist: true
entity_type: monster
slug: srd-2024_monster_stone-golem
name: Stone Golem
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.446Z'
---

```monster
slug: srd-2024_monster_stone-golem
name: Stone Golem
edition: '2024'
source: SRD 5.2
size: large
type: construct
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 220
  formula: 21d10 + 105
speed:
  walk: 30
abilities:
  str: 22
  dex: 9
  con: 20
  int: 3
  wis: 11
  cha: 1
senses:
  - darkvision 120 ft.
languages:
  - Understands Common plus two other languages but can't speak
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - poison
  - psychic
condition_immunities:
  - charmed
  - exhaustion
  - frightened
  - paralyzed
  - petrified
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The golem makes two attacks, using Slam or Force Bolt in any combination.
  - name: Slow
    entries:
      - The golem casts the Slow spell, requiring no spell components and using Constitution as the spellcasting ability (spell save `dc:CON`).
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Slam
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d8+STR` Bludgeoning damage plus `dmg:2d8` Force damage.'
    attacks:
      - name: Slam attack
        type: melee
        bonus: 10
        damage: 2d8+6
        damage_type: bludgeoning
        range:
          reach: 5
  - name: Force Bolt
    entries:
      - 'Ranged Attack Roll: `atk:+9`, range 120 ft. `dmg:4d10` Force damage.'
    attacks:
      - name: Force Bolt attack
        type: ranged
        bonus: 9
        damage: 4d10
        damage_type: force
        range:
          normal: 120
reactions: []
legendary_actions: []
traits:
  - name: Immutable Form
    entries:
      - The golem can't shape-shift.
  - name: Magic Resistance
    entries:
      - The golem has Advantage on saving throws against spells and other magical effects.
cr: '10'
saves:
  str: 6
  dex: -1
  con: 5
  int: -4
  wis: 0
  cha: -5
alignment: unaligned
passive_perception: 10
```
