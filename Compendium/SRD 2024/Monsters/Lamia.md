---
archivist: true
entity_type: monster
slug: srd-2024_monster_lamia
name: Lamia
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.433Z'
---

```monster
slug: srd-2024_monster_lamia
name: Lamia
edition: '2024'
source: SRD 5.2
size: large
type: fiend
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 97
  formula: 13d10 + 26
speed:
  walk: 40
abilities:
  str: 16
  dex: 13
  con: 15
  int: 14
  wis: 15
  cha: 16
senses:
  - darkvision 60 ft.
languages:
  - Abyssal
  - Common
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The lamia makes two Claw attacks. It can replace one attack with a use of Corrupting Touch.
  - name: Leap
    entries:
      - The lamia jumps up to 30 feet by spending 10 feet of movement.
  - name: Claw
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d8+STR` Slashing damage plus `dmg:2d6` Psychic damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 5
        damage: 1d8+3
        damage_type: slashing
        range:
          reach: 5
  - name: Corrupting Touch
    entries:
      - 'Wisdom Saving Throw: `dc:13`, one creature the lamia can see within 5 feet. Failure: `dmg:3d8` Psychic damage, and the target is cursed for 1 hour. Until the curse ends, the target has the Charmed and Poisoned conditions.'
  - name: Spellcasting
    entries:
      - |-
        The lamia casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save `dc:CHA`):

        - **At Will:** Disguise Self, Minor Illusion
        - **1/Day Each:** Geas, Major Image, Scrying
reactions: []
legendary_actions: []
traits: []
cr: '4'
saves:
  str: 3
  dex: 1
  con: 2
  int: 2
  wis: 2
  cha: 3
skills:
  deception: 7
  insight: 4
  stealth: 5
alignment: chaotic evil
passive_perception: 12
```
