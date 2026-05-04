---
archivist: true
entity_type: monster
slug: chimera
name: Chimera
compendium: SRD
---

```monster
name: Chimera
size: Large
type: Monstrosity
alignment: chaotic evil
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 114
  formula: 12d10+48
speed:
  walk: 30
  fly: 60
abilities:
  str: 19
  dex: 11
  con: 19
  int: 3
  wis: 14
  cha: 10
skills:
  perception: 8
senses:
  - darkvision 60 ft.
passive_perception: 18
languages:
  - understands Draconic but can't speak
cr: '6'
actions:
  - name: Multiattack
    entries:
      - 'The chimera makes three attacks: one with its bite, one with its horns, and one with its claws. When its fire breath is available, it can use the breath in place of its bite or horns.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` piercing damage.'
  - name: Horns
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d12+STR` bludgeoning damage.'
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` slashing damage.'
  - name: Fire Breath (Recharge 5-6)
    entries:
      - The dragon head exhales fire in a 15-foot cone. Each creature in that area must make a `dc:15` Dexterity saving throw, taking `damage:7d8` fire damage on a failed save, or half as much damage on a successful one.
```
