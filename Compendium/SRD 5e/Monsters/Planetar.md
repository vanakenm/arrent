---
archivist: true
entity_type: monster
slug: srd-5e_monster_planetar
name: Planetar
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.010Z'
---

```monster
slug: srd-5e_monster_planetar
name: Planetar
edition: '2014'
source: SRD 5.1
size: large
type: celestial
ac:
  - ac: 19
    from:
      - natural armor
hp:
  average: 200
  formula: 16d10+112
speed:
  walk: 40
  fly: 120
abilities:
  str: 24
  dex: 20
  con: 24
  int: 19
  wis: 22
  cha: 25
senses:
  - truesight 120 ft.
languages:
  - all
  - telepathy 120 ft.
damage_vulnerabilities: []
damage_resistances:
  - bludgeoning
  - piercing
  - radiant
  - slashing
damage_immunities: []
condition_immunities:
  - charmed
  - exhaustion
  - frightened
actions:
  - name: Multiattack
    entries:
      - The planetar makes two melee attacks.
  - name: Greatsword
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:4d6+STR` slashing damage plus `dmg:5d8` radiant damage.'
    attacks:
      - name: Greatsword attack
        type: melee
        bonus: 12
        damage: 4d6
        damage_type: thunder
        range:
          reach: 5
  - name: Healing Touch
    entries:
      - The planetar touches another creature. The target magically regains 30 (`dice:6d8+3`) hit points and is freed from any curse, disease, poison, blindness, or deafness.
    recharge:
      type: per_day
      param: 4
reactions: []
legendary_actions: []
traits:
  - name: Angelic Weapons
    entries:
      - The planetar's weapon attacks are magical. When the planetar hits with any weapon, the weapon deals an extra `dmg:5d8` radiant damage (included in the attack).
  - name: Divine Awareness
    entries:
      - The planetar knows if it hears a lie.
  - name: Innate Spellcasting
    entries:
      - |-
        The planetar's spellcasting ability is Charisma (spell save `dc:CHA`). The planetar can innately cast the following spells, requiring no material components:
        At will: detect evil and good, invisibility (self only)
        3/day each: blade barrier, dispel evil and good, flame strike, raise dead
        1/day each: commune, control weather, insect plague
  - name: Magic Resistance
    entries:
      - The planetar has advantage on saving throws against spells and other magical effects.
cr: '16'
saves:
  con: 12
  wis: 11
  cha: 12
skills:
  perception: 11
subtype: Angels
alignment: lawful good
passive_perception: 21
```
