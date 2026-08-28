---
archivist: true
entity_type: monster
slug: srd-5e_monster_acolyte
name: Acolyte
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.970Z'
---

```monster
slug: srd-5e_monster_acolyte
name: Acolyte
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 10
hp:
  average: 9
  formula: 2d8
speed:
  walk: 30
abilities:
  str: 10
  dex: 10
  con: 10
  int: 10
  wis: 14
  cha: 11
senses: []
languages:
  - any one language (usually Common)
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Club
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d4` bludgeoning damage.'
    attacks:
      - name: Club attack
        type: melee
        bonus: 2
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Spellcasting
    entries:
      - |-
        The acolyte is a 1st-level spellcaster. Its spellcasting ability is Wisdom (spell save `dc:WIS`, `atk:+4` with spell attacks). The acolyte has following cleric spells prepared:

        * Cantrips (at will): light, sacred flame, thaumaturgy
        * 1st level (3 slots): bless, cure wounds, sanctuary
cr: '0.25'
skills:
  medicine: 4
  religion: 2
alignment: any alignment
passive_perception: 12
```
