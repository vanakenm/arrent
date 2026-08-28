---
archivist: true
entity_type: monster
slug: srd-5e_monster_lemure
name: Lemure
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.004Z'
---

```monster
slug: srd-5e_monster_lemure
name: Lemure
edition: '2014'
source: SRD 5.1
size: medium
type: fiend
ac:
  - ac: 7
hp:
  average: 13
  formula: 3d8
speed:
  walk: 15
abilities:
  str: 10
  dex: 5
  con: 11
  int: 1
  wis: 11
  cha: 3
senses:
  - darkvision 120 ft.
languages:
  - understands infernal but can't speak
damage_vulnerabilities: []
damage_resistances:
  - cold
damage_immunities:
  - fire
  - poison
condition_immunities:
  - charmed
  - frightened
  - poisoned
actions:
  - name: Fist
    entries:
      - 'Melee Weapon Attack: `atk:+3`, reach 5 ft., one target. Hit: `dmg:1d4` bludgeoning damage.'
    attacks:
      - name: Fist attack
        type: melee
        bonus: 3
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Devil's Sight
    entries:
      - Magical darkness doesn't impede the lemure's darkvision.
  - name: Hellish Rejuvenation
    entries:
      - A lemure that dies in the Nine Hells comes back to life with all its hit points in `dice:1d10` days unless it is killed by a good-aligned creature with a bless spell cast on that creature or its remains are sprinkled with holy water.
cr: '0'
subtype: Devils
alignment: lawful evil
passive_perception: 10
```
