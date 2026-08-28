---
archivist: true
entity_type: monster
slug: srd-5e_monster_giant-crab
name: Giant Crab
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.994Z'
---

```monster
slug: srd-5e_monster_giant-crab
name: Giant Crab
edition: '2014'
source: SRD 5.1
size: medium
type: beast
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 13
  formula: 3d8
speed:
  walk: 30
  swim: 30
abilities:
  str: 13
  dex: 15
  con: 11
  int: 1
  wis: 9
  cha: 3
senses:
  - blindsight 30 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d6+STR` bludgeoning damage, and the target is grappled (escape `dc:STR`). The crab has two claws, each of which can grapple only one target.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 3
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Amphibious
    entries:
      - The crab can breathe air and water.
cr: '0.125'
skills:
  stealth: 4
alignment: unaligned
passive_perception: 9
```
