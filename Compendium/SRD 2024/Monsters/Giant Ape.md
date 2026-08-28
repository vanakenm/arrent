---
archivist: true
entity_type: monster
slug: srd-2024_monster_giant-ape
name: Giant Ape
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.421Z'
---

```monster
slug: srd-2024_monster_giant-ape
name: Giant Ape
edition: '2024'
source: SRD 5.2
size: huge
type: beast
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 168
  formula: 16d12 + 64
speed:
  walk: 40
  climb: 40
abilities:
  str: 23
  dex: 14
  con: 18
  int: 5
  wis: 12
  cha: 7
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The ape makes two Fist attacks.
  - name: Leap
    entries:
      - The ape jumps up to 30 feet by spending 10 feet of movement.
  - name: Fist
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:3d10+STR` Bludgeoning damage.'
    attacks:
      - name: Fist attack
        type: melee
        bonus: 9
        damage: 3d10+6
        damage_type: bludgeoning
        range:
          reach: 10
  - name: Boulder Toss
    entries:
      - 'The ape hurls a boulder at a point it can see within 90 feet. Dexterity Saving Throw: `dc:17`, each creature in a 5-foot-radius Sphere [Area of Effect]|XPHB|Sphere centered on that point. Failure: `dmg:7d6` Bludgeoning damage. If the target is a Large or smaller creature, it has the Prone condition. Success: Half damage only.'
    recharge:
      type: recharge_on_roll
      param: 6
reactions: []
legendary_actions: []
traits: []
cr: '7'
saves:
  str: 6
  dex: 2
  con: 4
  int: -3
  wis: 1
  cha: -2
skills:
  athletics: 9
  perception: 4
  survival: 4
alignment: unaligned
passive_perception: 14
```
