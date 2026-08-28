---
archivist: true
entity_type: monster
slug: srd-5e_monster_goblin
name: Goblin
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.998Z'
---

```monster
slug: srd-5e_monster_goblin
name: Goblin
edition: '2014'
source: SRD 5.1
size: small
type: humanoid
ac:
  - ac: 15
    from:
      - leather armor, shield
hp:
  average: 7
  formula: 2d6
speed:
  walk: 30
abilities:
  str: 8
  dex: 14
  con: 10
  int: 10
  wis: 8
  cha: 8
senses:
  - darkvision 60 ft.
languages:
  - Common
  - Goblin
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
traits:
  - name: Nimble Escape
    entries:
      - The goblin can take the Disengage or Hide action as a bonus action on each of its turns.
cr: '0.25'
skills:
  stealth: 6
alignment: neutral evil
passive_perception: 9
```
