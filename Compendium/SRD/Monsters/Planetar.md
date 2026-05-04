---
archivist: true
entity_type: monster
slug: planetar
name: Planetar
compendium: SRD
---

```monster
name: Planetar
size: Large
type: Celestial
alignment: lawful good
ac:
  - ac: 19
    from:
      - natural armor
hp:
  average: 200
  formula: 16d10+112
speed:
  walk: 40
  fly: 120
abilities:
  str: 24
  dex: 20
  con: 24
  int: 19
  wis: 22
  cha: 25
saves:
  con: 12
  wis: 11
  cha: 12
skills:
  perception: 11
senses:
  - truesight 120 ft.
passive_perception: 21
languages:
  - all
  - telepathy 120 ft.
damage_resistances:
  - radiant; bludgeoning
  - piercing
  - and slashing from nonmagical attacks
condition_immunities:
  - charmed
  - exhaustion
  - frightened
cr: '16'
traits:
  - name: Angelic Weapons
    entries:
      - The planetar's weapon attacks are magical. When the planetar hits with any weapon, the weapon deals an extra `damage:5d8` radiant damage (included in the attack).
  - name: Divine Awareness
    entries:
      - The planetar knows if it hears a lie.
  - name: Innate Spellcasting
    entries:
      - |-
        The planetar's spellcasting ability is Charisma (spell save `dc:CHA`). The planetar can innately cast the following spells, requiring no material components:
        At will: detect evil and good, invisibility (self only)
        3/day each: blade barrier, dispel evil and good, flame strike, raise dead
        1/day each: commune, control weather, insect plague
  - name: Magic Resistance
    entries:
      - The planetar has advantage on saving throws against spells and other magical effects.
actions:
  - name: Multiattack
    entries:
      - The planetar makes two melee attacks.
  - name: Greatsword
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:4d6+STR` slashing damage plus `damage:5d8` radiant damage.'
  - name: Healing Touch (4/Day)
    entries:
      - The planetar touches another creature. The target magically regains 30 (`dice:6d8+3`) hit points and is freed from any curse, disease, poison, blindness, or deafness.
```
