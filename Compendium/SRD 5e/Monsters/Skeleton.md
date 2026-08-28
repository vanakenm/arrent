---
archivist: true
entity_type: monster
slug: srd-5e_monster_skeleton
name: Skeleton
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.016Z'
---

```monster
slug: srd-5e_monster_skeleton
name: Skeleton
edition: '2014'
source: SRD 5.1
size: medium
type: undead
ac:
  - ac: 13
    from:
      - armor scraps
hp:
  average: 13
  formula: 2d8+4
speed:
  walk: 30
abilities:
  str: 10
  dex: 14
  con: 15
  int: 6
  wis: 8
  cha: 5
senses:
  - darkvision 60 ft.
languages:
  - understands the languages it knew in life but can't speak
damage_vulnerabilities:
  - bludgeoning
damage_resistances: []
damage_immunities:
  - poison
condition_immunities:
  - exhaustion
  - poisoned
actions:
  - name: Shortsword
    entries:
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one target. Hit: `dmg:1d6+DEX` piercing damage.'
    attacks:
      - name: Shortsword attack
        type: melee
        bonus: 4
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
  - name: Shortbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX+PB`, range 80/320 ft., one target. Hit: `dmg:1d6+DEX` piercing damage.'
    attacks:
      - name: Shortbow attack
        type: ranged
        bonus: 4
        damage: 1d6
        damage_type: thunder
        range:
          normal: 80
          long: 320
reactions: []
legendary_actions: []
traits: []
cr: '0.25'
subtype: Skeletons
alignment: lawful evil
passive_perception: 9
```
