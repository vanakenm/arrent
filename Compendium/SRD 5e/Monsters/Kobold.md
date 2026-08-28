---
archivist: true
entity_type: monster
slug: srd-5e_monster_kobold
name: Kobold
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.003Z'
---

```monster
slug: srd-5e_monster_kobold
name: Kobold
edition: '2014'
source: SRD 5.1
size: small
type: humanoid
ac:
  - ac: 12
hp:
  average: 5
  formula: 2d6-2
speed:
  walk: 30
abilities:
  str: 7
  dex: 15
  con: 9
  int: 8
  wis: 7
  cha: 8
senses:
  - darkvision 60 ft.
languages:
  - Common
  - Draconic
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Dagger
    entries:
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one target. Hit: `dmg:1d4+DEX` piercing damage.'
    attacks:
      - name: Dagger attack
        type: melee
        bonus: 4
        damage: 1d4
        damage_type: thunder
        range:
          reach: 5
  - name: Sling
    entries:
      - 'Ranged Weapon Attack: `atk:DEX+PB`, range 30/120 ft., one target. Hit: `dmg:1d4+DEX` bludgeoning damage.'
    attacks:
      - name: Sling attack
        type: ranged
        bonus: 4
        damage: 1d4
        damage_type: thunder
        range:
          normal: 30
          long: 120
reactions: []
legendary_actions: []
traits:
  - name: Pack Tactics
    entries:
      - The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 ft. of the creature and the ally isn't incapacitated.
  - name: Sunlight Sensitivity
    entries:
      - While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.
cr: '0.125'
alignment: lawful evil
passive_perception: 8
```
