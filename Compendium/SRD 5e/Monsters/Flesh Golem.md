---
archivist: true
entity_type: monster
slug: srd-5e_monster_flesh-golem
name: Flesh Golem
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.991Z'
---

```monster
slug: srd-5e_monster_flesh-golem
name: Flesh Golem
edition: '2014'
source: SRD 5.1
size: medium
type: construct
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
languages:
  - understands the languages of its creator but can't speak
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - bludgeoning
  - lightning
  - piercing
  - poison
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
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d8+STR` bludgeoning damage.'
    attacks:
      - name: Slam attack
        type: melee
        bonus: 7
        damage: 2d8
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Aversion of Fire
    entries:
      - If the golem takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn.
  - name: Berserk
    entries:
      - |-
        Whenever the golem starts its turn with 40 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object, with preference for an object smaller than itself. Once the golem goes berserk, it continues to do so until it is destroyed or regains all its hit points.
        The golem's creator, if within 60 feet of the berserk golem, can try to calm it by speaking firmly and persuasively. The golem must be able to hear its creator, who must take an action to make a `dc:15` Charisma (Persuasion) check. If the check succeeds, the golem ceases being berserk. If it takes damage while still at 40 hit points or fewer, the golem might go berserk again.
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
cr: '5'
subtype: Golems
alignment: neutral
passive_perception: 10
```
