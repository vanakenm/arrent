---
archivist: true
entity_type: monster
slug: srd-5e_monster_giant-frog
name: Giant Frog
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.994Z'
---

```monster
slug: srd-5e_monster_giant-frog
name: Giant Frog
edition: '2014'
source: SRD 5.1
size: medium
type: beast
ac:
  - ac: 11
hp:
  average: 18
  formula: 4d8
speed:
  walk: 30
  swim: 30
abilities:
  str: 12
  dex: 13
  con: 11
  int: 2
  wis: 10
  cha: 3
senses:
  - darkvision 30 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d6+STR` piercing damage, and the target is grappled (escape `dc:STR`). Until this grapple ends, the target is restrained, and the frog can''t bite another target.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 3
        damage_type: thunder
        range:
          reach: 5
  - name: Swallow
    entries:
      - The frog makes one bite attack against a Small or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the frog, and it takes `dmg:2d4` acid damage at the start of each of the frog's turns. The frog can have only one target swallowed at a time. If the frog dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 ft. of movement, exiting prone.
reactions: []
legendary_actions: []
traits:
  - name: Amphibious
    entries:
      - The frog can breathe air and water
  - name: Standing Leap
    entries:
      - The frog's long jump is up to 20 ft. and its high jump is up to 10 ft., with or without a running start.
cr: '0.25'
skills:
  perception: 2
  stealth: 3
alignment: unaligned
passive_perception: 12
```
