---
archivist: true
entity_type: monster
slug: srd-2024_monster_lich
name: Lich
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.433Z'
---

```monster
slug: srd-2024_monster_lich
name: Lich
edition: '2024'
source: SRD 5.2
size: medium
type: undead
ac:
  - ac: 20
    from:
      - natural armor
hp:
  average: 315
  formula: 42d8 + 126
speed:
  walk: 30
abilities:
  str: 11
  dex: 16
  con: 16
  int: 21
  wis: 14
  cha: 16
senses:
  - truesight 120 ft.
languages:
  - All
damage_vulnerabilities: []
damage_resistances:
  - cold
  - lightning
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
      - The lich makes three attacks, using Eldritch Burst or Paralyzing Touch in any combination.
  - name: Eldritch Burst
    entries:
      - 'Melee or Ranged Attack Roll: `atk:INT+PB`, reach 5 ft. or range 120 ft. `dmg:4d12+INT` Force damage.'
    attacks:
      - name: Eldritch Burst attack
        type: ranged
        bonus: 12
        damage: 4d12+5
        damage_type: force
        range:
          reach: 5
          normal: 120
  - name: Paralyzing Touch
    entries:
      - 'Melee Attack Roll: `atk:INT+PB`, reach 5 ft. `dmg:3d6+INT` Cold damage, and the target has the Paralyzed condition until the start of the lich''s next turn.'
    attacks:
      - name: Paralyzing Touch attack
        type: melee
        bonus: 12
        damage: 3d6+5
        damage_type: cold
        range:
          reach: 5
  - name: Spellcasting
    entries:
      - |-
        The lich casts one of the following spells, using Intelligence as the spellcasting ability (spell save `dc:INT`):

        - **At Will:** Detect Magic, Detect Thoughts, Dispel Magic, Fireball, Invisibility, Lightning Bolt, Mage Hand, Prestidigitation
        - **2/Day Each:** Animate Dead, Dimension Door, Plane Shift
        - **1/Day Each:** Chain Lightning, Finger of Death, Power Word Kill, Scrying
reactions:
  - name: Protective Magic
    entries:
      - The lich casts Counterspell or Shield in response to the spell's trigger, using the same spellcasting ability as Spellcasting.
legendary_actions:
  - name: Deathly Teleport
    entries:
      - The lich teleports up to 60 feet to an unoccupied space it can see, and each creature within 10 feet of the space it left takes `dmg:2d10` Necrotic damage.
  - name: Disrupt Life
    entries:
      - 'Constitution Saving Throw: `dc:20`, each creature that isn''t an Undead in a 20-foot Emanation originating from the lich. Failure: `dmg:9d6` Necrotic damage. Success: Half damage. Failure or Success: The lich can''t take this action again until the start of its next turn.'
  - name: Frightening Gaze
    entries:
      - The lich casts Fear, using the same spellcasting ability as Spellcasting. The lich can't take this action again until the start of its next turn.
traits:
  - name: Legendary Resistance (4/Day, or 5/Day in Lair)
    entries:
      - If the lich fails a saving throw, it can choose to succeed instead.
  - name: Spirit Jar
    entries:
      - If destroyed, the lich reforms in `dice:1d10` days if it has a spirit jar, reviving with all its Hit Points. The new body appears in an unoccupied space within the lich's lair.
cr: '21'
saves:
  str: 0
  dex: 10
  con: 10
  int: 12
  wis: 9
  cha: 3
skills:
  arcana: 19
  history: 12
  insight: 9
  perception: 9
alignment: neutral evil
passive_perception: 19
legendary_resistance: 4
```
