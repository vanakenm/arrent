---
archivist: true
entity_type: monster
slug: srd-5e_monster_mage
name: Mage
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.005Z'
---

```monster
slug: srd-5e_monster_mage
name: Mage
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 12
    from:
      - 15 with _mage armor_
hp:
  average: 40
  formula: 9d8
speed:
  walk: 30
abilities:
  str: 9
  dex: 14
  con: 11
  int: 17
  wis: 12
  cha: 11
senses: []
languages:
  - any four languages
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Dagger
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:DEX+PB`, reach 5 ft. or range 20/60 ft., one target. Hit: `dmg:1d4+DEX` piercing damage.'
    attacks:
      - name: Dagger Melee attack
        type: ranged
        bonus: 5
        damage: 1d4
        damage_type: thunder
        range:
          reach: 5
          normal: 20
          long: 60
      - name: Dagger Ranged attack
        type: ranged
        bonus: 5
        damage: 1d4
        damage_type: thunder
        range:
          normal: 20
          long: 60
reactions: []
legendary_actions: []
traits:
  - name: Spellcasting
    entries:
      - |-
        The mage is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save `dc:INT`, `atk:+6` with spell attacks). The mage has the following wizard spells prepared:

        * Cantrips (at will): fire bolt, light, mage hand, prestidigitation
        * 1st level (4 slots): detect magic, mage armor, magic missile, shield
        * 2nd level (3 slots): misty step, suggestion
        * 3rd level (3 slots): counterspell, fireball, fly
        * 4th level (3 slots): greater invisibility, ice storm
        * 5th level (1 slot): cone of cold
cr: '6'
saves:
  int: 6
  wis: 4
skills:
  arcana: 6
  history: 6
alignment: any alignment
passive_perception: 11
```
