---
archivist: true
entity_type: monster
slug: srd-5e_monster_bone-devil
name: Bone Devil
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.983Z'
---

```monster
slug: srd-5e_monster_bone-devil
name: Bone Devil
edition: '2014'
source: SRD 5.1
size: large
type: fiend
ac:
  - ac: 19
    from:
      - natural armor
hp:
  average: 142
  formula: 15d10+60
speed:
  walk: 40
  fly: 40
abilities:
  str: 18
  dex: 16
  con: 18
  int: 13
  wis: 14
  cha: 16
senses:
  - darkvision 120 ft.
languages:
  - Infernal
  - telepathy 120 ft.
damage_vulnerabilities: []
damage_resistances:
  - bludgeoning
  - cold
  - piercing
  - slashing
damage_immunities:
  - fire
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Multiattack
    entries:
      - 'The devil makes three attacks: two with its claws and one with its sting.'
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:1d8+STR` slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 8
        damage: 1d8
        damage_type: thunder
        range:
          reach: 10
  - name: Sting
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:2d8+STR` piercing damage plus `dmg:5d6` poison damage, and the target must succeed on a `dc:14` Constitution saving throw or become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.'
    attacks:
      - name: Sting attack
        type: melee
        bonus: 8
        damage: 2d8
        damage_type: thunder
        range:
          reach: 10
reactions: []
legendary_actions: []
traits:
  - name: Devil's Sight
    entries:
      - Magical darkness doesn't impede the devil's darkvision.
  - name: Magic Resistance
    entries:
      - The devil has advantage on saving throws against spells and other magical effects.
cr: '9'
saves:
  int: 5
  wis: 6
  cha: 7
skills:
  deception: 7
  insight: 6
subtype: Devils
alignment: lawful evil
passive_perception: 9
```
