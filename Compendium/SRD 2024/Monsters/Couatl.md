---
archivist: true
entity_type: monster
slug: srd-2024_monster_couatl
name: Couatl
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.414Z'
---

```monster
slug: srd-2024_monster_couatl
name: Couatl
edition: '2024'
source: SRD 5.2
size: medium
type: celestial
ac:
  - ac: 19
    from:
      - natural armor
hp:
  average: 60
  formula: 8d8 + 24
speed:
  walk: 30
  fly: 90
abilities:
  str: 16
  dex: 20
  con: 17
  int: 18
  wis: 20
  cha: 18
senses:
  - truesight 120 ft.
languages:
  - All; telepathy 120 ft.
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - psychic
  - radiant
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d12+DEX` Piercing damage, and the target has the Poisoned condition until the end of the couatl''s next turn.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 7
        damage: 1d12+5
        damage_type: piercing
        range:
          reach: 5
  - name: Divine Aid
    entries:
      - The couatl casts Bless, Lesser Restoration, or Sanctuary, requiring no spell components and using the same spellcasting ability as Spellcasting.
    recharge:
      type: per_day
      param: 2
  - name: Constrict
    entries:
      - 'Strength Saving Throw: `dc:15`, one Medium or smaller creature the couatl can see within 5 feet. Failure: `dmg:1d6+DEX` Bludgeoning damage. The target has the Grappled condition (escape `dc:CON`), and it has the Restrained condition until the grapple ends.'
  - name: Spellcasting
    entries:
      - |-
        The couatl casts one of the following spells, requiring no spell components and using Wisdom as the spellcasting ability (spell save `dc:WIS`):

        - **At Will:** Detect Evil and Good, Detect Magic, Detect Thoughts, Shapechange
        - **1/Day Each:** Create Food and Water, Dream, Greater Restoration, Scrying, Sleep
reactions: []
legendary_actions: []
traits:
  - name: Shielded Mind
    entries:
      - The couatl's thoughts can't be read by any means, and other creatures can communicate with it telepathically only if it allows them.
cr: '4'
saves:
  str: 3
  dex: 5
  con: 5
  int: 4
  wis: 7
  cha: 4
alignment: lawful good
passive_perception: 15
```
