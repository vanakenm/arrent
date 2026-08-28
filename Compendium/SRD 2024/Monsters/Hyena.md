---
archivist: true
entity_type: monster
slug: srd-2024_monster_hyena
name: Hyena
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.431Z'
---

```monster
slug: srd-2024_monster_hyena
name: Hyena
edition: '2024'
source: SRD 5.2
size: medium
type: beast
ac:
  - ac: 11
    from:
      - natural armor
hp:
  average: 5
  formula: 1d8 + 1
speed:
  walk: 50
abilities:
  str: 11
  dex: 13
  con: 12
  int: 2
  wis: 12
  cha: 5
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d6` Piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 2
        damage: 1d6
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Pack Tactics
    entries:
      - The hyena has Advantage on an attack roll against a creature if at least one of the hyena's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition.
cr: '0'
saves:
  str: 0
  dex: 1
  con: 1
  int: -4
  wis: 1
  cha: -3
skills:
  perception: 3
alignment: unaligned
passive_perception: 13
```
