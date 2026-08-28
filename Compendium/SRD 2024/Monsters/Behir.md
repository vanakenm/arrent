---
archivist: true
entity_type: monster
slug: srd-2024_monster_behir
name: Behir
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.410Z'
---

```monster
slug: srd-2024_monster_behir
name: Behir
edition: '2024'
source: SRD 5.2
size: huge
type: monstrosity
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 168
  formula: 16d12 + 64
speed:
  walk: 50
  climb: 50
abilities:
  str: 23
  dex: 16
  con: 18
  int: 7
  wis: 14
  cha: 12
senses:
  - darkvision 90 ft.
languages:
  - Draconic
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - lightning
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The behir makes one Bite attack and uses Constrict.
  - name: Swallow
    entries:
      - 'Dexterity Saving Throw: `dc:18`, one Large or smaller creature Grappled by the behir (the behir can have only one creature swallowed at a time). Failure: The behir swallows the target, which is no longer Grappled. While swallowed, a creature has the Blinded and Restrained conditions, has Cover|XPHB|Total Cover against attacks and other effects outside the behir, and takes `dmg:6d6` Acid damage at the start of each of the behir''s turns. If the behir takes 30 damage or more on a single turn from the swallowed creature, the behir must succeed on a `dc:14` Constitution saving throw at the end of that turn or regurgitate the creature, which falls in a space within 10 feet of the behir and has the Prone condition. If the behir dies, a swallowed creature is no longer Restrained and can escape from the corpse by using 15 feet of movement, exiting Prone.'
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d12+STR` Piercing damage plus `dmg:2d10` Lightning damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 10
        damage: 2d12+6
        damage_type: piercing
        range:
          reach: 10
  - name: Constrict
    entries:
      - 'Strength Saving Throw: `dc:STR`, one Large or smaller creature the behir can see within 5 feet. Failure: `dmg:5d8+STR` Bludgeoning damage. The target has the Grappled condition (escape `dc:CON`), and it has the Restrained condition until the grapple ends.'
  - name: Lightning Breath
    entries:
      - 'Dexterity Saving Throw: `dc:16`, each creature in a 90-foot-long, 5-foot-wide Line. Failure: `dmg:12d10` Lightning damage. Success: Half damage.'
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits: []
cr: '11'
saves:
  str: 6
  dex: 3
  con: 4
  int: -2
  wis: 2
  cha: 1
skills:
  perception: 6
  stealth: 7
alignment: neutral evil
passive_perception: 16
```
