---
archivist: true
entity_type: monster
slug: srd-2024_monster_djinni
name: Djinni
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.416Z'
---

```monster
slug: srd-2024_monster_djinni
name: Djinni
edition: '2024'
source: SRD 5.2
size: large
type: elemental
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 218
  formula: 19d10 + 114
speed:
  walk: 30
  fly: 90
abilities:
  str: 21
  dex: 15
  con: 22
  int: 15
  wis: 16
  cha: 20
senses:
  - darkvision 120 ft.
languages:
  - Primordial (Auran)
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - lightning
  - thunder
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The djinni makes three attacks, using Storm Blade or Storm Bolt in any combination.
  - name: Storm Blade
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 feet. `dmg:2d6+STR` Slashing damage plus `dmg:2d6` Lightning damage.'
  - name: Storm Bolt
    entries:
      - 'Ranged Attack Roll: `atk:+9`, range 120 feet. `dmg:3d8` Thunder damage. If the target is a Large or smaller creature, it has the Prone condition.'
  - name: Create Whirlwind
    entries:
      - 'The djinni conjures a whirlwind at a point it can see within 120 feet. The whirlwind fills a 20-foot-radius, 60-foot-high Cylinder [Area of Effect]|XPHB|Cylinder centered on that point. The whirlwind lasts until the djinni''s Concentration on it ends. The djinni can move the whirlwind up to 20 feet at the start of each of its turns. Whenever the whirlwind enters a creature''s space or a creature enters the whirlwind, that creature is subjected to the following effect. Strength Saving Throw: `dc:STR` (a creature makes this save only once per turn, and the djinni is unaffected). Failure: While in the whirlwind, the target has the Restrained condition and moves with the whirlwind. At the start of each of its turns, the Restrained target takes `dmg:6d6` Thunder damage. At the end of each of its turns, the target repeats the save, ending the effect on itself on a success.'
  - name: Spellcasting
    entries:
      - |-
        The djinni casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save `dc:CHA`):

        - **At Will:** Detect Evil and Good, Detect Magic
        - **2/Day Each:** Create Food and Water, Tongues, Wind Walk
        - **1/Day Each:** Creation, Gaseous Form, Invisibility, Major Image, Plane Shift
reactions: []
legendary_actions: []
traits:
  - name: Elemental Restoration
    entries:
      - If the djinni dies outside the Elemental Plane of Air, its body dissolves into mist, and it gains a new body in `dice:1d4` days, reviving with all its Hit Points somewhere on the Plane of Air.
  - name: Magic Resistance
    entries:
      - The djinni has Advantage on saving throws against spells and other magical effects.
  - name: Wishes
    entries:
      - The djinni has a 30 percent chance of knowing the Wish spell. If the djinni knows it, the djinni can cast it only on behalf of a non-genie creature who communicates a wish in a way the djinni can understand. If the djinni casts the spell for the creature, the djinni suffers none of the spell's stress. Once the djinni has cast it three times, the djinni can't do so again for 365 days.
cr: '11'
saves:
  str: 5
  dex: 6
  con: 6
  int: 2
  wis: 7
  cha: 5
alignment: chaotic good
passive_perception: 13
```
