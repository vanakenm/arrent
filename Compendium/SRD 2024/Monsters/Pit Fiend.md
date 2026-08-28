---
archivist: true
entity_type: monster
slug: srd-2024_monster_pit-fiend
name: Pit Fiend
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.438Z'
---

```monster
slug: srd-2024_monster_pit-fiend
name: Pit Fiend
edition: '2024'
source: SRD 5.2
size: large
type: fiend
ac:
  - ac: 21
    from:
      - natural armor
hp:
  average: 337
  formula: 27d10 + 189
speed:
  walk: 30
  fly: 60
abilities:
  str: 26
  dex: 14
  con: 24
  int: 22
  wis: 18
  cha: 24
senses:
  - truesight 120 ft.
languages:
  - Infernal; telepathy 120 ft.
damage_vulnerabilities: []
damage_resistances:
  - cold
damage_immunities:
  - fire
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The pit fiend makes one Bite attack, two Devilish Claw attacks, and one Fiery Mace attack.
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:3d6+STR` Piercing damage. If the target is a creature, it must make the following saving throw. Constitution Saving Throw: `dc:CON`. Failure: The target has the Poisoned condition. While Poisoned, the target can''t regain Hit Points and takes `dmg:6d6` Poison damage at the start of each of its turns, and it repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 14
        damage: 3d6+8
        damage_type: piercing
        range:
          reach: 10
  - name: Devilish Claw
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:4d8+STR` Necrotic damage.'
    attacks:
      - name: Devilish Claw attack
        type: melee
        bonus: 14
        damage: 4d8+8
        damage_type: necrotic
        range:
          reach: 10
  - name: Fiery Mace
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:4d6+STR` Force damage plus `dmg:6d6` Fire damage.'
    attacks:
      - name: Fiery Mace attack
        type: melee
        bonus: 14
        damage: 4d6+8
        damage_type: force
        range:
          reach: 10
  - name: Hellfire Spellcasting
    entries:
      - |-
        The pit fiend casts Fireball (level 5 version) twice, requiring no Material components and using Charisma as the spellcasting ability (spell save `dc:CHA`). It can replace one Fireball with Hold Monster (level 7 version) or Wall of Fire.

        - **At Will:**
    recharge:
      type: recharge_on_roll
      param: 4
reactions: []
legendary_actions: []
traits:
  - name: Diabolical Restoration
    entries:
      - If the pit fiend dies outside the Nine Hells, its body disappears in sulfurous smoke, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Nine Hells.
  - name: Fear Aura
    entries:
      - 'The pit fiend emanates an aura in a 20-foot Emanation while it doesn''t have the Incapacitated condition. Wisdom Saving Throw: `dc:21`, any enemy that starts its turn in the aura. Failure: The target has the Frightened condition until the start of its next turn. Success: The target is immune to this pit fiend''s aura for 24 hours.'
  - name: Legendary Resistance (4/Day)
    entries:
      - If the pit fiend fails a saving throw, it can choose to succeed instead.
  - name: Magic Resistance
    entries:
      - The pit fiend has Advantage on saving throws against spells and other magical effects.
cr: '20'
saves:
  str: 8
  dex: 8
  con: 7
  int: 6
  wis: 10
  cha: 7
skills:
  perception: 10
  persuasion: 19
alignment: lawful evil
passive_perception: 20
legendary_resistance: 4
```
