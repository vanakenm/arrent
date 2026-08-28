---
archivist: true
entity_type: monster
slug: srd-2024_monster_adult-copper-dragon
name: Adult Copper Dragon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.402Z'
---

```monster
slug: srd-2024_monster_adult-copper-dragon
name: Adult Copper Dragon
edition: '2024'
source: SRD 5.2
size: huge
type: dragon
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 184
  formula: 16d12 + 80
speed:
  walk: 40
  fly: 80
  climb: 40
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
  - acid
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The dragon makes three Rend attacks. It can replace one attack with a use of (A) Slowing Breath or (B) Spellcasting to cast Mind Spike (level 4 version).
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d10+STR` Slashing damage plus `dmg:1d8` Acid damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 11
        damage: 2d10+6
        damage_type: slashing
        range:
          reach: 10
        extra_damage:
          dice: 1d8
          type: acid
  - name: Acid Breath
    entries:
      - 'Dexterity Saving Throw: `dc:18`, each creature in an 60-foot-long, 5-foot-wide Line. Failure: `dmg:12d8` Acid damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Slowing Breath
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 60-foot Cone. Failure: The target can''t take Reactions; its Speed is halved; and it can take either an action or a Bonus Action on its turn, not both. This effect lasts until the end of its next turn.'
  - name: Spellcasting
    entries:
      - |-
        The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save `dc:CHA`):

        - **At Will:** Detect Magic, Mind Spike, Minor Illusion, Shapechange
        - **1/Day Each:** Greater Restoration, Major Image
reactions: []
legendary_actions:
  - name: Giggling Magic
    entries:
      - 'Charisma Saving Throw: `dc:CHA`, one creature the dragon can see within 90 feet. Failure: `dmg:7d6` Psychic damage. Until the end of its next turn, the target rolls `dice:1d6` whenever it makes an ability check or attack roll and subtracts the number rolled from the D20 Test. Failure or Success: The dragon can''t take this action again until the start of its next turn.'
  - name: Mind Jolt
    entries:
      - The dragon uses Spellcasting to cast Mind Spike (level 4 version). The dragon can't take this action again until the start of its next turn.
  - name: Pounce
    entries:
      - The dragon moves up to half its Speed, and it makes one Rend attack.
traits:
  - name: Legendary Resistance (3/Day, or 4/Day in Lair)
    entries:
      - If the dragon fails a saving throw, it can choose to succeed instead.
cr: '14'
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
  stealth: 6
alignment: chaotic good
passive_perception: 22
legendary_resistance: 3
```
