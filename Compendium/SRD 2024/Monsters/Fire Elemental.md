---
archivist: true
entity_type: monster
slug: srd-2024_monster_fire-elemental
name: Fire Elemental
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.419Z'
---

```monster
slug: srd-2024_monster_fire-elemental
name: Fire Elemental
edition: '2024'
source: SRD 5.2
size: large
type: elemental
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 93
  formula: 11d10 + 33
speed:
  walk: 50
abilities:
  str: 10
  dex: 17
  con: 16
  int: 6
  wis: 10
  cha: 7
senses:
  - darkvision 60 ft.
languages:
  - Primordial (Ignan)
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - fire
  - poison
condition_immunities:
  - exhaustion
  - grappled
  - paralyzed
  - petrified
  - poisoned
  - prone
  - restrained
  - unconscious
actions:
  - name: Multiattack
    entries:
      - The elemental makes two Burn attacks.
  - name: Burn
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:2d6+DEX` Fire damage. If the target is a creature or a flammable object, it starts burning.'
    attacks:
      - name: Burn attack
        type: melee
        bonus: 6
        damage: 2d6+3
        damage_type: fire
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Fire Aura
    entries:
      - At the end of each of the elemental's turns, each creature in a 10-foot Emanation originating from the elemental takes `dmg:1d10` Fire damage. Creatures and flammable objects in the Emanation start Hitazard burning.
  - name: Fire Form
    entries:
      - The elemental can move through a space as narrow as 1 inch without expending extra movement to do so, and it can enter a creature's space and stop there. The first time it enters a creature's space on a turn, that creature takes `dmg:1d10` Fire damage.
  - name: Illumination
    entries:
      - The elemental sheds Bright Light in a 30-foot radius and Dim Light for an additional 30 feet.
  - name: Water Susceptibility
    entries:
      - The elemental takes `dmg:1d6` Cold damage for every 5 feet the elemental moves in water or for every gallon of water splashed on it.
cr: '5'
saves:
  str: 0
  dex: 3
  con: 3
  int: -2
  wis: 0
  cha: -2
alignment: neutral
passive_perception: 10
```
