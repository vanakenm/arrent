---
archivist: true
entity_type: monster
slug: srd-5e_monster_baboon
name: Baboon
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.980Z'
---

```monster
slug: srd-5e_monster_baboon
name: Baboon
edition: '2014'
source: SRD 5.1
size: small
type: beast
ac:
  - ac: 12
hp:
  average: 3
  formula: 1d6
speed:
  walk: 30
  climb: 30
abilities:
  str: 8
  dex: 14
  con: 11
  int: 4
  wis: 12
  cha: 6
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d4+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 1
        damage: 1d4
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Pack Tactics
    entries:
      - The baboon has advantage on an attack roll against a creature if at least one of the baboon's allies is within 5 ft. of the creature and the ally isn't incapacitated.
cr: '0'
alignment: unaligned
passive_perception: 11
```
