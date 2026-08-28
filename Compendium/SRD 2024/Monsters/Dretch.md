---
archivist: true
entity_type: monster
slug: srd-2024_monster_dretch
name: Dretch
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.416Z'
---

```monster
slug: srd-2024_monster_dretch
name: Dretch
edition: '2024'
source: SRD 5.2
size: small
type: fiend
ac:
  - ac: 11
    from:
      - natural armor
hp:
  average: 18
  formula: 4d6 + 4
speed:
  walk: 20
abilities:
  str: 12
  dex: 11
  con: 12
  int: 5
  wis: 8
  cha: 3
senses:
  - darkvision 60 ft.
languages:
  - Abyssal; telepathy 60 ft. (works only with creatures that understand Abyssal)
damage_vulnerabilities: []
damage_resistances:
  - cold
  - fire
  - lightning
damage_immunities:
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d6+STR` Slashing damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 3
        damage: 1d6+1
        damage_type: slashing
        range:
          reach: 5
  - name: Fetid Cloud
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 10-foot Emanation originating from the dretch. Failure: The target has the Poisoned condition until the end of its next turn. While Poisoned, the creature can take either an action or a Bonus Action on its turn, not both, and it can''t take Reactions.'
    recharge:
      type: per_day
      param: 1
reactions: []
legendary_actions: []
traits: []
cr: '0.25'
saves:
  str: 1
  dex: 0
  con: 1
  int: -3
  wis: -1
  cha: -4
alignment: chaotic evil
passive_perception: 9
```
