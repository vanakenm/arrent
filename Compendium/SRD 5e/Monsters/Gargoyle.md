---
archivist: true
entity_type: monster
slug: srd-5e_monster_gargoyle
name: Gargoyle
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.992Z'
---

```monster
slug: srd-5e_monster_gargoyle
name: Gargoyle
edition: '2014'
source: SRD 5.1
size: medium
type: elemental
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 52
  formula: 7d8+21
speed:
  walk: 30
  fly: 60
abilities:
  str: 15
  dex: 11
  con: 16
  int: 6
  wis: 11
  cha: 7
senses:
  - darkvision 60 ft.
languages:
  - Terran
damage_vulnerabilities: []
damage_resistances:
  - bludgeoning
  - piercing
  - slashing
damage_immunities:
  - poison
condition_immunities:
  - exhaustion
  - petrified
  - poisoned
actions:
  - name: Multiattack
    entries:
      - 'The gargoyle makes two attacks: one with its bite and one with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d6+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d6+STR` slashing damage.'
    attacks:
      - name: Claws attack
        type: melee
        bonus: 4
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: False Appearance
    entries:
      - While the gargoyle remains motion less, it is indistinguishable from an inanimate statue.
cr: '2'
alignment: chaotic evil
passive_perception: 10
```
