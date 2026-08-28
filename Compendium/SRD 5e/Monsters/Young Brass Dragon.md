---
archivist: true
entity_type: monster
slug: srd-5e_monster_young-brass-dragon
name: Young Brass Dragon
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.026Z'
---

```monster
slug: srd-5e_monster_young-brass-dragon
name: Young Brass Dragon
edition: '2014'
source: SRD 5.1
size: large
type: dragon
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 110
  formula: 13d10+39
speed:
  walk: 40
  fly: 80
  burrow: 20
abilities:
  str: 19
  dex: 10
  con: 17
  int: 12
  wis: 11
  cha: 15
senses:
  - darkvision 120 ft.
  - blindsight 30 ft.
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
      - 'The dragon makes three attacks: one with its bite and two with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:2d10+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 7
        damage: 2d10
        damage_type: thunder
        range:
          reach: 10
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 7
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
  - name: Breath Weapons
    entries:
      - |-
        The dragon uses one of the following breath weapons:

        - **Fire Breath.** The dragon exhales fire in a 40-foot line that is 5 feet wide. Each creature in that line must make a `dc:14` Dexterity saving throw, taking `dmg:12d6` fire damage on a failed save, or half as much damage on a successful one.
        - **Sleep Breath.** The dragon exhales sleep gas in a 30-foot cone. Each creature in that area must succeed on a `dc:CON` Constitution saving throw or fall unconscious for 5 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits: []
cr: '6'
saves:
  dex: 3
  con: 6
  wis: 3
  cha: 5
skills:
  perception: 6
  persuasion: 5
  stealth: 3
subtype: Dragons, Metallic
alignment: chaotic good
passive_perception: 16
```
