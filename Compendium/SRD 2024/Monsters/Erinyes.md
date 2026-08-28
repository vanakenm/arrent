---
archivist: true
entity_type: monster
slug: srd-2024_monster_erinyes
name: Erinyes
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.418Z'
---

```monster
slug: srd-2024_monster_erinyes
name: Erinyes
edition: '2024'
source: SRD 5.2
size: medium
type: fiend
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 178
  formula: 21d8 + 84
speed:
  walk: 30
  fly: 60
abilities:
  str: 18
  dex: 16
  con: 18
  int: 14
  wis: 14
  cha: 18
senses:
  - truesight 120 ft.
languages:
  - Infernal; telepathy 120 ft.
damage_vulnerabilities: []
damage_resistances:
  - cold
damage_immunities:
  - fire
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Multiattack
    entries:
      - The erinyes makes three Withering Sword attacks and can use Entangling Rope.
  - name: Withering Sword
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d8+STR` Slashing damage plus `dmg:2d10` Necrotic damage.'
    attacks:
      - name: Withering Sword attack
        type: melee
        bonus: 8
        damage: 2d8+4
        damage_type: slashing
        range:
          reach: 5
  - name: Entangling Rope
    entries:
      - 'Strength Saving Throw: `dc:STR`, one creature the erinyes can see within 120 feet. Failure: `dmg:4d6` Force damage, and the target has the Restrained condition until the rope is destroyed, the erinyes uses a Bonus Action to release the target, or the erinyes uses Entangling Rope again.'
reactions:
  - name: Parry
    entries:
      - _Trigger:_ The erinyes is hit by a melee attack roll while holding a weapon. _Response:_ The erinyes adds 4 to its AC against that attack, possibly causing it to miss.
legendary_actions: []
traits:
  - name: Diabolical Restoration
    entries:
      - If the erinyes dies outside the Nine Hells, its body disappears in sulfurous smoke, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Nine Hells.
  - name: Magic Resistance
    entries:
      - The erinyes has Advantage on saving throws against spells and other magical effects.
  - name: Magic Rope
    entries:
      - The erinyes has a magic rope. While bearing it, the erinyes can use the Entangling Rope action. The rope has AC 20, HP 90, and Immunity to Poison and Psychic damage. The rope turns to dust if reduced to 0 Hit Points, if it is 5+ feet away from the erinyes for 1 hour or more, or if the erinyes dies. If the rope is damaged or destroyed, the erinyes can fully restore it when finishing a Short Rest|XPHB|Short or Long Rest.
cr: '12'
saves:
  str: 4
  dex: 7
  con: 8
  int: 2
  wis: 2
  cha: 8
skills:
  perception: 6
  persuasion: 8
alignment: lawful evil
passive_perception: 16
```
