---
archivist: true
entity_type: monster
slug: srd-5e_monster_ghost
name: Ghost
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.993Z'
---

```monster
slug: srd-5e_monster_ghost
name: Ghost
edition: '2014'
source: SRD 5.1
size: medium
type: undead
ac:
  - ac: 11
hp:
  average: 45
  formula: 10d8
speed:
  fly: 40
abilities:
  str: 7
  dex: 13
  con: 10
  int: 10
  wis: 12
  cha: 17
senses:
  - darkvision 60 ft.
languages:
  - any languages it knew in life
damage_vulnerabilities: []
damage_resistances:
  - acid
  - bludgeoning
  - fire
  - lightning
  - piercing
  - slashing
  - thunder
damage_immunities:
  - cold
  - necrotic
  - poison
condition_immunities:
  - charmed
  - exhaustion
  - frightened
  - grappled
  - paralyzed
  - petrified
  - poisoned
  - prone
  - restrained
actions:
  - name: Withering Touch
    entries:
      - 'Melee Weapon Attack: `atk:CHA+PB`, reach 5 ft., one target. Hit: `dmg:4d6+CHA` necrotic damage.'
    attacks:
      - name: Withering Touch attack
        type: melee
        bonus: 5
        damage: 4d6
        damage_type: thunder
        range:
          reach: 5
  - name: Etherealness
    entries:
      - The ghost enters the Ethereal Plane from the Material Plane, or vice versa. It is visible on the Material Plane while it is in the Border Ethereal, and vice versa, yet it can't affect or be affected by anything on the other plane.
  - name: Horrifying Visage
    entries:
      - Each non-undead creature within 60 ft. of the ghost that can see it must succeed on a `dc:13` Wisdom saving throw or be frightened for 1 minute. If the save fails by 5 or more, the target also ages `dice:1d4` x 10 years. A frightened target can repeat the saving throw at the end of each of its turns, ending the frightened condition on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to this ghost's Horrifying Visage for the next 24 hours. The aging effect can be reversed with a greater restoration spell, but only within 24 hours of it occurring.
  - name: Possession
    entries:
      - |-
        One humanoid that the ghost can see within 5 ft. of it must succeed on a `dc:CHA` Charisma saving throw or be possessed by the ghost; the ghost then disappears, and the target is incapacitated and loses control of its body. The ghost now controls the body but doesn't deprive the target of awareness. The ghost can't be targeted by any attack, spell, or other effect, except ones that turn undead, and it retains its alignment, Intelligence, Wisdom, Charisma, and immunity to being charmed and frightened. It otherwise uses the possessed target's statistics, but doesn't gain access to the target's knowledge, class features, or proficiencies.
        The possession lasts until the body drops to 0 hit points, the ghost ends it as a bonus action, or the ghost is turned or forced out by an effect like the dispel evil and good spell. When the possession ends, the ghost reappears in an unoccupied space within 5 ft. of the body. The target is immune to this ghost's Possession for 24 hours after succeeding on the saving throw or after the possession ends.
reactions: []
legendary_actions: []
traits:
  - name: Ethereal Sight
    entries:
      - The ghost can see 60 ft. into the Ethereal Plane when it is on the Material Plane, and vice versa.
  - name: Incorporeal Movement
    entries:
      - The ghost can move through other creatures and objects as if they were difficult terrain. It takes `dmg:1d10` force damage if it ends its turn inside an object.
cr: '4'
alignment: any alignment
passive_perception: 11
```
