---
archivist: true
entity_type: monster
slug: srd-2024_monster_adult-green-dragon
name: Adult Green Dragon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.403Z'
---

```monster
slug: srd-2024_monster_adult-green-dragon
name: Adult Green Dragon
edition: '2024'
source: SRD 5.2
size: huge
type: dragon
ac:
  - ac: 19
    from:
      - natural armor
hp:
  average: 207
  formula: 18d12 + 90
speed:
  walk: 40
  fly: 80
  swim: 40
abilities:
  str: 23
  dex: 12
  con: 21
  int: 18
  wis: 15
  cha: 18
senses:
  - darkvision 120 ft.
  - blindsight 60 ft.
languages:
  - Common
  - Draconic
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast Mind Spike (level 3 version).
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d8+STR` Slashing damage plus `dmg:2d6` Poison damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 11
        damage: 2d8+6
        damage_type: slashing
        range:
          reach: 10
        extra_damage:
          dice: 3d6
          type: poison
  - name: Poison Breath
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 60-foot Cone. Failure: `dmg:16d6` Poison damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Spellcasting
    entries:
      - |-
        The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save `dc:CHA`):
        - **At Will:** Detect Magic, Mind Spike
        - **1/Day Each:** Geas
reactions: []
legendary_actions:
  - name: Mind Invasion
    entries:
      - The dragon uses Spellcasting to cast Mind Spike (level 3 version).
  - name: Noxious Miasma
    entries:
      - 'Constitution Saving Throw: `dc:17`, each creature in a 20-foot-radius Sphere [Area of Effect]|XPHB|Sphere centered on a point the dragon can see within 90 feet. Failure: `dmg:2d6` Poison damage, and the target takes a -2 penalty to AC until the end of its next turn. Failure or Success: The dragon can''t take this action again until the start of its next turn.'
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
cr: '15'
saves:
  str: 6
  dex: 6
  con: 5
  int: 4
  wis: 7
  cha: 4
skills:
  deception: 9
  perception: 12
  persuasion: 9
  stealth: 6
alignment: lawful evil
passive_perception: 22
legendary_resistance: 3
```
