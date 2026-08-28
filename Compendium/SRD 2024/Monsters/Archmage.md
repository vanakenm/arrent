---
archivist: true
entity_type: monster
slug: srd-2024_monster_archmage
name: Archmage
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.407Z'
---

```monster
slug: srd-2024_monster_archmage
name: Archmage
edition: '2024'
source: SRD 5.2
size: small
type: humanoid
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 170
  formula: 31d8 + 31
speed:
  walk: 30
abilities:
  str: 10
  dex: 14
  con: 12
  int: 20
  wis: 15
  cha: 16
senses: []
languages:
  - Common plus five other languages
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - psychic
condition_immunities:
  - charmed
actions:
  - name: Multiattack
    entries:
      - The archmage makes four Arcane Burst attacks.
  - name: Misty Step
    entries:
      - The mage casts Misty Step, using the same spellcasting ability as Spellcasting.
    recharge:
      type: per_day
      param: 3
  - name: Arcane Burst
    entries:
      - 'Melee or Ranged Attack Roll: `atk:INT+PB`, reach 5 ft. or range 150 ft. `dmg:4d10+INT` Force damage.'
    attacks:
      - name: Arcane Burst attack
        type: ranged
        bonus: 9
        damage: 4d10+5
        damage_type: force
        range:
          reach: 5
          normal: 150
  - name: Spellcasting
    entries:
      - |-
        The archmage casts one of the following spells, using Intelligence as the spellcasting ability (spell save `dc:INT`):

        - **At Will:** Detect Magic, Detect Thoughts, Disguise Self, Invisibility, Light, Mage Armor, Mage Hand, Prestidigitation
        - **2/Day Each:** Fly, Lightning Bolt
        - **1/Day Each:** Cone of Cold, Mind Blank, Scrying, Teleport
reactions:
  - name: Protective Magic
    entries:
      - The archmage casts Counterspell or Shield in response to the spell's trigger, using the same spellcasting ability as Spellcasting.
    recharge:
      type: per_day
      param: 3
legendary_actions: []
traits:
  - name: Magic Resistance
    entries:
      - The archmage has Advantage on saving throws against spells and other magical effects.
cr: '12'
saves:
  str: 0
  dex: 2
  con: 1
  int: 9
  wis: 6
  cha: 3
skills:
  arcana: 13
  history: 9
  perception: 6
alignment: neutral
passive_perception: 16
```
