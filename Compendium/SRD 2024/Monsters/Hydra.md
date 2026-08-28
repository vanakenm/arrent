---
archivist: true
entity_type: monster
slug: srd-2024_monster_hydra
name: Hydra
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.431Z'
---

```monster
slug: srd-2024_monster_hydra
name: Hydra
edition: '2024'
source: SRD 5.2
size: huge
type: monstrosity
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 184
  formula: 16d12 + 80
speed:
  walk: 40
  swim: 40
abilities:
  str: 20
  dex: 12
  con: 20
  int: 2
  wis: 10
  cha: 7
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The hydra makes as many Bite attacks as it has heads.
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:1d10+STR` Piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 8
        damage: 1d10+5
        damage_type: piercing
        range:
          reach: 10
reactions: []
legendary_actions: []
traits:
  - name: Hold Breath
    entries:
      - The hydra can hold its breath for 1 hour.
  - name: Multiple Heads
    entries:
      - The hydra has five heads. Whenever the hydra takes 25 damage or more on a single turn, one of its heads dies. The hydra dies if all its heads are dead. At the end of each of its turns when it has at least one living head, the hydra grows two heads for each of its heads that died since its last turn, unless it has taken Fire damage since its last turn. The hydra regains 20 Hit Points when it grows new heads.
  - name: Reactive Heads
    entries:
      - For each head the hydra has beyond one, it gets an extra Reaction that can be used only for Opportunity Attacks.
cr: '8'
saves:
  str: 5
  dex: 1
  con: 5
  int: -4
  wis: 0
  cha: -2
skills:
  perception: 6
alignment: unaligned
passive_perception: 16
```
