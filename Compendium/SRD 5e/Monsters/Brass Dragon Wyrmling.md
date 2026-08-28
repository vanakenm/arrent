---
archivist: true
entity_type: monster
slug: srd-5e_monster_brass-dragon-wyrmling
name: Brass Dragon Wyrmling
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.983Z'
---

```monster
slug: srd-5e_monster_brass-dragon-wyrmling
name: Brass Dragon Wyrmling
edition: '2014'
source: SRD 5.1
size: medium
type: dragon
ac:
  - ac: 16
    from:
      - natural armor
hp:
  average: 16
  formula: 3d8+3
speed:
  walk: 30
  fly: 60
  burrow: 15
abilities:
  str: 15
  dex: 10
  con: 13
  int: 10
  wis: 11
  cha: 13
senses:
  - darkvision 60 ft.
  - blindsight 10 ft.
languages:
  - Draconic
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - fire
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d10+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 1d10
        damage_type: thunder
        range:
          reach: 5
  - name: Breath Weapons
    entries:
      - |-
        The dragon uses one of the following breath weapons:

        - **Fire Breath.** The dragon exhales fire in an 20-foot line that is 5 feet wide. Each creature in that line must make a `dc:11` Dexterity saving throw, taking `dmg:4d6` fire damage on a failed save, or half as much damage on a successful one.
        - **Sleep Breath.** The dragon exhales sleep gas in a 15-foot cone. Each creature in that area must succeed on a `dc:CON` Constitution saving throw or fall unconscious for 1 minute. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits: []
cr: '1'
saves:
  dex: 2
  con: 3
  wis: 2
  cha: 3
skills:
  perception: 4
  stealth: 2
subtype: Dragons, Metallic
alignment: chaotic good
passive_perception: 14
```
