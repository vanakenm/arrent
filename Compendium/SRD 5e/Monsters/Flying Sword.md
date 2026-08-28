---
archivist: true
entity_type: monster
slug: srd-5e_monster_flying-sword
name: Flying Sword
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.991Z'
---

```monster
slug: srd-5e_monster_flying-sword
name: Flying Sword
edition: '2014'
source: SRD 5.1
size: small
type: construct
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 17
  formula: 5d6
speed:
  fly: 50
abilities:
  str: 12
  dex: 15
  con: 11
  int: 1
  wis: 5
  cha: 1
senses:
  - blindsight 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - poison
  - psychic
condition_immunities:
  - blinded
  - charmed
  - deafened
  - frightened
  - paralyzed
  - petrified
  - poisoned
actions:
  - name: Longsword
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d8+STR` slashing damage.'
    attacks:
      - name: Longsword attack
        type: melee
        bonus: 3
        damage: 1d8
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Antimagic Susceptibility
    entries:
      - The sword is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the sword must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute.
  - name: False Appearance
    entries:
      - While the sword remains motionless and isn't flying, it is indistinguishable from a normal sword.
cr: '0.25'
saves:
  dex: 4
subtype: Animated Objects
alignment: unaligned
passive_perception: 7
```
