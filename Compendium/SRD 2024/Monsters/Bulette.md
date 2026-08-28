---
archivist: true
entity_type: monster
slug: srd-2024_monster_bulette
name: Bulette
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.412Z'
---

```monster
slug: srd-2024_monster_bulette
name: Bulette
edition: '2024'
source: SRD 5.2
size: large
type: monstrosity
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 94
  formula: 9d10 + 45
speed:
  walk: 40
  burrow: 40
abilities:
  str: 19
  dex: 11
  con: 21
  int: 2
  wis: 10
  cha: 5
senses:
  - darkvision 60 ft.
  - tremorsense 120 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The bulette makes two Bite attacks.
  - name: Leap
    entries:
      - The bulette jumps up to 30 feet by spending 10 feet of movement.
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d12+STR` Piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 7
        damage: 2d12+4
        damage_type: piercing
        range:
          reach: 5
  - name: Deadly Leap
    entries:
      - 'The bulette spends 5 feet of movement to jump to a space within 15 feet that contains one or more Large or smaller creatures. Dexterity Saving Throw: `dc:15`, each creature in the bulette''s destination space. Failure: `dmg:3d12` Bludgeoning damage, and the target has the Prone condition. Success: Half damage, and the target is pushed 5 feet straight away from the bulette.'
reactions: []
legendary_actions: []
traits: []
cr: '5'
saves:
  str: 4
  dex: 0
  con: 5
  int: -4
  wis: 0
  cha: -3
skills:
  perception: 6
alignment: unaligned
passive_perception: 16
```
