---
archivist: true
entity_type: monster
slug: dragon-turtle
name: Dragon Turtle
compendium: SRD
---

```monster
name: Dragon Turtle
size: Gargantuan
type: Dragon
alignment: neutral
ac:
  - ac: 20
    from:
      - natural armor
hp:
  average: 341
  formula: 22d20+110
speed:
  walk: 20
  swim: 40
abilities:
  str: 25
  dex: 10
  con: 20
  int: 10
  wis: 12
  cha: 12
saves:
  dex: 6
  con: 11
  wis: 7
senses:
  - darkvision 120 ft.
passive_perception: 11
languages:
  - Aquan
  - Draconic
damage_resistances:
  - fire
cr: '17'
traits:
  - name: Amphibious
    entries:
      - The dragon turtle can breathe air and water.
actions:
  - name: Multiattack
    entries:
      - 'The dragon turtle makes three attacks: one with its bite and two with its claws. It can make one tail attack in place of its two claw attacks.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 15 ft., one target. Hit: `damage:3d12+STR` piercing damage.'
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:2d8+STR` slashing damage.'
  - name: Tail
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 15 ft., one target. Hit: `damage:3d12+STR` bludgeoning damage. If the target is a creature, it must succeed on a `dc:20` Strength saving throw or be pushed up to 10 feet away from the dragon turtle and knocked prone.'
  - name: Steam Breath (Recharge 5-6)
    entries:
      - The dragon turtle exhales scalding steam in a 60-foot cone. Each creature in that area must make a `dc:18` Constitution saving throw, taking `damage:15d6` fire damage on a failed save, or half as much damage on a successful one. Being underwater doesn't grant resistance against this damage.
```
