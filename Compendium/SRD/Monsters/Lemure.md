---
archivist: true
entity_type: monster
slug: lemure
name: Lemure
compendium: SRD
---

```monster
name: Lemure
size: Medium
type: Fiend
subtype: devil
alignment: lawful evil
ac:
  - ac: 7
hp:
  average: 13
  formula: 3d8
speed:
  walk: 15
abilities:
  str: 10
  dex: 5
  con: 11
  int: 1
  wis: 11
  cha: 3
senses:
  - darkvision 120 ft.
passive_perception: 10
languages:
  - understands infernal but can't speak
damage_resistances:
  - cold
damage_immunities:
  - fire
  - poison
condition_immunities:
  - charmed
  - frightened
  - poisoned
cr: '0'
traits:
  - name: Devil's Sight
    entries:
      - Magical darkness doesn't impede the lemure's darkvision.
  - name: Hellish Rejuvenation
    entries:
      - A lemure that dies in the Nine Hells comes back to life with all its hit points in `dice:1d10` days unless it is killed by a good-aligned creature with a bless spell cast on that creature or its remains are sprinkled with holy water.
actions:
  - name: Fist
    entries:
      - 'Melee Weapon Attack: `atk:+3`, reach 5 ft., one target. Hit: `damage:1d4` bludgeoning damage.'
```
