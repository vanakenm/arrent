---
archivist: true
entity_type: monster
slug: srd-2024_monster_clay-golem
name: Clay Golem
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.413Z'
---

```monster
slug: srd-2024_monster_clay-golem
name: Clay Golem
edition: '2024'
source: SRD 5.2
size: large
type: construct
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 123
  formula: 13d10 + 52
speed:
  walk: 30
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
  - Common plus one other language
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - acid
  - poison
  - psychic
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
      - The golem makes two Slam attacks, or it makes three Slam attacks if it used Hasten this turn.
  - name: Hasten
    entries:
      - The golem takes the Dash and Disengage actions.
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Slam
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d10+STR` Bludgeoning damage plus `dmg:1d12` Acid damage, and the target''s Hit Point maximum decreases by an amount equal to the Acid damage taken.'
    attacks:
      - name: Slam attack
        type: melee
        bonus: 9
        damage: 1d10+5
        damage_type: bludgeoning
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Acid Absorption
    entries:
      - Whenever the golem is subjected to Acid damage, it takes no damage and instead regains a number of Hit Points equal to the Acid damage dealt.
  - name: Berserk
    entries:
      - Whenever the golem starts its turn Bloodied, roll `dice:1d6`. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object. Once the golem goes berserk, it continues to be berserk until it is destroyed or it is no longer Bloodied.
  - name: Immutable Form
    entries:
      - The golem can't shape-shift.
  - name: Magic Resistance
    entries:
      - The golem has Advantage on saving throws against spells and other magical effects.
cr: '9'
saves:
  str: 5
  dex: -1
  con: 4
  int: -4
  wis: -1
  cha: -5
alignment: unaligned
passive_perception: 9
```
