---
archivist: true
entity_type: monster
slug: srd-5e_monster_giant-eagle
name: Giant Eagle
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.994Z'
---

```monster
slug: srd-5e_monster_giant-eagle
name: Giant Eagle
edition: '2014'
source: SRD 5.1
size: large
type: beast
ac:
  - ac: 13
hp:
  average: 26
  formula: 4d10+4
speed:
  walk: 10
  fly: 80
abilities:
  str: 16
  dex: 17
  con: 13
  int: 8
  wis: 14
  cha: 10
senses: []
languages:
  - Giant Eagle
  - understands Common and Auran but can't speak
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - 'The eagle makes two attacks: one with its beak and one with its talons.'
  - name: Beak
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d6+STR` piercing damage.'
    attacks:
      - name: Beak attack
        type: melee
        bonus: 5
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
  - name: Talons
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` slashing damage.'
    attacks:
      - name: Talons attack
        type: melee
        bonus: 5
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Keen Sight
    entries:
      - The eagle has advantage on Wisdom (Perception) checks that rely on sight.
cr: '1'
skills:
  perception: 4
alignment: neutral good
passive_perception: 14
```
