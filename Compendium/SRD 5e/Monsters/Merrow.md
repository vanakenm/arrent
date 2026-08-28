---
archivist: true
entity_type: monster
slug: srd-5e_monster_merrow
name: Merrow
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.007Z'
---

```monster
slug: srd-5e_monster_merrow
name: Merrow
edition: '2014'
source: SRD 5.1
size: large
type: monstrosity
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 45
  formula: 6d10+12
speed:
  walk: 10
  swim: 40
abilities:
  str: 18
  dex: 10
  con: 15
  int: 8
  wis: 10
  cha: 9
senses:
  - darkvision 60 ft.
languages:
  - Abyssal
  - Aquan
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - 'The merrow makes two attacks: one with its bite and one with its claws or harpoon.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d8+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 6
        damage: 1d8
        damage_type: thunder
        range:
          reach: 5
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d4+STR` slashing damage.'
    attacks:
      - name: Claws attack
        type: melee
        bonus: 6
        damage: 2d4
        damage_type: thunder
        range:
          reach: 5
  - name: Harpoon
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:STR+PB`, reach 5 ft. or range 20/60 ft., one target. Hit: `dmg:2d6+STR` piercing damage. If the target is a Huge or smaller creature, it must succeed on a Strength contest against the merrow or be pulled up to 20 feet toward the merrow.'
    attacks:
      - name: Harpoon Melee attack
        type: ranged
        bonus: 6
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
          normal: 20
          long: 60
      - name: Harpoon Ranged attack
        type: ranged
        bonus: 6
        damage: 2d6
        damage_type: thunder
        range:
          normal: 20
          long: 60
reactions: []
legendary_actions: []
traits:
  - name: Amphibious
    entries:
      - The merrow can breathe air and water.
cr: '2'
alignment: chaotic evil
passive_perception: 10
```
