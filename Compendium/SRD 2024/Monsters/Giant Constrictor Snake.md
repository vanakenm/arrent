---
archivist: true
entity_type: monster
slug: srd-2024_monster_giant-constrictor-snake
name: Giant Constrictor Snake
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.422Z'
---

```monster
slug: srd-2024_monster_giant-constrictor-snake
name: Giant Constrictor Snake
edition: '2024'
source: SRD 5.2
size: huge
type: beast
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 60
  formula: 8d12 + 8
speed:
  walk: 30
  swim: 30
abilities:
  str: 19
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
  - name: Multiattack
    entries:
      - The snake makes one Bite attack and uses Constrict.
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d6+STR` Piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 6
        damage: 2d6+4
        damage_type: piercing
        range:
          reach: 10
  - name: Constrict
    entries:
      - 'Strength Saving Throw: `dc:STR`, one Large or smaller creature the snake can see within 10 feet. Failure: `dmg:2d8+STR` Bludgeoning damage, and the target has the Grappled condition (escape `dc:STR`).'
reactions: []
legendary_actions: []
traits: []
cr: '2'
saves:
  str: 4
  dex: 2
  con: 1
  int: -5
  wis: 0
  cha: -4
skills:
  perception: 2
alignment: unaligned
passive_perception: 12
```
