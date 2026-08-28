---
archivist: true
entity_type: monster
slug: srd-5e_monster_centaur
name: Centaur
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.984Z'
---

```monster
slug: srd-5e_monster_centaur
name: Centaur
edition: '2014'
source: SRD 5.1
size: large
type: monstrosity
ac:
  - ac: 12
hp:
  average: 45
  formula: 6d10+12
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
      - 'The centaur makes two attacks: one with its pike and one with its hooves or two with its longbow.'
  - name: Pike
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:1d10+STR` piercing damage.'
    attacks:
      - name: Pike attack
        type: melee
        bonus: 6
        damage: 1d10
        damage_type: thunder
        range:
          reach: 10
  - name: Hooves
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` bludgeoning damage.'
    attacks:
      - name: Hooves attack
        type: melee
        bonus: 6
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
  - name: Longbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX+PB`, range 150/600 ft., one target. Hit: `dmg:1d8+DEX` piercing damage.'
    attacks:
      - name: Longbow attack
        type: ranged
        bonus: 4
        damage: 1d8
        damage_type: thunder
        range:
          normal: 150
          long: 600
reactions: []
legendary_actions: []
traits:
  - name: Charge
    entries:
      - If the centaur moves at least 30 ft. straight toward a target and then hits it with a pike attack on the same turn, the target takes an extra `dmg:3d6` piercing damage.
cr: '2'
skills:
  athletics: 6
  perception: 3
  survival: 3
alignment: neutral good
passive_perception: 13
```
