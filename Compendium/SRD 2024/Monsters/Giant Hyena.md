---
archivist: true
entity_type: monster
slug: srd-2024_monster_giant-hyena
name: Giant Hyena
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.424Z'
---

```monster
slug: srd-2024_monster_giant-hyena
name: Giant Hyena
edition: '2024'
source: SRD 5.2
size: large
type: beast
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 45
  formula: 6d10 + 12
speed:
  walk: 50
abilities:
  str: 16
  dex: 14
  con: 14
  int: 2
  wis: 12
  cha: 7
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d6+STR` Piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 5
        damage: 2d6+3
        damage_type: piercing
        range:
          reach: 5
  - name: Rampage
    entries:
      - Immediately after dealing damage to a creature that was already Bloodied, the hyena can move up to half its Speed, and it makes one Bite attack.
    recharge:
      type: per_day
      param: 1
reactions: []
legendary_actions: []
traits: []
cr: '1'
saves:
  str: 3
  dex: 2
  con: 2
  int: -4
  wis: 1
  cha: -2
skills:
  perception: 3
alignment: unaligned
passive_perception: 13
```
