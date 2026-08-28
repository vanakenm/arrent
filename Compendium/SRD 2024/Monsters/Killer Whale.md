---
archivist: true
entity_type: monster
slug: srd-2024_monster_killer-whale
name: Killer Whale
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.432Z'
---

```monster
slug: srd-2024_monster_killer-whale
name: Killer Whale
edition: '2024'
source: SRD 5.2
size: huge
type: beast
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 90
  formula: 12d12 + 12
speed:
  walk: 5
  swim: 60
abilities:
  str: 19
  dex: 14
  con: 13
  int: 3
  wis: 12
  cha: 7
senses:
  - blindsight 120 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:5d6+STR` Piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 6
        damage: 5d6+4
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Hold Breath
    entries:
      - The whale can hold its breath for 30 minutes.
cr: '3'
saves:
  str: 4
  dex: 2
  con: 1
  int: -4
  wis: 1
  cha: -2
skills:
  perception: 3
  stealth: 4
alignment: unaligned
passive_perception: 13
```
