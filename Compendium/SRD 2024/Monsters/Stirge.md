---
archivist: true
entity_type: monster
slug: srd-2024_monster_stirge
name: Stirge
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.445Z'
---

```monster
slug: srd-2024_monster_stirge
name: Stirge
edition: '2024'
source: SRD 5.2
size: small
type: monstrosity
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 5
  formula: 2d4
speed:
  walk: 10
  fly: 40
abilities:
  str: 4
  dex: 16
  con: 11
  int: 2
  wis: 8
  cha: 6
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Proboscis
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d6+DEX` Piercing damage, and the stirge attaches to the target. While attached, the stirge can''t make Proboscis attacks, and the target takes `dmg:2d4` Necrotic damage at the start of each of the stirge''s turns. The stirge can detach itself by spending 5 feet of its movement. The target or a creature within 5 feet of it can detach the stirge as an action.'
    attacks:
      - name: Proboscis attack
        type: melee
        bonus: 5
        damage: 1d6+3
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '0.125'
saves:
  str: -3
  dex: 3
  con: 0
  int: -4
  wis: -1
  cha: -2
alignment: unaligned
passive_perception: 9
```
