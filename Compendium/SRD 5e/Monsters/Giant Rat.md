---
archivist: true
entity_type: monster
slug: srd-5e_monster_giant-rat
name: Giant Rat
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.995Z'
---

```monster
slug: srd-5e_monster_giant-rat
name: Giant Rat
edition: '2014'
source: SRD 5.1
size: small
type: beast
ac:
  - ac: 12
hp:
  average: 7
  formula: 2d6
speed:
  walk: 30
abilities:
  str: 7
  dex: 15
  con: 11
  int: 2
  wis: 10
  cha: 4
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one target. Hit: `dmg:1d4+DEX` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 1d4
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Keen Smell
    entries:
      - The rat has advantage on Wisdom (Perception) checks that rely on smell.
  - name: Pack Tactics
    entries:
      - The rat has advantage on an attack roll against a creature if at least one of the rat's allies is within 5 ft. of the creature and the ally isn't incapacitated.
cr: '0.125'
alignment: unaligned
passive_perception: 10
```
