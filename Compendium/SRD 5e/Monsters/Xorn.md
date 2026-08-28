---
archivist: true
entity_type: monster
slug: srd-5e_monster_xorn
name: Xorn
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.026Z'
---

```monster
slug: srd-5e_monster_xorn
name: Xorn
edition: '2014'
source: SRD 5.1
size: medium
type: elemental
ac:
  - ac: 19
    from:
      - natural armor
hp:
  average: 73
  formula: 7d8+42
speed:
  walk: 20
  burrow: 20
abilities:
  str: 17
  dex: 10
  con: 22
  int: 11
  wis: 10
  cha: 11
senses:
  - darkvision 60 ft.
  - tremorsense 60 ft.
languages:
  - Terran
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
      - The xorn makes three claw attacks and one bite attack.
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:3d6+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 6
        damage: 3d6
        damage_type: thunder
        range:
          reach: 5
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d6+STR` slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 6
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Earth Glide
    entries:
      - The xorn can burrow through nonmagical, unworked earth and stone. While doing so, the xorn doesn't disturb the material it moves through.
  - name: Stone Camouflage
    entries:
      - The xorn has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.
  - name: Treasure Sense
    entries:
      - The xorn can pinpoint, by scent, the location of precious metals and stones, such as coins and gems, within 60 ft. of it.
cr: '5'
skills:
  perception: 6
  stealth: 3
alignment: neutral
passive_perception: 16
```
