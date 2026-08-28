---
archivist: true
entity_type: monster
slug: srd-5e_monster_archmage
name: Archmage
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.978Z'
---

```monster
slug: srd-5e_monster_archmage
name: Archmage
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 12
    from:
      - 15 with _mage armor_
hp:
  average: 99
  formula: 18d8+18
speed:
  walk: 30
abilities:
  str: 10
  dex: 14
  con: 12
  int: 20
  wis: 15
  cha: 16
senses: []
languages:
  - any six languages
damage_vulnerabilities: []
damage_resistances:
  - piercing
damage_immunities: []
condition_immunities: []
actions:
  - name: Dagger
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:DEX+PB`, reach 5 ft. or range 20/60 ft., one target. Hit: `dmg:1d4+DEX` piercing damage.'
    attacks:
      - name: Dagger Melee attack
        type: ranged
        bonus: 6
        damage: 1d4
        damage_type: thunder
        range:
          reach: 5
          normal: 20
          long: 60
      - name: Dagger Ranged attack
        type: ranged
        bonus: 6
        damage: 1d4
        damage_type: thunder
        range:
          normal: 20
          long: 60
reactions: []
legendary_actions: []
traits:
  - name: Magic Resistance
    entries:
      - The archmage has advantage on saving throws against spells and other magical effects.
  - name: Spellcasting
    entries:
      - |-
        The archmage is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save `dc:INT`, `atk:+9` with spell attacks). The archmage can cast disguise self and invisibility at will and has the following wizard spells prepared:

        * Cantrips (at will): fire bolt, light, mage hand, prestidigitation, shocking grasp
        * 1st level (4 slots): detect magic, identify, mage armor*, magic missile
        * 2nd level (3 slots): detect thoughts, mirror image, misty step
        * 3rd level (3 slots): counterspell,fly, lightning bolt
        * 4th level (3 slots): banishment, fire shield, stoneskin*
        * 5th level (3 slots): cone of cold, scrying, wall of force
        * 6th level (1 slot): globe of invulnerability
        * 7th level (1 slot): teleport
        * 8th level (1 slot): mind blank*
        * 9th level (1 slot): time stop
        * The archmage casts these spells on itself before combat.
cr: '12'
saves:
  int: 9
  wis: 6
skills:
  arcana: 13
  history: 13
alignment: any alignment
passive_perception: 12
```
