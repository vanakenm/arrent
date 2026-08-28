---
archivist: true
entity_type: monster
slug: srd-2024_monster_animated-rug-of-smothering
name: Animated Rug of Smothering
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.406Z'
---

```monster
slug: srd-2024_monster_animated-rug-of-smothering
name: Animated Rug of Smothering
edition: '2024'
source: SRD 5.2
size: large
type: construct
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 27
  formula: 5d10
speed:
  walk: 10
abilities:
  str: 17
  dex: 14
  con: 10
  int: 1
  wis: 3
  cha: 1
senses:
  - blindsight 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - poison
  - psychic
condition_immunities:
  - charmed
  - deafened
  - exhaustion
  - frightened
  - paralyzed
  - petrified
  - poisoned
actions:
  - name: Smother
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d6+STR` Bludgeoning damage. If the target is a Medium or smaller creature, the rug can give it the Grappled condition (escape `dc:STR`) instead of dealing damage. Until the grapple ends, the target has the Blinded and Restrained conditions, is suffocating, and takes `dmg:2d6+STR` Bludgeoning damage at the start of each of its turns. The rug can smother only one creature at a time. While grappling the target, the rug can''t take this action, the rug halves the damage it takes (round down), and the target takes the same amount of damage.'
    attacks:
      - name: Smother attack
        type: melee
        bonus: 5
        damage: 2d6+3
        damage_type: bludgeoning
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '2'
saves:
  str: 3
  dex: 2
  con: 0
  int: -5
  wis: -4
  cha: -5
alignment: unaligned
passive_perception: 6
```
