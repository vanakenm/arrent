---
archivist: true
entity_type: monster
slug: srd-5e_monster_lamia
name: Lamia
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.004Z'
---

```monster
slug: srd-5e_monster_lamia
name: Lamia
edition: '2014'
source: SRD 5.1
size: large
type: monstrosity
ac:
  - ac: 13
    from:
      - natural armor
hp:
  average: 97
  formula: 13d10+26
speed:
  walk: 30
abilities:
  str: 16
  dex: 13
  con: 15
  int: 14
  wis: 15
  cha: 16
senses:
  - darkvision 60 ft.
languages:
  - Abyssal
  - Common
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - 'The lamia makes two attacks: one with its claws and one with its dagger or Intoxicating Touch.'
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d10+STR` slashing damage.'
    attacks:
      - name: Claws attack
        type: melee
        bonus: 5
        damage: 2d10
        damage_type: thunder
        range:
          reach: 5
  - name: Dagger
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d4+STR` piercing damage.'
    attacks:
      - name: Dagger attack
        type: melee
        bonus: 5
        damage: 1d4
        damage_type: thunder
        range:
          reach: 5
  - name: Intoxicating Touch
    entries:
      - 'Melee Spell Attack: `atk:+5`, reach 5 ft., one creature. Hit: The target is magically cursed for 1 hour. Until the curse ends, the target has disadvantage on Wisdom saving throws and all ability checks.'
    attacks:
      - name: Intoxicating Touch attack
        type: melee
        bonus: 5
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Innate Spellcasting
    entries:
      - |-
        The lamia's innate spellcasting ability is Charisma (spell save `dc:CHA`). It can innately cast the following spells, requiring no material components.

        At will: disguise self (any humanoid form), major image
        3/day each: charm person, mirror image, scrying, suggestion
        1/day: geas
cr: '4'
skills:
  deception: 7
  insight: 4
  stealth: 3
alignment: chaotic evil
passive_perception: 12
```
