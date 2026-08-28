---
archivist: true
entity_type: monster
slug: srd-5e_monster_crocodile
name: Crocodile
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.986Z'
---

```monster
slug: srd-5e_monster_crocodile
name: Crocodile
edition: '2014'
source: SRD 5.1
size: large
type: beast
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 19
  formula: 3d10+3
speed:
  walk: 20
  swim: 20
abilities:
  str: 15
  dex: 10
  con: 13
  int: 2
  wis: 10
  cha: 5
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one creature. Hit: `dmg:1d10+STR` piercing damage, and the target is grappled (escape `dc:STR`). Until this grapple ends, the target is restrained, and the crocodile can''t bite another target.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Hold Breath
    entries:
      - The crocodile can hold its breath for 15 minutes.
cr: '0.5'
skills:
  stealth: 2
alignment: unaligned
passive_perception: 10
```
