---
archivist: true
entity_type: monster
slug: srd-5e_monster_gnoll
name: Gnoll
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.998Z'
---

```monster
slug: srd-5e_monster_gnoll
name: Gnoll
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 15
    from:
      - hide armor, shield
hp:
  average: 22
  formula: 5d8
speed:
  walk: 30
abilities:
  str: 14
  dex: 12
  con: 11
  int: 6
  wis: 10
  cha: 7
senses:
  - darkvision 60 ft.
languages:
  - Gnoll
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one creature. Hit: `dmg:1d4+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 1d4
        damage_type: thunder
        range:
          reach: 5
  - name: Spear
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:STR+PB`, reach 5 ft. or range 20/60 ft., one target. Hit: `dmg:1d6+STR` piercing damage, or `dmg:1d8+STR` piercing damage if used with two hands to make a melee attack.'
    attacks:
      - name: Spear Melee attack
        type: ranged
        bonus: 4
        damage: 1d8
        damage_type: thunder
        range:
          reach: 5
          normal: 20
          long: 60
      - name: Spear Ranged attack
        type: ranged
        bonus: 4
        damage: 1d6
        damage_type: thunder
        range:
          normal: 20
          long: 60
  - name: Longbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX+PB`, range 150/600 ft., one target. Hit: `dmg:1d8+DEX` piercing damage.'
    attacks:
      - name: Longbow attack
        type: ranged
        bonus: 3
        damage: 1d8
        damage_type: thunder
        range:
          normal: 150
          long: 600
reactions: []
legendary_actions: []
traits:
  - name: Rampage
    entries:
      - When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack.
cr: '0.5'
alignment: chaotic evil
passive_perception: 10
```
