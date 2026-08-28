---
archivist: true
entity_type: monster
slug: srd-5e_monster_octopus
name: Octopus
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.009Z'
---

```monster
slug: srd-5e_monster_octopus
name: Octopus
edition: '2014'
source: SRD 5.1
size: small
type: beast
ac:
  - ac: 12
hp:
  average: 3
  formula: 1d6
speed:
  walk: 5
  swim: 30
abilities:
  str: 4
  dex: 15
  con: 11
  int: 3
  wis: 10
  cha: 4
senses:
  - darkvision 30 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Tentacles
    entries:
      - 'Melee Weapon Attack: `atk:+4`, reach 5 ft., one target. Hit: `dmg:1` bludgeoning damage, and the target is grappled (escape `dc:CON`). Until this grapple ends, the octopus can''t use its tentacles on another target.'
    attacks:
      - name: Tentacles attack
        type: melee
        bonus: 4
        damage_type: thunder
        range:
          reach: 5
  - name: Ink Cloud
    entries:
      - A 5-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action.
reactions: []
legendary_actions: []
traits:
  - name: Hold Breath
    entries:
      - While out of water, the octopus can hold its breath for 30 minutes.
  - name: Underwater Camouflage
    entries:
      - The octopus has advantage on Dexterity (Stealth) checks made while underwater.
  - name: Water Breathing
    entries:
      - The octopus can breathe only underwater.
cr: '0'
skills:
  perception: 2
  stealth: 4
alignment: unaligned
passive_perception: 12
```
