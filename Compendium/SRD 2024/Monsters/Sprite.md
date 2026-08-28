---
archivist: true
entity_type: monster
slug: srd-2024_monster_sprite
name: Sprite
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.445Z'
---

```monster
slug: srd-2024_monster_sprite
name: Sprite
edition: '2024'
source: SRD 5.2
size: small
type: fey
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 10
  formula: 4d4
speed:
  walk: 10
  fly: 40
abilities:
  str: 3
  dex: 18
  con: 10
  int: 14
  wis: 13
  cha: 11
senses: []
languages:
  - Common
  - Elvish
  - Sylvan
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Needle Sword
    entries:
      - 'Melee Attack Roll: `atk:DEX+PB`, reach 5 ft. `dmg:1d4+DEX` Piercing damage.'
    attacks:
      - name: Needle Sword attack
        type: melee
        bonus: 6
        damage: 1d4+4
        damage_type: piercing
        range:
          reach: 5
  - name: Enchanting Bow
    entries:
      - 'Ranged Attack Roll: `atk:+6`, range 40/160 ft. 1 Piercing damage, and the target has the Charmed condition until the start of the sprite''s next turn.'
  - name: Heart Sight
    entries:
      - 'Charisma Saving Throw: `dc:CHA`, one creature within 5 feet the sprite can see (Celestials, Fiends, and Undead automatically fail the save). Failure: The sprite knows the target''s emotions and alignment.'
  - name: Invisibility
    entries:
      - The sprite casts Invisibility on itself, requiring no spell components and using Charisma as the spellcasting ability.
reactions: []
legendary_actions: []
traits: []
cr: '0.25'
saves:
  str: -4
  dex: 4
  con: 0
  int: 2
  wis: 1
  cha: 0
skills:
  perception: 3
  stealth: 8
alignment: neutral good
passive_perception: 13
```
