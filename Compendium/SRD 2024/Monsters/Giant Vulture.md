---
archivist: true
entity_type: monster
slug: srd-2024_monster_giant-vulture
name: Giant Vulture
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.425Z'
---

```monster
slug: srd-2024_monster_giant-vulture
name: Giant Vulture
edition: '2024'
source: SRD 5.2
size: large
type: monstrosity
ac:
  - ac: 10
    from:
      - natural armor
hp:
  average: 25
  formula: 3d10 + 9
speed:
  walk: 10
  fly: 60
abilities:
  str: 15
  dex: 10
  con: 16
  int: 6
  wis: 12
  cha: 7
senses:
  - darkvision 60 ft.
languages:
  - Understands Common but can't speak
damage_vulnerabilities: []
damage_resistances:
  - necrotic
damage_immunities: []
condition_immunities: []
actions:
  - name: Gouge
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d6+STR` Piercing damage, and the target has the Poisoned condition until the end of its next turn.'
    attacks:
      - name: Gouge attack
        type: melee
        bonus: 4
        damage: 2d6+2
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Pack Tactics
    entries:
      - The vulture has Advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition.
cr: '1'
saves:
  str: 2
  dex: 0
  con: 3
  int: -2
  wis: 1
  cha: -2
skills:
  perception: 3
alignment: neutral evil
passive_perception: 13
```
