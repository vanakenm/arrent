---
archivist: true
entity_type: monster
slug: srd-5e_monster_salamander
name: Salamander
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.014Z'
---

```monster
slug: srd-5e_monster_salamander
name: Salamander
edition: '2014'
source: SRD 5.1
size: large
type: elemental
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 90
  formula: 12d10+24
speed:
  walk: 30
abilities:
  str: 18
  dex: 14
  con: 15
  int: 11
  wis: 10
  cha: 12
senses:
  - darkvision 60 ft.
languages:
  - Ignan
damage_vulnerabilities:
  - cold
damage_resistances:
  - bludgeoning
  - piercing
  - slashing
damage_immunities:
  - fire
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - 'The salamander makes two attacks: one with its spear and one with its tail.'
  - name: Spear
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:STR+PB`, reach 5 ft. or range 20/60 ft., one target. Hit: `dmg:2d6+STR` piercing damage, or `dmg:2d8+STR` piercing damage if used with two hands to make a melee attack, plus `dmg:1d6` fire damage.'
    attacks:
      - name: Spear Melee attack
        type: ranged
        bonus: 7
        damage: 2d8
        damage_type: thunder
        range:
          reach: 5
          normal: 20
          long: 60
      - name: Spear Ranged attack
        type: ranged
        bonus: 7
        damage: 2d6
        damage_type: thunder
        range:
          normal: 20
          long: 60
  - name: Tail
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:2d6+STR` bludgeoning damage plus `dmg:2d6` fire damage, and the target is grappled (escape `dc:14`). Until this grapple ends, the target is restrained, the salamander can automatically hit the target with its tail, and the salamander can''t make tail attacks against other targets.'
    attacks:
      - name: Tail attack
        type: melee
        bonus: 7
        damage: 2d6
        damage_type: thunder
        range:
          reach: 10
reactions: []
legendary_actions: []
traits:
  - name: Heated Body
    entries:
      - A creature that touches the salamander or hits it with a melee attack while within 5 ft. of it takes `dmg:2d6` fire damage.
  - name: Heated Weapons
    entries:
      - Any metal melee weapon the salamander wields deals an extra `dmg:1d6` fire damage on a hit (included in the attack).
cr: '5'
alignment: neutral evil
passive_perception: 10
```
