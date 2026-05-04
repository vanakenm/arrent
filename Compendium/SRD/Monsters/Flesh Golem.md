---
archivist: true
entity_type: monster
slug: flesh-golem
name: Flesh Golem
compendium: SRD
---

```monster
name: Flesh Golem
size: Medium
type: Construct
alignment: neutral
ac:
  - ac: 9
hp:
  average: 93
  formula: 11d8+44
speed:
  walk: 30
abilities:
  str: 19
  dex: 9
  con: 18
  int: 6
  wis: 10
  cha: 5
senses:
  - darkvision 60 ft.
passive_perception: 10
languages:
  - understands the languages of its creator but can't speak
damage_immunities:
  - lightning
  - poison; bludgeoning
  - piercing
  - and slashing from nonmagical attacks not made with adamantine weapons
condition_immunities:
  - charmed
  - exhaustion
  - frightened
  - paralyzed
  - petrified
  - poisoned
cr: '5'
traits:
  - name: Berserk
    entries:
      - |-
        Whenever the golem starts its turn with 40 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object, with preference for an object smaller than itself. Once the golem goes berserk, it continues to do so until it is destroyed or regains all its hit points.
        The golem's creator, if within 60 feet of the berserk golem, can try to calm it by speaking firmly and persuasively. The golem must be able to hear its creator, who must take an action to make a `dc:15` Charisma (Persuasion) check. If the check succeeds, the golem ceases being berserk. If it takes damage while still at 40 hit points or fewer, the golem might go berserk again.
  - name: Aversion of Fire
    entries:
      - If the golem takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn.
  - name: Immutable Form
    entries:
      - The golem is immune to any spell or effect that would alter its form.
  - name: Lightning Absorption
    entries:
      - Whenever the golem is subjected to lightning damage, it takes no damage and instead regains a number of hit points equal to the lightning damage dealt.
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
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d8+STR` bludgeoning damage.'
```
