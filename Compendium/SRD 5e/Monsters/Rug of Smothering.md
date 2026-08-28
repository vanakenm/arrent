---
archivist: true
entity_type: monster
slug: srd-5e_monster_rug-of-smothering
name: Rug of Smothering
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.013Z'
---

```monster
slug: srd-5e_monster_rug-of-smothering
name: Rug of Smothering
edition: '2014'
source: SRD 5.1
size: large
type: construct
ac:
  - ac: 12
hp:
  average: 33
  formula: 6d10
speed:
  walk: 10
abilities:
  str: 17
  dex: 14
  con: 10
  int: 1
  wis: 3
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
  - name: Smother
    entries:
      - 'Melee Weapon Attack: `atk:+5`, reach 5 ft., one Medium or smaller creature. Hit: The creature is grappled (escape `dc:STR`). Until this grapple ends, the target is restrained, blinded, and at risk of suffocating, and the rug can''t smother another target. In addition, at the start of each of the target''s turns, the target takes `dmg:2d6+STR` bludgeoning damage.'
    attacks:
      - name: Smother attack
        type: melee
        bonus: 5
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Antimagic Susceptibility
    entries:
      - The rug is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the rug must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute.
  - name: Damage Transfer
    entries:
      - While it is grappling a creature, the rug takes only half the damage dealt to it, and the creature grappled by the rug takes the other half.
  - name: False Appearance
    entries:
      - While the rug remains motionless, it is indistinguishable from a normal rug.
cr: '2'
subtype: Animated Objects
alignment: unaligned
passive_perception: 6
```
