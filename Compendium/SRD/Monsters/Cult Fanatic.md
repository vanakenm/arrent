---
archivist: true
entity_type: monster
slug: cult-fanatic
name: Cult Fanatic
compendium: SRD
---

```monster
name: Cult Fanatic
size: Medium
type: Humanoid
subtype: any race
alignment: any non-good alignment
ac:
  - ac: 13
    from:
      - leather armor
hp:
  average: 22
  formula: 6d8+6
speed:
  walk: 30
abilities:
  str: 11
  dex: 14
  con: 12
  int: 10
  wis: 13
  cha: 14
skills:
  deception: 4
  persuasion: 4
  religion: 2
passive_perception: 11
languages:
  - any one language (usually Common)
cr: '2'
traits:
  - name: Dark Devotion
    entries:
      - The fanatic has advantage on saving throws against being charmed or frightened.
  - name: Spellcasting
    entries:
      - |-
        The fanatic is a 4th-level spellcaster. Its spell casting ability is Wisdom (spell save `dc:WIS`, `atk:WIS` with spell attacks). The fanatic has the following cleric spells prepared:

        Cantrips (at will): light, sacred flame, thaumaturgy
        * 1st level (4 slots): command, inflict wounds, shield of faith
        * 2nd level (3 slots): hold person, spiritual weapon
actions:
  - name: Multiattack
    entries:
      - The fanatic makes two melee attacks.
  - name: Dagger
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:DEX`, reach 5 ft. or range 20/60 ft., one creature. Hit: `damage:1d4+DEX` piercing damage.'
```
