---
archivist: true
entity_type: monster
slug: srd-5e_monster_gray-ooze
name: Gray Ooze
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.999Z'
---

```monster
slug: srd-5e_monster_gray-ooze
name: Gray Ooze
edition: '2014'
source: SRD 5.1
size: medium
type: ooze
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
senses:
  - blindsight 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances:
  - acid
  - cold
  - fire
damage_immunities: []
condition_immunities:
  - blinded
  - charmed
  - deafened
  - exhaustion
  - frightened
  - prone
actions:
  - name: Pseudopod
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d6+STR` bludgeoning damage plus `dmg:2d6` acid damage, and if the target is wearing nonmagical metal armor, its armor is partly corroded and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10.'
    attacks:
      - name: Pseudopod attack
        type: melee
        bonus: 3
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
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
cr: '0.5'
skills:
  stealth: 2
subtype: Oozes
alignment: unaligned
passive_perception: 8
```
