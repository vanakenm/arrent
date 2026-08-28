---
archivist: true
entity_type: monster
slug: srd-5e_monster_elephant
name: Elephant
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.990Z'
---

```monster
slug: srd-5e_monster_elephant
name: Elephant
edition: '2014'
source: SRD 5.1
size: huge
type: beast
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 76
  formula: 8d12+24
speed:
  walk: 40
abilities:
  str: 22
  dex: 9
  con: 17
  int: 3
  wis: 11
  cha: 6
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Gore
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:3d8+STR` piercing damage.'
    attacks:
      - name: Gore attack
        type: melee
        bonus: 8
        damage: 3d8
        damage_type: thunder
        range:
          reach: 5
  - name: Stomp
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one prone creature. Hit: `dmg:3d10+STR` bludgeoning damage.'
    attacks:
      - name: Stomp attack
        type: melee
        bonus: 8
        damage: 3d10
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Trampling Charge
    entries:
      - If the elephant moves at least 20 ft. straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a `dc:12` Strength saving throw or be knocked prone. If the target is prone, the elephant can make one stomp attack against it as a bonus action.
cr: '4'
saves:
  str: 0
  dex: 0
  con: 0
  int: 0
  wis: 0
  cha: 0
skills:
  acrobatics: 0
  animal_handling: 0
  arcana: 0
  athletics: 0
  deception: 0
  history: 0
  insight: 0
  intimidation: 0
  investigation: 0
  medicine: 0
  nature: 0
  perception: 0
  performance: 0
  persuasion: 0
  religion: 0
  sleight_of_hand: 0
  stealth: 0
  survival: 0
alignment: unaligned
passive_perception: 10
```
