---
archivist: true
entity_type: monster
slug: srd-2024_monster_succubus
name: Succubus
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.446Z'
---

```monster
slug: srd-2024_monster_succubus
name: Succubus
edition: '2024'
source: SRD 5.2
size: medium
type: fiend
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 71
  formula: 13d8 + 13
speed:
  walk: 30
  fly: 60
abilities:
  str: 8
  dex: 17
  con: 13
  int: 15
  wis: 12
  cha: 20
senses:
  - darkvision 60 ft.
languages:
  - Abyssal
  - Common
  - Infernal; telepathy 60 ft.
damage_vulnerabilities: []
damage_resistances:
  - cold
  - fire
  - poison
  - psychic
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The succubus makes one Fiendish Touch attack and uses Charm or Draining Kiss.
  - name: Shape-Shift
    entries:
      - The succubus shape-shifts to resemble a Medium or Small Humanoid or back into its true form. Its game statistics are the same in each form, except its Fly Speed is available only in its true form. Any equipment it's wearing or carrying isn't transformed.
  - name: Fiendish Touch
    entries:
      - 'Melee Attack Roll: `atk:CHA+PB`, reach 5 ft. `dmg:2d10+CHA` Psychic damage.'
    attacks:
      - name: Fiendish Touch attack
        type: melee
        bonus: 7
        damage: 2d10+5
        damage_type: psychic
        range:
          reach: 5
  - name: Charm
    entries:
      - The succubus casts Dominate Person (level 8 version), requiring no spell components and using Charisma as the spellcasting ability (spell save `dc:CHA`).
  - name: Draining Kiss
    entries:
      - 'Constitution Saving Throw: `dc:15`, one creature Charmed by the succubus within 5 feet. Failure: `dmg:3d8` Psychic damage. Success: Half damage. Failure or Success: The target''s Hit Point maximum decreases by an amount equal to the damage taken.'
reactions: []
legendary_actions: []
traits:
  - name: Incubus Form
    entries:
      - When the succubus finishes a Long Rest, it can shape-shift into an Incubus, using that stat block instead of this one.
cr: '4'
saves:
  str: -1
  dex: 3
  con: 1
  int: 2
  wis: 1
  cha: 5
skills:
  deception: 9
  insight: 5
  perception: 5
  persuasion: 9
  stealth: 7
alignment: neutral evil
passive_perception: 15
```
