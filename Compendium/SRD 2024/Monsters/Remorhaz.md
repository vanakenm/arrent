---
archivist: true
entity_type: monster
slug: srd-2024_monster_remorhaz
name: Remorhaz
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.441Z'
---

```monster
slug: srd-2024_monster_remorhaz
name: Remorhaz
edition: '2024'
source: SRD 5.2
size: huge
type: monstrosity
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 195
  formula: 17d12 + 85
speed:
  walk: 40
  burrow: 30
abilities:
  str: 24
  dex: 13
  con: 21
  int: 4
  wis: 10
  cha: 5
senses:
  - darkvision 60 ft.
  - tremorsense 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - cold
  - fire
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d10+STR` Piercing damage plus `dmg:4d6` Fire damage. If the target is a Large or smaller creature, it has the Grappled condition (escape `dc:CON`), and it has the Restrained condition until the grapple ends.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 11
        damage: 2d10+7
        damage_type: piercing
        range:
          reach: 10
  - name: Swallow
    entries:
      - 'Strength Saving Throw: `dc:STR`, one Large or smaller creature Grappled by the remorhaz (it can have up to two creatures swallowed at a time). Failure: The target is swallowed by the remorhaz, and the Grappled condition ends. A swallowed creature has the Blinded and Restrained conditions, it has Cover|XPHB|Total Cover against attacks and other effects outside the remorhaz, and it takes `dmg:3d6` Acid damage plus `dmg:3d6` Fire damage at the start of each of the remorhaz''s turns. If the remorhaz takes 30 damage or more on a single turn from a creature inside it, the remorhaz must succeed on a `dc:15` Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, each of which falls in a space within 5 feet of the remorhaz and has the Prone condition. If the remorhaz dies, any swallowed creature no longer has the Restrained condition and can escape from the corpse by using 15 feet of movement, exiting Prone.'
reactions: []
legendary_actions: []
traits:
  - name: Heat Aura
    entries:
      - At the end of each of the remorhaz's turns, each creature in a 5-foot Emanation originating from the remorhaz takes `dmg:3d10` Fire damage.
cr: '11'
saves:
  str: 7
  dex: 1
  con: 5
  int: -3
  wis: 0
  cha: -3
alignment: unaligned
passive_perception: 10
```
