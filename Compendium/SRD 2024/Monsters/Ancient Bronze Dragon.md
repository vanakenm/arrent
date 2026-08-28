---
archivist: true
entity_type: monster
slug: srd-2024_monster_ancient-bronze-dragon
name: Ancient Bronze Dragon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.405Z'
---

```monster
slug: srd-2024_monster_ancient-bronze-dragon
name: Ancient Bronze Dragon
edition: '2024'
source: SRD 5.2
size: gargantuan
type: dragon
ac:
  - ac: 22
    from:
      - natural armor
hp:
  average: 444
  formula: 24d20 + 192
speed:
  walk: 40
  fly: 80
  swim: 40
abilities:
  str: 29
  dex: 10
  con: 27
  int: 18
  wis: 17
  cha: 25
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
      - 'Melee Attack Roll: `atk:STR+PB`, reach 15 ft. `dmg:2d8+STR` Slashing damage plus `dmg:2d8` Lightning damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 16
        damage: 2d8+9
        damage_type: slashing
        range:
          reach: 15
        extra_damage:
          dice: 2d8
          type: lightning
  - name: Lightning Breath
    entries:
      - 'Dexterity Saving Throw: `dc:23`, each creature in a 120-foot-long, 10-foot-wide Line. Failure: `dmg:15d10` Lightning damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Repulsion Breath
    entries:
      - 'Strength Saving Throw: `dc:23`, each creature in a 30-foot Cone. Failure: The target is pushed up to 60 feet straight away from the dragon and has the Prone condition.'
  - name: Spellcasting
    entries:
      - |-
        The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save `dc:CHA`, `atk:+14` with spell attacks):

        - **At Will:** Detect Magic, Guiding Bolt, Shapechange, Speak with Animals, Thaumaturgy
        - **1/Day Each:** Detect Thoughts, Control Water, Scrying, Water Breathing
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
      - 'Constitution Saving Throw: `dc:22`, each creature in a 20-foot-radius Sphere [Area of Effect]|XPHB|Sphere centered on a point the dragon can see within 120 feet. Failure: `dmg:3d8` Thunder damage, and the target has the Deafened condition until the end of its next turn.'
traits:
  - name: Amphibious
    entries:
      - The dragon can breathe air and water.
  - name: Legendary Resistance (4/Day, or 5/Day in Lair)
    entries:
      - If the dragon fails a saving throw, it can choose to succeed instead.
cr: '22'
saves:
  str: 9
  dex: 7
  con: 8
  int: 4
  wis: 10
  cha: 7
skills:
  insight: 10
  perception: 17
  stealth: 7
alignment: lawful good
passive_perception: 27
legendary_resistance: 4
```
