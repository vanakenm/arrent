---
archivist: true
entity_type: monster
slug: srd-2024_monster_magmin
name: Magmin
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.433Z'
---

```monster
slug: srd-2024_monster_magmin
name: Magmin
edition: '2024'
source: SRD 5.2
size: small
type: elemental
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 13
  formula: 3d6 + 3
speed:
  walk: 30
abilities:
  str: 7
  dex: 15
  con: 12
  int: 8
  wis: 11
  cha: 10
senses:
  - darkvision 60 ft.
languages:
  - Primordial (Ignan)
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - fire
condition_immunities: []
actions:
  - name: Touch
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:2d4+DEX` Fire damage. If the target is a creature or a flammable object that isn''t being worn or carried, it starts burning.'
    attacks:
      - name: Touch attack
        type: melee
        bonus: 4
        damage: 2d4+2
        damage_type: fire
        range:
          reach: 5
  - name: Ignited Illumination
    entries:
      - The magmin sets itself ablaze or extinguishes its flames. While ablaze, the magmin sheds Bright Light in a 10-foot radius and Dim Light for an additional 10 feet.
reactions: []
legendary_actions: []
traits:
  - name: Death Burst
    entries:
      - 'The magmin explodes when it dies. Dexterity Saving Throw: `dc:11`, each creature in a 10-foot Emanation originating from the magmin. Failure: `dmg:2d6` Fire damage. Success: Half damage.'
cr: '0.5'
saves:
  str: -2
  dex: 2
  con: 1
  int: -1
  wis: 0
  cha: 0
alignment: chaotic neutral
passive_perception: 10
```
