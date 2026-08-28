---
archivist: true
entity_type: monster
slug: srd-5e_monster_lich
name: Lich
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.004Z'
---

```monster
slug: srd-5e_monster_lich
name: Lich
edition: '2014'
source: SRD 5.1
size: medium
type: undead
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
senses:
  - truesight 120 ft.
languages:
  - Common plus up to five other languages
damage_vulnerabilities: []
damage_resistances:
  - cold
  - lightning
  - necrotic
damage_immunities:
  - bludgeoning
  - piercing
  - poison
  - slashing
condition_immunities:
  - charmed
  - exhaustion
  - frightened
  - paralyzed
  - poisoned
actions:
  - name: Paralyzing Touch
    entries:
      - 'Melee Spell Attack: `atk:+12`, reach 5 ft., one creature. Hit: `dmg:3d6` cold damage. The target must succeed on a `dc:CON` Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.'
    attacks:
      - name: Paralyzing Touch attack
        type: melee
        bonus: 12
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions:
  - name: Cantrip
    entries:
      - The lich casts a cantrip.
  - name: Paralyzing Touch
    entries:
      - The lich uses its Paralyzing Touch.
  - name: Frightening Gaze
    entries:
      - The lich fixes its gaze on one creature it can see within 10 feet of it. The target must succeed on a `dc:18` Wisdom saving throw against this magic or become frightened for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to the lich's gaze for the next 24 hours.
  - name: Disrupt Life
    entries:
      - Each non-undead creature within 20 feet of the lich must make a `dc:CON` Constitution saving throw against this magic, taking `dmg:6d6` necrotic damage on a failed save, or half as much damage on a successful one.
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
        The lich is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save `dc:INT`, `atk:+12` with spell attacks). The lich has the following wizard spells prepared:

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
cr: '21'
saves:
  con: 10
  int: 12
  wis: 9
skills:
  arcana: 18
  history: 12
  insight: 9
  perception: 9
alignment: any evil alignment
passive_perception: 19
legendary_resistance: 3
```
