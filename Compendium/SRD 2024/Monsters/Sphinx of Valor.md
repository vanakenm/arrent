---
archivist: true
entity_type: monster
slug: srd-2024_monster_sphinx-of-valor
name: Sphinx of Valor
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.444Z'
---

```monster
slug: srd-2024_monster_sphinx-of-valor
name: Sphinx of Valor
edition: '2024'
source: SRD 5.2
size: large
type: celestial
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 199
  formula: 19d10 + 95
speed:
  walk: 40
  fly: 60
abilities:
  str: 22
  dex: 10
  con: 20
  int: 16
  wis: 23
  cha: 18
senses:
  - truesight 120 ft.
languages:
  - Celestial
  - Common
damage_vulnerabilities: []
damage_resistances:
  - necrotic
  - radiant
damage_immunities:
  - psychic
condition_immunities:
  - charmed
  - frightened
actions:
  - name: Multiattack
    entries:
      - The sphinx makes two Claw attacks and uses Roar.
  - name: Claw
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:4d6+STR` Slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 12
        damage: 4d6+6
        damage_type: slashing
        range:
          reach: 5
  - name: Roar
    entries:
      - 'The sphinx emits a magical roar. Whenever it roars, the roar has a different effect, as detailed below (the sequence resets when it takes a Long Rest): - First Roar: Wisdom Saving Throw: `dc:WIS`, each enemy in a 500-foot Emanation originating from the sphinx. Failure: The target has the Frightened condition for 1 minute. - Second Roar: Wisdom Saving Throw: `dc:WIS`, each enemy in a 500-foot Emanation originating from the sphinx. Failure: The target has the Paralyzed condition, and it repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically. - Third Roar: Constitution Saving Throw: `dc:20`, each enemy in a 500-foot Emanation originating from the sphinx. Failure: `dmg:8d10` Thunder damage, and the target has the Prone condition. Success: Half damage only.'
    recharge:
      type: per_day
      param: 3
  - name: Spellcasting
    entries:
      - |-
        The sphinx casts one of the following spells, requiring no Material components and using Wisdom as the spellcasting ability (spell save `dc:WIS`):

        - **At Will:** Detect Evil and Good, Thaumaturgy
        - **1/Day Each:** Detect Magic, Dispel Magic, Greater Restoration, Heroes' Feast, Zone of Truth
reactions: []
legendary_actions:
  - name: Arcane Prowl
    entries:
      - The sphinx can teleport up to 30 feet to an unoccupied space it can see, and it makes one Claw attack.
  - name: Weight of Years
    entries:
      - 'Constitution Saving Throw: `dc:16`, one creature the sphinx can see within 120 feet. Failure: The target gains 1 Exhaustion level. While the target has any Exhaustion levels, it appears `dice:3d10` years older. Failure or Success: The sphinx can''t take this action again until the start of its next turn.'
traits:
  - name: Inscrutable
    entries:
      - No magic can observe the sphinx remotely or detect its thoughts without its permission. Wisdom (Insight) checks made to ascertain its intentions or sincerity are made with Disadvantage.
  - name: Legendary Resistance (3/Day, or 4/Day in Lair)
    entries:
      - If the sphinx fails a saving throw, it can choose to succeed instead.
cr: '17'
saves:
  str: 6
  dex: 6
  con: 11
  int: 9
  wis: 12
  cha: 4
skills:
  arcana: 9
  perception: 12
  religion: 15
alignment: lawful neutral
passive_perception: 22
legendary_resistance: 3
```
