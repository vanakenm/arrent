---
archivist: true
entity_type: monster
slug: srd-2024_monster_adult-blue-dragon
name: Adult Blue Dragon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.401Z'
---

```monster
slug: srd-2024_monster_adult-blue-dragon
name: Adult Blue Dragon
edition: '2024'
source: SRD 5.2
size: huge
type: dragon
ac:
  - ac: 19
    from:
      - natural armor
hp:
  average: 212
  formula: 17d12 + 102
speed:
  walk: 40
  fly: 80
  burrow: 30
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
      - The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast Shatter.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d8+STR` Slashing damage plus `dmg:1d10` Lightning damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 12
        damage: 2d8+7
        damage_type: lightning
        range:
          reach: 10
  - name: Lightning Breath
    entries:
      - 'Dexterity Saving Throw: `dc:19`, each creature in a 90-foot-long, 5-foot-wide Line. Failure: `dmg:11d10` Lightning damage. Success: Half damage.'
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
      - The dragon uses Spellcasting to cast Shatter. The dragon can't take this action again until the start of its next turn.
  - name: Tail Swipe
    entries:
      - The dragon makes one Rend attack.
traits:
  - name: Legendary Resistance (3/Day, or 4/Day in Lair)
    entries:
      - If the dragon fails a saving throw, it can choose to succeed instead.
cr: '16'
saves:
  str: 7
  dex: 5
  con: 6
  int: 3
  wis: 7
  cha: 5
skills:
  perception: 12
  stealth: 5
alignment: lawful evil
passive_perception: 22
legendary_resistance: 3
```
