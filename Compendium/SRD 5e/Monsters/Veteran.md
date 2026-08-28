---
archivist: true
entity_type: monster
slug: srd-5e_monster_veteran
name: Veteran
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.022Z'
---

```monster
slug: srd-5e_monster_veteran
name: Veteran
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 17
    from:
      - splint
hp:
  average: 58
  formula: 9d8+18
speed:
  walk: 30
abilities:
  str: 16
  dex: 13
  con: 14
  int: 10
  wis: 11
  cha: 10
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
      - The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack.
  - name: Longsword
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d8+STR` slashing damage, or `dmg:1d10+STR` slashing damage if used with two hands.'
    attacks:
      - name: Longsword attack
        type: melee
        bonus: 5
        damage: 1d10
        damage_type: thunder
        range:
          reach: 5
  - name: Shortsword
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d6+STR` piercing damage.'
    attacks:
      - name: Shortsword attack
        type: melee
        bonus: 5
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
  - name: Heavy Crossbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX+PB`, range 100/400 ft., one target. Hit: `dmg:1d10+DEX` piercing damage.'
    attacks:
      - name: Heavy Crossbow attack
        type: ranged
        bonus: 3
        damage: 1d10
        damage_type: thunder
        range:
          normal: 100
          long: 400
reactions: []
legendary_actions: []
traits: []
cr: '3'
skills:
  athletics: 5
  perception: 2
alignment: any alignment
passive_perception: 12
```
