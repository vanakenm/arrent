---
archivist: true
entity_type: monster
slug: weretiger
name: Weretiger
compendium: SRD
---

```monster
name: Weretiger
size: Medium
type: Humanoid
subtype: human
alignment: neutral
ac:
  - ac: 12
hp:
  average: 120
  formula: 16d8+48
speed:
  walk: 30
abilities:
  str: 17
  dex: 15
  con: 16
  int: 10
  wis: 13
  cha: 11
skills:
  perception: 5
  stealth: 4
senses:
  - darkvision 60 ft.
passive_perception: 15
languages:
  - Common (can't speak in tiger form)
damage_immunities:
  - bludgeoning
  - piercing
  - and slashing from nonmagical attacks not made with silvered weapons
cr: '4'
traits:
  - name: Shapechanger
    entries:
      - The weretiger can use its action to polymorph into a tiger-humanoid hybrid or into a tiger, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.
  - name: Keen Hearing and Smell
    entries:
      - The weretiger has advantage on Wisdom (Perception) checks that rely on hearing or smell.
  - name: Pounce (Tiger or Hybrid Form Only)
    entries:
      - If the weretiger moves at least 15 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a `dc:14` Strength saving throw or be knocked prone. If the target is prone, the weretiger can make one bite attack against it as a bonus action.
actions:
  - name: Multiattack (Humanoid or Hybrid Form Only)
    entries:
      - In humanoid form, the weretiger makes two scimitar attacks or two longbow attacks. In hybrid form, it can attack like a humanoid or make two claw attacks.
  - name: Bite (Tiger or Hybrid Form Only)
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d10+STR` piercing damage. If the target is a humanoid, it must succeed on a `dc:CON` Constitution saving throw or be cursed with weretiger lycanthropy.'
  - name: Claw (Tiger or Hybrid Form Only)
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d8+STR` slashing damage.'
  - name: Scimitar (Humanoid or Hybrid Form Only)
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d6+STR` slashing damage.'
  - name: Longbow (Humanoid or Hybrid Form Only)
    entries:
      - 'Ranged Weapon Attack: `atk:DEX`, range 150/600 ft., one target. Hit: `damage:1d8+DEX` piercing damage.'
```
