---
archivist: true
entity_type: monster
slug: srd-5e_monster_sahuagin
name: Sahuagin
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.014Z'
---

```monster
slug: srd-5e_monster_sahuagin
name: Sahuagin
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 22
  formula: 4d8+4
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
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - 'The sahuagin makes two melee attacks: one with its bite and one with its claws or spear.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d4+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 3
        damage: 1d4
        damage_type: thunder
        range:
          reach: 5
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d4+STR` slashing damage.'
    attacks:
      - name: Claws attack
        type: melee
        bonus: 3
        damage: 1d4
        damage_type: thunder
        range:
          reach: 5
  - name: Spear
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:STR+PB`, reach 5 ft. or range 20/60 ft., one target. Hit: `dmg:1d6+STR` piercing damage, or `dmg:1d8+STR` piercing damage if used with two hands to make a melee attack.'
    attacks:
      - name: Spear Melee attack
        type: ranged
        bonus: 3
        damage: 1d8
        damage_type: thunder
        range:
          reach: 5
          normal: 20
          long: 60
      - name: Spear Ranged attack
        type: ranged
        bonus: 3
        damage: 1d6
        damage_type: thunder
        range:
          normal: 20
          long: 60
reactions: []
legendary_actions: []
traits:
  - name: Blood Frenzy
    entries:
      - The sahuagin has advantage on melee attack rolls against any creature that doesn't have all its hit points.
  - name: Limited Amphibiousness
    entries:
      - The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating.
  - name: Shark Telepathy
    entries:
      - The sahuagin can magically command any shark within 120 feet of it, using a limited telepathy.
cr: '0.5'
skills:
  perception: 5
alignment: lawful evil
passive_perception: 15
```
