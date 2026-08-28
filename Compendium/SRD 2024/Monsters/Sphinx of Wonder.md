---
archivist: true
entity_type: monster
slug: srd-2024_monster_sphinx-of-wonder
name: Sphinx of Wonder
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.444Z'
---

```monster
slug: srd-2024_monster_sphinx-of-wonder
name: Sphinx of Wonder
edition: '2024'
source: SRD 5.2
size: small
type: celestial
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 24
  formula: 7d4 + 7
speed:
  walk: 20
  fly: 40
abilities:
  str: 6
  dex: 17
  con: 13
  int: 15
  wis: 12
  cha: 11
senses:
  - darkvision 60 ft.
languages:
  - Celestial
  - Common
damage_vulnerabilities: []
damage_resistances:
  - necrotic
  - psychic
  - radiant
damage_immunities: []
condition_immunities: []
actions:
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d4+DEX` Slashing damage plus `dmg:2d6` Radiant damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 5
        damage: 1d4+3
        damage_type: slashing
        range:
          reach: 5
reactions:
  - name: Burst of Ingenuity
    entries:
      - _Trigger:_ The sphinx or another creature within 30 feet makes an ability check or a saving throw. _Response:_ The sphinx adds 2 to the roll.
    recharge:
      type: per_day
      param: 2
legendary_actions: []
traits:
  - name: Magic Resistance
    entries:
      - The sphinx has Advantage on saving throws against spells and other magical effects.
cr: '1'
saves:
  str: -2
  dex: 3
  con: 1
  int: 2
  wis: 1
  cha: 0
skills:
  arcana: 4
  religion: 4
  stealth: 5
alignment: lawful good
passive_perception: 11
```
