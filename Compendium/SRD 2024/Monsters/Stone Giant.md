---
archivist: true
entity_type: monster
slug: srd-2024_monster_stone-giant
name: Stone Giant
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.446Z'
---

```monster
slug: srd-2024_monster_stone-giant
name: Stone Giant
edition: '2024'
source: SRD 5.2
size: huge
type: giant
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 126
  formula: 11d12 + 55
speed:
  walk: 40
abilities:
  str: 23
  dex: 15
  con: 20
  int: 10
  wis: 12
  cha: 9
senses:
  - darkvision 60 ft.
languages:
  - Giant
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The giant makes two attacks, using Stone Club or Boulder in any combination.
  - name: Stone Club
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 15 ft. `dmg:3d10+STR` Bludgeoning damage.'
    attacks:
      - name: Stone Club attack
        type: melee
        bonus: 9
        damage: 3d10+6
        damage_type: bludgeoning
        range:
          reach: 15
  - name: Boulder
    entries:
      - 'Ranged Attack Roll: `atk:STR+PB`, range 60/240 ft. `dmg:2d8+STR` Bludgeoning damage. If the target is a Large or smaller creature, it has the Prone condition.'
    attacks:
      - name: Boulder attack
        type: ranged
        bonus: 9
        damage: 2d8+6
        damage_type: bludgeoning
        range:
          normal: 60
          long: 240
reactions:
  - name: Deflect Missile
    entries:
      - '_Trigger:_ The giant is hit by a ranged attack roll and takes Bludgeoning, Piercing, or Slashing damage from it. _Response:_ The giant reduces the damage it takes from the attack by 11 (`dice:1d10+6`), and if that damage is reduced to 0, the giant can redirect some of the attack’s force. _Dexterity Saving Throw:_ `dc:STR`, one creature the giant can see within 60 feet. Failure: `dmg:1d10+STR` Force damage.'
    recharge:
      type: recharge_on_roll
      param: 5
legendary_actions: []
traits: []
cr: '7'
saves:
  str: 6
  dex: 5
  con: 8
  int: 0
  wis: 4
  cha: -1
skills:
  athletics: 12
  perception: 4
  stealth: 5
alignment: neutral
passive_perception: 14
```
