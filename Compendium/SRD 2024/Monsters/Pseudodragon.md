---
archivist: true
entity_type: monster
slug: srd-2024_monster_pseudodragon
name: Pseudodragon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.439Z'
---

```monster
slug: srd-2024_monster_pseudodragon
name: Pseudodragon
edition: '2024'
source: SRD 5.2
size: small
type: dragon
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 10
  formula: 3d4 + 3
speed:
  walk: 15
  fly: 60
abilities:
  str: 6
  dex: 15
  con: 13
  int: 10
  wis: 12
  cha: 10
senses:
  - darkvision 60 ft.
  - blindsight 10 ft.
languages:
  - Understands Common and Draconic but can't speak
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The pseudodragon makes two Bite attacks.
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d4+DEX` Piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 1d4+2
        damage_type: piercing
        range:
          reach: 5
  - name: Sting
    entries:
      - 'Constitution Saving Throw: `dc:12`, one creature the pseudodragon can see within 5 feet. Failure: `dmg:2d4` Poison damage, and the target has the Poisoned condition for 1 hour. Failure by 5 or More: While Poisoned, the target also has the Unconscious condition, which ends early if the target takes damage or a creature within 5 feet of it takes an action to wake it.'
reactions: []
legendary_actions: []
traits:
  - name: Magic Resistance
    entries:
      - The pseudodragon has Advantage on saving throws against spells and other magical effects.
cr: '0.25'
saves:
  str: -2
  dex: 2
  con: 1
  int: 0
  wis: 1
  cha: 0
skills:
  perception: 5
  stealth: 4
alignment: neutral good
passive_perception: 15
```
