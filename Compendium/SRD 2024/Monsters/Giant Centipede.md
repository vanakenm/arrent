---
archivist: true
entity_type: monster
slug: srd-2024_monster_giant-centipede
name: Giant Centipede
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.422Z'
---

```monster
slug: srd-2024_monster_giant-centipede
name: Giant Centipede
edition: '2024'
source: SRD 5.2
size: small
type: beast
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 9
  formula: 2d6 + 2
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
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d4+DEX` Piercing damage, and the target has the Poisoned condition until the start of the centipede''s next turn.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 1d4+2
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '0.25'
saves:
  str: -3
  dex: 2
  con: 1
  int: -5
  wis: -2
  cha: -4
alignment: unaligned
passive_perception: 8
```
