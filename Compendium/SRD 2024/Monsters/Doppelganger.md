---
archivist: true
entity_type: monster
slug: srd-2024_monster_doppelganger
name: Doppelganger
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.416Z'
---

```monster
slug: srd-2024_monster_doppelganger
name: Doppelganger
edition: '2024'
source: SRD 5.2
size: medium
type: monstrosity
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 52
  formula: 8d8 + 16
speed:
  walk: 30
abilities:
  str: 11
  dex: 18
  con: 14
  int: 11
  wis: 12
  cha: 14
senses:
  - darkvision 60 ft.
languages:
  - Common plus three other languages
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The doppelganger makes two Slam attacks and uses Unsettling Visage if available.
  - name: Shape-Shift
    entries:
      - The doppelganger shape-shifts into a Medium or Small Humanoid, or it returns to its true form. Its game statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed.
  - name: Slam
    entries:
      - 'Melee Attack Roll: +6 (with Advantage during the first round of each combat), reach 5 ft. `dmg:2d6+DEX` Bludgeoning damage.'
  - name: Unsettling Visage
    entries:
      - 'Wisdom Saving Throw: `dc:12`, each creature in a 15-foot Emanation originating from the doppelganger that can see the doppelganger. Failure: The target has the Frightened condition and repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically.'
    recharge:
      type: recharge_on_roll
      param: 6
  - name: Read Thoughts
    entries:
      - |-
        The doppelganger casts Detect Thoughts, requiring no spell components and using Charisma as the spellcasting ability (spell save `dc:CHA`).

        - **At Will:** Detect Thoughts
reactions: []
legendary_actions: []
traits: []
cr: '3'
saves:
  str: 0
  dex: 4
  con: 2
  int: 0
  wis: 1
  cha: 2
skills:
  deception: 6
  insight: 3
alignment: neutral
passive_perception: 11
```
