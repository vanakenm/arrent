---
archivist: true
entity_type: monster
slug: srd-2024_monster_dire-wolf
name: Dire Wolf
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.416Z'
---

```monster
slug: srd-2024_monster_dire-wolf
name: Dire Wolf
edition: '2024'
source: SRD 5.2
size: large
type: beast
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 22
  formula: 3d10 + 6
speed:
  walk: 50
abilities:
  str: 17
  dex: 15
  con: 15
  int: 3
  wis: 12
  cha: 7
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
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d10+STR` Piercing damage. If the target is a Large or smaller creature, it has the Prone condition.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 5
        damage: 1d10+3
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Pack Tactics
    entries:
      - The wolf has Advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition.
cr: '1'
saves:
  str: 3
  dex: 2
  con: 2
  int: -4
  wis: 1
  cha: -2
skills:
  perception: 5
  stealth: 4
alignment: unaligned
passive_perception: 15
```
