---
archivist: true
entity_type: monster
slug: srd-2024_monster_marilith
name: Marilith
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.434Z'
---

```monster
slug: srd-2024_monster_marilith
name: Marilith
edition: '2024'
source: SRD 5.2
size: large
type: fiend
ac:
  - ac: 16
    from:
      - natural armor
hp:
  average: 220
  formula: 21d10 + 105
speed:
  walk: 40
  climb: 40
abilities:
  str: 18
  dex: 20
  con: 20
  int: 18
  wis: 16
  cha: 20
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
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The marilith makes six Pact Blade attacks and uses Constrict.
  - name: Teleport
    entries:
      - The marilith teleports up to 120 feet to an unoccupied space it can see.
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Pact Blade
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d10+DEX` Slashing damage plus `dmg:2d6` Necrotic damage.'
    attacks:
      - name: Pact Blade attack
        type: melee
        bonus: 10
        damage: 1d10+5
        damage_type: slashing
        range:
          reach: 5
  - name: Constrict
    entries:
      - 'Strength Saving Throw: `dc:STR`, one Medium or smaller creature the marilith can see within 5 feet. Failure: `dmg:2d10+STR` Bludgeoning damage. The target has the Grappled condition (escape `dc:14`), and it has the Restrained condition until the grapple ends.'
reactions:
  - name: Parry
    entries:
      - _Trigger:_ The marilith is hit by a melee attack roll while holding a weapon. _Response:_ The marilith adds 5 to its AC against that attack, possibly causing it to miss.
legendary_actions: []
traits:
  - name: Demonic Restoration
    entries:
      - If the marilith dies outside the Abyss, its body dissolves into ichor, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Abyss.
  - name: Magic Resistance
    entries:
      - The marilith has Advantage on saving throws against spells and other magical effects.
  - name: Reactive
    entries:
      - The marilith can take one Reaction on every turn of combat.
cr: '16'
saves:
  str: 9
  dex: 5
  con: 10
  int: 4
  wis: 8
  cha: 10
skills:
  perception: 8
alignment: chaotic evil
passive_perception: 18
```
