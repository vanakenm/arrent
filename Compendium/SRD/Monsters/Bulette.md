---
archivist: true
entity_type: monster
slug: bulette
name: Bulette
compendium: SRD
---

```monster
name: Bulette
size: Large
type: Monstrosity
alignment: unaligned
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 94
  formula: 9d10+45
speed:
  walk: 40
  burrow: 40
abilities:
  str: 19
  dex: 11
  con: 21
  int: 2
  wis: 10
  cha: 5
skills:
  perception: 6
senses:
  - darkvision 60 ft.
  - tremorsense 60 ft.
passive_perception: 16
cr: '5'
traits:
  - name: Standing Leap
    entries:
      - The bulette's long jump is up to 30 ft. and its high jump is up to 15 ft., with or without a running start.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:4d12+STR` piercing damage.'
  - name: Deadly Leap
    entries:
      - If the bulette jumps at least 15 ft. as part of its movement, it can then use this action to land on its ft. in a space that contains one or more other creatures. Each of those creatures must succeed on a `dc:16` Strength or Dexterity saving throw (target's choice) or be knocked prone and take `damage:3d6+STR` bludgeoning damage plus `damage:3d6+STR` slashing damage. On a successful save, the creature takes only half the damage, isn't knocked prone, and is pushed 5 ft. out of the bulette's space into an unoccupied space of the creature's choice. If no unoccupied space is within range, the creature instead falls prone in the bulette's space.
```
