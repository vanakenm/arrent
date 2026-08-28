---
archivist: true
entity_type: race
slug: srd-2024_race_elf
name: Elf
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.119Z'
---

```race
slug: srd-2024_race_elf
name: Elf
edition: '2024'
source: SRD 5.2
size: medium
speed:
  walk: 30
vision:
  darkvision: 60
description: ''
ability_score_increases: []
age: ''
alignment: ''
languages:
  fixed: []
variant_label: base
traits:
  - name: Size
    description: Medium (about 5–6 feet tall)
  - name: Speed
    description: 30 feet
  - name: Darkvision
    description: You have Darkvision with a range of 60 feet.
  - name: Elven Lineage
    description: |-
      You are part of a lineage that grants you supernatural abilities. Choose a lineage from the Elven Lineages table. You gain the level 1 benefit of that lineage.

      When you reach character levels 3 and 5, you learn a higher-level spell, as shown on the table. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have of the appropriate level.

      Table: Elven Lineages

      |Lineage|Level 1|Level 3|Level 5|
      |---|---|---|---|
      |Drow|The range of your Darkvision increases to 120 feet. You also know the Dancing Lights cantrip.|Faerie Fire|Darkness|
      |High Elf|You know the Prestidigitation cantrip. Whenever you finish a Long Rest, you can replace that cantrip with a different cantrip from the Wizard spell list.|Detect Magic|Misty Step|
      |Wood Elf|Your Speed increases to 35 feet. You also know the Druidcraft cantrip.|Longstrider|Pass without Trace|

      Intelligence, Wisdom, or Charisma is your spellcasting ability for the spells you cast with this trait (choose the ability when you select the lineage).
    id: elven-lineage
    choices:
      - kind: select-inline
        id: elven-lineage
        count: 1
        options:
          - value: drow
            label: Drow
            description: The range of your Darkvision increases to 120 feet, and you know the Dancing Lights cantrip.
          - value: high-elf
            label: High Elf
            description: You know the Prestidigitation cantrip; on a Long Rest you can swap it for a different Wizard cantrip.
          - value: wood-elf
            label: Wood Elf
            description: Your Speed increases to 35 feet, and you know the Druidcraft cantrip.
      - kind: select-inline
        id: spellcasting-ability
        count: 1
        options:
          - value: int
            label: Intelligence
          - value: wis
            label: Wisdom
          - value: cha
            label: Charisma
  - name: Fey Ancestry
    description: You have Advantage on saving throws you make to avoid or end the Charmed condition.
  - name: Keen Senses
    description: You have proficiency in the Insight, Perception, or Survival skill.
    id: keen-senses
    choices:
      - kind: select-proficiency
        id: skill
        count: 1
        domain: skill
        from:
          - insight
          - perception
          - survival
  - name: Trance
    description: You don't need to sleep, and magic can't put you to sleep. You can finish a Long Rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness.
additional_spells:
  known:
    '1':
      - '[[SRD 2024/Spells/Druidcraft|xphb|druidcraft|xphb]]'
```
