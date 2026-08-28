---
archivist: true
entity_type: monster
slug: srd-2024_monster_gorgon
name: Gorgon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.427Z'
---

```monster
slug: srd-2024_monster_gorgon
name: Gorgon
edition: '2024'
source: SRD 5.2
size: large
type: construct
ac:
  - ac: 19
    from:
      - natural armor
hp:
  average: 114
  formula: 12d10 + 48
speed:
  walk: 40
abilities:
  str: 20
  dex: 11
  con: 18
  int: 2
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
  - name: Gore
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d12+STR` Piercing damage. If the target is a Large or smaller creature and the gorgon moved 20+ feet straight toward it immediately before the hit, the target has the Prone condition.'
    attacks:
      - name: Gore attack
        type: melee
        bonus: 8
        damage: 2d12+5
        damage_type: piercing
        range:
          reach: 5
  - name: Trample
    entries:
      - 'Dexterity Saving Throw: `dc:16`, one creature within 5 feet that has the Prone condition. Failure: `dmg:2d10+STR` Bludgeoning damage. Success: Half damage.'
  - name: Petrifying Breath
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 30-foot Cone. First Failure The target has the Restrained condition and repeats the save at the end of its next turn if it is still Restrained, ending the effect on itself on a success. Second Failure The target has the Petrified condition instead of the Restrained condition.'
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits: []
cr: '5'
saves:
  str: 5
  dex: 0
  con: 4
  int: -4
  wis: 1
  cha: -2
skills:
  perception: 7
alignment: unaligned
passive_perception: 17
```
