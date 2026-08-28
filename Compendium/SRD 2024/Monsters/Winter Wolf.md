---
archivist: true
entity_type: monster
slug: srd-2024_monster_winter-wolf
name: Winter Wolf
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.454Z'
---

```monster
slug: srd-2024_monster_winter-wolf
name: Winter Wolf
edition: '2024'
source: SRD 5.2
size: large
type: monstrosity
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 75
  formula: 10d10 + 20
speed:
  walk: 50
abilities:
  str: 18
  dex: 13
  con: 14
  int: 7
  wis: 12
  cha: 8
senses: []
languages:
  - Common
  - Giant
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - cold
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d6+STR` Piercing damage. If the target is a Large or smaller creature, it has the Prone condition.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 6
        damage: 2d6+4
        damage_type: piercing
        range:
          reach: 5
  - name: Cold Breath
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 15-foot Cone. Failure: `dmg:4d8` Cold damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits:
  - name: Pack Tactics
    entries:
      - The wolf has Advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition.
cr: '3'
saves:
  str: 4
  dex: 1
  con: 2
  int: -2
  wis: 1
  cha: -1
skills:
  perception: 5
  stealth: 5
alignment: neutral evil
passive_perception: 15
```
