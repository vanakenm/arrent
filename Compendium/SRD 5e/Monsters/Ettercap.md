---
archivist: true
entity_type: monster
slug: srd-5e_monster_ettercap
name: Ettercap
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.991Z'
---

```monster
slug: srd-5e_monster_ettercap
name: Ettercap
edition: '2014'
source: SRD 5.1
size: medium
type: monstrosity
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 44
  formula: 8d8+8
speed:
  walk: 30
  climb: 30
abilities:
  str: 14
  dex: 15
  con: 13
  int: 7
  wis: 12
  cha: 8
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - 'The ettercap makes two attacks: one with its bite and one with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one creature. Hit: `dmg:1d8+STR` piercing damage plus `dmg:1d8` poison damage. The target must succeed on a `dc:CON` Constitution saving throw or be poisoned for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 1d8
        damage_type: thunder
        range:
          reach: 5
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d4+STR` slashing damage.'
    attacks:
      - name: Claws attack
        type: melee
        bonus: 4
        damage: 2d4
        damage_type: thunder
        range:
          reach: 5
  - name: Web
    entries:
      - 'Ranged Weapon Attack: `atk:+4`, range 30/60 ft., one Large or smaller creature. Hit: The creature is restrained by webbing. As an action, the restrained creature can make a `dc:11` Strength check, escaping from the webbing on a success. The effect ends if the webbing is destroyed. The webbing has AC 10, 5 hit points, vulnerability to fire damage and immunity to bludgeoning, poison, and psychic damage.'
    attacks:
      - name: Web attack
        type: ranged
        bonus: 4
        range:
          normal: 30
          long: 60
  - name: 'Variant: Web Garrote'
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one Medium or Small creature against which the ettercap has advantage on the attack roll. Hit: `dmg:1d4+STR` bludgeoning damage, and the target is grappled (escape `dc:STR`). Until this grapple ends, the target can''t breathe, and the ettercap has advantage on attack rolls against it.'
    attacks:
      - name: 'Variant: Web Garrote attack'
        type: melee
        bonus: 4
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Spider Climb
    entries:
      - The ettercap can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.
  - name: Web Sense
    entries:
      - While in contact with a web, the ettercap knows the exact location of any other creature in contact with the same web.
  - name: Web Walker
    entries:
      - The ettercap ignores movement restrictions caused by webbing.
cr: '2'
skills:
  perception: 3
  stealth: 4
  survival: 3
alignment: neutral evil
passive_perception: 13
```
