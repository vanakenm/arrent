---
archivist: true
entity_type: monster
slug: srd-2024_monster_medusa
name: Medusa
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.434Z'
---

```monster
slug: srd-2024_monster_medusa
name: Medusa
edition: '2024'
source: SRD 5.2
size: medium
type: monstrosity
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 127
  formula: 17d8 + 51
speed:
  walk: 30
abilities:
  str: 10
  dex: 17
  con: 16
  int: 12
  wis: 13
  cha: 15
senses:
  - darkvision 150 ft.
languages:
  - Common plus one other language
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The medusa makes two Claw attacks and one Snake Hair attack, or it makes three Poison Ray attacks.
  - name: Petrifying Gaze
    entries:
      - 'Constitution Saving Throw: `dc:13`, each creature in a 30-foot Cone. If the medusa sees its reflection in the Cone, the medusa must make this save. First Failure The target has the Restrained condition and repeats the save at the end of its next turn if it is still Restrained, ending the effect on itself on a success. Second Failure The target has the Petrified condition instead of the Restrained condition.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Claw
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:2d6+DEX` Slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 6
        damage: 2d6+3
        damage_type: slashing
        range:
          reach: 5
  - name: Snake Hair
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d4+DEX` Piercing damage plus `dmg:4d6` Poison damage.'
    attacks:
      - name: Snake Hair attack
        type: melee
        bonus: 6
        damage: 1d4+3
        damage_type: piercing
        range:
          reach: 5
  - name: Poison Ray
    entries:
      - 'Ranged Attack Roll: `atk:CHA+PB`, range 150 ft. `dmg:2d8+CHA` Poison damage.'
    attacks:
      - name: Poison Ray attack
        type: ranged
        bonus: 5
        damage: 2d8+2
        damage_type: poison
        range:
          normal: 150
reactions: []
legendary_actions: []
traits: []
cr: '6'
saves:
  str: 0
  dex: 3
  con: 3
  int: 1
  wis: 4
  cha: 2
skills:
  deception: 5
  perception: 4
  stealth: 6
alignment: lawful evil
passive_perception: 14
```
