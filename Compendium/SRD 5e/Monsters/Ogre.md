---
archivist: true
entity_type: monster
slug: srd-5e_monster_ogre
name: Ogre
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.009Z'
---

```monster
slug: srd-5e_monster_ogre
name: Ogre
edition: '2014'
source: SRD 5.1
size: large
type: giant
ac:
  - ac: 11
    from:
      - hide armor
hp:
  average: 59
  formula: 7d10+21
speed:
  walk: 40
abilities:
  str: 19
  dex: 8
  con: 16
  int: 5
  wis: 7
  cha: 7
senses:
  - darkvision 60 ft.
languages:
  - Common
  - Giant
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Greatclub
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d8+STR` bludgeoning damage.'
    attacks:
      - name: Greatclub attack
        type: melee
        bonus: 6
        damage: 2d8
        damage_type: thunder
        range:
          reach: 5
  - name: Javelin
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:STR+PB`, reach 5 ft. or range 30/120 ft., one target. Hit: `dmg:2d6+STR` piercing damage.'
    attacks:
      - name: Javelin Melee attack
        type: ranged
        bonus: 6
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
          normal: 30
          long: 120
      - name: Javelin Ranged attack
        type: ranged
        bonus: 6
        damage: 2d6
        damage_type: thunder
        range:
          normal: 30
          long: 120
reactions: []
legendary_actions: []
traits: []
cr: '2'
alignment: chaotic evil
passive_perception: 8
```
