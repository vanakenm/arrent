---
archivist: true
entity_type: monster
slug: srd-2024_monster_weretiger
name: Weretiger
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.453Z'
---

```monster
slug: srd-2024_monster_weretiger
name: Weretiger
edition: '2024'
source: SRD 5.2
size: small
type: monstrosity
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 120
  formula: 16d8 + 48
speed:
  walk: 30
abilities:
  str: 17
  dex: 15
  con: 16
  int: 10
  wis: 13
  cha: 11
senses:
  - darkvision 60 ft.
languages:
  - Common (can't speak in tiger form)
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The weretiger makes two attacks, using Scratch or Longbow in any combination. It can replace one attack with a Bite attack.
  - name: Prowl (Tiger or Hybrid Form Only)
    entries:
      - The weretiger moves up to its Speed without provoking Opportunity Attacks. At the end of this movement, the weretiger can take the Hide action.
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d8+STR` Piercing damage. If the target is a Humanoid, it is subjected to the following effect. Constitution Saving Throw: `dc:CON`. Failure: The target is cursed. If the cursed target drops to 0 Hit Points, it instead becomes a Weretiger under the DM''s control and has 10 Hit Points. Success: The target is immune to this weretiger''s curse for 24 hours.'
    attacks:
      - name: Bite (Tiger or Hybrid Form Only) attack
        type: melee
        bonus: 5
        damage: 2d8+3
        damage_type: piercing
        range:
          reach: 5
  - name: Shape-Shift
    entries:
      - The weretiger shape-shifts into a Large tiger-humanoid hybrid or a Large tiger, or it returns to its true humanoid form. Its game statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed.
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
traits: []
cr: '4'
saves:
  str: 3
  dex: 2
  con: 3
  int: 0
  wis: 1
  cha: 0
skills:
  perception: 5
  stealth: 4
alignment: neutral
passive_perception: 15
```
