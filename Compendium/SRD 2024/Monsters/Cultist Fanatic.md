---
archivist: true
entity_type: monster
slug: srd-2024_monster_cultist-fanatic
name: Cultist Fanatic
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.415Z'
---

```monster
slug: srd-2024_monster_cultist-fanatic
name: Cultist Fanatic
edition: '2024'
source: SRD 5.2
size: small
type: humanoid
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 44
  formula: 8d8 + 8
speed:
  walk: 30
abilities:
  str: 11
  dex: 14
  con: 12
  int: 10
  wis: 14
  cha: 13
senses: []
languages:
  - Common
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Pact Blade
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d8+DEX` Slashing damage plus `dmg:2d6` Necrotic damage.'
    attacks:
      - name: Pact Blade attack
        type: melee
        bonus: 4
        damage: 1d8+2
        damage_type: slashing
        range:
          reach: 5
  - name: Spiritual Weapon
    entries:
      - The cultist casts the Spiritual Weapon spell, using the same spellcasting ability as Spellcasting.
    recharge:
      type: per_day
      param: 2
  - name: Spellcasting
    entries:
      - |-
        The cultist casts one of the following spells, using Wisdom as the spellcasting ability (spell save `dc:WIS`, `atk:+4` with spell attacks):

        - **At Will:** Light, Thaumaturgy
        - **1/Day Each:** Hold Person
        - **2/Day Each:** Command
reactions: []
legendary_actions: []
traits: []
cr: '2'
saves:
  str: 0
  dex: 2
  con: 1
  int: 0
  wis: 4
  cha: 1
skills:
  deception: 3
  persuasion: 3
  religion: 2
alignment: neutral
passive_perception: 12
```
