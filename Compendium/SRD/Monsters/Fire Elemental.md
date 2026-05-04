---
archivist: true
entity_type: monster
slug: fire-elemental
name: Fire Elemental
compendium: SRD
---

```monster
name: Fire Elemental
size: Large
type: Elemental
alignment: neutral
ac:
  - ac: 13
hp:
  average: 102
  formula: 12d10+36
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
passive_perception: 10
languages:
  - Ignan
damage_resistances:
  - bludgeoning
  - piercing
  - and slashing from nonmagical attacks
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
cr: '5'
traits:
  - name: Fire Form
    entries:
      - The elemental can move through a space as narrow as 1 inch wide without squeezing. A creature that touches the elemental or hits it with a melee attack while within 5 ft. of it takes `damage:1d10` fire damage. In addition, the elemental can enter a hostile creature's space and stop there. The first time it enters a creature's space on a turn, that creature takes `damage:1d10` fire damage and catches fire; until someone takes an action to douse the fire, the creature takes `damage:1d10` fire damage at the start of each of its turns.
  - name: Illumination
    entries:
      - The elemental sheds bright light in a 30-foot radius and dim light in an additional 30 ft..
  - name: Water Susceptibility
    entries:
      - For every 5 ft. the elemental moves in water, or for every gallon of water splashed on it, it takes 1 cold damage.
actions:
  - name: Multiattack
    entries:
      - The elemental makes two touch attacks.
  - name: Touch
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: `damage:2d6+DEX` fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes `damage:1d10` fire damage at the start of each of its turns.'
```
