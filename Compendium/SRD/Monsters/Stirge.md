---
archivist: true
entity_type: monster
slug: stirge
name: Stirge
compendium: SRD
---

```monster
name: Stirge
size: Tiny
type: Beast
alignment: unaligned
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 2
  formula: 1d4
speed:
  walk: 10
  fly: 40
abilities:
  str: 4
  dex: 16
  con: 11
  int: 2
  wis: 8
  cha: 6
senses:
  - darkvision 60 ft.
passive_perception: 9
cr: 1/8
actions:
  - name: Blood Drain
    entries:
      - |-
        Melee Weapon Attack: `atk:DEX`, reach 5 ft., one creature. Hit: `damage:1d4+DEX` piercing damage, and the stirge attaches to the target. While attached, the stirge doesn't attack. Instead, at the start of each of the stirge's turns, the target loses 5 (`dice:1d4+3`) hit points due to blood loss.
        The stirge can detach itself by spending 5 feet of its movement. It does so after it drains 10 hit points of blood from the target or the target dies. A creature, including the target, can use its action to detach the stirge.
```
