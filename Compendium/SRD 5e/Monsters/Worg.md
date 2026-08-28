---
archivist: true
entity_type: monster
slug: srd-5e_monster_worg
name: Worg
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.025Z'
---

```monster
slug: srd-5e_monster_worg
name: Worg
edition: '2014'
source: SRD 5.1
size: large
type: monstrosity
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 26
  formula: 4d10+4
speed:
  walk: 50
abilities:
  str: 16
  dex: 13
  con: 13
  int: 7
  wis: 11
  cha: 8
senses:
  - darkvision 60 ft.
languages:
  - Goblin
  - Worg
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` piercing damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 5
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Keen Hearing and Smell
    entries:
      - The worg has advantage on Wisdom (Perception) checks that rely on hearing or smell.
cr: '0.5'
skills:
  perception: 4
alignment: neutral evil
passive_perception: 14
```
