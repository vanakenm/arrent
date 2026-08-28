---
archivist: true
entity_type: monster
slug: srd-5e_monster_giant-centipede
name: Giant Centipede
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.994Z'
---

```monster
slug: srd-5e_monster_giant-centipede
name: Giant Centipede
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
  climb: 30
abilities:
  str: 5
  dex: 14
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
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one creature. Hit: `dmg:1d4+DEX` piercing damage, and the target must succeed on a `dc:CON` Constitution saving throw or take `dmg:3d6` poison damage. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '0.25'
alignment: unaligned
passive_perception: 8
```
