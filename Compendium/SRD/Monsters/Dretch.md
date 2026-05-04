---
archivist: true
entity_type: monster
slug: dretch
name: Dretch
compendium: SRD
---

```monster
name: Dretch
size: Small
type: Fiend
subtype: demon
alignment: chaotic evil
ac:
  - ac: 11
    from:
      - natural armor
hp:
  average: 18
  formula: 4d6+4
speed:
  walk: 20
abilities:
  str: 11
  dex: 11
  con: 12
  int: 5
  wis: 8
  cha: 3
senses:
  - darkvision 60 ft.
passive_perception: 9
languages:
  - Abyssal
  - telepathy 60 ft. (works only with creatures that understand Abyssal)
damage_resistances:
  - cold
  - fire
  - lightning
damage_immunities:
  - poison
condition_immunities:
  - poisoned
cr: 1/4
actions:
  - name: Multiattack
    entries:
      - 'The dretch makes two attacks: one with its bite and one with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6` piercing damage.'
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d4` slashing damage.'
  - name: Fetid Cloud (1/Day)
    entries:
      - A 10-foot radius of disgusting green gas extends out from the dretch. The gas spreads around corners, and its area is lightly obscured. It lasts for 1 minute or until a strong wind disperses it. Any creature that starts its turn in that area must succeed on a `dc:CON` Constitution saving throw or be poisoned until the start of its next turn. While poisoned in this way, the target can take either an action or a bonus action on its turn, not both, and can't take reactions.
```
