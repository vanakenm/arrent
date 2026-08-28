---
archivist: true
entity_type: monster
slug: srd-2024_monster_giant-spider
name: Giant Spider
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.425Z'
---

```monster
slug: srd-2024_monster_giant-spider
name: Giant Spider
edition: '2024'
source: SRD 5.2
size: large
type: beast
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 26
  formula: 4d10 + 4
speed:
  walk: 30
  climb: 30
abilities:
  str: 14
  dex: 16
  con: 12
  int: 2
  wis: 11
  cha: 4
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d8+DEX` Piercing damage plus `dmg:2d6` Poison damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 5
        damage: 1d8+3
        damage_type: piercing
        range:
          reach: 5
  - name: Web
    entries:
      - 'Dexterity Saving Throw: `dc:DEX`, one creature the spider can see within 60 feet. Failure: The target has the Restrained condition until the web is destroyed (AC 10; HP 5; Vulnerability to Fire damage; Immunity to Poison and Psychic damage).'
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits:
  - name: Spider Climb
    entries:
      - The spider can climb difficult surfaces, including along ceilings, without needing to make an ability check.
  - name: Web Walker
    entries:
      - The spider ignores movement restrictions caused by webs, and it knows the location of any other creature in contact with the same web.
cr: '1'
saves:
  str: 2
  dex: 3
  con: 1
  int: -4
  wis: 0
  cha: -3
skills:
  perception: 4
  stealth: 7
alignment: unaligned
passive_perception: 14
```
