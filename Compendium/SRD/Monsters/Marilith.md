---
archivist: true
entity_type: monster
slug: marilith
name: Marilith
compendium: SRD
---

```monster
name: Marilith
size: Large
type: Fiend
subtype: demon
alignment: chaotic evil
ac:
  - ac: 18
    from:
      - natural armor
hp:
  average: 189
  formula: 18d10+90
speed:
  walk: 40
abilities:
  str: 18
  dex: 20
  con: 20
  int: 18
  wis: 16
  cha: 20
saves:
  str: 9
  con: 10
  wis: 8
  cha: 10
senses:
  - truesight 120 ft.
passive_perception: 13
languages:
  - Abyssal
  - telepathy 120 ft.
damage_resistances:
  - cold
  - fire
  - lightning; bludgeoning
  - piercing
  - and slashing from nonmagical attacks
damage_immunities:
  - poison
condition_immunities:
  - poisoned
cr: '16'
traits:
  - name: Magic Resistance
    entries:
      - The marilith has advantage on saving throws against spells and other magical effects.
  - name: Magic Weapons
    entries:
      - The marilith's weapon attacks are magical.
  - name: Reactive
    entries:
      - The marilith can take one reaction on every turn in combat.
actions:
  - name: Multiattack
    entries:
      - 'The marilith can make seven attacks: six with its longswords and one with its tail.'
  - name: Longsword
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 5 ft., one target. Hit: `damage:2d8+STR` slashing damage.'
  - name: Tail
    entries:
      - 'Melee Weapon Attack: `atk:STR`, reach 10 ft., one creature. Hit: `damage:2d10+STR` bludgeoning damage. If the target is Medium or smaller, it is grappled (escape `dc:19`). Until this grapple ends, the target is restrained, the marilith can automatically hit the target with its tail, and the marilith can''t make tail attacks against other targets.'
  - name: Teleport
    entries:
      - The marilith magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.
  - name: 'Variant: Summon Demon (1/Day)'
    entries:
      - |-
        The demon chooses what to summon and attempts a magical summoning.
        A marilith has a 50 percent chance of summoning `dice:1d6` vrocks, `dice:1d4` hezrous, `dice:1d3` glabrezus, `dice:1d2` nalfeshnees, or one marilith.
        A summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.
reactions:
  - name: Parry
    entries:
      - The marilith adds 5 to its AC against one melee attack that would hit it. To do so, the marilith must see the attacker and be wielding a melee weapon.
```
