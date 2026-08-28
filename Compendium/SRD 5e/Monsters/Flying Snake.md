---
archivist: true
entity_type: monster
slug: srd-5e_monster_flying-snake
name: Flying Snake
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.991Z'
---

```monster
slug: srd-5e_monster_flying-snake
name: Flying Snake
edition: '2014'
source: SRD 5.1
size: tiny
type: beast
ac:
  - ac: 14
hp:
  average: 5
  formula: 2d4
speed:
  walk: 30
  fly: 60
  swim: 30
abilities:
  str: 4
  dex: 18
  con: 11
  int: 2
  wis: 12
  cha: 5
senses:
  - blindsight 10 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:+6`, reach 5 ft., one target. Hit: `dmg:1` piercing damage plus `dmg:3d4` poison damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 6
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Flyby
    entries:
      - The snake doesn't provoke opportunity attacks when it flies out of an enemy's reach.
cr: '0.125'
alignment: unaligned
passive_perception: 11
```
