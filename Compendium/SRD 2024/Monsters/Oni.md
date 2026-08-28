---
archivist: true
entity_type: monster
slug: srd-2024_monster_oni
name: Oni
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.437Z'
---

```monster
slug: srd-2024_monster_oni
name: Oni
edition: '2024'
source: SRD 5.2
size: large
type: fiend
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 119
  formula: 14d10 + 42
speed:
  walk: 30
  fly: 30
abilities:
  str: 19
  dex: 11
  con: 16
  int: 14
  wis: 12
  cha: 15
senses:
  - darkvision 60 ft.
languages:
  - Common
  - Giant
damage_vulnerabilities: []
damage_resistances:
  - cold
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The oni makes two Claw or Nightmare Ray attacks. It can replace one attack with a use of Spellcasting.
  - name: Invisibility
    entries:
      - The oni casts Invisibility on itself, requiring no spell components and using the same spellcasting ability as Spellcasting.
  - name: Claw
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:1d12+STR` Slashing damage plus `dmg:2d8` Necrotic damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 7
        damage: 1d12+4
        damage_type: slashing
        range:
          reach: 10
  - name: Nightmare Ray
    entries:
      - 'Ranged Attack Roll: `atk:CHA+PB`, range 60 ft. `dmg:2d6+CHA` Psychic damage, and the target has the Frightened condition until the start of the oni''s next turn.'
    attacks:
      - name: Nightmare Ray attack
        type: ranged
        bonus: 5
        damage: 2d6+2
        damage_type: psychic
        range:
          normal: 60
  - name: Shape-Shift
    entries:
      - The oni shape-shifts into a Small or Medium Humanoid or a Large Giant, or it returns to its true form. Other than its size, its game statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed.
  - name: Spellcasting
    entries:
      - |-
        The oni casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save `dc:CHA`):

        - **At Will:**
        - **1/Day Each:** Charm Person, Darkness, Gaseous Form, Sleep
reactions: []
legendary_actions: []
traits:
  - name: Regeneration
    entries:
      - The oni regains 10 Hit Points at the start of each of its turns if it has at least 1 Hit Point.
cr: '7'
saves:
  str: 4
  dex: 3
  con: 6
  int: 2
  wis: 4
  cha: 5
skills:
  arcana: 5
  deception: 8
  perception: 4
alignment: lawful evil
passive_perception: 14
```
