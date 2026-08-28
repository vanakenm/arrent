---
archivist: true
entity_type: monster
slug: srd-2024_monster_guardian-naga
name: Guardian Naga
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.429Z'
---

```monster
slug: srd-2024_monster_guardian-naga
name: Guardian Naga
edition: '2024'
source: SRD 5.2
size: large
type: celestial
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 136
  formula: 16d10 + 48
speed:
  walk: 40
  swim: 40
  climb: 40
abilities:
  str: 19
  dex: 18
  con: 16
  int: 16
  wis: 19
  cha: 18
senses:
  - darkvision 60 ft.
languages:
  - Celestial
  - Common
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - poison
condition_immunities:
  - charmed
  - paralyzed
  - poisoned
  - restrained
actions:
  - name: Multiattack
    entries:
      - The naga makes two Bite attacks. It can replace any attack with a use of Poisonous Spittle.
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d12+STR` Piercing damage plus `dmg:4d10` Poison damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 8
        damage: 2d12+4
        damage_type: piercing
        range:
          reach: 10
  - name: Poisonous Spittle
    entries:
      - 'Constitution Saving Throw: `dc:16`, one creature the naga can see within 60 feet. Failure: `dmg:7d8` Poison damage, and the target has the Blinded condition until the start of the naga''s next turn. Success: Half damage only.'
  - name: Spellcasting
    entries:
      - |-
        The naga casts one of the following spells, requiring no Somatic or Material components and using Wisdom as the spellcasting ability (spell save `dc:WIS`):

        - **At Will:** Thaumaturgy
        - **1/Day Each:** Clairvoyance, Cure Wounds, Flame Strike, Geas, True Seeing
reactions: []
legendary_actions: []
traits:
  - name: Celestial Restoration
    entries:
      - If the naga dies, it returns to life in `dice:1d6` days and regains all its Hit Points unless Dispel Evil and Good is cast on its remains.
cr: '10'
saves:
  str: 4
  dex: 8
  con: 7
  int: 7
  wis: 8
  cha: 8
skills:
  arcana: 11
  history: 11
  religion: 11
alignment: lawful good
passive_perception: 14
```
