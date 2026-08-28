---
archivist: true
entity_type: monster
slug: srd-5e_monster_noble
name: Noble
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.008Z'
---

```monster
slug: srd-5e_monster_noble
name: Noble
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 15
    from:
      - breastplate
hp:
  average: 9
  formula: 2d8
speed:
  walk: 30
abilities:
  str: 11
  dex: 12
  con: 11
  int: 12
  wis: 14
  cha: 16
senses: []
languages:
  - any two languages
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Rapier
    entries:
      - 'Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one target. Hit: `dmg:1d8+DEX` piercing damage.'
    attacks:
      - name: Rapier attack
        type: melee
        bonus: 3
        damage: 1d8
        damage_type: thunder
        range:
          reach: 5
reactions:
  - name: Parry
    entries:
      - The noble adds 2 to its AC against one melee attack that would hit it. To do so, the noble must see the attacker and be wielding a melee weapon.
legendary_actions: []
traits: []
cr: '0.125'
skills:
  deception: 5
  insight: 4
  persuasion: 5
alignment: any alignment
passive_perception: 12
```
