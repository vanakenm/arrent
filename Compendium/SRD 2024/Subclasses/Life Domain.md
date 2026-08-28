---
archivist: true
entity_type: subclass
slug: srd-2024_subclass_life-domain
name: Life Domain
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.114Z'
---

```subclass
slug: srd-2024_subclass_life-domain
name: Life Domain
edition: '2024'
source: SRD 5.2
description: |-
  *Soothe the Hurts of the World*

  The Life Domain focuses on the positive energy that helps sustain all life in the multiverse. Clerics who tap into this domain are masters of healing, using that life force to cure many hurts.

  Existence itself relies on the positive energy associated with this domain, so a Cleric of almost any religious tradition might choose it. This domain is particularly associated with agricultural deities, gods of healing or endurance, and gods of home and community. Religious orders of healing also seek the magic of this domain.
parent_class: '[[SRD 2024/Classes/Cleric]]'
features_by_level:
  '3':
    - id: disciple-of-life
      name: Disciple of Life
      description: When a spell you cast with a spell slot restores Hit Points to a creature, that creature regains additional Hit Points on the turn you cast the spell. The additional Hit Points equal 2 plus the spell slot's level.
    - id: life-domain-spells
      name: Life Domain Spells
      description: |-
        Your connection to this divine domain ensures you always have certain spells ready. When you reach a Cleric level specified in the Life Domain Spells table, you thereafter always have the listed spells prepared.

        Table: Life Domain Spells

        |Cleric Level|Prepared Spells|
        |---|---|
        |3|Aid, Bless, Cure Wounds, Lesser Restoration|
        |5|Mass Healing Word, Revivify|
        |7|Aura of Life, Death Ward|
        |9|Greater Restoration, Mass Cure Wounds|
    - id: preserve-life
      name: Preserve Life
      description: As a Magic action, you present your Holy Symbol and expend a use of your Channel Divinity to evoke healing energy that can restore a number of Hit Points equal to five times your Cleric level. Choose Bloodied creatures within 30 feet of yourself (which can include you), and divide those Hit Points among them. This feature can restore a creature to no more than half its Hit Point maximum.
  '6':
    - id: blessed-healer
      name: Blessed Healer
      description: The healing spells you cast on others heal you as well. Immediately after you cast a spell with a spell slot that restores Hit Points to one or more creatures other than yourself, you regain Hit Points equal to 2 plus the spell slot's level.
  '17':
    - id: supreme-healing
      name: Supreme Healing
      description: When you would normally roll one or more dice to restore Hit Points to a creature with a spell or Channel Divinity, don't roll those dice for the healing; instead use the highest number possible for each die. For example, instead of restoring 2d6 Hit Points to a creature with a spell, you restore 12.
resources: []
```
