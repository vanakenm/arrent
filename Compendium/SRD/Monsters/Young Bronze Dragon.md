---
archivist: true
entity_type: monster
slug: young-bronze-dragon
name: Young Bronze Dragon
compendium: SRD
---

```monster
name: Young Bronze Dragon
size: Large
type: Dragon
alignment: lawful good
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 142
  formula: 15d10+60
speed:
  walk: 40
  fly: 80
  swim: 40
abilities:
  str: 21
  dex: 10
  con: 19
  int: 14
  wis: 13
  cha: 17
saves:
  dex: 3
  con: 7
  wis: 4
  cha: 6
skills:
  insight: 4
  perception: 7
  stealth: 3
senses:
  - blindsight 30 ft.
  - darkvision 120 ft.
passive_perception: 17
languages:
  - Common
  - Draconic
damage_immunities:
  - lightning
cr: '8'
traits:
  - name: Amphibious
    entries:
      - The dragon can breathe air and water.
actions:
  - name: Multiattack
    entries:
      - 'The dragon makes three attacks: one with its bite and two with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:2d10+STR` piercing damage.'
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` slashing damage.'
  - name: Breath Weapons (Recharge 5-6)
    entries:
      - |-
        The dragon uses one of the following breath weapons.
        **Lightning Breath.** The dragon exhales lightning in a 60-foot line that is 5 feet wide. Each creature in that line must make a `dc:15` Dexterity saving throw, taking `damage:10d10` lightning damage on a failed save, or half as much damage on a successful one.
        **Repulsion Breath.** The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a `dc:15` Strength saving throw. On a failed save, the creature is pushed 40 feet away from the dragon.
```
