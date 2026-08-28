---
archivist: true
entity_type: monster
slug: srd-5e_monster_constrictor-snake
name: Constrictor Snake
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.985Z'
---

```monster
slug: srd-5e_monster_constrictor-snake
name: Constrictor Snake
edition: '2014'
source: SRD 5.1
size: large
type: beast
ac:
  - ac: 12
hp:
  average: 13
  formula: 2d10+2
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
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one creature. Hit: `dmg:1d6+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
  - name: Constrict
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one creature. Hit: `dmg:1d8+STR` bludgeoning damage, and the target is grappled (escape `dc:14`). Until this grapple ends, the creature is restrained, and the snake can''t constrict another target.'
    attacks:
      - name: Constrict attack
        type: melee
        bonus: 4
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '0.25'
alignment: unaligned
passive_perception: 10
```
