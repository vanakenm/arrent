---
archivist: true
entity_type: monster
slug: srd-2024_monster_mage
name: Mage
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.433Z'
---

```monster
slug: srd-2024_monster_mage
name: Mage
edition: '2024'
source: SRD 5.2
size: small
type: humanoid
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 81
  formula: 18d8
speed:
  walk: 30
abilities:
  str: 9
  dex: 14
  con: 11
  int: 17
  wis: 12
  cha: 11
senses: []
languages:
  - Common and any three languages
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The mage makes three Arcane Burst attacks.
  - name: Misty Step
    entries:
      - The mage casts Misty Step, using the same spellcasting ability as Spellcasting.
    recharge:
      type: per_day
      param: 3
  - name: Arcane Burst
    entries:
      - 'Melee or Ranged Attack Roll: `atk:INT+PB`, reach 5 ft. or range 120 ft. `dmg:3d8+INT` Force damage.'
    attacks:
      - name: Arcane Burst attack
        type: ranged
        bonus: 6
        damage: 3d8+3
        damage_type: force
        range:
          reach: 5
          normal: 120
  - name: Spellcasting
    entries:
      - |-
        The mage casts one of the following spells, using Intelligence as the spellcasting ability (spell save `dc:INT`):

        - **At Will:** Detect Magic, Light, Mage Armor, Mage Hand, Prestidigitation
        - **2/Day Each:** Fireball, Invisibility
        - **1/Day Each:** Cone of Cold, Fly
reactions:
  - name: Protective Magic
    entries:
      - The mage casts Counterspell or Shield in response to the spell's trigger, using the same spellcasting ability as Spellcasting.
    recharge:
      type: per_day
      param: 3
legendary_actions: []
traits: []
cr: '6'
saves:
  str: -1
  dex: 2
  con: 0
  int: 6
  wis: 4
  cha: 0
skills:
  arcana: 6
  history: 6
  perception: 4
alignment: neutral
passive_perception: 14
```
