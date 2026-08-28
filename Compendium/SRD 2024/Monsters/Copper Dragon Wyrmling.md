---
archivist: true
entity_type: monster
slug: srd-2024_monster_copper-dragon-wyrmling
name: Copper Dragon Wyrmling
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.414Z'
---

```monster
slug: srd-2024_monster_copper-dragon-wyrmling
name: Copper Dragon Wyrmling
edition: '2024'
source: SRD 5.2
size: medium
type: dragon
ac:
  - ac: 16
    from:
      - natural armor
hp:
  average: 22
  formula: 4d8 + 4
speed:
  walk: 30
  fly: 60
  climb: 30
abilities:
  str: 15
  dex: 12
  con: 13
  int: 14
  wis: 11
  cha: 13
senses:
  - darkvision 60 ft.
  - blindsight 10 ft.
languages:
  - Draconic
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - acid
condition_immunities: []
actions:
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d10+STR` Slashing damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 4
        damage: 1d10+2
        damage_type: slashing
        range:
          reach: 5
  - name: Acid Breath
    entries:
      - 'Dexterity Saving Throw: `dc:DEX`, each creature in a 20-foot-long, 5-foot-wide Line. Failure: `dmg:4d8` Acid damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Slowing Breath
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 15-foot Cone. Failure: The target can''t take Reactions; its Speed is halved; and it can take either an action or a Bonus Action on its turn, not both. This effect lasts until the end of its next turn.'
reactions: []
legendary_actions: []
traits: []
cr: '1'
saves:
  str: 2
  dex: 3
  con: 1
  int: 2
  wis: 2
  cha: 1
skills:
  perception: 4
  stealth: 3
alignment: chaotic good
passive_perception: 14
```
