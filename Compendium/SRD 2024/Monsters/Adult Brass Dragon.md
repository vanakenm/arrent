---
archivist: true
entity_type: monster
slug: srd-2024_monster_adult-brass-dragon
name: Adult Brass Dragon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.402Z'
---

```monster
slug: srd-2024_monster_adult-brass-dragon
name: Adult Brass Dragon
edition: '2024'
source: SRD 5.2
size: huge
type: dragon
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 172
  formula: 15d12 + 75
speed:
  walk: 40
  fly: 80
  burrow: 30
abilities:
  str: 23
  dex: 10
  con: 21
  int: 14
  wis: 13
  cha: 17
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
      - The dragon makes three Rend attacks. It can replace one attack with a use of (A) Sleep Breath or (B) Spellcasting to cast Scorching Ray.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d10+STR` Slashing damage plus `dmg:1d8` Fire damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 11
        damage: 2d10+6
        damage_type: slashing
        range:
          reach: 10
        extra_damage:
          dice: 1d8
          type: fire
  - name: Fire Breath
    entries:
      - 'Dexterity Saving Throw: `dc:18`, each creature in a 60-foot-long, 5-foot-wide Line. Failure: `dmg:10d8` Fire damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Sleep Breath
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 60-foot Cone. Failure: The target has the Incapacitated condition until the end of its next turn, at which point it repeats the save. Second Failure The target has the Unconscious condition for 10 minutes. This effect ends for the target if it takes damage or a creature within 5 feet of it takes an action to wake it.'
  - name: Spellcasting
    entries:
      - |-
        The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save `dc:CHA`):

        - **At Will:** Detect Magic, Minor Illusion, Scorching Ray, Shapechange, Speak with Animals
        - **1/Day Each:** Detect Thoughts, Control Weather
reactions: []
legendary_actions:
  - name: Blazing Light
    entries:
      - The dragon uses Spellcasting to cast Scorching Ray.
  - name: Pounce
    entries:
      - The dragon moves up to half its Speed, and it makes one Rend attack.
  - name: Scorching Sands
    entries:
      - 'Dexterity Saving Throw: `dc:16`, one creature the dragon can see within 120 feet. Failure: `dmg:6d8` Fire damage, and the target''s Speed is halved until the end of its next turn. Failure or Success: The dragon can''t take this action again until the start of its next turn.'
traits:
  - name: Legendary Resistance (3/Day, or 4/Day in Lair)
    entries:
      - If the dragon fails a saving throw, it can choose to succeed instead.
cr: '13'
saves:
  str: 6
  dex: 5
  con: 5
  int: 2
  wis: 6
  cha: 3
skills:
  history: 7
  perception: 11
  persuasion: 8
  stealth: 5
alignment: chaotic good
passive_perception: 21
legendary_resistance: 3
```
