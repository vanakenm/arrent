---
archivist: true
entity_type: monster
slug: srd-2024_monster_gelatinous-cube
name: Gelatinous Cube
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.420Z'
---

```monster
slug: srd-2024_monster_gelatinous-cube
name: Gelatinous Cube
edition: '2024'
source: SRD 5.2
size: large
type: ooze
ac:
  - ac: 6
    from:
      - natural armor
hp:
  average: 63
  formula: 6d10 + 30
speed:
  walk: 15
abilities:
  str: 14
  dex: 3
  con: 20
  int: 1
  wis: 6
  cha: 1
senses:
  - blindsight 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - acid
condition_immunities:
  - blinded
  - charmed
  - deafened
  - exhaustion
  - frightened
  - prone
actions:
  - name: Pseudopod
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:3d6+STR` Acid damage.'
    attacks:
      - name: Pseudopod attack
        type: melee
        bonus: 4
        damage: 3d6+2
        damage_type: acid
        range:
          reach: 5
  - name: Engulf
    entries:
      - 'The cube moves up to its Speed without provoking Opportunity Attacks. The cube can move through the spaces of Large or smaller creatures if it has room inside itself to contain them (see the Ooze Cube [Area of Effect]|XPHB|Cube trait). Dexterity Saving Throw: `dc:12`, each creature whose space the cube enters for the first time during this move. Failure: `dmg:3d6` Acid damage, and the target is engulfed. An engulfed target is suffocating, can''t cast spells with a Verbal component, has the Restrained condition, and takes `dmg:3d6` Acid damage at the start of each of the cube''s turns. When the cube moves, the engulfed target moves with it. An engulfed target can try to escape by taking an action to make a `dc:STR` Strength (Athletics) check. On a successful check, the target escapes and enters the nearest unoccupied space. Success: Half damage, and the target moves to an unoccupied space within 5 feet of the cube. If there is no unoccupied space, the target fails the save instead.'
reactions: []
legendary_actions: []
traits:
  - name: Ooze Cube
    entries:
      - The cube fills its entire space and is transparent. Other creatures can enter that space, but a creature that does so is subjected to the cube's Engulf and has Disadvantage on the saving throw. Creatures inside the cube have Cover|XPHB|Total Cover, and the cube can hold one Large creature or up to four Medium or Small creatures inside itself at a time. As an action, a creature within 5 feet of the cube can pull a creature or an object out of the cube by succeeding on a `dc:STR` Strength (Athletics) check, and the puller takes `dmg:3d6` Acid damage.
  - name: Transparent
    entries:
      - Even when the cube is in plain sight, a creature must succeed on a `dc:15` Wisdom (Perception) check to notice the cube if the creature hasn't witnessed the cube move or otherwise act.
cr: '2'
saves:
  str: 2
  dex: -4
  con: 5
  int: -5
  wis: -2
  cha: -5
alignment: unaligned
passive_perception: 8
```
