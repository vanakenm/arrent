---
archivist: true
entity_type: monster
slug: srd-5e_monster_will-o-wisp
name: Will-o'-Wisp
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.025Z'
---

```monster
slug: srd-5e_monster_will-o-wisp
name: Will-o'-Wisp
edition: '2014'
source: SRD 5.1
size: tiny
type: undead
ac:
  - ac: 19
hp:
  average: 22
  formula: 9d4
speed:
  fly: 50
abilities:
  str: 1
  dex: 28
  con: 10
  int: 13
  wis: 14
  cha: 11
senses:
  - darkvision 120 ft.
languages:
  - the languages it knew in life
damage_vulnerabilities: []
damage_resistances:
  - acid
  - bludgeoning
  - cold
  - fire
  - necrotic
  - piercing
  - slashing
  - thunder
damage_immunities:
  - lightning
  - poison
condition_immunities:
  - exhaustion
  - grappled
  - paralyzed
  - poisoned
  - prone
  - restrained
  - unconscious
actions:
  - name: Shock
    entries:
      - 'Melee Spell Attack: `atk:+4`, reach 5 ft., one creature. Hit: `dmg:2d8` lightning damage.'
    attacks:
      - name: Shock attack
        type: melee
        bonus: 4
        damage_type: thunder
        range:
          reach: 5
  - name: Invisibility
    entries:
      - The will-o'-wisp and its light magically become invisible until it attacks or uses its Consume Life, or until its concentration ends (as if concentrating on a spell).
reactions: []
legendary_actions: []
traits:
  - name: Consume Life
    entries:
      - As a bonus action, the will-o'-wisp can target one creature it can see within 5 ft. of it that has 0 hit points and is still alive. The target must succeed on a `dc:CON` Constitution saving throw against this magic or die. If the target dies, the will-o'-wisp regains 10 (`dice:3d6`) hit points.
  - name: Ephemeral
    entries:
      - The will-o'-wisp can't wear or carry anything.
  - name: Incorporeal Movement
    entries:
      - The will-o'-wisp can move through other creatures and objects as if they were difficult terrain. It takes `dmg:1d10` force damage if it ends its turn inside an object.
  - name: Variable Illumination
    entries:
      - The will-o'-wisp sheds bright light in a 5- to 20-foot radius and dim light for an additional number of ft. equal to the chosen radius. The will-o'-wisp can alter the radius as a bonus action.
cr: '2'
alignment: chaotic evil
passive_perception: 12
```
