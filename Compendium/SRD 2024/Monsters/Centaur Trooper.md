---
archivist: true
entity_type: monster
slug: srd-2024_monster_centaur-trooper
name: Centaur Trooper
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.413Z'
---

```monster
slug: srd-2024_monster_centaur-trooper
name: Centaur Trooper
edition: '2024'
source: SRD 5.2
size: large
type: fey
ac:
  - ac: 16
    from:
      - natural armor
hp:
  average: 45
  formula: 6d10 + 12
speed:
  walk: 50
abilities:
  str: 18
  dex: 14
  con: 14
  int: 9
  wis: 13
  cha: 11
senses: []
languages:
  - Elvish
  - Sylvan
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The centaur makes two attacks, using Pike or Longbow in any combination.
  - name: Trampling Charge
    entries:
      - 'The centaur moves up to its Speed without provoking Opportunity Attacks and can move through the spaces of Medium or smaller creatures. Each creature whose space the centaur enters is targeted once by the following effect. Strength Saving Throw: `dc:STR`. Failure: `dmg:1d6+STR` Bludgeoning damage, and the target has the Prone condition.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Pike
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:1d10+STR` Piercing damage.'
    attacks:
      - name: Pike attack
        type: melee
        bonus: 6
        damage: 1d10+4
        damage_type: piercing
        range:
          reach: 10
  - name: Longbow
    entries:
      - 'Ranged Attack Roll: `atk:DEX+PB`, range 150/600 ft. `dmg:1d8+DEX` Piercing damage.'
    attacks:
      - name: Longbow attack
        type: ranged
        bonus: 4
        damage: 1d8+2
        damage_type: piercing
        range:
          normal: 150
          long: 600
reactions: []
legendary_actions: []
traits: []
cr: '2'
saves:
  str: 4
  dex: 2
  con: 2
  int: -1
  wis: 1
  cha: 0
skills:
  athletics: 6
  perception: 3
alignment: neutral good
passive_perception: 13
```
