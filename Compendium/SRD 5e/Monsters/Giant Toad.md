---
archivist: true
entity_type: monster
slug: srd-5e_monster_giant-toad
name: Giant Toad
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.996Z'
---

```monster
slug: srd-5e_monster_giant-toad
name: Giant Toad
edition: '2014'
source: SRD 5.1
size: large
type: beast
ac:
  - ac: 11
hp:
  average: 39
  formula: 6d10+6
speed:
  walk: 20
  swim: 40
abilities:
  str: 15
  dex: 13
  con: 13
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
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d10+STR` piercing damage plus `dmg:1d10` poison damage, and the target is grappled (escape `dc:13`). Until this grapple ends, the target is restrained, and the toad can''t bite another target.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 1d10
        damage_type: thunder
        range:
          reach: 5
  - name: Swallow
    entries:
      - |-
        The toad makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the toad, and it takes `dmg:3d6` acid damage at the start of each of the toad's turns. The toad can have only one target swallowed at a time.
        If the toad dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone.
reactions: []
legendary_actions: []
traits:
  - name: Amphibious
    entries:
      - The toad can breathe air and water
  - name: Standing Leap
    entries:
      - The toad's long jump is up to 20 ft. and its high jump is up to 10 ft., with or without a running start.
cr: '1'
alignment: unaligned
passive_perception: 10
```
