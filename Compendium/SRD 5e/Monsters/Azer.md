---
archivist: true
entity_type: monster
slug: srd-5e_monster_azer
name: Azer
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.980Z'
---

```monster
slug: srd-5e_monster_azer
name: Azer
edition: '2014'
source: SRD 5.1
size: medium
type: elemental
ac:
  - ac: 17
    from:
      - natural armor, shield
hp:
  average: 39
  formula: 6d8+12
speed:
  walk: 30
abilities:
  str: 17
  dex: 12
  con: 15
  int: 12
  wis: 13
  cha: 10
senses: []
languages:
  - Ignan
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - fire
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Warhammer
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d8+STR` bludgeoning damage, or `dmg:1d10+STR` bludgeoning damage if used with two hands to make a melee attack, plus `dmg:1d6` fire damage.'
    attacks:
      - name: Warhammer attack
        type: melee
        bonus: 5
        damage: 1d10
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Heated Body
    entries:
      - A creature that touches the azer or hits it with a melee attack while within 5 ft. of it takes `dmg:1d10` fire damage.
  - name: Heated Weapons
    entries:
      - When the azer hits with a metal melee weapon, it deals an extra `dmg:1d6` fire damage (included in the attack).
  - name: Illumination
    entries:
      - The azer sheds bright light in a 10-foot radius and dim light for an additional 10 ft..
cr: '2'
saves:
  con: 4
alignment: lawful neutral
passive_perception: 11
```
