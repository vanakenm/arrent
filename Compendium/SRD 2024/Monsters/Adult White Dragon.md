---
archivist: true
entity_type: monster
slug: srd-2024_monster_adult-white-dragon
name: Adult White Dragon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.403Z'
---

```monster
slug: srd-2024_monster_adult-white-dragon
name: Adult White Dragon
edition: '2024'
source: SRD 5.2
size: huge
type: dragon
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 200
  formula: 16d12 + 96
speed:
  walk: 40
  fly: 80
  swim: 40
  burrow: 30
abilities:
  str: 22
  dex: 10
  con: 22
  int: 8
  wis: 12
  cha: 12
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
      - The dragon makes three Rend attacks.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d6+STR` Slashing damage plus `dmg:1d8` Cold damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 11
        damage: 2d6+6
        damage_type: slashing
        range:
          reach: 10
        extra_damage:
          dice: 1d8
          type: cold
  - name: Cold Breath
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 60-foot Cone. Failure: `dmg:12d8` Cold damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions:
  - name: Freezing Burst
    entries:
      - 'Constitution Saving Throw: `dc:14`, each creature in a 30-foot-radius Sphere [Area of Effect]|XPHB|Sphere centered on a point the dragon can see within 120 feet. Failure: `dmg:2d6` Cold damage, and the target''s Speed is 0 until the end of the target''s next turn. Failure or Success: The dragon can''t take this action again until the start of its next turn.'
  - name: Pounce
    entries:
      - The dragon moves up to half its Speed, and it makes one Rend attack.
  - name: Frightful Presence
    entries:
      - The dragon casts Fear, requiring no Material components and using Charisma as the spellcasting ability (spell save `dc:CHA`). The dragon can't take this action again until the start of its next turn.
traits:
  - name: Ice Walk
    entries:
      - The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, Difficult Terrain composed of ice or snow doesn't cost it extra movement.
  - name: Legendary Resistance (3/Day, or 4/Day in Lair)
    entries:
      - If the dragon fails a saving throw, it can choose to succeed instead.
cr: '13'
saves:
  str: 6
  dex: 5
  con: 6
  int: -1
  wis: 6
  cha: 1
skills:
  perception: 11
  stealth: 5
alignment: chaotic evil
passive_perception: 21
legendary_resistance: 3
```
