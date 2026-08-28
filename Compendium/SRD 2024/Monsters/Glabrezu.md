---
archivist: true
entity_type: monster
slug: srd-2024_monster_glabrezu
name: Glabrezu
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.426Z'
---

```monster
slug: srd-2024_monster_glabrezu
name: Glabrezu
edition: '2024'
source: SRD 5.2
size: large
type: fiend
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 189
  formula: 18d10 + 90
speed:
  walk: 40
abilities:
  str: 20
  dex: 15
  con: 21
  int: 19
  wis: 17
  cha: 16
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
      - The glabrezu makes two Pincer attacks and uses Pummel or Spellcasting.
  - name: Pincer
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d10+STR` Slashing damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape `dc:CHA`) from one of two pincers.'
    attacks:
      - name: Pincer attack
        type: melee
        bonus: 9
        damage: 2d10+5
        damage_type: slashing
        range:
          reach: 10
  - name: Pummel
    entries:
      - 'Dexterity Saving Throw: `dc:17`, one creature Grappled by the glabrezu. Failure: `dmg:3d6+STR` Bludgeoning damage. Success: Half damage.'
  - name: Spellcasting
    entries:
      - |-
        The glabrezu casts one of the following spells, requiring no Material components and using Intelligence as the spellcasting ability (spell save `dc:INT`):

        - **At Will:** Darkness, Detect Magic, Dispel Magic
        - **1/Day Each:** Confusion, Fly, Power Word Stun
reactions: []
legendary_actions: []
traits:
  - name: Demonic Restoration
    entries:
      - If the glabrezu dies outside the Abyss, its body dissolves into ichor, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Abyss.
  - name: Magic Resistance
    entries:
      - The glabrezu has Advantage on saving throws against spells and other magical effects.
cr: '9'
saves:
  str: 9
  dex: 2
  con: 9
  int: 4
  wis: 7
  cha: 7
skills:
  deception: 7
  perception: 7
alignment: chaotic evil
passive_perception: 17
```
