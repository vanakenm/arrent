---
archivist: true
entity_type: monster
slug: druid
name: Druid
compendium: SRD
---

```monster
name: Druid
size: Medium
type: Humanoid
subtype: any race
alignment: any alignment
ac:
  - ac: 11
    from:
      - 16 with _barkskin_
hp:
  average: 27
  formula: 5d8+5
speed:
  walk: 30
abilities:
  str: 10
  dex: 12
  con: 13
  int: 12
  wis: 15
  cha: 11
skills:
  medicine: 4
  nature: 3
  perception: 4
passive_perception: 14
languages:
  - Druidic plus any two languages
cr: '2'
traits:
  - name: Spellcasting
    entries:
      - |-
        The druid is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save `dc:WIS`, `atk:WIS` with spell attacks). It has the following druid spells prepared:

        * Cantrips (at will): druidcraft, produce flame, shillelagh
        * 1st level (4 slots): entangle, longstrider, speak with animals, thunderwave
        * 2nd level (3 slots): animal messenger, barkskin
actions:
  - name: Quarterstaff
    entries:
      - 'Melee Weapon Attack: `atk:STR` (`atk:WIS` with shillelagh), reach 5 ft., one target. Hit: `damage:1d6` bludgeoning damage, or `damage:1d8+WIS` bludgeoning damage with shillelagh or if wielded with two hands.'
```
