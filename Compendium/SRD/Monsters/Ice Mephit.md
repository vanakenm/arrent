---
archivist: true
entity_type: monster
slug: ice-mephit
name: Ice Mephit
compendium: SRD
---

```monster
name: Ice Mephit
size: Small
type: Elemental
alignment: neutral evil
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
skills:
  perception: 2
  stealth: 3
senses:
  - darkvision 60 ft.
passive_perception: 12
languages:
  - Aquan
  - Auran
damage_vulnerabilities:
  - bludgeoning
  - fire
damage_immunities:
  - cold
  - poison
condition_immunities:
  - poisoned
cr: 1/2
traits:
  - name: Death Burst
    entries:
      - When the mephit dies, it explodes in a burst of jagged ice. Each creature within 5 ft. of it must make a `dc:10` Dexterity saving throw, taking `damage:1d8` slashing damage on a failed save, or half as much damage on a successful one.
  - name: False Appearance
    entries:
      - While the mephit remains motionless, it is indistinguishable from an ordinary shard of ice.
  - name: Innate Spellcasting (1/Day)
    entries:
      - The mephit can innately cast _fog cloud_, requiring no material components. Its innate spellcasting ability is Charisma.
actions:
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one creature. Hit: `damage:1d4+DEX` slashing damage plus `damage:1d4` cold damage.'
  - name: Frost Breath (Recharge 6)
    entries:
      - The mephit exhales a 15-foot cone of cold air. Each creature in that area must succeed on a `dc:10` Dexterity saving throw, taking `damage:2d4` cold damage on a failed save, or half as much damage on a successful one.
  - name: 'Variant: Summon Mephits (1/Day)'
    entries:
      - The mephit has a 25 percent chance of summoning `dice:1d4` mephits of its kind. A summoned mephit appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.
```
