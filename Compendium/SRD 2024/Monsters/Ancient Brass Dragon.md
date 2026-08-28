---
archivist: true
entity_type: monster
slug: srd-2024_monster_ancient-brass-dragon
name: Ancient Brass Dragon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.404Z'
---

```monster
slug: srd-2024_monster_ancient-brass-dragon
name: Ancient Brass Dragon
edition: '2024'
source: SRD 5.2
size: gargantuan
type: dragon
ac:
  - ac: 20
    from:
      - natural armor
hp:
  average: 332
  formula: 19d20 + 133
speed:
  walk: 40
  fly: 80
  burrow: 40
abilities:
  str: 27
  dex: 10
  con: 25
  int: 16
  wis: 15
  cha: 22
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
      - The dragon makes three Rend attacks. It can replace one attack with a use of (A) Sleep Breath or (B) Spellcasting to cast Scorching Ray (level 3 version).
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 15 ft. `dmg:2d10+STR` Slashing damage plus `dmg:2d6` Fire damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 14
        damage: 2d10+8
        damage_type: slashing
        range:
          reach: 15
        extra_damage:
          dice: 2d6
          type: fire
  - name: Fire Breath
    entries:
      - 'Dexterity Saving Throw: `dc:21`, each creature in a 90-foot-long, 5-foot-wide Line. Failure: `dmg:13d8` Fire damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Sleep Breath
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 90-foot Cone. Failure: The target has the Incapacitated condition until the end of its next turn, at which point it repeats the save. Second Failure The target has the Unconscious condition for 10 minutes. This effect ends for the target if it takes damage or a creature within 5 feet of it takes an action to wake it.'
  - name: Spellcasting
    entries:
      - |-
        The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save `dc:CHA`):

        - **At Will:** Detect Magic, Minor Illusion, Scorching Ray, Shapechange, Speak with Animals
        - **1/Day Each:** Control Weather, Detect Thoughts
reactions: []
legendary_actions:
  - name: Blazing Light
    entries:
      - The dragon uses Spellcasting to cast Scorching Ray (level 3 version).
  - name: Pounce
    entries:
      - The dragon moves up to half its Speed, and it makes one Rend attack.
  - name: Scorching Sands
    entries:
      - 'Dexterity Saving Throw: `dc:20`, one creature the dragon can see within 120 feet. Failure: `dmg:8d8` Fire damage, and the target''s Speed is halved until the end of its next turn. Failure or Success: The dragon can''t take this action again until the start of its next turn.'
traits:
  - name: Legendary Resistance (4/Day, or 5/Day in Lair)
    entries:
      - If the dragon fails a saving throw, it can choose to succeed instead.
cr: '20'
saves:
  str: 8
  dex: 6
  con: 7
  int: 3
  wis: 8
  cha: 6
skills:
  history: 9
  perception: 14
  persuasion: 12
  stealth: 6
alignment: chaotic good
passive_perception: 24
legendary_resistance: 4
```
