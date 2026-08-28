---
archivist: true
entity_type: monster
slug: srd-5e_monster_ettin
name: Ettin
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.991Z'
---

```monster
slug: srd-5e_monster_ettin
name: Ettin
edition: '2014'
source: SRD 5.1
size: large
type: giant
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 85
  formula: 10d10+30
speed:
  walk: 40
abilities:
  str: 21
  dex: 8
  con: 17
  int: 6
  wis: 10
  cha: 8
senses:
  - darkvision 60 ft.
languages:
  - Giant
  - Orc
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - 'The ettin makes two attacks: one with its battleaxe and one with its morningstar.'
  - name: Battleaxe
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d8+STR` slashing damage.'
    attacks:
      - name: Battleaxe attack
        type: melee
        bonus: 7
        damage: 2d8
        damage_type: thunder
        range:
          reach: 5
  - name: Morningstar
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d8+STR` piercing damage.'
    attacks:
      - name: Morningstar attack
        type: melee
        bonus: 7
        damage: 2d8
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Two Heads
    entries:
      - The ettin has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious.
  - name: Wakeful
    entries:
      - When one of the ettin's heads is asleep, its other head is awake.
cr: '4'
skills:
  perception: 4
alignment: chaotic evil
passive_perception: 14
```
