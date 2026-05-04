---
archivist: true
entity_type: monster
slug: flying-sword
name: Flying Sword
compendium: SRD
---

```monster
name: Flying Sword
size: Small
type: Construct
alignment: unaligned
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 17
  formula: 5d6
speed:
  walk: 0
  fly: 50
abilities:
  str: 12
  dex: 15
  con: 11
  int: 1
  wis: 5
  cha: 1
saves:
  dex: 4
senses:
  - blindsight 60 ft. (blind beyond this radius)
passive_perception: 7
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
cr: 1/4
traits:
  - name: Antimagic Susceptibility
    entries:
      - The sword is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the sword must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute.
  - name: False Appearance
    entries:
      - While the sword remains motionless and isn't flying, it is indistinguishable from a normal sword.
actions:
  - name: Longsword
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d8+STR` slashing damage.'
```
