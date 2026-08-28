---
archivist: true
entity_type: monster
slug: srd-5e_monster_triceratops
name: Triceratops
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.021Z'
---

```monster
slug: srd-5e_monster_triceratops
name: Triceratops
edition: '2014'
source: SRD 5.1
size: huge
type: beast
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 95
  formula: 10d12+30
speed:
  walk: 50
abilities:
  str: 22
  dex: 9
  con: 17
  int: 2
  wis: 11
  cha: 5
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Gore
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:4d8+STR` piercing damage.'
    attacks:
      - name: Gore attack
        type: melee
        bonus: 9
        damage: 4d8
        damage_type: thunder
        range:
          reach: 5
  - name: Stomp
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one prone creature. Hit: `dmg:3d10+STR` bludgeoning damage.'
    attacks:
      - name: Stomp attack
        type: melee
        bonus: 9
        damage: 3d10
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Trampling Charge
    entries:
      - If the triceratops moves at least 20 ft. straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a `dc:13` Strength saving throw or be knocked prone. If the target is prone, the triceratops can make one stomp attack against it as a bonus action.
cr: '5'
subtype: Dinosaurs
alignment: unaligned
passive_perception: 10
```
