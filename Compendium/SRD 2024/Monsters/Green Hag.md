---
archivist: true
entity_type: monster
slug: srd-2024_monster_green-hag
name: Green Hag
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.428Z'
---

```monster
slug: srd-2024_monster_green-hag
name: Green Hag
edition: '2024'
source: SRD 5.2
size: medium
type: fey
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 82
  formula: 11d8 + 33
speed:
  walk: 30
  swim: 30
abilities:
  str: 18
  dex: 12
  con: 16
  int: 13
  wis: 14
  cha: 14
senses:
  - darkvision 60 ft.
languages:
  - Common
  - Elvish
  - Sylvan
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The hag makes two Claw attacks.
  - name: Claw
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d8+STR` Slashing damage plus `dmg:1d6` Poison damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 6
        damage: 1d8+4
        damage_type: slashing
        range:
          reach: 5
  - name: Spellcasting
    entries:
      - |-
        The hag casts one of the following spells, requiring no Material components and using Wisdom as the spellcasting ability (spell save `dc:WIS`, `atk:+4` with spell attacks):

        - **At Will:** Dancing Lights, Disguise Self, Invisibility, Minor Illusion, Ray of Sickness
reactions: []
legendary_actions: []
traits:
  - name: Amphibious
    entries:
      - The hag can breathe air and water.
  - name: Mimicry
    entries:
      - The hag can mimic animal sounds and humanoid voices. A creature that hears the sounds can tell they are imitations only with a successful `dc:14` Wisdom (Insight) check.
cr: '3'
saves:
  str: 4
  dex: 1
  con: 3
  int: 1
  wis: 2
  cha: 2
skills:
  arcana: 5
  deception: 4
  perception: 4
  stealth: 3
alignment: neutral evil
passive_perception: 14
```
