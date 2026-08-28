---
archivist: true
entity_type: monster
slug: srd-5e_monster_bandit-captain
name: Bandit Captain
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.980Z'
---

```monster
slug: srd-5e_monster_bandit-captain
name: Bandit Captain
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 15
    from:
      - studded leather
hp:
  average: 65
  formula: 10d8+20
speed:
  walk: 30
abilities:
  str: 15
  dex: 16
  con: 14
  int: 14
  wis: 11
  cha: 14
senses: []
languages:
  - any two languages
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - 'The captain makes three melee attacks: two with its scimitar and one with its dagger. Or the captain makes two ranged attacks with its daggers.'
  - name: Scimitar
    entries:
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one target. Hit: `dmg:1d6+DEX` slashing damage.'
    attacks:
      - name: Scimitar attack
        type: melee
        bonus: 5
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
  - name: Dagger
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:DEX+PB`, reach 5 ft. or range 20/60 ft., one target. Hit: `dmg:1d4+DEX` piercing damage.'
    attacks:
      - name: Dagger Melee attack
        type: ranged
        bonus: 5
        damage: 1d4
        damage_type: thunder
        range:
          reach: 5
          normal: 20
          long: 60
      - name: Dagger Ranged attack
        type: ranged
        bonus: 5
        damage: 1d4
        damage_type: thunder
        range:
          normal: 20
          long: 60
reactions:
  - name: Parry
    entries:
      - The captain adds 2 to its AC against one melee attack that would hit it. To do so, the captain must see the attacker and be wielding a melee weapon.
legendary_actions: []
traits: []
cr: '2'
saves:
  str: 4
  dex: 5
  wis: 2
skills:
  athletics: 4
  deception: 4
alignment: any non-lawful alignment
passive_perception: 10
```
