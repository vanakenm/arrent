---
archivist: true
entity_type: monster
slug: sprite
name: Sprite
compendium: SRD
---

```monster
name: Sprite
size: Tiny
type: Fey
alignment: neutral good
ac:
  - ac: 15
    from:
      - leather armor
hp:
  average: 2
  formula: 1d4
speed:
  walk: 10
  fly: 40
abilities:
  str: 3
  dex: 18
  con: 10
  int: 14
  wis: 13
  cha: 11
skills:
  perception: 3
  stealth: 8
passive_perception: 13
languages:
  - Common
  - Elvish
  - Sylvan
cr: 1/4
actions:
  - name: Longsword
    entries:
      - 'Melee Weapon Attack: `atk:CON`, reach 5 ft., one target. Hit: 1 slashing damage.'
  - name: Shortbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX`, range 40/160 ft., one target. Hit: 1 piercing damage, and the target must succeed on a `dc:CON` Constitution saving throw or become poisoned for 1 minute. If its saving throw result is 5 or lower, the poisoned target falls unconscious for the same duration, or until it takes damage or another creature takes an action to shake it awake.'
  - name: Heart Sight
    entries:
      - The sprite touches a creature and magically knows the creature's current emotional state. If the target fails a `dc:CHA` Charisma saving throw, the sprite also knows the creature's alignment. Celestials, fiends, and undead automatically fail the saving throw.
  - name: Invisibility
    entries:
      - The sprite magically turns invisible until it attacks or casts a spell, or until its concentration ends (as if concentrating on a spell). Any equipment the sprite wears or carries is invisible with it.
```
