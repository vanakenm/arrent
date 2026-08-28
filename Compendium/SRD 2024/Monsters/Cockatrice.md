---
archivist: true
entity_type: monster
slug: srd-2024_monster_cockatrice
name: Cockatrice
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.414Z'
---

```monster
slug: srd-2024_monster_cockatrice
name: Cockatrice
edition: '2024'
source: SRD 5.2
size: small
type: monstrosity
ac:
  - ac: 11
    from:
      - natural armor
hp:
  average: 22
  formula: 5d6 + 5
speed:
  walk: 20
  fly: 40
abilities:
  str: 6
  dex: 12
  con: 12
  int: 2
  wis: 13
  cha: 5
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Petrifying Bite
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d4+DEX` Piercing damage. If the target is a creature, it is subjected to the following effect. Constitution Saving Throw: `dc:CON`. First Failure The target has the Restrained condition. The target repeats the save at the end of its next turn if it is still Restrained, ending the effect on itself on a success. Second Failure The target has the Petrified condition, instead of the Restrained condition, for 24 hours.'
    attacks:
      - name: Petrifying Bite attack
        type: melee
        bonus: 3
        damage: 1d4+1
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '0.5'
saves:
  str: -2
  dex: 1
  con: 1
  int: -4
  wis: 1
  cha: -3
alignment: unaligned
passive_perception: 11
```
