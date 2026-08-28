---
archivist: true
entity_type: monster
slug: srd-2024_monster_assassin
name: Assassin
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.407Z'
---

```monster
slug: srd-2024_monster_assassin
name: Assassin
edition: '2024'
source: SRD 5.2
size: small
type: humanoid
ac:
  - ac: 16
    from:
      - natural armor
hp:
  average: 97
  formula: 15d8 + 30
speed:
  walk: 30
abilities:
  str: 11
  dex: 18
  con: 14
  int: 16
  wis: 11
  cha: 10
senses: []
languages:
  - Common
  - Thieves' cant
damage_vulnerabilities: []
damage_resistances:
  - poison
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The assassin makes three attacks, using Shortsword or Light Crossbow in any combination.
  - name: Cunning Action
    entries:
      - The assassin takes the Dash, Disengage, or Hide action.
  - name: Shortsword
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d6+DEX` Piercing damage plus `dmg:5d6` Poison damage, and the target has the Poisoned condition until the start of the assassin''s next turn.'
    attacks:
      - name: Shortsword attack
        type: melee
        bonus: 7
        damage: 1d6+4
        damage_type: piercing
        range:
          reach: 5
  - name: Light Crossbow
    entries:
      - 'Ranged Attack Roll: `atk:DEX+PB`, range 80/320 ft. `dmg:1d8+DEX` Piercing damage plus `dmg:6d6` Poison damage.'
    attacks:
      - name: Light Crossbow attack
        type: ranged
        bonus: 7
        damage: 1d8+4
        damage_type: piercing
        range:
          normal: 80
          long: 320
reactions: []
legendary_actions: []
traits:
  - name: Evasion
    entries:
      - If the assassin is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the assassin instead takes no damage if it succeeds on the save and only half damage if it fails. It can't use this trait if it has the Incapacitated condition.
cr: '8'
saves:
  str: 0
  dex: 7
  con: 2
  int: 6
  wis: 0
  cha: 0
skills:
  acrobatics: 7
  perception: 6
  stealth: 10
alignment: neutral
passive_perception: 16
```
