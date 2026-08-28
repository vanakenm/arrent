---
archivist: true
entity_type: monster
slug: srd-5e_monster_dust-mephit
name: Dust Mephit
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.989Z'
---

```monster
slug: srd-5e_monster_dust-mephit
name: Dust Mephit
edition: '2014'
source: SRD 5.1
size: small
type: elemental
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
senses:
  - darkvision 60 ft.
languages:
  - Auran
  - Terran
damage_vulnerabilities:
  - fire
damage_resistances: []
damage_immunities:
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one creature. Hit: `dmg:1d4+DEX` slashing damage.'
    attacks:
      - name: Claws attack
        type: melee
        bonus: 4
        damage: 1d4
        damage_type: thunder
        range:
          reach: 5
  - name: Blinding Breath
    entries:
      - The mephit exhales a 15-foot cone of blinding dust. Each creature in that area must succeed on a `dc:10` Dexterity saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
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
      - When the mephit dies, it explodes in a burst of dust. Each creature within 5 ft. of it must then succeed on a `dc:CON` Constitution saving throw or be blinded for 1 minute. A blinded creature can repeat the saving throw on each of its turns, ending the effect on itself on a success.
  - name: Innate Spellcasting (1/Day)
    entries:
      - The mephit can innately cast _sleep_, requiring no material components. Its innate spellcasting ability is Charisma.
cr: '0.5'
skills:
  perception: 2
  stealth: 4
subtype: Mephits
alignment: neutral evil
passive_perception: 12
```
