---
archivist: true
entity_type: monster
slug: srd-5e_monster_phase-spider
name: Phase Spider
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.010Z'
---

```monster
slug: srd-5e_monster_phase-spider
name: Phase Spider
edition: '2014'
source: SRD 5.1
size: large
type: monstrosity
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 32
  formula: 5d10+5
speed:
  walk: 30
  climb: 30
abilities:
  str: 15
  dex: 15
  con: 12
  int: 6
  wis: 10
  cha: 6
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one creature. Hit: `dmg:1d10+STR` piercing damage, and the target must make a `dc:CON` Constitution saving throw, taking `dmg:4d8` poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Ethereal Jaunt
    entries:
      - As a bonus action, the spider can magically shift from the Material Plane to the Ethereal Plane, or vice versa.
  - name: Spider Climb
    entries:
      - The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.
  - name: Web Walker
    entries:
      - The spider ignores movement restrictions caused by webbing.
cr: '3'
skills:
  stealth: 6
alignment: unaligned
passive_perception: 10
```
