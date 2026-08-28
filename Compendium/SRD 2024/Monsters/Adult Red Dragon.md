---
archivist: true
entity_type: monster
slug: srd-2024_monster_adult-red-dragon
name: Adult Red Dragon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.403Z'
---

```monster
slug: srd-2024_monster_adult-red-dragon
name: Adult Red Dragon
edition: '2024'
source: SRD 5.2
size: huge
type: dragon
ac:
  - ac: 19
    from:
      - natural armor
hp:
  average: 256
  formula: 19d12 + 133
speed:
  walk: 40
  fly: 80
  climb: 40
abilities:
  str: 27
  dex: 10
  con: 25
  int: 16
  wis: 13
  cha: 23
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
      - The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast Scorching Ray.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:1d10+STR` Slashing damage plus `dmg:2d4` Fire damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 14
        damage: 1d10+8
        damage_type: slashing
        range:
          reach: 10
        extra_damage:
          dice: 2d4
          type: fire
  - name: Fire Breath
    entries:
      - 'Dexterity Saving Throw: `dc:21`, each creature in a 60-foot Cone. Failure: `dmg:17d6` Fire damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Spellcasting
    entries:
      - |-
        The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save `dc:CHA`, `atk:+12` with spell attacks):

        - **At Will:** Command, Detect Magic, Scorching Ray
        - **1/Day Each:** Fireball
reactions: []
legendary_actions:
  - name: Commanding Presence
    entries:
      - The dragon uses Spellcasting to cast Command (level 2 version). The dragon can't take this action again until the start of its next turn.
  - name: Fiery Rays
    entries:
      - The dragon uses Spellcasting to cast Scorching Ray. The dragon can't take this action again until the start of its next turn.
  - name: Pounce
    entries:
      - The dragon moves up to half its Speed, and it makes one Rend attack.
traits:
  - name: Legendary Resistance (3/Day, or 4/Day in Lair)
    entries:
      - If the dragon fails a saving throw, it can choose to succeed instead.
cr: '17'
saves:
  str: 8
  dex: 6
  con: 7
  int: 3
  wis: 7
  cha: 6
skills:
  perception: 13
  stealth: 6
alignment: chaotic evil
passive_perception: 23
legendary_resistance: 3
```
