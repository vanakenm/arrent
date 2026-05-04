---
archivist: true
entity_type: monster
slug: death-dog
name: Death Dog
compendium: SRD
---

```monster
name: Death Dog
size: Medium
type: Monstrosity
alignment: neutral evil
ac:
  - ac: 12
hp:
  average: 39
  formula: 6d8+12
speed:
  walk: 40
abilities:
  str: 15
  dex: 14
  con: 14
  int: 3
  wis: 13
  cha: 6
skills:
  perception: 5
  stealth: 4
senses:
  - darkvision 120 ft.
passive_perception: 15
cr: '1'
traits:
  - name: Two-Headed
    entries:
      - The dog has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious.
actions:
  - name: Multiattack
    entries:
      - The dog makes two bite attacks.
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6+STR` piercing damage. If the target is a creature, it must succeed on a `dc:CON` Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the creature must repeat the saving throw, reducing its hit point maximum by 5 (`dice:1d10`) on a failure. This reduction lasts until the disease is cured. The creature dies if the disease reduces its hit point maximum to 0.'
```
