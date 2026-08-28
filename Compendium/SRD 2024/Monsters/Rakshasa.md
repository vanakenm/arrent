---
archivist: true
entity_type: monster
slug: srd-2024_monster_rakshasa
name: Rakshasa
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.440Z'
---

```monster
slug: srd-2024_monster_rakshasa
name: Rakshasa
edition: '2024'
source: SRD 5.2
size: medium
type: fiend
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 221
  formula: 26d8 + 104
speed:
  walk: 40
abilities:
  str: 14
  dex: 17
  con: 18
  int: 13
  wis: 16
  cha: 20
senses:
  - truesight 60 ft.
languages:
  - Common
  - Infernal
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The rakshasa makes three Cursed Touch attacks.
  - name: Cursed Touch
    entries:
      - 'Melee Attack Roll: `atk:CHA+PB`, reach 5 ft. `dmg:2d6+CHA` Slashing damage plus `dmg:3d12` Necrotic damage. If the target is a creature, it is cursed. While cursed, the target gains no benefit from finishing a Short Rest|XPHB|Short or Long Rest.'
    attacks:
      - name: Cursed Touch attack
        type: melee
        bonus: 10
        damage: 2d6+5
        damage_type: slashing
        range:
          reach: 5
  - name: Baleful Command
    entries:
      - 'Wisdom Saving Throw: `dc:18`, each enemy in a 30-foot Emanation originating from the rakshasa. Failure: `dmg:8d6` Psychic damage, and the target has the Frightened and Incapacitated conditions until the start of the rakshasa''s next turn.'
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Spellcasting
    entries:
      - |-
        The rakshasa casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save `dc:CHA`):

        - **At Will:** Detect Magic, Detect Thoughts, Disguise Self, Mage Hand, Minor Illusion
        - **1/Day Each:** Fly, Invisibility, Major Image, Plane Shift
reactions: []
legendary_actions: []
traits:
  - name: Fiendish Restoration
    entries:
      - If the rakshasa dies outside the Nine Hells, its body turns to ichor, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Nine Hells.
  - name: Greater Magic Resistance
    entries:
      - The rakshasa automatically succeeds on saving throws against spells and other magical effects, and the attack rolls of spells automatically miss it. Without the rakshasa's permission, no spell can observe the rakshasa remotely or detect its thoughts, creature type, or alignment.
cr: '13'
saves:
  str: 2
  dex: 3
  con: 4
  int: 1
  wis: 3
  cha: 5
skills:
  deception: 10
  insight: 8
  perception: 8
alignment: lawful evil
passive_perception: 18
```
