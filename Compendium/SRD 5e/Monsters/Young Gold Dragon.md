---
archivist: true
entity_type: monster
slug: srd-5e_monster_young-gold-dragon
name: Young Gold Dragon
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.027Z'
---

```monster
slug: srd-5e_monster_young-gold-dragon
name: Young Gold Dragon
edition: '2014'
source: SRD 5.1
size: large
type: dragon
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 178
  formula: 17d10+85
speed:
  walk: 40
  fly: 80
  swim: 40
abilities:
  str: 23
  dex: 14
  con: 21
  int: 16
  wis: 13
  cha: 20
senses:
  - darkvision 120 ft.
  - blindsight 30 ft.
languages:
  - Common
  - Draconic
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - fire
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - 'The dragon makes three attacks: one with its bite and two with its claws.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:2d10+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 10
        damage: 2d10
        damage_type: thunder
        range:
          reach: 10
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 10
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
  - name: Breath Weapons
    entries:
      - |-
        The dragon uses one of the following breath weapons.
        **Fire Breath.** The dragon exhales fire in a 30-foot cone. Each creature in that area must make a `dc:17` Dexterity saving throw, taking `dmg:10d10` fire damage on a failed save, or half as much damage on a successful one.
        **Weakening Breath.** The dragon exhales gas in a 30-foot cone. Each creature in that area must succeed on a `dc:17` Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits:
  - name: Amphibious
    entries:
      - The dragon can breathe air and water.
cr: '10'
saves:
  dex: 6
  con: 9
  wis: 5
  cha: 9
skills:
  insight: 5
  perception: 9
  persuasion: 9
  stealth: 6
subtype: Dragons, Metallic
alignment: lawful good
passive_perception: 19
```
