---
archivist: true
entity_type: monster
slug: srd-5e_monster_blood-hawk
name: Blood Hawk
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.982Z'
---

```monster
slug: srd-5e_monster_blood-hawk
name: Blood Hawk
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
  walk: 10
  fly: 60
abilities:
  str: 6
  dex: 14
  con: 10
  int: 3
  wis: 14
  cha: 5
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Beak
    entries:
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one target. Hit: `dmg:1d4+DEX` piercing damage.'
    attacks:
      - name: Beak attack
        type: melee
        bonus: 4
        damage: 1d4
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Keen Sight
    entries:
      - The hawk has advantage on Wisdom (Perception) checks that rely on sight.
  - name: Pack Tactics
    entries:
      - The hawk has advantage on an attack roll against a creature if at least one of the hawk's allies is within 5 ft. of the creature and the ally isn't incapacitated.
cr: '0.125'
skills:
  perception: 4
alignment: unaligned
passive_perception: 14
```
