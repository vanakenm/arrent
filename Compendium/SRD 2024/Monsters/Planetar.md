---
archivist: true
entity_type: monster
slug: srd-2024_monster_planetar
name: Planetar
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.439Z'
---

```monster
slug: srd-2024_monster_planetar
name: Planetar
edition: '2024'
source: SRD 5.2
size: large
type: celestial
ac:
  - ac: 19
    from:
      - natural armor
hp:
  average: 262
  formula: 21d10 + 147
speed:
  walk: 40
  fly: 120
abilities:
  str: 24
  dex: 20
  con: 24
  int: 19
  wis: 22
  cha: 25
senses:
  - truesight 120 ft.
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
      - The planetar makes three Radiant Sword attacks or uses Holy Burst twice.
  - name: Divine Aid
    entries:
      - The planetar casts Cure Wounds, Invisibility, Lesser Restoration, or Remove Curse, using the same spellcasting ability as Spellcasting.
    recharge:
      type: per_day
      param: 2
  - name: Radiant Sword
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d6+STR` Slashing damage plus `dmg:4d8` Radiant damage.'
    attacks:
      - name: Radiant Sword attack
        type: melee
        bonus: 12
        damage: 2d6+7
        damage_type: slashing
        range:
          reach: 10
  - name: Holy Burst
    entries:
      - 'Dexterity Saving Throw: `dc:20`, each enemy in a 20-foot-radius Sphere [Area of Effect]|XPHB|Sphere centered on a point the planetar can see within 120 feet. Failure: `dmg:7d6` Radiant damage. Success: Half damage.'
  - name: Spellcasting
    entries:
      - |-
        The planetar casts one of the following spells, requiring no Material components and using Charisma as spellcasting ability (spell save `dc:CHA`):

        - **At Will:** Detect Evil and Good
        - **1/Day Each:** Commune, Control Weather, Dispel Evil and Good, Raise Dead
reactions: []
legendary_actions: []
traits:
  - name: Divine Awareness
    entries:
      - The planetar knows if it hears a lie.
  - name: Exalted Restoration
    entries:
      - If the planetar dies outside Mount Celestia, its body disappears, and it gains a new body instantly, reviving with all its Hit Points somewhere in Mount Celestia.
  - name: Magic Resistance
    entries:
      - The planetar has Advantage on saving throws against spells and other magical effects.
cr: '16'
saves:
  str: 12
  dex: 5
  con: 12
  int: 4
  wis: 11
  cha: 12
skills:
  perception: 11
alignment: lawful good
passive_perception: 21
```
