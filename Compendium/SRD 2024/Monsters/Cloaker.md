---
archivist: true
entity_type: monster
slug: srd-2024_monster_cloaker
name: Cloaker
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.413Z'
---

```monster
slug: srd-2024_monster_cloaker
name: Cloaker
edition: '2024'
source: SRD 5.2
size: large
type: aberration
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 91
  formula: 14d10 + 14
speed:
  walk: 10
  fly: 40
abilities:
  str: 17
  dex: 15
  con: 12
  int: 13
  wis: 14
  cha: 7
senses:
  - darkvision 120 ft.
languages:
  - Deep Speech
  - Undercommon
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The cloaker makes one Attach attack and two Tail attacks.
  - name: Moan
    entries:
      - 'Wisdom Saving Throw: `dc:WIS`, each creature in a 60-foot Emanation originating from the cloaker. Failure: The target has the Frightened condition until the end of the cloaker''s next turn. Success: The target is immune to this cloaker''s Moan for the next 24 hours.'
  - name: Attach
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:3d6+STR` Piercing damage. If the target is a Large or smaller creature, the cloaker attaches to it. While the cloaker is attached, the target has the Blinded condition, and the cloaker can''t make Attach attacks against other targets. In addition, the cloaker halves the damage it takes (round down), and the target takes the same amount of damage. The cloaker can detach itself by spending 5 feet of movement. The target or a creature within 5 feet of it can take an action to try to detach the cloaker, doing so by succeeding on a `dc:STR` Strength (Athletics) check.'
    attacks:
      - name: Attach attack
        type: melee
        bonus: 6
        damage: 3d6+3
        damage_type: piercing
        range:
          reach: 5
  - name: Phantasms (Recharge after a Short or Long Rest)
    entries:
      - The cloaker casts the Mirror Image spell, requiring no spell components and using Wisdom as the spellcasting ability. The spell ends early if the cloaker starts or ends its turn in Bright Light.
  - name: Tail
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:1d10+STR` Slashing damage.'
    attacks:
      - name: Tail attack
        type: melee
        bonus: 6
        damage: 1d10+3
        damage_type: slashing
        range:
          reach: 10
reactions: []
legendary_actions: []
traits:
  - name: Light Sensitivity
    entries:
      - While in Bright Light, the cloaker has Disadvantage on attack rolls.
cr: '8'
saves:
  str: 3
  dex: 2
  con: 1
  int: 1
  wis: 2
  cha: -2
skills:
  stealth: 5
alignment: chaotic neutral
passive_perception: 12
```
