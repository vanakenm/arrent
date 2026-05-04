---
archivist: true
entity_type: monster
slug: mummy-lord
name: Mummy Lord
compendium: SRD
---

```monster
name: Mummy Lord
size: Medium
type: Undead
alignment: lawful evil
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 97
  formula: 13d8+39
speed:
  walk: 20
abilities:
  str: 18
  dex: 10
  con: 17
  int: 11
  wis: 18
  cha: 16
saves:
  con: 8
  int: 5
  wis: 9
  cha: 8
skills:
  history: 5
  religion: 5
senses:
  - darkvision 60 ft.
passive_perception: 14
languages:
  - the languages it knew in life
damage_vulnerabilities:
  - bludgeoning
damage_immunities:
  - necrotic
  - poison; bludgeoning
  - piercing
  - and slashing from nonmagical attacks
condition_immunities:
  - charmed
  - exhaustion
  - frightened
  - paralyzed
  - poisoned
cr: '15'
traits:
  - name: Magic Resistance
    entries:
      - The mummy lord has advantage on saving throws against spells and other magical effects.
  - name: Rejuvenation
    entries:
      - A destroyed mummy lord gains a new body in 24 hours if its heart is intact, regaining all its hit points and becoming active again. The new body appears within 5 feet of the mummy lord's heart.
  - name: Spellcasting
    entries:
      - |-
        The mummy lord is a 10th-level spellcaster. Its spellcasting ability is Wisdom (spell save `dc:WIS`, `atk:WIS` with spell attacks). The mummy lord has the following cleric spells prepared:

        * Cantrips (at will): sacred flame, thaumaturgy
        * 1st level (4 slots): command, guiding bolt, shield of faith
        * 2nd level (3 slots): hold person, silence, spiritual weapon
        * 3rd level (3 slots): animate dead, dispel magic
        * 4th level (3 slots): divination, guardian of faith
        * 5th level (2 slots): contagion, insect plague
        * 6th level (1 slot): harm
actions:
  - name: Multiattack
    entries:
      - The mummy can use its Dreadful Glare and makes one attack with its rotting fist.
  - name: Rotting Fist
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:3d6+STR` bludgeoning damage plus `damage:6d6` necrotic damage. If the target is a creature, it must succeed on a `dc:CON` Constitution saving throw or be cursed with mummy rot. The cursed target can''t regain hit points, and its hit point maximum decreases by 10 (`dice:3d6`) for every 24 hours that elapse. If the curse reduces the target''s hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic.'
  - name: Dreadful Glare
    entries:
      - The mummy lord targets one creature it can see within 60 feet of it. If the target can see the mummy lord, it must succeed on a `dc:16` Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies and mummy lords for the next 24 hours.
legendary:
  - name: Attack
    entries:
      - The mummy lord makes one attack with its rotting fist or uses its Dreadful Glare.
  - name: Blinding Dust
    entries:
      - Blinding dust and sand swirls magically around the mummy lord. Each creature within 5 feet of the mummy lord must succeed on a `dc:CON` Constitution saving throw or be blinded until the end of the creature's next turn.
  - name: Blasphemous Word (Costs 2 Actions)
    entries:
      - The mummy lord utters a blasphemous word. Each non-undead creature within 10 feet of the mummy lord that can hear the magical utterance must succeed on a `dc:CON` Constitution saving throw or be stunned until the end of the mummy lord's next turn.
  - name: Channel Negative Energy (Costs 2 Actions)
    entries:
      - The mummy lord magically unleashes negative energy. Creatures within 60 feet of the mummy lord, including ones behind barriers and around corners, can't regain hit points until the end of the mummy lord's next turn.
  - name: Whirlwind of Sand (Costs 2 Actions)
    entries:
      - The mummy lord magically transforms into a whirlwind of sand, moves up to 60 feet, and reverts to its normal form. While in whirlwind form, the mummy lord is immune to all damage, and it can't be grappled, petrified, knocked prone, restrained, or stunned. Equipment worn or carried by the mummy lord remain in its possession.
legendary_actions: 3
```
