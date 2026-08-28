---
archivist: true
entity_type: monster
slug: srd-2024_monster_ghost
name: Ghost
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.421Z'
---

```monster
slug: srd-2024_monster_ghost
name: Ghost
edition: '2024'
source: SRD 5.2
size: medium
type: undead
ac:
  - ac: 11
    from:
      - natural armor
hp:
  average: 45
  formula: 10d8
speed:
  walk: 5
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
  - Common plus one other language
damage_vulnerabilities: []
damage_resistances:
  - acid
  - cold
  - fire
  - lightning
  - thunder
damage_immunities:
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
  - name: Multiattack
    entries:
      - The ghost makes two Withering Touch attacks.
  - name: Withering Touch
    entries:
      - 'Melee Attack Roll: `atk:CHA+PB`, reach 5 ft. `dmg:3d10+CHA` Necrotic damage.'
    attacks:
      - name: Withering Touch attack
        type: melee
        bonus: 5
        damage: 3d10+3
        damage_type: necrotic
        range:
          reach: 5
  - name: Horrific Visage
    entries:
      - 'Wisdom Saving Throw: `dc:13`, each creature in a 60-foot Cone that can see the ghost and isn''t an Undead. Failure: `dmg:2d6+CHA` Psychic damage, and the target has the Frightened condition until the start of the ghost''s next turn. Success: The target is immune to this ghost''s Horrific Visage for 24 hours.'
  - name: Possession
    entries:
      - 'Charisma Saving Throw: `dc:CHA`, one Humanoid the ghost can see within 5 feet. Failure: The target is possessed by the ghost; the ghost disappears, and the target has the Incapacitated condition and loses control of its body. The ghost now controls the body, but the target retains awareness. The ghost can''t be targeted by any attack, spell, or other effect, except ones that specifically target Undead. The ghost''s game statistics are the same, except it uses the possessed target''s Speed, as well as the target''s Strength, Dexterity, and Constitution modifiers. The possession lasts until the body drops to 0 Hit Points or the ghost leaves as a Bonus Action. When the possession ends, the ghost appears in an unoccupied space within 5 feet of the target, and the target is immune to this ghost''s Possession for 24 hours. Success: The target is immune to this ghost''s Possession for 24 hours.'
    recharge:
      type: recharge_on_roll
      param: 6
  - name: Etherealness
    entries:
      - |-
        The ghost casts the Etherealness spell, requiring no spell components and using Charisma as the spellcasting ability. The ghost is visible on the Material Plane while on the Border Ethereal and vice versa, but it can't affect or be affected by anything on the other plane.

        - **At Will:** Etherealness
reactions: []
legendary_actions: []
traits:
  - name: Ethereal Sight
    entries:
      - The ghost can see 60 feet into the Ethereal Plane when it is on the Material Plane.
  - name: Incorporeal Movement
    entries:
      - The ghost can move through other creatures and objects as if they were Difficult Terrain. It takes `dmg:1d10` Force damage if it ends its turn inside an object.
cr: '4'
saves:
  str: -2
  dex: 1
  con: 0
  int: 0
  wis: 1
  cha: 3
alignment: neutral
passive_perception: 11
```
