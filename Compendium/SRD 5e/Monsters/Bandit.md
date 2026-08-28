---
archivist: true
entity_type: monster
slug: srd-5e_monster_bandit
name: Bandit
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.980Z'
---

```monster
slug: srd-5e_monster_bandit
name: Bandit
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 12
    from:
      - leather armor
hp:
  average: 11
  formula: 2d8+2
speed:
  walk: 30
abilities:
  str: 11
  dex: 12
  con: 12
  int: 10
  wis: 10
  cha: 10
senses: []
languages:
  - any one language (usually Common)
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Scimitar
    entries:
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one target. Hit: `dmg:1d6+DEX` slashing damage.'
    attacks:
      - name: Scimitar attack
        type: melee
        bonus: 3
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
  - name: Light Crossbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX+PB`, range 80/320 ft., one target. Hit: `dmg:1d8+DEX` piercing damage.'
    attacks:
      - name: Light Crossbow attack
        type: ranged
        bonus: 3
        damage: 1d8
        damage_type: thunder
        range:
          normal: 80
          long: 320
reactions: []
legendary_actions: []
traits: []
cr: '0.125'
alignment: any non-lawful alignment
passive_perception: 10
```
