---
archivist: true
entity_type: monster
slug: mimic
name: Mimic
compendium: SRD
---

```monster
name: Mimic
size: Medium
type: Monstrosity
subtype: shapechanger
alignment: neutral
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
skills:
  stealth: 5
senses:
  - darkvision 60 ft.
passive_perception: 11
damage_immunities:
  - acid
condition_immunities:
  - prone
cr: '2'
traits:
  - name: Shapechanger
    entries:
      - The mimic can use its action to polymorph into an object or back into its true, amorphous form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.
  - name: Adhesive (Object Form Only)
    entries:
      - The mimic adheres to anything that touches it. A Huge or smaller creature adhered to the mimic is also grappled by it (escape `dc:STR`). Ability checks made to escape this grapple have disadvantage.
  - name: False Appearance (Object Form Only)
    entries:
      - While the mimic remains motionless, it is indistinguishable from an ordinary object.
  - name: Grappler
    entries:
      - The mimic has advantage on attack rolls against any creature grappled by it.
actions:
  - name: Pseudopod
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d8+STR` bludgeoning damage. If the mimic is in object form, the target is subjected to its Adhesive trait.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d8+STR` piercing damage plus `damage:1d8` acid damage.'
```
