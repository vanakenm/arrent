---
archivist: true
entity_type: monster
slug: srd-5e_monster_hobgoblin
name: Hobgoblin
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.001Z'
---

```monster
slug: srd-5e_monster_hobgoblin
name: Hobgoblin
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 18
    from:
      - chain mail, shield
hp:
  average: 11
  formula: 2d8+2
speed:
  walk: 30
abilities:
  str: 13
  dex: 12
  con: 12
  int: 10
  wis: 10
  cha: 9
senses:
  - darkvision 60 ft.
languages:
  - Common
  - Goblin
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Longsword
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d8+STR` slashing damage, or `dmg:1d10+STR` slashing damage if used with two hands.'
    attacks:
      - name: Longsword attack
        type: melee
        bonus: 3
        damage: 1d10
        damage_type: thunder
        range:
          reach: 5
  - name: Longbow
    entries:
      - 'Ranged Weapon Attack: `atk:STR+PB`, range 150/600 ft., one target. Hit: `dmg:1d8+STR` piercing damage.'
    attacks:
      - name: Longbow attack
        type: ranged
        bonus: 3
        damage: 1d8
        damage_type: thunder
        range:
          normal: 150
          long: 600
reactions: []
legendary_actions: []
traits:
  - name: Martial Advantage
    entries:
      - Once per turn, the hobgoblin can deal an extra `dmg:2d6` damage to a creature it hits with a weapon attack if that creature is within 5 ft. of an ally of the hobgoblin that isn't incapacitated.
cr: '0.5'
alignment: lawful evil
passive_perception: 10
```
