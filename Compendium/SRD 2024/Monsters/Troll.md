---
archivist: true
entity_type: monster
slug: srd-2024_monster_troll
name: Troll
compendium: SRD 2024
source: SRD 5.2
archivist_compendium_imported_at: '2026-07-23T06:27:54.449Z'
---

```monster
slug: srd-2024_monster_troll
name: Troll
edition: '2024'
source: SRD 5.2
size: large
type: giant
ac:
  - ac: 15
    from:
      - natural armor
hp:
  average: 94
  formula: 9d10 + 45
speed:
  walk: 30
abilities:
  str: 18
  dex: 13
  con: 20
  int: 7
  wis: 9
  cha: 7
senses:
  - darkvision 60 ft.
languages:
  - Giant
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The troll makes three Rend attacks.
  - name: Charge
    entries:
      - The troll moves up to half its Speed straight toward an enemy it can see.
  - name: Rend
    entries:
      - 'Melee Attack Roll: `atk:STR+PB`, reach 10 ft. `dmg:2d6+STR` Slashing damage.'
    attacks:
      - name: Rend attack
        type: melee
        bonus: 7
        damage: 2d6+4
        damage_type: slashing
        range:
          reach: 10
reactions: []
legendary_actions: []
traits:
  - name: Loathsome Limbs (4/Day)
    entries:
      - If the troll ends any turn Bloodied and took 15+ Slashing damage during that turn, one of the troll's limbs is severed, falls into the troll's space, and becomes a Troll Limb. The limb acts immediately after the troll's turn. The troll has 1 Exhaustion level for each missing limb, and it grows replacement limbs the next time it regains Hit Points.
  - name: Regeneration
    entries:
      - The troll regains 15 Hit Points at the start of each of its turns. If the troll takes Acid or Fire damage, this trait doesn't function on the troll's next turn. The troll dies only if it starts its turn with 0 Hit Points and doesn't regenerate.
cr: '5'
saves:
  str: 4
  dex: 1
  con: 5
  int: -2
  wis: -1
  cha: -2
skills:
  perception: 5
alignment: chaotic evil
passive_perception: 15
```
