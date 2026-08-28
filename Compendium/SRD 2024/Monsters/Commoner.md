---
archivist: true
entity_type: monster
slug: srd-2024_monster_commoner
name: Commoner
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.414Z'
---

```monster
slug: srd-2024_monster_commoner
name: Commoner
edition: '2024'
source: SRD 5.2
size: small
type: humanoid
ac:
  - ac: 10
    from:
      - natural armor
hp:
  average: 4
  formula: 1d8
speed:
  walk: 30
abilities:
  str: 10
  dex: 10
  con: 10
  int: 10
  wis: 10
  cha: 10
senses: []
languages:
  - Common
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Club
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d4` Bludgeoning damage.'
    attacks:
      - name: Club attack
        type: melee
        bonus: 2
        damage: 1d4
        damage_type: bludgeoning
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Training
    entries:
      - The commoner has proficiency in one skill of the DM's choice and has Advantage whenever it makes an ability check using that skill.
cr: '0'
saves:
  str: 0
  dex: 0
  con: 0
  int: 0
  wis: 0
  cha: 0
alignment: neutral
passive_perception: 10
```
