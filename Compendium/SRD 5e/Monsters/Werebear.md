---
archivist: true
entity_type: monster
slug: srd-5e_monster_werebear
name: Werebear
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.024Z'
---

```monster
slug: srd-5e_monster_werebear
name: Werebear
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 10
    from:
      - 10 in humanoid form, 11 (natural armor) in bear and hybrid form
hp:
  average: 135
  formula: 18d8+54
speed:
  walk: 30
abilities:
  str: 19
  dex: 10
  con: 17
  int: 11
  wis: 12
  cha: 12
senses: []
languages:
  - Common (can't speak in bear form)
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
      - In bear form, the werebear makes two claw attacks. In humanoid form, it makes two greataxe attacks. In hybrid form, it can attack like a bear or a humanoid.
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d10+STR` piercing damage. If the target is a humanoid, it must succeed on a `dc:CON` Constitution saving throw or be cursed with were bear lycanthropy.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 7
        damage: 2d10
        damage_type: thunder
        range:
          reach: 5
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d8+STR` slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 7
        damage: 2d8
        damage_type: thunder
        range:
          reach: 5
  - name: Greataxe
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d12+STR` slashing damage.'
    attacks:
      - name: Greataxe attack
        type: melee
        bonus: 7
        damage: 1d12
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Keen Smell
    entries:
      - The werebear has advantage on Wisdom (Perception) checks that rely on smell.
  - name: Shapechanger
    entries:
      - The werebear can use its action to polymorph into a Large bear-humanoid hybrid or into a Large bear, or back into its true form, which is humanoid. Its statistics, other than its size and AC, are the same in each form. Any equipment it. is wearing or carrying isn't transformed. It reverts to its true form if it dies.
cr: '5'
skills:
  perception: 7
subtype: Lycanthropes
alignment: neutral good
passive_perception: 17
```
