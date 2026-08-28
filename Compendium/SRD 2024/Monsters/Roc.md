---
archivist: true
entity_type: monster
slug: srd-2024_monster_roc
name: Roc
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.441Z'
---

```monster
slug: srd-2024_monster_roc
name: Roc
edition: '2024'
source: SRD 5.2
size: gargantuan
type: monstrosity
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 248
  formula: 16d20 + 80
speed:
  walk: 20
  fly: 120
abilities:
  str: 28
  dex: 10
  con: 20
  int: 3
  wis: 10
  cha: 9
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The roc makes two Beak attacks. It can replace one attack with a Talons attack.
  - name: Swoop
    entries:
      - If the roc has a creature Grappled, the roc flies up to half its Fly Speed without provoking Opportunity Attacks and drops that creature.
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Beak
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:3d12+STR` Piercing damage.'
    attacks:
      - name: Beak attack
        type: melee
        bonus: 13
        damage: 3d12+9
        damage_type: piercing
        range:
          reach: 10
  - name: Talons
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:4d6+STR` Slashing damage. If the target is a Huge or smaller creature, it has the Grappled condition (escape `dc:19`) from both talons, and it has the Restrained condition until the grapple ends.'
    attacks:
      - name: Talons attack
        type: melee
        bonus: 13
        damage: 4d6+9
        damage_type: slashing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '11'
saves:
  str: 9
  dex: 4
  con: 5
  int: -4
  wis: 4
  cha: -1
skills:
  perception: 8
alignment: unaligned
passive_perception: 18
```
