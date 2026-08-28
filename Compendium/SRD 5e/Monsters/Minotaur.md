---
archivist: true
entity_type: monster
slug: srd-5e_monster_minotaur
name: Minotaur
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.007Z'
---

```monster
slug: srd-5e_monster_minotaur
name: Minotaur
edition: '2014'
source: SRD 5.1
size: large
type: monstrosity
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 76
  formula: 9d10+27
speed:
  walk: 40
abilities:
  str: 18
  dex: 11
  con: 16
  int: 6
  wis: 16
  cha: 9
senses:
  - darkvision 60 ft.
languages:
  - Abyssal
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Greataxe
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d12+STR` slashing damage.'
    attacks:
      - name: Greataxe attack
        type: melee
        bonus: 6
        damage: 2d12
        damage_type: thunder
        range:
          reach: 5
  - name: Gore
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d8+STR` piercing damage.'
    attacks:
      - name: Gore attack
        type: melee
        bonus: 6
        damage: 2d8
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Charge
    entries:
      - If the minotaur moves at least 10 ft. straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra `dmg:2d8` piercing damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be pushed up to 10 ft. away and knocked prone.
  - name: Labyrinthine Recall
    entries:
      - The minotaur can perfectly recall any path it has traveled.
  - name: Reckless
    entries:
      - At the start of its turn, the minotaur can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn.
cr: '3'
skills:
  perception: 7
alignment: chaotic evil
passive_perception: 17
```
