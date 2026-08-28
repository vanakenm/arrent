---
archivist: true
entity_type: monster
slug: srd-5e_monster_ochre-jelly
name: Ochre Jelly
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.009Z'
---

```monster
slug: srd-5e_monster_ochre-jelly
name: Ochre Jelly
edition: '2014'
source: SRD 5.1
size: large
type: ooze
ac:
  - ac: 8
hp:
  average: 45
  formula: 6d10+12
speed:
  walk: 10
  climb: 10
abilities:
  str: 15
  dex: 6
  con: 14
  int: 2
  wis: 6
  cha: 1
senses:
  - blindsight 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances:
  - acid
damage_immunities:
  - lightning
  - slashing
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
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` bludgeoning damage plus `dmg:1d6` acid damage.'
    attacks:
      - name: Pseudopod attack
        type: melee
        bonus: 4
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
reactions:
  - name: Split
    entries:
      - When a jelly that is Medium or larger is subjected to lightning or slashing damage, it splits into two new jellies if it has at least 10 hit points. Each new jelly has hit points equal to half the original jelly's, rounded down. New jellies are one size smaller than the original jelly.
legendary_actions: []
traits:
  - name: Amorphous
    entries:
      - The jelly can move through a space as narrow as 1 inch wide without squeezing.
  - name: Spider Climb
    entries:
      - The jelly can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.
cr: '2'
subtype: Oozes
alignment: unaligned
passive_perception: 8
```
