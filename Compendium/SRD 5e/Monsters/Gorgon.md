---
archivist: true
entity_type: monster
slug: srd-5e_monster_gorgon
name: Gorgon
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.999Z'
---

```monster
slug: srd-5e_monster_gorgon
name: Gorgon
edition: '2014'
source: SRD 5.1
size: large
type: monstrosity
ac:
  - ac: 19
    from:
      - natural armor
hp:
  average: 114
  formula: 12d10+48
speed:
  walk: 40
abilities:
  str: 20
  dex: 11
  con: 18
  int: 2
  wis: 12
  cha: 7
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities:
  - petrified
actions:
  - name: Gore
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d12+STR` piercing damage.'
    attacks:
      - name: Gore attack
        type: melee
        bonus: 8
        damage: 2d12
        damage_type: thunder
        range:
          reach: 5
  - name: Hooves
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d10+STR` bludgeoning damage.'
    attacks:
      - name: Hooves attack
        type: melee
        bonus: 8
        damage: 2d10
        damage_type: thunder
        range:
          reach: 5
  - name: Petrifying Breath
    entries:
      - The gorgon exhales petrifying gas in a 30-foot cone. Each creature in that area must succeed on a `dc:13` Constitution saving throw. On a failed save, a target begins to turn to stone and is restrained. The restrained target must repeat the saving throw at the end of its next turn. On a success, the effect ends on the target. On a failure, the target is petrified until freed by the greater restoration spell or other magic.
reactions: []
legendary_actions: []
traits:
  - name: Trampling Charge
    entries:
      - If the gorgon moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a `dc:STR` Strength saving throw or be knocked prone. If the target is prone, the gorgon can make one attack with its hooves against it as a bonus action.
cr: '5'
skills:
  perception: 4
alignment: unaligned
passive_perception: 14
```
