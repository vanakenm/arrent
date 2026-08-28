---
archivist: true
entity_type: monster
slug: srd-2024_monster_hezrou
name: Hezrou
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.429Z'
---

```monster
slug: srd-2024_monster_hezrou
name: Hezrou
edition: '2024'
source: SRD 5.2
size: large
type: fiend
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 157
  formula: 15d10 + 75
speed:
  walk: 30
abilities:
  str: 19
  dex: 17
  con: 20
  int: 5
  wis: 12
  cha: 13
senses:
  - darkvision 120 ft.
languages:
  - Abyssal; telepathy 120 ft.
damage_vulnerabilities: []
damage_resistances:
  - cold
  - fire
  - lightning
damage_immunities:
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The hezrou makes three Rend attacks.
  - name: Leap
    entries:
      - The hezrou jumps up to 30 feet by spending 10 feet of movement.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d4+STR` Slashing damage plus `dmg:2d8` Poison damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 7
        damage: 1d4+4
        damage_type: slashing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Demonic Restoration
    entries:
      - If the hezrou dies outside the Abyss, its body dissolves into ichor, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Abyss.
  - name: Magic Resistance
    entries:
      - The hezrou has Advantage on saving throws against spells and other magical effects.
  - name: Stench
    entries:
      - 'Constitution Saving Throw: `dc:CON`, any creature that starts its turn in a 10-foot Emanation originating from the hezrou. Failure: The target has the Poisoned condition until the start of its next turn.'
cr: '8'
saves:
  str: 7
  dex: 3
  con: 8
  int: -3
  wis: 4
  cha: 1
alignment: chaotic evil
passive_perception: 11
```
