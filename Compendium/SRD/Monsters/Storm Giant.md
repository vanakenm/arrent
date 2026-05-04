---
archivist: true
entity_type: monster
slug: storm-giant
name: Storm Giant
compendium: SRD
---

```monster
name: Storm Giant
size: Huge
type: Giant
alignment: chaotic good
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
passive_perception: 19
languages:
  - Common
  - Giant
damage_resistances:
  - cold
damage_immunities:
  - lightning
  - thunder
cr: '13'
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
actions:
  - name: Multiattack
    entries:
      - The giant makes two greatsword attacks.
  - name: Greatsword
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:6d6+STR` slashing damage.'
  - name: Rock
    entries:
      - 'Ranged Weapon Attack: `atk:STR`, range 60/240 ft., one target. Hit: `damage:4d12+STR` bludgeoning damage.'
  - name: Lightning Strike (Recharge 5-6)
    entries:
      - The giant hurls a magical lightning bolt at a point it can see within 500 feet of it. Each creature within 10 feet of that point must make a `dc:17` Dexterity saving throw, taking `damage:12d8` lightning damage on a failed save, or half as much damage on a successful one.
```
