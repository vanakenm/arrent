---
archivist: true
entity_type: monster
slug: ettercap
name: Ettercap
compendium: SRD
---

```monster
name: Ettercap
size: Medium
type: Monstrosity
alignment: neutral evil
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
skills:
  perception: 3
  stealth: 4
  survival: 3
senses:
  - darkvision 60 ft.
passive_perception: 13
cr: '2'
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
actions:
  - name: Multiattack
    entries:
      - 'The ettercap makes two attacks: one with its bite and one with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one creature. Hit: `damage:1d8+STR` piercing damage plus `damage:1d8` poison damage. The target must succeed on a `dc:CON` Constitution saving throw or be poisoned for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.'
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d4+STR` slashing damage.'
  - name: Web (Recharge 5-6)
    entries:
      - 'Ranged Weapon Attack: `atk:DEX`, range 30/60 ft., one Large or smaller creature. Hit: The creature is restrained by webbing. As an action, the restrained creature can make a `dc:11` Strength check, escaping from the webbing on a success. The effect ends if the webbing is destroyed. The webbing has AC 10, 5 hit points, vulnerability to fire damage and immunity to bludgeoning, poison, and psychic damage.'
  - name: 'Variant: Web Garrote'
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one Medium or Small creature against which the ettercap has advantage on the attack roll. Hit: `damage:1d4+STR` bludgeoning damage, and the target is grappled (escape `dc:STR`). Until this grapple ends, the target can''t breathe, and the ettercap has advantage on attack rolls against it.'
```
