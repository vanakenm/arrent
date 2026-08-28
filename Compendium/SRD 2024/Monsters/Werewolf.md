---
archivist: true
entity_type: monster
slug: srd-2024_monster_werewolf
name: Werewolf
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.453Z'
---

```monster
slug: srd-2024_monster_werewolf
name: Werewolf
edition: '2024'
source: SRD 5.2
size: small
type: monstrosity
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 71
  formula: 11d8 + 22
speed:
  walk: 30
abilities:
  str: 16
  dex: 14
  con: 14
  int: 10
  wis: 11
  cha: 10
senses:
  - darkvision 60 ft.
languages:
  - Common (can't speak in wolf form)
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The werewolf makes two attacks, using Scratch or Longbow in any combination. It can replace one attack with a Bite attack.
  - name: Shape-Shift
    entries:
      - The werewolf shape-shifts into a Large wolf-humanoid hybrid or a Medium wolf, or it returns to its true humanoid form. Its game statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed.
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d8+STR` Piercing damage. If the target is a Humanoid, it is subjected to the following effect. Constitution Saving Throw: `dc:CON`. Failure: The target is cursed. If the cursed target drops to 0 Hit Points, it instead becomes a Werewolf under the DM''s control and has 10 Hit Points. Success: The target is immune to this werewolf''s curse for 24 hours.'
    attacks:
      - name: Bite (Wolf or Hybrid Form Only) attack
        type: melee
        bonus: 5
        damage: 2d8+3
        damage_type: piercing
        range:
          reach: 5
  - name: Scratch
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d6+STR` Slashing damage.'
    attacks:
      - name: Scratch attack
        type: melee
        bonus: 5
        damage: 2d6+3
        damage_type: slashing
        range:
          reach: 5
  - name: Longbow
    entries:
      - 'Ranged Attack Roll: `atk:DEX+PB`, range 150/600 ft. `dmg:2d8+DEX` Piercing damage.'
    attacks:
      - name: Longbow attack
        type: ranged
        bonus: 4
        damage: 2d8+2
        damage_type: piercing
        range:
          normal: 150
          long: 600
reactions: []
legendary_actions: []
traits:
  - name: Pack Tactics
    entries:
      - The werewolf has Advantage on an attack roll against a creature if at least one of the werewolf's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition.
cr: '3'
saves:
  str: 3
  dex: 2
  con: 2
  int: 0
  wis: 0
  cha: 0
skills:
  perception: 4
  stealth: 4
alignment: chaotic evil
passive_perception: 14
```
