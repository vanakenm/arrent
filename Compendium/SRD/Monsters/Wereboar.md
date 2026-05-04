---
archivist: true
entity_type: monster
slug: wereboar
name: Wereboar
compendium: SRD
---

```monster
name: Wereboar
size: Medium
type: Humanoid
subtype: human
alignment: neutral evil
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
skills:
  perception: 2
passive_perception: 12
languages:
  - Common (can't speak in boar form)
damage_immunities:
  - bludgeoning
  - piercing
  - and slashing from nonmagical attacks not made with silvered weapons
cr: '4'
traits:
  - name: Shapechanger
    entries:
      - The wereboar can use its action to polymorph into a boar-humanoid hybrid or into a boar, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.
  - name: Charge (Boar or Hybrid Form Only)
    entries:
      - If the wereboar moves at least 15 feet straight toward a target and then hits it with its tusks on the same turn, the target takes an extra `damage:2d6` slashing damage. If the target is a creature, it must succeed on a `dc:STR` Strength saving throw or be knocked prone.
  - name: Relentless (Recharges after a Short or Long Rest)
    entries:
      - If the wereboar takes 14 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead.
actions:
  - name: Multiattack (Humanoid or Hybrid Form Only)
    entries:
      - The wereboar makes two attacks, only one of which can be with its tusks.
  - name: Maul (Humanoid or Hybrid Form Only)
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` bludgeoning damage.'
  - name: Tusks (Boar or Hybrid Form Only)
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d6+STR` slashing damage. If the target is a humanoid, it must succeed on a `dc:CON` Constitution saving throw or be cursed with wereboar lycanthropy.'
```
