---
archivist: true
entity_type: monster
slug: srd-2024_monster_vampire-spawn
name: Vampire Spawn
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.451Z'
---

```monster
slug: srd-2024_monster_vampire-spawn
name: Vampire Spawn
edition: '2024'
source: SRD 5.2
size: small
type: undead
ac:
  - ac: 16
    from:
      - natural armor
hp:
  average: 90
  formula: 12d8 + 36
speed:
  walk: 30
abilities:
  str: 16
  dex: 16
  con: 16
  int: 11
  wis: 10
  cha: 12
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
      - The vampire makes two Claw attacks and uses Bite.
  - name: Deathless Agility
    entries:
      - The vampire takes the Dash or Disengage action.
  - name: Claw
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d4+STR` Slashing damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape `dc:13`) from one of two claws.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 6
        damage: 2d4+3
        damage_type: slashing
        range:
          reach: 5
  - name: Bite
    entries:
      - 'Constitution Saving Throw: `dc:CON`, one creature within 5 feet that is willing or that has the Grappled, Incapacitated, or Restrained condition. Failure: `dmg:1d4+STR` Piercing damage plus `dmg:3d6` Necrotic damage. The target''s Hit Point maximum decreases by an amount equal to the Necrotic damage taken, and the vampire regains Hit Points equal to that amount.'
reactions: []
legendary_actions: []
traits:
  - name: Spider Climb
    entries:
      - The vampire can climb difficult surfaces, including along ceilings, without needing to make an ability check.
  - name: Vampire Weakness
    entries:
      - |-
        The vampire has these weaknesses:

        - **Forbiddance:** The vampire can't enter a residence without an invitation from an occupant.
        - **Running Water:** The vampire takes 20 Acid damage if it ends its turn in running water.
        - **Stake to the Heart:** The vampire is destroyed if a weapon that deals Piercing damage is driven into the vampire's heart while the vampire has the Incapacitated condition.
        - **Sunlight:** The vampire takes 20 Radiant damage if it starts its turn in sunlight. While in sunlight, it has Disadvantage on attack rolls and ability checks.
cr: '5'
saves:
  str: 3
  dex: 6
  con: 3
  int: 0
  wis: 3
  cha: 1
skills:
  perception: 3
  stealth: 6
alignment: neutral evil
passive_perception: 13
```
