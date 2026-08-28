---
archivist: true
entity_type: monster
slug: srd-2024_monster_gray-ooze
name: Gray Ooze
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.428Z'
---

```monster
slug: srd-2024_monster_gray-ooze
name: Gray Ooze
edition: '2024'
source: SRD 5.2
size: medium
type: ooze
ac:
  - ac: 9
    from:
      - natural armor
hp:
  average: 22
  formula: 3d8 + 9
speed:
  walk: 10
  climb: 10
abilities:
  str: 12
  dex: 6
  con: 16
  int: 1
  wis: 6
  cha: 2
senses:
  - blindsight 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances:
  - acid
  - cold
  - fire
damage_immunities: []
condition_immunities: []
actions:
  - name: Pseudopod
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d8+STR` Acid damage. Nonmagical armor worn by the target takes a -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10. The penalty can be removed by casting the Mending spell on the armor.'
    attacks:
      - name: Pseudopod attack
        type: melee
        bonus: 3
        damage: 2d8+1
        damage_type: acid
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Amorphous
    entries:
      - The ooze can move through a space as narrow as 1 inch without expending extra movement to do so.
  - name: Corrosive Form
    entries:
      - Nonmagical ammunition is destroyed immediately after hitting the ooze and dealing any damage. Any nonmagical weapon takes a cumulative -1 penalty to attack rolls immediately after dealing damage to the ooze and coming into contact with it. The weapon is destroyed if the penalty reaches -5. The penalty can be removed by casting the Mending spell on the weapon. The ooze can eat through 2-inch-thick, nonmagical metal or wood in 1 round.
cr: '0.5'
saves:
  str: 1
  dex: -2
  con: 3
  int: -5
  wis: -2
  cha: -4
skills:
  stealth: 2
alignment: unaligned
passive_perception: 8
```
