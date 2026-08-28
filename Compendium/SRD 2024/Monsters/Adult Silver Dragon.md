---
archivist: true
entity_type: monster
slug: srd-2024_monster_adult-silver-dragon
name: Adult Silver Dragon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.403Z'
---

```monster
slug: srd-2024_monster_adult-silver-dragon
name: Adult Silver Dragon
edition: '2024'
source: SRD 5.2
size: huge
type: dragon
ac:
  - ac: 19
    from:
      - natural armor
hp:
  average: 216
  formula: 16d12 + 112
speed:
  walk: 40
  fly: 80
abilities:
  str: 27
  dex: 10
  con: 25
  int: 16
  wis: 13
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
  - cold
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The dragon makes three Rend attacks. It can replace one attack with a use of (A) Paralyzing Breath or (B) Spellcasting to cast Ice Knife.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d8+STR` Slashing damage plus `dmg:1d8` Cold damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 13
        damage: 2d8+8
        damage_type: slashing
        range:
          reach: 10
        extra_damage:
          dice: 1d8
          type: cold
  - name: Cold Breath
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 60-foot Cone. Failure: `dmg:12d8` Cold damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Paralyzing Breath
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 60-foot Cone. First Failure The target has the Incapacitated condition until the end of its next turn, when it repeats the save. Second Failure The target has the Paralyzed condition, and it repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically.'
  - name: Spellcasting
    entries:
      - |-
        The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save `dc:CHA`, `atk:+11` with spell attacks):

        - **At Will:** Detect Magic, Hold Monster, Ice Knife, Shapechange
        - **1/Day Each:** Ice Storm, Zone of Truth
reactions: []
legendary_actions:
  - name: Chill
    entries:
      - The dragon uses Spellcasting to cast Hold Monster. The dragon can't take this action again until the start of its next turn.
  - name: Cold Gale
    entries:
      - 'Dexterity Saving Throw: `dc:19`, each creature in a 60-foot-long, 10-foot-wide Line. Failure: `dmg:4d6` Cold damage, and the target is pushed up to 30 feet straight away from the dragon. Success: Half damage only. Failure or Success: The dragon can''t take this action again until the start of its next turn.'
  - name: Pounce
    entries:
      - The dragon moves up to half its Speed, and it makes one Rend attack.
traits:
  - name: Legendary Resistance (3/Day, or 4/Day in Lair)
    entries:
      - If the dragon fails a saving throw, it can choose to succeed instead.
cr: '16'
saves:
  str: 8
  dex: 5
  con: 7
  int: 3
  wis: 6
  cha: 6
skills:
  history: 8
  perception: 11
  stealth: 5
alignment: lawful good
passive_perception: 21
legendary_resistance: 3
```
