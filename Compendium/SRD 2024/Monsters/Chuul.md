---
archivist: true
entity_type: monster
slug: srd-2024_monster_chuul
name: Chuul
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.413Z'
---

```monster
slug: srd-2024_monster_chuul
name: Chuul
edition: '2024'
source: SRD 5.2
size: large
type: aberration
ac:
  - ac: 16
    from:
      - natural armor
hp:
  average: 76
  formula: 9d10 + 27
speed:
  walk: 30
  swim: 30
abilities:
  str: 19
  dex: 10
  con: 16
  int: 5
  wis: 11
  cha: 5
senses:
  - darkvision 60 ft.
languages:
  - Understands Deep Speech but can't speak
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The chuul makes two Pincer attacks and uses Paralyzing Tentacles.
  - name: Pincer
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:1d10+STR` Bludgeoning damage. If the target is a Large or smaller creature, it has the Grappled condition (escape `dc:STR`) from one of two pincers.'
    attacks:
      - name: Pincer attack
        type: melee
        bonus: 6
        damage: 1d10+4
        damage_type: bludgeoning
        range:
          reach: 10
  - name: Paralyzing Tentacles
    entries:
      - 'Constitution Saving Throw: `dc:CON`, one creature Grappled by the chuul. Failure: The target has the Poisoned condition and repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically. While Poisoned, the target has the Paralyzed condition.'
reactions: []
legendary_actions: []
traits:
  - name: Amphibious
    entries:
      - The chuul can breathe air and water.
  - name: Sense Magic
    entries:
      - The chuul senses magic within 120 feet of itself. This trait otherwise works like the Detect Magic spell but isn't itself magical.
cr: '4'
saves:
  str: 4
  dex: 0
  con: 3
  int: -3
  wis: 0
  cha: -3
skills:
  perception: 4
alignment: chaotic evil
passive_perception: 14
```
