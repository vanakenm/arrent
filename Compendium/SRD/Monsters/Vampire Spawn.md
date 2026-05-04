---
archivist: true
entity_type: monster
slug: vampire-spawn
name: Vampire Spawn
compendium: SRD
---

```monster
name: Vampire Spawn
size: Medium
type: Undead
alignment: neutral evil
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 82
  formula: 11d8+33
speed:
  walk: 30
abilities:
  str: 16
  dex: 16
  con: 16
  int: 11
  wis: 10
  cha: 12
saves:
  dex: 6
  wis: 3
skills:
  perception: 3
  stealth: 6
senses:
  - darkvision 60 ft.
passive_perception: 13
languages:
  - the languages it knew in life
damage_resistances:
  - necrotic; bludgeoning
  - piercing
  - and slashing from nonmagical attacks
cr: '5'
traits:
  - name: Regeneration
    entries:
      - The vampire regains 10 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn.
  - name: Spider Climb
    entries:
      - The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.
  - name: Vampire Weaknesses
    entries:
      - |-
        The vampire has the following flaws:
        Forbiddance. The vampire can't enter a residence without an invitation from one of the occupants.
        Harmed by Running Water. The vampire takes 20 acid damage when it ends its turn in running water.
        Stake to the Heart. The vampire is destroyed if a piercing weapon made of wood is driven into its heart while it is incapacitated in its resting place.
        Sunlight Hypersensitivity. The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks.
actions:
  - name: Multiattack
    entries:
      - The vampire makes two attacks, only one of which can be a bite attack.
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Hit: `damage:1d6+STR` piercing damage plus `damage:2d6` necrotic damage. The target''s hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.'
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one creature. Hit: `damage:2d4+STR` slashing damage. Instead of dealing damage, the vampire can grapple the target (escape `dc:13`).'
```
