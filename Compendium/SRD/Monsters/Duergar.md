---
archivist: true
entity_type: monster
slug: duergar
name: Duergar
compendium: SRD
---

```monster
name: Duergar
size: Medium
type: Humanoid
subtype: dwarf
alignment: lawful evil
ac:
  - ac: 16
    from:
      - scale mail, shield
hp:
  average: 26
  formula: 4d8+8
speed:
  walk: 25
abilities:
  str: 14
  dex: 11
  con: 14
  int: 11
  wis: 10
  cha: 9
senses:
  - darkvision 120 ft.
passive_perception: 10
languages:
  - Dwarvish
  - Undercommon
damage_resistances:
  - poison
cr: '1'
traits:
  - name: Duergar Resilience
    entries:
      - The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed.
  - name: Sunlight Sensitivity
    entries:
      - While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.
actions:
  - name: Enlarge (Recharges after a Short or Long Rest)
    entries:
      - For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available.
  - name: War Pick
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:1d8+STR` piercing damage, or `damage:2d8+STR` piercing damage while enlarged.'
  - name: Javelin
    entries:
      - 'Melee or Ranged Weapon Attack: `atk:STR`, reach 5 ft. or range 30/120 ft., one target. Hit: `damage:1d6+STR` piercing damage, or `damage:2d6+STR` piercing damage while enlarged.'
  - name: Invisibility (Recharges after a Short or Long Rest)
    entries:
      - The duergar magically turns invisible until it attacks, casts a spell, or uses its Enlarge, or until its concentration is broken, up to 1 hour (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it.
```
