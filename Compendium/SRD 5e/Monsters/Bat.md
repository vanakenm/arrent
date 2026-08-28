---
archivist: true
entity_type: monster
slug: srd-5e_monster_bat
name: Bat
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.981Z'
---

```monster
slug: srd-5e_monster_bat
name: Bat
edition: '2014'
source: SRD 5.1
size: tiny
type: beast
ac:
  - ac: 12
hp:
  average: 1
  formula: 1d4-1
speed:
  walk: 5
  fly: 30
abilities:
  str: 2
  dex: 15
  con: 8
  int: 2
  wis: 12
  cha: 4
senses:
  - blindsight 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:+0`, reach 5 ft., one creature. Hit: `dmg:1` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 0
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Echolocation
    entries:
      - The bat can't use its blindsight while deafened.
  - name: Keen Hearing
    entries:
      - The bat has advantage on Wisdom (Perception) checks that rely on hearing.
cr: '0'
alignment: unaligned
passive_perception: 11
```
