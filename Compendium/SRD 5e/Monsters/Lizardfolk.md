---
archivist: true
entity_type: monster
slug: srd-5e_monster_lizardfolk
name: Lizardfolk
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.005Z'
---

```monster
slug: srd-5e_monster_lizardfolk
name: Lizardfolk
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 15
    from:
      - natural armor, shield
hp:
  average: 22
  formula: 4d8+4
speed:
  walk: 30
  swim: 30
abilities:
  str: 15
  dex: 10
  con: 13
  int: 7
  wis: 12
  cha: 7
senses: []
languages:
  - Draconic
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The lizardfolk makes two melee attacks, each one with a different weapon.
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d6+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
  - name: Heavy Club
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d6+STR` bludgeoning damage.'
    attacks:
      - name: Heavy Club attack
        type: melee
        bonus: 4
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
  - name: Javelin
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:STR+PB`, reach 5 ft. or range 30/120 ft., one target. Hit: `dmg:1d6+STR` piercing damage.'
    attacks:
      - name: Javelin Melee attack
        type: ranged
        bonus: 4
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
          normal: 30
          long: 120
      - name: Javelin Ranged attack
        type: ranged
        bonus: 4
        damage: 1d6
        damage_type: thunder
        range:
          normal: 30
          long: 120
  - name: Spiked Shield
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d6+STR` piercing damage.'
    attacks:
      - name: Spiked Shield attack
        type: melee
        bonus: 4
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Hold Breath
    entries:
      - The lizardfolk can hold its breath for 15 minutes.
cr: '0.5'
skills:
  perception: 3
  stealth: 4
  survival: 5
alignment: neutral
passive_perception: 13
```
