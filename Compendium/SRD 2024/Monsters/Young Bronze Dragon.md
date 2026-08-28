---
archivist: true
entity_type: monster
slug: srd-2024_monster_young-bronze-dragon
name: Young Bronze Dragon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.455Z'
---

```monster
slug: srd-2024_monster_young-bronze-dragon
name: Young Bronze Dragon
edition: '2024'
source: SRD 5.2
size: large
type: dragon
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 142
  formula: 15d10 + 60
speed:
  walk: 40
  fly: 80
  swim: 40
abilities:
  str: 21
  dex: 10
  con: 19
  int: 14
  wis: 13
  cha: 17
senses:
  - darkvision 120 ft.
  - blindsight 30 ft.
languages:
  - Common
  - Draconic
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - lightning
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The dragon makes three Rend attacks. It can replace one attack with a use of Repulsion Breath.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d10+STR` Slashing damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 8
        damage: 2d10+5
        damage_type: slashing
        range:
          reach: 10
  - name: Lightning Breath
    entries:
      - 'Dexterity Saving Throw: `dc:15`, each creature in a 60-foot-long, 5-foot-wide Line. Failure: `dmg:9d10` Lightning damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Repulsion Breath
    entries:
      - 'Strength Saving Throw: `dc:15`, each creature in a 30-foot Cone. Failure: The target is pushed up to 40 feet straight away from the dragon and has the Prone condition.'
reactions: []
legendary_actions: []
traits:
  - name: Amphibious
    entries:
      - The dragon can breathe air and water.
cr: '8'
saves:
  str: 5
  dex: 3
  con: 4
  int: 2
  wis: 4
  cha: 3
skills:
  insight: 4
  perception: 7
  stealth: 3
alignment: lawful good
passive_perception: 17
```
