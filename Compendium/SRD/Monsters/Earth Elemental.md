---
archivist: true
entity_type: monster
slug: earth-elemental
name: Earth Elemental
compendium: SRD
---

```monster
name: Earth Elemental
size: Large
type: Elemental
alignment: neutral
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 126
  formula: 12d10+60
speed:
  walk: 30
  burrow: 30
abilities:
  str: 20
  dex: 8
  con: 20
  int: 5
  wis: 10
  cha: 5
senses:
  - darkvision 60 ft.
  - tremorsense 60 ft.
passive_perception: 10
languages:
  - Terran
damage_vulnerabilities:
  - thunder
damage_resistances:
  - bludgeoning
  - piercing
  - and slashing from nonmagical attacks
damage_immunities:
  - poison
condition_immunities:
  - exhaustion
  - paralyzed
  - petrified
  - poisoned
  - unconscious
cr: '5'
traits:
  - name: Earth Glide
    entries:
      - The elemental can burrow through nonmagical, unworked earth and stone. While doing so, the elemental doesn't disturb the material it moves through.
  - name: Siege Monster
    entries:
      - The elemental deals double damage to objects and structures.
actions:
  - name: Multiattack
    entries:
      - The elemental makes two slam attacks.
  - name: Slam
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one target. Hit: `damage:2d8+STR` bludgeoning damage.'
```
