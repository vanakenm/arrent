---
archivist: true
entity_type: monster
slug: ettin
name: Ettin
compendium: SRD
---

```monster
name: Ettin
size: Large
type: Giant
alignment: chaotic evil
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 85
  formula: 10d10+30
speed:
  walk: 40
abilities:
  str: 21
  dex: 8
  con: 17
  int: 6
  wis: 10
  cha: 8
skills:
  perception: 4
senses:
  - darkvision 60 ft.
passive_perception: 14
languages:
  - Giant
  - Orc
cr: '4'
traits:
  - name: Two Heads
    entries:
      - The ettin has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious.
  - name: Wakeful
    entries:
      - When one of the ettin's heads is asleep, its other head is awake.
actions:
  - name: Multiattack
    entries:
      - 'The ettin makes two attacks: one with its battleaxe and one with its morningstar.'
  - name: Battleaxe
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d8+STR` slashing damage.'
  - name: Morningstar
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d8+STR` piercing damage.'
```
