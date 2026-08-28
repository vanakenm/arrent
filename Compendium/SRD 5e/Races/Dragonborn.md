---
archivist: true
entity_type: race
slug: srd-5e_race_dragonborn
name: Dragonborn
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.761Z'
---

```race
slug: srd-5e_race_dragonborn
name: Dragonborn
edition: '2014'
source: SRD 5.1
size: medium
speed:
  walk: 30
vision: {}
description: Your draconic heritage manifests in a variety of traits you share with other dragonborn.
ability_score_increases: []
age: Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.
alignment: Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with evil can be terrible villains.
languages:
  fixed:
    - common
    - draconic
variant_label: base
traits:
  - name: Ability Score Increase
    description: Your Strength score increases by 2, and your Charisma score increases by 1.
  - name: Speed
    description: Your base walking speed is 30 feet.
  - name: Age
    description: Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.
  - name: Alignment
    description: Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with evil can be terrible villains.
  - name: Size
    description: Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.
  - name: Languages
    description: You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.
  - name: Draconic Ancestry table
    description: "| Dragon       | Damage Type       | Breath Weapon                |\r\n|--------------|-------------------|------------------------------|\r\n| Black        | Acid              | 5 by 30 ft. line (Dex. save) |\r\n| Blue         | Lightning         | 5 by 30 ft. line (Dex. save) |\r\n| Brass        | Fire              | 5 by 30 ft. line (Dex. save) |\r\n| Bronze       | Lightning         | 5 by 30 ft. line (Dex. save) |\r\n| Copper       | Acid              | 5 by 30 ft. line (Dex. save) |\r\n| Gold         | Fire              | 15 ft. cone (Dex. save)      |\r\n| Green        | Poison            | 15 ft. cone (Con. save)      |\r\n| Red          | Fire              | 15 ft. cone (Dex. save)      |\r\n| Silver       | Cold              | 15 ft. cone (Con. save)      |\r\n| White        | Cold              | 15 ft. cone (Con. save)      |"
  - name: Draconic Ancestry
    description: You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.
    id: draconic-ancestry
    choices:
      - kind: select-inline
        id: draconic-ancestry
        count: 1
        options:
          - value: black
            label: Black (Acid)
            effects:
              - kind: resistance
                damage_type: Acid
          - value: blue
            label: Blue (Lightning)
            effects:
              - kind: resistance
                damage_type: Lightning
          - value: brass
            label: Brass (Fire)
            effects:
              - kind: resistance
                damage_type: Fire
          - value: bronze
            label: Bronze (Lightning)
            effects:
              - kind: resistance
                damage_type: Lightning
          - value: copper
            label: Copper (Acid)
            effects:
              - kind: resistance
                damage_type: Acid
          - value: gold
            label: Gold (Fire)
            effects:
              - kind: resistance
                damage_type: Fire
          - value: green
            label: Green (Poison)
            effects:
              - kind: resistance
                damage_type: Poison
          - value: red
            label: Red (Fire)
            effects:
              - kind: resistance
                damage_type: Fire
          - value: silver
            label: Silver (Cold)
            effects:
              - kind: resistance
                damage_type: Cold
          - value: white
            label: White (Cold)
            effects:
              - kind: resistance
                damage_type: Cold
  - name: Breath Weapon
    description: "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation.\r\nWhen you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level."
    action_cost: action
    save:
      ability: dex
      dc_formula: 8 + {con_mod} + {prof_bonus}
    id: breath-weapon
    resources:
      - id: dragonborn:breath-weapon
        name: Breath Weapon
        max_formula: '1'
        reset: short-rest
  - name: Damage Resistance
    description: You have resistance to the damage type associated with your draconic ancestry.
```
