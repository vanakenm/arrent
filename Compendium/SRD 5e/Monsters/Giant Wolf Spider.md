---
archivist: true
entity_type: monster
slug: srd-5e_monster_giant-wolf-spider
name: Giant Wolf Spider
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.997Z'
---

```monster
slug: srd-5e_monster_giant-wolf-spider
name: Giant Wolf Spider
edition: '2014'
source: SRD 5.1
size: medium
type: beast
ac:
  - ac: 13
hp:
  average: 11
  formula: 2d8+2
speed:
  walk: 40
  climb: 40
abilities:
  str: 12
  dex: 16
  con: 13
  int: 3
  wis: 12
  cha: 4
senses:
  - darkvision 60 ft.
  - blindsight 10 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one creature. Hit: `dmg:1d6+STR` piercing damage, and the target must make a `dc:CON` Constitution saving throw, taking `dmg:2d6` poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 3
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Spider Climb
    entries:
      - The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.
  - name: Web Sense
    entries:
      - While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.
  - name: Web Walker
    entries:
      - The spider ignores movement restrictions caused by webbing.
cr: '0.25'
skills:
  perception: 3
  stealth: 7
alignment: unaligned
passive_perception: 13
```
