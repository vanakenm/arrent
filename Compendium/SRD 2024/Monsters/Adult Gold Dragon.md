---
archivist: true
entity_type: monster
slug: srd-2024_monster_adult-gold-dragon
name: Adult Gold Dragon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.402Z'
---

```monster
slug: srd-2024_monster_adult-gold-dragon
name: Adult Gold Dragon
edition: '2024'
source: SRD 5.2
size: huge
type: dragon
ac:
  - ac: 19
    from:
      - natural armor
hp:
  average: 243
  formula: 18d12 + 126
speed:
  walk: 40
  fly: 80
  swim: 40
abilities:
  str: 27
  dex: 14
  con: 25
  int: 16
  wis: 15
  cha: 24
senses:
  - darkvision 120 ft.
  - blindsight 60 ft.
languages:
  - Common
  - Draconic
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - fire
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The dragon makes three Rend attacks. It can replace one attack with a use of (A) Spellcasting to cast Guiding Bolt (level 2 version) or (B) Weakening Breath.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d8+STR` Slashing damage plus `dmg:1d8` Fire damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 14
        damage: 2d8+8
        damage_type: slashing
        range:
          reach: 10
        extra_damage:
          dice: 1d8
          type: fire
  - name: Fire Breath
    entries:
      - 'Dexterity Saving Throw: `dc:21`, each creature in a 60-foot Cone. Failure: `dmg:12d10` Fire damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Weakening Breath
    entries:
      - 'Strength Saving Throw: `dc:21`, each creature that isn''t currently affected by this breath in a 60-foot Cone. Failure: The target has Disadvantage on Strength-based D20 Test and subtracts 3 (`dice:1d6`) from its damage rolls. It repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically.'
  - name: Spellcasting
    entries:
      - |-
        The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save `dc:CHA`, `atk:+13` with spell attacks):

        - **At Will:** Detect Magic, Guiding Bolt, Shapechange
        - **1/Day Each:** Flame Strike, Zone of Truth
reactions: []
legendary_actions:
  - name: Banish
    entries:
      - 'Charisma Saving Throw: `dc:CHA`, one creature the dragon can see within 120 feet. Failure: `dmg:3d6` Force damage, and the target has the Incapacitated condition and is transported to a harmless demiplane until the start of the dragon''s next turn, at which point it reappears in an unoccupied space of the dragon''s choice within 120 feet of the dragon. Failure or Success: The dragon can''t take this action again until the start of its next turn.'
  - name: Guiding Light
    entries:
      - The dragon uses Spellcasting to cast Guiding Bolt (level 2 version).
  - name: Pounce
    entries:
      - The dragon moves up to half its Speed, and it makes one Rend attack.
traits:
  - name: Amphibious
    entries:
      - The dragon can breathe air and water.
  - name: Legendary Resistance (3/Day, or 4/Day in Lair)
    entries:
      - If the dragon fails a saving throw, it can choose to succeed instead.
cr: '17'
saves:
  str: 8
  dex: 8
  con: 7
  int: 3
  wis: 8
  cha: 7
skills:
  insight: 8
  perception: 14
  persuasion: 13
  stealth: 8
alignment: lawful good
passive_perception: 24
legendary_resistance: 3
```
