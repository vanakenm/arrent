---
archivist: true
entity_type: monster
slug: gray-ooze
name: Gray Ooze
compendium: SRD
---

```monster
name: Gray Ooze
size: Medium
type: Ooze
alignment: unaligned
ac:
  - ac: 8
hp:
  average: 22
  formula: 3d8+9
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
skills:
  stealth: 2
senses:
  - blindsight 60 ft. (blind beyond this radius)
passive_perception: 8
damage_resistances:
  - acid
  - cold
  - fire
condition_immunities:
  - blinded
  - charmed
  - deafened
  - exhaustion
  - frightened
  - prone
cr: 1/2
traits:
  - name: Amorphous
    entries:
      - The ooze can move through a space as narrow as 1 inch wide without squeezing.
  - name: Corrode Metal
    entries:
      - |-
        Any nonmagical weapon made of metal that hits the ooze corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal that hits the ooze is destroyed after dealing damage.
        The ooze can eat through 2-inch-thick, nonmagical metal in 1 round.
  - name: False Appearance
    entries:
      - While the ooze remains motionless, it is indistinguishable from an oily pool or wet rock.
actions:
  - name: Pseudopod
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6+STR` bludgeoning damage plus `damage:2d6` acid damage, and if the target is wearing nonmagical metal armor, its armor is partly corroded and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10.'
```
