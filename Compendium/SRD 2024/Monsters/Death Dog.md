---
archivist: true
entity_type: monster
slug: srd-2024_monster_death-dog
name: Death Dog
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.415Z'
---

```monster
slug: srd-2024_monster_death-dog
name: Death Dog
edition: '2024'
source: SRD 5.2
size: medium
type: monstrosity
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 39
  formula: 6d8 + 12
speed:
  walk: 40
abilities:
  str: 15
  dex: 14
  con: 14
  int: 3
  wis: 13
  cha: 6
senses:
  - darkvision 120 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The death dog makes two Bite attacks.
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d4+STR` Piercing damage. If the target is a creature, it is subjected to the following effect. Constitution Saving Throw: `dc:CON`. First Failure The target has the Poisoned condition. While Poisoned, the target''s Hit Point maximum doesn''t return to normal when finishing a Long Rest, and it repeats the save every 24 hours that elapse, ending the effect on itself on a success. Subsequent Failures: The Poisoned target''s Hit Point maximum decreases by 5 (`dice:1d10`).'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 1d4+2
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '1'
saves:
  str: 2
  dex: 2
  con: 2
  int: -4
  wis: 1
  cha: -2
skills:
  perception: 5
  stealth: 4
alignment: neutral evil
passive_perception: 15
```
