---
archivist: true
entity_type: monster
slug: medusa
name: Medusa
compendium: SRD
---

```monster
name: Medusa
size: Medium
type: Monstrosity
alignment: lawful evil
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 127
  formula: 17d8+51
speed:
  walk: 30
abilities:
  str: 10
  dex: 15
  con: 16
  int: 12
  wis: 13
  cha: 15
skills:
  deception: 5
  insight: 4
  perception: 4
  stealth: 5
senses:
  - darkvision 60 ft.
passive_perception: 14
languages:
  - Common
cr: '6'
traits:
  - name: Petrifying Gaze
    entries:
      - |-
        When a creature that can see the medusa's eyes starts its turn within 30 ft. of the medusa, the medusa can force it to make a `dc:CON` Constitution saving throw if the medusa isn't incapacitated and can see the creature. If the saving throw fails by 5 or more, the creature is instantly petrified. Otherwise, a creature that fails the save begins to turn to stone and is restrained. The restrained creature must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the creature is freed by the greater restoration spell or other magic.
        Unless surprised, a creature can avert its eyes to avoid the saving throw at the start of its turn. If the creature does so, it can't see the medusa until the start of its next turn, when it can avert its eyes again. If the creature looks at the medusa in the meantime, it must immediately make the save.
        If the medusa sees itself reflected on a polished surface within 30 ft. of it and in an area of bright light, the medusa is, due to its curse, affected by its own gaze.
actions:
  - name: Multiattack
    entries:
      - The medusa makes either three melee attacks - one with its snake hair and two with its shortsword - or two ranged attacks with its longbow.
  - name: Snake Hair
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one creature. Hit: `damage:1d4+DEX` piercing damage plus `damage:4d6` poison damage.'
  - name: Shortsword
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: `damage:1d6+DEX` piercing damage.'
  - name: Longbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX`, range 150/600 ft., one target. Hit: `damage:1d8+DEX` piercing damage plus `damage:2d6` poison damage.'
```
