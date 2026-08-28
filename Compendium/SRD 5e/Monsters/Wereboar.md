---
archivist: true
entity_type: monster
slug: srd-5e_monster_wereboar
name: Wereboar
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.024Z'
---

```monster
slug: srd-5e_monster_wereboar
name: Wereboar
edition: '2014'
source: SRD 5.1
size: medium
type: humanoid
ac:
  - ac: 10
    from:
      - 10 in humanoid form, 11 (natural armor) in boar or hybrid form
hp:
  average: 78
  formula: 12d8+24
speed:
  walk: 30
abilities:
  str: 17
  dex: 10
  con: 15
  int: 10
  wis: 11
  cha: 8
senses: []
languages:
  - Common (can't speak in boar form)
damage_vulnerabilities: []
damage_resistances: []
damage_immunities:
  - bludgeoning
  - piercing
  - slashing
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The wereboar makes two attacks, only one of which can be with its tusks.
  - name: Maul
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` bludgeoning damage.'
    attacks:
      - name: Maul attack
        type: melee
        bonus: 5
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
  - name: Tusks
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d6+STR` slashing damage. If the target is a humanoid, it must succeed on a `dc:CON` Constitution saving throw or be cursed with wereboar lycanthropy.'
    attacks:
      - name: Tusks attack
        type: melee
        bonus: 5
        damage: 2d6
        damage_type: thunder
        range:
          reach: 5
reactions: []
legendary_actions: []
traits:
  - name: Charge (Boar or Hybrid Form Only)
    entries:
      - If the wereboar moves at least 15 feet straight toward a target and then hits it with its tusks on the same turn, the target takes an extra `dmg:2d6` slashing damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.
  - name: Relentless (Recharges after a Short or Long Rest)
    entries:
      - If the wereboar takes 14 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead.
  - name: Shapechanger
    entries:
      - The wereboar can use its action to polymorph into a boar-humanoid hybrid or into a boar, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.
cr: '4'
skills:
  perception: 2
subtype: Lycanthropes
alignment: neutral evil
passive_perception: 12
```
