---
archivist: true
entity_type: monster
slug: srd-5e_monster_hunter-shark
name: Hunter Shark
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.002Z'
---

```monster
slug: srd-5e_monster_hunter-shark
name: Hunter Shark
edition: '2014'
source: SRD 5.1
size: large
type: beast
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 45
  formula: 6d10+12
speed:
  swim: 40
abilities:
  str: 18
  dex: 13
  con: 15
  int: 1
  wis: 10
  cha: 4
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
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d8+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 6
        damage: 2d8
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Blood Frenzy
    entries:
      - The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points.
  - name: Water Breathing
    entries:
      - The shark can breathe only underwater.
cr: '2'
skills:
  perception: 2
alignment: unaligned
passive_perception: 12
```
