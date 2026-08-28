---
archivist: true
entity_type: monster
slug: srd-5e_monster_scout
name: Scout
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.015Z'
---

```monster
slug: srd-5e_monster_scout
name: Scout
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 13
    from:
      - leather armor
hp:
  average: 16
  formula: 3d8+3
speed:
  walk: 30
abilities:
  str: 11
  dex: 14
  con: 12
  int: 11
  wis: 13
  cha: 11
senses: []
languages:
  - any one language (usually Common)
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The scout makes two melee attacks or two ranged attacks.
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
  - name: Keen Hearing and Sight
    entries:
      - The scout has advantage on Wisdom (Perception) checks that rely on hearing or sight.
cr: '0.5'
skills:
  nature: 4
  perception: 5
  stealth: 6
  survival: 5
alignment: any alignment
passive_perception: 15
```
