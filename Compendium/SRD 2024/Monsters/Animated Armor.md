---
archivist: true
entity_type: monster
slug: srd-2024_monster_animated-armor
name: Animated Armor
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.406Z'
---

```monster
slug: srd-2024_monster_animated-armor
name: Animated Armor
edition: '2024'
source: SRD 5.2
size: medium
type: construct
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 33
  formula: 6d8 + 6
speed:
  walk: 25
abilities:
  str: 14
  dex: 11
  con: 13
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
  - name: Multiattack
    entries:
      - The armor makes two Slam attacks.
  - name: Slam
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d6+STR` Bludgeoning damage.'
    attacks:
      - name: Slam attack
        type: melee
        bonus: 4
        damage: 1d6+2
        damage_type: bludgeoning
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '1'
saves:
  str: 2
  dex: 0
  con: 1
  int: -5
  wis: -4
  cha: -5
alignment: unaligned
passive_perception: 6
```
