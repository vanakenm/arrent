---
archivist: true
entity_type: monster
slug: srd-5e_monster_grick
name: Grick
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.999Z'
---

```monster
slug: srd-5e_monster_grick
name: Grick
edition: '2014'
source: SRD 5.1
size: medium
type: monstrosity
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 27
  formula: 6d8
speed:
  walk: 30
  climb: 30
abilities:
  str: 14
  dex: 14
  con: 11
  int: 3
  wis: 14
  cha: 5
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances:
  - bludgeoning
  - piercing
  - slashing
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The grick makes one attack with its tentacles. If that attack hits, the grick can make one beak attack against the same target.
  - name: Tentacles
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` slashing damage.'
    attacks:
      - name: Tentacles attack
        type: melee
        bonus: 4
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
  - name: Beak
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d6+STR` piercing damage.'
    attacks:
      - name: Beak attack
        type: melee
        bonus: 4
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Stone Camouflage
    entries:
      - The grick has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.
cr: '2'
alignment: neutral
passive_perception: 12
```
