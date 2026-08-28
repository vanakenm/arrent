---
archivist: true
entity_type: monster
slug: srd-5e_monster_giant-fire-beetle
name: Giant Fire Beetle
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.994Z'
---

```monster
slug: srd-5e_monster_giant-fire-beetle
name: Giant Fire Beetle
edition: '2014'
source: SRD 5.1
size: small
type: beast
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 4
  formula: 1d6+1
speed:
  walk: 30
abilities:
  str: 8
  dex: 10
  con: 12
  int: 1
  wis: 7
  cha: 3
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
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d6+STR` slashing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 1
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Illumination
    entries:
      - The beetle sheds bright light in a 10-foot radius and dim light for an additional 10 ft..
cr: '0'
alignment: unaligned
passive_perception: 8
```
