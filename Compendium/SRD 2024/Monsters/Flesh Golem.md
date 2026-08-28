---
archivist: true
entity_type: monster
slug: srd-2024_monster_flesh-golem
name: Flesh Golem
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.420Z'
---

```monster
slug: srd-2024_monster_flesh-golem
name: Flesh Golem
edition: '2024'
source: SRD 5.2
size: medium
type: construct
ac:
  - ac: 9
    from:
      - natural armor
hp:
  average: 127
  formula: 15d8 + 60
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
  - Understands Common plus one other language but can't speak
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - lightning
  - poison
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
      - The golem makes two Slam attacks.
  - name: Slam
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d8+STR` Bludgeoning damage plus `dmg:1d8` Lightning damage.'
    attacks:
      - name: Slam attack
        type: melee
        bonus: 7
        damage: 2d8+4
        damage_type: bludgeoning
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Aversion to Fire
    entries:
      - If the golem takes Fire damage, it has Disadvantage on attack rolls and ability checks until the end of its next turn.
  - name: Berserk
    entries:
      - Whenever the golem starts its turn Bloodied, roll `dice:1d6`. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object. Once the golem goes berserk, it remains so until it is destroyed or it is no longer Bloodied. The golem's creator, if within 60 feet of the berserk golem, can try to calm it by taking an action to make a `dc:15` Charisma (Persuasion) check; the golem must be able to hear its creator. If this check succeeds, the golem ceases being berserk until the start of its next turn, at which point it resumes rolling for the Berserk trait again if it is still Bloodied.
  - name: Immutable Form
    entries:
      - The golem can't shape-shift.
  - name: Lightning Absorption
    entries:
      - Whenever the golem is subjected to Lightning damage, it regains a number of Hit Points equal to the Lightning damage dealt.
  - name: Magic Resistance
    entries:
      - The golem has Advantage on saving throws against spells and other magical effects.
cr: '5'
saves:
  str: 4
  dex: -1
  con: 4
  int: -2
  wis: 0
  cha: -3
alignment: neutral
passive_perception: 10
```
