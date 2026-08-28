---
archivist: true
entity_type: monster
slug: srd-2024_monster_warrior-veteran
name: Warrior Veteran
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.452Z'
---

```monster
slug: srd-2024_monster_warrior-veteran
name: Warrior Veteran
edition: '2024'
source: SRD 5.2
size: small
type: humanoid
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 65
  formula: 10d8 + 20
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
  - Common plus one other language
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The warrior makes two Greatsword or Heavy Crossbow attacks.
  - name: Greatsword
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d6+STR` Slashing damage.'
    attacks:
      - name: Greatsword attack
        type: melee
        bonus: 5
        damage: 2d6+3
        damage_type: slashing
        range:
          reach: 5
  - name: Heavy Crossbow
    entries:
      - 'Ranged Attack Roll: `atk:DEX+PB`, range 100/400 ft. `dmg:2d10+DEX` Piercing damage.'
    attacks:
      - name: Heavy Crossbow attack
        type: ranged
        bonus: 3
        damage: 2d10+1
        damage_type: piercing
        range:
          normal: 100
          long: 400
reactions:
  - name: Parry
    entries:
      - _Trigger:_ The warrior is hit by a melee attack roll while holding a weapon. _Response:_ The warrior adds 2 to its AC against that attack, possibly causing it to miss.
legendary_actions: []
traits: []
cr: '3'
saves:
  str: 3
  dex: 1
  con: 2
  int: 0
  wis: 0
  cha: 0
skills:
  athletics: 5
  perception: 2
alignment: neutral
passive_perception: 12
```
