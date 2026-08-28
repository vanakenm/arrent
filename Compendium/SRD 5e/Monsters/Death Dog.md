---
archivist: true
entity_type: monster
slug: srd-5e_monster_death-dog
name: Death Dog
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.987Z'
---

```monster
slug: srd-5e_monster_death-dog
name: Death Dog
edition: '2014'
source: SRD 5.1
size: medium
type: monstrosity
ac:
  - ac: 12
hp:
  average: 39
  formula: 6d8+12
speed:
  walk: 40
abilities:
  str: 15
  dex: 14
  con: 14
  int: 3
  wis: 13
  cha: 6
senses:
  - darkvision 120 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The dog makes two bite attacks.
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d6+STR` piercing damage. If the target is a creature, it must succeed on a `dc:CON` Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the creature must repeat the saving throw, reducing its hit point maximum by 5 (`dice:1d10`) on a failure. This reduction lasts until the disease is cured. The creature dies if the disease reduces its hit point maximum to 0.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Two-Headed
    entries:
      - The dog has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious.
cr: '1'
skills:
  perception: 5
  stealth: 4
alignment: neutral evil
passive_perception: 15
```
