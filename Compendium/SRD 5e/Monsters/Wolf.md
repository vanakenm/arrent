---
archivist: true
entity_type: monster
slug: srd-5e_monster_wolf
name: Wolf
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.025Z'
---

```monster
slug: srd-5e_monster_wolf
name: Wolf
edition: '2014'
source: SRD 5.1
size: medium
type: beast
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 11
  formula: 2d8+2
speed:
  walk: 40
abilities:
  str: 12
  dex: 15
  con: 12
  int: 3
  wis: 12
  cha: 6
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one target. Hit: `dmg:2d4+DEX` piercing damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 2d4
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
cr: '0.25'
skills:
  perception: 3
  stealth: 4
alignment: unaligned
passive_perception: 13
```
