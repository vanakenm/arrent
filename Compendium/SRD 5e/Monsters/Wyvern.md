---
archivist: true
entity_type: monster
slug: srd-5e_monster_wyvern
name: Wyvern
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.025Z'
---

```monster
slug: srd-5e_monster_wyvern
name: Wyvern
edition: '2014'
source: SRD 5.1
size: large
type: dragon
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 110
  formula: 13d10+39
speed:
  walk: 20
  fly: 80
abilities:
  str: 19
  dex: 10
  con: 16
  int: 5
  wis: 12
  cha: 6
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - 'The wyvern makes two attacks: one with its bite and one with its stinger. While flying, it can use its claws in place of one other attack.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one creature. Hit: `dmg:2d6+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 7
        damage: 2d6
        damage_type: thunder
        range:
          reach: 10
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d8+STR` slashing damage.'
    attacks:
      - name: Claws attack
        type: melee
        bonus: 7
        damage: 2d8
        damage_type: thunder
        range:
          reach: 5
  - name: Stinger
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one creature. Hit: `dmg:2d6+STR` piercing damage. The target must make a `dc:15` Constitution saving throw, taking `dmg:7d6` poison damage on a failed save, or half as much damage on a successful one.'
    attacks:
      - name: Stinger attack
        type: melee
        bonus: 7
        damage: 2d6
        damage_type: thunder
        range:
          reach: 10
reactions: []
legendary_actions: []
traits: []
cr: '6'
skills:
  perception: 4
alignment: unaligned
passive_perception: 14
```
