---
archivist: true
entity_type: monster
slug: srd-2024_monster_werebear
name: Werebear
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.452Z'
---

```monster
slug: srd-2024_monster_werebear
name: Werebear
edition: '2024'
source: SRD 5.2
size: small
type: monstrosity
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 135
  formula: 18d8 + 54
speed:
  walk: 30
  climb: 30
abilities:
  str: 19
  dex: 10
  con: 17
  int: 11
  wis: 12
  cha: 12
senses:
  - darkvision 60 ft.
languages:
  - Common (can't speak in bear form)
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The werebear makes two attacks, using Handaxe or Rend in any combination. It can replace one attack with a Bite attack.
  - name: Shape-Shift
    entries:
      - The werebear shape-shifts into a Large bear-humanoid hybrid form or a Large bear, or it returns to its true humanoid form. Its game statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed.
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d12+STR` Piercing damage. If the target is a Humanoid, it is subjected to the following effect. Constitution Saving Throw: `dc:CON`. Failure: The target is cursed. If the cursed target drops to 0 Hit Points, it instead becomes a Werebear under the DM''s control and has 10 Hit Points. Success: The target is immune to this werebear''s curse for 24 hours.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 7
        damage: 2d12+4
        damage_type: piercing
        range:
          reach: 5
  - name: Handaxe
    entries:
      - 'Melee or Ranged Attack Roll: `atk:STR+PB`, reach 5 ft or range 20/60 ft. `dmg:3d6+STR` Slashing damage.'
    attacks:
      - name: Handaxe  attack
        type: ranged
        bonus: 7
        damage: 3d6+4
        damage_type: slashing
        range:
          reach: 5
          normal: 20
          long: 60
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d8+STR` Slashing damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 7
        damage: 2d8+4
        damage_type: slashing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '5'
saves:
  str: 4
  dex: 0
  con: 3
  int: 0
  wis: 1
  cha: 1
skills:
  perception: 7
alignment: neutral good
passive_perception: 17
```
