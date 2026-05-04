---
archivist: true
entity_type: monster
slug: animated-armor
name: Animated Armor
compendium: SRD
---

```monster
name: Animated Armor
size: Medium
type: Construct
alignment: unaligned
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
  - blindsight 60 ft. (blind beyond this radius)
passive_perception: 6
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
cr: '1'
traits:
  - name: Antimagic Susceptibility
    entries:
      - The armor is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the armor must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute.
  - name: False Appearance
    entries:
      - While the armor remains motionless, it is indistinguishable from a normal suit of armor.
actions:
  - name: Multiattack
    entries:
      - The armor makes two melee attacks.
  - name: Slam
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6+STR` bludgeoning damage.'
```
