---
archivist: true
entity_type: monster
slug: srd-5e_monster_horned-devil
name: Horned Devil
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.001Z'
---

```monster
slug: srd-5e_monster_horned-devil
name: Horned Devil
edition: '2014'
source: SRD 5.1
size: large
type: fiend
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 178
  formula: 17d10+85
speed:
  walk: 20
  fly: 60
abilities:
  str: 22
  dex: 17
  con: 21
  int: 12
  wis: 16
  cha: 17
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
      - 'The devil makes three melee attacks: two with its fork and one with its tail. It can use Hurl Flame in place of any melee attack.'
  - name: Fork
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:2d8+STR` piercing damage.'
    attacks:
      - name: Fork attack
        type: melee
        bonus: 10
        damage: 2d8
        damage_type: thunder
        range:
          reach: 10
  - name: Tail
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:1d8+STR` piercing damage. If the target is a creature other than an undead or a construct, it must succeed on a `dc:CON` Constitution saving throw or lose 10 (`dice:3d6`) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 10 (`dice:3d6`). Any creature can take an action to stanch the wound with a successful `dc:12` Wisdom (Medicine) check. The wound also closes if the target receives magical healing.'
    attacks:
      - name: Tail attack
        type: melee
        bonus: 10
        damage: 1d8
        damage_type: thunder
        range:
          reach: 10
  - name: Hurl Flame
    entries:
      - 'Ranged Spell Attack: `atk:+7`, range 150 ft., one target. Hit: `dmg:4d6` fire damage. If the target is a flammable object that isn''t being worn or carried, it also catches fire.'
    attacks:
      - name: Hurl Flame attack
        type: ranged
        bonus: 7
        damage_type: thunder
        range:
          normal: 150
reactions: []
legendary_actions: []
traits:
  - name: Devil's Sight
    entries:
      - Magical darkness doesn't impede the devil's darkvision.
  - name: Magic Resistance
    entries:
      - The devil has advantage on saving throws against spells and other magical effects.
cr: '11'
saves:
  str: 10
  dex: 7
  wis: 7
  cha: 7
subtype: Devils
alignment: lawful evil
passive_perception: 13
```
