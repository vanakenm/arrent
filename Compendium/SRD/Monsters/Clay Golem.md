---
archivist: true
entity_type: monster
slug: clay-golem
name: Clay Golem
compendium: SRD
---

```monster
name: Clay Golem
size: Large
type: Construct
alignment: unaligned
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 133
  formula: 14d10+56
speed:
  walk: 20
abilities:
  str: 20
  dex: 9
  con: 18
  int: 3
  wis: 8
  cha: 1
senses:
  - darkvision 60 ft.
passive_perception: 9
languages:
  - understands the languages of its creator but can't speak
damage_immunities:
  - acid
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
cr: '9'
traits:
  - name: Acid Absorption
    entries:
      - Whenever the golem is subjected to acid damage, it takes no damage and instead regains a number of hit points equal to the acid damage dealt.
  - name: Berserk
    entries:
      - Whenever the golem starts its turn with 60 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object, with preference for an object smaller than itself. Once the golem goes berserk, it continues to do so until it is destroyed or regains all its hit points.
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
      - 'Melee Weapon Attack: `atk:CON`, reach 5 ft., one target. Hit: `damage:2d10+STR` bludgeoning damage. If the target is a creature, it must succeed on a `dc:15` Constitution saving throw or have its hit point maximum reduced by an amount equal to the damage taken. The target dies if this attack reduces its hit point maximum to 0. The reduction lasts until removed by the greater restoration spell or other magic.'
  - name: Haste (Recharge 5-6)
    entries:
      - Until the end of its next turn, the golem magically gains a +2 bonus to its AC, has advantage on Dexterity saving throws, and can use its slam attack as a bonus action.
```
