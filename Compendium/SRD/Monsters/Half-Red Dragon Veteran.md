---
archivist: true
entity_type: monster
slug: half-red-dragon-veteran
name: Half-Red Dragon Veteran
compendium: SRD
---

```monster
name: Half-Red Dragon Veteran
size: Medium
type: Humanoid
subtype: human
alignment: any alignment
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
  - blindsight 10 ft.
  - darkvision 60 ft.
passive_perception: 12
languages:
  - Common
  - Draconic
damage_resistances:
  - fire
cr: '5'
actions:
  - name: Multiattack
    entries:
      - The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack.
  - name: Longsword
    entries:
      - 'Melee Weapon Attack: `atk:CON`, reach 5 ft., one target. Hit: `damage:1d8+STR` slashing damage, or `damage:1d10+STR` slashing damage if used with two hands.'
  - name: Shortsword
    entries:
      - 'Melee Weapon Attack: `atk:CON`, reach 5 ft., one target. Hit: `damage:1d6+STR` piercing damage.'
  - name: Heavy Crossbow
    entries:
      - 'Ranged Weapon Attack: `atk:INT`, range 100/400 ft., one target. Hit: `damage:1d10+DEX` piercing damage.'
  - name: Fire Breath (Recharge 5-6)
    entries:
      - The veteran exhales fire in a 15-foot cone. Each creature in that area must make a `dc:15` Dexterity saving throw, taking `damage:7d6` fire damage on a failed save, or half as much damage on a successful one.
```
