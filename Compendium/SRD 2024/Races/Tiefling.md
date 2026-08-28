---
archivist: true
entity_type: race
slug: srd-2024_race_tiefling
name: Tiefling
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.120Z'
---

```race
slug: srd-2024_race_tiefling
name: Tiefling
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
    description: Medium (about 4–7 feet tall) or Small (about 3–4 feet tall), chosen when you select this species
  - name: Speed
    description: 30 feet
  - name: Darkvision
    description: You have Darkvision with a range of 60 feet.
  - name: Fiendish Legacy
    description: |-
      You are the recipient of a legacy that grants you supernatural abilities. Choose a legacy from the Fiendish Legacies table. You gain the level 1 benefit of the chosen legacy.

      When you reach character levels 3 and 5, you learn a higher-level spell, as shown on the table. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have of the appropriate level.

      Intelligence, Wisdom, or Charisma is your spellcasting ability for the spells you cast with this trait (choose the ability when you select the legacy).

      **Table: Fiendish Legacies**

      |Legacy|Level 1|Level 3|Level 5|
      |---|---|---|---|
      |Abyssal|You have Resistance to Poison damage. You also know the Poison Spray cantrip.|Ray of Sickness|Hold Person|
      |Chthonic|You have Resistance to Necrotic damage. You also know the Chill Touch cantrip.|False Life|Ray of Enfeeblement|
      |Infernal|You have Resistance to Fire damage. You also know the Fire Bolt cantrip.|Hellish Rebuke|Darkness|
    id: fiendish-legacy
    choices:
      - kind: select-inline
        id: fiendish-legacy
        count: 1
        options:
          - value: abyssal
            label: Abyssal
            description: You know the Poison Spray cantrip.
            effects:
              - kind: resistance
                damage_type: Poison
          - value: chthonic
            label: Chthonic
            description: You know the Chill Touch cantrip.
            effects:
              - kind: resistance
                damage_type: Necrotic
          - value: infernal
            label: Infernal
            description: You know the Fire Bolt cantrip.
            effects:
              - kind: resistance
                damage_type: Fire
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
  - name: Otherworldly Presence
    description: You know the *Thaumaturgy* cantrip. When you cast it with this trait, the spell uses the same spellcasting ability you use for your Fiendish Legacy trait.
additional_spells:
  known:
    '1':
      - '[[SRD 2024/Spells/Thaumaturgy|xphb|thaumaturgy|xphb]]'
      - '[[SRD 2024/Spells/Fire Bolt|xphb|fire bolt|xphb]]'
```
