---
archivist: true
entity_type: monster
slug: magma-mephit
name: Magma Mephit
compendium: SRD
---

```monster
name: Magma Mephit
size: Small
type: Elemental
alignment: neutral evil
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
skills:
  stealth: 3
senses:
  - darkvision 60 ft.
passive_perception: 10
languages:
  - Ignan
  - Terran
damage_vulnerabilities:
  - cold
damage_immunities:
  - fire
  - poison
condition_immunities:
  - poisoned
cr: 1/2
traits:
  - name: Death Burst
    entries:
      - When the mephit dies, it explodes in a burst of lava. Each creature within 5 ft. of it must make a `dc:DEX` Dexterity saving throw, taking `damage:2d6` fire damage on a failed save, or half as much damage on a successful one.
  - name: False Appearance
    entries:
      - While the mephit remains motionless, it is indistinguishable from an ordinary mound of magma.
  - name: Innate Spellcasting (1/Day)
    entries:
      - The mephit can innately cast _heat metal_ (spell save `dc:CHA`), requiring no material components. Its innate spellcasting ability is Charisma.
actions:
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one creature. Hit: `damage:1d4+DEX` slashing damage plus `damage:1d4` fire damage.'
  - name: Fire Breath (Recharge 6)
    entries:
      - The mephit exhales a 15-foot cone of fire. Each creature in that area must make a `dc:DEX` Dexterity saving throw, taking `damage:2d6` fire damage on a failed save, or half as much damage on a successful one.
  - name: 'Variant: Summon Mephits (1/Day)'
    entries:
      - The mephit has a 25 percent chance of summoning `dice:1d4` mephits of its kind. A summoned mephit appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.
```
