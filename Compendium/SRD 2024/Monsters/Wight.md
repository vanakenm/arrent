---
archivist: true
entity_type: monster
slug: srd-2024_monster_wight
name: Wight
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.453Z'
---

```monster
slug: srd-2024_monster_wight
name: Wight
edition: '2024'
source: SRD 5.2
size: medium
type: undead
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 82
  formula: 11d8 + 33
speed:
  walk: 30
abilities:
  str: 15
  dex: 14
  con: 16
  int: 10
  wis: 13
  cha: 15
senses:
  - darkvision 60 ft.
languages:
  - Common plus one other language
damage_vulnerabilities: []
damage_resistances:
  - necrotic
damage_immunities:
  - poison
condition_immunities:
  - exhaustion
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The wight makes two attacks, using Necrotic Sword or Necrotic Bow in any combination. It can replace one attack with a use of Life Drain.
  - name: Necrotic Sword
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d8+STR` Slashing damage plus `dmg:1d8` Necrotic damage.'
    attacks:
      - name: Necrotic Sword attack
        type: melee
        bonus: 4
        damage: 1d8+2
        damage_type: slashing
        range:
          reach: 5
  - name: Necrotic Bow
    entries:
      - 'Ranged Attack Roll: `atk:DEX+PB`, range 150/600 ft. `dmg:1d8+DEX` Piercing damage plus `dmg:1d8` Necrotic damage.'
    attacks:
      - name: Necrotic Bow attack
        type: ranged
        bonus: 4
        damage: 1d8+2
        damage_type: piercing
        range:
          normal: 150
          long: 600
  - name: Life Drain
    entries:
      - 'Constitution Saving Throw: `dc:CON`, one creature within 5 feet. Failure: `dmg:1d8+STR` Necrotic damage, and the target''s Hit Point maximum decreases by an amount equal to the damage taken. A Humanoid slain by this attack rises 24 hours later as a Zombie under the wight''s control, unless the Humanoid is restored to life or its body is destroyed. The wight can have no more than twelve zombies under its control at a time.'
reactions: []
legendary_actions: []
traits:
  - name: Sunlight Sensitivity
    entries:
      - While in sunlight, the wight has Disadvantage on ability checks and attack rolls.
cr: '3'
saves:
  str: 2
  dex: 2
  con: 3
  int: 0
  wis: 1
  cha: 2
skills:
  perception: 3
  stealth: 4
alignment: neutral evil
passive_perception: 13
```
