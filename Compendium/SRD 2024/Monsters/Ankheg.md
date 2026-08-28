---
archivist: true
entity_type: monster
slug: srd-2024_monster_ankheg
name: Ankheg
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.407Z'
---

```monster
slug: srd-2024_monster_ankheg
name: Ankheg
edition: '2024'
source: SRD 5.2
size: large
type: monstrosity
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 45
  formula: 6d10 + 12
speed:
  walk: 30
  burrow: 10
abilities:
  str: 17
  dex: 11
  con: 14
  int: 1
  wis: 13
  cha: 6
senses:
  - darkvision 60 ft.
  - tremorsense 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Attack Roll: +5 (with Advantage if the target is Grappled by the ankheg), reach 5 ft. `dmg:2d6+STR` Slashing damage plus `dmg:1d6` Acid damage. If the target is a Large or smaller creature, it has the Grappled condition (escape `dc:STR`).'
  - name: Acid Spray
    entries:
      - 'Dexterity Saving Throw: `dc:12`, each creature in a 30-foot-long, 5-foot-wide Line. Failure: `dmg:4d6` Acid damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 6
reactions: []
legendary_actions: []
traits:
  - name: Tunneler
    entries:
      - The ankheg can burrow through solid rock at half its Burrow Speed and leaves a 10-foot-diameter tunnel in its wake.
cr: '2'
saves:
  str: 3
  dex: 0
  con: 2
  int: -5
  wis: 1
  cha: -2
alignment: unaligned
passive_perception: 11
```
