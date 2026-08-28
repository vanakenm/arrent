---
archivist: true
entity_type: monster
slug: srd-5e_monster_giant-rat-diseased
name: Giant Rat (Diseased)
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.996Z'
---

```monster
slug: srd-5e_monster_giant-rat-diseased
name: Giant Rat (Diseased)
edition: '2014'
source: SRD 5.1
size: small
type: beast
ac:
  - ac: 12
hp:
  average: 7
  formula: 2d6
speed:
  walk: 30
abilities:
  str: 7
  dex: 15
  con: 11
  int: 2
  wis: 10
  cha: 4
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
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one target. Hit: `dmg:1d4+DEX` piercing damage. If the target is a creature, it must succeed on a `dc:CON` Constitution saving throw or contract a disease. Until the disease is cured, the target can''t regain hit points except by magical means, and the target''s hit point maximum decreases by 3 (`dice:1d6`) every 24 hours. If the target''s hit point maximum drops to 0 as a result of this disease, the target dies.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 1d4
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '0.125'
alignment: unaligned
passive_perception: 10
```
