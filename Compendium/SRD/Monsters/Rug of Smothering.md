---
archivist: true
entity_type: monster
slug: rug-of-smothering
name: Rug of Smothering
compendium: SRD
---

```monster
name: Rug of Smothering
size: Large
type: Construct
alignment: unaligned
ac:
  - ac: 12
hp:
  average: 33
  formula: 6d10
speed:
  walk: 10
abilities:
  str: 17
  dex: 14
  con: 10
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
  - frightened
  - paralyzed
  - petrified
  - poisoned
cr: '2'
traits:
  - name: Antimagic Susceptibility
    entries:
      - The rug is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the rug must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute.
  - name: Damage Transfer
    entries:
      - While it is grappling a creature, the rug takes only half the damage dealt to it, and the creature grappled by the rug takes the other half.
  - name: False Appearance
    entries:
      - While the rug remains motionless, it is indistinguishable from a normal rug.
actions:
  - name: Smother
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one Medium or smaller creature. Hit: The creature is grappled (escape `dc:STR`). Until this grapple ends, the target is restrained, blinded, and at risk of suffocating, and the rug can''t smother another target. In addition, at the start of each of the target''s turns, the target takes `damage:2d6+STR` bludgeoning damage.'
```
