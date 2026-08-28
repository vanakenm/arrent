---
archivist: true
entity_type: monster
slug: srd-5e_monster_wight
name: Wight
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.025Z'
---

```monster
slug: srd-5e_monster_wight
name: Wight
edition: '2014'
source: SRD 5.1
size: medium
type: undead
ac:
  - ac: 14
    from:
      - studded leather
hp:
  average: 45
  formula: 6d8+18
speed:
  walk: 30
abilities:
  str: 15
  dex: 14
  con: 16
  int: 10
  wis: 13
  cha: 15
senses:
  - darkvision 60 ft.
languages:
  - the languages it knew in life
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - bludgeoning
  - necrotic
  - piercing
  - slashing
condition_immunities:
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The wight makes two longsword attacks or two longbow attacks. It can use its Life Drain in place of one longsword attack.
  - name: Life Drain
    entries:
      - |-
        Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one creature. Hit: `dmg:1d6+STR` necrotic damage. The target must succeed on a `dc:CON` Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.
        A humanoid slain by this attack rises 24 hours later as a zombie under the wight's control, unless the humanoid is restored to life or its body is destroyed. The wight can have no more than twelve zombies under its control at one time.
    attacks:
      - name: Life Drain attack
        type: melee
        bonus: 4
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
  - name: Longsword
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d8+STR` slashing damage, or `dmg:1d10+STR` slashing damage if used with two hands.'
    attacks:
      - name: Longsword attack
        type: melee
        bonus: 4
        damage: 1d10
        damage_type: thunder
        range:
          reach: 5
  - name: Longbow
    entries:
      - 'Ranged Weapon Attack: `atk:STR+PB`, range 150/600 ft., one target. Hit: `dmg:1d8+STR` piercing damage.'
    attacks:
      - name: Longbow attack
        type: ranged
        bonus: 4
        damage: 1d8
        damage_type: thunder
        range:
          normal: 150
          long: 600
reactions: []
legendary_actions: []
traits:
  - name: Sunlight Sensitivity
    entries:
      - While in sunlight, the wight has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.
cr: '3'
skills:
  perception: 3
  stealth: 4
alignment: neutral evil
passive_perception: 13
```
