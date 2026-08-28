---
archivist: true
entity_type: monster
slug: srd-5e_monster_werewolf
name: Werewolf
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.024Z'
---

```monster
slug: srd-5e_monster_werewolf
name: Werewolf
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 11
    from:
      - 11 in humanoid form, 12 (natural armor) in wolf or hybrid form
hp:
  average: 58
  formula: 9d8+18
speed:
  walk: 30
abilities:
  str: 15
  dex: 13
  con: 14
  int: 10
  wis: 11
  cha: 10
senses: []
languages:
  - Common (can't speak in wolf form)
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - bludgeoning
  - piercing
  - slashing
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - 'The werewolf makes two attacks: two with its spear (humanoid form) or one with its bite and one with its claws (hybrid form).'
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d8+STR` piercing damage. If the target is a humanoid, it must succeed on a `dc:CON` Constitution saving throw or be cursed with werewolf lycanthropy.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 1d8
        damage_type: thunder
        range:
          reach: 5
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one creature. Hit: `dmg:2d4+STR` slashing damage.'
    attacks:
      - name: Claws attack
        type: melee
        bonus: 4
        damage: 2d4
        damage_type: thunder
        range:
          reach: 5
  - name: Spear
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:STR+PB`, reach 5 ft. or range 20/60 ft., one creature. Hit: `dmg:1d6+STR` piercing damage, or `dmg:1d8+STR` piercing damage if used with two hands to make a melee attack.'
    attacks:
      - name: Spear Melee attack
        type: ranged
        bonus: 4
        damage: 1d8
        damage_type: thunder
        range:
          reach: 5
          normal: 20
          long: 60
      - name: Spear Ranged attack
        type: ranged
        bonus: 4
        damage: 1d6
        damage_type: thunder
        range:
          normal: 20
          long: 60
reactions: []
legendary_actions: []
traits:
  - name: Keen Hearing and Smell
    entries:
      - The werewolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.
  - name: Shapechanger
    entries:
      - The werewolf can use its action to polymorph into a wolf-humanoid hybrid or into a wolf, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.
cr: '3'
skills:
  perception: 4
  stealth: 3
subtype: Lycanthropes
alignment: chaotic evil
passive_perception: 14
```
