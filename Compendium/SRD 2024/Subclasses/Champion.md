---
archivist: true
entity_type: subclass
slug: srd-2024_subclass_champion
name: Champion
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.113Z'
---

```subclass
slug: srd-2024_subclass_champion
name: Champion
edition: '2024'
source: SRD 5.2
description: |-
  *Pursue Physical Excellence in Combat*

  A Champion focuses on the development of martial prowess in a relentless pursuit of victory. Champions combine rigorous training with physical excellence to deal devastating blows, withstand peril, and garner glory. Whether in athletic contests or bloody battle, Champions strive for the crown of the victor.
parent_class: '[[SRD 2024/Classes/Fighter]]'
features_by_level:
  '3':
    - id: improved-critical
      name: Improved Critical
      description: Your attack rolls with weapons and Unarmed Strikes can score a Critical Hit on a roll of 19 or 20 on the d20.
    - id: remarkable-athlete
      name: Remarkable Athlete
      description: Thanks to your athleticism, you have Advantage on Initiative rolls and Strength (Athletics) checks.
  '7':
    - id: additional-fighting-style
      name: Additional Fighting Style
      description: You gain another Fighting Style feat of your choice.
      choices:
        - kind: select-entity
          id: fighting-style
          count: 1
          entity_type: optional-feature
          where:
            feature_type: fighting_style
            available_to: self
  '10':
    - id: heroic-warrior
      name: Heroic Warrior
      description: The thrill of battle drives you toward victory. During combat, you can give yourself Heroic Inspiration whenever you start your turn without it.
  '15':
    - id: superior-critical
      name: Superior Critical
      description: Your attack rolls with weapons and Unarmed Strikes can now score a Critical Hit on a roll of 18–20 on the d20.
  '18':
    - id: survivor
      name: Survivor
      description: |-
        You attain the pinnacle of resilience in battle, giving you these benefits.

        **Defy Death**. You have Advantage on Death Saving Throws. Moreover, when you roll 18–20 on a Death Saving Throw, you gain the benefit of rolling a 20 on it.

        **Heroic Rally**. At the start of each of your turns, you regain Hit Points equal to 5 plus your Constitution modifier if you are Bloodied and have at least 1 Hit Point.
resources: []
```
