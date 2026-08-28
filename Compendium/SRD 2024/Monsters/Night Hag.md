---
archivist: true
entity_type: monster
slug: srd-2024_monster_night-hag
name: Night Hag
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.436Z'
---

```monster
slug: srd-2024_monster_night-hag
name: Night Hag
edition: '2024'
source: SRD 5.2
size: medium
type: fiend
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 112
  formula: 15d8 + 45
speed:
  walk: 30
abilities:
  str: 18
  dex: 15
  con: 16
  int: 16
  wis: 14
  cha: 16
senses:
  - darkvision 120 ft.
languages:
  - Abyssal
  - Common
  - Infernal
  - Primordial
damage_vulnerabilities: []
damage_resistances:
  - cold
  - fire
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The hag makes two Claw attacks.
  - name: Shape-Shift
    entries:
      - The hag shape-shifts into a Small or Medium Humanoid, or it returns to its true form. Other than its size, its game statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed.
  - name: Claw
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 5 ft. `dmg:2d8+STR` Slashing damage.'
    attacks:
      - name: Claw attack
        type: melee
        bonus: 7
        damage: 2d8+4
        damage_type: slashing
        range:
          reach: 5
  - name: Spellcasting
    entries:
      - |-
        The hag casts one of the following spells, requiring no Material components and using Intelligence as the spellcasting ability (spell save `dc:INT`):

        - **At Will:** Detect Magic, Etherealness, Magic Missile
        - **2/Day Each:** Phantasmal Killer, Plane Shift
  - name: Nightmare Haunting
    entries:
      - |-
        While on the Ethereal Plane, the hag casts Dream, using the same spellcasting ability as Spellcasting. Only the hag can serve as the spell's messenger, and the target must be a creature the hag can see on the Material Plane. The spell fails and is wasted if the target is under the effect of the Protection from Evil and Good spell or within a Magic Circle spell. If the target takes damage from the Dream spell, the target's Hit Point maximum decreases by an amount equal to that damage. If the spell kills the target, its soul is trapped in the hag's soul bag, and the target can't be raised from the dead until its soul is released.

        - **At Will:**
        - **1/Day Each:** Dream, Protection from Evil and Good, Magic Circle
    recharge:
      type: per_day
      param: 1
reactions: []
legendary_actions: []
traits:
  - name: Magic Resistance
    entries:
      - The hag has Advantage on saving throws against spells and other magical effects.
  - name: Soul Bag
    entries:
      - The hag has a soul bag. While holding or carrying the bag, the hag can use its Nightmare Haunting action. The bag has AC 15, HP 20, and Resistance to all damage. The bag turns to dust if reduced to 0 Hit Points. If the bag is destroyed, any souls the bag is holding are released. The hag can create a new bag after 7 days.
cr: '5'
saves:
  str: 4
  dex: 2
  con: 3
  int: 3
  wis: 2
  cha: 3
skills:
  deception: 6
  insight: 5
  perception: 5
  stealth: 5
alignment: neutral evil
passive_perception: 15
```
