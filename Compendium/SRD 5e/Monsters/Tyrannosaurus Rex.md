---
archivist: true
entity_type: monster
slug: srd-5e_monster_tyrannosaurus-rex
name: Tyrannosaurus Rex
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.021Z'
---

```monster
slug: srd-5e_monster_tyrannosaurus-rex
name: Tyrannosaurus Rex
edition: '2014'
source: SRD 5.1
size: huge
type: beast
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 136
  formula: 13d12+52
speed:
  walk: 50
abilities:
  str: 25
  dex: 10
  con: 19
  int: 2
  wis: 12
  cha: 9
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - 'The tyrannosaurus makes two attacks: one with its bite and one with its tail. It can''t make both attacks against the same target.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:4d12+STR` piercing damage. If the target is a Medium or smaller creature, it is grappled (escape `dc:17`). Until this grapple ends, the target is restrained, and the tyrannosaurus can''t bite another target.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 10
        damage: 4d12
        damage_type: thunder
        range:
          reach: 10
  - name: Tail
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:3d8+STR` bludgeoning damage.'
    attacks:
      - name: Tail attack
        type: melee
        bonus: 10
        damage: 3d8
        damage_type: thunder
        range:
          reach: 10
reactions: []
legendary_actions: []
traits: []
cr: '8'
skills:
  perception: 4
subtype: Dinosaurs
alignment: unaligned
passive_perception: 14
```
