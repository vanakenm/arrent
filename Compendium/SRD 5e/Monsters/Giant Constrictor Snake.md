---
archivist: true
entity_type: monster
slug: srd-5e_monster_giant-constrictor-snake
name: Giant Constrictor Snake
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.994Z'
---

```monster
slug: srd-5e_monster_giant-constrictor-snake
name: Giant Constrictor Snake
edition: '2014'
source: SRD 5.1
size: huge
type: beast
ac:
  - ac: 12
hp:
  average: 60
  formula: 8d12+8
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
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one creature. Hit: `dmg:2d6+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 6
        damage: 2d6
        damage_type: thunder
        range:
          reach: 10
  - name: Constrict
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one creature. Hit: `dmg:2d8+STR` bludgeoning damage, and the target is grappled (escape `dc:16`). Until this grapple ends, the creature is restrained, and the snake can''t constrict another target.'
    attacks:
      - name: Constrict attack
        type: melee
        bonus: 6
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '2'
skills:
  perception: 2
alignment: unaligned
passive_perception: 12
```
