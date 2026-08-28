---
archivist: true
entity_type: monster
slug: srd-2024_monster_bronze-dragon-wyrmling
name: Bronze Dragon Wyrmling
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.411Z'
---

```monster
slug: srd-2024_monster_bronze-dragon-wyrmling
name: Bronze Dragon Wyrmling
edition: '2024'
source: SRD 5.2
size: medium
type: dragon
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 39
  formula: 6d8 + 12
speed:
  walk: 30
  fly: 60
  swim: 30
abilities:
  str: 17
  dex: 10
  con: 15
  int: 12
  wis: 11
  cha: 15
senses:
  - darkvision 60 ft.
  - blindsight 10 ft.
languages:
  - Draconic
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - lightning
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The dragon makes two Rend attacks.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d10+STR` Slashing damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 5
        damage: 1d10+3
        damage_type: slashing
        range:
          reach: 5
  - name: Lightning Breath
    entries:
      - 'Dexterity Saving Throw: `dc:12`, each creature in a 40-foot-long, 5-foot-wide Line. Failure: `dmg:3d10` Lightning damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Repulsion Breath
    entries:
      - 'Strength Saving Throw: `dc:12`, each creature in a 30-foot Cone. Failure: The target is pushed up to 30 feet straight away from the dragon and has the Prone condition.'
reactions: []
legendary_actions: []
traits:
  - name: Amphibious
    entries:
      - The dragon can breathe air and water.
cr: '2'
saves:
  str: 3
  dex: 2
  con: 2
  int: 1
  wis: 2
  cha: 2
skills:
  perception: 4
  stealth: 2
alignment: lawful good
passive_perception: 14
```
