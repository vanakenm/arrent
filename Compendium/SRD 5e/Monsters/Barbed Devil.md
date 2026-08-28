---
archivist: true
entity_type: monster
slug: srd-5e_monster_barbed-devil
name: Barbed Devil
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.980Z'
---

```monster
slug: srd-5e_monster_barbed-devil
name: Barbed Devil
edition: '2014'
source: SRD 5.1
size: medium
type: fiend
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 110
  formula: 13d8+52
speed:
  walk: 30
abilities:
  str: 16
  dex: 17
  con: 18
  int: 12
  wis: 14
  cha: 14
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
      - 'The devil makes three melee attacks: one with its tail and two with its claws. Alternatively, it can use Hurl Flame twice.'
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d6+STR` piercing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 6
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
  - name: Tail
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` piercing damage.'
    attacks:
      - name: Tail attack
        type: melee
        bonus: 6
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
  - name: Hurl Flame
    entries:
      - 'Ranged Spell Attack: `atk:+5`, range 150 ft., one target. Hit: `dmg:3d6` fire damage. If the target is a flammable object that isn''t being worn or carried, it also catches fire.'
    attacks:
      - name: Hurl Flame attack
        type: ranged
        bonus: 5
        damage_type: thunder
        range:
          normal: 150
reactions: []
legendary_actions: []
traits:
  - name: Barbed Hide
    entries:
      - At the start of each of its turns, the barbed devil deals `dmg:1d10` piercing damage to any creature grappling it.
  - name: Devil's Sight
    entries:
      - Magical darkness doesn't impede the devil's darkvision.
  - name: Magic Resistance
    entries:
      - The devil has advantage on saving throws against spells and other magical effects.
cr: '5'
saves:
  str: 6
  con: 7
  wis: 5
  cha: 5
skills:
  deception: 5
  insight: 5
  perception: 8
subtype: Devils
alignment: lawful evil
passive_perception: 18
```
