---
archivist: true
entity_type: race
slug: srd-2024_race_gnome
name: Gnome
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.119Z'
---

```race
slug: srd-2024_race_gnome
name: Gnome
edition: '2024'
source: SRD 5.2
size: small
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
    description: Small (about 3–4 feet tall)
  - name: Speed
    description: 30 feet
  - name: Darkvision
    description: You have Darkvision with a range of 60 feet.
  - name: Gnomish Cunning
    description: You have Advantage on Intelligence, Wisdom, and Charisma saving throws.
  - name: Gnomish Lineage
    description: |-
      You are part of a lineage that grants you supernatural abilities. Choose one of the following options; whichever one you choose, Intelligence, Wisdom, or Charisma is your spellcasting ability for the spells you cast with this trait (choose the ability when you select the lineage):

      **Forest Gnome.** You know the *Minor Illusion* cantrip. You also always have the *Speak with Animals* spell prepared. You can cast it without a spell slot a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest. You can also use any spell slots you have to cast the spell.

      **Rock Gnome.** You know the *Mending* and *Prestidigitation* cantrips. In addition, you can spend 10 minutes casting *Prestidigitation* to create a Tiny clockwork device (AC 5, 1 HP), such as a toy, fire starter, or music box. When you create the device, you determine its function by choosing one effect from *Prestidigitation*; the device produces that effect whenever you or another creature takes a Bonus Action to activate it with a touch. If the chosen effect has options within it, you choose one of those options for the device when you create it. For example, if you choose the spell's ignite-extinguish effect, you determine whether the device ignites or extinguishes fire; the device doesn't do both. You can have three such devices in existence at a time, and each falls apart 8 hours after its creation or when you dismantle it with a touch as a Utilize action.
    id: gnomish-lineage
    choices:
      - kind: select-inline
        id: gnomish-lineage
        count: 1
        options:
          - value: forest-gnome
            label: Forest Gnome
            description: You know the Minor Illusion cantrip and always have Speak with Animals prepared (PB casts without a slot per Long Rest).
          - value: rock-gnome
            label: Rock Gnome
            description: You know the Mending and Prestidigitation cantrips and can build a Tiny clockwork device (AC 5, 1 HP).
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
```
