---
archivist: true
entity_type: monster
slug: srd-5e_monster_magma-mephit
name: Magma Mephit
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.005Z'
---

```monster
slug: srd-5e_monster_magma-mephit
name: Magma Mephit
edition: '2014'
source: SRD 5.1
size: small
type: elemental
ac:
  - ac: 11
hp:
  average: 22
  formula: 5d6+5
speed:
  walk: 30
  fly: 30
abilities:
  str: 8
  dex: 12
  con: 12
  int: 7
  wis: 10
  cha: 10
senses:
  - darkvision 60 ft.
languages:
  - Ignan
  - Terran
damage_vulnerabilities:
  - cold
damage_resistances: []
damage_immunities:
  - fire
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one creature. Hit: `dmg:1d4+DEX` slashing damage plus `dmg:1d4` fire damage.'
    attacks:
      - name: Claws attack
        type: melee
        bonus: 3
        damage: 1d4
        damage_type: thunder
        range:
          reach: 5
  - name: Fire Breath
    entries:
      - The mephit exhales a 15-foot cone of fire. Each creature in that area must make a `dc:DEX` Dexterity saving throw, taking `dmg:2d6` fire damage on a failed save, or half as much damage on a successful one.
    recharge:
      type: recharge_on_roll
      param: 6
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
      - When the mephit dies, it explodes in a burst of lava. Each creature within 5 ft. of it must make a `dc:DEX` Dexterity saving throw, taking `dmg:2d6` fire damage on a failed save, or half as much damage on a successful one.
  - name: False Appearance
    entries:
      - While the mephit remains motionless, it is indistinguishable from an ordinary mound of magma.
  - name: Innate Spellcasting (1/Day)
    entries:
      - The mephit can innately cast _heat metal_ (spell save `dc:CHA`), requiring no material components. Its innate spellcasting ability is Charisma.
cr: '0.5'
skills:
  stealth: 3
subtype: Mephits
alignment: neutral evil
passive_perception: 10
```
