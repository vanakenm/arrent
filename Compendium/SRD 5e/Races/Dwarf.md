---
archivist: true
entity_type: race
slug: srd-5e_race_dwarf
name: Dwarf
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.761Z'
---

```race
slug: srd-5e_race_dwarf
name: Dwarf
edition: '2014'
source: SRD 5.1
size: medium
speed:
  walk: 25
vision:
  darkvision: 60
description: Your dwarf character has an assortment of inborn abilities, part and parcel of dwarven nature.
ability_score_increases: []
age: Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.
alignment: Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.
languages:
  fixed:
    - common
    - dwarvish
variant_label: base
traits:
  - name: Ability Score Increase
    description: Your Constitution score increases by 2.
  - name: Speed
    description: Your base walking speed is 25 feet. Your speed is not reduced by wearing heavy armor.
  - name: Darkvision
    description: Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.
  - name: Age
    description: Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.
  - name: Alignment
    description: Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.
  - name: Size
    description: Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.
  - name: Languages
    description: You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.
  - name: Dwarven Resilience
    description: You have advantage on saving throws against poison, and you have resistance against poison damage.
  - name: Dwarven Combat Training
    description: You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.
  - name: Tool Proficiency
    description: 'You gain proficiency with the artisan''s tools of your choice: smith''s tools, brewer''s supplies, or mason''s tools.'
    id: tool-proficiency
    choices:
      - kind: select-proficiency
        id: tool
        count: 1
        domain: tool
        from:
          - smith's tools
          - brewer's supplies
          - mason's tools
  - name: Stonecunning
    description: Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.
```
