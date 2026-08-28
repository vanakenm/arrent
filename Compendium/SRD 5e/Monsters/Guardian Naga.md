---
archivist: true
entity_type: monster
slug: srd-5e_monster_guardian-naga
name: Guardian Naga
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.000Z'
---

```monster
slug: srd-5e_monster_guardian-naga
name: Guardian Naga
edition: '2014'
source: SRD 5.1
size: large
type: monstrosity
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 127
  formula: 15d10+45
speed:
  walk: 40
abilities:
  str: 19
  dex: 18
  con: 16
  int: 16
  wis: 19
  cha: 18
senses:
  - darkvision 60 ft.
languages:
  - Celestial
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
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one creature. Hit: `dmg:1d8+STR` piercing damage, and the target must make a `dc:CON` Constitution saving throw, taking `dmg:10d8` poison damage on a failed save, or half as much damage on a successful one.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 8
        damage_type: thunder
        range:
          reach: 10
  - name: Spit Poison
    entries:
      - 'Ranged Weapon Attack: `atk:+8`, range 15/30 ft., one creature. Hit: The target must make a `dc:CON` Constitution saving throw, taking `dmg:10d8` poison damage on a failed save, or half as much damage on a successful one.'
    attacks:
      - name: Spit Poison attack
        type: ranged
        bonus: 8
        range:
          normal: 15
          long: 30
reactions: []
legendary_actions: []
traits:
  - name: Rejuvenation
    entries:
      - If it dies, the naga returns to life in `dice:1d6` days and regains all its hit points. Only a wish spell can prevent this trait from functioning.
  - name: Spellcasting
    entries:
      - |-
        The naga is an 11th-level spellcaster. Its spellcasting ability is Wisdom (spell save `dc:WIS`, `atk:+8` with spell attacks), and it needs only verbal components to cast its spells. It has the following cleric spells prepared:

        * Cantrips (at will): mending, sacred flame, thaumaturgy
        * 1st level (4 slots): command, cure wounds, shield of faith
        * 2nd level (3 slots): calm emotions, hold person
        * 3rd level (3 slots): bestow curse, clairvoyance
        * 4th level (3 slots): banishment, freedom of movement
        * 5th level (2 slots): flame strike, geas
        * 6th level (1 slot): true seeing
cr: '10'
saves:
  dex: 8
  con: 7
  int: 7
  wis: 8
  cha: 8
subtype: Nagas
alignment: lawful good
passive_perception: 14
```
