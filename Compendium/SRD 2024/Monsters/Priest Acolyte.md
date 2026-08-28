---
archivist: true
entity_type: monster
slug: srd-2024_monster_priest-acolyte
name: Priest Acolyte
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.439Z'
---

```monster
slug: srd-2024_monster_priest-acolyte
name: Priest Acolyte
edition: '2024'
source: SRD 5.2
size: small
type: humanoid
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 11
  formula: 2d8 + 2
speed:
  walk: 30
abilities:
  str: 14
  dex: 10
  con: 12
  int: 10
  wis: 14
  cha: 11
senses: []
languages:
  - Common
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Mace
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d6+STR` Bludgeoning damage plus `dmg:1d4` Radiant damage.'
    attacks:
      - name: Mace attack
        type: melee
        bonus: 4
        damage: 1d6+2
        damage_type: bludgeoning
        range:
          reach: 5
  - name: Divine Aid
    entries:
      - The priest casts Bless, Healing Word, or Sanctuary, using the same spellcasting ability as Spellcasting.
    recharge:
      type: per_day
      param: 1
  - name: Radiant Flame
    entries:
      - 'Ranged Attack Roll: `atk:+4`, range 60 ft. `dmg:2d6` Radiant damage.'
    attacks:
      - name: Radiant Flame attack
        type: ranged
        bonus: 4
        damage: 2d6
        damage_type: radiant
        range:
          normal: 60
  - name: Spellcasting
    entries:
      - |-
        The priest casts one of the following spells, using Wisdom as the spellcasting ability:

        - **At Will:** Light, Thaumaturgy
reactions: []
legendary_actions: []
traits: []
cr: '0.25'
saves:
  str: 2
  dex: 0
  con: 1
  int: 0
  wis: 2
  cha: 0
skills:
  medicine: 4
  religion: 2
alignment: neutral
passive_perception: 12
```
