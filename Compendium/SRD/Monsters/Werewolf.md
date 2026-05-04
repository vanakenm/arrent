---
archivist: true
entity_type: monster
slug: werewolf
name: Werewolf
compendium: SRD
---

```monster
name: Werewolf
size: Medium
type: Humanoid
subtype: human
alignment: chaotic evil
ac:
  - ac: 11
    from:
      - 11 in humanoid form, 12 (natural armor) in wolf or hybrid form
hp:
  average: 58
  formula: 9d8+18
speed:
  walk: 30
abilities:
  str: 15
  dex: 13
  con: 14
  int: 10
  wis: 11
  cha: 10
skills:
  perception: 4
passive_perception: 14
languages:
  - Common (can't speak in wolf form)
damage_immunities:
  - bludgeoning
  - piercing
  - and slashing from nonmagical attacks not made with silvered weapons
cr: '3'
traits:
  - name: Shapechanger
    entries:
      - The werewolf can use its action to polymorph into a wolf-humanoid hybrid or into a wolf, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.
  - name: Keen Hearing and Smell
    entries:
      - The werewolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.
actions:
  - name: Multiattack (Humanoid or Hybrid Form Only)
    entries:
      - 'The werewolf makes two attacks: two with its spear (humanoid form) or one with its bite and one with its claws (hybrid form).'
  - name: Bite (Wolf or Hybrid Form Only)
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d8+STR` piercing damage. If the target is a humanoid, it must succeed on a `dc:CON` Constitution saving throw or be cursed with werewolf lycanthropy.'
  - name: Claws (Hybrid Form Only)
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one creature. Hit: `damage:2d4+STR` slashing damage.'
  - name: Spear (Humanoid Form Only)
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:STR`, reach 5 ft. or range 20/60 ft., one creature. Hit: `damage:1d6+STR` piercing damage, or `damage:1d8+STR` piercing damage if used with two hands to make a melee attack.'
```
