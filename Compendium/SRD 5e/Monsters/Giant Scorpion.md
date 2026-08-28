---
archivist: true
entity_type: monster
slug: srd-5e_monster_giant-scorpion
name: Giant Scorpion
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.996Z'
---

```monster
slug: srd-5e_monster_giant-scorpion
name: Giant Scorpion
edition: '2014'
source: SRD 5.1
size: large
type: beast
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 52
  formula: 7d10+14
speed:
  walk: 40
abilities:
  str: 15
  dex: 13
  con: 15
  int: 1
  wis: 9
  cha: 3
senses:
  - blindsight 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d8+STR` bludgeoning damage, and the target is grappled (escape `dc:STR`). The scorpion has two claws, each of which can grapple only one target.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 4
        damage_type: thunder
        range:
          reach: 5
  - name: Multiattack
    entries:
      - 'The scorpion makes three attacks: two with its claws and one with its sting.'
  - name: Sting
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one creature. Hit: `dmg:1d10+STR` piercing damage, and the target must make a `dc:CON` Constitution saving throw, taking `dmg:4d10` poison damage on a failed save, or half as much damage on a successful one.'
    attacks:
      - name: Sting attack
        type: melee
        bonus: 4
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '3'
alignment: unaligned
passive_perception: 9
```
