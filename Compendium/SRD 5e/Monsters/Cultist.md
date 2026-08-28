---
archivist: true
entity_type: monster
slug: srd-5e_monster_cultist
name: Cultist
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.986Z'
---

```monster
slug: srd-5e_monster_cultist
name: Cultist
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 12
    from:
      - leather armor
hp:
  average: 9
  formula: 2d8
speed:
  walk: 30
abilities:
  str: 11
  dex: 12
  con: 10
  int: 10
  wis: 11
  cha: 10
senses: []
languages:
  - any one language (usually Common)
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Scimitar
    entries:
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one creature. Hit: `dmg:1d6+DEX` slashing damage.'
    attacks:
      - name: Scimitar attack
        type: melee
        bonus: 3
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Dark Devotion
    entries:
      - The cultist has advantage on saving throws against being charmed or frightened.
cr: '0.125'
skills:
  deception: 2
  religion: 2
alignment: any non-good alignment
passive_perception: 10
```
