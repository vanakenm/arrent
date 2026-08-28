---
archivist: true
entity_type: monster
slug: srd-2024_monster_tarrasque
name: Tarrasque
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.447Z'
---

```monster
slug: srd-2024_monster_tarrasque
name: Tarrasque
edition: '2024'
source: SRD 5.2
size: gargantuan
type: monstrosity
ac:
  - ac: 25
    from:
      - natural armor
hp:
  average: 697
  formula: 34d20 + 340
speed:
  walk: 60
  climb: 60
  burrow: 40
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
  - fire
  - poison
condition_immunities:
  - charmed
  - deafened
  - frightened
  - paralyzed
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The tarrasque makes one Bite attack and three other attacks, using Claw or Tail in any combination.
  - name: Swallow
    entries:
      - 'Strength Saving Throw: `dc:STR`, one Large or smaller creature Grappled by the tarrasque (it can have up to six creatures swallowed at a time). Failure: The target is swallowed, and the Grappled condition ends. A swallowed creature has the Blinded and Restrained conditions and can''t teleport, it has Cover|XPHB|Total Cover against attacks and other effects outside the tarrasque, and it takes `dmg:16d6` Acid damage at the start of each of the tarrasque''s turns. If the tarrasque takes 60 damage or more on a single turn from a creature inside it, the tarrasque must succeed on a `dc:20` Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, each of which falls in a space within 10 feet of the tarrasque and has the Prone condition. If the tarrasque dies, any swallowed creature no longer has the Restrained condition and can escape from the corpse using 20 feet of movement, exiting Prone.'
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 15 ft. `dmg:4d12+STR` Piercing damage, and the target has the Grappled condition (escape `dc:20`). Until the grapple ends, the target has the Restrained condition and can''t teleport.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 19
        damage: 4d12+10
        damage_type: piercing
        range:
          reach: 15
  - name: Claw
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 15 ft. `dmg:4d8+STR` Slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 19
        damage: 4d8+10
        damage_type: slashing
        range:
          reach: 15
  - name: Tail
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 30 ft. `dmg:3d8+STR` Bludgeoning damage. If the target is a Huge or smaller creature, it has the Prone condition.'
    attacks:
      - name: Tail attack
        type: melee
        bonus: 19
        damage: 3d8+10
        damage_type: bludgeoning
        range:
          reach: 30
  - name: Thunderous Bellow
    entries:
      - 'Constitution Saving Throw: `dc:CON`, each creature and each object that isn''t being worn or carried in a 150-foot Cone. Failure: `dmg:12d12` Thunder damage, and the target has the Deafened and Frightened conditions until the end of its next turn. Success: Half damage only.'
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions:
  - name: Onslaught
    entries:
      - The tarrasque moves up to half its Speed, and it makes one Claw or Tail attack.
  - name: World-Shaking Movement
    entries:
      - The tarrasque moves up to its Speed. At the end of this movement, the tarrasque creates an instantaneous shock wave in a 60-foot Emanation originating from itself. Creatures in that area lose Concentration and, if Medium or smaller, have the Prone condition. The tarrasque can't take this action again until the start of its next turn.
traits:
  - name: Legendary Resistance (6/Day)
    entries:
      - If the tarrasque fails a saving throw, it can choose to succeed instead.
  - name: Magic Resistance
    entries:
      - The tarrasque has Advantage on saving throws against spells and other magical effects.
  - name: Reflective Carapace
    entries:
      - If the tarrasque is targeted by a Magic Missile spell or a spell that requires a ranged attack roll, roll `dice:1d6`. On a 1-5, the tarrasque is unaffected. On a 6, the tarrasque is unaffected and reflects the spell, turning the caster into the target.
  - name: Siege Monster
    entries:
      - The tarrasque deals double damage to objects and structures.
cr: '30'
saves:
  str: 10
  dex: 9
  con: 10
  int: 5
  wis: 9
  cha: 9
skills:
  perception: 9
alignment: unaligned
passive_perception: 19
legendary_resistance: 6
```
