---
archivist: true
entity_type: monster
slug: srd-2024_monster_noble
name: Noble
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.436Z'
---

```monster
slug: srd-2024_monster_noble
name: Noble
edition: '2024'
source: SRD 5.2
size: small
type: humanoid
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 9
  formula: 2d8
speed:
  walk: 30
abilities:
  str: 11
  dex: 12
  con: 11
  int: 12
  wis: 14
  cha: 16
senses: []
languages:
  - Common plus two other languages
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Rapier
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d8+DEX` Piercing damage.'
    attacks:
      - name: Rapier attack
        type: melee
        bonus: 3
        damage: 1d8+1
        damage_type: piercing
        range:
          reach: 5
reactions:
  - name: Parry
    entries:
      - '_Trigger_: The noble is hit by a melee attack roll while holding a weapon. _Response:_ The noble adds 2 to its AC against that attack, possibly causing it to miss.'
legendary_actions: []
traits: []
cr: '0.125'
saves:
  str: 0
  dex: 1
  con: 0
  int: 1
  wis: 2
  cha: 3
skills:
  deception: 5
  insight: 4
  persuasion: 5
alignment: neutral
passive_perception: 12
```
