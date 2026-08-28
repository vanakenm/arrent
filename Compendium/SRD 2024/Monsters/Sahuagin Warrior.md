---
archivist: true
entity_type: monster
slug: srd-2024_monster_sahuagin-warrior
name: Sahuagin Warrior
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.442Z'
---

```monster
slug: srd-2024_monster_sahuagin-warrior
name: Sahuagin Warrior
edition: '2024'
source: SRD 5.2
size: medium
type: fiend
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 22
  formula: 4d8 + 4
speed:
  walk: 30
  swim: 40
abilities:
  str: 13
  dex: 11
  con: 12
  int: 12
  wis: 13
  cha: 9
senses:
  - darkvision 120 ft.
languages:
  - Sahuagin
damage_vulnerabilities: []
damage_resistances:
  - acid
  - cold
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The sahuagin makes two Claw attacks.
  - name: Aquatic Charge
    entries:
      - The sahuagin swims up to its Swim Speed straight toward an enemy it can see.
  - name: Claw
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d6+STR` Slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 3
        damage: 1d6+1
        damage_type: slashing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Blood Frenzy
    entries:
      - The sahuagin has Advantage on attack rolls against any creature that doesn't have all its Hit Points.
  - name: Limited Amphibiousness
    entries:
      - The sahuagin can breathe air and water, but it must be submerged at least once every 4 hours to avoid suffocating outside water.
  - name: Shark Telepathy
    entries:
      - The sahuagin can magically control sharks within 120 feet of itself, using a special telepathy.
cr: '0.5'
saves:
  str: 1
  dex: 0
  con: 1
  int: 1
  wis: 1
  cha: -1
skills:
  perception: 5
alignment: lawful evil
passive_perception: 15
```
