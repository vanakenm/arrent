---
archivist: true
entity_type: monster
slug: srd-5e_monster_giant-crocodile
name: Giant Crocodile
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.994Z'
---

```monster
slug: srd-5e_monster_giant-crocodile
name: Giant Crocodile
edition: '2014'
source: SRD 5.1
size: huge
type: beast
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 85
  formula: 9d12+27
speed:
  walk: 30
  swim: 50
abilities:
  str: 21
  dex: 9
  con: 17
  int: 2
  wis: 10
  cha: 7
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - 'The crocodile makes two attacks: one with its bite and one with its tail.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:3d10+STR` piercing damage, and the target is grappled (escape `dc:STR`). Until this grapple ends, the target is restrained, and the crocodile can''t bite another target.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 8
        damage_type: thunder
        range:
          reach: 5
  - name: Tail
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target not grappled by the crocodile. Hit: `dmg:2d8+STR` bludgeoning damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.'
    attacks:
      - name: Tail attack
        type: melee
        bonus: 8
        damage: 2d8
        damage_type: thunder
        range:
          reach: 10
reactions: []
legendary_actions: []
traits:
  - name: Hold Breath
    entries:
      - The crocodile can hold its breath for 30 minutes.
cr: '5'
skills:
  stealth: 5
alignment: unaligned
passive_perception: 10
```
