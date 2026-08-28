---
archivist: true
entity_type: monster
slug: srd-2024_monster_dragon-turtle
name: Dragon Turtle
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.416Z'
---

```monster
slug: srd-2024_monster_dragon-turtle
name: Dragon Turtle
edition: '2024'
source: SRD 5.2
size: gargantuan
type: dragon
ac:
  - ac: 20
    from:
      - natural armor
hp:
  average: 356
  formula: 23d20 + 115
speed:
  walk: 20
  swim: 50
abilities:
  str: 25
  dex: 10
  con: 20
  int: 10
  wis: 12
  cha: 12
senses:
  - darkvision 120 ft.
languages:
  - Draconic
  - Primordial (Aquan)
damage_vulnerabilities: []
damage_resistances:
  - fire
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The dragon makes three Bite attacks. It can replace one attack with a Tail attack.
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 15 ft. `dmg:3d10+STR` Piercing damage plus `dmg:2d6` Fire damage. Being underwater doesn''t grant Resistance to this Fire damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 13
        damage: 3d10+7
        damage_type: piercing
        range:
          reach: 15
  - name: Tail
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 15 ft. `dmg:2d10+STR` Bludgeoning damage. If the target is a Huge or smaller creature, it has the Prone condition.'
    attacks:
      - name: Tail attack
        type: melee
        bonus: 13
        damage: 2d10+7
        damage_type: bludgeoning
        range:
          reach: 15
  - name: Steam Breath
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 60-foot Cone. Failure: `dmg:16d6` Fire damage. Success: Half damage. Failure or Success: Being underwater doesn''t grant Resistance to this Fire damage.'
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits:
  - name: Amphibious
    entries:
      - The dragon can breathe air and water.
cr: '17'
saves:
  str: 7
  dex: 0
  con: 11
  int: 0
  wis: 7
  cha: 1
alignment: neutral
passive_perception: 11
```
