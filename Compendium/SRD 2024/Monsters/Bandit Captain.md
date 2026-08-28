---
archivist: true
entity_type: monster
slug: srd-2024_monster_bandit-captain
name: Bandit Captain
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.409Z'
---

```monster
slug: srd-2024_monster_bandit-captain
name: Bandit Captain
edition: '2024'
source: SRD 5.2
size: small
type: humanoid
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 52
  formula: 8d8 + 16
speed:
  walk: 30
abilities:
  str: 15
  dex: 16
  con: 14
  int: 14
  wis: 11
  cha: 14
senses: []
languages:
  - Common
  - Thieves' cant
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The bandit makes two attacks, using Scimitar and Pistol in any combination.
  - name: Scimitar
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d6+DEX` Slashing damage.'
    attacks:
      - name: Scimitar attack
        type: melee
        bonus: 5
        damage: 1d6+3
        damage_type: slashing
        range:
          reach: 5
  - name: Pistol
    entries:
      - 'Ranged Attack Roll: `atk:DEX+PB`, range 30/90 ft. `dmg:1d10+DEX` Piercing damage.'
    attacks:
      - name: Pistol attack
        type: ranged
        bonus: 5
        damage: 1d10+3
        damage_type: piercing
        range:
          normal: 30
          long: 90
reactions:
  - name: Parry
    entries:
      - The captain adds 2 to its AC against one melee attack that would hit it. To do so, the captain must see the attacker and be wielding a melee weapon.
legendary_actions: []
traits: []
cr: '2'
saves:
  str: 4
  dex: 5
  con: 2
  int: 2
  wis: 2
  cha: 2
skills:
  athletics: 4
  deception: 4
alignment: neutral
passive_perception: 10
```
