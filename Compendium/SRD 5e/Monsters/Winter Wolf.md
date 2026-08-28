---
archivist: true
entity_type: monster
slug: srd-5e_monster_winter-wolf
name: Winter Wolf
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.025Z'
---

```monster
slug: srd-5e_monster_winter-wolf
name: Winter Wolf
edition: '2014'
source: SRD 5.1
size: large
type: monstrosity
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 75
  formula: 10d10+20
speed:
  walk: 50
abilities:
  str: 18
  dex: 13
  con: 14
  int: 7
  wis: 12
  cha: 8
senses: []
languages:
  - Common
  - Giant
  - Winter Wolf
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - cold
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` piercing damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 6
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
  - name: Cold Breath
    entries:
      - The wolf exhales a blast of freezing wind in a 15-foot cone. Each creature in that area must make a `dc:12` Dexterity saving throw, taking `dmg:4d8` cold damage on a failed save, or half as much damage on a successful one.
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits:
  - name: Keen Hearing and Smell
    entries:
      - The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.
  - name: Pack Tactics
    entries:
      - The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft. of the creature and the ally isn't incapacitated.
  - name: Snow Camouflage
    entries:
      - The wolf has advantage on Dexterity (Stealth) checks made to hide in snowy terrain.
cr: '3'
skills:
  perception: 5
  stealth: 3
alignment: neutral evil
passive_perception: 15
```
