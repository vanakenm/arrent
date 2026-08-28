---
archivist: true
entity_type: monster
slug: srd-5e_monster_duergar
name: Duergar
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.989Z'
---

```monster
slug: srd-5e_monster_duergar
name: Duergar
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 16
    from:
      - scale mail, shield
hp:
  average: 26
  formula: 4d8+8
speed:
  walk: 25
abilities:
  str: 14
  dex: 11
  con: 14
  int: 11
  wis: 10
  cha: 9
senses:
  - darkvision 120 ft.
languages:
  - Dwarvish
  - Undercommon
damage_vulnerabilities: []
damage_resistances:
  - poison
damage_immunities: []
condition_immunities: []
actions:
  - name: Enlarge
    entries:
      - For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available.
  - name: War Pick
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d8+STR` piercing damage, or `dmg:2d8+STR` piercing damage while enlarged.'
    attacks:
      - name: War Pick attack
        type: melee
        bonus: 4
        damage: 2d8
        damage_type: thunder
        range:
          reach: 5
  - name: Javelin
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:CON+PB`, reach 5 ft. or range 30/120 ft., one target. Hit: `dmg:1d6+CON` piercing damage, or `dmg:2d6+CON` piercing damage while enlarged.'
    attacks:
      - name: Javelin Melee attack
        type: ranged
        bonus: 4
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
          normal: 30
          long: 120
      - name: Javelin Ranged attack
        type: ranged
        bonus: 4
        damage: 2d6
        damage_type: thunder
        range:
          normal: 30
          long: 120
  - name: Invisibility
    entries:
      - The duergar magically turns invisible until it attacks, casts a spell, or uses its Enlarge, or until its concentration is broken, up to 1 hour (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it.
reactions: []
legendary_actions: []
traits:
  - name: Duergar Resilience
    entries:
      - The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed.
  - name: Sunlight Sensitivity
    entries:
      - While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.
cr: '1'
alignment: lawful evil
passive_perception: 10
```
