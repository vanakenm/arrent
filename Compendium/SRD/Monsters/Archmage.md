---
archivist: true
entity_type: monster
slug: archmage
name: Archmage
compendium: SRD
---

```monster
name: Archmage
size: Medium
type: Humanoid
subtype: any race
alignment: any alignment
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
saves:
  int: 9
  wis: 6
skills:
  arcana: 13
  history: 13
passive_perception: 12
languages:
  - any six languages
damage_resistances:
  - damage from spells; non magical bludgeoning
  - piercing
  - and slashing (from stoneskin)
cr: '12'
traits:
  - name: Magic Resistance
    entries:
      - The archmage has advantage on saving throws against spells and other magical effects.
  - name: Spellcasting
    entries:
      - |-
        The archmage is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save `dc:INT`, `atk:INT` with spell attacks). The archmage can cast disguise self and invisibility at will and has the following wizard spells prepared:

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
actions:
  - name: Dagger
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:DEX`, reach 5 ft. or range 20/60 ft., one target. Hit: `damage:1d4+DEX` piercing damage.'
```
