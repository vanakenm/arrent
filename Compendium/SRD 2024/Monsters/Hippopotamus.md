---
archivist: true
entity_type: monster
slug: srd-2024_monster_hippopotamus
name: Hippopotamus
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.430Z'
---

```monster
slug: srd-2024_monster_hippopotamus
name: Hippopotamus
edition: '2024'
source: SRD 5.2
size: large
type: beast
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 82
  formula: 11d10 + 22
speed:
  walk: 30
  swim: 30
abilities:
  str: 21
  dex: 7
  con: 15
  int: 2
  wis: 12
  cha: 4
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The hippopotamus makes two Bite attacks.
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d10+STR` Piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 7
        damage: 2d10+5
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Hold Breath
    entries:
      - The hippopotamus can hold its breath for 10 minutes.
cr: '4'
saves:
  str: 7
  dex: -2
  con: 2
  int: -4
  wis: 1
  cha: -3
skills:
  perception: 3
alignment: unaligned
passive_perception: 13
```
