---
archivist: true
entity_type: monster
slug: srd-2024_monster_deva
name: Deva
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.416Z'
---

```monster
slug: srd-2024_monster_deva
name: Deva
edition: '2024'
source: SRD 5.2
size: medium
type: celestial
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 229
  formula: 27d8 + 108
speed:
  walk: 30
  fly: 90
abilities:
  str: 18
  dex: 18
  con: 18
  int: 17
  wis: 20
  cha: 20
senses:
  - darkvision 120 ft.
languages:
  - All; telepathy 120 ft.
damage_vulnerabilities: []
damage_resistances:
  - radiant
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The deva makes two Holy Mace attacks.
  - name: Divine Aid
    entries:
      - The deva casts Cure Wounds, Lesser Restoration, or Remove Curse, using the same spellcasting ability as Spellcasting.
    recharge:
      type: per_day
      param: 2
  - name: Holy Mace
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d6+STR` Bludgeoning damage plus `dmg:4d8` Radiant damage.'
    attacks:
      - name: Holy Mace attack
        type: melee
        bonus: 8
        damage: 1d6+4
        damage_type: bludgeoning
        range:
          reach: 5
  - name: Spellcasting
    entries:
      - |-
        The deva casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save `dc:CHA`):

        - **At Will:** Detect Evil and Good, Shapechange
        - **1/Day Each:** Commune, Raise Dead
reactions: []
legendary_actions: []
traits:
  - name: Exalted Restoration
    entries:
      - If the deva dies outside Mount Celestia, its body disappears, and it gains a new body instantly, reviving with all its Hit Points somewhere in Mount Celestia.
  - name: Magic Resistance
    entries:
      - The deva has Advantage on saving throws against spells and other magical effects.
cr: '10'
saves:
  str: 4
  dex: 4
  con: 4
  int: 3
  wis: 9
  cha: 9
skills:
  insight: 9
  perception: 9
alignment: lawful good
passive_perception: 19
```
