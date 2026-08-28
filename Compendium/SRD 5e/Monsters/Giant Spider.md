---
archivist: true
entity_type: monster
slug: srd-5e_monster_giant-spider
name: Giant Spider
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.996Z'
---

```monster
slug: srd-5e_monster_giant-spider
name: Giant Spider
edition: '2014'
source: SRD 5.1
size: large
type: beast
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 26
  formula: 4d10+4
speed:
  walk: 30
  climb: 30
abilities:
  str: 14
  dex: 16
  con: 12
  int: 2
  wis: 11
  cha: 4
senses:
  - darkvision 60 ft.
  - blindsight 10 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one creature. Hit: `dmg:1d8+DEX` piercing damage, and the target must make a `dc:CON` Constitution saving throw, taking `dmg:2d8` poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 5
        damage_type: thunder
        range:
          reach: 5
  - name: Web
    entries:
      - 'Ranged Weapon Attack: `atk:+5`, range 30/60 ft., one creature. Hit: The target is restrained by webbing. As an action, the restrained target can make a `dc:STR` Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage).'
    attacks:
      - name: Web attack
        type: ranged
        bonus: 5
        range:
          normal: 30
          long: 60
reactions: []
legendary_actions: []
traits:
  - name: Spider Climb
    entries:
      - The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.
  - name: Web Sense
    entries:
      - While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.
  - name: Web Walker
    entries:
      - The spider ignores movement restrictions caused by webbing.
cr: '1'
skills:
  stealth: 7
alignment: unaligned
passive_perception: 10
```
