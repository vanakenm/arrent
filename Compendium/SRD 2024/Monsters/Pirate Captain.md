---
archivist: true
entity_type: monster
slug: srd-2024_monster_pirate-captain
name: Pirate Captain
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.438Z'
---

```monster
slug: srd-2024_monster_pirate-captain
name: Pirate Captain
edition: '2024'
source: SRD 5.2
size: small
type: humanoid
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 84
  formula: 13d8 + 26
speed:
  walk: 30
abilities:
  str: 10
  dex: 18
  con: 14
  int: 10
  wis: 14
  cha: 17
senses: []
languages:
  - Common plus one other language
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The pirate makes three attacks, using Rapier or Pistol in any combination.
  - name: Captain's Charm
    entries:
      - 'Wisdom Saving Throw: `dc:14`, one creature the pirate can see within 30 feet. Failure: The target has the Charmed condition until the start of the pirate''s next turn.'
  - name: Rapier
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:2d8+DEX` Piercing damage, and the pirate has Advantage on the next attack roll it makes before the end of this turn.'
    attacks:
      - name: Rapier attack
        type: melee
        bonus: 7
        damage: 2d8+4
        damage_type: piercing
        range:
          reach: 5
  - name: Pistol
    entries:
      - 'Ranged Attack Roll: `atk:DEX+PB`, range 30/90 ft. `dmg:2d10+DEX` Piercing damage.'
    attacks:
      - name: Pistol attack
        type: ranged
        bonus: 7
        damage: 2d10+4
        damage_type: piercing
        range:
          normal: 30
          long: 90
reactions:
  - name: Riposte
    entries:
      - _Trigger:_ The pirate is hit by a melee attack roll while holding a weapon. _Response:_ The pirate adds 3 to its AC against that attack, possibly causing it to miss. On a miss, the pirate makes one Rapier attack against the triggering creature if within range.
legendary_actions: []
traits: []
cr: '6'
saves:
  str: 3
  dex: 7
  con: 2
  int: 0
  wis: 5
  cha: 6
skills:
  acrobatics: 7
  perception: 5
alignment: neutral
passive_perception: 15
```
