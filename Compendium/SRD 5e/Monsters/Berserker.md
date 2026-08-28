---
archivist: true
entity_type: monster
slug: srd-5e_monster_berserker
name: Berserker
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.981Z'
---

```monster
slug: srd-5e_monster_berserker
name: Berserker
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 13
    from:
      - hide armor
hp:
  average: 67
  formula: 9d8+27
speed:
  walk: 30
abilities:
  str: 16
  dex: 12
  con: 17
  int: 9
  wis: 11
  cha: 9
senses: []
languages:
  - any one language (usually Common)
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Greataxe
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d12+STR` slashing damage.'
    attacks:
      - name: Greataxe attack
        type: melee
        bonus: 5
        damage: 1d12
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Reckless
    entries:
      - At the start of its turn, the berserker can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn.
cr: '2'
alignment: any chaotic alignment
passive_perception: 10
```
