---
archivist: true
entity_type: monster
slug: srd-5e_monster_deep-gnome-svirfneblin
name: Deep Gnome (Svirfneblin)
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.987Z'
---

```monster
slug: srd-5e_monster_deep-gnome-svirfneblin
name: Deep Gnome (Svirfneblin)
edition: '2014'
source: SRD 5.1
size: small
type: humanoid
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
senses:
  - darkvision 120 ft.
languages:
  - Gnomish
  - Terran
  - Undercommon
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: War Pick
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d8+STR` piercing damage.'
    attacks:
      - name: War Pick attack
        type: melee
        bonus: 4
        damage: 1d8
        damage_type: thunder
        range:
          reach: 5
  - name: Poisoned Dart
    entries:
      - 'Ranged Weapon Attack: `atk:DEX+PB`, range 30/120 ft., one creature. Hit: `dmg:1d4+DEX` piercing damage, and the target must succeed on a `dc:CON` Constitution saving throw or be poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.'
    attacks:
      - name: Poisoned Dart attack
        type: ranged
        bonus: 4
        damage_type: thunder
        range:
          normal: 30
          long: 120
reactions: []
legendary_actions: []
traits:
  - name: Gnome Cunning
    entries:
      - The gnome has advantage on Intelligence, Wisdom, and Charisma saving throws against magic.
  - name: Innate Spellcasting
    entries:
      - |-
        The gnome's innate spellcasting ability is Intelligence (spell save `dc:INT`). It can innately cast the following spells, requiring no material components:
        At will: nondetection (self only)
        1/day each: blindness/deafness, blur, disguise self
  - name: Stone Camouflage
    entries:
      - The gnome has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.
cr: '0.5'
skills:
  investigation: 3
  perception: 2
  stealth: 4
alignment: neutral good
passive_perception: 12
```
