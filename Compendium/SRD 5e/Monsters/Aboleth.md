---
archivist: true
entity_type: monster
slug: srd-5e_monster_aboleth
name: Aboleth
compendium: SRD 5e
source: SRD 5.1
archivist_compendium_imported_at: '2026-07-23T06:27:53.969Z'
---

```monster
slug: srd-5e_monster_aboleth
name: Aboleth
edition: '2014'
source: SRD 5.1
size: large
type: aberration
ac:
  - ac: 17
    from:
      - natural armor
hp:
  average: 135
  formula: 18d10+36
speed:
  walk: 10
  swim: 40
abilities:
  str: 21
  dex: 9
  con: 15
  int: 18
  wis: 15
  cha: 18
senses:
  - darkvision 120 ft.
languages:
  - Deep Speech
  - telepathy 120 ft.
damage_vulnerabilities: []
damage_resistances: []
damage_immunities: []
condition_immunities: []
actions:
  - name: Multiattack
    entries:
      - The aboleth makes three tentacle attacks.
  - name: Tentacle
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:2d6+STR` bludgeoning damage. If the target is a creature, it must succeed on a `dc:CON` Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature''s skin becomes translucent and slimy, the creature can''t regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes `dmg:1d12` acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed.'
    attacks:
      - name: Tentacle attack
        type: melee
        bonus: 9
        damage: 2d6
        damage_type: thunder
        range:
          reach: 10
  - name: Tail
    entries:
      - 'Melee Weapon Attack: `atk:STR+PB`, reach 10 ft., one target. Hit: `dmg:3d6+STR` bludgeoning damage.'
    attacks:
      - name: Tail attack
        type: melee
        bonus: 9
        damage: 3d6
        damage_type: thunder
        range:
          reach: 10
  - name: Enslave
    entries:
      - |-
        The aboleth targets one creature it can see within 30 ft. of it. The target must succeed on a `dc:WIS` Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance.
        Whenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.
    recharge:
      type: per_day
      param: 3
reactions: []
legendary_actions:
  - name: Detect
    entries:
      - The aboleth makes a Wisdom (Perception) check.
  - name: Tail Swipe
    entries:
      - The aboleth makes one tail attack.
  - name: Psychic Drain
    entries:
      - One creature charmed by the aboleth takes `dmg:3d6` psychic damage, and the aboleth regains hit points equal to the damage the creature takes.
traits:
  - name: Amphibious
    entries:
      - The aboleth can breathe air and water.
  - name: Mucous Cloud
    entries:
      - While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 ft. of it must make a `dc:CON` Constitution saving throw. On a failure, the creature is diseased for `dice:1d4` hours. The diseased creature can breathe only underwater.
  - name: Probing Telepathy
    entries:
      - If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature.
cr: '10'
saves:
  con: 6
  int: 8
  wis: 6
skills:
  history: 12
  perception: 10
alignment: lawful evil
passive_perception: 20
```
