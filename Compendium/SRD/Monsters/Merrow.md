---
archivist: true
entity_type: monster
slug: merrow
name: Merrow
compendium: SRD
---

```monster
name: Merrow
size: Large
type: Monstrosity
alignment: chaotic evil
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 45
  formula: 6d10+12
speed:
  walk: 10
  swim: 40
abilities:
  str: 18
  dex: 10
  con: 15
  int: 8
  wis: 10
  cha: 9
senses:
  - darkvision 60 ft.
passive_perception: 10
languages:
  - Abyssal
  - Aquan
cr: '2'
traits:
  - name: Amphibious
    entries:
      - The merrow can breathe air and water.
actions:
  - name: Multiattack
    entries:
      - 'The merrow makes two attacks: one with its bite and one with its claws or harpoon.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d8+STR` piercing damage.'
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d4+STR` slashing damage.'
  - name: Harpoon
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:STR`, reach 5 ft. or range 20/60 ft., one target. Hit: `damage:2d6+STR` piercing damage. If the target is a Huge or smaller creature, it must succeed on a Strength contest against the merrow or be pulled up to 20 feet toward the merrow.'
```
