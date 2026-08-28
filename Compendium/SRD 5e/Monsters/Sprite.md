---
archivist: true
entity_type: monster
slug: srd-5e_monster_sprite
name: Sprite
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.017Z'
---

```monster
slug: srd-5e_monster_sprite
name: Sprite
edition: '2014'
source: SRD 5.1
size: tiny
type: fey
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
senses: []
languages:
  - Common
  - Elvish
  - Sylvan
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Longsword
    entries:
      - 'Melee Weapon Attack: `atk:+2`, reach 5 ft., one target. Hit: `dmg:1` slashing damage.'
    attacks:
      - name: Longsword attack
        type: melee
        bonus: 2
        damage_type: thunder
        range:
          reach: 5
  - name: Shortbow
    entries:
      - 'Ranged Weapon Attack: `atk:+6`, range 40/160 ft., one target. Hit: `dmg:1` piercing damage, and the target must succeed on a `dc:CON` Constitution saving throw or become poisoned for 1 minute. If its saving throw result is 5 or lower, the poisoned target falls unconscious for the same duration, or until it takes damage or another creature takes an action to shake it awake.'
    attacks:
      - name: Shortbow attack
        type: ranged
        bonus: 6
        damage_type: thunder
        range:
          normal: 40
          long: 160
  - name: Heart Sight
    entries:
      - The sprite touches a creature and magically knows the creature's current emotional state. If the target fails a `dc:CHA` Charisma saving throw, the sprite also knows the creature's alignment. Celestials, fiends, and undead automatically fail the saving throw.
  - name: Invisibility
    entries:
      - The sprite magically turns invisible until it attacks or casts a spell, or until its concentration ends (as if concentrating on a spell). Any equipment the sprite wears or carries is invisible with it.
reactions: []
legendary_actions: []
traits: []
cr: '0.25'
skills:
  perception: 3
  stealth: 8
alignment: neutral good
passive_perception: 13
```
