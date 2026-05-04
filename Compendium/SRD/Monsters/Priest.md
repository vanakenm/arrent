---
archivist: true
entity_type: monster
slug: priest
name: Priest
compendium: SRD
---

```monster
name: Priest
size: Medium
type: Humanoid
subtype: any race
alignment: any alignment
ac:
  - ac: 13
    from:
      - chain shirt
hp:
  average: 27
  formula: 5d8+5
speed:
  walk: 25
abilities:
  str: 10
  dex: 10
  con: 12
  int: 13
  wis: 16
  cha: 13
skills:
  medicine: 7
  persuasion: 3
  religion: 5
passive_perception: 13
languages:
  - any two languages
cr: '2'
traits:
  - name: Divine Eminence
    entries:
      - As a bonus action, the priest can expend a spell slot to cause its melee weapon attacks to magically deal an extra `damage:3d6` radiant damage to a target on a hit. This benefit lasts until the end of the turn. If the priest expends a spell slot of 2nd level or higher, the extra damage increases by `dice:1d6` for each level above 1st.
  - name: Spellcasting
    entries:
      - |-
        The priest is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell save `dc:WIS`, `atk:WIS` with spell attacks). The priest has the following cleric spells prepared:

        * Cantrips (at will): light, sacred flame, thaumaturgy
        * 1st level (4 slots): cure wounds, guiding bolt, sanctuary
        * 2nd level (3 slots): lesser restoration, spiritual weapon
        * 3rd level (2 slots): dispel magic, spirit guardians
actions:
  - name: Mace
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6` bludgeoning damage.'
```
