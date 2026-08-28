---
archivist: true
entity_type: monster
slug: srd-5e_monster_manticore
name: Manticore
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.006Z'
---

```monster
slug: srd-5e_monster_manticore
name: Manticore
edition: '2014'
source: SRD 5.1
size: large
type: monstrosity
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 68
  formula: 8d10+24
speed:
  walk: 30
  fly: 50
abilities:
  str: 17
  dex: 16
  con: 17
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
      - 'The manticore makes three attacks: one with its bite and two with its claws or three with its tail spikes.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d8+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 5
        damage: 1d8
        damage_type: thunder
        range:
          reach: 5
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d6+STR` slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 5
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
  - name: Tail Spike
    entries:
      - 'Ranged Weapon Attack: `atk:STR+PB`, range 100/200 ft., one target. Hit: `dmg:1d8+STR` piercing damage.'
    attacks:
      - name: Tail Spike attack
        type: ranged
        bonus: 5
        damage: 1d8
        damage_type: thunder
        range:
          normal: 100
          long: 200
reactions: []
legendary_actions: []
traits:
  - name: Tail Spike Regrowth
    entries:
      - The manticore has twenty-four tail spikes. Used spikes regrow when the manticore finishes a long rest.
cr: '3'
alignment: lawful evil
passive_perception: 11
```
