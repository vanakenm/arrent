---
archivist: true
entity_type: monster
slug: srd-5e_monster_steam-mephit
name: Steam Mephit
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.018Z'
---

```monster
slug: srd-5e_monster_steam-mephit
name: Steam Mephit
edition: '2014'
source: SRD 5.1
size: small
type: elemental
ac:
  - ac: 10
hp:
  average: 21
  formula: 6d6
speed:
  walk: 30
  fly: 30
abilities:
  str: 5
  dex: 11
  con: 10
  int: 11
  wis: 10
  cha: 12
senses:
  - darkvision 60 ft.
languages:
  - Aquan
  - Ignan
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - fire
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one creature. Hit: `dmg:1d4` slashing damage plus `dmg:1d4` fire damage.'
    attacks:
      - name: Claws attack
        type: melee
        bonus: 2
        damage_type: thunder
        range:
          reach: 5
  - name: Steam Breath
    entries:
      - The mephit exhales a 15-foot cone of scalding steam. Each creature in that area must succeed on a `dc:DEX` Dexterity saving throw, taking `dmg:1d8` fire damage on a failed save, or half as much damage on a successful one.
  - name: 'Variant: Summon Mephits'
    entries:
      - The mephit has a 25 percent chance of summoning `dice:1d4` mephits of its kind. A summoned mephit appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.
    recharge:
      type: per_day
      param: 1
reactions: []
legendary_actions: []
traits:
  - name: Death Burst
    entries:
      - When the mephit dies, it explodes in a cloud of steam. Each creature within 5 ft. of the mephit must succeed on a `dc:DEX` Dexterity saving throw or take `dmg:1d8` fire damage.
  - name: Innate Spellcasting (1/Day)
    entries:
      - The mephit can innately cast _blur_, requiring no material components. Its innate spellcasting ability is Charisma.
cr: '0.25'
subtype: Mephits
alignment: neutral evil
passive_perception: 10
```
