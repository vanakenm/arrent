---
archivist: true
entity_type: monster
slug: rust-monster
name: Rust Monster
compendium: SRD
---

```monster
name: Rust Monster
size: Medium
type: Monstrosity
alignment: unaligned
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 27
  formula: 5d8+5
speed:
  walk: 40
abilities:
  str: 13
  dex: 12
  con: 13
  int: 2
  wis: 13
  cha: 6
senses:
  - darkvision 60 ft.
passive_perception: 11
cr: 1/2
traits:
  - name: Iron Scent
    entries:
      - The rust monster can pinpoint, by scent, the location of ferrous metal within 30 feet of it.
  - name: Rust Metal
    entries:
      - Any nonmagical weapon made of metal that hits the rust monster corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Non magical ammunition made of metal that hits the rust monster is destroyed after dealing damage.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d8+STR` piercing damage.'
  - name: Antennae
    entries:
      - |-
        The rust monster corrodes a nonmagical ferrous metal object it can see within 5 feet of it. If the object isn't being worn or carried, the touch destroys a 1-foot cube of it. If the object is being worn or carried by a creature, the creature can make a `dc:DEX` Dexterity saving throw to avoid the rust monster's touch.
        If the object touched is either metal armor or a metal shield being worn or carried, its takes a permanent and cumulative -1 penalty to the AC it offers. Armor reduced to an AC of 10 or a shield that drops to a +0 bonus is destroyed. If the object touched is a held metal weapon, it rusts as described in the Rust Metal trait.
```
