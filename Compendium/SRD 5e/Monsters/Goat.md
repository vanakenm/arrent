---
archivist: true
entity_type: monster
slug: srd-5e_monster_goat
name: Goat
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.998Z'
---

```monster
slug: srd-5e_monster_goat
name: Goat
edition: '2014'
source: SRD 5.1
size: medium
type: beast
ac:
  - ac: 10
hp:
  average: 4
  formula: 1d8
speed:
  walk: 40
abilities:
  str: 12
  dex: 10
  con: 11
  int: 2
  wis: 10
  cha: 5
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Ram
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d4+STR` bludgeoning damage.'
    attacks:
      - name: Ram attack
        type: melee
        bonus: 3
        damage: 1d4
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Charge
    entries:
      - If the goat moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra `dmg:1d4` bludgeoning damage. If the target is a creature, it must succeed on a `dc:10` Strength saving throw or be knocked prone.
  - name: Sure-Footed
    entries:
      - The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone.
cr: '0'
alignment: unaligned
passive_perception: 10
```
