---
archivist: true
entity_type: monster
slug: srd-2024_monster_ancient-gold-dragon
name: Ancient Gold Dragon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.405Z'
---

```monster
slug: srd-2024_monster_ancient-gold-dragon
name: Ancient Gold Dragon
edition: '2024'
source: SRD 5.2
size: gargantuan
type: dragon
ac:
  - ac: 22
    from:
      - natural armor
hp:
  average: 546
  formula: 28d20 + 252
speed:
  walk: 40
  fly: 80
  swim: 40
abilities:
  str: 30
  dex: 14
  con: 29
  int: 18
  wis: 17
  cha: 28
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
      - The dragon makes three Rend attacks. It can replace one attack with a use of (A) Spellcasting to cast Guiding Bolt (level 4 version) or (B) Weakening Breath.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:+17`, reach 15 ft. `dmg:2d8+STR` Slashing damage plus `dmg:2d8` Fire damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 17
        damage: 2d8+10
        damage_type: slashing
        range:
          reach: 15
        extra_damage:
          dice: 2d8
          type: fire
  - name: Fire Breath
    entries:
      - 'Dexterity Saving Throw: `dc:24`, each creature in a 90-foot Cone. Failure: `dmg:13d10` Fire damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Weakening Breath
    entries:
      - 'Strength Saving Throw: `dc:24`, each creature that isn''t currently affected by this breath in a 90-foot Cone. Failure: The target has Disadvantage on Strength-based D20 Test and subtracts 5 (`dice:1d10`) from its damage rolls. It repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically.'
  - name: Spellcasting
    entries:
      - |-
        The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save `dc:CHA`, `atk:+16` with spell attacks):

        - **At Will:** Detect Magic, Guiding Bolt, Shapechange
        - **1/Day Each:** Flame Strike, Word of Recall, Zone of Truth
reactions: []
legendary_actions:
  - name: Banish
    entries:
      - 'Charisma Saving Throw: `dc:CHA`, one creature the dragon can see within 120 feet. Failure: `dmg:7d6` Force damage, and the target has the Incapacitated condition and is transported to a harmless demiplane until the start of the dragon''s next turn, at which point it reappears in an unoccupied space of the dragon''s choice within 120 feet of the dragon. Failure or Success: The dragon can''t take this action again until the start of its next turn.'
  - name: Guiding Light
    entries:
      - The dragon uses Spellcasting to cast Guiding Bolt (level 4 version).
  - name: Pounce
    entries:
      - The dragon moves up to half its Speed, and it makes one Rend attack.
traits:
  - name: Amphibious
    entries:
      - The dragon can breathe air and water.
  - name: Legendary Resistance (4/Day, or 5/Day in Lair)
    entries:
      - If the dragon fails a saving throw, it can choose to succeed instead.
cr: '24'
saves:
  str: 10
  dex: 9
  con: 9
  int: 4
  wis: 10
  cha: 9
skills:
  insight: 10
  perception: 17
  persuasion: 16
  stealth: 9
alignment: lawful good
passive_perception: 27
legendary_resistance: 4
```
