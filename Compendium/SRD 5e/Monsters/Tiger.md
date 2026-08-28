---
archivist: true
entity_type: monster
slug: srd-5e_monster_tiger
name: Tiger
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.021Z'
---

```monster
slug: srd-5e_monster_tiger
name: Tiger
edition: '2014'
source: SRD 5.1
size: large
type: beast
ac:
  - ac: 12
hp:
  average: 37
  formula: 5d10+10
speed:
  walk: 40
abilities:
  str: 17
  dex: 15
  con: 14
  int: 3
  wis: 12
  cha: 8
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d10+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 5
        damage: 1d10
        damage_type: thunder
        range:
          reach: 5
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d8+STR` slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 5
        damage: 1d8
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Keen Smell
    entries:
      - The tiger has advantage on Wisdom (Perception) checks that rely on smell.
  - name: Pounce
    entries:
      - If the tiger moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a `dc:STR` Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action.
cr: '1'
skills:
  perception: 3
  stealth: 6
alignment: unaligned
passive_perception: 13
```
