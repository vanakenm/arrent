---
archivist: true
entity_type: monster
slug: srd-2024_monster_merrow
name: Merrow
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.435Z'
---

```monster
slug: srd-2024_monster_merrow
name: Merrow
edition: '2024'
source: SRD 5.2
size: large
type: monstrosity
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 45
  formula: 6d10 + 12
speed:
  walk: 10
  swim: 40
abilities:
  str: 18
  dex: 15
  con: 15
  int: 8
  wis: 10
  cha: 9
senses:
  - darkvision 60 ft.
languages:
  - Abyssal
  - Primordial (Aquan)
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The merrow makes two attacks, using Bite, Claw, or Harpoon in any combination.
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d4+STR` Piercing damage, and the target has the Poisoned condition until the end of the merrow''s next turn.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 6
        damage: 1d4+4
        damage_type: piercing
        range:
          reach: 5
  - name: Claw
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d4+STR` Slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 6
        damage: 2d4+4
        damage_type: slashing
        range:
          reach: 5
  - name: Harpoon
    entries:
      - 'Melee or Ranged Attack Roll: `atk:STR+PB`, reach 5 ft. or range 20/60 ft. `dmg:2d6+STR` Piercing damage. If the target is a Large or smaller creature, the merrow pulls the target up to 15 feet straight toward itself.'
    attacks:
      - name: Harpoon attack
        type: ranged
        bonus: 6
        damage: 2d6+4
        damage_type: piercing
        range:
          reach: 5
          normal: 20
          long: 60
reactions: []
legendary_actions: []
traits:
  - name: Amphibious
    entries:
      - The merrow can breathe air and water.
cr: '2'
saves:
  str: 4
  dex: 2
  con: 2
  int: -1
  wis: 0
  cha: -1
alignment: chaotic evil
passive_perception: 10
```
