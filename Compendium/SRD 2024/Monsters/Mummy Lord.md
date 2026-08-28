---
archivist: true
entity_type: monster
slug: srd-2024_monster_mummy-lord
name: Mummy Lord
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.435Z'
---

```monster
slug: srd-2024_monster_mummy-lord
name: Mummy Lord
edition: '2024'
source: SRD 5.2
size: small
type: undead
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 187
  formula: 25d8 + 75
speed:
  walk: 30
abilities:
  str: 18
  dex: 10
  con: 17
  int: 11
  wis: 19
  cha: 16
senses:
  - truesight 60 ft.
languages:
  - Common plus three other languages
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - necrotic
  - poison
condition_immunities:
  - charmed
  - exhaustion
  - frightened
  - paralyzed
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The mummy makes one Rotting Fist or Channel Negative Energy attack, and it uses Dreadful Glare.
  - name: Rotting Fist
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d10+STR` Bludgeoning damage plus `dmg:3d6` Necrotic damage. If the target is a creature, it is cursed. While cursed, the target can''t regain Hit Points, it gains no benefit from finishing a Long Rest, and its Hit Point maximum decreases by 10 (`dice:3d6`) every 24 hours that elapse. A creature dies and turns to dust if reduced to 0 Hit Points by this attack.'
    attacks:
      - name: Rotting Fist attack
        type: melee
        bonus: 9
        damage: 2d10+4
        damage_type: bludgeoning
        range:
          reach: 5
  - name: Channel Negative Energy
    entries:
      - 'Ranged Attack Roll: `atk:STR+PB`, range 60 ft. `dmg:6d6+STR` Necrotic damage.'
    attacks:
      - name: Channel Negative Energy attack
        type: ranged
        bonus: 9
        damage: 6d6+4
        damage_type: necrotic
        range:
          normal: 60
  - name: Dreadful Glare
    entries:
      - 'Wisdom Saving Throw: `dc:WIS`, one creature the mummy can see within 60 feet. Failure: `dmg:6d6+STR` Psychic damage, and the target has the Paralyzed condition until the end of the mummy''s next turn.'
  - name: Spellcasting
    entries:
      - |-
        The mummy casts one of the following spells, requiring no Material components and using Wisdom as the spellcasting ability (spell save `dc:WIS`, `atk:+9` with spell attacks):

        - **At Will:** Dispel Magic, Thaumaturgy
        - **1/Day Each:** Animate Dead, Harm, Insect Plague
reactions:
  - name: Whirlwind of Sand
    entries:
      - _Trigger:_ The mummy is hit by an attack roll. _Response:_ The mummy adds 2 to its AC against the attack, possibly causing the attack to miss, and the mummy teleports up to 60 feet to an unoccupied space it can see. Each creature of its choice that it can see within 5 feet of its destination space has the Blinded condition until the end of the mummy’s next turn.
legendary_actions:
  - name: Glare
    entries:
      - The mummy uses Dreadful Glare. The mummy can't take this action again until the start of its next turn.
  - name: Necrotic Strike
    entries:
      - The mummy makes one Rotting Fist or Channel Negative Energy attack.
  - name: Dread Command
    entries:
      - The mummy casts Command (level 2 version), using the same spellcasting ability as Spellcasting. The mummy can't take this action again until the start of its next turn.
traits:
  - name: Legendary Resistance (3/Day, or 4/Day in Lair)
    entries:
      - If the mummy fails a saving throw, it can choose to succeed instead.
  - name: Magic Resistance
    entries:
      - The mummy has Advantage on saving throws against spells and other magical effects.
  - name: Undead Restoration
    entries:
      - If destroyed, the mummy gains a new body in 24 hours if its heart is intact, reviving with all its Hit Points. The new body appears in an unoccupied space within the mummy's lair. The heart is a Tiny object that has AC 17, HP 10, and Immunity to all damage except Fire.
cr: '15'
saves:
  str: 4
  dex: 0
  con: 3
  int: 5
  wis: 9
  cha: 3
skills:
  history: 5
  perception: 9
  religion: 5
alignment: lawful evil
passive_perception: 19
legendary_resistance: 3
```
