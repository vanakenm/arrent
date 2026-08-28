---
archivist: true
entity_type: monster
slug: srd-5e_monster_giant-owl
name: Giant Owl
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.995Z'
---

```monster
slug: srd-5e_monster_giant-owl
name: Giant Owl
edition: '2014'
source: SRD 5.1
size: large
type: beast
ac:
  - ac: 12
hp:
  average: 19
  formula: 3d10+3
speed:
  walk: 5
  fly: 60
abilities:
  str: 13
  dex: 15
  con: 12
  int: 8
  wis: 13
  cha: 10
senses:
  - darkvision 120 ft.
languages:
  - Giant Owl
  - understands Common
  - Elvish
  - and Sylvan but can't speak
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Talons
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` slashing damage.'
    attacks:
      - name: Talons attack
        type: melee
        bonus: 3
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Flyby
    entries:
      - The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach.
  - name: Keen Hearing and Sight
    entries:
      - The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight.
cr: '0.25'
skills:
  perception: 5
  stealth: 4
alignment: neutral
passive_perception: 15
```
