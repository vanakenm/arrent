---
archivist: true
entity_type: monster
slug: srd-5e_monster_dretch
name: Dretch
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.988Z'
---

```monster
slug: srd-5e_monster_dretch
name: Dretch
edition: '2014'
source: SRD 5.1
size: small
type: fiend
ac:
  - ac: 11
    from:
      - natural armor
hp:
  average: 18
  formula: 4d6+4
speed:
  walk: 20
abilities:
  str: 11
  dex: 11
  con: 12
  int: 5
  wis: 8
  cha: 3
senses:
  - darkvision 60 ft.
languages:
  - Abyssal
  - telepathy 60 ft. (works only with creatures that understand Abyssal)
damage_vulnerabilities: []
damage_resistances:
  - cold
  - fire
  - lightning
damage_immunities:
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Multiattack
    entries:
      - 'The dretch makes two attacks: one with its bite and one with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d6` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 2
        damage_type: thunder
        range:
          reach: 5
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d4` slashing damage.'
    attacks:
      - name: Claws attack
        type: melee
        bonus: 2
        damage_type: thunder
        range:
          reach: 5
  - name: Fetid Cloud
    entries:
      - A 10-foot radius of disgusting green gas extends out from the dretch. The gas spreads around corners, and its area is lightly obscured. It lasts for 1 minute or until a strong wind disperses it. Any creature that starts its turn in that area must succeed on a `dc:CON` Constitution saving throw or be poisoned until the start of its next turn. While poisoned in this way, the target can take either an action or a bonus action on its turn, not both, and can't take reactions.
    recharge:
      type: per_day
      param: 1
reactions: []
legendary_actions: []
traits: []
cr: '0.25'
subtype: Demons
alignment: chaotic evil
passive_perception: 9
```
