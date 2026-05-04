---
archivist: true
entity_type: monster
slug: dryad
name: Dryad
compendium: SRD
---

```monster
name: Dryad
size: Medium
type: Fey
alignment: neutral
ac:
  - ac: 11
    from:
      - 16 with _barkskin_
hp:
  average: 22
  formula: 5d8
speed:
  walk: 30
abilities:
  str: 10
  dex: 12
  con: 11
  int: 14
  wis: 15
  cha: 18
skills:
  perception: 4
  stealth: 5
senses:
  - darkvision 60 ft.
passive_perception: 14
languages:
  - Elvish
  - Sylvan
cr: '1'
traits:
  - name: Innate Spellcasting
    entries:
      - |-
        The dryad's innate spellcasting ability is Charisma (spell save `dc:CHA`). The dryad can innately cast the following spells, requiring no material components:

        At will: druidcraft
        3/day each: entangle, goodberry
        1/day each: barkskin, pass without trace, shillelagh
  - name: Magic Resistance
    entries:
      - The dryad has advantage on saving throws against spells and other magical effects.
  - name: Speak with Beasts and Plants
    entries:
      - The dryad can communicate with beasts and plants as if they shared a language.
  - name: Tree Stride
    entries:
      - Once on her turn, the dryad can use 10 ft. of her movement to step magically into one living tree within her reach and emerge from a second living tree within 60 ft. of the first tree, appearing in an unoccupied space within 5 ft. of the second tree. Both trees must be large or bigger.
actions:
  - name: Club
    entries:
      - 'Melee Weapon Attack: `atk:STR` (`atk:CHA` with shillelagh), reach 5 ft., one target. Hit: `damage:1d4` bludgeoning damage, or `damage:1d8+CHA` bludgeoning damage with shillelagh.'
  - name: Fey Charm
    entries:
      - |-
        The dryad targets one humanoid or beast that she can see within 30 feet of her. If the target can see the dryad, it must succeed on a `dc:14` Wisdom saving throw or be magically charmed. The charmed creature regards the dryad as a trusted friend to be heeded and protected. Although the target isn't under the dryad's control, it takes the dryad's requests or actions in the most favorable way it can.
        Each time the dryad or its allies do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the dryad dies, is on a different plane of existence from the target, or ends the effect as a bonus action. If a target's saving throw is successful, the target is immune to the dryad's Fey Charm for the next 24 hours.
        The dryad can have no more than one humanoid and up to three beasts charmed at a time.
```
