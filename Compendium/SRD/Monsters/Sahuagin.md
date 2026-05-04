---
archivist: true
entity_type: monster
slug: sahuagin
name: Sahuagin
compendium: SRD
---

```monster
name: Sahuagin
size: Medium
type: Humanoid
subtype: sahuagin
alignment: lawful evil
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 22
  formula: 4d8+4
speed:
  walk: 30
  swim: 40
abilities:
  str: 13
  dex: 11
  con: 12
  int: 12
  wis: 13
  cha: 9
skills:
  perception: 5
senses:
  - darkvision 120 ft.
passive_perception: 15
languages:
  - Sahuagin
cr: 1/2
traits:
  - name: Blood Frenzy
    entries:
      - The sahuagin has advantage on melee attack rolls against any creature that doesn't have all its hit points.
  - name: Limited Amphibiousness
    entries:
      - The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating.
  - name: Shark Telepathy
    entries:
      - The sahuagin can magically command any shark within 120 feet of it, using a limited telepathy.
actions:
  - name: Multiattack
    entries:
      - 'The sahuagin makes two melee attacks: one with its bite and one with its claws or spear.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d4+STR` piercing damage.'
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d4+STR` slashing damage.'
  - name: Spear
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:STR`, reach 5 ft. or range 20/60 ft., one target. Hit: `damage:1d6+STR` piercing damage, or `damage:1d8+STR` piercing damage if used with two hands to make a melee attack.'
```
