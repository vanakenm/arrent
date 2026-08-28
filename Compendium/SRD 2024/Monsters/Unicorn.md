---
archivist: true
entity_type: monster
slug: srd-2024_monster_unicorn
name: Unicorn
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.450Z'
---

```monster
slug: srd-2024_monster_unicorn
name: Unicorn
edition: '2024'
source: SRD 5.2
size: large
type: celestial
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 97
  formula: 13d10 + 26
speed:
  walk: 50
abilities:
  str: 18
  dex: 14
  con: 15
  int: 11
  wis: 17
  cha: 16
senses:
  - darkvision 60 ft.
languages:
  - Celestial
  - Elvish
  - Sylvan; telepathy 120 ft.
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - poison
condition_immunities:
  - charmed
  - paralyzed
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The unicorn makes one Hooves attack and one Radiant Horn attack.
  - name: Unicorn's Blessing
    entries:
      - The unicorn touches another creature with its horn and casts Cure Wounds or Lesser Restoration on that creature, using the same spellcasting ability as Spellcasting.
    recharge:
      type: per_day
      param: 3
  - name: Hooves
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d6+STR` Bludgeoning damage.'
    attacks:
      - name: Hooves attack
        type: melee
        bonus: 7
        damage: 2d6+4
        damage_type: bludgeoning
        range:
          reach: 5
  - name: Radiant Horn
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d10+STR` Radiant damage.'
    attacks:
      - name: Radiant Horn attack
        type: melee
        bonus: 7
        damage: 1d10+4
        damage_type: radiant
        range:
          reach: 5
  - name: Spellcasting
    entries:
      - |-
        The unicorn casts one of the following spells, requiring no spell components and using Charisma as the spellcasting ability (spell save `dc:CHA`):

        - **At Will:** Detect Evil and Good, Druidcraft
        - **1/Day Each:** Calm Emotions, Dispel Evil and Good, Entangle, Pass without Trace, Word of Recall
reactions: []
legendary_actions:
  - name: Charging Horn
    entries:
      - The unicorn moves up to half its Speed without provoking Opportunity Attacks, and it makes one Radiant Horn attack.
  - name: Shimmering Shield
    entries:
      - The unicorn targets itself or one creature it can see within 60 feet of itself. The target gains 10 (`dice:3d6`) Temporary Hit Points, and its AC increases by 2 until the end of the unicorn's next turn. The unicorn can't take this action again until the start of its next turn.
traits:
  - name: Legendary Resistance (3/Day)
    entries:
      - If the unicorn fails a saving throw, it can choose to succeed instead.
  - name: Magic Resistance
    entries:
      - The unicorn has Advantage on saving throws against spells and other magical effects.
cr: '5'
saves:
  str: 4
  dex: 2
  con: 2
  int: 0
  wis: 3
  cha: 3
alignment: lawful good
passive_perception: 13
legendary_resistance: 3
```
