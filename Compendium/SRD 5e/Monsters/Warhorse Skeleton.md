---
archivist: true
entity_type: monster
slug: srd-5e_monster_warhorse-skeleton
name: Warhorse Skeleton
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.023Z'
---

```monster
slug: srd-5e_monster_warhorse-skeleton
name: Warhorse Skeleton
edition: '2014'
source: SRD 5.1
size: large
type: undead
ac:
  - ac: 13
    from:
      - barding scraps
hp:
  average: 22
  formula: 3d10+6
speed:
  walk: 60
abilities:
  str: 18
  dex: 12
  con: 15
  int: 2
  wis: 8
  cha: 5
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities:
  - bludgeoning
damage_resistances: []
damage_immunities:
  - poison
condition_immunities:
  - exhaustion
  - poisoned
actions:
  - name: Hooves
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` bludgeoning damage.'
    attacks:
      - name: Hooves attack
        type: melee
        bonus: 6
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '0.5'
subtype: Skeletons
alignment: lawful evil
passive_perception: 9
```
