---
archivist: true
entity_type: monster
slug: srd-5e_monster_giant-shark
name: Giant Shark
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.996Z'
---

```monster
slug: srd-5e_monster_giant-shark
name: Giant Shark
edition: '2014'
source: SRD 5.1
size: huge
type: beast
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 126
  formula: 11d12+55
speed:
  swim: 50
abilities:
  str: 23
  dex: 11
  con: 21
  int: 1
  wis: 10
  cha: 5
senses:
  - blindsight 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:3d10+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 9
        damage: 3d10
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
cr: '5'
skills:
  perception: 3
alignment: unaligned
passive_perception: 13
```
