---
archivist: true
entity_type: monster
slug: srd-2024_monster_wererat
name: Wererat
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.453Z'
---

```monster
slug: srd-2024_monster_wererat
name: Wererat
edition: '2024'
source: SRD 5.2
size: small
type: monstrosity
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 60
  formula: 11d8 + 11
speed:
  walk: 30
  climb: 30
abilities:
  str: 10
  dex: 16
  con: 12
  int: 11
  wis: 10
  cha: 8
senses:
  - darkvision 60 ft.
languages:
  - Common (can't speak in rat form)
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The wererat makes two attacks, using Scratch or Hand Crossbow in any combination. It can replace one attack with a Bite attack.
  - name: Shape-Shift
    entries:
      - The wererat shape-shifts into a Medium rat-humanoid hybrid or a Small rat, or it returns to its true humanoid form. Its game statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed.
  - name: 'Bite '
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:2d4+DEX` Piercing damage. If the target is a Humanoid, it is subjected to the following effect. Constitution Saving Throw: `dc:CON`. Failure: The target is cursed. If the cursed target drops to 0 Hit Points, it instead becomes a Wererat under the DM''s control and has 10 Hit Points. Success: The target is immune to this wererat''s curse for 24 hours.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 5
        damage: 2d4+3
        damage_type: piercing
        range:
          reach: 5
  - name: Scratch
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d6+DEX` Slashing damage.'
    attacks:
      - name: Scratch attack
        type: melee
        bonus: 5
        damage: 1d6+3
        damage_type: slashing
        range:
          reach: 5
  - name: Hand Crossbow
    entries:
      - 'Ranged Attack Roll: `atk:DEX+PB`, range 30/120 ft. `dmg:1d6+DEX` Piercing damage.'
    attacks:
      - name: Hand Crossbow attack
        type: ranged
        bonus: 5
        damage: 1d6+3
        damage_type: piercing
        range:
          normal: 30
          long: 120
reactions: []
legendary_actions: []
traits: []
cr: '2'
saves:
  str: 0
  dex: 3
  con: 1
  int: 0
  wis: 0
  cha: -1
skills:
  perception: 4
  stealth: 5
alignment: lawful evil
passive_perception: 14
```
