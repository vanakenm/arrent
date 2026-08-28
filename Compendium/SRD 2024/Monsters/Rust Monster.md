---
archivist: true
entity_type: monster
slug: srd-2024_monster_rust-monster
name: Rust Monster
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.441Z'
---

```monster
slug: srd-2024_monster_rust-monster
name: Rust Monster
edition: '2024'
source: SRD 5.2
size: medium
type: monstrosity
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 33
  formula: 6d8 + 6
speed:
  walk: 40
abilities:
  str: 13
  dex: 12
  con: 13
  int: 2
  wis: 13
  cha: 6
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
      - The rust monster makes one Bite attack and uses Antennae twice.
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d8+STR` Piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 3
        damage: 1d8+1
        damage_type: piercing
        range:
          reach: 5
  - name: Antennae
    entries:
      - 'The rust monster targets one nonmagical metal object—armor or a weapon—worn or carried by a creature within 5 feet of itself. Dexterity Saving Throw: `dc:DEX`, the creature with the object. Failure: The object takes a -1 penalty to the AC it offers (armor) or to its attack rolls (weapon). Armor is destroyed if the penalty reduces its AC to 10, and a weapon is destroyed if its penalty reaches -5. The penalty can be removed by casting the Mending spell on the armor or weapon.'
  - name: Destroy Metal
    entries:
      - The rust monster touches a nonmagical metal object within 5 feet of itself that isn't being worn or carried. The touch destroys a 1-foot Cube [Area of Effect]|XPHB|Cube of the object.
reactions:
  - name: Reflexive Antennae
    entries:
      - _Trigger:_ An attack roll hits the rust monster. _Response:_ The rust monster uses **Antennae**.
legendary_actions: []
traits:
  - name: Iron Scent
    entries:
      - The rust monster can pinpoint the location of ferrous metal within 30 feet of itself.
cr: '0.5'
saves:
  str: 1
  dex: 1
  con: 1
  int: -4
  wis: 1
  cha: -2
alignment: unaligned
passive_perception: 11
```
