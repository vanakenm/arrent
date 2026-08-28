---
archivist: true
entity_type: monster
slug: srd-2024_monster_balor
name: Balor
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.409Z'
---

```monster
slug: srd-2024_monster_balor
name: Balor
edition: '2024'
source: SRD 5.2
size: huge
type: fiend
ac:
  - ac: 19
    from:
      - natural armor
hp:
  average: 287
  formula: 23d12 + 138
speed:
  walk: 40
  fly: 80
abilities:
  str: 26
  dex: 15
  con: 22
  int: 20
  wis: 16
  cha: 22
senses:
  - truesight 120 ft.
languages:
  - Abyssal; telepathy 120 ft.
damage_vulnerabilities: []
damage_resistances:
  - cold
  - lightning
damage_immunities:
  - fire
  - poison
condition_immunities:
  - charmed
  - frightened
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The balor makes one Flame Whip attack and one Lightning Blade attack.
  - name: Teleport
    entries:
      - The balor teleports itself or a willing demon within 10 feet of itself up to 60 feet to an unoccupied space the balor can see.
  - name: Flame Whip
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 30 ft. `dmg:3d6+STR` Force damage plus `dmg:5d6` Fire damage. If the target is a Huge or smaller creature, the balor pulls the target up to 25 feet straight toward itself, and the target has the Prone condition.'
    attacks:
      - name: Flame Whip attack
        type: melee
        bonus: 14
        damage: 3d6+8
        damage_type: force
        range:
          reach: 30
  - name: Lightning Blade
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:3d8+STR` Force damage plus `dmg:4d10` Lightning damage, and the target can''t take Reactions until the start of the balor''s next turn.'
    attacks:
      - name: Lightning Blade attack
        type: melee
        bonus: 14
        damage: 3d8+8
        damage_type: force
        range:
          reach: 10
reactions: []
legendary_actions: []
traits:
  - name: Death Throes
    entries:
      - 'The balor explodes when it dies. Dexterity Saving Throw: `dc:20`, each creature in a 30-foot Emanation originating from the balor. Failure: `dmg:9d6` Fire damage plus `dmg:9d6` Force damage. Success: Half damage. Failure or Success: If the balor dies outside the Abyss, it gains a new body instantly, reviving with all its Hit Points somewhere in the Abyss.'
  - name: Fire Aura
    entries:
      - At the end of each of the balor's turns, each creature in a 5-foot Emanation originating from the balor takes `dmg:3d8` Fire damage.
  - name: Legendary Resistance (3/Day)
    entries:
      - If the balor fails a saving throw, it can choose to succeed instead.
  - name: Magic Resistance
    entries:
      - The balor has Advantage on saving throws against spells and other magical effects.
cr: '19'
saves:
  str: 8
  dex: 2
  con: 12
  int: 5
  wis: 9
  cha: 6
skills:
  perception: 9
alignment: chaotic evil
passive_perception: 19
legendary_resistance: 3
```
