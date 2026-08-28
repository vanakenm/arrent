---
archivist: true
entity_type: monster
slug: srd-5e_monster_treant
name: Treant
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.021Z'
---

```monster
slug: srd-5e_monster_treant
name: Treant
edition: '2014'
source: SRD 5.1
size: huge
type: plant
ac:
  - ac: 16
    from:
      - natural armor
hp:
  average: 138
  formula: 12d12+60
speed:
  walk: 30
abilities:
  str: 23
  dex: 8
  con: 21
  int: 12
  wis: 16
  cha: 12
senses: []
languages:
  - Common
  - Druidic
  - Elvish
  - Sylvan
damage_vulnerabilities:
  - fire
damage_resistances:
  - bludgeoning
  - piercing
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The treant makes two slam attacks.
  - name: Slam
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:3d6+STR` bludgeoning damage.'
    attacks:
      - name: Slam attack
        type: melee
        bonus: 10
        damage: 3d6
        damage_type: thunder
        range:
          reach: 5
  - name: Rock
    entries:
      - 'Ranged Weapon Attack: `atk:STR+PB`, range 60/180 ft., one target. Hit: `dmg:4d10+STR` bludgeoning damage.'
    attacks:
      - name: Rock attack
        type: ranged
        bonus: 10
        damage: 4d10
        damage_type: thunder
        range:
          normal: 60
          long: 180
  - name: Animate Trees
    entries:
      - The treant magically animates one or two trees it can see within 60 feet of it. These trees have the same statistics as a treant, except they have Intelligence and Charisma scores of 1, they can't speak, and they have only the Slam action option. An animated tree acts as an ally of the treant. The tree remains animate for 1 day or until it dies; until the treant dies or is more than 120 feet from the tree; or until the treant takes a bonus action to turn it back into an inanimate tree. The tree then takes root if possible.
    recharge:
      type: per_day
      param: 1
reactions: []
legendary_actions: []
traits:
  - name: False Appearance
    entries:
      - While the treant remains motionless, it is indistinguishable from a normal tree.
  - name: Siege Monster
    entries:
      - The treant deals double damage to objects and structures.
cr: '9'
alignment: chaotic good
passive_perception: 13
```
