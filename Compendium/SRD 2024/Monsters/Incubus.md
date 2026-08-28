---
archivist: true
entity_type: monster
slug: srd-2024_monster_incubus
name: Incubus
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.431Z'
---

```monster
slug: srd-2024_monster_incubus
name: Incubus
edition: '2024'
source: SRD 5.2
size: medium
type: fiend
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 66
  formula: 12d8 + 12
speed:
  walk: 30
  fly: 60
abilities:
  str: 8
  dex: 17
  con: 13
  int: 15
  wis: 12
  cha: 20
senses:
  - darkvision 60 ft.
languages:
  - Abyssal
  - Common
  - Infernal; telepathy 60 ft.
damage_vulnerabilities: []
damage_resistances:
  - cold
  - fire
  - poison
  - psychic
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The incubus makes two Restless Touch attacks.
  - name: Nightmare
    entries:
      - 'Wisdom Saving Throw: `dc:15`, one creature the incubus can see within 60 feet. Failure: If the target has 20 Hit Points or fewer, it has the Unconscious condition for 1 hour, until it takes damage, or until a creature within 5 feet of it takes an action to wake it. Otherwise, the target takes `dmg:4d8` Psychic damage.'
    recharge:
      type: recharge_on_roll
      param: 6
  - name: Restless Touch
    entries:
      - 'Melee Attack Roll: `atk:CHA+PB`, reach 5 ft. `dmg:3d6+CHA` Psychic damage, and the target is cursed for 24 hours or until the incubus dies. Until the curse ends, the target gains no benefit from finishing Short Rests.'
    attacks:
      - name: Restless Touch attack
        type: melee
        bonus: 7
        damage: 3d6+5
        damage_type: psychic
        range:
          reach: 5
  - name: Spellcasting
    entries:
      - |-
        The incubus casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save `dc:CHA`):

        - **At Will:** Disguise Self, Etherealness
        - **1/Day Each:** Dream, Hypnotic Pattern
reactions: []
legendary_actions: []
traits:
  - name: Succubus Form
    entries:
      - When the incubus finishes a Long Rest, it can shape-shift into a Succubus, using that stat block instead of this one. Any equipment it's wearing or carrying isn't transformed.
cr: '4'
saves:
  str: -1
  dex: 3
  con: 1
  int: 2
  wis: 1
  cha: 5
skills:
  deception: 9
  insight: 5
  perception: 5
  persuasion: 9
  stealth: 7
alignment: neutral evil
passive_perception: 15
```
