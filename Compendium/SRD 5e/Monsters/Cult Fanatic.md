---
archivist: true
entity_type: monster
slug: srd-5e_monster_cult-fanatic
name: Cult Fanatic
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.986Z'
---

```monster
slug: srd-5e_monster_cult-fanatic
name: Cult Fanatic
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 13
    from:
      - leather armor
hp:
  average: 22
  formula: 6d8+6
speed:
  walk: 30
abilities:
  str: 11
  dex: 14
  con: 12
  int: 10
  wis: 13
  cha: 14
senses: []
languages:
  - any one language (usually Common)
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The fanatic makes two melee attacks.
  - name: Dagger
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:DEX+PB`, reach 5 ft. or range 20/60 ft., one creature. Hit: `dmg:1d4+DEX` piercing damage.'
    attacks:
      - name: Dagger Melee attack
        type: ranged
        bonus: 4
        damage: 1d4
        damage_type: thunder
        range:
          reach: 5
          normal: 20
          long: 60
      - name: Dagger Ranged attack
        type: ranged
        bonus: 4
        damage: 1d4
        damage_type: thunder
        range:
          normal: 20
          long: 60
reactions: []
legendary_actions: []
traits:
  - name: Dark Devotion
    entries:
      - The fanatic has advantage on saving throws against being charmed or frightened.
  - name: Spellcasting
    entries:
      - |-
        The fanatic is a 4th-level spellcaster. Its spell casting ability is Wisdom (spell save `dc:WIS`, `atk:+3` with spell attacks). The fanatic has the following cleric spells prepared:

        Cantrips (at will): light, sacred flame, thaumaturgy
        * 1st level (4 slots): command, inflict wounds, shield of faith
        * 2nd level (3 slots): hold person, spiritual weapon
cr: '2'
skills:
  deception: 4
  persuasion: 4
  religion: 2
alignment: any non-good alignment
passive_perception: 11
```
