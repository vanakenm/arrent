---
archivist: true
entity_type: monster
slug: srd-5e_monster_tribal-warrior
name: Tribal Warrior
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.021Z'
---

```monster
slug: srd-5e_monster_tribal-warrior
name: Tribal Warrior
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 12
    from:
      - hide armor
hp:
  average: 11
  formula: 2d8+2
speed:
  walk: 30
abilities:
  str: 13
  dex: 11
  con: 12
  int: 8
  wis: 11
  cha: 8
senses: []
languages:
  - any one language
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Spear
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:STR+PB`, reach 5 ft. or range 20/60 ft., one target. Hit: `dmg:1d6+STR` piercing damage, or `dmg:1d8+STR` piercing damage if used with two hands to make a melee attack.'
    attacks:
      - name: Spear Melee attack
        type: ranged
        bonus: 3
        damage: 1d8
        damage_type: thunder
        range:
          reach: 5
          normal: 20
          long: 60
      - name: Spear Ranged attack
        type: ranged
        bonus: 3
        damage: 1d6
        damage_type: thunder
        range:
          normal: 20
          long: 60
reactions: []
legendary_actions: []
traits:
  - name: Pack Tactics
    entries:
      - The warrior has advantage on an attack roll against a creature if at least one of the warrior's allies is within 5 ft. of the creature and the ally isn't incapacitated.
cr: '0.125'
alignment: any alignment
passive_perception: 10
```
