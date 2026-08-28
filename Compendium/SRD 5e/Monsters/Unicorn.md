---
archivist: true
entity_type: monster
slug: srd-5e_monster_unicorn
name: Unicorn
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.022Z'
---

```monster
slug: srd-5e_monster_unicorn
name: Unicorn
edition: '2014'
source: SRD 5.1
size: large
type: celestial
ac:
  - ac: 12
hp:
  average: 67
  formula: 9d10+18
speed:
  walk: 50
abilities:
  str: 18
  dex: 14
  con: 15
  int: 11
  wis: 17
  cha: 16
senses:
  - darkvision 60 ft.
languages:
  - Celestial
  - Elvish
  - Sylvan
  - telepathy 60 ft.
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - poison
condition_immunities:
  - charmed
  - paralyzed
  - poisoned
actions:
  - name: Multiattack
    entries:
      - 'The unicorn makes two attacks: one with its hooves and one with its horn.'
  - name: Hooves
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` bludgeoning damage.'
    attacks:
      - name: Hooves attack
        type: melee
        bonus: 7
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
  - name: Horn
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d8+STR` piercing damage.'
    attacks:
      - name: Horn attack
        type: melee
        bonus: 7
        damage: 1d8
        damage_type: thunder
        range:
          reach: 5
  - name: Healing Touch
    entries:
      - The unicorn touches another creature with its horn. The target magically regains 11 (`dice:2d8+2`) hit points. In addition, the touch removes all diseases and neutralizes all poisons afflicting the target.
    recharge:
      type: per_day
      param: 3
  - name: Teleport
    entries:
      - The unicorn magically teleports itself and up to three willing creatures it can see within 5 ft. of it, along with any equipment they are wearing or carrying, to a location the unicorn is familiar with, up to 1 mile away.
    recharge:
      type: per_day
      param: 1
reactions: []
legendary_actions:
  - name: Hooves
    entries:
      - The unicorn makes one attack with its hooves.
  - name: Shimmering Shield
    entries:
      - The unicorn creates a shimmering, magical field around itself or another creature it can see within 60 ft. of it. The target gains a +2 bonus to AC until the end of the unicorn's next turn.
  - name: Heal Self
    entries:
      - The unicorn magically regains 11 (`dice:2d8+2`) hit points.
traits:
  - name: Charge
    entries:
      - If the unicorn moves at least 20 ft. straight toward a target and then hits it with a horn attack on the same turn, the target takes an extra `dmg:2d8` piercing damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.
  - name: Innate Spellcasting
    entries:
      - |-
        The unicorn's innate spellcasting ability is Charisma (spell save `dc:CHA`). The unicorn can innately cast the following spells, requiring no components:

        At will: detect evil and good, druidcraft, pass without trace
        1/day each: calm emotions, dispel evil and good, entangle
  - name: Magic Resistance
    entries:
      - The unicorn has advantage on saving throws against spells and other magical effects.
  - name: Magic Weapons
    entries:
      - The unicorn's weapon attacks are magical.
cr: '5'
alignment: lawful good
passive_perception: 13
```
