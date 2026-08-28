---
archivist: true
entity_type: monster
slug: srd-2024_monster_ancient-blue-dragon
name: Ancient Blue Dragon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.404Z'
---

```monster
slug: srd-2024_monster_ancient-blue-dragon
name: Ancient Blue Dragon
edition: '2024'
source: SRD 5.2
size: gargantuan
type: dragon
ac:
  - ac: 22
    from:
      - natural armor
hp:
  average: 481
  formula: 26d20 + 208
speed:
  walk: 40
  fly: 80
  burrow: 40
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
      - The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast Shatter (level 3 version).
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 15 ft. `dmg:2d8+STR` Slashing damage plus `dmg:2d10` Lightning damage.'
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
      - 'Dexterity Saving Throw: `dc:23`, each creature in a 120-foot-long, 10-foot-wide Line. Failure: `dmg:16d10` Lightning damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Spellcasting
    entries:
      - |-
        The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save `dc:CHA`):

        - **At Will:** Detect Magic, Invisibility, Mage Hand, Shatter
        - **1/Day Each:** Scrying, Sending
reactions: []
legendary_actions:
  - name: Cloaked Flight
    entries:
      - The dragon uses Spellcasting to cast Invisibility on itself, and it can fly up to half its Fly Speed. The dragon can't take this action again until the start of its next turn.
  - name: Sonic Boom
    entries:
      - The dragon uses Spellcasting to cast Shatter (level 3 version). The dragon can't take this action again until the start of its next turn.
  - name: Tail Swipe
    entries:
      - The dragon makes one Rend attack.
traits:
  - name: Legendary Resistance (4/Day, or 5/Day in Lair)
    entries:
      - If the dragon fails a saving throw, it can choose to succeed instead.
cr: '23'
saves:
  str: 9
  dex: 7
  con: 8
  int: 4
  wis: 10
  cha: 7
skills:
  perception: 17
  stealth: 7
alignment: lawful evil
passive_perception: 27
legendary_resistance: 4
```
