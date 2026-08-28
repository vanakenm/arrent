---
archivist: true
entity_type: monster
slug: srd-5e_monster_clay-golem
name: Clay Golem
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.985Z'
---

```monster
slug: srd-5e_monster_clay-golem
name: Clay Golem
edition: '2014'
source: SRD 5.1
size: large
type: construct
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
languages:
  - understands the languages of its creator but can't speak
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - acid
  - bludgeoning
  - piercing
  - poison
  - psychic
  - slashing
condition_immunities:
  - charmed
  - exhaustion
  - frightened
  - paralyzed
  - petrified
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The golem makes two slam attacks.
  - name: Slam
    entries:
      - 'Melee Weapon Attack: `atk:+8`, reach 5 ft., one target. Hit: `dmg:2d10+STR` bludgeoning damage. If the target is a creature, it must succeed on a `dc:15` Constitution saving throw or have its hit point maximum reduced by an amount equal to the damage taken. The target dies if this attack reduces its hit point maximum to 0. The reduction lasts until removed by the greater restoration spell or other magic.'
    attacks:
      - name: Slam attack
        type: melee
        bonus: 8
        damage: 2d10
        damage_type: thunder
        range:
          reach: 5
  - name: Haste
    entries:
      - Until the end of its next turn, the golem magically gains a +2 bonus to its AC, has advantage on Dexterity saving throws, and can use its slam attack as a bonus action.
reactions: []
legendary_actions: []
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
cr: '9'
subtype: Golems
alignment: unaligned
passive_perception: 9
```
