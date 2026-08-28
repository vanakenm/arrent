---
archivist: true
entity_type: monster
slug: srd-2024_monster_chimera
name: Chimera
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.413Z'
---

```monster
slug: srd-2024_monster_chimera
name: Chimera
edition: '2024'
source: SRD 5.2
size: large
type: monstrosity
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 114
  formula: 12d10 + 48
speed:
  walk: 30
  fly: 60
abilities:
  str: 19
  dex: 11
  con: 19
  int: 3
  wis: 14
  cha: 10
senses:
  - darkvision 60 ft.
languages:
  - Understands Draconic but can't speak
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The chimera makes one Ram attack, one Bite attack, and one Claw attack. It can replace the Claw attack with a use of Fire Breath if available.
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d6+STR` Piercing damage, or `dmg:4d6+STR` Piercing damage if the chimera had Advantage on the attack roll.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 7
        damage: 2d6+4
        damage_type: piercing
        range:
          reach: 5
  - name: Claw
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d6+STR` Slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 7
        damage: 1d6+4
        damage_type: slashing
        range:
          reach: 5
  - name: Ram
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d12+STR` Bludgeoning damage. If the target is a Medium or smaller creature, it has the Prone condition.'
    attacks:
      - name: Ram attack
        type: melee
        bonus: 7
        damage: 1d12+4
        damage_type: bludgeoning
        range:
          reach: 5
  - name: Fire Breath
    entries:
      - 'Dexterity Saving Throw: `dc:15`, each creature in a 15-foot Cone. Failure: `dmg:7d8` Fire damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits: []
cr: '6'
saves:
  str: 4
  dex: 0
  con: 4
  int: -4
  wis: 2
  cha: 0
skills:
  perception: 8
alignment: chaotic evil
passive_perception: 18
```
