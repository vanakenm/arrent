---
archivist: true
entity_type: monster
slug: srd-5e_monster_saber-toothed-tiger
name: Saber-Toothed Tiger
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.014Z'
---

```monster
slug: srd-5e_monster_saber-toothed-tiger
name: Saber-Toothed Tiger
edition: '2014'
source: SRD 5.1
size: large
type: beast
ac:
  - ac: 12
hp:
  average: 52
  formula: 7d10+14
speed:
  walk: 40
abilities:
  str: 18
  dex: 14
  con: 15
  int: 3
  wis: 12
  cha: 8
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:+6`, reach 5 ft., one target. Hit: `dmg:1d10+5` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 6
        damage: 1d10
        damage_type: thunder
        range:
          reach: 5
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:+6`, reach 5 ft., one target. Hit: `dmg:2d6+5` slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 6
        damage: 2d6
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
cr: '2'
skills:
  perception: 3
  stealth: 6
alignment: unaligned
passive_perception: 13
```
