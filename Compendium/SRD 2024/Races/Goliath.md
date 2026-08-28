---
archivist: true
entity_type: race
slug: srd-2024_race_goliath
name: Goliath
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.119Z'
---

```race
slug: srd-2024_race_goliath
name: Goliath
edition: '2024'
source: SRD 5.2
size: medium
speed:
  walk: 35
vision: {}
description: ''
ability_score_increases: []
age: ''
alignment: ''
languages:
  fixed: []
variant_label: base
traits:
  - name: Size
    description: Medium (about 7–8 feet tall)
  - name: Speed
    description: 35 feet
  - name: Giant Ancestry
    description: |-
      You are descended from Giants. Choose one of the following benefits—a supernatural boon from your ancestry; you can use the chosen benefit a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest:

      - **Cloud's Jaunt (Cloud Giant)**. As a Bonus Action, you magically teleport up to 30 feet to an unoccupied space you can see.
      - **Fire's Burn (Fire Giant)**. When you hit a target with an attack roll and deal damage to it, you can also deal 1d10 Fire damage to that target.
      - **Frost's Chill (Frost Giant)**. When you hit a target with an attack roll and deal damage to it, you can also deal 1d6 Cold damage to that target and reduce its Speed by 10 feet until the start of your next turn.
      - **Hill's Tumble (Hill Giant)**. When you hit a Large or smaller creature with an attack roll and deal damage to it, you can give that target the Prone condition.
      - **Stone's Endurance (Stone Giant)**. When you take damage, you can take a Reaction to roll 1d12. Add your Constitution modifier to the number rolled and reduce the damage by that total.
      - **Storm's Thunder (Storm Giant)**. When you take damage from a creature within 60 feet of you, you can take a Reaction to deal 1d8 Thunder damage to that creature.
    id: giant-ancestry
    resources:
      - id: goliath:giant-ancestry
        name: Giant Ancestry
        max_formula: prof
        reset: long-rest
    choices:
      - kind: select-inline
        id: giant-ancestry
        count: 1
        options:
          - value: clouds-jaunt
            label: Cloud's Jaunt (Cloud Giant)
            description: As a Bonus Action, you magically teleport up to 30 feet to an unoccupied space you can see.
          - value: fires-burn
            label: Fire's Burn (Fire Giant)
            description: When you hit a target with an attack roll and deal damage to it, you can also deal 1d10 Fire damage to that target.
          - value: frosts-chill
            label: Frost's Chill (Frost Giant)
            description: When you hit a target with an attack roll and deal damage to it, you can also deal 1d6 Cold damage and reduce its Speed by 10 feet until the start of your next turn.
          - value: hills-tumble
            label: Hill's Tumble (Hill Giant)
            description: When you hit a Large or smaller creature with an attack roll and deal damage to it, you can give that target the Prone condition.
          - value: stones-endurance
            label: Stone's Endurance (Stone Giant)
            description: When you take damage, you can take a Reaction to roll 1d12, add your Constitution modifier, and reduce the damage by that total.
          - value: storms-thunder
            label: Storm's Thunder (Storm Giant)
            description: When you take damage from a creature within 60 feet of you, you can take a Reaction to deal 1d8 Thunder damage to that creature.
  - name: Large Form
    description: Starting at character level 5, you can change your size to Large as a Bonus Action if you're in a big enough space. This transformation lasts for 10 minutes or until you end it (no action required). For that duration, you have Advantage on Strength checks, and your Speed increases by 10 feet. Once you use this trait, you can't use it again until you finish a Long Rest.
  - name: Powerful Build
    description: You have Advantage on any ability check you make to end the Grappled condition. You also count as one size larger when determining your carrying capacity.
```
