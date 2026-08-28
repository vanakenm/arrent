---
archivist: true
entity_type: monster
slug: srd-2024_monster_reef-shark
name: Reef Shark
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.441Z'
---

```monster
slug: srd-2024_monster_reef-shark
name: Reef Shark
edition: '2024'
source: SRD 5.2
size: medium
type: beast
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 22
  formula: 4d8 + 4
speed:
  walk: 5
  swim: 30
abilities:
  str: 14
  dex: 15
  con: 13
  int: 1
  wis: 10
  cha: 4
senses:
  - blindsight 30 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d4+STR` Piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 2d4+2
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Pack Tactics
    entries:
      - The shark has Advantage on an attack roll against a creature if at least one of the shark's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition.
  - name: Water Breathing
    entries:
      - The shark can breathe only underwater.
cr: '0.5'
saves:
  str: 2
  dex: 2
  con: 1
  int: -5
  wis: 0
  cha: -3
skills:
  perception: 2
alignment: unaligned
passive_perception: 12
```
