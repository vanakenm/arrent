---
archivist: true
entity_type: monster
slug: srd-5e_monster_reef-shark
name: Reef Shark
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.013Z'
---

```monster
slug: srd-5e_monster_reef-shark
name: Reef Shark
edition: '2014'
source: SRD 5.1
size: medium
type: beast
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 22
  formula: 4d8+1
speed:
  swim: 40
abilities:
  str: 14
  dex: 13
  con: 13
  int: 1
  wis: 10
  cha: 4
senses:
  - blindsight 30 ft.
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
  - name: Pack Tactics
    entries:
      - The shark has advantage on an attack roll against a creature if at least one of the shark's allies is within 5 ft. of the creature and the ally isn't incapacitated.
  - name: Water Breathing
    entries:
      - The shark can breathe only underwater.
cr: '0.5'
skills:
  perception: 2
alignment: unaligned
passive_perception: 12
```
