---
archivist: true
entity_type: monster
slug: srd-2024_monster_warrior-infantry
name: Warrior Infantry
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.452Z'
---

```monster
slug: srd-2024_monster_warrior-infantry
name: Warrior Infantry
edition: '2024'
source: SRD 5.2
size: small
type: humanoid
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 9
  formula: 2d8
speed:
  walk: 30
abilities:
  str: 13
  dex: 11
  con: 11
  int: 8
  wis: 11
  cha: 8
senses: []
languages:
  - Common
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Spear
    entries:
      - 'Melee or Ranged Attack Roll: `atk:STR+PB`, reach 5 ft. or range 20/60 ft. `dmg:1d6+STR` Piercing damage.'
    attacks:
      - name: Spear attack
        type: ranged
        bonus: 3
        damage: 1d6+1
        damage_type: piercing
        range:
          reach: 5
          normal: 20
          long: 60
reactions: []
legendary_actions: []
traits:
  - name: Pack Tactics
    entries:
      - The warrior has Advantage on an attack roll against a creature if at least one of the warrior's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition.
cr: '0.125'
saves:
  str: 1
  dex: 0
  con: 0
  int: -1
  wis: 0
  cha: -1
alignment: neutral
passive_perception: 10
```
