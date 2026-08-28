---
archivist: true
entity_type: monster
slug: srd-2024_monster_phase-spider
name: Phase Spider
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.438Z'
---

```monster
slug: srd-2024_monster_phase-spider
name: Phase Spider
edition: '2024'
source: SRD 5.2
size: large
type: monstrosity
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 45
  formula: 7d10 + 7
speed:
  walk: 30
  climb: 30
abilities:
  str: 15
  dex: 16
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
  - name: Multiattack
    entries:
      - The spider makes two Bite attacks.
  - name: Ethereal Jaunt
    entries:
      - The spider teleports from the Material Plane to the Ethereal Plane or vice versa.
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d10+DEX` Piercing damage plus `dmg:2d8` Poison damage. If this damage reduces the target to 0 Hit Points, the target becomes Stable, and it has the Poisoned condition for 1 hour. While Poisoned, the target also has the Paralyzed condition.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 5
        damage: 1d10+3
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Ethereal Sight
    entries:
      - The spider can see 60 feet into the Ethereal Plane while on the Material Plane and vice versa.
  - name: Spider Climb
    entries:
      - The spider can climb difficult surfaces, including along ceilings, without needing to make an ability check.
  - name: Web Walker
    entries:
      - The spider ignores movement restrictions caused by webs, and the spider knows the location of any other creature in contact with the same web.
cr: '3'
saves:
  str: 2
  dex: 3
  con: 1
  int: -2
  wis: 0
  cha: -2
skills:
  stealth: 7
alignment: unaligned
passive_perception: 10
```
