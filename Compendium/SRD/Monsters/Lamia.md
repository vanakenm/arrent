---
archivist: true
entity_type: monster
slug: lamia
name: Lamia
compendium: SRD
---

```monster
name: Lamia
size: Large
type: Monstrosity
alignment: chaotic evil
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 97
  formula: 13d10+26
speed:
  walk: 30
abilities:
  str: 16
  dex: 13
  con: 15
  int: 14
  wis: 15
  cha: 16
skills:
  deception: 7
  insight: 4
  stealth: 3
senses:
  - darkvision 60 ft.
passive_perception: 12
languages:
  - Abyssal
  - Common
cr: '4'
traits:
  - name: Innate Spellcasting
    entries:
      - |-
        The lamia's innate spellcasting ability is Charisma (spell save `dc:CHA`). It can innately cast the following spells, requiring no material components.

        At will: disguise self (any humanoid form), major image
        3/day each: charm person, mirror image, scrying, suggestion
        1/day: geas
actions:
  - name: Multiattack
    entries:
      - 'The lamia makes two attacks: one with its claws and one with its dagger or Intoxicating Touch.'
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d10+STR` slashing damage.'
  - name: Dagger
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d4+STR` piercing damage.'
  - name: Intoxicating Touch
    entries:
      - 'Melee Spell Attack: `atk:CHA`, reach 5 ft., one creature. Hit: The target is magically cursed for 1 hour. Until the curse ends, the target has disadvantage on Wisdom saving throws and all ability checks.'
```
