---
archivist: true
entity_type: monster
slug: srd-5e_monster_mimic
name: Mimic
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.007Z'
---

```monster
slug: srd-5e_monster_mimic
name: Mimic
edition: '2014'
source: SRD 5.1
size: medium
type: monstrosity
ac:
  - ac: 12
    from:
      - natural armor
hp:
  average: 58
  formula: 9d8+18
speed:
  walk: 15
abilities:
  str: 17
  dex: 12
  con: 15
  int: 5
  wis: 13
  cha: 8
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - acid
condition_immunities:
  - prone
actions:
  - name: Pseudopod
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d8+STR` bludgeoning damage. If the mimic is in object form, the target is subjected to its Adhesive trait.'
    attacks:
      - name: Pseudopod attack
        type: melee
        bonus: 5
        damage: 1d8
        damage_type: thunder
        range:
          reach: 5
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d8+STR` piercing damage plus `dmg:1d8` acid damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 5
        damage: 1d8
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Adhesive (Object Form Only)
    entries:
      - The mimic adheres to anything that touches it. A Huge or smaller creature adhered to the mimic is also grappled by it (escape `dc:STR`). Ability checks made to escape this grapple have disadvantage.
  - name: False Appearance (Object Form Only)
    entries:
      - While the mimic remains motionless, it is indistinguishable from an ordinary object.
  - name: Grappler
    entries:
      - The mimic has advantage on attack rolls against any creature grappled by it.
  - name: Shapechanger
    entries:
      - The mimic can use its action to polymorph into an object or back into its true, amorphous form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.
cr: '2'
skills:
  stealth: 5
alignment: neutral
passive_perception: 11
```
