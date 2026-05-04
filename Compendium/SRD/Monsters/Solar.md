---
archivist: true
entity_type: monster
slug: solar
name: Solar
compendium: SRD
---

```monster
name: Solar
size: Large
type: Celestial
alignment: lawful good
ac:
  - ac: 21
    from:
      - natural armor
hp:
  average: 243
  formula: 18d10+144
speed:
  walk: 50
  fly: 150
abilities:
  str: 26
  dex: 22
  con: 26
  int: 25
  wis: 25
  cha: 30
saves:
  int: 14
  wis: 14
  cha: 17
skills:
  perception: 14
senses:
  - truesight 120 ft.
passive_perception: 24
languages:
  - all
  - telepathy 120 ft.
damage_resistances:
  - radiant; bludgeoning
  - piercing
  - and slashing from nonmagical attacks
damage_immunities:
  - necrotic
  - poison
condition_immunities:
  - charmed
  - exhaustion
  - frightened
  - poisoned
cr: '21'
traits:
  - name: Angelic Weapons
    entries:
      - The solar's weapon attacks are magical. When the solar hits with any weapon, the weapon deals an extra `damage:6d8` radiant damage (included in the attack).
  - name: Divine Awareness
    entries:
      - The solar knows if it hears a lie.
  - name: Innate Spellcasting
    entries:
      - |-
        The solar's spell casting ability is Charisma (spell save `dc:CHA`). It can innately cast the following spells, requiring no material components:
        At will: detect evil and good, invisibility (self only)
        3/day each: blade barrier, dispel evil and good, resurrection
        1/day each: commune, control weather
  - name: Magic Resistance
    entries:
      - The solar has advantage on saving throws against spells and other magical effects.
actions:
  - name: Multiattack
    entries:
      - The solar makes two greatsword attacks.
  - name: Greatsword
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:4d6+STR` slashing damage plus `damage:6d8` radiant damage.'
  - name: Slaying Longbow
    entries:
      - 'Ranged Weapon Attack: `atk:DEX`, range 150/600 ft., one target. Hit: `damage:2d8+DEX` piercing damage plus `damage:6d8` radiant damage. If the target is a creature that has 190 hit points or fewer, it must succeed on a `dc:15` Constitution saving throw or die.'
  - name: Flying Sword
    entries:
      - The solar releases its greatsword to hover magically in an unoccupied space within 5 ft. of it. If the solar can see the sword, the solar can mentally command it as a bonus action to fly up to 50 ft. and either make one attack against a target or return to the solar's hands. If the hovering sword is targeted by any effect, the solar is considered to be holding it. The hovering sword falls if the solar dies.
  - name: Healing Touch (4/Day)
    entries:
      - The solar touches another creature. The target magically regains 40 (`dice:8d8+4`) hit points and is freed from any curse, disease, poison, blindness, or deafness.
legendary:
  - name: Teleport
    entries:
      - The solar magically teleports, along with any equipment it is wearing or carrying, up to 120 ft. to an unoccupied space it can see.
  - name: Searing Burst (Costs 2 Actions)
    entries:
      - The solar emits magical, divine energy. Each creature of its choice in a 10 -foot radius must make a `dc:23` Dexterity saving throw, taking `damage:4d6` fire damage plus `damage:4d6` radiant damage on a failed save, or half as much damage on a successful one.
  - name: Blinding Gaze (Costs 3 Actions)
    entries:
      - The solar targets one creature it can see within 30 ft. of it. If the target can see it, the target must succeed on a `dc:15` Constitution saving throw or be blinded until magic such as the lesser restoration spell removes the blindness.
legendary_actions: 3
```
