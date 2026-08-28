---
archivist: true
entity_type: monster
slug: srd-5e_monster_cloaker
name: Cloaker
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.985Z'
---

```monster
slug: srd-5e_monster_cloaker
name: Cloaker
edition: '2014'
source: SRD 5.1
size: large
type: aberration
ac:
  - ac: 14
    from:
      - natural armor
hp:
  average: 78
  formula: 12d10+12
speed:
  walk: 10
  fly: 40
abilities:
  str: 17
  dex: 15
  con: 12
  int: 13
  wis: 12
  cha: 14
senses:
  - darkvision 60 ft.
languages:
  - Deep Speech
  - Undercommon
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - 'The cloaker makes two attacks: one with its bite and one with its tail.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one creature. Hit: `dmg:2d6+STR` piercing damage, and if the target is Large or smaller, the cloaker attaches to it. If the cloaker has advantage against the target, the cloaker attaches to the target''s head, and the target is blinded and unable to breathe while the cloaker is attached. While attached, the cloaker can make this attack only against the target and has advantage on the attack roll. The cloaker can detach itself by spending 5 feet of its movement. A creature, including the target, can take its action to detach the cloaker by succeeding on a `dc:16` Strength check.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 6
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
  - name: Tail
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one creature. Hit: `dmg:1d8+STR` slashing damage.'
    attacks:
      - name: Tail attack
        type: melee
        bonus: 6
        damage: 1d8
        damage_type: thunder
        range:
          reach: 10
  - name: Moan
    entries:
      - Each creature within 60 feet of the cloaker that can hear its moan and that isn't an aberration must succeed on a `dc:13` Wisdom saving throw or become frightened until the end of the cloaker's next turn. If a creature's saving throw is successful, the creature is immune to the cloaker's moan for the next 24 hours.
  - name: Phantasms
    entries:
      - |-
        The cloaker magically creates three illusory duplicates of itself if it isn't in bright light. The duplicates move with it and mimic its actions, shifting position so as to make it impossible to track which cloaker is the real one. If the cloaker is ever in an area of bright light, the duplicates disappear.
        Whenever any creature targets the cloaker with an attack or a harmful spell while a duplicate remains, that creature rolls randomly to determine whether it targets the cloaker or one of the duplicates. A creature is unaffected by this magical effect if it can't see or if it relies on senses other than sight.
        A duplicate has the cloaker's AC and uses its saving throws. If an attack hits a duplicate, or if a duplicate fails a saving throw against an effect that deals damage, the duplicate disappears.
reactions: []
legendary_actions: []
traits:
  - name: Damage Transfer
    entries:
      - While attached to a creature, the cloaker takes only half the damage dealt to it (rounded down). and that creature takes the other half.
  - name: False Appearance
    entries:
      - While the cloaker remains motionless without its underside exposed, it is indistinguishable from a dark leather cloak.
  - name: Light Sensitivity
    entries:
      - While in bright light, the cloaker has disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight.
cr: '8'
skills:
  stealth: 5
alignment: chaotic neutral
passive_perception: 11
```
