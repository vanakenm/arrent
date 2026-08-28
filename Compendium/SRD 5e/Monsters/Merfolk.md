---
archivist: true
entity_type: monster
slug: srd-5e_monster_merfolk
name: Merfolk
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.007Z'
---

```monster
slug: srd-5e_monster_merfolk
name: Merfolk
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 11
hp:
  average: 11
  formula: 2d8+2
speed:
  walk: 10
  swim: 40
abilities:
  str: 10
  dex: 13
  con: 12
  int: 11
  wis: 11
  cha: 12
senses: []
languages:
  - Aquan
  - Common
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Spear
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:STR+PB`, reach 5 ft. or range 20/60 ft., one target. Hit: `dmg:1d6` piercing damage, or `dmg:1d8` piercing damage if used with two hands to make a melee attack.'
    attacks:
      - name: Spear Melee attack
        type: ranged
        bonus: 2
        damage_type: thunder
        range:
          reach: 5
          normal: 20
          long: 60
      - name: Spear Ranged attack
        type: ranged
        bonus: 2
        damage_type: thunder
        range:
          normal: 20
          long: 60
reactions: []
legendary_actions: []
traits:
  - name: Amphibious
    entries:
      - The merfolk can breathe air and water.
cr: '0.125'
skills:
  perception: 2
alignment: neutral
passive_perception: 12
```
