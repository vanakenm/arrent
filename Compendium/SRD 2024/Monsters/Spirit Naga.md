---
archivist: true
entity_type: monster
slug: srd-2024_monster_spirit-naga
name: Spirit Naga
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.445Z'
---

```monster
slug: srd-2024_monster_spirit-naga
name: Spirit Naga
edition: '2024'
source: SRD 5.2
size: large
type: fiend
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 135
  formula: 18d10 + 36
speed:
  walk: 40
abilities:
  str: 18
  dex: 17
  con: 14
  int: 16
  wis: 15
  cha: 16
senses:
  - darkvision 60 ft.
languages:
  - Abyssal
  - Common
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - poison
condition_immunities:
  - charmed
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The naga makes three attacks, using Bite or Necrotic Ray in any combination.
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:1d6+STR` Piercing damage plus `dmg:4d6` Poison damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 7
        damage: 1d6+4
        damage_type: piercing
        range:
          reach: 10
  - name: Necrotic Ray
    entries:
      - 'Ranged Attack Roll: `atk:+6`, range 60 ft. `dmg:6d6` Necrotic damage.'
    attacks:
      - name: Necrotic Ray attack
        type: ranged
        bonus: 6
        damage: 6d6
        damage_type: necrotic
        range:
          normal: 60
  - name: Spellcasting
    entries:
      - |-
        The naga casts one of the following spells, requiring no Somatic or Material components and using Intelligence as the spellcasting ability (spell save `dc:INT`):

        - **At Will:** Detect Magic, Mage Hand, Minor Illusion, Water Breathing
        - **2/Day Each:** Detect Thoughts, Dimension Door, Hold Person, Lightning Bolt
reactions: []
legendary_actions: []
traits:
  - name: Fiendish Restoration
    entries:
      - If it dies, the naga returns to life in `dice:1d6` days and regains all its Hit Points. Only a Wish spell can prevent this trait from functioning.
cr: '8'
saves:
  str: 4
  dex: 6
  con: 5
  int: 3
  wis: 5
  cha: 6
alignment: chaotic evil
passive_perception: 12
```
