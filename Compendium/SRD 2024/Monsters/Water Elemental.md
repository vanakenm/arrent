---
archivist: true
entity_type: monster
slug: srd-2024_monster_water-elemental
name: Water Elemental
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.452Z'
---

```monster
slug: srd-2024_monster_water-elemental
name: Water Elemental
edition: '2024'
source: SRD 5.2
size: large
type: elemental
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 114
  formula: 12d10 + 48
speed:
  walk: 30
  swim: 90
abilities:
  str: 18
  dex: 14
  con: 18
  int: 5
  wis: 10
  cha: 8
senses:
  - darkvision 60 ft.
languages:
  - Primordial (Aquan)
damage_vulnerabilities: []
damage_resistances:
  - acid
  - fire
damage_immunities:
  - poison
condition_immunities:
  - exhaustion
  - grappled
  - paralyzed
  - petrified
  - poisoned
  - prone
  - restrained
  - unconscious
actions:
  - name: Multiattack
    entries:
      - The elemental makes two Slam attacks.
  - name: Slam
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d8+STR` Bludgeoning damage. If the target is a Medium or smaller creature, it has the Prone condition.'
    attacks:
      - name: Slam attack
        type: melee
        bonus: 7
        damage: 2d8+4
        damage_type: bludgeoning
        range:
          reach: 5
  - name: Whelm
    entries:
      - 'Strength Saving Throw: `dc:STR`, each creature in the elemental''s space. Failure: `dmg:4d8+STR` Bludgeoning damage. If the target is a Large or smaller creature, it has the Grappled condition (escape `dc:14`). Until the grapple ends, the target has the Restrained condition, is suffocating unless it can breathe water, and takes `dmg:2d8` Bludgeoning damage at the start of each of the elemental''s turns. The elemental can grapple one Large creature or up to two Medium or smaller creatures at a time with Whelm. As an action, a creature within 5 feet of the elemental can pull a creature out of it by succeeding on a `dc:14` Strength (Athletics) check. Success: Half damage only.'
    recharge:
      type: recharge_on_roll
      param: 4
reactions: []
legendary_actions: []
traits:
  - name: Freeze
    entries:
      - If the elemental takes Cold damage, its Speed decreases by 20 feet until the end of its next turn.
  - name: Water Form
    entries:
      - The elemental can enter an enemy's space and stop there. It can move through a space as narrow as 1 inch without expending extra movement to do so.
cr: '5'
saves:
  str: 4
  dex: 2
  con: 4
  int: -3
  wis: 0
  cha: -1
alignment: neutral
passive_perception: 10
```
