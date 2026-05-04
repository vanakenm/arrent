---
archivist: true
entity_type: monster
slug: remorhaz
name: Remorhaz
compendium: SRD
---

```monster
name: Remorhaz
size: Huge
type: Monstrosity
alignment: unaligned
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 195
  formula: 17d12+85
speed:
  walk: 30
  burrow: 20
abilities:
  str: 24
  dex: 13
  con: 21
  int: 4
  wis: 10
  cha: 5
senses:
  - darkvision 60 ft.
  - tremorsense 60 ft.
passive_perception: 10
damage_immunities:
  - cold
  - fire
cr: '11'
traits:
  - name: Heated Body
    entries:
      - A creature that touches the remorhaz or hits it with a melee attack while within 5 feet of it takes `damage:3d6` fire damage.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:6d10+STR` piercing damage plus `damage:3d6` fire damage. If the target is a creature, it is grappled (escape `dc:CON`). Until this grapple ends, the target is restrained, and the remorhaz can''t bite another target.'
  - name: Swallow
    entries:
      - |-
        The remorhaz makes one bite attack against a Medium or smaller creature it is grappling. If the attack hits, that creature takes the bite's damage and is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the remorhaz, and it takes `damage:6d6` acid damage at the start of each of the remorhaz's turns.
        If the remorhaz takes 30 damage or more on a single turn from a creature inside it, the remorhaz must succeed on a `dc:15` Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet oft he remorhaz. If the remorhaz dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 feet of movement, exiting prone.
```
