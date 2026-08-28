---
archivist: true
entity_type: monster
slug: srd-2024_monster_ancient-white-dragon
name: Ancient White Dragon
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.406Z'
---

```monster
slug: srd-2024_monster_ancient-white-dragon
name: Ancient White Dragon
edition: '2024'
source: SRD 5.2
size: gargantuan
type: dragon
ac:
  - ac: 20
    from:
      - natural armor
hp:
  average: 333
  formula: 18d20 + 144
speed:
  walk: 40
  fly: 80
  swim: 40
  burrow: 40
abilities:
  str: 26
  dex: 10
  con: 26
  int: 10
  wis: 13
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
  - cold
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The dragon makes three Rend attacks.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 15 ft. `dmg:2d8+STR` Slashing damage plus `dmg:2d6` Cold damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 14
        damage: 2d8+8
        damage_type: slashing
        range:
          reach: 15
        extra_damage:
          dice: 2d8
          type: cold
  - name: Cold Breath
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature in a 90-foot Cone. Failure: `dmg:14d8` Cold damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions:
  - name: Freezing Burst
    entries:
      - 'Constitution Saving Throw: `dc:20`, each creature in a 30-foot-radius Sphere [Area of Effect]|XPHB|Sphere centered on a point the dragon can see within 120 feet. Failure: `dmg:4d6` Cold damage, and the target''s Speed is 0 until the end of the target''s next turn. Failure or Success: The dragon can''t take this action again until the start of its next turn.'
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
  - name: Legendary Resistance (4/Day, or 5/Day in Lair)
    entries:
      - If the dragon fails a saving throw, it can choose to succeed instead.
cr: '20'
saves:
  str: 8
  dex: 6
  con: 8
  int: 0
  wis: 7
  cha: 4
skills:
  perception: 13
  stealth: 6
alignment: chaotic evil
passive_perception: 23
legendary_resistance: 4
```
