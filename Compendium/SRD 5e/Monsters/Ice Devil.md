---
archivist: true
entity_type: monster
slug: srd-5e_monster_ice-devil
name: Ice Devil
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.002Z'
---

```monster
slug: srd-5e_monster_ice-devil
name: Ice Devil
edition: '2014'
source: SRD 5.1
size: large
type: fiend
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 180
  formula: 19d10+76
speed:
  walk: 40
abilities:
  str: 21
  dex: 14
  con: 18
  int: 18
  wis: 15
  cha: 18
senses:
  - darkvision 120 ft.
  - blindsight 60 ft.
languages:
  - Infernal
  - telepathy 120 ft.
damage_vulnerabilities: []
damage_resistances:
  - bludgeoning
  - piercing
  - slashing
damage_immunities:
  - fire
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Multiattack
    entries:
      - 'The devil makes three attacks: one with its bite, one with its claws, and one with its tail.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` piercing damage plus `dmg:3d6` cold damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 10
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d4+STR` slashing damage plus `dmg:3d6` cold damage.'
    attacks:
      - name: Claws attack
        type: melee
        bonus: 10
        damage: 2d4
        damage_type: thunder
        range:
          reach: 5
  - name: Tail
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:2d6+STR` bludgeoning damage plus `dmg:3d6` cold damage.'
    attacks:
      - name: Tail attack
        type: melee
        bonus: 10
        damage: 2d6
        damage_type: thunder
        range:
          reach: 10
  - name: Wall of Ice
    entries:
      - |-
        The devil magically forms an opaque wall of ice on a solid surface it can see within 60 feet of it. The wall is 1 foot thick and up to 30 feet long and 10 feet high, or it's a hemispherical dome up to 20 feet in diameter.
        When the wall appears, each creature in its space is pushed out of it by the shortest route. The creature chooses which side of the wall to end up on, unless the creature is incapacitated. The creature then makes a `dc:17` Dexterity saving throw, taking `dmg:10d6` cold damage on a failed save, or half as much damage on a successful one.
        The wall lasts for 1 minute or until the devil is incapacitated or dies. The wall can be damaged and breached; each 10-foot section has AC 5, 30 hit points, vulnerability to fire damage, and immunity to acid, cold, necrotic, poison, and psychic damage. If a section is destroyed, it leaves behind a sheet of frigid air in the space the wall occupied. Whenever a creature finishes moving through the frigid air on a turn, willingly or otherwise, the creature must make a `dc:CON` Constitution saving throw, taking `dmg:5d6` cold damage on a failed save, or half as much damage on a successful one. The frigid air dissipates when the rest of the wall vanishes.
reactions: []
legendary_actions: []
traits:
  - name: Devil's Sight
    entries:
      - Magical darkness doesn't impede the devil's darkvision.
  - name: Magic Resistance
    entries:
      - The devil has advantage on saving throws against spells and other magical effects.
cr: '14'
saves:
  dex: 7
  con: 9
  wis: 7
  cha: 9
subtype: Devils
alignment: lawful evil
passive_perception: 12
```
