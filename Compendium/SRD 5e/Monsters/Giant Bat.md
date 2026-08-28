---
archivist: true
entity_type: monster
slug: srd-5e_monster_giant-bat
name: Giant Bat
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.993Z'
---

```monster
slug: srd-5e_monster_giant-bat
name: Giant Bat
edition: '2014'
source: SRD 5.1
size: large
type: beast
ac:
  - ac: 13
hp:
  average: 22
  formula: 4d10
speed:
  walk: 10
  fly: 60
abilities:
  str: 15
  dex: 16
  con: 11
  int: 2
  wis: 12
  cha: 6
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
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one creature. Hit: `dmg:1d6+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 1d6
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
cr: '0.25'
alignment: unaligned
passive_perception: 11
```
