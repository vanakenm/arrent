---
archivist: true
entity_type: monster
slug: hydra
name: Hydra
compendium: SRD
---

```monster
name: Hydra
size: Huge
type: Monstrosity
alignment: unaligned
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 172
  formula: 15d12+75
speed:
  walk: 30
  swim: 30
abilities:
  str: 20
  dex: 12
  con: 20
  int: 2
  wis: 10
  cha: 7
skills:
  perception: 6
senses:
  - darkvision 60 ft.
passive_perception: 16
cr: '8'
traits:
  - name: Hold Breath
    entries:
      - The hydra can hold its breath for 1 hour.
  - name: Multiple Heads
    entries:
      - |-
        The hydra has five heads. While it has more than one head, the hydra has advantage on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious.
        Whenever the hydra takes 25 or more damage in a single turn, one of its heads dies. If all its heads die, the hydra dies.
        At the end of its turn, it grows two heads for each of its heads that died since its last turn, unless it has taken fire damage since its last turn. The hydra regains 10 hit points for each head regrown in this way.
  - name: Reactive Heads
    entries:
      - For each head the hydra has beyond one, it gets an extra reaction that can be used only for opportunity attacks.
  - name: Wakeful
    entries:
      - While the hydra sleeps, at least one of its heads is awake.
actions:
  - name: Multiattack
    entries:
      - The hydra makes as many bite attacks as it has heads.
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:1d10+STR` piercing damage.'
```
