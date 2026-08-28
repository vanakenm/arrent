---
archivist: true
entity_type: monster
slug: srd-5e_monster_giant-hyena
name: Giant Hyena
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.995Z'
---

```monster
slug: srd-5e_monster_giant-hyena
name: Giant Hyena
edition: '2014'
source: SRD 5.1
size: large
type: beast
ac:
  - ac: 12
hp:
  average: 45
  formula: 6d10+12
speed:
  walk: 50
abilities:
  str: 16
  dex: 14
  con: 14
  int: 2
  wis: 12
  cha: 7
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 5
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Rampage
    entries:
      - When the hyena reduces a creature to 0 hit points with a melee attack on its turn, the hyena can take a bonus action to move up to half its speed and make a bite attack.
cr: '1'
skills:
  perception: 3
alignment: unaligned
passive_perception: 13
```
