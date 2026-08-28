---
archivist: true
entity_type: monster
slug: srd-2024_monster_nalfeshnee
name: Nalfeshnee
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.436Z'
---

```monster
slug: srd-2024_monster_nalfeshnee
name: Nalfeshnee
edition: '2024'
source: SRD 5.2
size: large
type: fiend
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 184
  formula: 16d10 + 96
speed:
  walk: 20
  fly: 30
abilities:
  str: 21
  dex: 10
  con: 22
  int: 19
  wis: 12
  cha: 15
senses:
  - truesight 120 ft.
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
  - frightened
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The nalfeshnee makes three Rend attacks.
  - name: Horror Nimbus
    entries:
      - 'Wisdom Saving Throw: `dc:15`, each creature in a 15-foot Emanation originating from the nalfeshnee. Failure: `dmg:8d6` Psychic damage, and the target has the Frightened condition for 1 minute, until it takes damage, or until it ends its turn with the nalfeshnee out of line of sight. Success: The target is immune to this nalfeshnee''s Horror Nimbus for 24 hours.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d10+STR` Slashing damage plus `dmg:2d10` Force damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 10
        damage: 2d10+5
        damage_type: slashing
        range:
          reach: 10
  - name: Teleport
    entries:
      - The nalfeshnee teleports up to 120 feet to an unoccupied space it can see.
reactions:
  - name: Pursuit
    entries:
      - _Trigger:_ Another creature the nalfeshnee can see ends its move within 120 feet of the nalfeshnee. _Response:_ The nalfeshnee uses Teleport, but its destination space must be within 10 feet of the triggering creature.
legendary_actions: []
traits:
  - name: Demonic Restoration
    entries:
      - If the nalfeshnee dies outside the Abyss, its body dissolves into ichor, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Abyss.
  - name: Magic Resistance
    entries:
      - The nalfeshnee has Advantage on saving throws against spells and other magical effects.
cr: '13'
saves:
  str: 5
  dex: 0
  con: 11
  int: 9
  wis: 6
  cha: 7
alignment: chaotic evil
passive_perception: 11
```
