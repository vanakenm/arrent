---
archivist: true
entity_type: monster
slug: srd-2024_monster_imp
name: Imp
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.431Z'
---

```monster
slug: srd-2024_monster_imp
name: Imp
edition: '2024'
source: SRD 5.2
size: small
type: fiend
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 21
  formula: 6d4 + 6
speed:
  walk: 20
  fly: 40
abilities:
  str: 6
  dex: 17
  con: 13
  int: 11
  wis: 12
  cha: 14
senses:
  - darkvision 120 ft.
languages:
  - Common
  - Infernal
damage_vulnerabilities: []
damage_resistances:
  - cold
damage_immunities:
  - fire
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Sting
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d6+DEX` Piercing damage plus `dmg:2d6` Poison damage.'
    attacks:
      - name: Sting attack
        type: melee
        bonus: 5
        damage: 1d6+3
        damage_type: piercing
        range:
          reach: 5
  - name: Shape-Shift
    entries:
      - The imp shape-shifts to resemble a rat (Speed 20 ft.), a raven (20 ft., Fly 60 ft.), or a spider (20 ft., Climb 20 ft.), or it returns to its true form. Its statistics are the same in each form, except for its Speed. Any equipment it is wearing or carrying isn't transformed.
  - name: Invisibility
    entries:
      - |-
        The imp casts Invisibility on itself, requiring no spell components and using Charisma as the spellcasting ability.

        - **At Will:** Invisibility
reactions: []
legendary_actions: []
traits:
  - name: Magic Resistance
    entries:
      - The imp has Advantage on saving throws against spells and other magical effects.
cr: '1'
saves:
  str: -2
  dex: 3
  con: 1
  int: 0
  wis: 1
  cha: 2
skills:
  deception: 4
  insight: 3
  stealth: 5
alignment: lawful evil
passive_perception: 11
```
