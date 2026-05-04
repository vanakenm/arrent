---
archivist: true
entity_type: monster
slug: dust-mephit
name: Dust Mephit
compendium: SRD
---

```monster
name: Dust Mephit
size: Small
type: Elemental
alignment: neutral evil
ac:
  - ac: 12
hp:
  average: 17
  formula: 5d6
speed:
  walk: 30
  fly: 30
abilities:
  str: 5
  dex: 14
  con: 10
  int: 9
  wis: 11
  cha: 10
skills:
  perception: 2
  stealth: 4
senses:
  - darkvision 60 ft.
passive_perception: 12
languages:
  - Auran
  - Terran
damage_vulnerabilities:
  - fire
damage_immunities:
  - poison
condition_immunities:
  - poisoned
cr: 1/2
traits:
  - name: Death Burst
    entries:
      - When the mephit dies, it explodes in a burst of dust. Each creature within 5 ft. of it must then succeed on a `dc:CON` Constitution saving throw or be blinded for 1 minute. A blinded creature can repeat the saving throw on each of its turns, ending the effect on itself on a success.
  - name: Innate Spellcasting (1/Day)
    entries:
      - The mephit can innately cast _sleep_, requiring no material components. Its innate spellcasting ability is Charisma.
actions:
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one creature. Hit: `damage:1d4+DEX` slashing damage.'
  - name: Blinding Breath (Recharge 6)
    entries:
      - The mephit exhales a 15-foot cone of blinding dust. Each creature in that area must succeed on a `dc:10` Dexterity saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
  - name: 'Variant: Summon Mephits (1/Day)'
    entries:
      - The mephit has a 25 percent chance of summoning `dice:1d4` mephits of its kind. A summoned mephit appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.
```
