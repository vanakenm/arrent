---
archivist: true
entity_type: monster
slug: srd-5e_monster_boar
name: Boar
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.983Z'
---

```monster
slug: srd-5e_monster_boar
name: Boar
edition: '2014'
source: SRD 5.1
size: medium
type: beast
ac:
  - ac: 11
    from:
      - natural armor
hp:
  average: 11
  formula: 2d8+2
speed:
  walk: 40
abilities:
  str: 13
  dex: 11
  con: 12
  int: 2
  wis: 9
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
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d6+STR` slashing damage.'
    attacks:
      - name: Tusk attack
        type: melee
        bonus: 3
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Charge
    entries:
      - If the boar moves at least 20 ft. straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra `dmg:1d6` slashing damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.
  - name: Relentless (Recharges after a Short or Long Rest)
    entries:
      - If the boar takes 7 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead.
cr: '0.25'
alignment: unaligned
passive_perception: 9
```
