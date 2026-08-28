---
archivist: true
entity_type: monster
slug: srd-2024_monster_constrictor-snake
name: Constrictor Snake
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.414Z'
---

```monster
slug: srd-2024_monster_constrictor-snake
name: Constrictor Snake
edition: '2024'
source: SRD 5.2
size: large
type: beast
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 13
  formula: 2d10 + 2
speed:
  walk: 30
  swim: 30
abilities:
  str: 15
  dex: 14
  con: 12
  int: 1
  wis: 10
  cha: 3
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
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d8+STR` Piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 1d8+2
        damage_type: piercing
        range:
          reach: 5
  - name: Constrict
    entries:
      - 'Strength Saving Throw: `dc:STR`, one Medium or smaller creature the snake can see within 5 feet. Failure: `dmg:3d4` Bludgeoning damage, and the target has the Grappled condition (escape `dc:DEX`).'
reactions: []
legendary_actions: []
traits: []
cr: '0.25'
saves:
  str: 2
  dex: 2
  con: 1
  int: -5
  wis: 0
  cha: -4
skills:
  perception: 2
  stealth: 4
alignment: unaligned
passive_perception: 12
```
