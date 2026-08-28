---
archivist: true
entity_type: monster
slug: srd-2024_monster_ettercap
name: Ettercap
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.418Z'
---

```monster
slug: srd-2024_monster_ettercap
name: Ettercap
edition: '2024'
source: SRD 5.2
size: medium
type: monstrosity
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 44
  formula: 8d8 + 8
speed:
  walk: 30
  climb: 30
abilities:
  str: 14
  dex: 15
  con: 13
  int: 7
  wis: 12
  cha: 8
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
      - The ettercap makes one Bite attack and one Claw attack.
  - name: Reel
    entries:
      - The ettercap pulls one creature within 30 feet of itself that is Restrained by its Web Strand up to 25 feet straight toward itself.
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d6+STR` Piercing damage plus `dmg:1d4` Poison damage, and the target has the Poisoned condition until the start of the ettercap''s next turn.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 1d6+2
        damage_type: piercing
        range:
          reach: 5
  - name: Claw
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d4+STR` Slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 4
        damage: 2d4+2
        damage_type: slashing
        range:
          reach: 5
  - name: Web Strand
    entries:
      - 'Dexterity Saving Throw: `dc:DEX`, one Large or smaller creature the ettercap can see within 30 feet. Failure: The target has the Restrained condition until the web is destroyed (AC 10; HP 5; Vulnerability to Fire damage; Immunity to Bludgeoning, Poison, and Psychic damage).'
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits:
  - name: Spider Climb
    entries:
      - The ettercap can climb difficult surfaces, including along ceilings, without needing to make an ability check.
  - name: Web Walker
    entries:
      - The ettercap ignores movement restrictions caused by webs, and the ettercap knows the location of any other creature in contact with the same web.
cr: '2'
saves:
  str: 2
  dex: 2
  con: 1
  int: -2
  wis: 1
  cha: -1
skills:
  perception: 3
  stealth: 4
  survival: 3
alignment: neutral evil
passive_perception: 13
```
