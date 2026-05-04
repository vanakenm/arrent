---
archivist: true
entity_type: monster
slug: octopus
name: Octopus
compendium: SRD
---

```monster
name: Octopus
size: Small
type: Beast
alignment: unaligned
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
skills:
  perception: 2
  stealth: 4
senses:
  - darkvision 30 ft.
passive_perception: 12
cr: '0'
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
actions:
  - name: Tentacles
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: 1 bludgeoning damage, and the target is grappled (escape `dc:CON`). Until this grapple ends, the octopus can''t use its tentacles on another target.'
  - name: Ink Cloud (Recharges after a Short or Long Rest)
    entries:
      - A 5-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action.
```
