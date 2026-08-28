---
archivist: true
entity_type: monster
slug: srd-5e_monster_minotaur-skeleton
name: Minotaur Skeleton
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.007Z'
---

```monster
slug: srd-5e_monster_minotaur-skeleton
name: Minotaur Skeleton
edition: '2014'
source: SRD 5.1
size: large
type: undead
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 67
  formula: 9d10+18
speed:
  walk: 40
abilities:
  str: 18
  dex: 11
  con: 15
  int: 6
  wis: 8
  cha: 5
senses:
  - darkvision 60 ft.
languages:
  - understands Abyssal but can't speak
damage_vulnerabilities:
  - bludgeoning
damage_resistances: []
damage_immunities:
  - poison
condition_immunities:
  - exhaustion
  - poisoned
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
      - If the skeleton moves at least 10 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra `dmg:2d8` piercing damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be pushed up to 10 feet away and knocked prone.
cr: '2'
subtype: Skeletons
alignment: lawful evil
passive_perception: 9
```
