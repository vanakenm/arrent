---
archivist: true
entity_type: monster
slug: ghast
name: Ghast
compendium: SRD
---

```monster
name: Ghast
size: Medium
type: Undead
alignment: chaotic evil
ac:
  - ac: 13
hp:
  average: 36
  formula: 8d8
speed:
  walk: 30
abilities:
  str: 16
  dex: 17
  con: 10
  int: 11
  wis: 10
  cha: 8
senses:
  - darkvision 60 ft.
passive_perception: 10
languages:
  - Common
damage_resistances:
  - necrotic
damage_immunities:
  - poison
condition_immunities:
  - charmed
  - exhaustion
  - poisoned
cr: '2'
traits:
  - name: Stench
    entries:
      - Any creature that starts its turn within 5 ft. of the ghast must succeed on a `dc:CON` Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the ghast's Stench for 24 hours.
  - name: Turn Defiance
    entries:
      - The ghast and any ghouls within 30 ft. of it have advantage on saving throws against effects that turn undead.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:+3`, reach 5 ft., one creature. Hit: `damage:2d8+STR` piercing damage.'
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` slashing damage. If the target is a creature other than an undead, it must succeed on a `dc:CON` Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.'
```
