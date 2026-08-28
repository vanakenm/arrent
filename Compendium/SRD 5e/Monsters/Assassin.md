---
archivist: true
entity_type: monster
slug: srd-5e_monster_assassin
name: Assassin
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.979Z'
---

```monster
slug: srd-5e_monster_assassin
name: Assassin
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 15
    from:
      - studded leather
hp:
  average: 78
  formula: 12d8+24
speed:
  walk: 30
abilities:
  str: 11
  dex: 16
  con: 14
  int: 13
  wis: 11
  cha: 10
senses: []
languages:
  - Thieves' cant plus any two languages
damage_vulnerabilities: []
damage_resistances:
  - poison
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The assassin makes two shortsword attacks.
  - name: Shortsword
    entries:
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one target. Hit: `dmg:1d6+DEX` piercing damage, and the target must make a `dc:15` Constitution saving throw, taking `dmg:7d6` poison damage on a failed save, or half as much damage on a successful one.'
    attacks:
      - name: Shortsword attack
        type: melee
        bonus: 6
        damage_type: thunder
        range:
          reach: 5
  - name: Light Crossbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX+PB`, range 80/320 ft., one target. Hit: `dmg:1d8+DEX` piercing damage, and the target must make a `dc:15` Constitution saving throw, taking `dmg:7d6` poison damage on a failed save, or half as much damage on a successful one.'
    attacks:
      - name: Light Crossbow attack
        type: ranged
        bonus: 6
        damage_type: thunder
        range:
          normal: 80
          long: 320
reactions: []
legendary_actions: []
traits:
  - name: Assassinate
    entries:
      - During its first turn, the assassin has advantage on attack rolls against any creature that hasn't taken a turn. Any hit the assassin scores against a surprised creature is a critical hit.
  - name: Evasion
    entries:
      - If the assassin is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the assassin instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.
  - name: Sneak Attack (1/Turn)
    entries:
      - The assassin deals an extra `dmg:4d6` damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 ft. of an ally of the assassin that isn't incapacitated and the assassin doesn't have disadvantage on the attack roll.
cr: '8'
saves:
  dex: 6
  int: 4
skills:
  acrobatics: 6
  deception: 3
  perception: 3
  stealth: 9
alignment: any non-good alignment
passive_perception: 13
```
