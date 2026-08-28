---
archivist: true
entity_type: monster
slug: srd-2024_monster_wereboar
name: Wereboar
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.453Z'
---

```monster
slug: srd-2024_monster_wereboar
name: Wereboar
edition: '2024'
source: SRD 5.2
size: small
type: monstrosity
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 97
  formula: 15d8 + 30
speed:
  walk: 30
abilities:
  str: 17
  dex: 10
  con: 15
  int: 10
  wis: 11
  cha: 8
senses: []
languages:
  - Common (can't speak in boar form)
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The wereboar makes two attacks, using Javelin or Tusk in any combination. It can replace one attack with a Gore attack.
  - name: Shape-Shift
    entries:
      - The wereboar shape-shifts into a Medium boar-humanoid hybrid or a Small boar, or it returns to its true humanoid form. Its game statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed.
  - name: Gore
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d8+STR` Piercing damage. If the target is a Humanoid, it is subjected to the following effect. Constitution Saving Throw: `dc:CON`. Failure: The target is cursed. If the cursed target drops to 0 Hit Points, it instead becomes a Wereboar under the DM''s control and has 10 Hit Points. Success: The target is immune to this wereboar''s curse for 24 hours.'
    attacks:
      - name: Gore (Boar or Hybrid Form Only) attack
        type: melee
        bonus: 5
        damage: 2d8+3
        damage_type: piercing
        range:
          reach: 5
  - name: Javelin
    entries:
      - 'Melee or Ranged Attack Roll: `atk:STR+PB`, reach 5 ft. or range 30/120 ft. `dmg:3d6+STR` Piercing damage.'
    attacks:
      - name: Javelin (Humanoid or Hybrid Form Only) attack
        type: ranged
        bonus: 5
        damage: 3d6+3
        damage_type: piercing
        range:
          reach: 5
          normal: 30
          long: 120
  - name: Tusk
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d6+STR` Piercing damage. If the target is a Medium or smaller creature and the wereboar moved 20+ feet straight toward it immediately before the hit, the target takes an extra `dmg:2d6` Piercing damage and has the Prone condition.'
    attacks:
      - name: Tusk attack
        type: melee
        bonus: 5
        damage: 2d6+3
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '4'
saves:
  str: 3
  dex: 0
  con: 2
  int: 0
  wis: 0
  cha: -1
skills:
  perception: 2
alignment: neutral evil
passive_perception: 12
```
