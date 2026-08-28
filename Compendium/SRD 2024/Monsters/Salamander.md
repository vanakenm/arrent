---
archivist: true
entity_type: monster
slug: srd-2024_monster_salamander
name: Salamander
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.442Z'
---

```monster
slug: srd-2024_monster_salamander
name: Salamander
edition: '2024'
source: SRD 5.2
size: large
type: elemental
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 90
  formula: 12d10 + 24
speed:
  walk: 30
  climb: 30
abilities:
  str: 18
  dex: 14
  con: 15
  int: 11
  wis: 10
  cha: 12
senses:
  - darkvision 60 ft.
languages:
  - Primordial (Ignan)
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - fire
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The salamander makes two Flame Spear attacks. It can replace one attack with a use of Constrict.
  - name: Flame Spear
    entries:
      - 'Melee or Ranged Attack Roll: `atk:STR+PB`, reach 5 ft. or range 20/60 ft. `dmg:2d8+STR` Piercing damage plus `dmg:2d6` Fire damage. HitomThe spear magically returns to the salamander''s hand immediately after a ranged attack.'
    attacks:
      - name: Flame Spear attack
        type: ranged
        bonus: 7
        damage: 2d8+4
        damage_type: piercing
        range:
          reach: 5
          normal: 20
          long: 60
  - name: Constrict
    entries:
      - 'Strength Saving Throw: `dc:STR`, one Large or smaller creature the salamander can see within 10 feet. Failure: `dmg:2d6+STR` Bludgeoning damage plus `dmg:2d6` Fire damage. The target has the Grappled condition (escape `dc:14`), and it has the Restrained condition until the grapple ends.'
reactions: []
legendary_actions: []
traits:
  - name: Fire Aura
    entries:
      - At the end of each of the salamander's turns, each creature of the salamander's choice in a 5-foot Emanation originating from the salamander takes `dmg:2d6` Fire damage.
cr: '5'
saves:
  str: 4
  dex: 2
  con: 2
  int: 0
  wis: 0
  cha: 1
alignment: neutral evil
passive_perception: 10
```
