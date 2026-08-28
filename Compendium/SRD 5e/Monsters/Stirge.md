---
archivist: true
entity_type: monster
slug: srd-5e_monster_stirge
name: Stirge
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.018Z'
---

```monster
slug: srd-5e_monster_stirge
name: Stirge
edition: '2014'
source: SRD 5.1
size: tiny
type: beast
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 2
  formula: 1d4
speed:
  walk: 10
  fly: 40
abilities:
  str: 4
  dex: 16
  con: 11
  int: 2
  wis: 8
  cha: 6
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Blood Drain
    entries:
      - |-
        Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one creature. Hit: `dmg:1d4+DEX` piercing damage, and the stirge attaches to the target. While attached, the stirge doesn't attack. Instead, at the start of each of the stirge's turns, the target loses 5 (`dice:1d4+3`) hit points due to blood loss.
        The stirge can detach itself by spending 5 feet of its movement. It does so after it drains 10 hit points of blood from the target or the target dies. A creature, including the target, can use its action to detach the stirge.
    attacks:
      - name: Blood Drain attack
        type: melee
        bonus: 5
        damage: 1d4
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '0.125'
alignment: unaligned
passive_perception: 9
```
