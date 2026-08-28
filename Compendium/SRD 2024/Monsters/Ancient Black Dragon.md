---
archivist: true
entity_type: monster
slug: srd-2024_monster_ancient-black-dragon
name: Ancient Black Dragon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.404Z'
---

```monster
slug: srd-2024_monster_ancient-black-dragon
name: Ancient Black Dragon
edition: '2024'
source: SRD 5.2
size: gargantuan
type: dragon
ac:
  - ac: 22
    from:
      - natural armor
hp:
  average: 367
  formula: 21d20 + 147
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
  - acid
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast Acid Arrow (level 4 version).
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 15 ft. `dmg:2d8+STR` Slashing damage plus `dmg:2d8` Acid damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 15
        damage: 2d8+8
        damage_type: slashing
        range:
          reach: 15
        extra_damage:
          dice: 2d8
          type: acid
  - name: Acid Breath
    entries:
      - 'Dexterity Saving Throw: `dc:22`, each creature in a 90-foot-long, 10-foot-wide Line. Failure: `dmg:15d8` Acid damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Spellcasting
    entries:
      - |-
        The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save `dc:CHA`, `atk:+13` with spell attacks):

        - **At Will:** Detect Magic, Fear, Acid Arrow
        - **1/Day Each:** Create Undead, Speak with Dead, Vitriolic Sphere
reactions: []
legendary_actions:
  - name: Cloud of Insects
    entries:
      - 'Dexterity Saving Throw: `dc:21`, one creature the dragon can see within 120 feet. Failure: `dmg:6d10` Poison damage, and the target has Disadvantage on saving throws to maintain Concentration until the end of its next turn. Failure or Success: The dragon can''t take this action again until the start of its next turn.'
  - name: Frightful Presence
    entries:
      - The dragon uses Spellcasting to cast Fear. The dragon can't take this action again until the start of its next turn.
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
cr: '21'
saves:
  str: 8
  dex: 9
  con: 7
  int: 3
  wis: 9
  cha: 6
skills:
  perception: 16
  stealth: 9
alignment: chaotic evil
passive_perception: 26
legendary_resistance: 4
```
