---
archivist: true
entity_type: monster
slug: srd-5e_monster_plesiosaurus
name: Plesiosaurus
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.010Z'
---

```monster
slug: srd-5e_monster_plesiosaurus
name: Plesiosaurus
edition: '2014'
source: SRD 5.1
size: large
type: beast
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 68
  formula: 8d10+24
speed:
  walk: 20
  swim: 40
abilities:
  str: 18
  dex: 15
  con: 16
  int: 2
  wis: 12
  cha: 5
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:3d6+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 6
        damage: 3d6
        damage_type: thunder
        range:
          reach: 10
reactions: []
legendary_actions: []
traits:
  - name: Hold Breath
    entries:
      - The plesiosaurus can hold its breath for 1 hour.
cr: '2'
skills:
  perception: 3
  stealth: 4
subtype: Dinosaurs
alignment: unaligned
passive_perception: 13
```
