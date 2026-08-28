---
archivist: true
entity_type: monster
slug: srd-5e_monster_panther
name: Panther
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.010Z'
---

```monster
slug: srd-5e_monster_panther
name: Panther
edition: '2014'
source: SRD 5.1
size: medium
type: beast
ac:
  - ac: 12
hp:
  average: 13
  formula: 3d8
speed:
  walk: 50
  climb: 40
abilities:
  str: 14
  dex: 15
  con: 10
  int: 3
  wis: 14
  cha: 7
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d6+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d4+STR` slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 4
        damage: 1d4
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Keen Smell
    entries:
      - The panther has advantage on Wisdom (Perception) checks that rely on smell.
  - name: Pounce
    entries:
      - If the panther moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a `dc:STR` Strength saving throw or be knocked prone. If the target is prone, the panther can make one bite attack against it as a bonus action.
cr: '0.25'
skills:
  perception: 4
  stealth: 6
alignment: unaligned
passive_perception: 14
```
