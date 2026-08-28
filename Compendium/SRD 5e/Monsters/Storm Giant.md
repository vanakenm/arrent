---
archivist: true
entity_type: monster
slug: srd-5e_monster_storm-giant
name: Storm Giant
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.018Z'
---

```monster
slug: srd-5e_monster_storm-giant
name: Storm Giant
edition: '2014'
source: SRD 5.1
size: huge
type: giant
ac:
  - ac: 16
    from:
      - scale mail
hp:
  average: 230
  formula: 20d12+100
speed:
  walk: 50
  swim: 50
abilities:
  str: 29
  dex: 14
  con: 20
  int: 16
  wis: 18
  cha: 18
senses: []
languages:
  - Common
  - Giant
damage_vulnerabilities: []
damage_resistances:
  - cold
damage_immunities:
  - lightning
  - thunder
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The giant makes two greatsword attacks.
  - name: Greatsword
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:6d6+STR` slashing damage.'
    attacks:
      - name: Greatsword attack
        type: melee
        bonus: 14
        damage: 6d6
        damage_type: thunder
        range:
          reach: 10
  - name: Rock
    entries:
      - 'Ranged Weapon Attack: `atk:STR+PB`, range 60/240 ft., one target. Hit: `dmg:4d12+STR` bludgeoning damage.'
    attacks:
      - name: Rock attack
        type: ranged
        bonus: 14
        damage: 4d12
        damage_type: thunder
        range:
          normal: 60
          long: 240
  - name: Lightning Strike
    entries:
      - The giant hurls a magical lightning bolt at a point it can see within 500 feet of it. Each creature within 10 feet of that point must make a `dc:17` Dexterity saving throw, taking `dmg:12d8` lightning damage on a failed save, or half as much damage on a successful one.
reactions: []
legendary_actions: []
traits:
  - name: Amphibious
    entries:
      - The giant can breathe air and water.
  - name: Innate Spellcasting
    entries:
      - |-
        The giant's innate spellcasting ability is Charisma (spell save `dc:CHA`). It can innately cast the following spells, requiring no material components:

        At will: detect magic, feather fall, levitate, light
        3/day each: control weather, water breathing
cr: '13'
saves:
  str: 14
  con: 10
  wis: 9
  cha: 9
skills:
  arcana: 8
  athletics: 14
  history: 8
  perception: 9
subtype: Giants
alignment: chaotic good
passive_perception: 19
```
