---
archivist: true
entity_type: monster
slug: srd-2024_monster_chain-devil
name: Chain Devil
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.413Z'
---

```monster
slug: srd-2024_monster_chain-devil
name: Chain Devil
edition: '2024'
source: SRD 5.2
size: medium
type: fiend
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 85
  formula: 10d8 + 40
speed:
  walk: 30
abilities:
  str: 18
  dex: 15
  con: 18
  int: 11
  wis: 12
  cha: 14
senses:
  - darkvision 120 ft.
languages:
  - Infernal; telepathy 120 ft.
damage_vulnerabilities: []
damage_resistances:
  - cold
damage_immunities:
  - fire
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The devil makes two Chain attacks and uses Conjure Infernal Chain.
  - name: Chain
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d6+STR` Slashing damage. If the target is a Large or smaller creature, it has the Grappled condition (escape `dc:14`) from one of two chains, and it has the Restrained condition until the grapple ends.'
    attacks:
      - name: Chain attack
        type: melee
        bonus: 7
        damage: 2d6+4
        damage_type: slashing
        range:
          reach: 10
  - name: Conjure Infernal Chain
    entries:
      - 'The devil conjures a fiery chain to bind a creature. Dexterity Saving Throw: `dc:15`, one creature the devil can see within 60 feet. Failure: `dmg:2d4+STR` Fire damage, and the target has the Restrained condition until the end of the devil''s next turn, at which point the chain disappears. If the target is Large or smaller, the devil moves the target up to 30 feet straight toward itself. Success: The chain disappears.'
reactions:
  - name: Unnerving Gaze
    entries:
      - _Trigger:_ A creature the devil can see starts its turn within 30 feet of the devil and can see the devil. _Response––Wisdom Saving Throw:_ `dc:CON`, the triggering creature. _Failure:_ The target has the Frightened condition until the end of its turn. _Success:_ The target is immune to this devil’s Unnerving Gaze for 24 hours.
legendary_actions: []
traits:
  - name: Diabolical Restoration
    entries:
      - If the devil dies outside the Nine Hells, its body disappears in sulfurous smoke, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Nine Hells.
  - name: Magic Resistance
    entries:
      - The devil has Advantage on saving throws against spells and other magical effects.
cr: '8'
saves:
  str: 4
  dex: 2
  con: 7
  int: 0
  wis: 4
  cha: 2
alignment: lawful evil
passive_perception: 11
```
