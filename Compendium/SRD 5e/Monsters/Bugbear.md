---
archivist: true
entity_type: monster
slug: srd-5e_monster_bugbear
name: Bugbear
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.983Z'
---

```monster
slug: srd-5e_monster_bugbear
name: Bugbear
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 16
    from:
      - hide armor, shield
hp:
  average: 27
  formula: 5d8+5
speed:
  walk: 30
abilities:
  str: 15
  dex: 14
  con: 13
  int: 8
  wis: 11
  cha: 9
senses:
  - darkvision 60 ft.
languages:
  - Common
  - Goblin
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Morningstar
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d8+STR` piercing damage.'
    attacks:
      - name: Morningstar attack
        type: melee
        bonus: 4
        damage: 2d8
        damage_type: thunder
        range:
          reach: 5
  - name: Javelin
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:DEX+PB`, reach 5 ft. or range 30/120 ft., one target. Hit: `dmg:2d6+DEX` piercing damage in melee or `dmg:1d6+DEX` piercing damage at range.'
    attacks:
      - name: Javelin Melee attack
        type: ranged
        bonus: 4
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
          normal: 30
          long: 120
      - name: Javelin Ranged attack
        type: ranged
        bonus: 4
        damage: 2d6
        damage_type: thunder
        range:
          normal: 30
          long: 120
reactions: []
legendary_actions: []
traits:
  - name: Brute
    entries:
      - A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack).
  - name: Surprise Attack
    entries:
      - If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra `dmg:2d6` damage from the attack.
cr: '1'
skills:
  stealth: 6
  survival: 2
alignment: chaotic evil
passive_perception: 10
```
