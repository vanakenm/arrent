---
archivist: true
entity_type: monster
slug: srd-5e_monster_roc
name: Roc
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.013Z'
---

```monster
slug: srd-5e_monster_roc
name: Roc
edition: '2014'
source: SRD 5.1
size: gargantuan
type: monstrosity
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 248
  formula: 16d20+80
speed:
  walk: 20
  fly: 120
abilities:
  str: 28
  dex: 10
  con: 20
  int: 3
  wis: 10
  cha: 9
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - 'The roc makes two attacks: one with its beak and one with its talons.'
  - name: Beak
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:4d8+STR` piercing damage.'
    attacks:
      - name: Beak attack
        type: melee
        bonus: 13
        damage: 4d8
        damage_type: thunder
        range:
          reach: 10
  - name: Talons
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:4d6+STR` slashing damage, and the target is grappled (escape `dc:19`). Until this grapple ends, the target is restrained, and the roc can''t use its talons on another target.'
    attacks:
      - name: Talons attack
        type: melee
        bonus: 13
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Keen Sight
    entries:
      - The roc has advantage on Wisdom (Perception) checks that rely on sight.
cr: '11'
saves:
  dex: 4
  con: 9
  wis: 4
  cha: 3
skills:
  perception: 4
alignment: unaligned
passive_perception: 14
```
