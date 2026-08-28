---
archivist: true
entity_type: monster
slug: srd-5e_monster_grimlock
name: Grimlock
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.999Z'
---

```monster
slug: srd-5e_monster_grimlock
name: Grimlock
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 11
hp:
  average: 11
  formula: 2d8+2
speed:
  walk: 30
abilities:
  str: 16
  dex: 12
  con: 12
  int: 9
  wis: 8
  cha: 6
senses:
  - blindsight 3010 ft.
languages:
  - Undercommon
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities:
  - blinded
actions:
  - name: Spiked Bone Club
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d4+STR` bludgeoning damage plus `dmg:1d4` piercing damage.'
    attacks:
      - name: Spiked Bone Club attack
        type: melee
        bonus: 5
        damage: 1d4
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Blind Senses
    entries:
      - The grimlock can't use its blindsight while deafened and unable to smell.
  - name: Keen Hearing and Smell
    entries:
      - The grimlock has advantage on Wisdom (Perception) checks that rely on hearing or smell.
  - name: Stone Camouflage
    entries:
      - The grimlock has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.
cr: '0.25'
skills:
  athletics: 5
  perception: 3
  stealth: 3
alignment: neutral evil
passive_perception: 13
```
