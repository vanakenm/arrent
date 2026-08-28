---
archivist: true
entity_type: monster
slug: srd-5e_monster_darkmantle
name: Darkmantle
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.986Z'
---

```monster
slug: srd-5e_monster_darkmantle
name: Darkmantle
edition: '2014'
source: SRD 5.1
size: small
type: monstrosity
ac:
  - ac: 11
hp:
  average: 22
  formula: 5d6+5
speed:
  walk: 10
  fly: 30
abilities:
  str: 16
  dex: 12
  con: 13
  int: 2
  wis: 10
  cha: 5
senses:
  - blindsight 60 ft.
languages: []
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Crush
    entries:
      - |-
        Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one creature. Hit: `dmg:1d6+STR` bludgeoning damage, and the darkmantle attaches to the target. If the target is Medium or smaller and the darkmantle has advantage on the attack roll, it attaches by engulfing the target's head, and the target is also blinded and unable to breathe while the darkmantle is attached in this way.
        While attached to the target, the darkmantle can attack no other creature except the target but has advantage on its attack rolls. The darkmantle's speed also becomes 0, it can't benefit from any bonus to its speed, and it moves with the target.
        A creature can detach the darkmantle by making a successful `dc:STR` Strength check as an action. On its turn, the darkmantle can detach itself from the target by using 5 feet of movement.
    attacks:
      - name: Crush attack
        type: melee
        bonus: 5
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
  - name: Darkness Aura
    entries:
      - A 15-foot radius of magical darkness extends out from the darkmantle, moves with it, and spreads around corners. The darkness lasts as long as the darkmantle maintains concentration, up to 10 minutes (as if concentrating on a spell). Darkvision can't penetrate this darkness, and no natural light can illuminate it. If any of the darkness overlaps with an area of light created by a spell of 2nd level or lower, the spell creating the light is dispelled.
    recharge:
      type: per_day
      param: 1
reactions: []
legendary_actions: []
traits:
  - name: Echolocation
    entries:
      - The darkmantle can't use its blindsight while deafened.
  - name: False Appearance
    entries:
      - While the darkmantle remains motionless, it is indistinguishable from a cave formation such as a stalactite or stalagmite.
cr: '0.5'
skills:
  stealth: 3
alignment: unaligned
passive_perception: 10
```
