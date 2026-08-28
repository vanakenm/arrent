---
archivist: true
entity_type: monster
slug: srd-2024_monster_pirate
name: Pirate
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.438Z'
---

```monster
slug: srd-2024_monster_pirate
name: Pirate
edition: '2024'
source: SRD 5.2
size: small
type: humanoid
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 33
  formula: 6d8 + 6
speed:
  walk: 30
abilities:
  str: 10
  dex: 16
  con: 12
  int: 8
  wis: 12
  cha: 14
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
      - The pirate makes two Dagger attacks. It can replace one attack with a use of Enthralling Panache.
  - name: Dagger
    entries:
      - 'Melee or Ranged Attack Roll: `atk:DEX+PB`, reach 5 ft. or range 20/60 ft. `dmg:1d4+DEX` Piercing damage.'
    attacks:
      - name: Dagger attack
        type: ranged
        bonus: 5
        damage: 1d4+3
        damage_type: piercing
        range:
          reach: 5
          normal: 20
          long: 60
  - name: Enthralling Panache
    entries:
      - 'Wisdom Saving Throw: `dc:12`, one creature the pirate can see within 30 feet. Failure: The target has the Charmed condition until the start of the pirate''s next turn.'
reactions: []
legendary_actions: []
traits: []
cr: '1'
saves:
  str: 0
  dex: 5
  con: 1
  int: -1
  wis: 1
  cha: 4
alignment: neutral
passive_perception: 11
```
