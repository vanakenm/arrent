---
archivist: true
entity_type: monster
slug: srd-5e_monster_giant-sea-horse
name: Giant Sea Horse
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.996Z'
---

```monster
slug: srd-5e_monster_giant-sea-horse
name: Giant Sea Horse
edition: '2014'
source: SRD 5.1
size: large
type: beast
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 16
  formula: 3d10
speed:
  swim: 40
abilities:
  str: 12
  dex: 15
  con: 11
  int: 2
  wis: 12
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
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d6+STR` bludgeoning damage.'
    attacks:
      - name: Ram attack
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
      - If the sea horse moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra `dmg:2d6` bludgeoning damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.
  - name: Water Breathing
    entries:
      - The sea horse can breathe only underwater.
cr: '0.5'
alignment: unaligned
passive_perception: 11
```
