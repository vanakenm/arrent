---
archivist: true
entity_type: subclass
slug: srd-2024_subclass_draconic-sorcery
name: Draconic Sorcery
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.114Z'
---

```subclass
slug: srd-2024_subclass_draconic-sorcery
name: Draconic Sorcery
edition: '2024'
source: SRD 5.2
description: |-
  *Breathe the Magic of Dragons*

  Your innate magic comes from the gift of a dragon. Perhaps an ancient dragon facing death bequeathed some of its magical power to you or your ancestor. You might have absorbed magic from a site infused with dragons' power. Or perhaps you handled a treasure taken from a dragon's hoard that was steeped in draconic power. Or you might have a dragon for an ancestor.
parent_class: '[[SRD 2024/Classes/Sorcerer]]'
features_by_level:
  '3':
    - id: draconic-resilience
      name: Draconic Resilience
      description: |-
        The magic in your body manifests physical traits of your draconic gift. Your Hit Point maximum increases by 3, and it increases by 1 whenever you gain another Sorcerer level.

        Parts of you are also covered by dragon-like scales. While you aren't wearing armor, your base Armor Class equals 10 plus your Dexterity and Charisma modifiers.
    - id: draconic-spells
      name: Draconic Spells
      description: |-
        When you reach a Sorcerer level specified in the Draconic Spells table, you thereafter always have the listed spells prepared.

        Table: Draconic Spells

        |Sorcerer Level|Spells|
        |---|---|
        |3|Alter Self, Chromatic Orb, Command, Dragon's Breath|
        |5|Fear, Fly|
        |7|Arcane Eye, Charm Monster|
        |9|Legend Lore, Summon Dragon|
  '6':
    - id: elemental-affinity
      name: Elemental Affinity
      description: |-
        Your draconic magic has an affinity with a damage type associated with dragons. Choose one of those types: Acid, Cold, Fire, Lightning, or Poison.

        You have Resistance to that damage type, and when you cast a spell that deals damage of that type, you can add your Charisma modifier to one damage roll of that spell.
      choices:
        - kind: select-inline
          id: elemental-affinity
          count: 1
          options:
            - value: acid
              label: Acid
              effects:
                - kind: resistance
                  damage_type: Acid
            - value: cold
              label: Cold
              effects:
                - kind: resistance
                  damage_type: Cold
            - value: fire
              label: Fire
              effects:
                - kind: resistance
                  damage_type: Fire
            - value: lightning
              label: Lightning
              effects:
                - kind: resistance
                  damage_type: Lightning
            - value: poison
              label: Poison
              effects:
                - kind: resistance
                  damage_type: Poison
  '14':
    - id: dragon-wings
      name: Dragon Wings
      description: |-
        As a Bonus Action, you can cause draconic wings to appear on your back. The wings last for 1 hour or until you dismiss them (no action required). For the duration, you have a Fly Speed of 60 feet.

        Once you use this feature, you can't use it again until you finish a Long Rest unless you spend 3 Sorcery Points (no action required) to restore your use of it.
  '19':
    - id: dragon-companion
      name: Dragon Companion
      description: |-
        You can cast *Summon Dragon* without a Material component. You can also cast it once without a spell slot, and you regain the ability to cast it in this way when you finish a Long Rest.

        Whenever you start casting the spell, you can modify it so that it doesn't require Concentration. If you do so, the spell's duration becomes 1 minute for that casting.
resources: []
```
