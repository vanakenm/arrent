---
archivist: true
entity_type: monster
slug: srd-5e_monster_cockatrice
name: Cockatrice
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.985Z'
---

```monster
slug: srd-5e_monster_cockatrice
name: Cockatrice
edition: '2014'
source: SRD 5.1
size: small
type: monstrosity
ac:
  - ac: 11
hp:
  average: 27
  formula: 6d6+6
speed:
  walk: 20
  fly: 40
abilities:
  str: 6
  dex: 12
  con: 12
  int: 2
  wis: 13
  cha: 5
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one creature. Hit: `dmg:1d4+DEX` piercing damage, and the target must succeed on a `dc:CON` Constitution saving throw against being magically petrified. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified for 24 hours.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 3
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '0.5'
alignment: unaligned
passive_perception: 11
```
