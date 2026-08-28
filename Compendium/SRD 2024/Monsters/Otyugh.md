---
archivist: true
entity_type: monster
slug: srd-2024_monster_otyugh
name: Otyugh
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.437Z'
---

```monster
slug: srd-2024_monster_otyugh
name: Otyugh
edition: '2024'
source: SRD 5.2
size: large
type: aberration
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 104
  formula: 11d10 + 44
speed:
  walk: 30
abilities:
  str: 16
  dex: 11
  con: 19
  int: 6
  wis: 13
  cha: 6
senses:
  - darkvision 120 ft.
languages:
  - Otyugh; telepathy 120 ft. (doesn't allow the receiving creature to respond telepathically)
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The otyugh makes one Bite attack and two Tentacle attacks.
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d8+STR` Piercing damage, and the target has the Poisoned condition. Whenever the Poisoned target finishes a Long Rest, it is subjected to the following effect. Constitution Saving Throw: `dc:CON`. Failure: The target''s Hit Point maximum decreases by 5 (`dice:1d10`) and doesn''t return to normal until the Poisoned condition ends on the target. Success: The Poisoned condition ends.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 6
        damage: 2d8+3
        damage_type: piercing
        range:
          reach: 5
  - name: Tentacle
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d8+STR` Piercing damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape `dc:13`) from one of two tentacles.'
    attacks:
      - name: Tentacle attack
        type: melee
        bonus: 6
        damage: 2d8+3
        damage_type: piercing
        range:
          reach: 10
  - name: Tentacle Slam
    entries:
      - 'Constitution Saving Throw: `dc:14`, each creature Grappled by the otyugh. Failure: `dmg:3d8+STR` Bludgeoning damage, and the target has the Stunned condition until the start of the otyugh''s next turn. Success: Half damage only.'
reactions: []
legendary_actions: []
traits: []
cr: '5'
saves:
  str: 3
  dex: 0
  con: 7
  int: -2
  wis: 1
  cha: -2
alignment: neutral
passive_perception: 11
```
