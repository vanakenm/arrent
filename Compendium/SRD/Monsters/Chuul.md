---
archivist: true
entity_type: monster
slug: chuul
name: Chuul
compendium: SRD
---

```monster
name: Chuul
size: Large
type: Aberration
alignment: chaotic evil
ac:
  - ac: 16
    from:
      - natural armor
hp:
  average: 93
  formula: 11d10+33
speed:
  walk: 30
  swim: 30
abilities:
  str: 19
  dex: 10
  con: 16
  int: 5
  wis: 11
  cha: 5
skills:
  perception: 4
senses:
  - darkvision 60 ft.
passive_perception: 14
languages:
  - understands Deep Speech but can't speak
damage_immunities:
  - poison
condition_immunities:
  - poisoned
cr: '4'
traits:
  - name: Amphibious
    entries:
      - The chuul can breathe air and water.
  - name: Sense Magic
    entries:
      - The chuul senses magic within 120 feet of it at will. This trait otherwise works like the detect magic spell but isn't itself magical.
actions:
  - name: Multiattack
    entries:
      - The chuul makes two pincer attacks. If the chuul is grappling a creature, the chuul can also use its tentacles once.
  - name: Pincer
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:2d6+STR` bludgeoning damage. The target is grappled (escape `dc:STR`) if it is a Large or smaller creature and the chuul doesn''t have two other creatures grappled.'
  - name: Tentacles
    entries:
      - One creature grappled by the chuul must succeed on a `dc:CON` Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
```
