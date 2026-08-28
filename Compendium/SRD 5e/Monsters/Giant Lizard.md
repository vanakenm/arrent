---
archivist: true
entity_type: monster
slug: srd-5e_monster_giant-lizard
name: Giant Lizard
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.995Z'
---

```monster
slug: srd-5e_monster_giant-lizard
name: Giant Lizard
edition: '2014'
source: SRD 5.1
size: large
type: beast
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 19
  formula: 3d10+3
speed:
  walk: 30
  climb: 30
abilities:
  str: 15
  dex: 12
  con: 13
  int: 2
  wis: 10
  cha: 5
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
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d8+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 1d8
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: 'Variant: Hold Breath'
    entries:
      - The lizard can hold its breath for 15 minutes. (A lizard that has this trait also has a swimming speed of 30 feet.)
  - name: 'Variant: Spider Climb'
    entries:
      - The lizard can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.
cr: '0.25'
alignment: unaligned
passive_perception: 10
```
