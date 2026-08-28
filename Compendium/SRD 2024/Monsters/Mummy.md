---
archivist: true
entity_type: monster
slug: srd-2024_monster_mummy
name: Mummy
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.435Z'
---

```monster
slug: srd-2024_monster_mummy
name: Mummy
edition: '2024'
source: SRD 5.2
size: small
type: undead
ac:
  - ac: 11
    from:
      - natural armor
hp:
  average: 58
  formula: 9d8 + 18
speed:
  walk: 20
abilities:
  str: 16
  dex: 8
  con: 15
  int: 6
  wis: 12
  cha: 12
senses:
  - darkvision 60 ft.
languages:
  - Common plus two other languages
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - necrotic
  - poison
condition_immunities:
  - charmed
  - exhaustion
  - frightened
  - paralyzed
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The mummy makes two Rotting Fist attacks and uses Dreadful Glare.
  - name: Rotting Fist
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d10+STR` Bludgeoning damage plus `dmg:3d6` Necrotic damage. If the target is a creature, it is cursed. While cursed, the target can''t regain Hit Points, its Hit Point maximum doesn''t return to normal when finishing a Long Rest, and its Hit Point maximum decreases by 10 (`dice:3d6`) every 24 hours that elapse. A creature dies and turns to dust if reduced to 0 Hit Points by this attack.'
    attacks:
      - name: Rotting Fist attack
        type: melee
        bonus: 5
        damage: 1d10+3
        damage_type: bludgeoning
        range:
          reach: 5
  - name: Dreadful Glare
    entries:
      - 'Wisdom Saving Throw: `dc:WIS`, one creature the mummy can see within 60 feet. Failure: The target has the Frightened condition until the end of the mummy''s next turn. Success: The target is immune to this mummy''s Dreadful Glare for 24 hours.'
reactions: []
legendary_actions: []
traits: []
cr: '3'
saves:
  str: 3
  dex: -1
  con: 2
  int: -2
  wis: 3
  cha: 1
alignment: lawful evil
passive_perception: 11
```
