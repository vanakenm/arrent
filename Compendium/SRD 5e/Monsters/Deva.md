---
archivist: true
entity_type: monster
slug: srd-5e_monster_deva
name: Deva
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.987Z'
---

```monster
slug: srd-5e_monster_deva
name: Deva
edition: '2014'
source: SRD 5.1
size: medium
type: celestial
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 136
  formula: 16d8+64
speed:
  walk: 30
  fly: 90
abilities:
  str: 18
  dex: 18
  con: 18
  int: 17
  wis: 20
  cha: 20
senses:
  - darkvision 120 ft.
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
      - The deva makes two melee attacks.
  - name: Mace
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:1d6+STR` bludgeoning damage plus `dmg:4d8` radiant damage.'
    attacks:
      - name: Mace attack
        type: melee
        bonus: 8
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
  - name: Healing Touch
    entries:
      - The deva touches another creature. The target magically regains 20 (`dice:4d8+2`) hit points and is freed from any curse, disease, poison, blindness, or deafness.
    recharge:
      type: per_day
      param: 3
  - name: Change Shape
    entries:
      - |-
        The deva magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the deva's choice).
        In a new form, the deva retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and special senses are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks.
reactions: []
legendary_actions: []
traits:
  - name: Angelic Weapons
    entries:
      - The deva's weapon attacks are magical. When the deva hits with any weapon, the weapon deals an extra `dmg:4d8` radiant damage (included in the attack).
  - name: Innate Spellcasting
    entries:
      - |-
        The deva's spellcasting ability is Charisma (spell save `dc:CHA`). The deva can innately cast the following spells, requiring only verbal components:
        At will: detect evil and good
        1/day each: commune, raise dead
  - name: Magic Resistance
    entries:
      - The deva has advantage on saving throws against spells and other magical effects.
cr: '10'
saves:
  wis: 9
  cha: 9
skills:
  insight: 9
  perception: 9
subtype: Angels
alignment: lawful good
passive_perception: 19
```
