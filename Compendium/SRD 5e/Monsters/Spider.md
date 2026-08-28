---
archivist: true
entity_type: monster
slug: srd-5e_monster_spider
name: Spider
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.017Z'
---

```monster
slug: srd-5e_monster_spider
name: Spider
edition: '2014'
source: SRD 5.1
size: tiny
type: beast
ac:
  - ac: 12
hp:
  average: 1
  formula: 1d4-1
speed:
  walk: 20
  climb: 20
abilities:
  str: 2
  dex: 14
  con: 8
  int: 1
  wis: 10
  cha: 2
senses:
  - darkvision 30 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:+4`, reach 5 ft., one creature. Hit: `dmg:1` piercing damage, and the target must succeed on a `dc:CON` Constitution saving throw or take `dmg:1d4` poison damage.'
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
  - name: Spider Climb
    entries:
      - The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.
  - name: Web Sense
    entries:
      - While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.
  - name: Web Walker
    entries:
      - The spider ignores movement restrictions caused by webbing.
cr: '0'
skills:
  stealth: 4
alignment: unaligned
passive_perception: 12
```
