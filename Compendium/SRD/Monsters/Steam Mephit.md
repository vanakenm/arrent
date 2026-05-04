---
archivist: true
entity_type: monster
slug: steam-mephit
name: Steam Mephit
compendium: SRD
---

```monster
name: Steam Mephit
size: Small
type: Elemental
alignment: neutral evil
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
passive_perception: 10
languages:
  - Aquan
  - Ignan
damage_immunities:
  - fire
  - poison
condition_immunities:
  - poisoned
cr: 1/4
traits:
  - name: Death Burst
    entries:
      - When the mephit dies, it explodes in a cloud of steam. Each creature within 5 ft. of the mephit must succeed on a `dc:DEX` Dexterity saving throw or take `damage:1d8` fire damage.
  - name: Innate Spellcasting (1/Day)
    entries:
      - The mephit can innately cast _blur_, requiring no material components. Its innate spellcasting ability is Charisma.
actions:
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one creature. Hit: `damage:1d4` slashing damage plus `damage:1d4` fire damage.'
  - name: Steam Breath (Recharge 6)
    entries:
      - The mephit exhales a 15-foot cone of scalding steam. Each creature in that area must succeed on a `dc:DEX` Dexterity saving throw, taking `damage:1d8` fire damage on a failed save, or half as much damage on a successful one.
  - name: 'Variant: Summon Mephits (1/Day)'
    entries:
      - The mephit has a 25 percent chance of summoning `dice:1d4` mephits of its kind. A summoned mephit appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.
```
