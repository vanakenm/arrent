---
archivist: true
entity_type: monster
slug: srd-2024_monster_gladiator
name: Gladiator
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.426Z'
---

```monster
slug: srd-2024_monster_gladiator
name: Gladiator
edition: '2024'
source: SRD 5.2
size: small
type: humanoid
ac:
  - ac: 16
    from:
      - natural armor
hp:
  average: 112
  formula: 15d8 + 45
speed:
  walk: 30
abilities:
  str: 18
  dex: 15
  con: 16
  int: 10
  wis: 12
  cha: 15
senses: []
languages:
  - Common
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The gladiator makes three Spear attacks. It can replace one attack with a use of Shield Bash.
  - name: Spear
    entries:
      - 'Melee or Ranged Attack Roll: `atk:STR+PB`, reach 5 ft. or range 20/60 ft. `dmg:2d6+STR` Piercing damage.'
    attacks:
      - name: Spear attack
        type: ranged
        bonus: 7
        damage: 2d6+4
        damage_type: piercing
        range:
          reach: 5
          normal: 20
          long: 60
  - name: Shield Bash
    entries:
      - 'Strength Saving Throw: `dc:STR`, one creature within 5 feet that the gladiator can see. Failure: `dmg:2d4+STR` Bludgeoning damage. If the target is a Medium or smaller creature, it has the Prone condition.'
reactions:
  - name: Parry
    entries:
      - _Trigger:_ The gladiator is hit by a melee attack roll while holding a weapon. _Response:_ The gladiator adds 3 to its AC against that attack, possibly causing it to miss.
legendary_actions: []
traits: []
cr: '5'
saves:
  str: 7
  dex: 5
  con: 6
  int: 0
  wis: 4
  cha: 2
skills:
  athletics: 10
  performance: 5
alignment: neutral
passive_perception: 11
```
