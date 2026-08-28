---
archivist: true
entity_type: monster
slug: srd-2024_monster_horned-devil
name: Horned Devil
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.430Z'
---

```monster
slug: srd-2024_monster_horned-devil
name: Horned Devil
edition: '2024'
source: SRD 5.2
size: large
type: fiend
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 199
  formula: 19d10 + 95
speed:
  walk: 30
  fly: 60
abilities:
  str: 22
  dex: 17
  con: 21
  int: 12
  wis: 16
  cha: 18
senses:
  - darkvision 150 ft.
languages:
  - Infernal; telepathy 120 ft.
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - fire
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The devil makes three attacks, using Searing Fork or Hurl Flame in any combination. It can replace one attack with a use of Infernal Tail.
  - name: Searing Fork
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d8+STR` Piercing damage plus `dmg:2d8` Fire damage.'
    attacks:
      - name: Searing Fork attack
        type: melee
        bonus: 10
        damage: 2d8+6
        damage_type: piercing
        range:
          reach: 10
  - name: Hurl Flame
    entries:
      - 'Ranged Attack Roll: `atk:CHA+PB`, range 150 ft. `dmg:5d8+CHA` Fire damage. If the target is a flammable object that isn''t being worn or carried, it starts burning.'
    attacks:
      - name: Hurl Flame attack
        type: ranged
        bonus: 8
        damage: 5d8+4
        damage_type: fire
        range:
          normal: 150
  - name: Infernal Tail
    entries:
      - 'Dexterity Saving Throw: `dc:17`, one creature the devil can see within 10 feet. Failure: `dmg:1d8+STR` Necrotic damage, and the target receives an infernal wound if it doesn''t have one. While wounded, the target loses 10 (`dice:3d6`) Hit Points at the start of each of its turns. The wound closes after 1 minute, after a spell restores Hit Points to the target, or after the target or a creature within 5 feet of it takes an action to stanch the wound, doing so by succeeding on a `dc:17` Wisdom (Medicine) check.'
reactions: []
legendary_actions: []
traits:
  - name: Diabolical Restoration
    entries:
      - If the devil dies outside the Nine Hells, its body disappears in sulfurous smoke, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Nine Hells.
  - name: Magic Resistance
    entries:
      - The devil has Advantage on saving throws against spells and other magical effects.
cr: '11'
saves:
  str: 10
  dex: 7
  con: 5
  int: 1
  wis: 7
  cha: 8
alignment: lawful evil
passive_perception: 13
```
