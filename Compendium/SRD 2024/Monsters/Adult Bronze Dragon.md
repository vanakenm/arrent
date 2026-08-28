---
archivist: true
entity_type: monster
slug: srd-2024_monster_adult-bronze-dragon
name: Adult Bronze Dragon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.402Z'
---

```monster
slug: srd-2024_monster_adult-bronze-dragon
name: Adult Bronze Dragon
edition: '2024'
source: SRD 5.2
size: huge
type: dragon
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 212
  formula: 17d12 + 102
speed:
  walk: 40
  fly: 80
  swim: 40
abilities:
  str: 25
  dex: 10
  con: 23
  int: 16
  wis: 15
  cha: 20
senses:
  - darkvision 120 ft.
  - blindsight 60 ft.
languages:
  - Common
  - Draconic
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - lightning
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The dragon makes three Rend attacks. It can replace one attack with a use of (A) Repulsion Breath or (B) Spellcasting to cast Guiding Bolt (level 2 version).
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d8+STR` Slashing damage plus `dmg:1d10` Lightning damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 12
        damage: 2d8+7
        damage_type: slashing
        range:
          reach: 10
        extra_damage:
          dice: 1d8
          type: lightning
  - name: Lightning Breath
    entries:
      - 'Dexterity Saving Throw: `dc:19`, each creature in a 90-foot-long, 5-foot-wide Line. Failure: `dmg:10d10` Lightning damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Repulsion Breath
    entries:
      - 'Strength Saving Throw: `dc:19`, each creature in a 30-foot Cone. Failure: The target is pushed up to 60 feet straight away from the dragon and has the Prone condition.'
  - name: Spellcasting
    entries:
      - |-
        The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save `dc:17`, `atk:+10` with spell attacks):

        - **At Will:** Detect Magic, Guiding Bolt, Shapechange, Speak with Animals, Thaumaturgy
        - **1/Day Each:** Detect Thoughts, Water Breathing
reactions: []
legendary_actions:
  - name: Guiding Light
    entries:
      - The dragon uses Spellcasting to cast Guiding Bolt (level 2 version).
  - name: Pounce
    entries:
      - The dragon moves up to half its Speed, and it makes one Rend attack.
  - name: Thunderclap
    entries:
      - 'Constitution Saving Throw: `dc:17`, each creature in a 20-foot-radius Sphere [Area of Effect]|XPHB|Sphere centered on a point the dragon can see within 90 feet. Failure: `dmg:3d6` Thunder damage, and the target has the Deafened condition until the end of its next turn.'
traits:
  - name: Amphibious
    entries:
      - The dragon can breathe air and water.
  - name: Legendary Resistance (3/Day, or 4/Day in Lair)
    entries:
      - If the dragon fails a saving throw, it can choose to succeed instead.
cr: '15'
saves:
  str: 7
  dex: 5
  con: 6
  int: 3
  wis: 7
  cha: 5
skills:
  insight: 7
  perception: 12
  stealth: 5
alignment: lawful good
passive_perception: 22
legendary_resistance: 3
```
