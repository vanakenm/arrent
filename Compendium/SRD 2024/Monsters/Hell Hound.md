---
archivist: true
entity_type: monster
slug: srd-2024_monster_hell-hound
name: Hell Hound
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.429Z'
---

```monster
slug: srd-2024_monster_hell-hound
name: Hell Hound
edition: '2024'
source: SRD 5.2
size: medium
type: fiend
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 58
  formula: 9d8 + 18
speed:
  walk: 50
abilities:
  str: 17
  dex: 12
  con: 14
  int: 6
  wis: 13
  cha: 6
senses:
  - darkvision 60 ft.
languages:
  - Understands Infernal but can't speak
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - fire
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The hound makes two Bite attacks.
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d8+STR` Piercing damage plus `dmg:1d6` Fire damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 5
        damage: 1d8+3
        damage_type: piercing
        range:
          reach: 5
  - name: Fire Breath
    entries:
      - 'Dexterity Saving Throw: `dc:12`, each creature in a 15-foot Cone. Failure: `dmg:5d6` Fire damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits:
  - name: Pack Tactics
    entries:
      - The hound has Advantage on an attack roll against a creature if at least one of the hound's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition.
cr: '3'
saves:
  str: 3
  dex: 1
  con: 2
  int: -2
  wis: 1
  cha: -2
skills:
  perception: 5
alignment: lawful evil
passive_perception: 15
```
