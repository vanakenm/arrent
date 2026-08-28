---
archivist: true
entity_type: monster
slug: srd-2024_monster_lemure
name: Lemure
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.433Z'
---

```monster
slug: srd-2024_monster_lemure
name: Lemure
edition: '2024'
source: SRD 5.2
size: medium
type: fiend
ac:
  - ac: 9
    from:
      - natural armor
hp:
  average: 9
  formula: 2d8
speed:
  walk: 20
abilities:
  str: 10
  dex: 5
  con: 11
  int: 1
  wis: 11
  cha: 3
senses:
  - darkvision 120 ft.
languages:
  - Understands Infernal but can't speak
damage_vulnerabilities: []
damage_resistances:
  - cold
damage_immunities:
  - fire
  - poison
condition_immunities:
  - charmed
  - frightened
  - poisoned
actions:
  - name: Vile Slime
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d4` Poison damage.'
    attacks:
      - name: Vile Slime attack
        type: melee
        bonus: 2
        damage: 1d4
        damage_type: poison
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Hellish Restoration
    entries:
      - If the lemure dies in the Nine Hells, it revives with all its Hit Points in `dice:1d10` days unless it is killed by a creature under the effects of a Bless spell or its remains are sprinkled with Holy Water.
cr: '0'
saves:
  str: 0
  dex: -3
  con: 0
  int: -5
  wis: 0
  cha: -4
alignment: lawful evil
passive_perception: 10
```
