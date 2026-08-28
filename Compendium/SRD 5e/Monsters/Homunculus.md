---
archivist: true
entity_type: monster
slug: srd-5e_monster_homunculus
name: Homunculus
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.001Z'
---

```monster
slug: srd-5e_monster_homunculus
name: Homunculus
edition: '2014'
source: SRD 5.1
size: tiny
type: construct
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 5
  formula: 2d4
speed:
  walk: 20
  fly: 40
abilities:
  str: 4
  dex: 15
  con: 11
  int: 10
  wis: 10
  cha: 7
senses:
  - darkvision 60 ft.
languages:
  - understands the languages of its creator but can't speak
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
      - 'Melee Weapon Attack: `atk:+4`, reach 5 ft., one creature. Hit: `dmg:1` piercing damage, and the target must succeed on a `dc:CON` Constitution saving throw or be poisoned for 1 minute. If the saving throw fails by 5 or more, the target is instead poisoned for 5 (`dice:1d10`) minutes and unconscious while poisoned in this way.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Telepathic Bond
    entries:
      - While the homunculus is on the same plane of existence as its master, it can magically convey what it senses to its master, and the two can communicate telepathically.
cr: '0'
alignment: neutral
passive_perception: 10
```
