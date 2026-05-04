---
archivist: true
entity_type: monster
slug: stone-golem
name: Stone Golem
compendium: SRD
---

```monster
name: Stone Golem
size: Large
type: Construct
alignment: unaligned
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 178
  formula: 17d10+85
speed:
  walk: 30
abilities:
  str: 22
  dex: 9
  con: 20
  int: 3
  wis: 11
  cha: 1
senses:
  - darkvision 120 ft.
passive_perception: 10
languages:
  - understands the languages of its creator but can't speak
damage_immunities:
  - poison
  - psychic; bludgeoning
  - piercing
  - and slashing from nonmagical attacks not made with adamantine weapons
condition_immunities:
  - charmed
  - exhaustion
  - frightened
  - paralyzed
  - petrified
  - poisoned
cr: '10'
traits:
  - name: Immutable Form
    entries:
      - The golem is immune to any spell or effect that would alter its form.
  - name: Magic Resistance
    entries:
      - The golem has advantage on saving throws against spells and other magical effects.
  - name: Magic Weapons
    entries:
      - The golem's weapon attacks are magical.
actions:
  - name: Multiattack
    entries:
      - The golem makes two slam attacks.
  - name: Slam
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:3d8+STR` bludgeoning damage.'
  - name: Slow (Recharge 5-6)
    entries:
      - The golem targets one or more creatures it can see within 10 ft. of it. Each target must make a `dc:17` Wisdom saving throw against this magic. On a failed save, a target can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the target can take either an action or a bonus action on its turn, not both. These effects last for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
```
