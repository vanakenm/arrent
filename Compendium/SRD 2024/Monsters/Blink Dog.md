---
archivist: true
entity_type: monster
slug: srd-2024_monster_blink-dog
name: Blink Dog
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.411Z'
---

```monster
slug: srd-2024_monster_blink-dog
name: Blink Dog
edition: '2024'
source: SRD 5.2
size: medium
type: fey
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 22
  formula: 4d8 + 4
speed:
  walk: 40
abilities:
  str: 12
  dex: 17
  con: 12
  int: 10
  wis: 13
  cha: 11
senses:
  - darkvision 60 ft.
languages:
  - Understands Elvish and Sylvan but can't speak them
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d4+DEX` Piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 5
        damage: 1d4+3
        damage_type: piercing
        range:
          reach: 5
  - name: Teleport (Recharge 4-6)
    entries:
      - The dog teleports up to 40 feet to an unoccupied space it can see.
    recharge:
      type: recharge_on_roll
      param: 4
reactions: []
legendary_actions: []
traits: []
cr: '0.25'
saves:
  str: 1
  dex: 3
  con: 1
  int: 0
  wis: 1
  cha: 0
skills:
  perception: 5
  stealth: 5
alignment: lawful good
passive_perception: 15
```
