---
archivist: true
entity_type: monster
slug: srd-5e_monster_weretiger
name: Weretiger
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.024Z'
---

```monster
slug: srd-5e_monster_weretiger
name: Weretiger
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 12
hp:
  average: 120
  formula: 16d8+48
speed:
  walk: 30
abilities:
  str: 17
  dex: 15
  con: 16
  int: 10
  wis: 13
  cha: 11
senses:
  - darkvision 60 ft.
languages:
  - Common (can't speak in tiger form)
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
      - In humanoid form, the weretiger makes two scimitar attacks or two longbow attacks. In hybrid form, it can attack like a humanoid or make two claw attacks.
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d10+STR` piercing damage. If the target is a humanoid, it must succeed on a `dc:CON` Constitution saving throw or be cursed with weretiger lycanthropy.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 5
        damage: 1d10
        damage_type: thunder
        range:
          reach: 5
  - name: Claw
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d8+STR` slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 5
        damage: 1d8
        damage_type: thunder
        range:
          reach: 5
  - name: Scimitar
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d6+STR` slashing damage.'
    attacks:
      - name: Scimitar attack
        type: melee
        bonus: 5
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
  - name: Longbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX+PB`, range 150/600 ft., one target. Hit: `dmg:1d8+DEX` piercing damage.'
    attacks:
      - name: Longbow attack
        type: ranged
        bonus: 4
        damage: 1d8
        damage_type: thunder
        range:
          normal: 150
          long: 600
reactions: []
legendary_actions: []
traits:
  - name: Keen Hearing and Smell
    entries:
      - The weretiger has advantage on Wisdom (Perception) checks that rely on hearing or smell.
  - name: Pounce (Tiger or Hybrid Form Only)
    entries:
      - If the weretiger moves at least 15 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a `dc:14` Strength saving throw or be knocked prone. If the target is prone, the weretiger can make one bite attack against it as a bonus action.
  - name: Shapechanger
    entries:
      - The weretiger can use its action to polymorph into a tiger-humanoid hybrid or into a tiger, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.
cr: '4'
skills:
  perception: 5
  stealth: 4
subtype: Lycanthropes
alignment: neutral
passive_perception: 15
```
