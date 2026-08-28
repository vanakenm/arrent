---
archivist: true
entity_type: monster
slug: srd-5e_monster_young-bronze-dragon
name: Young Bronze Dragon
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.026Z'
---

```monster
slug: srd-5e_monster_young-bronze-dragon
name: Young Bronze Dragon
edition: '2014'
source: SRD 5.1
size: large
type: dragon
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 142
  formula: 15d10+60
speed:
  walk: 40
  fly: 80
  swim: 40
abilities:
  str: 21
  dex: 10
  con: 19
  int: 14
  wis: 13
  cha: 17
senses:
  - darkvision 120 ft.
  - blindsight 30 ft.
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
      - 'The dragon makes three attacks: one with its bite and two with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:2d10+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 8
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
        bonus: 8
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
  - name: Breath Weapons
    entries:
      - |-
        The dragon uses one of the following breath weapons.
        **Lightning Breath.** The dragon exhales lightning in a 60-foot line that is 5 feet wide. Each creature in that line must make a `dc:15` Dexterity saving throw, taking `dmg:10d10` lightning damage on a failed save, or half as much damage on a successful one.
        **Repulsion Breath.** The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a `dc:15` Strength saving throw. On a failed save, the creature is pushed 40 feet away from the dragon.
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits:
  - name: Amphibious
    entries:
      - The dragon can breathe air and water.
cr: '8'
saves:
  dex: 3
  con: 7
  wis: 4
  cha: 6
skills:
  insight: 4
  perception: 7
  stealth: 3
subtype: Dragons, Metallic
alignment: lawful good
passive_perception: 17
```
