---
archivist: true
entity_type: monster
slug: srd-2024_monster_young-gold-dragon
name: Young Gold Dragon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.456Z'
---

```monster
slug: srd-2024_monster_young-gold-dragon
name: Young Gold Dragon
edition: '2024'
source: SRD 5.2
size: large
type: dragon
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 178
  formula: 17d10 + 85
speed:
  walk: 40
  fly: 80
  swim: 40
abilities:
  str: 23
  dex: 14
  con: 21
  int: 16
  wis: 13
  cha: 20
senses:
  - darkvision 120 ft.
  - blindsight 30 ft.
languages:
  - Common
  - Draconic
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - fire
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The dragon makes three Rend attacks. It can replace one attack with a use of Weakening Breath.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d10+STR` Slashing damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 10
        damage: 2d10+6
        damage_type: slashing
        range:
          reach: 10
  - name: Fire Breath
    entries:
      - 'Dexterity Saving Throw: `dc:17`, each creature in a 30-foot Cone. Failure: `dmg:10d10` Fire damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Weakening Breath
    entries:
      - 'Strength Saving Throw: `dc:17`, each creature that isn''t currently affected by this breath in a 30-foot Cone. Failure: The target has Disadvantage on Strength-based D20 Test and subtracts 3 (`dice:1d6`) from its damage rolls. It repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically.'
reactions: []
legendary_actions: []
traits:
  - name: Amphibious
    entries:
      - The dragon can breathe air and water.
cr: '10'
saves:
  str: 6
  dex: 6
  con: 5
  int: 3
  wis: 5
  cha: 5
skills:
  insight: 5
  perception: 9
  persuasion: 9
  stealth: 6
alignment: lawful good
passive_perception: 19
```
