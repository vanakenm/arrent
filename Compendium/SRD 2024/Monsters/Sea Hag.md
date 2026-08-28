---
archivist: true
entity_type: monster
slug: srd-2024_monster_sea-hag
name: Sea Hag
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.442Z'
---

```monster
slug: srd-2024_monster_sea-hag
name: Sea Hag
edition: '2024'
source: SRD 5.2
size: medium
type: fey
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 52
  formula: 7d8 + 21
speed:
  walk: 30
  swim: 40
abilities:
  str: 16
  dex: 13
  con: 16
  int: 12
  wis: 12
  cha: 13
senses:
  - darkvision 60 ft.
languages:
  - Common
  - Giant
  - Primordial (Aquan)
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Claw
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d6+STR` Slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 5
        damage: 2d6+3
        damage_type: slashing
        range:
          reach: 5
  - name: Death Glare
    entries:
      - 'Wisdom Saving Throw: `dc:WIS`, one Frightened creature the hag can see within 30 feet. Failure: If the target has 20 Hit Points or fewer, it drops to 0 Hit Points. Otherwise, the target takes `dmg:3d8` Psychic damage.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Illusory Appearance
    entries:
      - The hag casts Disguise Self, using Constitution as the spellcasting ability (spell save `dc:CON`). The spell's duration is 24 hours.
reactions: []
legendary_actions: []
traits:
  - name: Amphibious
    entries:
      - The hag can breathe air and water.
  - name: Vile Appearance
    entries:
      - 'Wisdom Saving Throw: `dc:WIS`, any Beast or Humanoid that starts its turn within 30 feet of the hag and can see the hag''s true form. Failure: The target has the Frightened condition until the start of its next turn. Success: The target is immune to this hag''s Vile Appearance for 24 hours.'
cr: '2'
saves:
  str: 3
  dex: 1
  con: 3
  int: 1
  wis: 1
  cha: 1
alignment: chaotic evil
passive_perception: 11
```
