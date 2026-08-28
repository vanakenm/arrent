---
archivist: true
entity_type: monster
slug: srd-5e_monster_chimera
name: Chimera
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.984Z'
---

```monster
slug: srd-5e_monster_chimera
name: Chimera
edition: '2014'
source: SRD 5.1
size: large
type: monstrosity
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 114
  formula: 12d10+48
speed:
  walk: 30
  fly: 60
abilities:
  str: 19
  dex: 11
  con: 19
  int: 3
  wis: 14
  cha: 10
senses:
  - darkvision 60 ft.
languages:
  - understands Draconic but can't speak
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - 'The chimera makes three attacks: one with its bite, one with its horns, and one with its claws. When its fire breath is available, it can use the breath in place of its bite or horns.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 7
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
  - name: Horns
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d12+STR` bludgeoning damage.'
    attacks:
      - name: Horns attack
        type: melee
        bonus: 7
        damage: 1d12
        damage_type: thunder
        range:
          reach: 5
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` slashing damage.'
    attacks:
      - name: Claws attack
        type: melee
        bonus: 7
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
  - name: Fire Breath
    entries:
      - The dragon head exhales fire in a 15-foot cone. Each creature in that area must make a `dc:15` Dexterity saving throw, taking `dmg:7d8` fire damage on a failed save, or half as much damage on a successful one.
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits: []
cr: '6'
skills:
  perception: 8
alignment: chaotic evil
passive_perception: 18
```
