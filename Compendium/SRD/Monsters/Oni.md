---
archivist: true
entity_type: monster
slug: oni
name: Oni
compendium: SRD
---

```monster
name: Oni
size: Large
type: Giant
alignment: lawful evil
ac:
  - ac: 16
    from:
      - chain mail
hp:
  average: 110
  formula: 13d10+39
speed:
  walk: 30
  fly: 30
abilities:
  str: 19
  dex: 11
  con: 16
  int: 14
  wis: 12
  cha: 15
saves:
  dex: 3
  con: 6
  wis: 4
  cha: 5
skills:
  arcana: 5
  deception: 8
  perception: 4
senses:
  - darkvision 60 ft.
passive_perception: 14
languages:
  - Common
  - Giant
cr: '7'
traits:
  - name: Innate Spellcasting
    entries:
      - |-
        The oni's innate spellcasting ability is Charisma (spell save `dc:CHA`). The oni can innately cast the following spells, requiring no material components:

        At will: darkness, invisibility
        1/day each: charm person, cone of cold, gaseous form, sleep
  - name: Magic Weapons
    entries:
      - The oni's weapon attacks are magical.
  - name: Regeneration
    entries:
      - The oni regains 10 hit points at the start of its turn if it has at least 1 hit point.
actions:
  - name: Multiattack
    entries:
      - The oni makes two attacks, either with its claws or its glaive.
  - name: Claw (Oni Form Only)
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d8+STR` slashing damage.'
  - name: Glaive
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:2d10+STR` slashing damage, or `damage:1d10+STR` slashing damage in Small or Medium form.'
  - name: Change Shape
    entries:
      - The oni magically polymorphs into a Small or Medium humanoid, into a Large giant, or back into its true form. Other than its size, its statistics are the same in each form. The only equipment that is transformed is its glaive, which shrinks so that it can be wielded in humanoid form. If the oni dies, it reverts to its true form, and its glaive reverts to its normal size.
```
