---
archivist: true
entity_type: monster
slug: srd-5e_monster_drow
name: Drow
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.988Z'
---

```monster
slug: srd-5e_monster_drow
name: Drow
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 15
    from:
      - chain shirt
hp:
  average: 13
  formula: 3d8
speed:
  walk: 30
abilities:
  str: 10
  dex: 14
  con: 10
  int: 11
  wis: 11
  cha: 12
senses:
  - darkvision 120 ft.
languages:
  - Elvish
  - Undercommon
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Shortsword
    entries:
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one target. Hit: `dmg:1d6+DEX` piercing damage.'
    attacks:
      - name: Shortsword attack
        type: melee
        bonus: 4
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
  - name: Hand Crossbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX+PB`, range 30/120 ft., one target. Hit: `dmg:1d6+DEX` piercing damage, and the target must succeed on a `dc:13` Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake.'
    attacks:
      - name: Hand Crossbow attack
        type: ranged
        bonus: 4
        damage_type: thunder
        range:
          normal: 30
          long: 120
reactions: []
legendary_actions: []
traits:
  - name: Fey Ancestry
    entries:
      - The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep.
  - name: Innate Spellcasting
    entries:
      - |-
        The drow's spellcasting ability is Charisma (spell save `dc:CHA`). It can innately cast the following spells, requiring no material components:
        At will: dancing lights
        1/day each: darkness, faerie fire
  - name: Sunlight Sensitivity
    entries:
      - While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.
cr: '0.25'
skills:
  perception: 2
  stealth: 4
alignment: neutral evil
passive_perception: 12
```
