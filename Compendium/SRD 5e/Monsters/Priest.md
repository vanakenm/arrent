---
archivist: true
entity_type: monster
slug: srd-5e_monster_priest
name: Priest
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.011Z'
---

```monster
slug: srd-5e_monster_priest
name: Priest
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
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
senses: []
languages:
  - any two languages
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Mace
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d6` bludgeoning damage.'
    attacks:
      - name: Mace attack
        type: melee
        bonus: 2
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Divine Eminence
    entries:
      - As a bonus action, the priest can expend a spell slot to cause its melee weapon attacks to magically deal an extra `dmg:3d6` radiant damage to a target on a hit. This benefit lasts until the end of the turn. If the priest expends a spell slot of 2nd level or higher, the extra damage increases by `dice:1d6` for each level above 1st.
  - name: Spellcasting
    entries:
      - |-
        The priest is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell save `dc:WIS`, `atk:+5` with spell attacks). The priest has the following cleric spells prepared:

        * Cantrips (at will): light, sacred flame, thaumaturgy
        * 1st level (4 slots): cure wounds, guiding bolt, sanctuary
        * 2nd level (3 slots): lesser restoration, spiritual weapon
        * 3rd level (2 slots): dispel magic, spirit guardians
cr: '2'
skills:
  medicine: 7
  persuasion: 3
  religion: 5
alignment: any alignment
passive_perception: 13
```
