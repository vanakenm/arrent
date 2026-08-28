---
archivist: true
entity_type: class
slug: srd-2024_class_druid
name: Druid
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.105Z'
---

```class
slug: srd-2024_class_druid
name: Druid
edition: '2024'
source: SRD 5.2
description: ''
hit_die: d8
primary_abilities:
  - wis
saving_throws:
  - int
  - wis
proficiencies:
  armor:
    - light
    - shield
  weapons:
    categories:
      - simple
  tools:
    fixed:
      - Herbalism Kit
skill_choices:
  count: 2
  from:
    - animal-handling
    - arcana
    - insight
    - medicine
    - nature
    - perception
    - religion
    - survival
starting_equipment:
  - kind: choice
    options:
      - label: Leather Armor, Shield, Sickle, Druidic Focus (Quarterstaff), Explorer's Pack, Herbalism Kit, and 9 GP
        grants:
          - item: leather-armor
          - item: shield
          - item: sickle
          - item: quarterstaff
          - gold: 9
      - label: 50 GP
        grants:
          - gold: 50
spellcasting:
  caster_type: full
  ability: wis
  preparation: prepared
  spell_list: druid
subclass_level: 3
subclass_feature_name: Druid Subclass
weapon_mastery: null
epic_boon_level: null
table:
  '1':
    prof_bonus: 2
    feature_ids:
      - druidic
      - primal-order
      - spellcasting
    columns:
      Cantrips: '2'
      Prepared Spells: '4'
      1st: '2'
  '2':
    prof_bonus: 2
    feature_ids:
      - wild-companion
      - wild-shape
    columns:
      Cantrips: '2'
      Prepared Spells: '5'
      1st: '3'
      Cantrips Known: '2'
  '3':
    prof_bonus: 2
    feature_ids:
      - druid-subclass
    columns:
      Cantrips: '2'
      Prepared Spells: '6'
      1st: '4'
      2nd: '2'
      Cantrips Known: '2'
  '4':
    prof_bonus: 2
    feature_ids:
      - ability-score-improvement
    columns:
      Cantrips: '3'
      Prepared Spells: '7'
      1st: '4'
      2nd: '3'
      Cantrips Known: '2'
  '5':
    prof_bonus: 3
    feature_ids:
      - wild-resurgence
    columns:
      Cantrips: '3'
      Prepared Spells: '9'
      1st: '4'
      2nd: '3'
      3rd: '2'
      Cantrips Known: '2'
  '6':
    prof_bonus: 3
    feature_ids: []
    columns:
      Cantrips: '3'
      Prepared Spells: '10'
      1st: '4'
      2nd: '3'
      3rd: '3'
      Cantrips Known: '3'
  '7':
    prof_bonus: 3
    feature_ids:
      - elemental-fury
    columns:
      Cantrips: '3'
      Prepared Spells: '11'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '1'
      Cantrips Known: '3'
  '8':
    prof_bonus: 3
    feature_ids:
      - ability-score-improvement
    columns:
      Cantrips: '3'
      Prepared Spells: '12'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '2'
      Cantrips Known: '3'
  '9':
    prof_bonus: 4
    feature_ids: []
    columns:
      Cantrips: '3'
      Prepared Spells: '14'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '1'
      Cantrips Known: '3'
  '10':
    prof_bonus: 4
    feature_ids: []
    columns:
      Cantrips: '4'
      Prepared Spells: '15'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      Cantrips Known: '3'
  '11':
    prof_bonus: 4
    feature_ids: []
    columns:
      Cantrips: '4'
      Prepared Spells: '16'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      6th: '1'
      Cantrips Known: '3'
  '12':
    prof_bonus: 4
    feature_ids:
      - ability-score-improvement
    columns:
      Cantrips: '4'
      Prepared Spells: '16'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      6th: '1'
      Cantrips Known: '3'
  '13':
    prof_bonus: 5
    feature_ids: []
    columns:
      Cantrips: '4'
      Prepared Spells: '17'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      6th: '1'
      7th: '1'
      Cantrips Known: '3'
  '14':
    prof_bonus: 5
    feature_ids: []
    columns:
      Cantrips: '4'
      Prepared Spells: '17'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      6th: '1'
      7th: '1'
      Cantrips Known: '3'
  '15':
    prof_bonus: 5
    feature_ids:
      - improved-elemental-fury
    columns:
      Cantrips: '4'
      Prepared Spells: '18'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      6th: '1'
      7th: '1'
      8th: '1'
      Cantrips Known: '3'
  '16':
    prof_bonus: 5
    feature_ids:
      - ability-score-improvement
    columns:
      Cantrips: '4'
      Prepared Spells: '18'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      6th: '1'
      7th: '1'
      8th: '1'
      Cantrips Known: '3'
  '17':
    prof_bonus: 6
    feature_ids: []
    columns:
      Cantrips: '4'
      Prepared Spells: '19'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '2'
      6th: '1'
      7th: '1'
      8th: '1'
      9th: '1'
      Cantrips Known: '4'
  '18':
    prof_bonus: 6
    feature_ids:
      - beast-spells
    columns:
      Cantrips: '4'
      Prepared Spells: '20'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '3'
      6th: '1'
      7th: '1'
      8th: '1'
      9th: '1'
      Cantrips Known: '4'
  '19':
    prof_bonus: 6
    feature_ids:
      - epic-boon
    columns:
      Cantrips: '4'
      Prepared Spells: '21'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '3'
      6th: '2'
      7th: '1'
      8th: '1'
      9th: '1'
      Cantrips Known: '4'
  '20':
    prof_bonus: 6
    feature_ids:
      - archdruid
    columns:
      Cantrips: '4'
      Prepared Spells: '22'
      1st: '4'
      2nd: '3'
      3rd: '3'
      4th: '3'
      5th: '3'
      6th: '2'
      7th: '2'
      8th: '1'
      9th: '1'
      Cantrips Known: '4'
features_by_level:
  '1':
    - id: druidic
      name: Druidic
      description: |-
        You know Druidic, the secret language of Druids. While learning this ancient tongue, you also unlocked the magic of communicating with animals; you always have the *Speak with Animals* spell prepared.

        You can use Druidic to leave hidden messages. You and others who know Druidic automatically spot such a message. Others spot the message's presence with a successful DC 15 Intelligence (Investigation) check but can't decipher it without magic.
    - id: primal-order
      name: Primal Order
      description: |-
        You have dedicated yourself to one of the following sacred roles of your choice.

        **Magician.** You know one extra cantrip from the Druid spell list. In addition, your mystical connection to nature gives you a bonus to your Intelligence (Arcana or Nature) checks. The bonus equals your Wisdom modifier (minimum bonus of +1).

        **Warden.** Trained for battle, you gain proficiency with Martial weapons and training with Medium armor.
      choices:
        - kind: select-inline
          id: primal-order
          count: 1
          options:
            - value: magician
              label: Magician
              description: You know one extra cantrip from the Druid spell list, and gain a bonus to Intelligence (Arcana or Nature) checks equal to your Wisdom modifier (minimum +1).
            - value: warden
              label: Warden
              description: Trained for battle, you gain proficiency with Martial weapons and training with Medium armor.
    - id: spellcasting
      name: Spellcasting
      description: |-
        You have learned to cast spells through studying the mystical forces of nature. See "Spells" for the rules on spellcasting. The information below details how you use those rules with Druid spells, which appear on the Druid spell list later in the class's description.

        **Cantrips.** You know two cantrips of your choice from the Druid spell list. *Druidcraft* and *Produce Flame* are recommended.

        Whenever you gain a Druid level, you can replace one of your cantrips with another cantrip of your choice from the Druid spell list.

        When you reach Druid levels 4 and 10, you learn another cantrip of your choice from the Druid spell list, as shown in the Cantrips column of the Druid Features table.

        **Spell Slots.** The Druid Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.

        **Prepared Spells of Level 1+.** You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose four level 1 spells from the Druid spell list. *Animal Friendship*, *Cure Wounds*, *Faerie Fire*, and *Thunderwave* are recommended.

        The number of spells on your list increases as you gain Druid levels, as shown in the Prepared Spells column of the Druid Features table. Whenever that number increases, choose additional spells from the Druid spell list until the number of spells on your list matches the number on the table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 3 Druid, your list of prepared spells can include six spells of levels 1 and 2 in any combination.

        If another Druid feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Druid spells for you.

        **Changing Your Prepared Spells.** Whenever you finish a Long Rest, you can change your list of prepared spells, replacing any of the spells with other Druid spells for which you have spell slots.

        **Spellcasting Ability.** Wisdom is your spellcasting ability for your Druid spells.

        **Spellcasting Focus.** You can use a Druidic Focus as a Spellcasting Focus for your Druid spells.
  '2':
    - id: wild-companion
      name: Wild Companion
      description: |-
        You can summon a nature spirit that assumes an animal form to aid you. As a Magic action, you can expend a spell slot or a use of Wild Shape to cast the *Find Familiar* spell without Material components.

        When you cast the spell in this way, the familiar is Fey and disappears when you finish a Long Rest.
    - id: wild-shape
      name: Wild Shape
      description: |-
        The power of nature allows you to assume the form of an animal. As a Bonus Action, you shape-shift into a Beast form that you have learned for this feature (see "Known Forms" below). You stay in that form for a number of hours equal to half your Druid level or until you use Wild Shape again, have the Incapacitated condition, or die. You can also leave the form early as a Bonus Action.

        **Number of Uses.** You can use Wild Shape twice. You regain one expended use when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest.

        You gain additional uses when you reach certain Druid levels, as shown in the Wild Shape column of the Druid Features table.

        **Known Forms.** You know four Beast forms for this feature, chosen from among Beast stat blocks that have a maximum Challenge Rating of 1/4 and that lack a Fly Speed (see "Animals" in "Monsters" for stat block options). The **Rat**, **Riding Horse**, **Spider**, and **Wolf** are recommended. Whenever you finish a Long Rest, you can replace one of your known forms with another eligible form.

        When you reach certain Druid levels, your number of known forms and the maximum Challenge Rating for those forms increases, as shown in the Beast Shapes table. In addition, starting at level 8, you can adopt a form that has a Fly Speed.

        When choosing known forms, you may look in other sources for eligible Beasts if the Game Master permits you to do so.

        Table: Beast Shapes

        |Druid Level|Known Forms|Max CR|Fly Speed|
        |---|---|---|---|
        |2|4|1/4|No|
        |4|6|1/2|No|
        |8|8|1|Yes|

        **Rules While Shape-Shifted.** While in a form, you retain your personality, memories, and ability to speak, and the following rules apply:
        - **Temporary Hit Points.** When you assume a Wild Shape form, you gain a number of Temporary Hit Points equal to your Druid level.
        - **Game Statistics.** Your game statistics are replaced by the Beast's stat block, but you retain your creature type; Hit Points; Hit Point Dice; Intelligence, Wisdom, and Charisma scores; class features; languages; and feats. You also retain your skill and saving throw proficiencies and use your Proficiency Bonus for them, in addition to gaining the proficiencies of the creature. If a skill or saving throw modifier in the Beast's stat block is higher than yours, use the one in the stat block.
        - **No Spellcasting.** You can't cast spells, but shapeshifting doesn't break your Concentration or otherwise interfere with a spell you've already cast.
        - **Objects.** Your ability to handle objects is determined by the form's limbs rather than your own. In addition, you choose whether your equipment falls in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the GM decides whether it's practical for the new form to wear a piece of equipment based on the creature's size and shape. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with the form. Equipment that merges with the form has no effect while you're in that form.
      action: bonus-action
      resources:
        - id: druid:wild-shape
          name: Wild Shape
          max_formula: '2'
          scales_at:
            - level: 6
              max: '3'
            - level: 17
              max: '4'
          reset: short-rest
  '3':
    - id: druid-subclass
      name: Druid Subclass
      description: You gain a Druid subclass of your choice. The Circle of the Land subclass is detailed after this class's description. A subclass is a specialization that grants you features at certain Druid levels. For the rest of your career, you gain each of your subclass's features that are of your Druid level or lower.
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
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Druid levels 8, 12, and 16.
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
    - id: wild-resurgence
      name: Wild Resurgence
      description: |-
        Once on each of your turns, if you have no uses of Wild Shape left, you can give yourself one use by expending a spell slot (no action required).

        In addition, you can expend one use of Wild Shape (no action required) to give yourself a level 1 spell slot, but you can't do so again until you finish a Long Rest.
  '7':
    - id: elemental-fury
      name: Elemental Fury
      description: |-
        The might of the elements flows through you. You gain one of the following options of your choice.

        **Potent Spellcasting.** Add your Wisdom modifier to the damage you deal with any Druid cantrip.

        **Primal Strike.** Once on each of your turns when you hit a creature with an attack roll using a weapon or a Beast form's attack in Wild Shape, you can cause the target to take an extra 1d8 Cold, Fire, Lightning, or Thunder damage (choose when you hit).
      choices:
        - kind: select-inline
          id: elemental-fury
          count: 1
          options:
            - value: potent-spellcasting
              label: Potent Spellcasting
              description: Add your Wisdom modifier to the damage you deal with any Druid cantrip.
            - value: primal-strike
              label: Primal Strike
              description: Once on each of your turns when you hit with a weapon or a Wild Shape Beast attack, deal an extra 1d8 Cold, Fire, Lightning, or Thunder damage.
  '8':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Druid levels 8, 12, and 16.
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
  '12':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Druid levels 8, 12, and 16.
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
  '15':
    - id: improved-elemental-fury
      name: Improved Elemental Fury
      description: |-
        The option you chose for Elemental Fury grows more powerful, as detailed below.

        **Potent Spellcasting.** When you cast a Druid cantrip with a range of 10 feet or greater, the spell's range increases by 300 feet.

        **Primal Strike.** The extra damage of your Primal Strike increases to 2d8.
  '16':
    - id: ability-score-improvement
      name: Ability Score Improvement
      description: You gain the Ability Score Improvement feat (see "Feats") or another feat of your choice for which you qualify. You gain this feature again at Druid levels 8, 12, and 16.
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
    - id: beast-spells
      name: Beast Spells
      description: While using Wild Shape, you can cast spells in Beast form, except for any spell that has a Material component with a cost specified or that consumes its Material component.
  '19':
    - id: epic-boon
      name: Epic Boon
      description: You gain an Epic Boon feat (see "Feats") or another feat of your choice for which you qualify. Boon of Dimensional Travel is recommended.
      choices:
        - kind: select-entity
          id: epic-boon
          count: 1
          entity_type: feat
  '20':
    - id: archdruid
      name: Archdruid
      description: |-
        The vitality of nature constantly blooms within you, granting you the following benefits.

        **Evergreen Wild Shape.** Whenever you roll Initiative and have no uses of Wild Shape left, you regain one expended use of it.

        **Nature Magician.** You can convert uses of Wild Shape into a spell slot (no action required). Choose a number of your unexpended uses of Wild Shape and convert them into a single spell slot, with each use contributing 2 spell levels. For example, if you convert two uses of Wild Shape, you produce a level 4 spell slot. Once you use this benefit, you can't do so again until you finish a Long Rest.

        **Longevity.** The primal magic that you wield causes you to age more slowly. For every ten years that pass, your body ages only one year.
resources: []
starting_gold:
  fixed: 50
```
