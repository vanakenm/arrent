---
archivist: true
entity_type: monster
slug: lizardfolk
name: Lizardfolk
compendium: SRD
---

```monster
name: Lizardfolk
size: Medium
type: Humanoid
subtype: lizardfolk
alignment: neutral
ac:
  - ac: 15
    from:
      - natural armor, shield
hp:
  average: 22
  formula: 4d8+4
speed:
  walk: 30
  swim: 30
abilities:
  str: 15
  dex: 10
  con: 13
  int: 7
  wis: 12
  cha: 7
skills:
  perception: 3
  stealth: 4
  survival: 5
passive_perception: 13
languages:
  - Draconic
cr: 1/2
traits:
  - name: Hold Breath
    entries:
      - The lizardfolk can hold its breath for 15 minutes.
actions:
  - name: Multiattack
    entries:
      - The lizardfolk makes two melee attacks, each one with a different weapon.
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6+STR` piercing damage.'
  - name: Heavy Club
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6+STR` bludgeoning damage.'
  - name: Javelin
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:STR`, reach 5 ft. or range 30/120 ft., one target. Hit: `damage:1d6+STR` piercing damage.'
  - name: Spiked Shield
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6+STR` piercing damage.'
```
