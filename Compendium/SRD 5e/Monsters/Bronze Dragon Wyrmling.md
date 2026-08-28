---
archivist: true
entity_type: monster
slug: srd-5e_monster_bronze-dragon-wyrmling
name: Bronze Dragon Wyrmling
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.983Z'
---

```monster
slug: srd-5e_monster_bronze-dragon-wyrmling
name: Bronze Dragon Wyrmling
edition: '2014'
source: SRD 5.1
size: medium
type: dragon
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 32
  formula: 5d8+10
speed:
  walk: 30
  fly: 60
  swim: 30
abilities:
  str: 17
  dex: 10
  con: 15
  int: 12
  wis: 11
  cha: 15
senses:
  - darkvision 60 ft.
  - blindsight 10 ft.
languages:
  - Draconic
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - lightning
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d10+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 5
        damage: 1d10
        damage_type: thunder
        range:
          reach: 5
  - name: Breath Weapons
    entries:
      - |-
        The dragon uses one of the following breath weapons.
        **Lightning Breath.** The dragon exhales lightning in a 40-foot line that is 5 feet wide. Each creature in that line must make a `dc:12` Dexterity saving throw, taking `dmg:3d10` lightning damage on a failed save, or half as much damage on a successful one.
        **Repulsion Breath.** The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a `dc:12` Strength saving throw. On a failed save, the creature is pushed 30 feet away from the dragon.
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits:
  - name: Amphibious
    entries:
      - The dragon can breathe air and water.
cr: '2'
saves:
  dex: 2
  con: 4
  wis: 2
  cha: 4
skills:
  perception: 4
  stealth: 2
subtype: Dragons, Metallic
alignment: lawful good
passive_perception: 14
```
