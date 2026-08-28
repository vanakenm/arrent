---
archivist: true
entity_type: class
slug: srd-5e_class_ranger
name: Ranger
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.742Z'
---

```class
slug: srd-5e_class_ranger
name: Ranger
edition: '2014'
source: SRD 5.1
description: ''
hit_die: d10
primary_abilities:
  - dex
  - wis
saving_throws:
  - dex
  - str
proficiencies:
  armor:
    - light
    - medium
    - shield
  weapons:
    categories:
      - simple
      - martial
skill_choices:
  count: 3
  from:
    - animal-handling
    - athletics
    - insight
    - investigation
    - nature
    - perception
    - stealth
    - survival
starting_equipment:
  - kind: choice
    options:
      - label: Scale Mail
        grants:
          - item: scale-mail
      - label: Leather Armor
        grants:
          - item: leather
  - kind: choice
    options:
      - label: Two Shortswords
        grants:
          - item: shortsword
            qty: 2
      - label: Two simple melee weapons
        grants:
          - category: simple-weapon
          - category: simple-weapon
  - kind: choice
    options:
      - label: A Dungeoneer's Pack
        grants: []
      - label: An Explorer's Pack
        grants: []
  - kind: fixed
    label: A Longbow and a Quiver of 20 Arrows
    grants:
      - item: longbow
spellcasting:
  caster_type: half
  ability: wis
  preparation: known
  spell_list: ranger
subclass_level: 3
subclass_feature_name: Ranger Archetype
weapon_mastery: null
epic_boon_level: null
table:
  '1':
    prof_bonus: 2
    feature_ids:
      - favored-enemy
      - natural-explorer
  '2':
    prof_bonus: 2
    feature_ids:
      - fighting-style
      - spellcasting
    columns:
      1st: '2'
      Spells Known: '2'
  '3':
    prof_bonus: 2
    feature_ids:
      - primeval-awareness
      - ranger-archetype
    columns:
      1st: '3'
      Spells Known: '3'
  '4':
    prof_bonus: 2
    feature_ids:
      - ability-score-improvement
    columns:
      1st: '3'
      Spells Known: '3'
  '5':
    prof_bonus: 3
    feature_ids:
      - extra-attack
    columns:
      1st: '4'
      2nd: '2'
      Spells Known: '4'
  '6':
    prof_bonus: 3
    feature_ids:
      - favored-enemy
      - natural-explorer
    columns:
      1st: '4'
      2nd: '2'
      Spells Known: '4'
  '7':
    prof_bonus: 3
    feature_ids: []
    columns:
      1st: '4'
      2nd: '3'
      Spells Known: '5'
  '8':
    prof_bonus: 3
    feature_ids:
      - ability-score-improvement
      - lands-stride
    columns:
      1st: '4'
      2nd: '3'
      Spells Known: '5'
  '9':
    prof_bonus: 4
    feature_ids: []
    columns:
      1st: '4'
      2nd: '3'
      3rd: '2'
      Spells Known: '6'
  '10':
    prof_bonus: 4
    feature_ids:
      - hide-in-plain-sight
      - natural-explorer
    columns:
      1st: '4'
      2nd: '3'
      3rd: '2'
      Spells Known: '6'
  '11':
    prof_bonus: 4
    feature_ids: []
    columns:
      1st: '4'
      2nd: '3'
      3rd: '3'
      Spells Known: '7'
  '12':
    prof_bonus: 4
    feature_ids:
      - ability-score-improvement
    columns:
      1st: '4'
      2nd: '3'
      3rd: '3'
      Spells Known: '7'
  '13':
    prof_bonus: 5
    feature_ids: []
    columns:
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '1'
      Spells Known: '8'
  '14':
    prof_bonus: 5
    feature_ids:
      - favored-enemy
      - vanish
    columns:
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '1'
      Spells Known: '8'
  '15':
    prof_bonus: 5
    feature_ids: []
    columns:
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '2'
      Spells Known: '9'
  '16':
    prof_bonus: 5
    feature_ids:
      - ability-score-improvement
    columns:
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '2'
      Spells Known: '9'
  '17':
    prof_bonus: 6
    feature_ids: []
    columns:
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '1'
      Spells Known: '10'
  '18':
    prof_bonus: 6
    feature_ids:
      - feral-senses
    columns:
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '1'
      Spells Known: '10'
  '19':
    prof_bonus: 6
    feature_ids:
      - ability-score-improvement
    columns:
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      Spells Known: '11'
  '20':
    prof_bonus: 6
    feature_ids:
      - foe-slayer
    columns:
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      Spells Known: '11'
features_by_level:
  '1':
    - id: favored-enemy
      name: Favored Enemy
      description: "Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.\r\n\r\nChoose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.\r\n\r\nYou have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.\r\n\r\nWhen you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.\r\n\r\nYou choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures."
      choices:
        - kind: select-inline
          id: favored-enemy
          count: 1
          options:
            - value: aberrations
              label: Aberrations
            - value: beasts
              label: Beasts
            - value: celestials
              label: Celestials
            - value: constructs
              label: Constructs
            - value: dragons
              label: Dragons
            - value: elementals
              label: Elementals
            - value: fey
              label: Fey
            - value: fiends
              label: Fiends
            - value: giants
              label: Giants
            - value: monstrosities
              label: Monstrosities
            - value: oozes
              label: Oozes
            - value: plants
              label: Plants
            - value: undead
              label: Undead
            - value: humanoids
              label: Humanoids (two races)
        - kind: select-proficiency
          id: languages
          count: 1
          domain: language
    - id: natural-explorer
      name: Natural Explorer
      description: "You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, or swamp. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you're proficient in.\r\n\r\nWhile traveling for an hour or more in your favored terrain, you gain the following benefits:\r\n\r\n* Difficult terrain doesn't slow your group's travel.\r\n* Your group can't become lost except by magical means.\r\n* Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.\r\n* If you are traveling alone, you can move stealthily at a normal pace.\r\n* When you forage, you find twice as much food as you normally would.\r\n* While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area. \r\n\r\nYou choose additional favored terrain types at 6th and 10th level."
      choices:
        - kind: select-inline
          id: favored-terrain
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
  '2':
    - id: fighting-style
      name: Fighting Style
      description: "At 2nd level, you adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.\r\n\r\n### Archery\r\n\r\nYou gain a +2 bonus to attack rolls you make with ranged weapons.\r\n\r\n### Defense\r\n\r\nWhile you are wearing armor, you gain a +1 bonus to AC.\r\n\r\n### Dueling\r\n\r\nWhen you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.\r\n\r\n### Two-Weapon Fighting\r\n\r\nWhen you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack."
      choices:
        - kind: select-entity
          id: fighting-style
          count: 1
          entity_type: optional-feature
          where:
            feature_type: fighting_style
            available_to: self
    - id: spellcasting
      name: Spellcasting
      description: "By the time you reach 2nd level, you have learned to use the magical essence of nature to cast spells, much as a druid does. See chapter 10 for the general rules of spellcasting and chapter 11 for the ranger spell list.\r\n\r\n### Spell Slots\r\n\r\nThe Ranger table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.\r\n\r\nFor example, if you know the 1st-level spell animal friendship and have a 1st-level and a 2nd-level spell slot available, you can cast animal friendship using either slot.\r\n\r\n### Spells Known of 1st Level and Higher\r\n\r\nYou know two 1st-level spells of your choice from the ranger spell list.\r\n\r\nThe Spells Known column of the Ranger table shows when you learn more ranger spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 5th level in this class, you can learn one new spell of 1st or 2nd level.\r\n\r\nAdditionally, when you gain a level in this class, you can choose one of the ranger spells you know and replace it with another spell from the ranger spell list, which also must be of a level for which you have spell slots.\r\n\r\n### Spellcasting Ability\r\n\r\nWisdom is your spellcasting ability for your ranger spells, since your magic draws on your attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a ranger spell you cast and when making an attack roll with one.\r\n\r\n**Spell save DC** = 8 + your proficiency bonus + your Wisdom modifier\r\n\r\n**Spell attack modifier** = your proficiency bonus + your Wisdom modifier"
  '3':
    - id: primeval-awareness
      name: Primeval Awareness
      description: 'Beginning at 3rd level, you can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn''t reveal the creatures'' location or number.'
    - id: ranger-archetype
      name: Ranger Archetype
      description: 'At 3rd level, you choose an archetype that you strive to emulate: Hunter or Beast Master, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 7th, 11th, and 15th level.'
      choices:
        - kind: select-entity
          id: subclass
          count: 1
          entity_type: subclass
          where:
            parent_class: self
  '4':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.
      choices:
        - kind: select-inline
          id: asi-or-feat
          count: 1
          options:
            - value: asi
              label: Ability Score Increase
              choices:
                - kind: ability-points
                  id: asi
                  points: 2
                  max_per: 2
            - value: feat
              label: Feat
              choices:
                - kind: select-entity
                  id: feat
                  count: 1
                  entity_type: feat
  '5':
    - id: extra-attack
      name: Extra Attack
      description: Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.
  '6':
    - id: favored-enemy
      name: Favored Enemy
      description: "Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.\r\n\r\nChoose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.\r\n\r\nYou have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.\r\n\r\nWhen you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.\r\n\r\nYou choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures."
      choices:
        - kind: select-inline
          id: favored-enemy
          count: 1
          options:
            - value: aberrations
              label: Aberrations
            - value: beasts
              label: Beasts
            - value: celestials
              label: Celestials
            - value: constructs
              label: Constructs
            - value: dragons
              label: Dragons
            - value: elementals
              label: Elementals
            - value: fey
              label: Fey
            - value: fiends
              label: Fiends
            - value: giants
              label: Giants
            - value: monstrosities
              label: Monstrosities
            - value: oozes
              label: Oozes
            - value: plants
              label: Plants
            - value: undead
              label: Undead
            - value: humanoids
              label: Humanoids (two races)
        - kind: select-proficiency
          id: languages
          count: 1
          domain: language
    - id: natural-explorer
      name: Natural Explorer
      description: "You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, or swamp. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you're proficient in.\r\n\r\nWhile traveling for an hour or more in your favored terrain, you gain the following benefits:\r\n\r\n* Difficult terrain doesn't slow your group's travel.\r\n* Your group can't become lost except by magical means.\r\n* Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.\r\n* If you are traveling alone, you can move stealthily at a normal pace.\r\n* When you forage, you find twice as much food as you normally would.\r\n* While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area. \r\n\r\nYou choose additional favored terrain types at 6th and 10th level."
      choices:
        - kind: select-inline
          id: favored-terrain
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
  '8':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.
      choices:
        - kind: select-inline
          id: asi-or-feat
          count: 1
          options:
            - value: asi
              label: Ability Score Increase
              choices:
                - kind: ability-points
                  id: asi
                  points: 2
                  max_per: 2
            - value: feat
              label: Feat
              choices:
                - kind: select-entity
                  id: feat
                  count: 1
                  entity_type: feat
    - id: lands-stride
      name: Land's Stride
      description: "Starting at 8th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.\r\n\r\nIn addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell."
  '10':
    - id: hide-in-plain-sight
      name: Hide in Plain Sight
      description: "Starting at 10th level, you can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage.\r\n\r\nOnce you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit."
    - id: natural-explorer
      name: Natural Explorer
      description: "You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, or swamp. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you're proficient in.\r\n\r\nWhile traveling for an hour or more in your favored terrain, you gain the following benefits:\r\n\r\n* Difficult terrain doesn't slow your group's travel.\r\n* Your group can't become lost except by magical means.\r\n* Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.\r\n* If you are traveling alone, you can move stealthily at a normal pace.\r\n* When you forage, you find twice as much food as you normally would.\r\n* While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area. \r\n\r\nYou choose additional favored terrain types at 6th and 10th level."
      choices:
        - kind: select-inline
          id: favored-terrain
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
  '12':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.
      choices:
        - kind: select-inline
          id: asi-or-feat
          count: 1
          options:
            - value: asi
              label: Ability Score Increase
              choices:
                - kind: ability-points
                  id: asi
                  points: 2
                  max_per: 2
            - value: feat
              label: Feat
              choices:
                - kind: select-entity
                  id: feat
                  count: 1
                  entity_type: feat
  '14':
    - id: favored-enemy
      name: Favored Enemy
      description: "Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.\r\n\r\nChoose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.\r\n\r\nYou have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.\r\n\r\nWhen you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.\r\n\r\nYou choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures."
      choices:
        - kind: select-inline
          id: favored-enemy
          count: 1
          options:
            - value: aberrations
              label: Aberrations
            - value: beasts
              label: Beasts
            - value: celestials
              label: Celestials
            - value: constructs
              label: Constructs
            - value: dragons
              label: Dragons
            - value: elementals
              label: Elementals
            - value: fey
              label: Fey
            - value: fiends
              label: Fiends
            - value: giants
              label: Giants
            - value: monstrosities
              label: Monstrosities
            - value: oozes
              label: Oozes
            - value: plants
              label: Plants
            - value: undead
              label: Undead
            - value: humanoids
              label: Humanoids (two races)
        - kind: select-proficiency
          id: languages
          count: 1
          domain: language
    - id: vanish
      name: Vanish
      description: Starting at 14th level, you can use the Hide action as a bonus action on your turn. Also, you can't be tracked by nonmagical means, unless you choose to leave a trail.
  '16':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.
      choices:
        - kind: select-inline
          id: asi-or-feat
          count: 1
          options:
            - value: asi
              label: Ability Score Increase
              choices:
                - kind: ability-points
                  id: asi
                  points: 2
                  max_per: 2
            - value: feat
              label: Feat
              choices:
                - kind: select-entity
                  id: feat
                  count: 1
                  entity_type: feat
  '18':
    - id: feral-senses
      name: Feral Senses
      description: "At 18th level, you gain preternatural senses that help you fight creatures you can't see. When you attack a creature you can't see, your inability to see it doesn't impose disadvantage on your attack rolls against it.\r\n\r\nYou are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn't hidden from you and you aren't blinded or deafened."
  '19':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.
      choices:
        - kind: select-inline
          id: asi-or-feat
          count: 1
          options:
            - value: asi
              label: Ability Score Increase
              choices:
                - kind: ability-points
                  id: asi
                  points: 2
                  max_per: 2
            - value: feat
              label: Feat
              choices:
                - kind: select-entity
                  id: feat
                  count: 1
                  entity_type: feat
  '20':
    - id: foe-slayer
      name: Foe Slayer
      description: At 20th level, you become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied.
resources: []
starting_gold:
  dice: 5d4
  multiplier: 10
```
