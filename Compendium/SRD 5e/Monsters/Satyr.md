---
archivist: true
entity_type: monster
slug: srd-5e_monster_satyr
name: Satyr
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.014Z'
---

```monster
slug: srd-5e_monster_satyr
name: Satyr
edition: '2014'
source: SRD 5.1
size: medium
type: fey
ac:
  - ac: 14
    from:
      - leather armor
hp:
  average: 31
  formula: 7d8
speed:
  walk: 40
abilities:
  str: 12
  dex: 16
  con: 11
  int: 12
  wis: 10
  cha: 14
senses: []
languages:
  - Common
  - Elvish
  - Sylvan
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Ram
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d4+STR` bludgeoning damage.'
    attacks:
      - name: Ram attack
        type: melee
        bonus: 3
        damage: 2d4
        damage_type: thunder
        range:
          reach: 5
  - name: Shortsword
    entries:
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one target. Hit: `dmg:1d6+DEX` piercing damage.'
    attacks:
      - name: Shortsword attack
        type: melee
        bonus: 5
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
  - name: Shortbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX+PB`, range 80/320 ft., one target. Hit: `dmg:1d6+DEX` piercing damage.'
    attacks:
      - name: Shortbow attack
        type: ranged
        bonus: 5
        damage: 1d6
        damage_type: thunder
        range:
          normal: 80
          long: 320
  - name: 'Variant: Panpipes'
    entries:
      - Gentle Lullaby. The creature falls asleep and is unconscious for 1 minute. The effect ends if the creature takes damage or if someone takes an action to shake the creature awake.
reactions: []
legendary_actions: []
traits:
  - name: Magic Resistance
    entries:
      - The satyr has advantage on saving throws against spells and other magical effects.
cr: '0.5'
skills:
  perception: 2
  performance: 6
  stealth: 5
alignment: chaotic neutral
passive_perception: 12
```
