---
archivist: true
entity_type: monster
slug: srd-2024_monster_black-pudding
name: Black Pudding
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.410Z'
---

```monster
slug: srd-2024_monster_black-pudding
name: Black Pudding
edition: '2024'
source: SRD 5.2
size: large
type: ooze
ac:
  - ac: 7
    from:
      - natural armor
hp:
  average: 68
  formula: 8d10 + 24
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
  - blindsight 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - acid
  - cold
  - lightning
condition_immunities:
  - charmed
  - deafened
  - exhaustion
  - frightened
  - grappled
  - prone
  - restrained
actions:
  - name: Dissolving Pseudopod
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:4d6+STR` Acid damage. Nonmagical armor worn by the target takes a -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10. The penalty can be removed by casting the Mending spell on the armor.'
    attacks:
      - name: Dissolving Pseudopod attack
        type: melee
        bonus: 5
        damage: 4d6+3
        damage_type: acid
        range:
          reach: 10
reactions:
  - name: Parry
    entries:
      - _Trigger:_ While the pudding is Large or Medium and has 10+ Hit Points, it becomes Bloodied or is subjected to Lightning or Slashing damage. _Response:_ The pudding splits into two new Black Puddings. Each new pudding is one size smaller than the original pudding and acts on its Initiative. The original pudding’s Hit Points are divided evenly between the new puddings (round down).
legendary_actions: []
traits:
  - name: Amorphous
    entries:
      - The pudding can move through a space as narrow as 1 inch without expending extra movement to do so.
  - name: Corrosive Form
    entries:
      - A creature that hits the pudding with a melee attack roll takes `dmg:1d8` Acid damage. Nonmagical ammunition is destroyed immediately after hitting the pudding and dealing any damage. Any nonmagical weapon takes a cumulative -1 penalty to attack rolls immediately after dealing damage to the pudding and coming into contact with it. The weapon is destroyed if the penalty reaches -5. The penalty can be removed by casting the Mending spell on the weapon. In 1 minute, the pudding can eat through 2 feet of nonmagical wood or metal.
  - name: Spider Climb
    entries:
      - The pudding can climb difficult surfaces, including along ceilings, without needing to make an ability check.
cr: '4'
saves:
  str: 3
  dex: -3
  con: 3
  int: -5
  wis: -2
  cha: -5
alignment: unaligned
passive_perception: 8
```
