---
archivist: true
entity_type: monster
slug: srd-2024_monster_efreeti
name: Efreeti
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.417Z'
---

```monster
slug: srd-2024_monster_efreeti
name: Efreeti
edition: '2024'
source: SRD 5.2
size: large
type: elemental
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 212
  formula: 17d10 + 119
speed:
  walk: 40
  fly: 60
abilities:
  str: 22
  dex: 12
  con: 24
  int: 16
  wis: 15
  cha: 19
senses:
  - darkvision 120 ft.
languages:
  - Primordial (Ignan)
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - fire
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The efreeti makes three attacks, using Heated Blade or Hurl Flame in any combination.
  - name: Heated Blade
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d6+STR` Slashing damage plus `dmg:2d12` Fire damage.'
    attacks:
      - name: Heated Blade attack
        type: melee
        bonus: 10
        damage: 2d6+6
        damage_type: slashing
        range:
          reach: 5
  - name: Hurl Flame
    entries:
      - 'Ranged Attack Roll: `atk:+8`, range 120 ft. `dmg:7d6` Fire damage.'
    attacks:
      - name: Hurl Flame attack
        type: ranged
        bonus: 8
        damage: 7d6
        damage_type: fire
        range:
          normal: 120
  - name: Spellcasting
    entries:
      - |-
        The efreeti casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save `dc:CHA`):

        - **At Will:** Detect Magic, Elementalism
        - **1/Day Each:** Gaseous Form, Invisibility, Major Image, Plane Shift, Tongues, Wall of Fire
reactions: []
legendary_actions: []
traits:
  - name: Elemental Restoration
    entries:
      - If the efreeti dies outside the Elemental Plane of Fire, its body dissolves into ash, and it gains a new body in `dice:1d4` days, reviving with all its Hit Points somewhere on the Plane of Fire.
  - name: Magic Resistance
    entries:
      - The efreeti has Advantage on saving throws against spells and other magical effects.
  - name: Wishes
    entries:
      - The efreeti has a 30 percent chance of knowing the Wish spell. If the efreeti knows it, the efreeti can cast it only on behalf of a non-genie creature who communicates a wish in a way the efreeti can understand. If the efreeti casts the spell for the creature, the efreeti suffers none of the spell's stress. Once the efreeti has cast it three times, the efreeti can't do so again for 365 days.
cr: '11'
saves:
  str: 6
  dex: 1
  con: 7
  int: 3
  wis: 6
  cha: 8
alignment: neutral
passive_perception: 12
```
