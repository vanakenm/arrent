---
archivist: true
entity_type: monster
slug: drow
name: Drow
compendium: SRD
---

```monster
name: Drow
size: Medium
type: Humanoid
subtype: elf
alignment: neutral evil
ac:
  - ac: 15
    from:
      - chain shirt
hp:
  average: 13
  formula: 3d8
speed:
  walk: 30
abilities:
  str: 10
  dex: 14
  con: 10
  int: 11
  wis: 11
  cha: 12
skills:
  perception: 2
  stealth: 4
senses:
  - darkvision 120 ft.
passive_perception: 12
languages:
  - Elvish
  - Undercommon
cr: 1/4
traits:
  - name: Fey Ancestry
    entries:
      - The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep.
  - name: Innate Spellcasting
    entries:
      - |-
        The drow's spellcasting ability is Charisma (spell save `dc:CHA`). It can innately cast the following spells, requiring no material components:
        At will: dancing lights
        1/day each: darkness, faerie fire
  - name: Sunlight Sensitivity
    entries:
      - While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.
actions:
  - name: Shortsword
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: `damage:1d6+DEX` piercing damage.'
  - name: Hand Crossbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX`, range 30/120 ft., one target. Hit: `damage:1d6+DEX` piercing damage, and the target must succeed on a `dc:13` Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake.'
```
