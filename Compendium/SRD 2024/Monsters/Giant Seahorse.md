---
archivist: true
entity_type: monster
slug: srd-2024_monster_giant-seahorse
name: Giant Seahorse
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.425Z'
---

```monster
slug: srd-2024_monster_giant-seahorse
name: Giant Seahorse
edition: '2024'
source: SRD 5.2
size: large
type: beast
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 16
  formula: 3d10
speed:
  walk: 5
  swim: 40
abilities:
  str: 15
  dex: 12
  con: 11
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
  - name: Ram
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d6+STR` Bludgeoning damage, or `dmg:2d8+STR` Bludgeoning damage if the seahorse moved 20+ feet straight toward the target immediately before the hit.'
    attacks:
      - name: Ram attack
        type: melee
        bonus: 4
        damage: 2d6+2
        damage_type: bludgeoning
        range:
          reach: 5
  - name: Bubble Dash
    entries:
      - While underwater, the seahorse moves up to half its Swim Speed without provoking Opportunity Attacks.
reactions: []
legendary_actions: []
traits:
  - name: Water Breathing
    entries:
      - The seahorse can breathe only underwater.
cr: '0.5'
saves:
  str: 2
  dex: 1
  con: 0
  int: -4
  wis: 1
  cha: -3
alignment: unaligned
passive_perception: 11
```
