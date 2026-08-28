---
archivist: true
entity_type: monster
slug: srd-2024_monster_quasit
name: Quasit
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.440Z'
---

```monster
slug: srd-2024_monster_quasit
name: Quasit
edition: '2024'
source: SRD 5.2
size: small
type: fiend
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 25
  formula: 10d4
speed:
  walk: 40
abilities:
  str: 5
  dex: 17
  con: 10
  int: 7
  wis: 10
  cha: 10
senses:
  - darkvision 120 ft.
languages:
  - Abyssal
  - Common
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
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d4+DEX` Slashing damage, and the target has the Poisoned condition until the start of the quasit''s next turn.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 5
        damage: 1d4+3
        damage_type: slashing
        range:
          reach: 5
  - name: Scare
    entries:
      - 'Wisdom Saving Throw: `dc:WIS`, one creature within 20 feet. Failure: The target has the Frightened condition. At the end of each of its turns, the target repeats the save, ending the effect on itself on a success. After 1 minute, it succeeds automatically.'
    recharge:
      type: per_day
      param: 1
  - name: Shape-Shift
    entries:
      - The quasit shape-shifts to resemble a bat (Speed 10 ft., Fly 40 ft.), a centipede (40 ft., Climb 40 ft.), or a toad (40 ft., Swim 40 ft.), or it returns to its true form. Its game statistics are the same in each form, except for its Speed. Any equipment it is wearing or carrying isn't transformed.
  - name: Invisibility
    entries:
      - The quasit casts Invisibility on itself, requiring no spell components and using Charisma as the spellcasting ability.
reactions: []
legendary_actions: []
traits:
  - name: Magic Resistance
    entries:
      - The quasit has Advantage on saving throws against spells and other magical effects.
cr: '1'
saves:
  str: -3
  dex: 3
  con: 0
  int: -2
  wis: 0
  cha: 0
skills:
  stealth: 5
alignment: chaotic evil
passive_perception: 10
```
