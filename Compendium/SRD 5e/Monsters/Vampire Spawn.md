---
archivist: true
entity_type: monster
slug: srd-5e_monster_vampire-spawn
name: Vampire Spawn
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.022Z'
---

```monster
slug: srd-5e_monster_vampire-spawn
name: Vampire Spawn
edition: '2014'
source: SRD 5.1
size: medium
type: undead
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
senses:
  - darkvision 60 ft.
languages:
  - the languages it knew in life
damage_vulnerabilities: []
damage_resistances:
  - bludgeoning
  - necrotic
  - piercing
  - slashing
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The vampire makes two attacks, only one of which can be a bite attack.
  - name: Bite
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Hit: `dmg:1d6+STR` piercing damage plus `dmg:2d6` necrotic damage. The target''s hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.'
    attacks:
      - name: Bite attack
        type: melee
        bonus: 6
        damage: 1d6
        damage_type: thunder
        range:
          reach: 5
  - name: Claws
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one creature. Hit: `dmg:2d4+STR` slashing damage. Instead of dealing damage, the vampire can grapple the target (escape `dc:13`).'
    attacks:
      - name: Claws attack
        type: melee
        bonus: 6
        damage: 2d4
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
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
cr: '5'
saves:
  dex: 6
  wis: 3
skills:
  perception: 3
  stealth: 6
subtype: Vampires
alignment: neutral evil
passive_perception: 13
```
