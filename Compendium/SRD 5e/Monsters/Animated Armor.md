---
archivist: true
entity_type: monster
slug: srd-5e_monster_animated-armor
name: Animated Armor
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.977Z'
---

```monster
slug: srd-5e_monster_animated-armor
name: Animated Armor
edition: '2014'
source: SRD 5.1
size: medium
type: construct
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 33
  formula: 6d8+6
speed:
  walk: 25
abilities:
  str: 14
  dex: 11
  con: 13
  int: 1
  wis: 3
  cha: 1
senses:
  - blindsight 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - poison
  - psychic
condition_immunities:
  - blinded
  - charmed
  - deafened
  - exhaustion
  - frightened
  - paralyzed
  - petrified
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The armor makes two melee attacks.
  - name: Slam
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d6+STR` bludgeoning damage.'
    attacks:
      - name: Slam attack
        type: melee
        bonus: 4
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Antimagic Susceptibility
    entries:
      - The armor is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the armor must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute.
  - name: False Appearance
    entries:
      - While the armor remains motionless, it is indistinguishable from a normal suit of armor.
cr: '1'
subtype: Animated Objects
alignment: unaligned
passive_perception: 6
```
