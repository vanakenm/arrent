---
archivist: true
entity_type: monster
slug: assassin
name: Assassin
compendium: SRD
---

```monster
name: Assassin
size: Medium
type: Humanoid
subtype: any race
alignment: any non-good alignment
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
saves:
  dex: 6
  int: 4
skills:
  acrobatics: 6
  deception: 3
  perception: 3
  stealth: 9
passive_perception: 13
languages:
  - Thieves' cant plus any two languages
damage_resistances:
  - poison
cr: '8'
traits:
  - name: Assassinate
    entries:
      - During its first turn, the assassin has advantage on attack rolls against any creature that hasn't taken a turn. Any hit the assassin scores against a surprised creature is a critical hit.
  - name: Evasion
    entries:
      - If the assassin is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the assassin instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.
  - name: Sneak Attack (1/Turn)
    entries:
      - The assassin deals an extra `damage:4d6` damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 ft. of an ally of the assassin that isn't incapacitated and the assassin doesn't have disadvantage on the attack roll.
actions:
  - name: Multiattack
    entries:
      - The assassin makes two shortsword attacks.
  - name: Shortsword
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: `damage:1d6+DEX` piercing damage, and the target must make a `dc:15` Constitution saving throw, taking `damage:7d6` poison damage on a failed save, or half as much damage on a successful one.'
  - name: Light Crossbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX`, range 80/320 ft., one target. Hit: `damage:1d8+DEX` piercing damage, and the target must make a `dc:15` Constitution saving throw, taking `damage:7d6` poison damage on a failed save, or half as much damage on a successful one.'
```
