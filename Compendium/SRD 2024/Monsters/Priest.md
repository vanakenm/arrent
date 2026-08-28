---
archivist: true
entity_type: monster
slug: srd-2024_monster_priest
name: Priest
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.439Z'
---

```monster
slug: srd-2024_monster_priest
name: Priest
edition: '2024'
source: SRD 5.2
size: small
type: humanoid
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 38
  formula: 7d8 + 7
speed:
  walk: 30
abilities:
  str: 16
  dex: 10
  con: 12
  int: 13
  wis: 16
  cha: 13
senses: []
languages:
  - Common plus one other language
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The priest makes two attacks, using Mace or Radiant Flame in any combination.
  - name: Divine Aid
    entries:
      - The priest casts Bless, Dispel Magic, Healing Word, or Lesser Restoration, using the same spellcasting ability as Spellcasting.
    recharge:
      type: per_day
      param: 3
  - name: Mace
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d6+STR` Bludgeoning damage plus `dmg:2d4` Radiant damage.'
    attacks:
      - name: Mace attack
        type: melee
        bonus: 5
        damage: 1d6+3
        damage_type: bludgeoning
        range:
          reach: 5
  - name: Radiant Flame
    entries:
      - 'Ranged Attack Roll: `atk:+5`, range 60 ft. `dmg:2d10` Radiant damage.'
    attacks:
      - name: Radiant Flame attack
        type: ranged
        bonus: 5
        damage: 2d10
        damage_type: radiant
        range:
          normal: 60
  - name: Spellcasting
    entries:
      - |-
        The priest casts one of the following spells, using Wisdom as the spellcasting ability:

        - **At Will:** Light, Thaumaturgy
        - **1/Day Each:** Spirit Guardians
reactions: []
legendary_actions: []
traits: []
cr: '2'
saves:
  str: 3
  dex: 0
  con: 1
  int: 1
  wis: 3
  cha: 1
skills:
  medicine: 7
  perception: 5
  religion: 5
alignment: neutral
passive_perception: 15
```
