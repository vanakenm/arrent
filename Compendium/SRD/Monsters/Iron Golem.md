---
archivist: true
entity_type: monster
slug: iron-golem
name: Iron Golem
compendium: SRD
---

```monster
name: Iron Golem
size: Large
type: Construct
alignment: unaligned
ac:
  - ac: 20
    from:
      - natural armor
hp:
  average: 210
  formula: 20d10+100
speed:
  walk: 30
abilities:
  str: 24
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
  - fire
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
cr: '16'
traits:
  - name: Fire Absorption
    entries:
      - Whenever the golem is subjected to fire damage, it takes no damage and instead regains a number of hit points equal to the fire damage dealt.
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
      - The golem makes two melee attacks.
  - name: Slam
    entries:
      - 'Melee Weapon Attack: `atk:+13`, reach 5 ft., one target. Hit: `damage:3d8+STR` bludgeoning damage.'
  - name: Sword
    entries:
      - 'Melee Weapon Attack: `atk:+13`, reach 10 ft., one target. Hit: `damage:3d10+STR` slashing damage.'
  - name: Poison Breath (Recharge 5-6)
    entries:
      - The golem exhales poisonous gas in a 15-foot cone. Each creature in that area must make a `dc:19` Constitution saving throw, taking `damage:10d8` poison damage on a failed save, or half as much damage on a successful one.
```
