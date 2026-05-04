---
archivist: true
entity_type: monster
slug: couatl
name: Couatl
compendium: SRD
---

```monster
name: Couatl
size: Medium
type: Celestial
alignment: lawful good
ac:
  - ac: 19
    from:
      - natural armor
hp:
  average: 97
  formula: 13d8+39
speed:
  walk: 30
  fly: 90
abilities:
  str: 16
  dex: 20
  con: 17
  int: 18
  wis: 20
  cha: 18
saves:
  con: 5
  wis: 7
  cha: 6
senses:
  - truesight 120 ft.
passive_perception: 15
languages:
  - all
  - telepathy 120 ft.
damage_resistances:
  - radiant
damage_immunities:
  - psychic; bludgeoning
  - piercing
  - and slashing from nonmagical attacks
cr: '4'
traits:
  - name: Innate Spellcasting
    entries:
      - |-
        The couatl's spellcasting ability is Charisma (spell save `dc:CHA`). It can innately cast the following spells, requiring only verbal components:

        At will: detect evil and good, detect magic, detect thoughts
        3/day each: bless, create food and water, cure wounds, lesser restoration, protection from poison, sanctuary, shield
        1/day each: dream, greater restoration, scrying
  - name: Magic Weapons
    entries:
      - The couatl's weapon attacks are magical.
  - name: Shielded Mind
    entries:
      - The couatl is immune to scrying and to any effect that would sense its emotions, read its thoughts, or detect its location.
actions:
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:+8`, reach 5 ft., one creature. Hit: `damage:1d6+DEX` piercing damage, and the target must succeed on a `dc:CON` Constitution saving throw or be poisoned for 24 hours. Until this poison ends, the target is unconscious. Another creature can use an action to shake the target awake.'
  - name: Constrict
    entries:
      - 'Melee Weapon Attack: `atk:INT`, reach 10 ft., one Medium or smaller creature. Hit: `damage:2d6+STR` bludgeoning damage, and the target is grappled (escape `dc:DEX`). Until this grapple ends, the target is restrained, and the couatl can''t constrict another target.'
  - name: Change Shape
    entries:
      - |-
        The couatl magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the couatl's choice).
        In a new form, the couatl retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and other actions are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks. If the new form has a bite attack, the couatl can use its bite in that form.
```
