---
archivist: true
entity_type: monster
slug: srd-5e_monster_doppelganger
name: Doppelganger
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.988Z'
---

```monster
slug: srd-5e_monster_doppelganger
name: Doppelganger
edition: '2014'
source: SRD 5.1
size: medium
type: monstrosity
ac:
  - ac: 14
hp:
  average: 52
  formula: 8d8+16
speed:
  walk: 30
abilities:
  str: 11
  dex: 18
  con: 14
  int: 11
  wis: 12
  cha: 14
senses:
  - darkvision 60 ft.
languages:
  - Common
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities:
  - charmed
actions:
  - name: Multiattack
    entries:
      - The doppelganger makes two melee attacks.
  - name: Slam
    entries:
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one target. Hit: `dmg:1d6+DEX` bludgeoning damage.'
    attacks:
      - name: Slam attack
        type: melee
        bonus: 6
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
  - name: Read Thoughts
    entries:
      - The doppelganger magically reads the surface thoughts of one creature within 60 ft. of it. The effect can penetrate barriers, but 3 ft. of wood or dirt, 2 ft. of stone, 2 inches of metal, or a thin sheet of lead blocks it. While the target is in range, the doppelganger can continue reading its thoughts, as long as the doppelganger's concentration isn't broken (as if concentrating on a spell). While reading the target's mind, the doppelganger has advantage on Wisdom (Insight) and Charisma (Deception, Intimidation, and Persuasion) checks against the target.
reactions: []
legendary_actions: []
traits:
  - name: Ambusher
    entries:
      - The doppelganger has advantage on attack rolls against any creature it has surprised.
  - name: Shapechanger
    entries:
      - The doppelganger can use its action to polymorph into a Small or Medium humanoid it has seen, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.
  - name: Surprise Attack
    entries:
      - If the doppelganger surprises a creature and hits it with an attack during the first round of combat, the target takes an extra `dmg:3d6` damage from the attack.
cr: '3'
skills:
  deception: 6
  insight: 3
alignment: neutral
passive_perception: 11
```
