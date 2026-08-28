---
archivist: true
entity_type: monster
slug: srd-2024_monster_xorn
name: Xorn
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.455Z'
---

```monster
slug: srd-2024_monster_xorn
name: Xorn
edition: '2024'
source: SRD 5.2
size: medium
type: elemental
ac:
  - ac: 19
    from:
      - natural armor
hp:
  average: 84
  formula: 8d8 + 48
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
  - Primordial (Terran)
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - poison
condition_immunities:
  - paralyzed
  - petrified
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The xorn makes one Bite attack and three Claw attacks.
  - name: Charge
    entries:
      - The xorn moves up to its Speed or Burrow Speed straight toward an enemy it can sense.
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:4d6+STR` Piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 6
        damage: 4d6+3
        damage_type: piercing
        range:
          reach: 5
  - name: Claw
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d10+STR` Slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 6
        damage: 1d10+3
        damage_type: slashing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Earth Glide
    entries:
      - The xorn can burrow through nonmagical, unworked earth and stone. While doing so, the xorn doesn't disturb the material it moves through.
  - name: Treasure Sense
    entries:
      - The xorn can pinpoint the location of precious metals and stones within 60 feet of itself.
cr: '5'
saves:
  str: 3
  dex: 0
  con: 6
  int: 0
  wis: 0
  cha: 0
skills:
  perception: 6
  stealth: 6
alignment: neutral
passive_perception: 16
```
