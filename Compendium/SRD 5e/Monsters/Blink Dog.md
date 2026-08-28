---
archivist: true
entity_type: monster
slug: srd-5e_monster_blink-dog
name: Blink Dog
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.982Z'
---

```monster
slug: srd-5e_monster_blink-dog
name: Blink Dog
edition: '2014'
source: SRD 5.1
size: medium
type: fey
ac:
  - ac: 13
hp:
  average: 22
  formula: 4d8+4
speed:
  walk: 40
abilities:
  str: 12
  dex: 17
  con: 12
  int: 10
  wis: 13
  cha: 11
senses: []
languages:
  - Blink Dog
  - understands Sylvan but can't speak it
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d6+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 3
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
  - name: Teleport
    entries:
      - The dog magically teleports, along with any equipment it is wearing or carrying, up to 40 ft. to an unoccupied space it can see. Before or after teleporting, the dog can make one bite attack.
reactions: []
legendary_actions: []
traits:
  - name: Keen Hearing and Smell
    entries:
      - The dog has advantage on Wisdom (Perception) checks that rely on hearing or smell.
cr: '0.25'
skills:
  perception: 3
  stealth: 5
alignment: lawful good
passive_perception: 10
```
