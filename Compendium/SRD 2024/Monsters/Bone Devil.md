---
archivist: true
entity_type: monster
slug: srd-2024_monster_bone-devil
name: Bone Devil
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.411Z'
---

```monster
slug: srd-2024_monster_bone-devil
name: Bone Devil
edition: '2024'
source: SRD 5.2
size: large
type: fiend
ac:
  - ac: 16
    from:
      - natural armor
hp:
  average: 161
  formula: 17d10 + 68
speed:
  walk: 40
  fly: 40
abilities:
  str: 18
  dex: 16
  con: 18
  int: 13
  wis: 14
  cha: 16
senses:
  - darkvision 120 ft.
languages:
  - Infernal; telepathy 120 ft.
damage_vulnerabilities: []
damage_resistances:
  - cold
damage_immunities:
  - fire
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The devil makes two Claw attacks and one Infernal Sting attack.
  - name: Claw
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d8+STR` Slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 8
        damage: 2d8+4
        damage_type: slashing
        range:
          reach: 10
  - name: Infernal Sting
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d10+STR` Piercing damage plus `dmg:4d8` Poison damage, and the target has the Poisoned condition until the start of the devil''s next turn. While Poisoned, the target can''t regain Hit Points.'
    attacks:
      - name: Infernal Sting attack
        type: melee
        bonus: 8
        damage: 2d10+4
        damage_type: piercing
        range:
          reach: 10
reactions: []
legendary_actions: []
traits:
  - name: Diabolical Restoration
    entries:
      - If the devil dies outside the Nine Hells, its body disappears in sulfurous smoke, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Nine Hells.
  - name: Magic Resistance
    entries:
      - The devil has Advantage on saving throws against spells and other magical effects.
cr: '9'
saves:
  str: 8
  dex: 3
  con: 4
  int: 5
  wis: 6
  cha: 7
skills:
  deception: 7
  insight: 6
alignment: lawful evil
passive_perception: 12
```
