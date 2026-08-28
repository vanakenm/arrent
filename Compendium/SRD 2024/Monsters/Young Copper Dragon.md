---
archivist: true
entity_type: monster
slug: srd-2024_monster_young-copper-dragon
name: Young Copper Dragon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.455Z'
---

```monster
slug: srd-2024_monster_young-copper-dragon
name: Young Copper Dragon
edition: '2024'
source: SRD 5.2
size: large
type: dragon
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 119
  formula: 14d10 + 42
speed:
  walk: 40
  fly: 80
  climb: 40
abilities:
  str: 19
  dex: 12
  con: 17
  int: 16
  wis: 13
  cha: 15
senses:
  - darkvision 120 ft.
  - blindsight 30 ft.
languages:
  - Common
  - Draconic
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - acid
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The dragon makes three Rend attacks. It can replace one attack with a use of Slowing Breath.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d10+STR` Slashing damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 7
        damage: 2d10+4
        damage_type: slashing
        range:
          reach: 10
  - name: Acid Breath
    entries:
      - 'Dexterity Saving Throw: `dc:14`, each creature in a 40-foot-long, 5-foot-wide Line. Failure: `dmg:9d8` Acid damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Slowing Breath
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 30-foot Cone. Failure: The target can''t take Reactions; its Speed is halved; and it can take either an action or a Bonus Action on its turn, not both. This effect lasts until the end of its next turn.'
reactions: []
legendary_actions: []
traits: []
cr: '7'
saves:
  str: 4
  dex: 4
  con: 3
  int: 3
  wis: 4
  cha: 2
skills:
  deception: 5
  perception: 7
  stealth: 4
alignment: chaotic good
passive_perception: 17
```
