---
archivist: true
entity_type: monster
slug: erinyes
name: Erinyes
compendium: SRD
---

```monster
name: Erinyes
size: Medium
type: Fiend
subtype: devil
alignment: lawful evil
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
saves:
  dex: 7
  con: 8
  wis: 6
  cha: 8
senses:
  - truesight 120 ft.
passive_perception: 12
languages:
  - Infernal
  - telepathy 120 ft.
damage_resistances:
  - cold; bludgeoning
  - piercing
  - and slashing from nonmagical attacks not made with silvered weapons
damage_immunities:
  - fire
  - poison
condition_immunities:
  - poisoned
cr: '12'
traits:
  - name: Hellish Weapons
    entries:
      - The erinyes's weapon attacks are magical and deal an extra `damage:3d8` poison damage on a hit (included in the attacks).
  - name: Magic Resistance
    entries:
      - The erinyes has advantage on saving throws against spells and other magical effects.
actions:
  - name: Multiattack
    entries:
      - The erinyes makes three attacks
  - name: Longsword
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d8+STR` slashing damage, or `damage:1d10+STR` slashing damage if used with two hands, plus `damage:3d8` poison damage.'
  - name: Longbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX`, range 150/600 ft., one target. Hit: `damage:1d8+DEX` piercing damage plus `damage:3d8` poison damage, and the target must succeed on a `dc:14` Constitution saving throw or be poisoned. The poison lasts until it is removed by the lesser restoration spell or similar magic.'
  - name: 'Variant: Rope of Entanglement'
    entries:
      - Some erinyes carry a rope of entanglement (detailed in the Dungeon Master's Guide). When such an erinyes uses its Multiattack, the erinyes can use the rope in place of two of the attacks.
reactions:
  - name: Parry
    entries:
      - The erinyes adds 4 to its AC against one melee attack that would hit it. To do so, the erinyes must see the attacker and be wielding a melee weapon.
```
