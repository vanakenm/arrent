---
archivist: true
entity_type: monster
slug: srd-5e_monster_druid
name: Druid
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.989Z'
---

```monster
slug: srd-5e_monster_druid
name: Druid
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 11
    from:
      - 16 with _barkskin_
hp:
  average: 27
  formula: 5d8+5
speed:
  walk: 30
abilities:
  str: 10
  dex: 12
  con: 13
  int: 12
  wis: 15
  cha: 11
senses: []
languages:
  - Druidic plus any two languages
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Quarterstaff
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB` (`atk:+4` with shillelagh), reach 5 ft., one target. Hit: `dmg:1d6` bludgeoning damage, or `dmg:1d8+WIS` bludgeoning damage with shillelagh or if wielded with two hands.'
    attacks:
      - name: Quarterstaff attack
        type: melee
        bonus: 2
        damage: 1d8
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Spellcasting
    entries:
      - |-
        The druid is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save `dc:WIS`, `atk:+4` with spell attacks). It has the following druid spells prepared:

        * Cantrips (at will): druidcraft, produce flame, shillelagh
        * 1st level (4 slots): entangle, longstrider, speak with animals, thunderwave
        * 2nd level (3 slots): animal messenger, barkskin
cr: '2'
skills:
  medicine: 4
  nature: 3
  perception: 4
alignment: any alignment
passive_perception: 14
```
