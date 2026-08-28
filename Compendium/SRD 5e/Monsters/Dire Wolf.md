---
archivist: true
entity_type: monster
slug: srd-5e_monster_dire-wolf
name: Dire Wolf
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.987Z'
---

```monster
slug: srd-5e_monster_dire-wolf
name: Dire Wolf
edition: '2014'
source: SRD 5.1
size: large
type: beast
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 37
  formula: 5d10+10
speed:
  walk: 50
abilities:
  str: 17
  dex: 15
  con: 15
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
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` piercing damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 5
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Keen Hearing and Smell
    entries:
      - The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.
  - name: Pack Tactics
    entries:
      - The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft. of the creature and the ally isn't incapacitated.
cr: '1'
skills:
  perception: 3
  stealth: 4
alignment: unaligned
passive_perception: 13
```
