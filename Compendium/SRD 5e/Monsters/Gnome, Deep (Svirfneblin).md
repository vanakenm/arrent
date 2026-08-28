---
archivist: true
entity_type: monster
slug: srd-5e_monster_gnome-deep-svirfneblin
name: Gnome, Deep (Svirfneblin)
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.998Z'
---

```monster
slug: srd-5e_monster_gnome-deep-svirfneblin
name: Gnome, Deep (Svirfneblin)
edition: '2014'
source: SRD 5.1
size: small
type: humanoid
ac:
  - ac: 15
hp:
  average: 16
speed: {}
abilities:
  str: 15
  dex: 14
  con: 14
  int: 12
  wis: 10
  cha: 9
senses: []
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Poisoned Dart
    entries:
      - |
        Ranged Weapon Attack: `atk:DEX+PB`, range 30/120 ft., one creature. Hit: `dmg:1d4+DEX` piercing damage, and the target must succeed on a `dc:CON` Constitution saving throw or be poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
    attacks:
      - name: Poisoned Dart attack
        type: ranged
        bonus: 4
        damage: 1d4+2
        damage_type: piercing
        range:
          normal: 30
          long: 120
  - name: War Pick
    entries:
      - |
        Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d8+STR` piercing damage.
    attacks:
      - name: War Pick attack
        type: melee
        bonus: 4
        damage: 1d8+2
        damage_type: piercing
        range:
          reach: 5
reactions: []
legendary_actions: []
traits: []
cr: '0'
skills:
  investigation: 3
  perception: 2
  stealth: 4
alignment: neutral good
passive_perception: 12
```
