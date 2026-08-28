---
archivist: true
entity_type: monster
slug: srd-2024_monster_dryad
name: Dryad
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.417Z'
---

```monster
slug: srd-2024_monster_dryad
name: Dryad
edition: '2024'
source: SRD 5.2
size: medium
type: fey
ac:
  - ac: 16
    from:
      - natural armor
hp:
  average: 22
  formula: 5d8
speed:
  walk: 30
abilities:
  str: 10
  dex: 12
  con: 11
  int: 14
  wis: 15
  cha: 18
senses:
  - darkvision 60 ft.
languages:
  - Elvish
  - Sylvan
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The dryad makes one Vine Lash or Thorn Burst attack, and it can use Spellcasting to cast Charm Monster.
  - name: Tree Stride
    entries:
      - If within 5 feet of a Large or bigger tree, the dryad teleports to an unoccupied space within 5 feet of a second Large or bigger tree that is within 60 feet of the previous tree.
  - name: Vine Lash
    entries:
      - 'Melee Attack Roll: `atk:CHA+PB`, reach 10 ft. `dmg:1d8+CHA` Slashing damage.'
    attacks:
      - name: Vine Lash attack
        type: melee
        bonus: 6
        damage: 1d8+4
        damage_type: slashing
        range:
          reach: 10
  - name: Thorn Burst
    entries:
      - 'Ranged Attack Roll: `atk:CHA+PB`, range 60 ft. `dmg:1d6+CHA` Piercing damage.'
    attacks:
      - name: Thorn Burst attack
        type: ranged
        bonus: 6
        damage: 1d6+4
        damage_type: piercing
        range:
          normal: 60
  - name: Spellcasting
    entries:
      - |-
        The dryad casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save `dc:CHA`):

        - **At Will:** Animal Friendship, Charm Monster, Druidcraft
        - **1/Day Each:** Entangle, Pass without Trace
reactions: []
legendary_actions: []
traits:
  - name: Magic Resistance
    entries:
      - The dryad has Advantage on saving throws against spells and other magical effects.
  - name: Speak with Beasts and Plants
    entries:
      - The dryad can communicate with Beasts and Plants as if they shared a language.
cr: '1'
saves:
  str: 0
  dex: 1
  con: 0
  int: 2
  wis: 2
  cha: 4
skills:
  perception: 4
  stealth: 5
alignment: neutral
passive_perception: 14
```
