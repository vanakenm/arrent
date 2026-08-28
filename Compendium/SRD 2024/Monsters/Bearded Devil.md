---
archivist: true
entity_type: monster
slug: srd-2024_monster_bearded-devil
name: Bearded Devil
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.409Z'
---

```monster
slug: srd-2024_monster_bearded-devil
name: Bearded Devil
edition: '2024'
source: SRD 5.2
size: medium
type: fiend
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 58
  formula: 9d8 + 18
speed:
  walk: 30
abilities:
  str: 16
  dex: 15
  con: 15
  int: 9
  wis: 11
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
  - frightened
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The devil makes one Beard attack and one Infernal Glaive attack.
  - name: Beard
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d8+STR` Piercing damage, and the target has the Poisoned condition until the start of the devil''s next turn. Until this poison ends, the target can''t regain Hit Points.'
    attacks:
      - name: Beard attack
        type: melee
        bonus: 5
        damage: 1d8+3
        damage_type: piercing
        range:
          reach: 5
  - name: Infernal Glaive
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:1d10+STR` Slashing damage. If the target is a creature and doesn''t already have an infernal wound, it is subjected to the following effect. Constitution Saving Throw: `dc:CON`. Failure: The target receives an infernal wound. While wounded, the target loses 5 (`dice:1d10`) Hit Points at the start of each of its turns. The wound closes after 1 minute, after a spell restores Hit Points to the target, or after the target or a creature within 5 feet of it takes an action to stanch the wound, doing so by succeeding on a `dc:12` Wisdom (Medicine) check.'
    attacks:
      - name: Infernal Glaive attack
        type: melee
        bonus: 5
        damage: 1d10+3
        damage_type: slashing
        range:
          reach: 10
reactions: []
legendary_actions: []
traits:
  - name: Magic Resistance
    entries:
      - The devil has Advantage on saving throws against spells and other magical effects.
cr: '3'
saves:
  str: 5
  dex: 2
  con: 4
  int: -1
  wis: 0
  cha: 4
alignment: lawful evil
passive_perception: 10
```
