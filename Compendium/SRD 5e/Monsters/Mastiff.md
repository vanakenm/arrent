---
archivist: true
entity_type: monster
slug: srd-5e_monster_mastiff
name: Mastiff
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.006Z'
---

```monster
slug: srd-5e_monster_mastiff
name: Mastiff
edition: '2014'
source: SRD 5.1
size: medium
type: beast
ac:
  - ac: 12
hp:
  average: 5
  formula: 1d8+1
speed:
  walk: 40
abilities:
  str: 13
  dex: 14
  con: 12
  int: 3
  wis: 12
  cha: 7
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d6+STR` piercing damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 3
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Keen Hearing and Smell
    entries:
      - The mastiff has advantage on Wisdom (Perception) checks that rely on hearing or smell.
cr: '0.125'
skills:
  perception: 3
alignment: unaligned
passive_perception: 13
```
