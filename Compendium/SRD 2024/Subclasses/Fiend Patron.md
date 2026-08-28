---
archivist: true
entity_type: subclass
slug: srd-2024_subclass_fiend-patron
name: Fiend Patron
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.114Z'
---

```subclass
slug: srd-2024_subclass_fiend-patron
name: Fiend Patron
edition: '2024'
source: SRD 5.2
description: |-
  *Make a Deal with the Lower Planes*

  Your pact draws on the Lower Planes, the realms of perdition. You might forge a bargain with a demon lord, an archdevil, or another fiend that is especially mighty. That patron's aims are evil—the corruption or destruction of all things, ultimately including you—and your path is defined by the extent to which you strive against those aims.
parent_class: '[[SRD 2024/Classes/Warlock]]'
features_by_level:
  '3':
    - id: dark-ones-blessing
      name: Dark One's Blessing
      description: When you reduce an enemy to 0 Hit Points, you gain Temporary Hit Points equal to your Charisma modifier plus your Warlock level (minimum of 1 Temporary Hit Point). You also gain this benefit if someone else reduces an enemy within 10 feet of you to 0 Hit Points.
    - id: fiend-spells
      name: Fiend Spells
      description: |-
        The magic of your patron ensures you always have certain spells ready; when you reach a Warlock level specified in the Fiend Spells table, you thereafter always have the listed spells prepared.

        Table: Fiend Spells

        |Warlock Level|Spells|
        |---|---|
        |3|Burning Hands, Command, Scorching Ray, Suggestion|
        |5|Fireball, Stinking Cloud|
        |7|Fire Shield, Wall of Fire|
        |9|Geas, Insect Plague|
  '6':
    - id: dark-ones-own-luck
      name: Dark One's Own Luck
      description: |-
        You can call on your fiendish patron to alter fate in your favor. When you make an ability check or a saving throw, you can use this feature to add 1d10 to your roll. You can do so after seeing the roll but before any of the roll's effects occur.

        You can use this feature a number of times equal to your Charisma modifier (minimum of once), but you can use it no more than once per roll. You regain all expended uses when you finish a Long Rest.
      resources:
        - id: fiend-patron:dark-ones-own-luck
          name: Dark One's Own Luck
          max_formula: '{cha_mod}'
          reset: short-rest
  '10':
    - id: fiendish-resilience
      name: Fiendish Resilience
      description: Choose one damage type, other than Force, whenever you finish a Short or Long Rest. You have Resistance to that damage type until you choose a different one with this feature.
  '14':
    - id: hurl-through-hell
      name: Hurl Through Hell
      description: |-
        Once per turn when you hit a creature with an attack roll, you can try to instantly transport the target through the Lower Planes. The target must succeed on a Charisma saving throw against your spell save DC, or the target disappears and hurtles through a nightmare landscape. The target takes 8d10 Psychic damage if it isn't a Fiend, and it has the Incapacitated condition until the end of your next turn, when it returns to the space it previously occupied or the nearest unoccupied space.

        Once you use this feature, you can't use it again until you finish a Long Rest unless you expend a Pact Magic spell slot (no action required) to restore your use of it.
resources: []
```
