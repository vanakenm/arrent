---
archivist: true
entity_type: monster
slug: srd-2024_monster_gibbering-mouther
name: Gibbering Mouther
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.426Z'
---

```monster
slug: srd-2024_monster_gibbering-mouther
name: Gibbering Mouther
edition: '2024'
source: SRD 5.2
size: medium
type: aberration
ac:
  - ac: 9
    from:
      - natural armor
hp:
  average: 52
  formula: 7d8 + 21
speed:
  walk: 20
  swim: 20
abilities:
  str: 10
  dex: 8
  con: 16
  int: 3
  wis: 10
  cha: 6
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Bite
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d6` Piercing damage. If the target is a Medium or smaller creature, it has the Prone condition. The target dies if it is reduced to 0 Hit Points by this attack. Its body is then absorbed into the mouther, leaving only equipment behind.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 2
        damage: 2d6
        damage_type: piercing
        range:
          reach: 5
  - name: Blinding Spittle
    entries:
      - 'Dexterity Saving Throw: `dc:10`, each creature in a 10-foot-radius Sphere [Area of Effect]|XPHB|Sphere centered on a point within 30 feet. Failure: `dmg:2d6` Radiant damage, and the target has the Blinded condition until the end of the mouther''s next turn.'
    recharge:
      type: recharge_on_roll
      param: 5
reactions: []
legendary_actions: []
traits:
  - name: Aberrant Ground
    entries:
      - The ground in a 10-foot Emanation originating from the mouther is Difficult Terrain.
  - name: Gibbering
    entries:
      - |-
        The mouther babbles incoherently while it doesn't have the Incapacitated condition. Wisdom Saving Throw: `dc:WIS`, any creature that starts its turn within 20 feet of the mouther while it is babbling. Failure: The target rolls `dice:1d8` to determine what it does during the current turn:

        - 1-4: The target does nothing.
        - 5-6: The target takes no action or Bonus Action and uses all its movement to move in a random direction.
        - 7-8: The target makes a melee attack against a randomly determined creature within its reach or does nothing if it can't make such an attack.
cr: '2'
saves:
  str: 0
  dex: -1
  con: 3
  int: -4
  wis: 0
  cha: -2
alignment: chaotic neutral
passive_perception: 10
```
