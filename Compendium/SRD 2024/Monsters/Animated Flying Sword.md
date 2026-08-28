---
archivist: true
entity_type: monster
slug: srd-2024_monster_animated-flying-sword
name: Animated Flying Sword
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.406Z'
---

```monster
slug: srd-2024_monster_animated-flying-sword
name: Animated Flying Sword
edition: '2024'
source: SRD 5.2
size: small
type: construct
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 14
  formula: 4d6
speed:
  walk: 5
  fly: 50
abilities:
  str: 12
  dex: 15
  con: 11
  int: 1
  wis: 5
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
  - name: Slash
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d8+DEX` Slashing damage.'
    attacks:
      - name: Slash attack
        type: melee
        bonus: 4
        damage: 1d8+2
        damage_type: slashing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '0.25'
saves:
  str: 1
  dex: 4
  con: 0
  int: -5
  wis: -3
  cha: -5
alignment: unaligned
passive_perception: 7
```
