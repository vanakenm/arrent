---
archivist: true
entity_type: monster
slug: srd-2024_monster_troll-limb
name: Troll Limb
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.449Z'
---

```monster
slug: srd-2024_monster_troll-limb
name: Troll Limb
edition: '2024'
source: SRD 5.2
size: small
type: giant
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 14
  formula: 4d6
speed:
  walk: 20
abilities:
  str: 18
  dex: 12
  con: 10
  int: 1
  wis: 9
  cha: 1
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d4+STR` Slashing damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 6
        damage: 2d4+4
        damage_type: slashing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Regeneration
    entries:
      - The limb regains 5 Hit Points at the start of each of its turns. If the limb takes Acid or Fire damage, this trait doesn't function on the limb's next turn. The limb dies only if it starts its turn with 0 Hit Points and doesn't regenerate.
  - name: Troll Spawn
    entries:
      - The limb uncannily has the same senses as a whole troll. If the limb isn't destroyed within 24 hours, roll `dice:1d12`. On a 12, the limb turns into a Troll. Otherwise, the limb withers away.
cr: '0.5'
saves:
  str: 4
  dex: 1
  con: 0
  int: -5
  wis: -1
  cha: -5
alignment: chaotic evil
passive_perception: 9
```
