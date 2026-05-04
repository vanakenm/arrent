---
archivist: true
entity_type: monster
slug: unicorn
name: Unicorn
compendium: SRD
---

```monster
name: Unicorn
size: Large
type: Celestial
alignment: lawful good
ac:
  - ac: 12
hp:
  average: 67
  formula: 9d10+18
speed:
  walk: 50
abilities:
  str: 18
  dex: 14
  con: 15
  int: 11
  wis: 17
  cha: 16
senses:
  - darkvision 60 ft.
passive_perception: 13
languages:
  - Celestial
  - Elvish
  - Sylvan
  - telepathy 60 ft.
damage_immunities:
  - poison
condition_immunities:
  - charmed
  - paralyzed
  - poisoned
cr: '5'
traits:
  - name: Charge
    entries:
      - If the unicorn moves at least 20 ft. straight toward a target and then hits it with a horn attack on the same turn, the target takes an extra `damage:2d8` piercing damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.
  - name: Innate Spellcasting
    entries:
      - |-
        The unicorn's innate spellcasting ability is Charisma (spell save `dc:CHA`). The unicorn can innately cast the following spells, requiring no components:

        At will: detect evil and good, druidcraft, pass without trace
        1/day each: calm emotions, dispel evil and good, entangle
  - name: Magic Resistance
    entries:
      - The unicorn has advantage on saving throws against spells and other magical effects.
  - name: Magic Weapons
    entries:
      - The unicorn's weapon attacks are magical.
actions:
  - name: Multiattack
    entries:
      - 'The unicorn makes two attacks: one with its hooves and one with its horn.'
  - name: Hooves
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` bludgeoning damage.'
  - name: Horn
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d8+STR` piercing damage.'
  - name: Healing Touch (3/Day)
    entries:
      - The unicorn touches another creature with its horn. The target magically regains 11 (`dice:2d8+2`) hit points. In addition, the touch removes all diseases and neutralizes all poisons afflicting the target.
  - name: Teleport (1/Day)
    entries:
      - The unicorn magically teleports itself and up to three willing creatures it can see within 5 ft. of it, along with any equipment they are wearing or carrying, to a location the unicorn is familiar with, up to 1 mile away.
legendary:
  - name: Hooves
    entries:
      - The unicorn makes one attack with its hooves.
  - name: Shimmering Shield (Costs 2 Actions)
    entries:
      - The unicorn creates a shimmering, magical field around itself or another creature it can see within 60 ft. of it. The target gains a +2 bonus to AC until the end of the unicorn's next turn.
  - name: Heal Self (Costs 3 Actions)
    entries:
      - The unicorn magically regains 11 (`dice:2d8+2`) hit points.
legendary_actions: 3
```
