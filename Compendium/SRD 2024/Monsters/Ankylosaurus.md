---
archivist: true
entity_type: monster
slug: srd-2024_monster_ankylosaurus
name: Ankylosaurus
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.407Z'
---

```monster
slug: srd-2024_monster_ankylosaurus
name: Ankylosaurus
edition: '2024'
source: SRD 5.2
size: huge
type: beast
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 68
  formula: 8d12 + 16
speed:
  walk: 30
abilities:
  str: 19
  dex: 11
  con: 15
  int: 2
  wis: 12
  cha: 5
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The ankylosaurus makes two Tail attacks.
  - name: Tail
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:1d10+STR` Bludgeoning damage. If the target is a Huge or smaller creature, it has the Prone condition.'
    attacks:
      - name: Tail attack
        type: melee
        bonus: 6
        damage: 1d10+4
        damage_type: bludgeoning
        range:
          reach: 10
reactions: []
legendary_actions: []
traits: []
cr: '3'
saves:
  str: 6
  dex: 0
  con: 2
  int: -4
  wis: 1
  cha: -3
alignment: unaligned
passive_perception: 11
```
