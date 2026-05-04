---
archivist: true
entity_type: monster
slug: lich
name: Lich
compendium: SRD
---

```monster
name: Lich
size: Medium
type: Undead
alignment: any evil alignment
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 135
  formula: 18d8+54
speed:
  walk: 30
abilities:
  str: 11
  dex: 16
  con: 16
  int: 20
  wis: 14
  cha: 16
saves:
  con: 10
  int: 12
  wis: 9
skills:
  arcana: 19
  history: 12
  insight: 9
  perception: 9
senses:
  - truesight 120 ft.
passive_perception: 19
languages:
  - Common plus up to five other languages
damage_resistances:
  - cold
  - lightning
  - necrotic
damage_immunities:
  - poison; bludgeoning
  - piercing
  - and slashing from nonmagical attacks
condition_immunities:
  - charmed
  - exhaustion
  - frightened
  - paralyzed
  - poisoned
cr: '21'
traits:
  - name: Legendary Resistance (3/Day)
    entries:
      - If the lich fails a saving throw, it can choose to succeed instead.
  - name: Rejuvenation
    entries:
      - If it has a phylactery, a destroyed lich gains a new body in `dice:1d10` days, regaining all its hit points and becoming active again. The new body appears within 5 feet of the phylactery.
  - name: Spellcasting
    entries:
      - |-
        The lich is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save `dc:INT`, `atk:INT` with spell attacks). The lich has the following wizard spells prepared:

        * Cantrips (at will): mage hand, prestidigitation, ray of frost
        * 1st level (4 slots): detect magic, magic missile, shield, thunderwave
        * 2nd level (3 slots): detect thoughts, invisibility, acid arrow, mirror image
        * 3rd level (3 slots): animate dead, counterspell, dispel magic, fireball
        * 4th level (3 slots): blight, dimension door
        * 5th level (3 slots): cloudkill, scrying
        * 6th level (1 slot): disintegrate, globe of invulnerability
        * 7th level (1 slot): finger of death, plane shift
        * 8th level (1 slot): dominate monster, power word stun
        * 9th level (1 slot): power word kill
  - name: Turn Resistance
    entries:
      - The lich has advantage on saving throws against any effect that turns undead.
actions:
  - name: Paralyzing Touch
    entries:
      - 'Melee Spell Attack: `atk:INT`, reach 5 ft., one creature. Hit: `damage:3d6` cold damage. The target must succeed on a `dc:CON` Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.'
legendary:
  - name: Cantrip
    entries:
      - The lich casts a cantrip.
  - name: Paralyzing Touch (Costs 2 Actions)
    entries:
      - The lich uses its Paralyzing Touch.
  - name: Frightening Gaze (Costs 2 Actions)
    entries:
      - The lich fixes its gaze on one creature it can see within 10 feet of it. The target must succeed on a `dc:18` Wisdom saving throw against this magic or become frightened for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to the lich's gaze for the next 24 hours.
  - name: Disrupt Life (Costs 3 Actions)
    entries:
      - Each non-undead creature within 20 feet of the lich must make a `dc:CON` Constitution saving throw against this magic, taking `damage:6d6` necrotic damage on a failed save, or half as much damage on a successful one.
legendary_actions: 3
```
