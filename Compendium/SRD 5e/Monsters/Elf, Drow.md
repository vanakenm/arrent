---
archivist: true
entity_type: monster
slug: srd-5e_monster_elf-drow
name: Elf, Drow
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.990Z'
---

```monster
slug: srd-5e_monster_elf-drow
name: Elf, Drow
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 15
hp:
  average: 13
speed: {}
abilities:
  str: 10
  dex: 14
  con: 10
  int: 11
  wis: 11
  cha: 12
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Hand Crossbow
    entries:
      - |
        Ranged Weapon Attack: `atk:DEX+PB`, range 30/120 ft., one target. Hit: `dmg:1d6+DEX` piercing damage, and the target must succeed on a `dc:13` Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake.
    attacks:
      - name: Hand Crossbow attack
        type: ranged
        bonus: 4
        damage: 1d6+2
        damage_type: piercing
        range:
          normal: 30
          long: 120
  - name: Shortsword
    entries:
      - |
        Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one target. Hit: `dmg:1d6+DEX` piercing damage.
    attacks:
      - name: Shortsword attack
        type: melee
        bonus: 4
        damage: 1d6+2
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '0'
skills:
  perception: 2
  stealth: 4
alignment: neutral evil
passive_perception: 12
```
