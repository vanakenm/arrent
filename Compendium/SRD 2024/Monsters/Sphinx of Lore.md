---
archivist: true
entity_type: monster
slug: srd-2024_monster_sphinx-of-lore
name: Sphinx of Lore
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.444Z'
---

```monster
slug: srd-2024_monster_sphinx-of-lore
name: Sphinx of Lore
edition: '2024'
source: SRD 5.2
size: large
type: celestial
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 170
  formula: 20d10 + 60
speed:
  walk: 40
  fly: 60
abilities:
  str: 18
  dex: 15
  con: 16
  int: 18
  wis: 18
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
      - The sphinx makes three Claw attacks.
  - name: Claw
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:3d6+STR` Slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 8
        damage: 3d6+4
        damage_type: slashing
        range:
          reach: 5
  - name: Mind-Rending Roar
    entries:
      - 'Wisdom Saving Throw: `dc:WIS`, each enemy in a 300-foot Emanation originating from the sphinx. Failure: `dmg:10d6` Psychic damage, and the target has the Incapacitated condition until the start of the sphinx''s next turn.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Spellcasting
    entries:
      - |-
        The sphinx casts one of the following spells, requiring no Material components and using Intelligence as the spellcasting ability (spell save `dc:INT`):

        - **At Will:** Detect Magic, Identify, Mage Hand, Minor Illusion, Prestidigitation
        - **1/Day Each:** Dispel Magic, Legend Lore, Locate Object, Plane Shift, Remove Curse, Tongues
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
cr: '11'
saves:
  str: 4
  dex: 2
  con: 3
  int: 4
  wis: 4
  cha: 4
skills:
  arcana: 12
  history: 12
  perception: 8
  religion: 12
alignment: lawful neutral
passive_perception: 18
legendary_resistance: 3
```
