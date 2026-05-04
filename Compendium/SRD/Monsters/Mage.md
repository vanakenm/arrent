---
archivist: true
entity_type: monster
slug: mage
name: Mage
compendium: SRD
---

```monster
name: Mage
size: Medium
type: Humanoid
subtype: any race
alignment: any alignment
ac:
  - ac: 12
    from:
      - 15 with _mage armor_
hp:
  average: 40
  formula: 9d8
speed:
  walk: 30
abilities:
  str: 9
  dex: 14
  con: 11
  int: 17
  wis: 12
  cha: 11
saves:
  int: 6
  wis: 4
skills:
  arcana: 6
  history: 6
passive_perception: 11
languages:
  - any four languages
cr: '6'
traits:
  - name: Spellcasting
    entries:
      - |-
        The mage is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save `dc:INT`, `atk:INT` with spell attacks). The mage has the following wizard spells prepared:

        * Cantrips (at will): fire bolt, light, mage hand, prestidigitation
        * 1st level (4 slots): detect magic, mage armor, magic missile, shield
        * 2nd level (3 slots): misty step, suggestion
        * 3rd level (3 slots): counterspell, fireball, fly
        * 4th level (3 slots): greater invisibility, ice storm
        * 5th level (1 slot): cone of cold
actions:
  - name: Dagger
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:DEX`, reach 5 ft. or range 20/60 ft., one target. Hit: `damage:1d4+DEX` piercing damage.'
```
