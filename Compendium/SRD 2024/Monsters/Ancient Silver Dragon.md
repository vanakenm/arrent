---
archivist: true
entity_type: monster
slug: srd-2024_monster_ancient-silver-dragon
name: Ancient Silver Dragon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.406Z'
---

```monster
slug: srd-2024_monster_ancient-silver-dragon
name: Ancient Silver Dragon
edition: '2024'
source: SRD 5.2
size: gargantuan
type: dragon
ac:
  - ac: 22
    from:
      - natural armor
hp:
  average: 468
  formula: 24d20 + 216
speed:
  walk: 40
  fly: 80
abilities:
  str: 30
  dex: 10
  con: 29
  int: 18
  wis: 15
  cha: 26
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
      - The dragon makes three Rend attacks. It can replace one attack with a use of (A) Paralyzing Breath or (B) Spellcasting to cast Ice Knife (level 2 version).
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 15 ft. `dmg:2d8+STR` Slashing damage plus `dmg:2d8` Cold damage.'
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
          type: cold
  - name: Cold Breath
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 90-foot Cone. Failure: `dmg:15d8` Cold damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Paralyzing Breath
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 90-foot Cone. First Failure The target has the Incapacitated condition until the end of its next turn, when it repeats the save. Second Failure The target has the Paralyzed condition, and it repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically.'
  - name: Spellcasting
    entries:
      - |-
        The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save `dc:CHA`, `atk:+15` with spell attacks):

        - **At Will:** Detect Magic, Hold Monster, Ice Knife, Shapechange
        - **1/Day Each:** Control Weather, Ice Storm, Teleport, Zone of Truth
reactions: []
legendary_actions:
  - name: Chill
    entries:
      - The dragon uses Spellcasting to cast Hold Monster. The dragon can't take this action again until the start of its next turn.
  - name: Cold Gale
    entries:
      - 'Dexterity Saving Throw: `dc:23`, each creature in a 60-foot-long, 10-foot-wide Line. Failure: `dmg:4d6` Cold damage, and the target is pushed up to 30 feet straight away from the dragon. Success: Half damage only. Failure or Success: The dragon can''t take this action again until the start of its next turn.'
  - name: Pounce
    entries:
      - The dragon moves up to half its Speed, and it makes one Rend attack.
traits:
  - name: Legendary Resistance (4/Day, or 5/Day in Lair)
    entries:
      - If the dragon fails a saving throw, it can choose to succeed instead.
cr: '23'
saves:
  str: 10
  dex: 7
  con: 9
  int: 4
  wis: 9
  cha: 8
skills:
  history: 11
  perception: 16
  stealth: 7
alignment: lawful good
passive_perception: 26
legendary_resistance: 4
```
