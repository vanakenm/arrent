---
archivist: true
entity_type: monster
slug: srd-5e_monster_cloud-giant
name: Cloud Giant
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.985Z'
---

```monster
slug: srd-5e_monster_cloud-giant
name: Cloud Giant
edition: '2014'
source: SRD 5.1
size: huge
type: giant
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 200
  formula: 16d12+96
speed:
  walk: 40
abilities:
  str: 27
  dex: 10
  con: 22
  int: 12
  wis: 16
  cha: 16
senses: []
languages:
  - Common
  - Giant
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The giant makes two morningstar attacks.
  - name: Morningstar
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:3d8+STR` piercing damage.'
    attacks:
      - name: Morningstar attack
        type: melee
        bonus: 12
        damage: 3d8
        damage_type: thunder
        range:
          reach: 10
  - name: Rock
    entries:
      - 'Ranged Weapon Attack: `atk:STR+PB`, range 60/240 ft., one target. Hit: `dmg:4d10+STR` bludgeoning damage.'
    attacks:
      - name: Rock attack
        type: ranged
        bonus: 12
        damage: 4d10
        damage_type: thunder
        range:
          normal: 60
          long: 240
reactions: []
legendary_actions: []
traits:
  - name: Innate Spellcasting
    entries:
      - |-
        The giant's innate spellcasting ability is Charisma. It can innately cast the following spells, requiring no material components:

        At will: detect magic, fog cloud, light
        3/day each: feather fall, fly, misty step, telekinesis
        1/day each: control weather, gaseous form
  - name: Keen Smell
    entries:
      - The giant has advantage on Wisdom (Perception) checks that rely on smell.
cr: '9'
saves:
  con: 10
  wis: 7
  cha: 7
skills:
  insight: 7
  perception: 7
subtype: Giants
alignment: neutral good (50%) or neutral evil (50%)
passive_perception: 17
```
