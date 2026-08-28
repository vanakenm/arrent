---
archivist: true
entity_type: monster
slug: srd-5e_monster_mammoth
name: Mammoth
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.006Z'
---

```monster
slug: srd-5e_monster_mammoth
name: Mammoth
edition: '2014'
source: SRD 5.1
size: huge
type: beast
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 126
  formula: 11d12+55
speed:
  walk: 40
abilities:
  str: 24
  dex: 9
  con: 21
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
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:4d8+STR` piercing damage.'
    attacks:
      - name: Gore attack
        type: melee
        bonus: 10
        damage: 4d8
        damage_type: thunder
        range:
          reach: 10
  - name: Stomp
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one prone creature. Hit: `dmg:4d10+STR` bludgeoning damage.'
    attacks:
      - name: Stomp attack
        type: melee
        bonus: 10
        damage: 4d10
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Trampling Charge
    entries:
      - If the mammoth moves at least 20 ft. straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a `dc:STR` Strength saving throw or be knocked prone. If the target is prone, the mammoth can make one stomp attack against it as a bonus action.
cr: '6'
alignment: unaligned
passive_perception: 10
```
