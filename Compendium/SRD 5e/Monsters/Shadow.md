---
archivist: true
entity_type: monster
slug: srd-5e_monster_shadow
name: Shadow
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.016Z'
---

```monster
slug: srd-5e_monster_shadow
name: Shadow
edition: '2014'
source: SRD 5.1
size: medium
type: undead
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
senses:
  - darkvision 60 ft.
languages: []
damage_vulnerabilities:
  - radiant
damage_resistances:
  - acid
  - bludgeoning
  - cold
  - fire
  - lightning
  - piercing
  - slashing
  - thunder
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
actions:
  - name: Strength Drain
    entries:
      - |-
        Melee Weapon Attack: `atk:DEX+PB`, reach 5 ft., one creature. Hit: `dmg:2d6+DEX` necrotic damage, and the target's Strength score is reduced by `dice:1d4`. The target dies if this reduces its Strength to 0. Otherwise, the reduction lasts until the target finishes a short or long rest.
        If a non-evil humanoid dies from this attack, a new shadow rises from the corpse `dice:1d4` hours later.
    attacks:
      - name: Strength Drain attack
        type: melee
        bonus: 4
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
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
cr: '0.5'
skills:
  stealth: 4
alignment: chaotic evil
passive_perception: 10
```
