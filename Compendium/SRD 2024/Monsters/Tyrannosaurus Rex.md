---
archivist: true
entity_type: monster
slug: srd-2024_monster_tyrannosaurus-rex
name: Tyrannosaurus Rex
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.450Z'
---

```monster
slug: srd-2024_monster_tyrannosaurus-rex
name: Tyrannosaurus Rex
edition: '2024'
source: SRD 5.2
size: huge
type: beast
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 136
  formula: 13d12 + 52
speed:
  walk: 50
abilities:
  str: 25
  dex: 10
  con: 19
  int: 2
  wis: 12
  cha: 9
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The tyrannosaurus makes one Bite attack and one Tail attack.
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:4d12+STR` Piercing damage. If the target is a Large or smaller creature, it has the Grappled condition (escape `dc:17`). While Grappled, the target has the Restrained condition and can''t be targeted by the tyrannosaurus''s Tail.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 10
        damage: 4d12+7
        damage_type: piercing
        range:
          reach: 10
  - name: Tail
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 15 ft. `dmg:4d8+STR` Bludgeoning damage. If the target is a Huge or smaller creature, it has the Prone condition.'
    attacks:
      - name: Tail attack
        type: melee
        bonus: 10
        damage: 4d8+7
        damage_type: bludgeoning
        range:
          reach: 15
reactions: []
legendary_actions: []
traits: []
cr: '8'
saves:
  str: 10
  dex: 0
  con: 4
  int: -4
  wis: 4
  cha: -1
skills:
  perception: 4
alignment: unaligned
passive_perception: 14
```
