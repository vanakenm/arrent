---
archivist: true
entity_type: subclass
slug: srd-5e_subclass_champion
name: Champion
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.749Z'
---

```subclass
slug: srd-5e_subclass_champion
name: Champion
edition: '2014'
source: SRD 5.1
description: ''
parent_class: '[[SRD 5e/Classes/Fighter]]'
features_by_level:
  '3':
    - id: improved-critical
      name: Improved Critical
      description: Beginning when you choose this archetype at 3rd level, your weapon attacks score a critical hit on a roll of 19 or 20.
  '7':
    - id: remarkable-athlete
      name: Remarkable Athlete
      description: "Starting at 7th level, you can add half your proficiency bonus (round up) to any Strength, Dexterity, or Constitution check you make that doesn't already use your proficiency bonus.\r\n\r\nIn addition, when you make a running long jump, the distance you can cover increases by a number of feet equal to your Strength modifier."
  '10':
    - id: additional-fighting-style
      name: Additional Fighting Style
      description: At 10th level, you can choose a second option from the Fighting Style class feature.
      choices:
        - kind: select-entity
          id: fighting-style
          count: 1
          entity_type: optional-feature
          where:
            feature_type: fighting_style
            available_to: self
  '15':
    - id: superior-critical
      name: Superior Critical
      description: Starting at 15th level, your weapon attacks score a critical hit on a roll of 18-20.
  '18':
    - id: survivor
      name: Survivor
      description: At 18th level, you attain the pinnacle of resilience in battle. At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier if you have no more than half of your hit points left. You don't gain this benefit if you have 0 hit points.
resources: []
```
