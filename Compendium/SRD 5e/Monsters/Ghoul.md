---
archivist: true
entity_type: monster
slug: srd-5e_monster_ghoul
name: Ghoul
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.993Z'
---

```monster
slug: srd-5e_monster_ghoul
name: Ghoul
edition: '2014'
source: SRD 5.1
size: medium
type: undead
ac:
  - ac: 12
hp:
  average: 22
  formula: 5d8
speed:
  walk: 30
abilities:
  str: 13
  dex: 15
  con: 10
  int: 7
  wis: 10
  cha: 6
senses:
  - darkvision 60 ft.
languages:
  - Common
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - poison
condition_immunities:
  - charmed
  - exhaustion
  - poisoned
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one creature. Hit: `dmg:2d6+DEX` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 2
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one target. Hit: `dmg:2d4+DEX` slashing damage. If the target is a creature other than an elf or undead, it must succeed on a `dc:CON` Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.'
    attacks:
      - name: Claws attack
        type: melee
        bonus: 4
        damage: 2d4
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '1'
subtype: Ghouls
alignment: chaotic evil
passive_perception: 10
```
