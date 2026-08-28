---
archivist: true
entity_type: monster
slug: srd-2024_monster_ice-devil
name: Ice Devil
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.431Z'
---

```monster
slug: srd-2024_monster_ice-devil
name: Ice Devil
edition: '2024'
source: SRD 5.2
size: large
type: fiend
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 228
  formula: 24d10 + 96
speed:
  walk: 40
abilities:
  str: 21
  dex: 14
  con: 18
  int: 18
  wis: 15
  cha: 18
senses:
  - blindsight 120 ft.
languages:
  - Infernal; telepathy 120 ft.
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - cold
  - fire
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The devil makes three Ice Spear attacks. It can replace one attack with a Tail attack.
  - name: Ice Spear
    entries:
      - 'Melee or Ranged Attack Roll: `atk:STR+PB`, reach 5 ft. or range 30/120 ft. `dmg:2d8+STR` Piercing damage plus `dmg:3d6` Cold damage. Until the end of its next turn, the target can''t take a Bonus Action or Reaction, its Speed decreases by 10 feet, and it can move or take one action on its turn, not both. HitomThe spear magically returns to the devil''s hand immediately after a ranged attack.'
    attacks:
      - name: Ice Spear attack
        type: ranged
        bonus: 10
        damage: 2d8+5
        damage_type: piercing
        range:
          reach: 5
          normal: 30
          long: 120
  - name: Tail
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:3d6+STR` Bludgeoning damage plus `dmg:4d8` Cold damage.'
    attacks:
      - name: Tail attack
        type: melee
        bonus: 10
        damage: 3d6+5
        damage_type: bludgeoning
        range:
          reach: 10
  - name: Ice Wall
    entries:
      - |-
        The devil casts Wall of Ice (level 8 version), requiring no spell components and using Intelligence as the spellcasting ability (spell save `dc:INT`).

        - **At Will:**
    recharge:
      type: recharge_on_roll
      param: 6
reactions: []
legendary_actions: []
traits:
  - name: Diabolical Restoration
    entries:
      - If the devil dies outside the Nine Hells, its body disappears in sulfurous smoke, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Nine Hells.
  - name: Magic Resistance
    entries:
      - The devil has Advantage on saving throws against spells and other magical effects.
cr: '14'
saves:
  str: 5
  dex: 7
  con: 9
  int: 4
  wis: 7
  cha: 9
skills:
  insight: 7
  perception: 7
  persuasion: 9
alignment: lawful evil
passive_perception: 17
```
