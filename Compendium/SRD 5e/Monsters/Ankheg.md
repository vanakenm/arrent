---
archivist: true
entity_type: monster
slug: srd-5e_monster_ankheg
name: Ankheg
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.977Z'
---

```monster
slug: srd-5e_monster_ankheg
name: Ankheg
edition: '2014'
source: SRD 5.1
size: large
type: monstrosity
ac:
  - ac: 14
    from:
      - 14 (natural armor), 11 while prone
hp:
  average: 39
  formula: 6d10+6
speed:
  walk: 30
  burrow: 10
abilities:
  str: 17
  dex: 11
  con: 13
  int: 1
  wis: 13
  cha: 6
senses:
  - darkvision 60 ft.
  - tremorsense 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` slashing damage plus `dmg:1d6` acid damage. If the target is a Large or smaller creature, it is grappled (escape `dc:STR`). Until this grapple ends, the ankheg can bite only the grappled creature and has advantage on attack rolls to do so.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 5
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
  - name: Acid Spray
    entries:
      - The ankheg spits acid in a line that is 30 ft. long and 5 ft. wide, provided that it has no creature grappled. Each creature in that line must make a `dc:13` Dexterity saving throw, taking `dmg:3d6` acid damage on a failed save, or half as much damage on a successful one.
reactions: []
legendary_actions: []
traits: []
cr: '2'
alignment: unaligned
passive_perception: 11
```
