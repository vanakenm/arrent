---
archivist: true
entity_type: monster
slug: srd-2024_monster_iron-golem
name: Iron Golem
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.432Z'
---

```monster
slug: srd-2024_monster_iron-golem
name: Iron Golem
edition: '2024'
source: SRD 5.2
size: large
type: construct
ac:
  - ac: 20
    from:
      - natural armor
hp:
  average: 252
  formula: 24d10 + 120
speed:
  walk: 30
abilities:
  str: 24
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
  - fire
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
      - The golem makes two attacks, using Bladed Arm or Fiery Bolt in any combination.
  - name: Bladed Arm
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:3d8+STR` Slashing damage plus `dmg:3d6` Fire damage.'
    attacks:
      - name: Bladed Arm attack
        type: melee
        bonus: 12
        damage: 3d8+7
        damage_type: slashing
        range:
          reach: 10
  - name: Fiery Bolt
    entries:
      - 'Ranged Attack Roll: `atk:+10`, range 120 ft. `dmg:8d8` Fire damage.'
    attacks:
      - name: Fiery Bolt attack
        type: ranged
        bonus: 10
        damage: 8d8
        damage_type: fire
        range:
          normal: 120
  - name: Poison Breath
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 60-foot Cone. Failure: `dmg:10d10` Poison damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 6
reactions: []
legendary_actions: []
traits:
  - name: Fire Absorption
    entries:
      - Whenever the golem is subjected to Fire damage, it regains a number of Hit Points equal to the Fire damage dealt.
  - name: Immutable Form
    entries:
      - The golem can't shape-shift.
  - name: Magic Resistance
    entries:
      - The golem has Advantage on saving throws against spells and other magical effects.
cr: '16'
saves:
  str: 7
  dex: -1
  con: 5
  int: -4
  wis: 0
  cha: -5
alignment: unaligned
passive_perception: 10
```
