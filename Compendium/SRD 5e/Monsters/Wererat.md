---
archivist: true
entity_type: monster
slug: srd-5e_monster_wererat
name: Wererat
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.024Z'
---

```monster
slug: srd-5e_monster_wererat
name: Wererat
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 12
hp:
  average: 33
  formula: 6d8+6
speed:
  walk: 30
abilities:
  str: 10
  dex: 15
  con: 12
  int: 11
  wis: 10
  cha: 8
senses:
  - darkvision 60 ft.
languages:
  - Common (can't speak in rat form)
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
      - The wererat makes two attacks, only one of which can be a bite.
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one target. Hit: `dmg:1d4+DEX` piercing damage. If the target is a humanoid, it must succeed on a `dc:CON` Constitution saving throw or be cursed with wererat lycanthropy.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 4
        damage: 1d4
        damage_type: thunder
        range:
          reach: 5
  - name: Shortsword
    entries:
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one target. Hit: `dmg:1d6+DEX` piercing damage.'
    attacks:
      - name: Shortsword attack
        type: melee
        bonus: 4
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
  - name: Hand Crossbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX+PB`, range 30/120 ft., one target. Hit: `dmg:1d6+DEX` piercing damage.'
    attacks:
      - name: Hand Crossbow attack
        type: ranged
        bonus: 4
        damage: 1d6
        damage_type: thunder
        range:
          normal: 30
          long: 120
reactions: []
legendary_actions: []
traits:
  - name: Keen Smell
    entries:
      - The wererat has advantage on Wisdom (Perception) checks that rely on smell.
  - name: Shapechanger
    entries:
      - The wererat can use its action to polymorph into a rat-humanoid hybrid or into a giant rat, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.
cr: '2'
skills:
  perception: 2
  stealth: 4
subtype: Lycanthropes
alignment: lawful evil
passive_perception: 12
```
