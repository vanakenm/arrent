---
archivist: true
entity_type: monster
slug: srd-2024_monster_solar
name: Solar
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.443Z'
---

```monster
slug: srd-2024_monster_solar
name: Solar
edition: '2024'
source: SRD 5.2
size: large
type: celestial
ac:
  - ac: 21
    from:
      - natural armor
hp:
  average: 297
  formula: 22d10 + 176
speed:
  walk: 50
  fly: 150
abilities:
  str: 26
  dex: 22
  con: 26
  int: 25
  wis: 25
  cha: 30
senses:
  - truesight 120 ft.
languages:
  - All; telepathy 120 ft.
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - poison
  - radiant
condition_immunities:
  - charmed
  - exhaustion
  - frightened
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The solar makes two Flying Sword attacks. It can replace one attack with a use of Slaying Bow.
  - name: Divine Aid
    entries:
      - The solar casts Cure Wounds (level 2 version), Lesser Restoration, or Remove Curse, using the same spellcasting ability as Spellcasting.
    recharge:
      type: per_day
      param: 3
  - name: Flying Sword
    entries:
      - 'Melee or Ranged Attack Roll: `atk:STR+PB`, reach 10 ft. or range 120 ft. `dmg:4d6+STR` Slashing damage plus `dmg:8d8` Radiant damage. HitomThe sword magically returns to the solar''s hand or hovers within 5 feet of the solar immediately after a ranged attack.'
    attacks:
      - name: Flying Sword attack
        type: ranged
        bonus: 15
        damage: 4d6+8
        damage_type: slashing
        range:
          reach: 10
          normal: 120
  - name: Slaying Bow
    entries:
      - 'Dexterity Saving Throw: `dc:DEX`, one creature the solar can see within 600 feet. Failure: If the creature has 100 Hit Points or fewer, it dies. It otherwise takes `dmg:4d8+DEX` Piercing damage plus `dmg:8d8` Radiant damage.'
  - name: Spellcasting
    entries:
      - |-
        The solar casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save `dc:CHA`):

        - **At Will:** Detect Evil and Good
        - **1/Day Each:** Commune, Control Weather, Dispel Evil and Good, Resurrection
reactions: []
legendary_actions:
  - name: Blinding Gaze
    entries:
      - 'Constitution Saving Throw: `dc:25`, one creature the solar can see within 120 feet. Failure: The target has the Blinded condition for 1 minute. Failure or Success: The solar can''t take this action again until the start of its next turn.'
  - name: Radiant Teleport
    entries:
      - 'The solar teleports up to 60 feet to an unoccupied space it can see. Dexterity Saving Throw: `dc:25`, each creature in a 10-foot Emanation originating from the solar at its destination space. Failure: `dmg:2d10` Radiant damage. Success: Half damage.'
traits:
  - name: Divine Awareness
    entries:
      - The solar knows if it hears a lie.
  - name: Exalted Restoration
    entries:
      - If the solar dies outside Mount Celestia, its body disappears, and it gains a new body instantly, reviving with all its Hit Points somewhere in Mount Celestia.
  - name: Legendary Resistance (4/Day)
    entries:
      - If the solar fails a saving throw, it can choose to succeed instead.
  - name: Magic Resistance
    entries:
      - The solar has Advantage on saving throws against spells and other magical effects.
cr: '21'
saves:
  str: 8
  dex: 6
  con: 8
  int: 7
  wis: 7
  cha: 10
skills:
  perception: 14
alignment: lawful good
passive_perception: 24
legendary_resistance: 4
```
