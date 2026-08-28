---
archivist: true
entity_type: monster
slug: srd-2024_monster_satyr
name: Satyr
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.442Z'
---

```monster
slug: srd-2024_monster_satyr
name: Satyr
edition: '2024'
source: SRD 5.2
size: medium
type: fey
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 31
  formula: 7d8
speed:
  walk: 40
abilities:
  str: 12
  dex: 16
  con: 11
  int: 12
  wis: 10
  cha: 14
senses: []
languages:
  - Common
  - Elvish
  - Sylvan
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Hooves
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d4+DEX` Bludgeoning damage. If the target is a Medium or smaller creature, the satyr pushes the target up to 10 feet straight away from itself.'
    attacks:
      - name: Hooves attack
        type: melee
        bonus: 5
        damage: 1d4+3
        damage_type: bludgeoning
        range:
          reach: 5
  - name: Mockery
    entries:
      - 'Wisdom Saving Throw: `dc:12`, one creature the satyr can see within 90 feet. Failure: `dmg:1d6+CHA` Psychic damage.'
reactions: []
legendary_actions: []
traits:
  - name: Magic Resistance
    entries:
      - The satyr has Advantage on saving throws against spells and other magical effects.
cr: '0.5'
saves:
  str: 1
  dex: 3
  con: 0
  int: 1
  wis: 0
  cha: 2
skills:
  perception: 2
  performance: 6
  stealth: 5
alignment: chaotic neutral
passive_perception: 12
```
