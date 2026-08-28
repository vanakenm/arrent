---
archivist: true
entity_type: monster
slug: srd-5e_monster_thug
name: Thug
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.021Z'
---

```monster
slug: srd-5e_monster_thug
name: Thug
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 11
    from:
      - leather armor
hp:
  average: 32
  formula: 5d8+10
speed:
  walk: 30
abilities:
  str: 15
  dex: 11
  con: 14
  int: 10
  wis: 10
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
      - The thug makes two melee attacks.
  - name: Mace
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one creature. Hit: `dmg:1d6+STR` bludgeoning damage.'
    attacks:
      - name: Mace attack
        type: melee
        bonus: 4
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
  - name: Heavy Crossbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX+PB`, range 100/400 ft., one target. Hit: `dmg:1d10` piercing damage.'
    attacks:
      - name: Heavy Crossbow attack
        type: ranged
        bonus: 2
        damage_type: thunder
        range:
          normal: 100
          long: 400
reactions: []
legendary_actions: []
traits:
  - name: Pack Tactics
    entries:
      - The thug has advantage on an attack roll against a creature if at least one of the thug's allies is within 5 ft. of the creature and the ally isn't incapacitated.
cr: '0.5'
skills:
  intimidation: 2
alignment: any non-good alignment
passive_perception: 10
```
