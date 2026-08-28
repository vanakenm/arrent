---
archivist: true
entity_type: monster
slug: srd-2024_monster_lion
name: Lion
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.433Z'
---

```monster
slug: srd-2024_monster_lion
name: Lion
edition: '2024'
source: SRD 5.2
size: large
type: beast
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 22
  formula: 4d10
speed:
  walk: 50
abilities:
  str: 17
  dex: 15
  con: 11
  int: 3
  wis: 12
  cha: 8
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The lion makes two Rend attacks. It can replace one attack with a use of Roar.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d8+STR` Slashing damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 5
        damage: 1d8+3
        damage_type: slashing
        range:
          reach: 5
  - name: Roar
    entries:
      - 'Wisdom Saving Throw: `dc:WIS`, one creature within 15 feet. Failure: The target has the Frightened condition until the start of the lion''s next turn.'
reactions: []
legendary_actions: []
traits:
  - name: Pack Tactics
    entries:
      - The lion has Advantage on an attack roll against a creature if at least one of the lion's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition.
  - name: Running Leap
    entries:
      - With a 10-foot running start, the lion can Long Jump up to 25 feet.
cr: '1'
saves:
  str: 3
  dex: 2
  con: 0
  int: -4
  wis: 1
  cha: -1
skills:
  perception: 3
  stealth: 4
alignment: unaligned
passive_perception: 13
```
