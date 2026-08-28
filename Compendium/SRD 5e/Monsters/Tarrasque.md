---
archivist: true
entity_type: monster
slug: srd-5e_monster_tarrasque
name: Tarrasque
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.020Z'
---

```monster
slug: srd-5e_monster_tarrasque
name: Tarrasque
edition: '2014'
source: SRD 5.1
size: gargantuan
type: monstrosity
ac:
  - ac: 25
    from:
      - natural armor
hp:
  average: 676
  formula: 33d20+330
speed:
  walk: 40
abilities:
  str: 30
  dex: 11
  con: 30
  int: 3
  wis: 11
  cha: 11
senses:
  - blindsight 120 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - bludgeoning
  - fire
  - piercing
  - poison
  - slashing
condition_immunities:
  - charmed
  - frightened
  - paralyzed
  - poisoned
actions:
  - name: Multiattack
    entries:
      - 'The tarrasque can use its Frightful Presence. It then makes five attacks: one with its bite, two with its claws, one with its horns, and one with its tail. It can use its Swallow instead of its bite.'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:4d12+STR` piercing damage. If the target is a creature, it is grappled (escape `dc:20`). Until this grapple ends, the target is restrained, and the tarrasque can''t bite another target.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 19
        damage: 4d12
        damage_type: thunder
        range:
          reach: 10
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 15 ft., one target. Hit: `dmg:4d8+STR` slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 19
        damage: 4d8
        damage_type: thunder
        range:
          reach: 15
  - name: Horns
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:4d10+STR` piercing damage.'
    attacks:
      - name: Horns attack
        type: melee
        bonus: 19
        damage: 4d10
        damage_type: thunder
        range:
          reach: 10
  - name: Tail
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 20 ft., one target. Hit: `dmg:4d6+STR` bludgeoning damage. If the target is a creature, it must succeed on a `dc:20` Strength saving throw or be knocked prone.'
    attacks:
      - name: Tail attack
        type: melee
        bonus: 19
        damage: 4d6
        damage_type: thunder
        range:
          reach: 20
  - name: Frightful Presence
    entries:
      - Each creature of the tarrasque's choice within 120 feet of it and aware of it must succeed on a `dc:WIS` Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the tarrasque is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the tarrasque's Frightful Presence for the next 24 hours.
  - name: Swallow
    entries:
      - |-
        The tarrasque makes one bite attack against a Large or smaller creature it is grappling. If the attack hits, the target takes the bite's damage, the target is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the tarrasque, and it takes `dmg:16d6` acid damage at the start of each of the tarrasque's turns.
        If the tarrasque takes 60 damage or more on a single turn from a creature inside it, the tarrasque must succeed on a `dc:20` Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the tarrasque. If the tarrasque dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 30 feet of movement, exiting prone.
reactions: []
legendary_actions:
  - name: Attack
    entries:
      - The tarrasque makes one claw attack or tail attack.
  - name: Move
    entries:
      - The tarrasque moves up to half its speed.
  - name: Chomp
    entries:
      - The tarrasque makes one bite attack or uses its Swallow.
traits:
  - name: Legendary Resistance (3/Day)
    entries:
      - If the tarrasque fails a saving throw, it can choose to succeed instead.
  - name: Magic Resistance
    entries:
      - The tarrasque has advantage on saving throws against spells and other magical effects.
  - name: Reflective Carapace
    entries:
      - Any time the tarrasque is targeted by a magic missile spell, a line spell, or a spell that requires a ranged attack roll, roll a d6. On a 1 to 5, the tarrasque is unaffected. On a 6, the tarrasque is unaffected, and the effect is reflected back at the caster as though it originated from the tarrasque, turning the caster into the target.
  - name: Siege Monster
    entries:
      - The tarrasque deals double damage to objects and structures.
cr: '30'
saves:
  int: 5
  wis: 9
  cha: 9
alignment: unaligned
passive_perception: 10
legendary_resistance: 3
```
