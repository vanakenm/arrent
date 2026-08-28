---
archivist: true
entity_type: monster
slug: srd-2024_monster_vampire
name: Vampire
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.450Z'
---

```monster
slug: srd-2024_monster_vampire
name: Vampire
edition: '2024'
source: SRD 5.2
size: small
type: undead
ac:
  - ac: 16
    from:
      - natural armor
hp:
  average: 195
  formula: 23d8 + 92
speed:
  walk: 40
  climb: 40
abilities:
  str: 18
  dex: 18
  con: 18
  int: 17
  wis: 15
  cha: 18
senses:
  - darkvision 120 ft.
languages:
  - Common plus two other languages
damage_vulnerabilities: []
damage_resistances:
  - necrotic
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The vampire makes two Grave Strike attacks and uses Bite.
  - name: Shape-Shift
    entries:
      - If the vampire isn't in sunlight or running water, it shape-shifts into a Tiny bat (Speed 5 ft., Fly Speed 30 ft.) or a Medium cloud of mist (Speed 5 ft., Fly Speed 20 ft. [hover]), or it returns to its vampire form. Anything it is wearing transforms with it. While in bat form, the vampire can't speak. Its game statistics, other than its size and Speed, are unchanged. While in mist form, the vampire can't take any actions, speak, or manipulate objects. It is weightless and can enter an enemy's space and stop there. If air can pass through a space, the mist can do so, but it can't pass through liquid. It has Resistance to all damage, except the damage it takes from sunlight.
  - name: Grave Strike
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:1d8+STR` Bludgeoning damage plus `dmg:2d6` Necrotic damage. If the target is a Large or smaller creature, it has the Grappled condition (escape `dc:14`) from one of two hands.'
    attacks:
      - name: Grave Strike attack
        type: melee
        bonus: 9
        damage: 1d8+4
        damage_type: bludgeoning
        range:
          reach: 5
  - name: Charm
    entries:
      - The vampire casts Charm Person, requiring no spell components and using Charisma as the spellcasting ability (spell save `dc:CHA`), and the duration is 24 hours. The Charmed target is a willing recipient of the vampire's Bite, the damage of which doesn't end the spell. When the spell ends, the target is unaware it was Charmed by the vampire.
    recharge:
      type: recharge_on_roll
      param: 5
  - name: Bite
    entries:
      - 'Constitution Saving Throw: `dc:CON`, one creature within 5 feet that is willing or that has the Grappled, Incapacitated, or Restrained condition. Failure: `dmg:1d4+STR` Piercing damage plus `dmg:3d8` Necrotic damage. The target''s Hit Point maximum decreases by an amount equal to the Necrotic damage taken, and the vampire regains Hit Points equal to that amount. A Humanoid reduced to 0 Hit Points by this damage and then buried rises the following sunset as a Vampire Spawn under the vampire''s control.'
reactions: []
legendary_actions:
  - name: Deathless Strike
    entries:
      - The vampire moves up to half its Speed, and it makes one Grave Strike attack.
  - name: Beguile
    entries:
      - The vampire casts Command, requiring no spell components and using Charisma as the spellcasting ability (spell save `dc:CHA`). The vampire can't take this action again until the start of its next turn.
traits:
  - name: Legendary Resistance (3/Day, or 4/Day in Lair)
    entries:
      - If the vampire fails a saving throw, it can choose to succeed instead.
  - name: Misty Escape
    entries:
      - If the vampire drops to 0 Hit Points outside its resting place, the vampire uses Shape-Shift to become mist (no action required). If it can't use Shape-Shift, it is destroyed. While it has 0 Hit Points in mist form, it can't return to its vampire form, and it must reach its resting place within 2 hours or be destroyed. Once in its resting place, it returns to its vampire form and has the Paralyzed condition until it regains any Hit Points, and it regains 1 Hit Point after spending 1 hour there.
  - name: Spider Climb
    entries:
      - The vampire can climb difficult surfaces, including along ceilings, without needing to make an ability check.
  - name: Vampire Weakness
    entries:
      - |-
        The vampire has these weaknesses:

        - **Forbiddance:** The vampire can't enter a residence without an invitation from an occupant.
        - **Running Water:** The vampire takes 20 Acid damage if it ends its turn in running water.
        - **Stake to the Heart:** If a weapon that deals Piercing damage is driven into the vampire's heart while the vampire has the Incapacitated condition in its resting place, the vampire has the Paralyzed condition until the weapon is removed.
        - **Sunlight:** The vampire takes 20 Radiant damage if it starts its turn in sunlight. While in sunlight, it has Disadvantage on attack rolls and ability checks.
cr: '13'
saves:
  str: 4
  dex: 9
  con: 9
  int: 3
  wis: 7
  cha: 9
skills:
  perception: 7
  stealth: 9
alignment: lawful evil
passive_perception: 17
legendary_resistance: 3
```
