---
archivist: true
entity_type: monster
slug: srd-2024_monster_vrock
name: Vrock
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.451Z'
---

```monster
slug: srd-2024_monster_vrock
name: Vrock
edition: '2024'
source: SRD 5.2
size: large
type: fiend
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 152
  formula: 16d10 + 64
speed:
  walk: 40
  fly: 60
abilities:
  str: 17
  dex: 15
  con: 18
  int: 8
  wis: 13
  cha: 8
senses:
  - darkvision 120 ft.
languages:
  - Abyssal; telepathy 120 ft.
damage_vulnerabilities: []
damage_resistances:
  - cold
  - fire
  - lightning
damage_immunities:
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The vrock makes two Shred attacks.
  - name: Shred
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d6+STR` Piercing damage plus `dmg:3d6` Poison damage.'
    attacks:
      - name: Shred attack
        type: melee
        bonus: 6
        damage: 2d6+3
        damage_type: piercing
        range:
          reach: 5
  - name: Spores
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 20-foot Emanation originating from the vrock. Failure: The target has the Poisoned condition and repeats the save at the end of each of its turns, ending the effect on itself on a success. While Poisoned, the target takes `dmg:1d10` Poison damage at the start of each of its turns. Emptying a flask of Holy Water on the target ends the effect early.'
    recharge:
      type: recharge_on_roll
      param: 6
  - name: Stunning Screech
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 20-foot Emanation originating from the vrock (demons succeed automatically). Failure: `dmg:3d6` Thunder damage, and the target has the Stunned condition until the end of the vrock''s next turn.'
    recharge:
      type: per_day
      param: 1
reactions: []
legendary_actions: []
traits:
  - name: Demonic Restoration
    entries:
      - If the vrock dies outside the Abyss, its body dissolves into ichor, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Abyss.
  - name: Magic Resistance
    entries:
      - The vrock has Advantage on saving throws against spells and other magical effects.
cr: '6'
saves:
  str: 3
  dex: 5
  con: 4
  int: -1
  wis: 4
  cha: 2
alignment: chaotic evil
passive_perception: 11
```
