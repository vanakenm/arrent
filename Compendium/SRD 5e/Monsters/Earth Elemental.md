---
archivist: true
entity_type: monster
slug: srd-5e_monster_earth-elemental
name: Earth Elemental
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.990Z'
---

```monster
slug: srd-5e_monster_earth-elemental
name: Earth Elemental
edition: '2014'
source: SRD 5.1
size: large
type: elemental
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 126
  formula: 12d10+60
speed:
  walk: 30
  burrow: 30
abilities:
  str: 20
  dex: 8
  con: 20
  int: 5
  wis: 10
  cha: 5
senses:
  - darkvision 60 ft.
  - tremorsense 60 ft.
languages:
  - Terran
damage_vulnerabilities:
  - thunder
damage_resistances:
  - bludgeoning
  - piercing
  - slashing
damage_immunities:
  - poison
condition_immunities:
  - exhaustion
  - paralyzed
  - petrified
  - poisoned
  - unconscious
actions:
  - name: Multiattack
    entries:
      - The elemental makes two slam attacks.
  - name: Slam
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:2d8+STR` bludgeoning damage.'
    attacks:
      - name: Slam attack
        type: melee
        bonus: 8
        damage: 2d8
        damage_type: thunder
        range:
          reach: 10
reactions: []
legendary_actions: []
traits:
  - name: Earth Glide
    entries:
      - The elemental can burrow through nonmagical, unworked earth and stone. While doing so, the elemental doesn't disturb the material it moves through.
  - name: Siege Monster
    entries:
      - The elemental deals double damage to objects and structures.
cr: '5'
subtype: Elementals
alignment: neutral
passive_perception: 10
```
