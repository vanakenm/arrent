---
archivist: true
entity_type: monster
slug: srd-2024_monster_ancient-green-dragon
name: Ancient Green Dragon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.405Z'
---

```monster
slug: srd-2024_monster_ancient-green-dragon
name: Ancient Green Dragon
edition: '2024'
source: SRD 5.2
size: gargantuan
type: dragon
ac:
  - ac: 21
    from:
      - natural armor
hp:
  average: 402
  formula: 23d20 + 161
speed:
  walk: 40
  fly: 80
  swim: 40
abilities:
  str: 27
  dex: 12
  con: 25
  int: 20
  wis: 17
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
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast Mind Spike (level 5 version).
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 15 ft. `dmg:2d8+STR` Slashing damage plus `dmg:3d6` Poison damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 15
        damage: 2d8+8
        damage_type: slashing
        range:
          reach: 15
        extra_damage:
          dice: 3d6
          type: poison
  - name: Poison Breath
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 90-foot Cone. Failure: `dmg:22d6` Poison damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Spellcasting
    entries:
      - |-
        The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save `dc:CHA`):

        - **At Will:** Detect Magic, Mind Spike
        - **1/Day Each:** Geas, Modify Memory
reactions: []
legendary_actions:
  - name: Mind Invasion
    entries:
      - The dragon uses Spellcasting to cast Mind Spike (level 5 version).
  - name: Noxious Miasma
    entries:
      - 'Constitution Saving Throw: `dc:21`, each creature in a 30-foot-radius Sphere [Area of Effect]|XPHB|Sphere centered on a point the dragon can see within 90 feet. Failure: `dmg:5d6` Poison damage, and the target takes a -2 penalty to AC until the end of its next turn. Failure or Success: The dragon can''t take this action again until the start of its next turn.'
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
cr: '22'
saves:
  str: 8
  dex: 8
  con: 7
  int: 5
  wis: 10
  cha: 6
skills:
  deception: 13
  perception: 17
  persuasion: 13
  stealth: 8
alignment: lawful evil
passive_perception: 27
legendary_resistance: 4
```
