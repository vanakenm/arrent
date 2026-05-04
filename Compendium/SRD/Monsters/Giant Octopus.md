---
archivist: true
entity_type: monster
slug: giant-octopus
name: Giant Octopus
compendium: SRD
---

```monster
name: Giant Octopus
size: Large
type: Beast
alignment: unaligned
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
skills:
  perception: 4
  stealth: 5
senses:
  - darkvision 60 ft.
passive_perception: 14
cr: '1'
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
actions:
  - name: Tentacles
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 15 ft., one target. Hit: `damage:2d6+STR` bludgeoning damage. If the target is a creature, it is grappled (escape `dc:16`). Until this grapple ends, the target is restrained, and the octopus can''t use its tentacles on another target.'
  - name: Ink Cloud (Recharges after a Short or Long Rest)
    entries:
      - A 20-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action.
```
