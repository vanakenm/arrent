---
archivist: true
entity_type: monster
slug: srd-5e_monster_half-red-dragon-veteran
name: Half-Red Dragon Veteran
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.000Z'
---

```monster
slug: srd-5e_monster_half-red-dragon-veteran
name: Half-Red Dragon Veteran
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 18
    from:
      - plate
hp:
  average: 65
  formula: 10d8+20
speed:
  walk: 30
abilities:
  str: 16
  dex: 13
  con: 14
  int: 10
  wis: 11
  cha: 10
senses:
  - darkvision 60 ft.
  - blindsight 10 ft.
languages:
  - Common
  - Draconic
damage_vulnerabilities: []
damage_resistances:
  - fire
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack.
  - name: Longsword
    entries:
      - 'Melee Weapon Attack: `atk:+5`, reach 5 ft., one target. Hit: `dmg:1d8+STR` slashing damage, or `dmg:1d10+STR` slashing damage if used with two hands.'
    attacks:
      - name: Longsword attack
        type: melee
        bonus: 5
        damage: 1d10
        damage_type: thunder
        range:
          reach: 5
  - name: Shortsword
    entries:
      - 'Melee Weapon Attack: `atk:+5`, reach 5 ft., one target. Hit: `dmg:1d6+STR` piercing damage.'
    attacks:
      - name: Shortsword attack
        type: melee
        bonus: 5
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
  - name: Heavy Crossbow
    entries:
      - 'Ranged Weapon Attack: `atk:+3`, range 100/400 ft., one target. Hit: `dmg:1d10+DEX` piercing damage.'
    attacks:
      - name: Heavy Crossbow attack
        type: ranged
        bonus: 3
        damage: 1d10
        damage_type: thunder
        range:
          normal: 100
          long: 400
  - name: Fire Breath
    entries:
      - The veteran exhales fire in a 15-foot cone. Each creature in that area must make a `dc:15` Dexterity saving throw, taking `dmg:7d6` fire damage on a failed save, or half as much damage on a successful one.
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits: []
cr: '5'
skills:
  athletics: 5
  perception: 2
subtype: Half-Dragon Template
alignment: any alignment
passive_perception: 12
```
