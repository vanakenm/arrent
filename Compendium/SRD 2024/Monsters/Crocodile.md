---
archivist: true
entity_type: monster
slug: srd-2024_monster_crocodile
name: Crocodile
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.415Z'
---

```monster
slug: srd-2024_monster_crocodile
name: Crocodile
edition: '2024'
source: SRD 5.2
size: large
type: beast
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 13
  formula: 2d10 + 2
speed:
  walk: 20
  swim: 30
abilities:
  str: 15
  dex: 10
  con: 13
  int: 2
  wis: 10
  cha: 5
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d8+STR` Piercing damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape `dc:STR`). While Grappled, the target has the Restrained condition.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 1d8+2
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Hold Breath
    entries:
      - The crocodile can hold its breath for 1 hour.
cr: '0.5'
saves:
  str: 2
  dex: 0
  con: 3
  int: -4
  wis: 0
  cha: -3
skills:
  stealth: 2
alignment: unaligned
passive_perception: 10
```
