---
archivist: true
entity_type: monster
slug: srd-5e_monster_bulette
name: Bulette
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.983Z'
---

```monster
slug: srd-5e_monster_bulette
name: Bulette
edition: '2014'
source: SRD 5.1
size: large
type: monstrosity
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 94
  formula: 9d10+45
speed:
  walk: 40
  burrow: 40
abilities:
  str: 19
  dex: 11
  con: 21
  int: 2
  wis: 10
  cha: 5
senses:
  - darkvision 60 ft.
  - tremorsense 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:4d12+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 7
        damage: 4d12
        damage_type: thunder
        range:
          reach: 5
  - name: Deadly Leap
    entries:
      - If the bulette jumps at least 15 ft. as part of its movement, it can then use this action to land on its ft. in a space that contains one or more other creatures. Each of those creatures must succeed on a `dc:16` Strength or Dexterity saving throw (target's choice) or be knocked prone and take `dmg:3d6+STR` bludgeoning damage plus `dmg:3d6+STR` slashing damage. On a successful save, the creature takes only half the damage, isn't knocked prone, and is pushed 5 ft. out of the bulette's space into an unoccupied space of the creature's choice. If no unoccupied space is within range, the creature instead falls prone in the bulette's space.
reactions: []
legendary_actions: []
traits:
  - name: Standing Leap
    entries:
      - The bulette's long jump is up to 30 ft. and its high jump is up to 15 ft., with or without a running start.
cr: '5'
skills:
  perception: 6
alignment: unaligned
passive_perception: 16
```
