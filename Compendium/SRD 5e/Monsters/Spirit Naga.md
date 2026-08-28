---
archivist: true
entity_type: monster
slug: srd-5e_monster_spirit-naga
name: Spirit Naga
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.017Z'
---

```monster
slug: srd-5e_monster_spirit-naga
name: Spirit Naga
edition: '2014'
source: SRD 5.1
size: large
type: monstrosity
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
senses:
  - darkvision 60 ft.
languages:
  - Abyssal
  - Common
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - poison
condition_immunities:
  - charmed
  - poisoned
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one creature. Hit: `dmg:1d6+STR` piercing damage, and the target must make a `dc:CON` Constitution saving throw, taking `dmg:7d8` poison damage on a failed save, or half as much damage on a successful one.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 7
        damage_type: thunder
        range:
          reach: 10
reactions: []
legendary_actions: []
traits:
  - name: Rejuvenation
    entries:
      - If it dies, the naga returns to life in `dice:1d6` days and regains all its hit points. Only a wish spell can prevent this trait from functioning.
  - name: Spellcasting
    entries:
      - |-
        The naga is a 10th-level spellcaster. Its spellcasting ability is Intelligence (spell save `dc:INT`, `atk:+6` with spell attacks), and it needs only verbal components to cast its spells. It has the following wizard spells prepared:

        * Cantrips (at will): mage hand, minor illusion, ray of frost
        * 1st level (4 slots): charm person, detect magic, sleep
        * 2nd level (3 slots): detect thoughts, hold person
        * 3rd level (3 slots): lightning bolt, water breathing
        * 4th level (3 slots): blight, dimension door
        * 5th level (2 slots): dominate person
cr: '8'
saves:
  dex: 6
  con: 5
  wis: 5
  cha: 6
subtype: Nagas
alignment: chaotic evil
passive_perception: 12
```
