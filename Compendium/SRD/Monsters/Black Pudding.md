---
archivist: true
entity_type: monster
slug: black-pudding
name: Black Pudding
compendium: SRD
---

```monster
name: Black Pudding
size: Large
type: Ooze
alignment: unaligned
ac:
  - ac: 7
hp:
  average: 85
  formula: 10d10+30
speed:
  walk: 20
  climb: 20
abilities:
  str: 16
  dex: 5
  con: 16
  int: 1
  wis: 6
  cha: 1
senses:
  - blindsight 60 ft. (blind beyond this radius)
passive_perception: 8
damage_immunities:
  - acid
  - cold
  - lightning
  - slashing
condition_immunities:
  - blinded
  - charmed
  - deafened
  - exhaustion
  - frightened
  - prone
cr: '4'
traits:
  - name: Amorphous
    entries:
      - The pudding can move through a space as narrow as 1 inch wide without squeezing.
  - name: Corrosive Form
    entries:
      - A creature that touches the pudding or hits it with a melee attack while within 5 feet of it takes `damage:1d8` acid damage. Any nonmagical weapon made of metal or wood that hits the pudding corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal or wood that hits the pudding is destroyed after dealing damage. The pudding can eat through 2-inch-thick, nonmagical wood or metal in 1 round.
  - name: Spider Climb
    entries:
      - The pudding can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.
actions:
  - name: Pseudopod
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6+STR` bludgeoning damage plus `damage:4d8` acid damage. In addition, nonmagical armor worn by the target is partly dissolved and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10.'
reactions:
  - name: Split
    entries:
      - When a pudding that is Medium or larger is subjected to lightning or slashing damage, it splits into two new puddings if it has at least 10 hit points. Each new pudding has hit points equal to half the original pudding's, rounded down. New puddings are one size smaller than the original pudding.
```
