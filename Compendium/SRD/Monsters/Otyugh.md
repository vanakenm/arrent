---
archivist: true
entity_type: monster
slug: otyugh
name: Otyugh
compendium: SRD
---

```monster
name: Otyugh
size: Large
type: Aberration
alignment: neutral
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 114
  formula: 12d10+48
speed:
  walk: 30
abilities:
  str: 16
  dex: 11
  con: 19
  int: 6
  wis: 13
  cha: 6
saves:
  con: 7
senses:
  - darkvision 120 ft.
passive_perception: 11
languages:
  - Otyugh
cr: '5'
traits:
  - name: Limited Telepathy
    entries:
      - The otyugh can magically transmit simple messages and images to any creature within 120 ft. of it that can understand a language. This form of telepathy doesn't allow the receiving creature to telepathically respond.
actions:
  - name: Multiattack
    entries:
      - 'The otyugh makes three attacks: one with its bite and two with its tentacles.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d8+STR` piercing damage. If the target is a creature, it must succeed on a `dc:CON` Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the target must repeat the saving throw, reducing its hit point maximum by 5 (`dice:1d10`) on a failure. The disease is cured on a success. The target dies if the disease reduces its hit point maximum to 0. This reduction to the target''s hit point maximum lasts until the disease is cured.'
  - name: Tentacle
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:1d8+STR` bludgeoning damage plus `damage:1d8` piercing damage. If the target is Medium or smaller, it is grappled (escape `dc:13`) and restrained until the grapple ends. The otyugh has two tentacles, each of which can grapple one target.'
  - name: Tentacle Slam
    entries:
      - The otyugh slams creatures grappled by it into each other or a solid surface. Each creature must succeed on a `dc:14` Constitution saving throw or take `damage:2d6+STR` bludgeoning damage and be stunned until the end of the otyugh's next turn. On a successful save, the target takes half the bludgeoning damage and isn't stunned.
```
