---
archivist: true
entity_type: monster
slug: shambling-mound
name: Shambling Mound
compendium: SRD
---

```monster
name: Shambling Mound
size: Large
type: Plant
alignment: unaligned
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 136
  formula: 16d10+48
speed:
  walk: 20
  swim: 20
abilities:
  str: 18
  dex: 8
  con: 16
  int: 5
  wis: 10
  cha: 5
skills:
  stealth: 2
senses:
  - blindsight 60 ft. (blind beyond this radius)
passive_perception: 10
damage_resistances:
  - cold
  - fire
damage_immunities:
  - lightning
condition_immunities:
  - blinded
  - deafened
  - exhaustion
cr: '5'
traits:
  - name: Lightning Absorption
    entries:
      - Whenever the shambling mound is subjected to lightning damage, it takes no damage and regains a number of hit points equal to the lightning damage dealt.
actions:
  - name: Multiattack
    entries:
      - The shambling mound makes two slam attacks. If both attacks hit a Medium or smaller target, the target is grappled (escape `dc:CON`), and the shambling mound uses its Engulf on it.
  - name: Slam
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d8+STR` bludgeoning damage.'
  - name: Engulf
    entries:
      - The shambling mound engulfs a Medium or smaller creature grappled by it. The engulfed target is blinded, restrained, and unable to breathe, and it must succeed on a `dc:CON` Constitution saving throw at the start of each of the mound's turns or take `damage:2d8+STR` bludgeoning damage. If the mound moves, the engulfed target moves with it. The mound can have only one creature engulfed at a time.
```
