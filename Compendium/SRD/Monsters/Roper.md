---
archivist: true
entity_type: monster
slug: roper
name: Roper
compendium: SRD
---

```monster
name: Roper
size: Large
type: Monstrosity
alignment: neutral evil
ac:
  - ac: 20
    from:
      - natural armor
hp:
  average: 93
  formula: 11d10+33
speed:
  walk: 10
  climb: 10
abilities:
  str: 18
  dex: 8
  con: 17
  int: 7
  wis: 16
  cha: 6
skills:
  perception: 6
  stealth: 5
senses:
  - darkvision 60 ft.
passive_perception: 16
cr: '5'
traits:
  - name: False Appearance
    entries:
      - While the roper remains motionless, it is indistinguishable from a normal cave formation, such as a stalagmite.
  - name: Grasping Tendrils
    entries:
      - The roper can have up to six tendrils at a time. Each tendril can be attacked (AC 20; 10 hit points; immunity to poison and psychic damage). Destroying a tendril deals no damage to the roper, which can extrude a replacement tendril on its next turn. A tendril can also be broken if a creature takes an action and succeeds on a `dc:STR` Strength check against it.
  - name: Spider Climb
    entries:
      - The roper can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.
actions:
  - name: Multiattack
    entries:
      - The roper makes four attacks with its tendrils, uses Reel, and makes one attack with its bite.
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:4d8+STR` piercing damage.'
  - name: Tendril
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 50 ft., one creature. Hit: The target is grappled (escape `dc:STR`). Until the grapple ends, the target is restrained and has disadvantage on Strength checks and Strength saving throws, and the roper can''t use the same tendril on another target.'
  - name: Reel
    entries:
      - The roper pulls each creature grappled by it up to 25 ft. straight toward it.
```
