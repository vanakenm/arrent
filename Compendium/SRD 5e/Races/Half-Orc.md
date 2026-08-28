---
archivist: true
entity_type: race
slug: srd-5e_race_half-orc
name: Half-Orc
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.762Z'
---

```race
slug: srd-5e_race_half-orc
name: Half-Orc
edition: '2014'
source: SRD 5.1
size: medium
speed:
  walk: 30
vision:
  darkvision: 60
description: Your half-orc character has certain traits deriving from your orc ancestry.
ability_score_increases: []
age: Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.
alignment: Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live out their lives among them are usually evil.
languages:
  fixed:
    - common
    - orc
variant_label: base
traits:
  - name: Ability Score Increase
    description: Your Strength score increases by 2, and your Constitution score increases by 1.
  - name: Speed
    description: Your base walking speed is 30 feet.
  - name: Darkvision
    description: Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.
  - name: Age
    description: Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.
  - name: Alignment
    description: Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live out their lives among them are usually evil.
  - name: Size
    description: Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.
  - name: Languages
    description: You can speak, read, and write Common and Orc. Orc is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script.
  - name: Menacing
    description: You gain proficiency in the Intimidation skill.
  - name: Relentless Endurance
    description: When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest.
    action_cost: special
    id: relentless-endurance
    resources:
      - id: half-orc:relentless-endurance
        name: Relentless Endurance
        max_formula: '1'
        reset: long-rest
  - name: Savage Attacks
    description: When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.
```
