---
archivist: true
entity_type: monster
slug: srd-2024_monster_barbed-devil
name: Barbed Devil
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.409Z'
---

```monster
slug: srd-2024_monster_barbed-devil
name: Barbed Devil
edition: '2024'
source: SRD 5.2
size: medium
type: fiend
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 110
  formula: 13d8 + 52
speed:
  walk: 30
  climb: 30
abilities:
  str: 16
  dex: 17
  con: 18
  int: 12
  wis: 14
  cha: 14
senses:
  - darkvision 120 ft.
languages:
  - Infernal; telepathy 120 ft.
damage_vulnerabilities: []
damage_resistances:
  - cold
damage_immunities:
  - fire
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The devil makes one Claws attack and one Tail attack, or it makes two Hurl Flame attacks.
  - name: Claws
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d6+STR` Piercing damage. If the target is a Large or smaller creature, it has the Grappled condition (escape `dc:CHA`) from both claws.'
    attacks:
      - name: Claws attack
        type: melee
        bonus: 6
        damage: 2d6+3
        damage_type: piercing
        range:
          reach: 5
  - name: Tail
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d10+STR` Slashing damage.'
    attacks:
      - name: Tail attack
        type: melee
        bonus: 6
        damage: 2d10+3
        damage_type: slashing
        range:
          reach: 10
  - name: Hurl Flame
    entries:
      - 'Ranged Attack Roll: `atk:+5`, range 150 ft. `dmg:5d6` Fire damage. If the target is a flammable object that isn''t being worn or carried, it starts burning.'
    attacks:
      - name: Hurl Flame attack
        type: ranged
        bonus: 5
        damage: 5d6
        damage_type: fire
        range:
          normal: 150
reactions: []
legendary_actions: []
traits:
  - name: Barbed Hide
    entries:
      - At the start of each of its turns, the devil deals `dmg:1d10` Piercing damage to any creature it is grappling or any creature grappling it.
  - name: Diabolical Restoration
    entries:
      - If the devil dies outside the Nine Hells, its body disappears in sulfurous smoke, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Nine Hells.
  - name: Magic Resistance
    entries:
      - The devil has Advantage on saving throws against spells and other magical effects.
cr: '5'
saves:
  str: 6
  dex: 3
  con: 7
  int: 1
  wis: 5
  cha: 5
skills:
  deception: 5
  insight: 5
  perception: 8
alignment: lawful evil
passive_perception: 18
```
