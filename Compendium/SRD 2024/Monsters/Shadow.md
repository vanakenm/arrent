---
archivist: true
entity_type: monster
slug: srd-2024_monster_shadow
name: Shadow
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.443Z'
---

```monster
slug: srd-2024_monster_shadow
name: Shadow
edition: '2024'
source: SRD 5.2
size: medium
type: undead
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 27
  formula: 5d8 + 5
speed:
  walk: 40
abilities:
  str: 6
  dex: 14
  con: 13
  int: 6
  wis: 10
  cha: 8
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances:
  - acid
  - cold
  - fire
  - lightning
  - thunder
damage_immunities:
  - necrotic
  - poison
condition_immunities:
  - exhaustion
  - frightened
  - grappled
  - paralyzed
  - petrified
  - poisoned
  - prone
  - restrained
  - unconscious
actions:
  - name: Draining Swipe
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d6+DEX` Necrotic damage, and the target''s Strength score decreases by `dice:1d4`. The target dies if this reduces that score to 0. If a Humanoid is slain by this attack, a Shadow rises from the corpse `dice:1d4` hours later.'
    attacks:
      - name: Draining Swipe attack
        type: melee
        bonus: 4
        damage: 1d6+2
        damage_type: necrotic
        range:
          reach: 5
  - name: Shadow Stealth
    entries:
      - While in Dim Light or darkness, the shadow takes the Hide action.
reactions: []
legendary_actions: []
traits:
  - name: Amorphous
    entries:
      - The shadow can move through a space as narrow as 1 inch without expending extra movement to do so.
  - name: Sunlight Weakness
    entries:
      - While in sunlight, the shadow has Disadvantage on D20 Test.
cr: '0.5'
saves:
  str: -2
  dex: 2
  con: 1
  int: -2
  wis: 0
  cha: -1
skills:
  stealth: 6
alignment: chaotic evil
passive_perception: 10
```
