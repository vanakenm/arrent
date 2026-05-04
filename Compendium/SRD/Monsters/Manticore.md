---
archivist: true
entity_type: monster
slug: manticore
name: Manticore
compendium: SRD
---

```monster
name: Manticore
size: Large
type: Monstrosity
alignment: lawful evil
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 68
  formula: 8d10+24
speed:
  walk: 30
  fly: 50
abilities:
  str: 17
  dex: 16
  con: 17
  int: 7
  wis: 12
  cha: 8
senses:
  - darkvision 60 ft.
passive_perception: 11
cr: '3'
traits:
  - name: Tail Spike Regrowth
    entries:
      - The manticore has twenty-four tail spikes. Used spikes regrow when the manticore finishes a long rest.
actions:
  - name: Multiattack
    entries:
      - 'The manticore makes three attacks: one with its bite and two with its claws or three with its tail spikes.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d8+STR` piercing damage.'
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6+STR` slashing damage.'
  - name: Tail Spike
    entries:
      - 'Ranged Weapon Attack: `atk:DEX`, range 100/200 ft., one target. Hit: `damage:1d8+DEX` piercing damage.'
```
