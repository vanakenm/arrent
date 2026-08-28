---
archivist: true
entity_type: monster
slug: srd-5e_monster_giant-octopus
name: Giant Octopus
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.995Z'
---

```monster
slug: srd-5e_monster_giant-octopus
name: Giant Octopus
edition: '2014'
source: SRD 5.1
size: large
type: beast
ac:
  - ac: 11
hp:
  average: 52
  formula: 8d10+8
speed:
  walk: 10
  swim: 60
abilities:
  str: 17
  dex: 13
  con: 13
  int: 4
  wis: 10
  cha: 4
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Tentacles
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 15 ft., one target. Hit: `dmg:2d6+STR` bludgeoning damage. If the target is a creature, it is grappled (escape `dc:16`). Until this grapple ends, the target is restrained, and the octopus can''t use its tentacles on another target.'
    attacks:
      - name: Tentacles attack
        type: melee
        bonus: 5
        damage: 2d6
        damage_type: thunder
        range:
          reach: 15
  - name: Ink Cloud
    entries:
      - A 20-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action.
reactions: []
legendary_actions: []
traits:
  - name: Hold Breath
    entries:
      - While out of water, the octopus can hold its breath for 1 hour.
  - name: Underwater Camouflage
    entries:
      - The octopus has advantage on Dexterity (Stealth) checks made while underwater.
  - name: Water Breathing
    entries:
      - The octopus can breathe only underwater.
cr: '1'
skills:
  perception: 4
  stealth: 5
alignment: unaligned
passive_perception: 14
```
