---
archivist: true
entity_type: monster
slug: drider
name: Drider
compendium: SRD
---

```monster
name: Drider
size: Large
type: Monstrosity
alignment: chaotic evil
ac:
  - ac: 19
    from:
      - natural armor
hp:
  average: 123
  formula: 13d10+52
speed:
  walk: 30
  climb: 30
abilities:
  str: 16
  dex: 16
  con: 18
  int: 13
  wis: 14
  cha: 12
skills:
  perception: 5
  stealth: 9
senses:
  - darkvision 120 ft.
passive_perception: 15
languages:
  - Elvish
  - Undercommon
cr: '6'
traits:
  - name: Fey Ancestry
    entries:
      - The drider has advantage on saving throws against being charmed, and magic can't put the drider to sleep.
  - name: Innate Spellcasting
    entries:
      - |-
        The drider's innate spellcasting ability is Wisdom (spell save `dc:WIS`). The drider can innately cast the following spells, requiring no material components:
        At will: dancing lights
        1/day each: darkness, faerie fire
  - name: Spider Climb
    entries:
      - The drider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.
  - name: Sunlight Sensitivity
    entries:
      - While in sunlight, the drider has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.
  - name: Web Walker
    entries:
      - The drider ignores movement restrictions caused by webbing.
actions:
  - name: Multiattack
    entries:
      - The drider makes three attacks, either with its longsword or its longbow. It can replace one of those attacks with a bite attack.
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one creature. Hit: `damage:1d4` piercing damage plus `damage:2d8` poison damage.'
  - name: Longsword
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d8+STR` slashing damage, or `damage:1d10+STR` slashing damage if used with two hands.'
  - name: Longbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX`, range 150/600 ft., one target. Hit: `damage:1d8+DEX` piercing damage plus `damage:1d8` poison damage.'
```
