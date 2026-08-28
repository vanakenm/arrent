---
archivist: true
entity_type: monster
slug: srd-5e_monster_iron-golem
name: Iron Golem
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.003Z'
---

```monster
slug: srd-5e_monster_iron-golem
name: Iron Golem
edition: '2014'
source: SRD 5.1
size: large
type: construct
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
languages:
  - understands the languages of its creator but can't speak
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - bludgeoning
  - fire
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
      - The golem makes two melee attacks.
  - name: Slam
    entries:
      - 'Melee Weapon Attack: `atk:+13`, reach 5 ft., one target. Hit: `dmg:3d8+STR` bludgeoning damage.'
    attacks:
      - name: Slam attack
        type: melee
        bonus: 13
        damage: 3d8
        damage_type: thunder
        range:
          reach: 5
  - name: Sword
    entries:
      - 'Melee Weapon Attack: `atk:+13`, reach 10 ft., one target. Hit: `dmg:3d10+STR` slashing damage.'
    attacks:
      - name: Sword attack
        type: melee
        bonus: 13
        damage: 3d10
        damage_type: thunder
        range:
          reach: 10
  - name: Poison Breath
    entries:
      - The golem exhales poisonous gas in a 15-foot cone. Each creature in that area must make a `dc:19` Constitution saving throw, taking `dmg:10d8` poison damage on a failed save, or half as much damage on a successful one.
    recharge:
      type: recharge_on_roll
      param: 6
reactions: []
legendary_actions: []
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
cr: '16'
subtype: Golems
alignment: unaligned
passive_perception: 10
```
