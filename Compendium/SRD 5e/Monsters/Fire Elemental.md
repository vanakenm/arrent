---
archivist: true
entity_type: monster
slug: srd-5e_monster_fire-elemental
name: Fire Elemental
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.991Z'
---

```monster
slug: srd-5e_monster_fire-elemental
name: Fire Elemental
edition: '2014'
source: SRD 5.1
size: large
type: elemental
ac:
  - ac: 13
hp:
  average: 102
  formula: 12d10+36
speed:
  walk: 50
abilities:
  str: 10
  dex: 17
  con: 16
  int: 6
  wis: 10
  cha: 7
senses:
  - darkvision 60 ft.
languages:
  - Ignan
damage_vulnerabilities: []
damage_resistances:
  - bludgeoning
  - piercing
  - slashing
damage_immunities:
  - fire
  - poison
condition_immunities:
  - exhaustion
  - grappled
  - paralyzed
  - petrified
  - poisoned
  - prone
  - restrained
  - unconscious
actions:
  - name: Multiattack
    entries:
      - The elemental makes two touch attacks.
  - name: Touch
    entries:
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one target. Hit: `dmg:2d6+DEX` fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes `dmg:1d10` fire damage at the start of each of its turns.'
    attacks:
      - name: Touch attack
        type: melee
        bonus: 6
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Fire Form
    entries:
      - The elemental can move through a space as narrow as 1 inch wide without squeezing. A creature that touches the elemental or hits it with a melee attack while within 5 ft. of it takes `dmg:1d10` fire damage. In addition, the elemental can enter a hostile creature's space and stop there. The first time it enters a creature's space on a turn, that creature takes `dmg:1d10` fire damage and catches fire; until someone takes an action to douse the fire, the creature takes `dmg:1d10` fire damage at the start of each of its turns.
  - name: Illumination
    entries:
      - The elemental sheds bright light in a 30-foot radius and dim light in an additional 30 ft..
  - name: Water Susceptibility
    entries:
      - For every 5 ft. the elemental moves in water, or for every gallon of water splashed on it, it takes 1 cold damage.
cr: '5'
subtype: Elementals
alignment: neutral
passive_perception: 10
```
