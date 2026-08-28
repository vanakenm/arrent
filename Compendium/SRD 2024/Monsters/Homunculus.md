---
archivist: true
entity_type: monster
slug: srd-2024_monster_homunculus
name: Homunculus
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.430Z'
---

```monster
slug: srd-2024_monster_homunculus
name: Homunculus
edition: '2024'
source: SRD 5.2
size: small
type: construct
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 4
  formula: 1d4 + 2
speed:
  walk: 20
  fly: 40
abilities:
  str: 4
  dex: 15
  con: 14
  int: 10
  wis: 10
  cha: 7
senses:
  - darkvision 60 ft.
languages:
  - Understands Common plus one other language but can't speak
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - poison
condition_immunities:
  - charmed
  - poisoned
actions:
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:+4`, reach 5 ft. 1 Piercing damage, and the target is subjected to the following effect. Constitution Saving Throw: `dc:CON`. Failure: The target has the Poisoned condition until the end of the homunculus''s next turn. Failure by 5 or More: The target has the Poisoned condition for 1 minute. While Poisoned, the target has the Unconscious condition, which ends early if the target takes any damage.'
reactions: []
legendary_actions: []
traits:
  - name: Telepathic Bond
    entries:
      - While the homunculus is on the same plane of existence as its master, the two of them can communicate telepathically with each other.
cr: '0'
saves:
  str: -3
  dex: 2
  con: 2
  int: 0
  wis: 2
  cha: 0
alignment: neutral
passive_perception: 10
```
