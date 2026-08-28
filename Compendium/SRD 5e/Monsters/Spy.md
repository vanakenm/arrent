---
archivist: true
entity_type: monster
slug: srd-5e_monster_spy
name: Spy
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.017Z'
---

```monster
slug: srd-5e_monster_spy
name: Spy
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 12
hp:
  average: 27
  formula: 6d8
speed:
  walk: 30
abilities:
  str: 10
  dex: 15
  con: 10
  int: 12
  wis: 14
  cha: 16
senses: []
languages:
  - any two languages
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The spy makes two melee attacks.
  - name: Shortsword
    entries:
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one target. Hit: `dmg:1d6+DEX` piercing damage.'
    attacks:
      - name: Shortsword attack
        type: melee
        bonus: 4
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
  - name: Hand Crossbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX+PB`, range 30/120 ft., one target. Hit: `dmg:1d6+DEX` piercing damage.'
    attacks:
      - name: Hand Crossbow attack
        type: ranged
        bonus: 4
        damage: 1d6
        damage_type: thunder
        range:
          normal: 30
          long: 120
reactions: []
legendary_actions: []
traits:
  - name: Cunning Action
    entries:
      - On each of its turns, the spy can use a bonus action to take the Dash, Disengage, or Hide action.
  - name: Sneak Attack (1/Turn)
    entries:
      - The spy deals an extra `dmg:2d6` damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 ft. of an ally of the spy that isn't incapacitated and the spy doesn't have disadvantage on the attack roll.
cr: '1'
skills:
  deception: 5
  insight: 4
  investigation: 5
  perception: 6
  persuasion: 5
  stealth: 4
alignment: any alignment
passive_perception: 16
```
