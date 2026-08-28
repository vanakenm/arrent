---
archivist: true
entity_type: monster
slug: srd-2024_monster_minotaur-of-baphomet
name: Minotaur of Baphomet
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.435Z'
---

```monster
slug: srd-2024_monster_minotaur-of-baphomet
name: Minotaur of Baphomet
edition: '2024'
source: SRD 5.2
size: large
type: monstrosity
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 85
  formula: 10d10 + 30
speed:
  walk: 40
abilities:
  str: 18
  dex: 11
  con: 16
  int: 6
  wis: 16
  cha: 9
senses:
  - darkvision 60 ft.
languages:
  - Abyssal
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Abyssal Glaive
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:1d12+STR` Slashing damage plus `dmg:3d6` Necrotic damage.'
    attacks:
      - name: Abyssal Glaive attack
        type: melee
        bonus: 6
        damage: 1d12+4
        damage_type: slashing
        range:
          reach: 10
  - name: Gore
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:4d6+STR` Piercing damage. If the target is a Large or smaller creature and the minotaur moved 10+ feet straight toward it immediately before the hit, the target takes an extra `dmg:3d6` Piercing damage and has the Prone condition.'
    attacks:
      - name: Gore attack
        type: melee
        bonus: 6
        damage: 4d6+4
        damage_type: piercing
        range:
          reach: 5
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits: []
cr: '3'
saves:
  str: 4
  dex: 0
  con: 3
  int: -2
  wis: 3
  cha: -1
skills:
  perception: 7
  survival: 7
alignment: chaotic evil
passive_perception: 17
```
