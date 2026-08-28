---
archivist: true
entity_type: monster
slug: srd-5e_monster_killer-whale
name: Killer Whale
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.003Z'
---

```monster
slug: srd-5e_monster_killer-whale
name: Killer Whale
edition: '2014'
source: SRD 5.1
size: huge
type: beast
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 90
  formula: 12d12+12
speed:
  swim: 60
abilities:
  str: 19
  dex: 10
  con: 13
  int: 3
  wis: 12
  cha: 7
senses:
  - blindsight 120 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:5d6+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 6
        damage: 5d6
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Echolocation
    entries:
      - The whale can't use its blindsight while deafened.
  - name: Hold Breath
    entries:
      - The whale can hold its breath for 30 minutes
  - name: Keen Hearing
    entries:
      - The whale has advantage on Wisdom (Perception) checks that rely on hearing.
cr: '3'
skills:
  perception: 3
alignment: unaligned
passive_perception: 13
```
