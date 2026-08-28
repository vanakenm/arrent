---
archivist: true
entity_type: monster
slug: srd-5e_monster_balor
name: Balor
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.980Z'
---

```monster
slug: srd-5e_monster_balor
name: Balor
edition: '2014'
source: SRD 5.1
size: huge
type: fiend
ac:
  - ac: 19
    from:
      - natural armor
hp:
  average: 262
  formula: 21d12+126
speed:
  walk: 40
  fly: 80
abilities:
  str: 26
  dex: 15
  con: 22
  int: 20
  wis: 16
  cha: 22
senses:
  - truesight 120 ft.
languages:
  - Abyssal
  - telepathy 120 ft.
damage_vulnerabilities: []
damage_resistances:
  - bludgeoning
  - cold
  - lightning
  - piercing
  - slashing
damage_immunities:
  - fire
  - poison
condition_immunities:
  - poisoned
actions:
  - name: Multiattack
    entries:
      - 'The balor makes two attacks: one with its longsword and one with its whip.'
  - name: Longsword
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:3d8+STR` slashing damage plus `dmg:3d8` lightning damage. If the balor scores a critical hit, it rolls damage dice three times, instead of twice.'
    attacks:
      - name: Longsword attack
        type: melee
        bonus: 14
        damage: 3d8
        damage_type: thunder
        range:
          reach: 10
  - name: Whip
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 30 ft., one target. Hit: `dmg:2d6+STR` slashing damage plus `dmg:3d6` fire damage, and the target must succeed on a `dc:20` Strength saving throw or be pulled up to 25 feet toward the balor.'
    attacks:
      - name: Whip attack
        type: melee
        bonus: 14
        damage: 2d6
        damage_type: thunder
        range:
          reach: 30
  - name: Teleport
    entries:
      - The balor magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.
  - name: 'Variant: Summon Demon'
    entries:
      - |-
        The demon chooses what to summon and attempts a magical summoning.
        A balor has a 50 percent chance of summoning `dice:1d8` vrocks, `dice:1d6` hezrous, `dice:1d4` glabrezus, `dice:1d3` nalfeshnees, `dice:1d2` mariliths, or one goristro.
        A summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.
    recharge:
      type: per_day
      param: 1
reactions: []
legendary_actions: []
traits:
  - name: Death Throes
    entries:
      - When the balor dies, it explodes, and each creature within 30 feet of it must make a `dc:20` Dexterity saving throw, taking `dmg:20d6` fire damage on a failed save, or half as much damage on a successful one. The explosion ignites flammable objects in that area that aren't being worn or carried, and it destroys the balor's weapons.
  - name: Fire Aura
    entries:
      - At the start of each of the balor's turns, each creature within 5 feet of it takes `dmg:3d6` fire damage, and flammable objects in the aura that aren't being worn or carried ignite. A creature that touches the balor or hits it with a melee attack while within 5 feet of it takes `dmg:3d6` fire damage.
  - name: Magic Resistance
    entries:
      - The balor has advantage on saving throws against spells and other magical effects.
  - name: Magic Weapons
    entries:
      - The balor's weapon attacks are magical.
cr: '19'
saves:
  str: 14
  con: 12
  wis: 9
  cha: 12
subtype: Demons
alignment: chaotic evil
passive_perception: 13
```
