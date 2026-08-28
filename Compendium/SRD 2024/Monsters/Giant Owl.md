---
archivist: true
entity_type: monster
slug: srd-2024_monster_giant-owl
name: Giant Owl
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.424Z'
---

```monster
slug: srd-2024_monster_giant-owl
name: Giant Owl
edition: '2024'
source: SRD 5.2
size: large
type: celestial
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 19
  formula: 3d10 + 3
speed:
  walk: 5
  fly: 60
abilities:
  str: 13
  dex: 15
  con: 12
  int: 10
  wis: 14
  cha: 10
senses:
  - darkvision 120 ft.
languages:
  - Celestial; understands Common
  - Elvish
  - And Sylvan but can't speak them
damage_vulnerabilities: []
damage_resistances:
  - necrotic
  - radiant
damage_immunities: []
condition_immunities: []
actions:
  - name: Talons
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d10+DEX` Slashing damage.'
    attacks:
      - name: Talons attack
        type: melee
        bonus: 4
        damage: 1d10+2
        damage_type: slashing
        range:
          reach: 5
  - name: Spellcasting
    entries:
      - |-
        The owl casts one of the following spells, requiring no spell components and using Wisdom as the spellcasting ability:

        - **At Will:** Detect Evil and Good, Detect Magic
        - **1/Day Each:** Clairvoyance
reactions: []
legendary_actions: []
traits:
  - name: Flyby
    entries:
      - The owl doesn't provoke an Opportunity Attack when it flies out of an enemy's reach.
cr: '0.25'
saves:
  str: 1
  dex: 2
  con: 1
  int: 0
  wis: 4
  cha: 0
skills:
  perception: 6
  stealth: 6
alignment: neutral
passive_perception: 16
```
