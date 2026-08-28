---
archivist: true
entity_type: subclass
slug: srd-5e_subclass_circle-of-the-land
name: Circle of the Land
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.750Z'
---

```subclass
slug: srd-5e_subclass_circle-of-the-land
name: Circle of the Land
edition: '2014'
source: SRD 5.1
description: ''
parent_class: '[[SRD 5e/Classes/Druid]]'
features_by_level:
  '2':
    - id: bonus-cantrip
      name: Bonus Cantrip
      description: When you choose this circle at 2nd level, you learn one additional druid cantrip of your choice.
    - id: natural-recovery
      name: Natural Recovery
      description: "Starting at 2nd level, you can regain some of your magical energy by sitting in meditation and communing with nature. During a short rest, you choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your druid level (rounded up), and none of the slots can be 6th level or higher. You can't use this feature again until you finish a long rest.\r\n\r\nFor example, when you are a 4th-level druid, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level slot or two 1st-level slots."
  '3':
    - id: circle-spells
      name: Circle Spells
      description: "Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you became a druid. Choose that land-arctic, coast, desert, forest, grassland, mountain, or swamp-and consult the associated list of spells. \r\n\r\nOnce you gain access to a circle spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. If you gain access to a spell that doesn't appear on the druid spell list, the spell is nonetheless a druid spell for you.\r\n\r\n**Arctic (table)**\r\n| Druid Level | Circle Spells  | \r\n|---|---| \r\n| 3rd | hold person, spike growth | \r\n| 5th | sleet storm, slow | \r\n| 7th | freedom of movement, ice storm  | \r\n| 9th | commune with nature, cone of cold | \r\n \r\n**Coast (table)** \r\n \r\n| Druid Level | Circle Spells  | \r\n|---|---| \r\n| 3rd | mirror image, misty step | \r\n| 5th | water breathing, water walk  | \r\n| 7th | control water, freedom of movement | \r\n| 9th | conjure elemental, scrying | \r\n \r\n**Desert (table)** \r\n \r\n| Druid Level | Circle Spells | \r\n|---|---| \r\n| 3rd | blur, silence | \r\n| 5th | create food and water, protection from energy | \r\n| 7th | blight, hallucinatory terrain | \r\n| 9th | insect plague, wall of stone  | \r\n \r\n**Forest (table)** \r\n \r\n| Druid Level | Circle Spells  | \r\n|---|---| \r\n| 3rd | barkskin, spider climb | \r\n| 5th | call lightning, plant growth | \r\n| 7th | divination, freedom of movement  | \r\n| 9th | commune with nature, tree stride | \r\n \r\n**Grassland (table)** \r\n \r\n| Druid Level | Circle Spells  | \r\n|---|---| \r\n| 3rd | invisibility, pass without trace | \r\n| 5th | daylight, haste  | \r\n| 7th | divination, freedom of movement  | \r\n| 9th | dream, insect plague | \r\n \r\n**Mountain (table)** \r\n \r\n| Druid Level | Circle Spells | \r\n|---|---| \r\n| 3rd | spider climb, spike growth  | \r\n| 5th | lightning bolt, meld into stone | \r\n| 7th | stone shape, stoneskin  | \r\n| 9th | passwall, wall of stone | \r\n \r\n**Swamp (table)** \r\n \r\n| Druid Level | Circle Spells  | \r\n|---|---| \r\n| 3rd | acid arrow, darkness | \r\n| 5th | water walk, stinking cloud | \r\n| 7th | freedom of movement, locate creature | \r\n| 9th | insect plague, scrying |"
      choices:
        - kind: select-inline
          id: land-terrain
          count: 1
          options:
            - value: arctic
              label: Arctic
            - value: coast
              label: Coast
            - value: desert
              label: Desert
            - value: forest
              label: Forest
            - value: grassland
              label: Grassland
            - value: mountain
              label: Mountain
            - value: swamp
              label: Swamp
  '5':
    - id: circle-spells
      name: Circle Spells
      description: "Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you became a druid. Choose that land-arctic, coast, desert, forest, grassland, mountain, or swamp-and consult the associated list of spells. \r\n\r\nOnce you gain access to a circle spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. If you gain access to a spell that doesn't appear on the druid spell list, the spell is nonetheless a druid spell for you.\r\n\r\n**Arctic (table)**\r\n| Druid Level | Circle Spells  | \r\n|---|---| \r\n| 3rd | hold person, spike growth | \r\n| 5th | sleet storm, slow | \r\n| 7th | freedom of movement, ice storm  | \r\n| 9th | commune with nature, cone of cold | \r\n \r\n**Coast (table)** \r\n \r\n| Druid Level | Circle Spells  | \r\n|---|---| \r\n| 3rd | mirror image, misty step | \r\n| 5th | water breathing, water walk  | \r\n| 7th | control water, freedom of movement | \r\n| 9th | conjure elemental, scrying | \r\n \r\n**Desert (table)** \r\n \r\n| Druid Level | Circle Spells | \r\n|---|---| \r\n| 3rd | blur, silence | \r\n| 5th | create food and water, protection from energy | \r\n| 7th | blight, hallucinatory terrain | \r\n| 9th | insect plague, wall of stone  | \r\n \r\n**Forest (table)** \r\n \r\n| Druid Level | Circle Spells  | \r\n|---|---| \r\n| 3rd | barkskin, spider climb | \r\n| 5th | call lightning, plant growth | \r\n| 7th | divination, freedom of movement  | \r\n| 9th | commune with nature, tree stride | \r\n \r\n**Grassland (table)** \r\n \r\n| Druid Level | Circle Spells  | \r\n|---|---| \r\n| 3rd | invisibility, pass without trace | \r\n| 5th | daylight, haste  | \r\n| 7th | divination, freedom of movement  | \r\n| 9th | dream, insect plague | \r\n \r\n**Mountain (table)** \r\n \r\n| Druid Level | Circle Spells | \r\n|---|---| \r\n| 3rd | spider climb, spike growth  | \r\n| 5th | lightning bolt, meld into stone | \r\n| 7th | stone shape, stoneskin  | \r\n| 9th | passwall, wall of stone | \r\n \r\n**Swamp (table)** \r\n \r\n| Druid Level | Circle Spells  | \r\n|---|---| \r\n| 3rd | acid arrow, darkness | \r\n| 5th | water walk, stinking cloud | \r\n| 7th | freedom of movement, locate creature | \r\n| 9th | insect plague, scrying |"
      choices:
        - kind: select-inline
          id: land-terrain
          count: 1
          options:
            - value: arctic
              label: Arctic
            - value: coast
              label: Coast
            - value: desert
              label: Desert
            - value: forest
              label: Forest
            - value: grassland
              label: Grassland
            - value: mountain
              label: Mountain
            - value: swamp
              label: Swamp
  '6':
    - id: lands-stride
      name: Land's Stride
      description: "Starting at 6th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.\r\n\r\nIn addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell."
  '7':
    - id: circle-spells
      name: Circle Spells
      description: "Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you became a druid. Choose that land-arctic, coast, desert, forest, grassland, mountain, or swamp-and consult the associated list of spells. \r\n\r\nOnce you gain access to a circle spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. If you gain access to a spell that doesn't appear on the druid spell list, the spell is nonetheless a druid spell for you.\r\n\r\n**Arctic (table)**\r\n| Druid Level | Circle Spells  | \r\n|---|---| \r\n| 3rd | hold person, spike growth | \r\n| 5th | sleet storm, slow | \r\n| 7th | freedom of movement, ice storm  | \r\n| 9th | commune with nature, cone of cold | \r\n \r\n**Coast (table)** \r\n \r\n| Druid Level | Circle Spells  | \r\n|---|---| \r\n| 3rd | mirror image, misty step | \r\n| 5th | water breathing, water walk  | \r\n| 7th | control water, freedom of movement | \r\n| 9th | conjure elemental, scrying | \r\n \r\n**Desert (table)** \r\n \r\n| Druid Level | Circle Spells | \r\n|---|---| \r\n| 3rd | blur, silence | \r\n| 5th | create food and water, protection from energy | \r\n| 7th | blight, hallucinatory terrain | \r\n| 9th | insect plague, wall of stone  | \r\n \r\n**Forest (table)** \r\n \r\n| Druid Level | Circle Spells  | \r\n|---|---| \r\n| 3rd | barkskin, spider climb | \r\n| 5th | call lightning, plant growth | \r\n| 7th | divination, freedom of movement  | \r\n| 9th | commune with nature, tree stride | \r\n \r\n**Grassland (table)** \r\n \r\n| Druid Level | Circle Spells  | \r\n|---|---| \r\n| 3rd | invisibility, pass without trace | \r\n| 5th | daylight, haste  | \r\n| 7th | divination, freedom of movement  | \r\n| 9th | dream, insect plague | \r\n \r\n**Mountain (table)** \r\n \r\n| Druid Level | Circle Spells | \r\n|---|---| \r\n| 3rd | spider climb, spike growth  | \r\n| 5th | lightning bolt, meld into stone | \r\n| 7th | stone shape, stoneskin  | \r\n| 9th | passwall, wall of stone | \r\n \r\n**Swamp (table)** \r\n \r\n| Druid Level | Circle Spells  | \r\n|---|---| \r\n| 3rd | acid arrow, darkness | \r\n| 5th | water walk, stinking cloud | \r\n| 7th | freedom of movement, locate creature | \r\n| 9th | insect plague, scrying |"
      choices:
        - kind: select-inline
          id: land-terrain
          count: 1
          options:
            - value: arctic
              label: Arctic
            - value: coast
              label: Coast
            - value: desert
              label: Desert
            - value: forest
              label: Forest
            - value: grassland
              label: Grassland
            - value: mountain
              label: Mountain
            - value: swamp
              label: Swamp
  '9':
    - id: circle-spells
      name: Circle Spells
      description: "Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you became a druid. Choose that land-arctic, coast, desert, forest, grassland, mountain, or swamp-and consult the associated list of spells. \r\n\r\nOnce you gain access to a circle spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. If you gain access to a spell that doesn't appear on the druid spell list, the spell is nonetheless a druid spell for you.\r\n\r\n**Arctic (table)**\r\n| Druid Level | Circle Spells  | \r\n|---|---| \r\n| 3rd | hold person, spike growth | \r\n| 5th | sleet storm, slow | \r\n| 7th | freedom of movement, ice storm  | \r\n| 9th | commune with nature, cone of cold | \r\n \r\n**Coast (table)** \r\n \r\n| Druid Level | Circle Spells  | \r\n|---|---| \r\n| 3rd | mirror image, misty step | \r\n| 5th | water breathing, water walk  | \r\n| 7th | control water, freedom of movement | \r\n| 9th | conjure elemental, scrying | \r\n \r\n**Desert (table)** \r\n \r\n| Druid Level | Circle Spells | \r\n|---|---| \r\n| 3rd | blur, silence | \r\n| 5th | create food and water, protection from energy | \r\n| 7th | blight, hallucinatory terrain | \r\n| 9th | insect plague, wall of stone  | \r\n \r\n**Forest (table)** \r\n \r\n| Druid Level | Circle Spells  | \r\n|---|---| \r\n| 3rd | barkskin, spider climb | \r\n| 5th | call lightning, plant growth | \r\n| 7th | divination, freedom of movement  | \r\n| 9th | commune with nature, tree stride | \r\n \r\n**Grassland (table)** \r\n \r\n| Druid Level | Circle Spells  | \r\n|---|---| \r\n| 3rd | invisibility, pass without trace | \r\n| 5th | daylight, haste  | \r\n| 7th | divination, freedom of movement  | \r\n| 9th | dream, insect plague | \r\n \r\n**Mountain (table)** \r\n \r\n| Druid Level | Circle Spells | \r\n|---|---| \r\n| 3rd | spider climb, spike growth  | \r\n| 5th | lightning bolt, meld into stone | \r\n| 7th | stone shape, stoneskin  | \r\n| 9th | passwall, wall of stone | \r\n \r\n**Swamp (table)** \r\n \r\n| Druid Level | Circle Spells  | \r\n|---|---| \r\n| 3rd | acid arrow, darkness | \r\n| 5th | water walk, stinking cloud | \r\n| 7th | freedom of movement, locate creature | \r\n| 9th | insect plague, scrying |"
      choices:
        - kind: select-inline
          id: land-terrain
          count: 1
          options:
            - value: arctic
              label: Arctic
            - value: coast
              label: Coast
            - value: desert
              label: Desert
            - value: forest
              label: Forest
            - value: grassland
              label: Grassland
            - value: mountain
              label: Mountain
            - value: swamp
              label: Swamp
  '10':
    - id: natures-ward
      name: Nature's Ward
      description: When you reach 10th level, you can't be charmed or frightened by elementals or fey, and you are immune to poison and disease.
  '14':
    - id: natures-sanctuary
      name: Nature's Sanctuary
      description: "When you reach 14th level, creatures of the natural world sense your connection to nature and become hesitant to attack you. When a beast or plant creature attacks you, that creature must make a Wisdom saving throw against your druid spell save DC. On a failed save, the creature must choose a different target, or the attack automatically misses. On a successful save, the creature is immune to this effect for 24 hours.\r\n\r\nThe creature is aware of this effect before it makes its attack against you."
resources: []
```
