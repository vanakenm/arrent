---
archivist: true
entity_type: monster
slug: srd-2024_monster_ghoul
name: Ghoul
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.421Z'
---

```monster
slug: srd-2024_monster_ghoul
name: Ghoul
edition: '2024'
source: SRD 5.2
size: medium
type: undead
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 22
  formula: 5d8
speed:
  walk: 30
abilities:
  str: 13
  dex: 15
  con: 10
  int: 7
  wis: 10
  cha: 6
senses:
  - darkvision 60 ft.
languages:
  - Common
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - poison
condition_immunities:
  - charmed
  - exhaustion
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The ghoul makes two Bite attacks.
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d6+DEX` Piercing damage plus `dmg:1d6` Necrotic damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 1d6+2
        damage_type: piercing
        range:
          reach: 5
  - name: Claw
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d4+DEX` Slashing damage. If the target is a creature that isn''t an Undead or elf, it is subjected to the following effect. Constitution Saving Throw: `dc:CON`. Failure: The target has the Paralyzed condition until the end of its next turn.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 4
        damage: 1d4+2
        damage_type: slashing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '1'
saves:
  str: 1
  dex: 2
  con: 0
  int: -2
  wis: 0
  cha: -2
alignment: chaotic evil
passive_perception: 10
```
