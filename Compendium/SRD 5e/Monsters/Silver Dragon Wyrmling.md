---
archivist: true
entity_type: monster
slug: srd-5e_monster_silver-dragon-wyrmling
name: Silver Dragon Wyrmling
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.016Z'
---

```monster
slug: srd-5e_monster_silver-dragon-wyrmling
name: Silver Dragon Wyrmling
edition: '2014'
source: SRD 5.1
size: medium
type: dragon
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 45
  formula: 6d8+18
speed:
  walk: 30
  fly: 60
abilities:
  str: 19
  dex: 10
  con: 17
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
  - cold
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d10+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 6
        damage: 1d10
        damage_type: thunder
        range:
          reach: 5
  - name: Breath Weapons
    entries:
      - |-
        The dragon uses one of the following breath weapons.
        **Cold Breath.** The dragon exhales an icy blast in a 15-foot cone. Each creature in that area must make a `dc:CON` Constitution saving throw, taking `dmg:4d8` cold damage on a failed save, or half as much damage on a successful one.
        **Paralyzing Breath.** The dragon exhales paralyzing gas in a 15-foot cone. Each creature in that area must succeed on a `dc:CON` Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits: []
cr: '2'
saves:
  dex: 2
  con: 5
  wis: 2
  cha: 4
skills:
  perception: 4
  stealth: 2
subtype: Dragons, Metallic
alignment: lawful good
passive_perception: 14
```
