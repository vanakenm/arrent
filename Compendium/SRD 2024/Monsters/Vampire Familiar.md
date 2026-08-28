---
archivist: true
entity_type: monster
slug: srd-2024_monster_vampire-familiar
name: Vampire Familiar
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.450Z'
---

```monster
slug: srd-2024_monster_vampire-familiar
name: Vampire Familiar
edition: '2024'
source: SRD 5.2
size: small
type: humanoid
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 65
  formula: 10d8 + 20
speed:
  walk: 30
  climb: 30
abilities:
  str: 17
  dex: 16
  con: 15
  int: 10
  wis: 10
  cha: 14
senses:
  - darkvision 60 ft.
languages:
  - Common plus one other language
damage_vulnerabilities: []
damage_resistances:
  - necrotic
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The familiar makes two Umbral Dagger attacks.
  - name: Deathless Agility
    entries:
      - The familiar takes the Dash or Disengage action.
  - name: Umbral Dagger
    entries:
      - 'Melee or Ranged Attack Roll: `atk:STR+PB`, reach 5 ft. or range 20/60 ft. `dmg:1d4+STR` Piercing damage plus `dmg:3d4` Necrotic damage. If the target is reduced to 0 Hit Points by this attack, the target becomes Stable but has the Poisoned condition for 1 hour. While it has the Poisoned condition, the target has the Paralyzed condition.'
    attacks:
      - name: Umbral Dagger attack
        type: ranged
        bonus: 5
        damage: 1d4+3
        damage_type: piercing
        range:
          reach: 5
          normal: 20
          long: 60
reactions: []
legendary_actions: []
traits:
  - name: Vampiric Connection
    entries:
      - While the familiar and its vampire master are on the same plane of existence, the vampire can communicate with the familiar telepathically, and the vampire can perceive through the familiar's senses.
cr: '3'
saves:
  str: 3
  dex: 5
  con: 2
  int: 0
  wis: 2
  cha: 2
skills:
  perception: 4
  persuasion: 4
  stealth: 7
alignment: neutral evil
passive_perception: 14
```
