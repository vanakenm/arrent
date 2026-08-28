---
archivist: true
entity_type: monster
slug: srd-2024_monster_baboon
name: Baboon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.408Z'
---

```monster
slug: srd-2024_monster_baboon
name: Baboon
edition: '2024'
source: SRD 5.2
size: small
type: beast
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 3
  formula: 1d6
speed:
  walk: 30
  climb: 30
abilities:
  str: 8
  dex: 14
  con: 11
  int: 4
  wis: 12
  cha: 6
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d4+STR` Piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 1
        damage: 1d4+1
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Pack Tactics
    entries:
      - The baboon has Advantage on an attack roll against a creature if at least one of the baboon's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition.
cr: '0'
saves:
  str: -1
  dex: 2
  con: 0
  int: -3
  wis: 1
  cha: -2
alignment: unaligned
passive_perception: 11
```
