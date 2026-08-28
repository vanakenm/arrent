---
archivist: true
entity_type: monster
slug: srd-5e_monster_ice-mephit
name: Ice Mephit
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.002Z'
---

```monster
slug: srd-5e_monster_ice-mephit
name: Ice Mephit
edition: '2014'
source: SRD 5.1
size: small
type: elemental
ac:
  - ac: 11
hp:
  average: 21
  formula: 6d6
speed:
  walk: 30
  fly: 30
abilities:
  str: 7
  dex: 13
  con: 10
  int: 9
  wis: 11
  cha: 12
senses:
  - darkvision 60 ft.
languages:
  - Aquan
  - Auran
damage_vulnerabilities:
  - bludgeoning
  - fire
damage_resistances: []
damage_immunities:
  - cold
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one creature. Hit: `dmg:1d4+DEX` slashing damage plus `dmg:1d4` cold damage.'
    attacks:
      - name: Claws attack
        type: melee
        bonus: 3
        damage: 1d4
        damage_type: thunder
        range:
          reach: 5
  - name: Frost Breath
    entries:
      - The mephit exhales a 15-foot cone of cold air. Each creature in that area must succeed on a `dc:10` Dexterity saving throw, taking `dmg:2d4` cold damage on a failed save, or half as much damage on a successful one.
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
      - When the mephit dies, it explodes in a burst of jagged ice. Each creature within 5 ft. of it must make a `dc:10` Dexterity saving throw, taking `dmg:1d8` slashing damage on a failed save, or half as much damage on a successful one.
  - name: False Appearance
    entries:
      - While the mephit remains motionless, it is indistinguishable from an ordinary shard of ice.
  - name: Innate Spellcasting (1/Day)
    entries:
      - The mephit can innately cast _fog cloud_, requiring no material components. Its innate spellcasting ability is Charisma.
cr: '0.5'
skills:
  perception: 2
  stealth: 3
subtype: Mephits
alignment: neutral evil
passive_perception: 12
```
