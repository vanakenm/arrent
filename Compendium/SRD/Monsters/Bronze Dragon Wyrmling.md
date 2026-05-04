---
archivist: true
entity_type: monster
slug: bronze-dragon-wyrmling
name: Bronze Dragon Wyrmling
compendium: SRD
---

```monster
name: Bronze Dragon Wyrmling
size: Medium
type: Dragon
alignment: lawful good
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 32
  formula: 5d8+10
speed:
  walk: 30
  fly: 60
  swim: 30
abilities:
  str: 17
  dex: 10
  con: 15
  int: 12
  wis: 11
  cha: 15
saves:
  dex: 2
  con: 4
  wis: 2
  cha: 4
skills:
  perception: 4
  stealth: 2
senses:
  - blindsight 10 ft.
  - darkvision 60 ft.
passive_perception: 14
languages:
  - Draconic
damage_immunities:
  - lightning
cr: '2'
traits:
  - name: Amphibious
    entries:
      - The dragon can breathe air and water.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d10+STR` piercing damage.'
  - name: Breath Weapons (Recharge 5-6)
    entries:
      - |-
        The dragon uses one of the following breath weapons.
        **Lightning Breath.** The dragon exhales lightning in a 40-foot line that is 5 feet wide. Each creature in that line must make a `dc:12` Dexterity saving throw, taking `damage:3d10` lightning damage on a failed save, or half as much damage on a successful one.
        **Repulsion Breath.** The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a `dc:12` Strength saving throw. On a failed save, the creature is pushed 30 feet away from the dragon.
```
