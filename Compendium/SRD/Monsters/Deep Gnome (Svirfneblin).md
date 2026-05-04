---
archivist: true
entity_type: monster
slug: deep-gnome-svirfneblin
name: Deep Gnome (Svirfneblin)
compendium: SRD
---

```monster
name: Deep Gnome (Svirfneblin)
size: Small
type: Humanoid
subtype: gnome
alignment: neutral good
ac:
  - ac: 15
    from:
      - chain shirt
hp:
  average: 16
  formula: 3d6+6
speed:
  walk: 20
abilities:
  str: 15
  dex: 14
  con: 14
  int: 12
  wis: 10
  cha: 9
skills:
  investigation: 3
  perception: 2
  stealth: 4
senses:
  - darkvision 120 ft.
passive_perception: 12
languages:
  - Gnomish
  - Terran
  - Undercommon
cr: 1/2
traits:
  - name: Stone Camouflage
    entries:
      - The gnome has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.
  - name: Gnome Cunning
    entries:
      - The gnome has advantage on Intelligence, Wisdom, and Charisma saving throws against magic.
  - name: Innate Spellcasting
    entries:
      - |-
        The gnome's innate spellcasting ability is Intelligence (spell save `dc:INT`). It can innately cast the following spells, requiring no material components:
        At will: nondetection (self only)
        1/day each: blindness/deafness, blur, disguise self
actions:
  - name: War Pick
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d8+STR` piercing damage.'
  - name: Poisoned Dart
    entries:
      - 'Ranged Weapon Attack: `atk:DEX`, range 30/120 ft., one creature. Hit: `damage:1d4+DEX` piercing damage, and the target must succeed on a `dc:CON` Constitution saving throw or be poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.'
```
