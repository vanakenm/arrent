---
archivist: true
entity_type: monster
slug: wererat
name: Wererat
compendium: SRD
---

```monster
name: Wererat
size: Medium
type: Humanoid
subtype: human
alignment: lawful evil
ac:
  - ac: 12
hp:
  average: 33
  formula: 6d8+6
speed:
  walk: 30
abilities:
  str: 10
  dex: 15
  con: 12
  int: 11
  wis: 10
  cha: 8
skills:
  perception: 2
  stealth: 4
senses:
  - darkvision 60 ft. (rat form only)
passive_perception: 12
languages:
  - Common (can't speak in rat form)
damage_immunities:
  - bludgeoning
  - piercing
  - and slashing from nonmagical attacks not made with silvered weapons
cr: '2'
traits:
  - name: Shapechanger
    entries:
      - The wererat can use its action to polymorph into a rat-humanoid hybrid or into a giant rat, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.
  - name: Keen Smell
    entries:
      - The wererat has advantage on Wisdom (Perception) checks that rely on smell.
actions:
  - name: Multiattack (Humanoid or Hybrid Form Only)
    entries:
      - The wererat makes two attacks, only one of which can be a bite.
  - name: Bite (Rat or Hybrid Form Only).
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: `damage:1d4+DEX` piercing damage. If the target is a humanoid, it must succeed on a `dc:CON` Constitution saving throw or be cursed with wererat lycanthropy.'
  - name: Shortsword (Humanoid or Hybrid Form Only)
    entries:
      - 'Melee Weapon Attack: `atk:DEX`, reach 5 ft., one target. Hit: `damage:1d6+DEX` piercing damage.'
  - name: Hand Crossbow (Humanoid or Hybrid Form Only)
    entries:
      - 'Ranged Weapon Attack: `atk:DEX`, range 30/120 ft., one target. Hit: `damage:1d6+DEX` piercing damage.'
```
