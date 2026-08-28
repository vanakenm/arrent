---
archivist: true
entity_type: monster
slug: srd-2024_monster_giant-crocodile
name: Giant Crocodile
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.423Z'
---

```monster
slug: srd-2024_monster_giant-crocodile
name: Giant Crocodile
edition: '2024'
source: SRD 5.2
size: huge
type: beast
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 85
  formula: 9d12 + 27
speed:
  walk: 30
  swim: 50
abilities:
  str: 21
  dex: 9
  con: 17
  int: 2
  wis: 10
  cha: 7
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The crocodile makes one Bite attack and one Tail attack.
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:3d10+STR` Piercing damage. If the target is a Large or smaller creature, it has the Grappled condition (escape `dc:15`). While Grappled, the target has the Restrained condition and can''t be targeted by the crocodile''s Tail.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 8
        damage: 3d10+5
        damage_type: piercing
        range:
          reach: 5
  - name: Tail
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:3d8+STR` Bludgeoning damage. If the target is a Large or smaller creature, it has the Prone condition.'
    attacks:
      - name: Tail attack
        type: melee
        bonus: 8
        damage: 3d8+5
        damage_type: bludgeoning
        range:
          reach: 10
reactions: []
legendary_actions: []
traits:
  - name: Hold Breath
    entries:
      - The crocodile can hold its breath for 1 hour.
cr: '5'
saves:
  str: 5
  dex: -1
  con: 3
  int: -4
  wis: 0
  cha: -2
skills:
  stealth: 5
alignment: unaligned
passive_perception: 10
```
