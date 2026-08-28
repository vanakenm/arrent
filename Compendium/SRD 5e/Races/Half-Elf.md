---
archivist: true
entity_type: race
slug: srd-5e_race_half-elf
name: Half-Elf
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.762Z'
---

```race
slug: srd-5e_race_half-elf
name: Half-Elf
edition: '2014'
source: SRD 5.1
size: medium
speed:
  walk: 30
vision:
  darkvision: 60
description: Your half-elf character has some qualities in common with elves and some that are unique to half-elves.
ability_score_increases: []
age: Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.
alignment: Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others' demands, and sometimes prove unreliable, or at least unpredictable.
languages:
  fixed:
    - common
    - elvish
variant_label: base
traits:
  - name: Ability Score Increase
    description: Your Charisma score increases by 2, and two other ability scores of your choice increase by 1.
  - name: Speed
    description: Your base walking speed is 30 feet.
  - name: Darkvision
    description: Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.
  - name: Age
    description: Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.
  - name: Alignment
    description: Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others' demands, and sometimes prove unreliable, or at least unpredictable.
  - name: Size
    description: Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.
  - name: Languages
    description: You can speak, read, and write Common, Elvish, and one extra language of your choice.
  - name: Fey Ancestry
    description: You have advantage on saving throws against being charmed, and magic can't put you to sleep.
  - name: Skill Versatility
    description: You gain proficiency in two skills of your choice.
    id: skill-versatility
    choices:
      - kind: select-proficiency
        id: skills
        count: 2
        domain: skill
choices:
  - kind: ability-points
    id: abilities
    points: 2
    max_per: 1
    pool:
      - str
      - dex
      - con
      - int
      - wis
  - kind: select-proficiency
    id: languages
    count: 1
    domain: language
```
