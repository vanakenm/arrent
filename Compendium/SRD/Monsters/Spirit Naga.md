---
archivist: true
entity_type: monster
slug: spirit-naga
name: Spirit Naga
compendium: SRD
---

```monster
name: Spirit Naga
size: Large
type: Monstrosity
alignment: chaotic evil
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 75
  formula: 10d10+20
speed:
  walk: 40
abilities:
  str: 18
  dex: 17
  con: 14
  int: 16
  wis: 15
  cha: 16
saves:
  dex: 6
  con: 5
  wis: 5
  cha: 6
senses:
  - darkvision 60 ft.
passive_perception: 12
languages:
  - Abyssal
  - Common
damage_immunities:
  - poison
condition_immunities:
  - charmed
  - poisoned
cr: '8'
traits:
  - name: Rejuvenation
    entries:
      - If it dies, the naga returns to life in `dice:1d6` days and regains all its hit points. Only a wish spell can prevent this trait from functioning.
  - name: Spellcasting
    entries:
      - |-
        The naga is a 10th-level spellcaster. Its spellcasting ability is Intelligence (spell save `dc:INT`, `atk:INT` with spell attacks), and it needs only verbal components to cast its spells. It has the following wizard spells prepared:

        * Cantrips (at will): mage hand, minor illusion, ray of frost
        * 1st level (4 slots): charm person, detect magic, sleep
        * 2nd level (3 slots): detect thoughts, hold person
        * 3rd level (3 slots): lightning bolt, water breathing
        * 4th level (3 slots): blight, dimension door
        * 5th level (2 slots): dominate person
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one creature. Hit: `damage:1d6+STR` piercing damage, and the target must make a `dc:CON` Constitution saving throw, taking `damage:7d8` poison damage on a failed save, or half as much damage on a successful one.'
```
