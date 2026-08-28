---
archivist: true
entity_type: monster
slug: srd-5e_monster_drider
name: Drider
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.988Z'
---

```monster
slug: srd-5e_monster_drider
name: Drider
edition: '2014'
source: SRD 5.1
size: large
type: monstrosity
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
senses:
  - darkvision 120 ft.
languages:
  - Elvish
  - Undercommon
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The drider makes three attacks, either with its longsword or its longbow. It can replace one of those attacks with a bite attack.
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:+6`, reach 5 ft., one creature. Hit: `dmg:1d4` piercing damage plus `dmg:2d8` poison damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 6
        damage_type: thunder
        range:
          reach: 5
  - name: Longsword
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d8+STR` slashing damage, or `dmg:1d10+STR` slashing damage if used with two hands.'
    attacks:
      - name: Longsword attack
        type: melee
        bonus: 6
        damage: 1d10
        damage_type: thunder
        range:
          reach: 5
  - name: Longbow
    entries:
      - 'Ranged Weapon Attack: `atk:STR+PB`, range 150/600 ft., one target. Hit: `dmg:1d8+STR` piercing damage plus `dmg:1d8` poison damage.'
    attacks:
      - name: Longbow attack
        type: ranged
        bonus: 6
        damage: 1d8
        damage_type: thunder
        range:
          normal: 150
          long: 600
reactions: []
legendary_actions: []
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
cr: '6'
skills:
  perception: 5
  stealth: 9
alignment: chaotic evil
passive_perception: 15
```
