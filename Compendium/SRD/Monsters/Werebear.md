---
archivist: true
entity_type: monster
slug: werebear
name: Werebear
compendium: SRD
---

```monster
name: Werebear
size: Medium
type: Humanoid
subtype: human
alignment: neutral good
ac:
  - ac: 10
    from:
      - 10 in humanoid form, 11 (natural armor) in bear and hybrid form
hp:
  average: 135
  formula: 18d8+54
speed:
  walk: 30
abilities:
  str: 19
  dex: 10
  con: 17
  int: 11
  wis: 12
  cha: 12
skills:
  perception: 7
passive_perception: 17
languages:
  - Common (can't speak in bear form)
damage_immunities:
  - bludgeoning
  - piercing
  - and slashing from nonmagical attacks not made with silvered weapons
cr: '5'
traits:
  - name: Shapechanger
    entries:
      - The werebear can use its action to polymorph into a Large bear-humanoid hybrid or into a Large bear, or back into its true form, which is humanoid. Its statistics, other than its size and AC, are the same in each form. Any equipment it. is wearing or carrying isn't transformed. It reverts to its true form if it dies.
  - name: Keen Smell
    entries:
      - The werebear has advantage on Wisdom (Perception) checks that rely on smell.
actions:
  - name: Multiattack
    entries:
      - In bear form, the werebear makes two claw attacks. In humanoid form, it makes two greataxe attacks. In hybrid form, it can attack like a bear or a humanoid.
  - name: Bite (Bear or Hybrid Form Only)
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d10+STR` piercing damage. If the target is a humanoid, it must succeed on a `dc:CON` Constitution saving throw or be cursed with were bear lycanthropy.'
  - name: Claw (Bear or Hybrid Form Only)
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d8+STR` slashing damage.'
  - name: Greataxe (Humanoid or Hybrid Form Only)
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d12+STR` slashing damage.'
```
