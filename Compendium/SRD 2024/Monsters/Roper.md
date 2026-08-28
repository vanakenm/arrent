---
archivist: true
entity_type: monster
slug: srd-2024_monster_roper
name: Roper
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.441Z'
---

```monster
slug: srd-2024_monster_roper
name: Roper
edition: '2024'
source: SRD 5.2
size: large
type: aberration
ac:
  - ac: 20
    from:
      - natural armor
hp:
  average: 93
  formula: 11d10 + 33
speed:
  walk: 10
  climb: 20
abilities:
  str: 18
  dex: 8
  con: 17
  int: 7
  wis: 16
  cha: 6
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The roper makes two Tentacle attacks, uses Reel, and makes two Bite attacks.
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:3d8+STR` Piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 7
        damage: 3d8+4
        damage_type: piercing
        range:
          reach: 5
  - name: Tentacle
    entries:
      - 'Melee Attack Roll: `atk:+7`, reach 60 ft. The target has the Grappled condition (escape `dc:CON`) from one of six tentacles, and the target has the Poisoned condition until the grapple ends. The tentacle can be damaged, freeing a creature it has Grappled when destroyed (AC 20, HP 10, Immunity to Poison and Psychic damage). Damaging the tentacle deals no damage to the roper, and a destroyed tentacle regrows at the start of the roper''s next turn.'
  - name: Reel
    entries:
      - The roper pulls each creature Grappled by it up to 30 feet straight toward it.
reactions: []
legendary_actions: []
traits:
  - name: Spider Climb
    entries:
      - The roper can climb difficult surfaces, including along ceilings, without needing to make an ability check.
cr: '5'
saves:
  str: 4
  dex: -1
  con: 3
  int: -2
  wis: 3
  cha: -2
skills:
  perception: 6
  stealth: 5
alignment: neutral evil
passive_perception: 16
```
