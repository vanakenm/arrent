---
archivist: true
entity_type: monster
slug: srd-5e_monster_roper
name: Roper
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.013Z'
---

```monster
slug: srd-5e_monster_roper
name: Roper
edition: '2014'
source: SRD 5.1
size: large
type: monstrosity
ac:
  - ac: 20
    from:
      - natural armor
hp:
  average: 93
  formula: 11d10+33
speed:
  walk: 10
  climb: 10
abilities:
  str: 18
  dex: 8
  con: 17
  int: 7
  wis: 16
  cha: 6
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The roper makes four attacks with its tendrils, uses Reel, and makes one attack with its bite.
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:4d8+STR` piercing damage.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 7
        damage: 4d8
        damage_type: thunder
        range:
          reach: 5
  - name: Tendril
    entries:
      - 'Melee Weapon Attack: `atk:+7`, reach 50 ft., one creature. Hit: The target is grappled (escape `dc:STR`). Until the grapple ends, the target is restrained and has disadvantage on Strength checks and Strength saving throws, and the roper can''t use the same tendril on another target.'
    attacks:
      - name: Tendril attack
        type: melee
        bonus: 7
        range:
          reach: 50
  - name: Reel
    entries:
      - The roper pulls each creature grappled by it up to 25 ft. straight toward it.
reactions: []
legendary_actions: []
traits:
  - name: False Appearance
    entries:
      - While the roper remains motionless, it is indistinguishable from a normal cave formation, such as a stalagmite.
  - name: Grasping Tendrils
    entries:
      - The roper can have up to six tendrils at a time. Each tendril can be attacked (AC 20; 10 hit points; immunity to poison and psychic damage). Destroying a tendril deals no damage to the roper, which can extrude a replacement tendril on its next turn. A tendril can also be broken if a creature takes an action and succeeds on a `dc:STR` Strength check against it.
  - name: Spider Climb
    entries:
      - The roper can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.
cr: '5'
skills:
  perception: 6
  stealth: 5
alignment: neutral evil
passive_perception: 16
```
