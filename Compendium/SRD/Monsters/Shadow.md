---
archivist: true
entity_type: monster
slug: shadow
name: Shadow
compendium: SRD
---

```monster
name: Shadow
size: Medium
type: Undead
alignment: chaotic evil
ac:
  - ac: 12
hp:
  average: 16
  formula: 3d8+3
speed:
  walk: 40
abilities:
  str: 6
  dex: 14
  con: 13
  int: 6
  wis: 10
  cha: 8
skills:
  stealth: 4
senses:
  - darkvision 60 ft.
passive_perception: 10
damage_vulnerabilities:
  - radiant
damage_resistances:
  - acid
  - cold
  - fire
  - lightning
  - thunder; bludgeoning
  - piercing
  - and slashing from nonmagical attacks
damage_immunities:
  - necrotic
  - poison
condition_immunities:
  - exhaustion
  - frightened
  - grappled
  - paralyzed
  - petrified
  - poisoned
  - prone
  - restrained
cr: 1/2
traits:
  - name: Amorphous
    entries:
      - The shadow can move through a space as narrow as 1 inch wide without squeezing.
  - name: Shadow Stealth
    entries:
      - While in dim light or darkness, the shadow can take the Hide action as a bonus action.
  - name: Sunlight Weakness
    entries:
      - While in sunlight, the shadow has disadvantage on attack rolls, ability checks, and saving throws.
actions:
  - name: Strength Drain
    entries:
      - |-
        Melee Weapon Attack: `atk:DEX`, reach 5 ft., one creature. Hit: `damage:2d6+DEX` necrotic damage, and the target's Strength score is reduced by `dice:1d4`. The target dies if this reduces its Strength to 0. Otherwise, the reduction lasts until the target finishes a short or long rest.
        If a non-evil humanoid dies from this attack, a new shadow rises from the corpse `dice:1d4` hours later.
```
