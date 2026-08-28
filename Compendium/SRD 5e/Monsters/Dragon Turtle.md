---
archivist: true
entity_type: monster
slug: srd-5e_monster_dragon-turtle
name: Dragon Turtle
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.988Z'
---

```monster
slug: srd-5e_monster_dragon-turtle
name: Dragon Turtle
edition: '2014'
source: SRD 5.1
size: gargantuan
type: dragon
ac:
  - ac: 20
    from:
      - natural armor
hp:
  average: 341
  formula: 22d20+110
speed:
  walk: 20
  swim: 40
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
  - Aquan
  - Draconic
damage_vulnerabilities: []
damage_resistances:
  - fire
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - 'The dragon turtle makes three attacks: one with its bite and two with its claws. It can make one tail attack in place of its two claw attacks.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 15 ft., one target. Hit: `dmg:3d12+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 13
        damage: 3d12
        damage_type: thunder
        range:
          reach: 15
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:2d8+STR` slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 13
        damage: 2d8
        damage_type: thunder
        range:
          reach: 10
  - name: Tail
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 15 ft., one target. Hit: `dmg:3d12+STR` bludgeoning damage. If the target is a creature, it must succeed on a `dc:20` Strength saving throw or be pushed up to 10 feet away from the dragon turtle and knocked prone.'
    attacks:
      - name: Tail attack
        type: melee
        bonus: 13
        damage: 3d12
        damage_type: thunder
        range:
          reach: 15
  - name: Steam Breath
    entries:
      - The dragon turtle exhales scalding steam in a 60-foot cone. Each creature in that area must make a `dc:18` Constitution saving throw, taking `dmg:15d6` fire damage on a failed save, or half as much damage on a successful one. Being underwater doesn't grant resistance against this damage.
reactions: []
legendary_actions: []
traits:
  - name: Amphibious
    entries:
      - The dragon turtle can breathe air and water.
cr: '17'
saves:
  dex: 6
  con: 11
  wis: 7
alignment: neutral
passive_perception: 11
```
