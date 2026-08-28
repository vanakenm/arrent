---
archivist: true
entity_type: monster
slug: srd-5e_monster_erinyes
name: Erinyes
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.990Z'
---

```monster
slug: srd-5e_monster_erinyes
name: Erinyes
edition: '2014'
source: SRD 5.1
size: medium
type: fiend
ac:
  - ac: 18
    from:
      - plate
hp:
  average: 153
  formula: 18d8+72
speed:
  walk: 30
  fly: 60
abilities:
  str: 18
  dex: 16
  con: 18
  int: 14
  wis: 14
  cha: 18
senses:
  - truesight 120 ft.
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
      - The erinyes makes three attacks
  - name: Longsword
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d8+STR` slashing damage, or `dmg:1d10+STR` slashing damage if used with two hands, plus `dmg:3d8` poison damage.'
    attacks:
      - name: Longsword attack
        type: melee
        bonus: 8
        damage: 1d10
        damage_type: thunder
        range:
          reach: 5
  - name: Longbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX+PB`, range 150/600 ft., one target. Hit: `dmg:1d8+DEX` piercing damage plus `dmg:3d8` poison damage, and the target must succeed on a `dc:14` Constitution saving throw or be poisoned. The poison lasts until it is removed by the lesser restoration spell or similar magic.'
    attacks:
      - name: Longbow attack
        type: ranged
        bonus: 7
        damage: 1d8
        damage_type: thunder
        range:
          normal: 150
          long: 600
  - name: 'Variant: Rope of Entanglement'
    entries:
      - Some erinyes carry a rope of entanglement (detailed in the Dungeon Master's Guide). When such an erinyes uses its Multiattack, the erinyes can use the rope in place of two of the attacks.
reactions:
  - name: Parry
    entries:
      - The erinyes adds 4 to its AC against one melee attack that would hit it. To do so, the erinyes must see the attacker and be wielding a melee weapon.
legendary_actions: []
traits:
  - name: Hellish Weapons
    entries:
      - The erinyes's weapon attacks are magical and deal an extra `dmg:3d8` poison damage on a hit (included in the attacks).
  - name: Magic Resistance
    entries:
      - The erinyes has advantage on saving throws against spells and other magical effects.
cr: '12'
saves:
  dex: 7
  con: 8
  wis: 6
  cha: 8
subtype: Devils
alignment: lawful evil
passive_perception: 12
```
