---
archivist: true
entity_type: monster
slug: srd-5e_monster_ghast
name: Ghast
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.992Z'
---

```monster
slug: srd-5e_monster_ghast
name: Ghast
edition: '2014'
source: SRD 5.1
size: medium
type: undead
ac:
  - ac: 13
hp:
  average: 36
  formula: 8d8
speed:
  walk: 30
abilities:
  str: 16
  dex: 17
  con: 10
  int: 11
  wis: 10
  cha: 8
senses:
  - darkvision 60 ft.
languages:
  - Common
damage_vulnerabilities: []
damage_resistances:
  - necrotic
damage_immunities:
  - poison
condition_immunities:
  - charmed
  - exhaustion
  - poisoned
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one creature. Hit: `dmg:2d8+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 3
        damage: 2d8
        damage_type: thunder
        range:
          reach: 5
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` slashing damage. If the target is a creature other than an undead, it must succeed on a `dc:CON` Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.'
    attacks:
      - name: Claws attack
        type: melee
        bonus: 5
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Stench
    entries:
      - Any creature that starts its turn within 5 ft. of the ghast must succeed on a `dc:CON` Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the ghast's Stench for 24 hours.
  - name: Turn Defiance
    entries:
      - The ghast and any ghouls within 30 ft. of it have advantage on saving throws against effects that turn undead.
cr: '2'
subtype: Ghouls
alignment: chaotic evil
passive_perception: 10
```
