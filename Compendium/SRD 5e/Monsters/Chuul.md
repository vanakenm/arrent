---
archivist: true
entity_type: monster
slug: srd-5e_monster_chuul
name: Chuul
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.985Z'
---

```monster
slug: srd-5e_monster_chuul
name: Chuul
edition: '2014'
source: SRD 5.1
size: large
type: aberration
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
senses:
  - darkvision 60 ft.
languages:
  - understands Deep Speech but can't speak
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The chuul makes two pincer attacks. If the chuul is grappling a creature, the chuul can also use its tentacles once.
  - name: Pincer
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:2d6+STR` bludgeoning damage. The target is grappled (escape `dc:STR`) if it is a Large or smaller creature and the chuul doesn''t have two other creatures grappled.'
    attacks:
      - name: Pincer attack
        type: melee
        bonus: 6
        damage: 2d6
        damage_type: thunder
        range:
          reach: 10
  - name: Tentacles
    entries:
      - One creature grappled by the chuul must succeed on a `dc:CON` Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
reactions: []
legendary_actions: []
traits:
  - name: Amphibious
    entries:
      - The chuul can breathe air and water.
  - name: Sense Magic
    entries:
      - The chuul senses magic within 120 feet of it at will. This trait otherwise works like the detect magic spell but isn't itself magical.
cr: '4'
skills:
  perception: 4
alignment: chaotic evil
passive_perception: 14
```
