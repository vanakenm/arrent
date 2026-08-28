---
archivist: true
entity_type: monster
slug: srd-5e_monster_marilith
name: Marilith
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:54.006Z'
---

```monster
slug: srd-5e_monster_marilith
name: Marilith
edition: '2014'
source: SRD 5.1
size: large
type: fiend
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
senses:
  - truesight 120 ft.
languages:
  - Abyssal
  - telepathy 120 ft.
damage_vulnerabilities: []
damage_resistances:
  - bludgeoning
  - cold
  - fire
  - lightning
  - piercing
  - slashing
damage_immunities:
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Multiattack
    entries:
      - 'The marilith can make seven attacks: six with its longswords and one with its tail.'
  - name: Longsword
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 5 ft., one target. Hit: `dmg:2d8+STR` slashing damage.'
    attacks:
      - name: Longsword attack
        type: melee
        bonus: 9
        damage: 2d8
        damage_type: thunder
        range:
          reach: 5
  - name: Tail
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one creature. Hit: `dmg:2d10+STR` bludgeoning damage. If the target is Medium or smaller, it is grappled (escape `dc:19`). Until this grapple ends, the target is restrained, the marilith can automatically hit the target with its tail, and the marilith can''t make tail attacks against other targets.'
    attacks:
      - name: Tail attack
        type: melee
        bonus: 9
        damage: 2d10
        damage_type: thunder
        range:
          reach: 10
  - name: Teleport
    entries:
      - The marilith magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.
  - name: 'Variant: Summon Demon'
    entries:
      - |-
        The demon chooses what to summon and attempts a magical summoning.
        A marilith has a 50 percent chance of summoning `dice:1d6` vrocks, `dice:1d4` hezrous, `dice:1d3` glabrezus, `dice:1d2` nalfeshnees, or one marilith.
        A summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.
    recharge:
      type: per_day
      param: 1
reactions:
  - name: Parry
    entries:
      - The marilith adds 5 to its AC against one melee attack that would hit it. To do so, the marilith must see the attacker and be wielding a melee weapon.
legendary_actions: []
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
cr: '16'
saves:
  str: 9
  con: 10
  wis: 8
  cha: 10
subtype: Demons
alignment: chaotic evil
passive_perception: 13
```
