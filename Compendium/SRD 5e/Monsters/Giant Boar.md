---
archivist: true
entity_type: monster
slug: srd-5e_monster_giant-boar
name: Giant Boar
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.993Z'
---

```monster
slug: srd-5e_monster_giant-boar
name: Giant Boar
edition: '2014'
source: SRD 5.1
size: large
type: beast
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 42
  formula: 5d10+15
speed:
  walk: 40
abilities:
  str: 17
  dex: 10
  con: 16
  int: 2
  wis: 7
  cha: 5
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Tusk
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` slashing damage.'
    attacks:
      - name: Tusk attack
        type: melee
        bonus: 5
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Charge
    entries:
      - If the boar moves at least 20 ft. straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra `dmg:2d6` slashing damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.
  - name: Relentless (Recharges after a Short or Long Rest)
    entries:
      - If the boar takes 10 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead.
cr: '2'
alignment: unaligned
passive_perception: 8
```
