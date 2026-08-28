---
archivist: true
entity_type: monster
slug: srd-2024_monster_ancient-red-dragon
name: Ancient Red Dragon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.406Z'
---

```monster
slug: srd-2024_monster_ancient-red-dragon
name: Ancient Red Dragon
edition: '2024'
source: SRD 5.2
size: gargantuan
type: dragon
ac:
  - ac: 22
    from:
      - natural armor
hp:
  average: 507
  formula: 26d20 + 234
speed:
  walk: 40
  fly: 80
  climb: 40
abilities:
  str: 30
  dex: 10
  con: 29
  int: 18
  wis: 15
  cha: 27
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
      - The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast Scorching Ray (level 3 version).
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 15 ft. `dmg:2d8+STR` Slashing damage plus `dmg:3d6` Fire damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 17
        damage: 2d8+10
        damage_type: slashing
        range:
          reach: 15
        extra_damage:
          dice: 3d6
          type: fire
  - name: Fire Breath
    entries:
      - 'Dexterity Saving Throw: `dc:24`, each creature in a 90-foot Cone. Failure: `dmg:26d6` Fire damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Spellcasting
    entries:
      - |-
        The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save `dc:CHA`, `atk:+15` with spell attacks):

        - **At Will:** Command, Detect Magic, Scorching Ray
        - **1/Day Each:** Fireball, Scrying
reactions: []
legendary_actions:
  - name: Commanding Presence
    entries:
      - The dragon uses Spellcasting to cast Command (level 2 version). The dragon can't take this action again until the start of its next turn.
  - name: Fiery Rays
    entries:
      - The dragon uses Spellcasting to cast Scorching Ray (level 3 version). The dragon can't take this action again until the start of its next turn.
  - name: Pounce
    entries:
      - The dragon moves up to half its Speed, and it makes one Rend attack.
traits:
  - name: Legendary Resistance (4/Day, or 5/Day in Lair)
    entries:
      - If the dragon fails a saving throw, it can choose to succeed instead.
cr: '24'
saves:
  str: 10
  dex: 7
  con: 9
  int: 4
  wis: 9
  cha: 8
skills:
  perception: 16
  stealth: 7
alignment: chaotic evil
passive_perception: 26
legendary_resistance: 4
```
