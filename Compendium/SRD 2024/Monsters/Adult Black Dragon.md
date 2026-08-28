---
archivist: true
entity_type: monster
slug: srd-2024_monster_adult-black-dragon
name: Adult Black Dragon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.401Z'
---

```monster
slug: srd-2024_monster_adult-black-dragon
name: Adult Black Dragon
edition: '2024'
source: SRD 5.2
size: huge
type: dragon
ac:
  - ac: 19
    from:
      - natural armor
hp:
  average: 195
  formula: 17d12 + 85
speed:
  walk: 40
  fly: 80
  swim: 40
abilities:
  str: 23
  dex: 14
  con: 21
  int: 14
  wis: 13
  cha: 19
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
      - The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast Acid Arrow (level 3 version).
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d6+STR` Slashing damage plus `dmg:1d8` Acid damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 11
        damage: 2d6+6
        damage_type: slashing
        range:
          reach: 10
        extra_damage:
          dice: 1d8
          type: acid
  - name: Acid Breath
    entries:
      - 'Dexterity Saving Throw: `dc:18`, each creature in a 60-foot-long, 5-foot-wide Line. Failure: `dmg:12d8` Acid damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Spellcasting
    entries:
      - |-
        The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save `dc:CHA`, `atk:+9` with spell attacks):

        - **At Will:** Detect Magic, Fear, Acid Arrow
        - **1/Day Each:** Speak with Dead, Vitriolic Sphere
reactions: []
legendary_actions:
  - name: Cloud of Insects
    entries:
      - 'Dexterity Saving Throw: `dc:17`, one creature the dragon can see within 120 feet. Failure: `dmg:4d10` Poison damage, and the target has Disadvantage on saving throws to maintain Concentration until the end of its next turn. Failure or Success: The dragon can''t take this action again until the start of its next turn.'
  - name: Frightful Presence
    entries:
      - The dragon uses Spellcasting to cast Fear. The dragon can't take this action again until the start of its next turn.
  - name: Pounce
    entries:
      - The dragon can move up to half its Speed, and it makes one Rend attack.
traits:
  - name: Amphibious
    entries:
      - The dragon can breathe air and water.
  - name: Legendary Resistance (3/Day, or 4/Day in Lair)
    entries:
      - If the dragon fails a saving throw, it can choose to succeed instead.
cr: '14'
saves:
  str: 6
  dex: 7
  con: 5
  int: 2
  wis: 6
  cha: 4
skills:
  perception: 11
  stealth: 7
alignment: chaotic evil
passive_perception: 21
legendary_resistance: 3
```
