---
archivist: true
entity_type: monster
slug: srd-5e_monster_violet-fungus
name: Violet Fungus
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.022Z'
---

```monster
slug: srd-5e_monster_violet-fungus
name: Violet Fungus
edition: '2014'
source: SRD 5.1
size: medium
type: plant
ac:
  - ac: 5
hp:
  average: 18
  formula: 4d8
speed:
  walk: 5
abilities:
  str: 3
  dex: 1
  con: 10
  int: 1
  wis: 3
  cha: 1
senses:
  - blindsight 30 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities:
  - blinded
  - deafened
  - frightened
actions:
  - name: Multiattack
    entries:
      - The fungus makes `dice:1d4` Rotting Touch attacks.
  - name: Rotting Touch
    entries:
      - 'Melee Weapon Attack: `atk:CON+PB`, reach 10 ft., one creature. Hit: `dmg:1d8` necrotic damage.'
    attacks:
      - name: Rotting Touch attack
        type: melee
        bonus: 2
        damage_type: thunder
        range:
          reach: 10
reactions: []
legendary_actions: []
traits:
  - name: False Appearance
    entries:
      - While the violet fungus remains motionless, it is indistinguishable from an ordinary fungus.
cr: '0.25'
subtype: Fungi
alignment: unaligned
passive_perception: 6
```
